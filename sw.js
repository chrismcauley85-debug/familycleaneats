// Family Clean Eats — Service Worker
// Bump CACHE_VER whenever you deploy changes to index.html or recipes.js.
// The browser fetches sw.js on every navigation and will install the new SW
// automatically when it sees a different byte, then activate on next load.

const CACHE_VER  = 'v1';
const SHELL_CACHE = `fce-shell-${CACHE_VER}`;
const CDN_CACHE   = `fce-cdn-${CACHE_VER}`;

// ── App shell (same-origin, version-controlled) ──────────────────────────────
// These are served cache-first. Bump CACHE_VER to force a refresh.
const SHELL_URLS = [
  '/familycleaneats/',
  '/familycleaneats/index.html',
  '/familycleaneats/recipes.js',
];

// ── CDN hosts (cache-first; URLs are version-pinned so content never changes) ─
const CDN_HOSTS = new Set([
  'unpkg.com',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
]);

// ── Supabase host (network-only; app has its own localStorage fallback) ───────
const SUPABASE_HOST = 'zjhaaviycdlsqmqjlwwk.supabase.co';

// ── Install: pre-cache the app shell ─────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())   // activate immediately, don't wait for old tabs to close
  );
});

// ── Activate: delete stale caches from previous versions ─────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== SHELL_CACHE && k !== CDN_CACHE)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())   // take control of all open tabs right away
  );
});

// ── Fetch: route by origin ────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Supabase REST API — always go to the network; the app handles failures
  //    gracefully via its existing localStorage fallback in loadMeals().
  if (url.hostname === SUPABASE_HOST) {
    event.respondWith(networkOnly(event.request));
    return;
  }

  // 2. CDN assets (React, Babel, Supabase client, Google Fonts) —
  //    cache-first: serve instantly from cache on repeat visits; add on first fetch.
  //    These URLs are version-pinned (e.g. react@18.3.1) so the cached copy
  //    is always correct and we never need to revalidate.
  if (CDN_HOSTS.has(url.hostname)) {
    event.respondWith(cacheFirst(event.request, CDN_CACHE));
    return;
  }

  // 3. App shell (index.html, recipes.js, any other same-origin assets) —
  //    cache-first. Content only changes when CACHE_VER is bumped and the
  //    new SW pre-caches fresh copies during install.
  if (url.pathname.startsWith('/familycleaneats/')) {
    event.respondWith(cacheFirst(event.request, SHELL_CACHE));
    return;
  }
  // Everything else: default browser behaviour
});

// ── Strategy helpers ──────────────────────────────────────────────────────────

/**
 * Serve from cache if available; otherwise fetch, cache, and return.
 */
async function cacheFirst(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    // Only cache successful, non-opaque responses
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Offline and not in cache — return a minimal offline page for navigation
    if (request.mode === 'navigate') {
      const shell = await cache.match('/familycleaneats/index.html');
      if (shell) return shell;
    }
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

/**
 * Always fetch from network; return a 503 on failure so the app can
 * handle it (it already shows a toast and falls back to localStorage).
 */
async function networkOnly(request) {
  try {
    return await fetch(request);
  } catch {
    return new Response(JSON.stringify({ error: 'offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
