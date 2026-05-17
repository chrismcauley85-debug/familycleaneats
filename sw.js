// Family Clean Eats — Service Worker
// Uses network-first for the app shell so updates are picked up automatically.
// CDN assets remain cache-first (they're version-pinned so never change).

const CACHE_VER   = 'v2';
const SHELL_CACHE  = `fce-shell-${CACHE_VER}`;
const CDN_CACHE    = `fce-cdn-${CACHE_VER}`;

const SHELL_URLS = [
  '/familycleaneats/',
  '/familycleaneats/index.html',
  '/familycleaneats/recipes.js',
];

const CDN_HOSTS = new Set([
  'unpkg.com',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
]);

const SUPABASE_HOST = 'zjhaaviycdlsqmqjlwwk.supabase.co';

// ── Install: pre-cache shell ──────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: clear old caches ────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== SHELL_CACHE && k !== CDN_CACHE)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Supabase — always network
  if (url.hostname === SUPABASE_HOST) {
    event.respondWith(networkOnly(event.request));
    return;
  }

  // CDN assets — cache-first (version-pinned, never change)
  if (CDN_HOSTS.has(url.hostname)) {
    event.respondWith(cacheFirst(event.request, CDN_CACHE));
    return;
  }

  // App shell — NETWORK-FIRST so updates are seen immediately.
  // Falls back to cache when offline.
  if (url.pathname.startsWith('/familycleaneats/')) {
    event.respondWith(networkFirst(event.request, SHELL_CACHE));
    return;
  }
});

// ── Strategies ────────────────────────────────────────────────────────────────

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Offline — serve from cache
    const cached = await cache.match(request);
    if (cached) return cached;
    if (request.mode === 'navigate') {
      const shell = await cache.match('/familycleaneats/index.html');
      if (shell) return shell;
    }
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function cacheFirst(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

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
