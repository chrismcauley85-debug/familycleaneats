/* ── Happy Meals — Recipe Library ── */
/* Edit this file to add, remove or update recipes. */
/* Each recipe needs: id, name, category, subcategory, cookingTime, servings, recipe, ingredients[], notes */

const SAMPLES = [
  // ════════════════════════════════════════════
  //  DINNER
  // ════════════════════════════════════════════

  // ── DUTCH OVEN (5) ───────────────────────────────────────────────
  {id:'d13',name:'Lamb Tagine with Apricots & Almonds',category:'Dinner',subcategory:'Dutchoven',cookingTime:'2 hrs',servings:'5',
   recipe:'Brown lamb chunks in oil, remove. Saute onion until golden. Add garlic, ginger, cumin, coriander, cinnamon and turmeric, cook 1 min. Return lamb. Add stock, honey, cinnamon stick and dried apricots. Cover and braise at 160C for 1.5 hrs until very tender. Scatter toasted almonds, coriander and preserved lemon over to serve. Serve with couscous.',
   ingredients:['1.2 kg lamb shoulder, cubed','150 g dried apricots','100 g blanched almonds, toasted','1 large onion, diced','4 garlic cloves, minced','1 tsp fresh ginger grated','1 tsp ground cumin','1 tsp ground coriander','1/2 tsp turmeric','1/2 tsp ground cinnamon','1 cinnamon stick','2 tbsp honey','400 ml chicken stock','Fresh coriander and preserved lemon to serve','Couscous to serve'],
   notes:'Toast the almonds until properly golden. The sweet-savoury balance of apricot and spice is the soul of this dish.'},

  {id:'d20',name:'Lamb Vindaloo',category:'Dinner',subcategory:'Dutchoven',cookingTime:'1.5 hrs',servings:'5',
   recipe:'Blend chillies, garlic, ginger, vinegar, cumin, mustard seeds and turmeric into a paste. Coat lamb and marinate 2 hrs minimum. Fry onion in oil until deep golden. Add marinated lamb and cook until lightly coloured. Add stock and bring to simmer. Cover and braise at 160C for 1 hr until tender. Adjust heat and tang with extra vinegar.',
   ingredients:['1 kg lamb shoulder, cubed','2 large onions, diced','250 ml chicken stock','2 tbsp oil','Rice to serve','Paste: 6 dried red chillies + 6 garlic cloves + 1 tbsp ginger + 3 tbsp red wine vinegar + 1 tsp cumin + 1 tsp mustard seeds + 1/2 tsp turmeric + 1/2 tsp salt'],
   notes:'Vindaloo is Goan with Portuguese roots. The vinegar tang is the point, not just the heat. Adjust chilli to your tolerance.'},

  {id:'d24',name:'Tuscan Chicken Breast',category:'Dinner',subcategory:'Dutchoven',cookingTime:'40 min',servings:'4',
   recipe:'Season chicken breasts and sear in oil until golden both sides, remove. Fry garlic and sundried tomatoes 1 min. Add spinach and wilt. Pour in cream and chicken stock, stir in parmesan. Return chicken. Simmer gently covered 15 min until chicken is cooked through. Serve immediately with pasta or crusty bread.',
   ingredients:['4 large chicken breasts','3 garlic cloves, minced','100 g sundried tomatoes in oil, sliced','3 cups baby spinach','250 ml thickened cream','150 ml chicken stock','60 g parmesan, grated','1 tsp Italian seasoning','2 tbsp olive oil','Salt and pepper'],
   notes:'Do not let the cream boil hard or it will split. A gentle simmer is all it needs. Works beautifully with gnocchi.'},

  {id:'d27',name:'Greek Lemon Chicken',category:'Dinner',subcategory:'Dutchoven',cookingTime:'1.5 hrs',servings:'5',
   recipe:'Joint whole chicken into 8 pieces. Brown all over in oil, remove. Saute onion and garlic. Deglaze with white wine. Return chicken, add lemon juice, stock, oregano and a whole head of garlic halved crossways. Cover and braise at 180C for 45 min. Remove lid and roast 20 min more to crisp the skin. Squeeze roasted garlic into the sauce.',
   ingredients:['1 whole chicken, jointed into 8 pieces','1 whole garlic bulb, halved crossways','1 large onion, sliced','Juice of 2 lemons','Zest of 1 lemon','150 ml white wine','300 ml chicken stock','2 tsp dried oregano','2 tbsp olive oil','Salt and pepper','Fresh oregano and lemon to serve'],
   notes:'The roasted garlic squeezed into the final sauce makes it extraordinary. Serve with roast potatoes to soak up the lemon pan juices.'},

  {id:'d28',name:'Chicken Adobo',category:'Dinner',subcategory:'Dutchoven',cookingTime:'1 hr',servings:'4',
   recipe:'Combine soy sauce, vinegar, garlic, bay leaves and black pepper. Add chicken breasts and marinate 30 min. Transfer everything to the dutch oven. Bring to boil then simmer covered 25 min. Uncover, increase heat and reduce sauce until thick and glossy, turning chicken to coat. Serve over steamed rice with the concentrated sauce spooned over.',
   ingredients:['4 large chicken breasts','1/2 cup soy sauce','1/2 cup white cane vinegar or rice vinegar','6 garlic cloves, minced','4 bay leaves','1 tsp whole black peppercorns','1 tsp sugar','2 tbsp vegetable oil','Steamed rice to serve','Spring onion to garnish'],
   notes:'Filipino Chicken Adobo. The two-stage cooking is the technique: simmer first, then reduce to caramelise. Tart, salty and deeply savoury.'},

  {id:'d29',name:'Chicken Marsala',category:'Dinner',subcategory:'Dutchoven',cookingTime:'40 min',servings:'4',
   recipe:'Butterfly and pound chicken breasts thin. Season and dredge in flour. Brown in butter and oil until golden, remove. Saute mushrooms until browned. Add garlic, cook 30 sec. Pour in Marsala wine and reduce by half. Add stock. Return chicken. Cover and simmer 10 min. Finish with a knob of cold butter for gloss. Serve over pasta or mash.',
   ingredients:['4 chicken breasts, butterflied and pounded thin','300 g mixed mushrooms, sliced','3 garlic cloves, minced','200 ml Marsala wine','200 ml chicken stock','1/4 cup plain flour','30 g butter plus extra knob','2 tbsp olive oil','Flat-leaf parsley','Salt and pepper'],
   notes:'Marsala wine is a Sicilian fortified wine. Dry Marsala is correct here, not sweet. Brown the mushrooms properly in batches.'},

  // ── BRAISE (4) ───────────────────────────────────────────────────
  {id:'s13',name:'Slow-Braised Lamb Shoulder',category:'Dinner',subcategory:'Braise',cookingTime:'3.5 hrs',servings:'6',
   recipe:'Score lamb and rub all over with garlic, rosemary, oil, salt and pepper. Brown in dutch oven. Add onion, stock and lemon. Cover tightly and braise at 160°C for 3 hrs. Rest 15 min, then pull apart with forks. Strain and reduce braising liquid for gravy.',
   ingredients:['1.8 kg bone-in lamb shoulder','5 garlic cloves, halved','2 sprigs fresh rosemary','2 tbsp olive oil','1 large onion, quartered','500 ml chicken stock','1 lemon, halved','2 tsp dried oregano','Salt and pepper'],
   notes:'Pull into big shreds and serve over mash with braising jus spooned over the top.'},

  {id:'s14',name:'Honey Soy Chicken Breasts',category:'Dinner',subcategory:'Braise',cookingTime:'45 min',servings:'4',
   recipe:'Mix honey, soy, garlic, ginger and vinegar for the sauce. Score chicken breasts on top. Sear in oil until golden on both sides. Pour sauce over. Bake at 200°C for 25–28 min, basting every 8 min, until sticky and caramelised and internal temp reaches 74°C. Rest 5 min before serving.',
   ingredients:['4 large chicken breasts','3 tbsp honey','3 tbsp soy sauce','3 garlic cloves, minced','1 tsp fresh ginger, grated','1 tbsp rice wine vinegar','1 tsp sesame oil','1 tbsp olive oil','Sesame seeds and spring onion to serve'],
   notes:'Scoring the breast lets the sauce penetrate deeply. Serve over steamed rice with bok choy on the side.'},

  {id:'b1',name:'Red Wine Braised Beef Brisket',category:'Dinner',subcategory:'Braise',cookingTime:'3.5 hrs',servings:'6',
   recipe:'Score brisket fat cap and season generously. Sear fat-side down in oil until deep golden, then all sides. Remove. Saute onion, carrot and celery until soft. Add garlic and tomato paste, cook 2 min. Add red wine and reduce by half. Return brisket, add stock and thyme. Cover and braise at 150C for 3 hrs until fork-tender. Rest 15 min, slice against the grain.',
   ingredients:['1.8 kg beef brisket, rolled','2 onions, diced','3 carrots, diced','2 celery stalks, diced','5 garlic cloves, minced','2 tbsp tomato paste','400 ml red wine','400 ml beef stock','3 sprigs thyme','2 bay leaves','2 tbsp olive oil','Salt and pepper'],
   notes:'Always slice brisket against the grain or it will be stringy. The fat cap keeps the meat basted throughout the long braise.'},

  {id:'b3',name:'Mexican Barbacoa Beef',category:'Dinner',subcategory:'Braise',cookingTime:'3.5 hrs',servings:'8',
   recipe:'Blend chipotles in adobo, garlic, cumin, oregano, cloves, lime juice and apple cider vinegar into a paste. Rub all over beef chuck. Brown in oil. Add beef stock. Cover and braise at 150C for 3 hrs until falling apart. Shred beef and mix back through braising liquid. Serve in warm tortillas with all the toppings.',
   ingredients:['1.8 kg beef chuck, cubed','3 chipotle chillies in adobo','6 garlic cloves','2 tsp ground cumin','1 tsp dried oregano','1/4 tsp ground cloves','Juice of 2 limes','3 tbsp apple cider vinegar','400 ml beef stock','2 bay leaves','2 tbsp olive oil','Tortillas, salsa, pickled onion, coriander and lime to serve'],
   notes:'Shred the beef generously through the reduced braising liquid for maximum flavour. Leftovers are even better the next day in tacos or bowls.'},

  {id:'b8',name:'American-Style Braised Beef Short Ribs',category:'Dinner',subcategory:'Braise',cookingTime:'4 hrs',servings:'4',
   recipe:'Season short ribs generously, brown deeply all sides. Remove. Saute onion and garlic. Add tomato paste, cook 2 min. Add red wine, stock, Worcestershire and a touch of brown sugar. Return ribs bone-side up. Cover and braise at 150C for 3.5 hrs until falling off the bone. Remove ribs, reduce sauce to glaze consistency. Serve over creamy mash.',
   ingredients:['1.8 kg bone-in beef short ribs','2 onions, diced','5 garlic cloves, minced','2 tbsp tomato paste','300 ml red wine','400 ml beef stock','2 tbsp Worcestershire sauce','1 tbsp brown sugar','3 sprigs thyme','2 bay leaves','2 tbsp olive oil','Salt and pepper','Creamy mash to serve'],
   notes:'The longer and slower the better. These are restaurant-quality at home. Reduce the sauce until it coats the back of a spoon.'},

  {id:'b9',name:'Vietnamese Caramel Braised Beef',category:'Dinner',subcategory:'Braise',cookingTime:'2 hrs',servings:'4',
   recipe:'Make dry caramel with sugar in pot until amber. Carefully add fish sauce and coconut water. Add garlic, ginger, chilli and star anise. Add beef chunks and stir to coat. Simmer covered at low heat for 1.5 hrs until very tender and sauce is thick and deeply caramelised. Serve over rice with fresh herbs and chilli.',
   ingredients:['1 kg beef chuck, cubed','3 tbsp white sugar','3 tbsp fish sauce','300 ml coconut water or water','4 garlic cloves, minced','3 cm ginger, sliced','2 red chillies, halved','2 star anise','Steamed jasmine rice to serve','Fresh coriander, spring onion and sliced chilli to serve'],
   notes:'Making the dry caramel is essential — it gives the bitter-sweet depth unique to Vietnamese braised dishes. Watch it carefully as it turns fast.'},

  {id:'b10',name:'Beef Rogan Josh',category:'Dinner',subcategory:'Braise',cookingTime:'1.5 hrs',servings:'5',
   recipe:'Brown beef chunks in batches, remove. Fry whole spices in oil until popping. Add onion and cook until deep golden, 15 min. Add ginger, garlic and kashmiri chilli powder, cook 2 min. Add yoghurt one spoon at a time, stirring between each addition. Return beef, add stock. Cover and braise at 160C for 1 hr until tender and sauce is thick and red.',
   ingredients:['1.2 kg beef chuck, cubed','2 large onions, finely diced','200 ml natural yoghurt','4 tbsp Kashmiri chilli powder','1 tbsp ginger paste','1 tbsp garlic paste','1 tsp fennel seeds','1 tsp ground coriander','4 cardamom pods','2 cloves','1 cinnamon stick','300 ml beef stock','3 tbsp oil','Fresh coriander and rice to serve'],
   notes:'Kashmiri chilli gives vivid red colour with moderate heat. Add yoghurt slowly or it will split and make the sauce grainy.'},

  {id:'b13',name:'Braised Lamb Shanks in Red Wine',category:'Dinner',subcategory:'Braise',cookingTime:'3 hrs',servings:'4',
   recipe:'Season lamb shanks and brown deeply all over in oil. Remove. Saute onion, carrot and celery until soft. Add garlic and tomato paste, cook 2 min. Deglaze with red wine. Return shanks, add crushed tomatoes and stock. Cover and braise at 160C for 2.5 hrs until meat is falling off the bone. Rest 10 min. Serve over creamy mash with sauce spooned over.',
   ingredients:['4 lamb shanks','2 onions, diced','2 carrots, diced','2 celery stalks, diced','4 garlic cloves, minced','2 tbsp tomato paste','300 ml red wine','400 g can crushed tomatoes','400 ml chicken stock','2 sprigs rosemary','2 bay leaves','2 tbsp olive oil','Creamy mash to serve'],
   notes:'The mash is not optional — every drop of that sauce needs something to soak into.'},

  {id:'b14',name:'Braised Lamb Shanks with Rosemary & Garlic',category:'Dinner',subcategory:'Braise',cookingTime:'3 hrs',servings:'4',
   recipe:'Stud lamb shanks with rosemary sprigs and garlic slivers. Season well and brown all over. Remove. Saute onion and garlic. Add white wine and reduce by half. Add stock, lemon zest and a few anchovies. Return shanks. Cover and braise at 160C for 2.5 hrs. The anchovies dissolve entirely and add unidentifiable depth. Serve with white beans or mash.',
   ingredients:['4 lamb shanks','1 large onion, sliced','6 garlic cloves (4 for studding, 2 minced)','4 sprigs rosemary (some for studding)','4 anchovy fillets (optional but worth it)','200 ml white wine','400 ml chicken stock','Zest of 1 lemon','2 tbsp olive oil','White beans or mash to serve','Salt and pepper'],
   notes:'Anchovies do not make this fishy. They melt entirely and add a savoury depth you will not be able to identify but everyone will notice.'},

  {id:'b15',name:'Middle Eastern Braised Lamb Shoulder',category:'Dinner',subcategory:'Braise',cookingTime:'3.5 hrs',servings:'6',
   recipe:'Rub whole lamb shoulder with spice paste: garlic, cumin, coriander, paprika, cinnamon, olive oil and lemon. Brown all over in the pot. Add onion, stock and a handful of dried apricots. Cover and braise at 150C for 3 hrs until completely tender. Pull meat from the bone. Serve over fluffy rice or flatbread with yoghurt and fresh herbs.',
   ingredients:['1.8 kg bone-in lamb shoulder','2 onions, quartered','80 g dried apricots','400 ml chicken stock','Spice paste: 6 garlic cloves + 2 tsp cumin + 1 tsp coriander + 1 tsp smoked paprika + 1/2 tsp cinnamon + 3 tbsp olive oil + juice 1 lemon + 1 tsp salt','Rice or flatbread to serve','Greek yoghurt, mint and pomegranate to garnish'],
   notes:'This is a showstopper dish for a crowd. The pulled lamb piled over rice with yoghurt is extraordinary and feeding a group is effortless.'},

  {id:'b16',name:'Moroccan Braised Lamb Shanks',category:'Dinner',subcategory:'Braise',cookingTime:'3 hrs',servings:'4',
   recipe:'Brown lamb shanks all over in oil. Remove. Saute onion until golden. Add garlic, ginger, cumin, coriander, turmeric, cinnamon and paprika, cook 2 min. Add crushed tomatoes and stock. Return shanks. Tuck in preserved lemon rind and olives. Cover and braise at 160C for 2.5 hrs. Scatter coriander and serve over couscous.',
   ingredients:['4 lamb shanks','2 onions, diced','4 garlic cloves, minced','1 tsp fresh ginger, grated','2 tsp ground cumin','1 tsp ground coriander','1/2 tsp turmeric','1/2 tsp cinnamon','1 tsp smoked paprika','400 g can crushed tomatoes','400 ml chicken stock','1 preserved lemon rind, finely sliced','80 g green olives','Fresh coriander and couscous to serve'],
   notes:'Preserved lemon is the key Moroccan flavour. Make the dish a day ahead for even better results.'},

  {id:'b22',name:'Lamb Shank Massaman Curry',category:'Dinner',subcategory:'Braise',cookingTime:'2.5 hrs',servings:'4',
   recipe:'Brown lamb shanks in oil all over, remove. Fry massaman paste in same pot 2 min. Add coconut milk and bring to simmer. Return shanks. Add potato chunks, fish sauce, palm sugar and tamarind. Cover and braise at 160C for 2 hrs until meat is very tender and falling from the bone. Finish with peanuts, lime and coriander. Serve over jasmine rice.',
   ingredients:['4 lamb shanks','2 x 400 ml cans coconut milk','4 tbsp massaman curry paste','3 potatoes, quartered','2 tbsp fish sauce','2 tbsp palm sugar','1 tbsp tamarind paste','100 g roasted peanuts','Juice of 1 lime','Fresh coriander','2 tbsp vegetable oil','Jasmine rice to serve'],
   notes:'Lamb shanks suit Massaman beautifully — the long braise time lets the coconut-spice sauce penetrate deeply into the meat.'},

  {id:'b23',name:'Braised Lamb Shoulder with Pomegranate & Walnuts',category:'Dinner',subcategory:'Braise',cookingTime:'3 hrs',servings:'6',
   recipe:'Score and season lamb shoulder. Brown all over in oil. Remove. Saute onion until golden. Add garlic, cumin and cinnamon. Return lamb. Add pomegranate juice, stock, pomegranate molasses and walnuts. Cover and braise at 150C for 2.5 hrs. Pull meat from bone. Reduce sauce until thick. Serve over flatbread or rice with pomegranate seeds.',
   ingredients:['1.8 kg bone-in lamb shoulder','200 ml pomegranate juice','3 tbsp pomegranate molasses','150 g walnuts, roughly chopped','2 large onions, diced','4 garlic cloves, minced','1 tsp ground cumin','1/2 tsp cinnamon','300 ml chicken stock','2 tbsp olive oil','Pomegranate seeds and fresh mint to serve','Flatbread or rice to serve'],
   notes:'Pomegranate molasses from Middle Eastern grocers gives the deep sweet-sour note. Pile the pulled lamb high over flatbread.'},

  // ── BBQ (4) ──────────────────────────────────────────────────────
  {id:'s15',name:'BBQ Lemon Herb Chicken Breasts',category:'Dinner',subcategory:'BBQ',cookingTime:'30 min',servings:'4',
   recipe:'Butterfly chicken breasts. Marinate at least 30 min in lemon juice, garlic, oregano, olive oil, salt and pepper. Grill on high 4 min per side until cooked through (internal temp 74°C). Rest 5 min before slicing. Serve with charred lemon halves.',
   ingredients:['4 large chicken breasts, butterflied','Juice of 2 lemons','3 garlic cloves, crushed','1 tbsp dried oregano','3 tbsp olive oil','1 tsp salt','1/2 tsp black pepper','Lemon halves to serve'],
   notes:'Butterflying ensures even cooking with no dry spots. Marinate overnight for best flavour.'},

  {id:'s16',name:'Harissa Lamb Cutlets',category:'Dinner',subcategory:'BBQ',cookingTime:'20 min',servings:'4',
   recipe:'Coat lamb cutlets in harissa paste mixed with olive oil and lemon zest. Marinate 30 min. Grill on high 2–3 min per side for medium-rare. Rest 5 min. Serve with yoghurt, mint and flatbread.',
   ingredients:['12 lamb cutlets','3 tbsp harissa paste','2 tbsp olive oil','Zest of 1 lemon','1/2 cup Greek yoghurt','1/2 cup fresh mint leaves','Salt and pepper','Flatbread to serve'],
   notes:'Harissa heat varies by brand. The yoghurt is non-negotiable.'},

  {id:'n6',name:'Spatchcock BBQ Chicken',category:'Dinner',subcategory:'BBQ',cookingTime:'1 hr',servings:'5',
   recipe:'Remove backbone from whole chicken with kitchen scissors and press flat to spatchcock. Rub all over with olive oil, garlic, smoked paprika, cumin, salt and pepper. Grill on indirect heat with lid down for 40 min. Finish on direct heat 10 min per side until charred and internal temp reaches 75°C. Rest 10 min before carving.',
   ingredients:['1 whole chicken 1.6–1.8 kg spatchcocked','3 tbsp olive oil','4 garlic cloves, crushed','1 tsp smoked paprika','1 tsp ground cumin','1 tsp dried thyme','1 tsp salt','1/2 tsp black pepper','Lemon wedges to serve'],
   notes:'Spatchcocking halves cooking time and gives even browning all over. Ask your butcher to do it for you.'},

  // ── SALAD (3) ────────────────────────────────────────────────────
  {id:'s4',name:'Greek Lamb Salad',category:'Dinner',subcategory:'Salad',cookingTime:'15 min',servings:'3',
   recipe:'Season lamb with oregano, crushed garlic and lemon zest. Grill on high 3 min per side. Rest 5 min, slice thin. Toss leaves with tomatoes, cucumber, olives and feta. Drizzle with olive oil and lemon, top with lamb.',
   ingredients:['400 g lamb backstraps','1 tsp dried oregano','1 garlic clove, crushed','Juice and zest of 1 lemon','100 g mixed leaves','1 cucumber, sliced','200 g cherry tomatoes','100 g kalamata olives','100 g feta, crumbled','Half a red onion','Olive oil, salt, pepper'],
   notes:'Chicken breast works just as well. The lemon dressing is the hero.'},

  {id:'n7',name:'Thai Grilled Chicken Salad',category:'Dinner',subcategory:'Salad',cookingTime:'20 min',servings:'3',
   recipe:'Pound chicken breasts to even thickness. Marinate 15 min in fish sauce, lime juice and sugar. Grill on high 4 min per side, rest 5 min, slice thin. Whisk dressing: lime juice, fish sauce, palm sugar and chilli. Toss cucumber, cherry tomatoes, red onion, mint, coriander and basil. Top with chicken, drizzle dressing and finish with crushed peanuts.',
   ingredients:['3 chicken breasts','2 tbsp fish sauce for marinade','Juice of 1 lime for marinade','1 tsp sugar','Dressing: 3 tbsp lime juice + 2 tbsp fish sauce + 1 tsp palm sugar + 1-2 red chillies sliced','1 Lebanese cucumber, sliced','200 g cherry tomatoes, halved','1/2 red onion, thinly sliced','1/2 cup fresh mint','1/2 cup fresh coriander','1/2 cup Thai basil','3 tbsp crushed roasted peanuts'],
   notes:'Do not skip the fresh herbs. Serve immediately once dressed.'},

  {id:'n8',name:'Seared Steak & Rocket Salad',category:'Dinner',subcategory:'Salad',cookingTime:'15 min',servings:'2',
   recipe:'Season steak generously. Sear in screaming-hot oiled pan 3 min per side for medium-rare. Rest 5 min, slice thin against the grain. Toss rocket with olive oil, lemon juice, salt and pepper. Plate rocket, top with steak, parmesan shavings, cherry tomatoes and capers. Drizzle with extra olive oil.',
   ingredients:['2 × 200 g sirloin or rump steaks','100 g rocket','50 g parmesan, shaved','150 g cherry tomatoes, halved','1 tbsp capers','Juice of 1/2 lemon','3 tbsp extra-virgin olive oil','Salt and cracked black pepper'],
   notes:'The pan must be smoking hot for a proper sear. Rest the steak fully before slicing.'},

  // ── PASTA (4) ────────────────────────────────────────────────────
  {id:'s3',name:'Spaghetti Bolognese',category:'Dinner',subcategory:'Pasta',cookingTime:'1 hr',servings:'5',
   recipe:'Brown mince in batches. Soften onion, carrot, celery in same pan. Add garlic and tomato paste, cook 2 min. Return mince, pour in wine, then crushed tomatoes and stock. Simmer 40 min. Toss with al dente pasta.',
   ingredients:['600 g beef mince','400 g spaghetti','1 onion, finely diced','2 carrots, finely diced','2 celery stalks','4 garlic cloves','2 tbsp tomato paste','200 ml red wine','2 × 400 g cans crushed tomatoes','150 ml beef stock','Parmesan to serve'],
   notes:'Double batch and freeze half. Gets richer as leftovers.'},

  {id:'n10',name:'Sausage & Fennel Rigatoni',category:'Dinner',subcategory:'Pasta',cookingTime:'35 min',servings:'4',
   recipe:'Remove sausage meat from casings. Cook in oil, breaking up, until browned. Add onion and fennel, cook until soft. Add garlic and chilli flakes, cook 1 min. Pour in crushed tomatoes and white wine. Simmer 20 min. Toss with al dente pasta. Finish with parmesan and fresh basil.',
   ingredients:['400 g rigatoni','400 g good-quality pork sausages','1 large onion, diced','1/2 fennel bulb, thinly sliced','3 garlic cloves, minced','1/2 tsp chilli flakes','100 ml white wine','400 g can crushed tomatoes','2 tbsp olive oil','Parmesan and fresh basil to serve'],
   notes:'Use the best sausages you can find — the quality drives the whole dish. Fennel fronds make a beautiful garnish.'},

  // ── STIR-FRY (4) ─────────────────────────────────────────────────
  {id:'s2',name:'Chicken Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',
   recipe:'Slice chicken breasts thin. Mix sauce: soy, oyster sauce, sesame oil and cornstarch. High heat in wok, cook chicken in batches until golden, remove. Stir-fry broccoli and capsicum until just tender. Return chicken, add sauce, toss to coat. Serve immediately over rice.',
   ingredients:['500 g chicken breast, sliced thin','2 tbsp soy sauce','1 tbsp oyster sauce','1 tbsp sesame oil','2 tsp cornstarch','1 head broccoli cut into florets','1 red capsicum, sliced','3 garlic cloves, minced','1 tsp grated ginger','3 tbsp vegetable oil','Rice to serve'],
   notes:'Serve the second it\'s cooked. Breast stays tender if you do not overcook it.'},

  {id:'s19',name:'Rainbow Vegetable Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'15 min',servings:'4',
   recipe:'Mix sauce: soy, oyster sauce, Chinese cooking wine and cornflour dissolved in water. Heat wok to smoking. Add garlic and ginger, 10 sec. Add onion, carrot and capsicum, stir-fry 1 min. Add mushrooms and broccolini, 2 min. Pour sauce over, toss 1 min until glossy and thickened. Stir in sesame oil. Serve immediately.',
   ingredients:['1 tbsp light soy sauce','1 tbsp oyster sauce','1 tbsp Chinese cooking wine Shaoxing','1 tsp cornflour dissolved in 1/4 cup water','1 tsp sesame oil','2 garlic cloves, minced','1 tsp fresh ginger, grated','1 onion, sliced','1 large carrot, julienned','1 red capsicum, sliced','150 g mushrooms, sliced','1 bunch broccolini','2 tbsp vegetable oil'],
   notes:'Add hard veg first, leafy veg last. Works brilliantly with tofu for a vegetarian meal.'},

  {id:'s20',name:'Beef & Broccoli Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',
   recipe:'Slice beef thin against the grain. Toss with soy sauce, cornstarch and bicarb soda, rest 15 min. Mix sauce: oyster sauce, soy, sesame oil, sugar, stock and cornstarch. Blanch broccoli 1 min. Sear beef in smoking oil in batches. Remove. Fry garlic 10 sec, add broccoli, then beef, pour sauce over. Toss to coat.',
   ingredients:['500 g beef sirloin or rump, sliced thin','3 cups broccoli florets','3 garlic cloves, minced','3 tbsp oyster sauce','1 tbsp soy sauce','1 tsp sesame oil','1 tsp sugar','1/4 cup beef stock','1 tsp cornstarch for sauce','1 tbsp soy + 1 tsp cornstarch + 1/4 tsp bicarb for beef','2 tbsp vegetable oil','Steamed rice to serve'],
   notes:'Bicarb tenderises the beef — do not skip it. Sear in small batches so it caramelises not steams.'},

  {id:'n12',name:'Pork & Snow Pea Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',
   recipe:'Slice pork fillet thin. Marinate briefly in soy, cornstarch and sesame oil. Mix sauce: hoisin, soy, garlic, ginger, splash of water and cornstarch. Sear pork in batches in smoking wok, remove. Stir-fry snow peas and capsicum 1 min. Return pork, pour sauce over, toss until thickened. Garnish with spring onion.',
   ingredients:['500 g pork fillet, sliced thin','200 g snow peas, trimmed','1 red capsicum, sliced','3 garlic cloves, minced','1 tsp fresh ginger, grated','2 tbsp hoisin sauce','2 tbsp soy sauce','1 tsp sesame oil','2 tsp cornstarch for sauce','1 tbsp soy + 1 tsp cornstarch for pork','2 tbsp vegetable oil','Spring onion to garnish','Rice to serve'],
   notes:'Pork fillet is naturally lean. Hot wok and quick cooking is the whole secret.'},

  // ── OTHER (4) ────────────────────────────────────────────────────
  {id:'n13',name:'Simple Roast Chicken',category:'Dinner',subcategory:'Other',cookingTime:'1.5 hrs',servings:'5',
   recipe:'Pat whole chicken completely dry. Season generously with salt and pepper inside cavity and all over skin. Stuff cavity with lemon halves, garlic bulb halved crossways and fresh herbs. Rub outside with softened butter. Roast at 220°C for 20 min then reduce to 180°C for 50 min. Rest 15 min before carving.',
   ingredients:['1 whole chicken 1.6–1.8 kg','1 lemon, halved','1 whole garlic bulb, halved crossways','Fresh thyme and rosemary','50 g softened butter','2 tsp salt','1 tsp pepper','500 ml chicken stock for gravy','1 tbsp flour for gravy'],
   notes:'Dry the chicken in the fridge uncovered for a few hours before roasting for crackling-crisp skin. Never skip the rest.'},

  {id:'n14',name:'Chicken Schnitzel',category:'Dinner',subcategory:'Other',cookingTime:'30 min',servings:'4',
   recipe:'Butterfly chicken breasts and pound thin between baking paper. Set up crumbing station: flour, beaten eggs, panko crumbs seasoned with salt, pepper and garlic powder. Coat each schnitzel in flour, egg, then crumbs. Pan-fry in 1 cm oil for 3 min per side until golden and cooked through. Drain on paper towel. Serve with lemon.',
   ingredients:['4 chicken breasts, butterflied and pounded thin','1/2 cup plain flour','2 eggs, beaten','1.5 cups panko breadcrumbs','1 tsp garlic powder','1 tsp salt','1/2 tsp pepper','Vegetable oil for frying','Lemon wedges to serve'],
   notes:'Keep oil at medium-high. Too hot burns crumbs before chicken cooks; too cool makes it greasy. Works great as a burger.'},

  {id:'n15',name:'Smoky Beef Tacos',category:'Dinner',subcategory:'Other',cookingTime:'20 min',servings:'4',
   recipe:'Brown beef mince, breaking up well. Add onion and garlic, cook until soft. Add all spices and tomato paste, cook 1 min. Pour in beef stock and diced tomatoes, simmer 10 min until thick and saucy. Warm tortillas. Load with beef then all the toppings.',
   ingredients:['500 g beef mince','8 small corn or flour tortillas','1 onion, finely diced','3 garlic cloves, minced','2 tsp smoked paprika','2 tsp ground cumin','1 tsp chilli powder','1 tbsp tomato paste','100 ml beef stock','200 g can diced tomatoes','Toppings: shredded lettuce + diced tomato + grated cheese + sour cream + jalapeño + coriander + lime'],
   notes:'Toast the spices for 30 sec before adding the paste for deeper flavour. The taco seasoning is everything.'},

  {id:'n16',name:'Grilled Lamb Kofta',category:'Dinner',subcategory:'Other',cookingTime:'25 min',servings:'4',
   recipe:'Combine lamb mince with grated onion, grated garlic, cumin, coriander, cinnamon, fresh mint and parsley, salt and pepper. Mix well with hands. Divide into 8 portions and shape onto flat skewers or into long sausages. Grill on high 10–12 min, turning, until cooked through and charred. Serve with warm flatbread, hummus and cucumber yoghurt.',
   ingredients:['600 g lamb mince','1 small onion, finely grated','3 garlic cloves, finely grated','1 tsp ground cumin','1 tsp ground coriander','1/4 tsp cinnamon','1/4 cup fresh mint, finely chopped','1/4 cup fresh parsley, finely chopped','1 tsp salt','1/2 tsp pepper','Flatbread, hummus, cucumber yoghurt to serve'],
   notes:'Grating the onion and garlic means no chunks. Chill kofta 30 min before grilling if time allows.'},

  // ════════════════════════════════════════════
  //  LUNCH
  // ════════════════════════════════════════════

  // ── MEALS ON THE RUN (3) ─────────────────────────────────────────
  {id:'s23',name:'Chicken & Avocado Rice Paper Rolls',category:'Lunch',subcategory:'Meals on the run',cookingTime:'20 min',servings:'3',
   recipe:'Poach chicken breasts in stock until just cooked through, about 15 min. Cool and shred. Soak rice paper sheets one at a time in warm water 15 sec until pliable. Lay flat. Layer vermicelli, chicken, avocado, cucumber, carrot, mint and basil. Roll tightly, folding in sides as you go. Serve with sweet chilli or hoisin dipping sauce.',
   ingredients:['300 g chicken breast, poached and shredded','12 rice paper sheets','100 g rice vermicelli, soaked and drained','1 avocado, sliced','1 cucumber, julienned','1 large carrot, julienned','1 cup fresh mint leaves','1 cup fresh basil leaves','Sweet chilli sauce to serve'],
   notes:'Prep all fillings first, then roll to order. Do not stack finished rolls or they will stick together.'},

  {id:'n17',name:'Chicken Caesar Wrap',category:'Lunch',subcategory:'Meals on the run',cookingTime:'15 min',servings:'2',
   recipe:'Season and grill or pan-fry chicken breasts 4 min per side. Rest 5 min, slice thin. Spread Caesar dressing down the centre of each tortilla. Layer with cos lettuce, chicken, parmesan shavings and croutons. Roll firmly. Cut in half and wrap in baking paper for on the go.',
   ingredients:['2 large chicken breasts','2 large flour tortillas','2 cos lettuce hearts, leaves separated','3 tbsp Caesar dressing','40 g parmesan, shaved','Handful croutons','Salt and pepper'],
   notes:'Make your own Caesar with mayo, garlic, lemon juice, parmesan and a touch of worcestershire for the real deal.'},

  {id:'n18',name:'Hummus & Roasted Veg Wrap',category:'Lunch',subcategory:'Meals on the run',cookingTime:'30 min',servings:'2',
   recipe:'Toss capsicum, zucchini and red onion with olive oil, cumin, salt and pepper. Roast at 200°C for 20 min until tender and charred at edges. Spread hummus generously over flatbread. Layer with rocket, roasted veg, crumbled feta and a drizzle of chilli oil. Roll tightly and wrap in foil.',
   ingredients:['2 large flatbreads or tortillas','4 tbsp hummus','1 red capsicum, sliced','1 zucchini, sliced','1/2 red onion, sliced','2 tbsp olive oil','1/2 tsp ground cumin','50 g rocket','50 g feta, crumbled','Chilli oil to finish','Salt and pepper'],
   notes:'Roasted veg keeps well in the fridge for 3 days. Batch roast on the weekend for easy wraps all week.'},

  // ── HOME (5) ─────────────────────────────────────────────────────
  {id:'s25',name:'Shakshuka',category:'Lunch',subcategory:'Home',cookingTime:'30 min',servings:'3',
   recipe:'Sauté onion and capsicum in olive oil until soft. Add garlic and spices, cook 1 min. Pour in tomatoes, simmer 10 min. Make wells in sauce and crack eggs in. Cover and cook 8 min until whites are set but yolks still runny. Scatter over feta and parsley. Serve from the pan with crusty bread.',
   ingredients:['1 large onion, diced','1 red capsicum, diced','4 garlic cloves, minced','2 tbsp olive oil','1 tsp cumin','1 tsp smoked paprika','1/2 tsp chilli flakes','2 × 400 g cans crushed tomatoes','6 eggs','80 g feta, crumbled','Flat-leaf parsley, chopped','Crusty bread to serve'],
   notes:'Do not overcook the eggs. The yolk should still be runny. Great for brunch or a lazy dinner too.'},

  {id:'s26',name:'Lemon & Herb Quinoa Bowl',category:'Lunch',subcategory:'Home',cookingTime:'25 min',servings:'3',
   recipe:'Cook quinoa in stock for 12–15 min until absorbed. Fluff with fork. Toss warm quinoa with lemon juice, olive oil and fresh herbs. Top each bowl with roasted vegetables, crispy chickpeas, cucumber and hummus. Drizzle tahini over the top.',
   ingredients:['1.5 cups quinoa, rinsed','750 ml chicken or vegetable stock','Juice of 1 lemon','3 tbsp extra-virgin olive oil','1/2 cup fresh parsley, chopped','400 g can chickpeas rinsed and roasted','2 cups roasted vegetables capsicum zucchini sweet potato','1 cucumber, diced','4 tbsp hummus','2 tbsp tahini','Salt and pepper'],
   notes:'Roast the veg and chickpeas while the quinoa cooks. Store all components separately if meal prepping.'},

  {id:'n19',name:'Chicken Fried Rice',category:'Lunch',subcategory:'Home',cookingTime:'20 min',servings:'4',
   recipe:'Use cold cooked rice — day-old is essential. Dice chicken breast and stir-fry on high until golden, remove. Push veg to side of wok, pour in beaten eggs and scramble. Add rice, breaking up clumps. Return chicken. Add soy sauce, oyster sauce and sesame oil. Toss everything on high heat for 2 min. Garnish with spring onion.',
   ingredients:['3 cups cold cooked jasmine rice','2 chicken breasts, diced small','3 eggs, beaten','1 cup frozen peas and corn','3 garlic cloves, minced','1 tsp fresh ginger, grated','3 tbsp light soy sauce','1 tbsp oyster sauce','1 tsp sesame oil','3 tbsp vegetable oil','4 spring onions, sliced'],
   notes:'Cold day-old rice is non-negotiable — fresh rice is too wet. The best weeknight clean-out-the-fridge meal.'},

  {id:'n20',name:'Roasted Veg & Feta Frittata',category:'Lunch',subcategory:'Home',cookingTime:'35 min',servings:'4',
   recipe:'Roast capsicum, zucchini and cherry tomatoes with oil, salt and pepper at 200°C for 20 min. Beat eggs with milk, salt and pepper. Arrange roasted veg in an ovenproof frying pan. Pour egg mixture over. Dot with feta. Cook on stove on medium 3 min until edges set. Transfer to oven and bake at 180°C for 15 min until puffed and set in the centre.',
   ingredients:['8 eggs','3 tbsp milk','1 red capsicum, diced','1 zucchini, diced','150 g cherry tomatoes','80 g feta, crumbled','Small bunch flat-leaf parsley','3 tbsp olive oil','Salt and pepper'],
   notes:'Cold frittata is just as good. Slice and pack for lunch. Swap in any leftover roast vegetables.'},

  {id:'n21',name:'Chicken Sweet Corn Soup',category:'Lunch',subcategory:'Home',cookingTime:'25 min',servings:'4',
   recipe:'Bring stock to the boil. Add chicken breasts and poach 15 min. Remove and shred. Add creamed corn and corn kernels to stock, simmer 5 min. Season with soy sauce and white pepper. Mix cornstarch with water, stir into simmering soup until thickened. Drizzle in beaten egg while stirring to create egg ribbons. Return chicken. Garnish with spring onion and sesame oil.',
   ingredients:['1.2 L chicken stock','2 chicken breasts','400 g can creamed corn','1 cup corn kernels fresh or frozen','2 tbsp soy sauce','1/2 tsp white pepper','2 tbsp cornstarch dissolved in 3 tbsp water','2 eggs, beaten','3 spring onions, sliced','1 tsp sesame oil'],
   notes:'Poaching the breast in stock enriches the broth and keeps the chicken silky and tender.'},

  // ── SALAD (4) ────────────────────────────────────────────────────
  {id:'s27',name:'Thai Beef Salad',category:'Lunch',subcategory:'Salad',cookingTime:'20 min',servings:'3',
   recipe:'Grill beef steak on high 3 min per side for medium-rare. Rest 5 min, slice thin against the grain. Whisk lime juice, fish sauce, sugar and chilli for dressing. Toss beef with cucumber, tomatoes, red onion, mint, basil and coriander. Drizzle dressing over and toss to coat.',
   ingredients:['400 g beef sirloin or rump steak','3 tbsp lime juice','2 tbsp fish sauce','1 tsp palm sugar or brown sugar','1–2 red chillies, sliced','1 cucumber, sliced','200 g cherry tomatoes, halved','1/2 red onion, thinly sliced','1/2 cup fresh mint','1/2 cup fresh Thai basil','1/2 cup fresh coriander'],
   notes:'Do not overcook the beef. Medium-rare keeps it tender and juicy in the dressing.'},

  {id:'s28',name:'Roasted Capsicum & Chickpea Salad',category:'Lunch',subcategory:'Salad',cookingTime:'35 min',servings:'4',
   recipe:'Roast capsicums at 220°C for 25 min until charred. Place in a bag 10 min to steam, then peel and slice. Drain and pat dry chickpeas, toss with oil and cumin and roast 20 min until crispy. Combine capsicum, chickpeas, rocket, cucumber, red onion and olives. Dress with lemon juice, olive oil and feta.',
   ingredients:['3 red capsicums','400 g can chickpeas, drained and rinsed','2 tsp ground cumin','3 tbsp olive oil','100 g rocket','1 cucumber, diced','1/2 red onion, thinly sliced','60 g kalamata olives','80 g feta, crumbled','Juice of 1 lemon','Salt and pepper'],
   notes:'Roast the capsicums a day ahead and store in oil — makes them even tastier.'},

  {id:'n22',name:'Chicken Caesar Salad',category:'Lunch',subcategory:'Salad',cookingTime:'20 min',servings:'3',
   recipe:'Make dressing: whisk together mayo, grated parmesan, lemon juice, crushed garlic, dijon and worcestershire. Pan-fry chicken breasts in oil 4 min per side until golden and cooked through. Rest 5 min, slice. Toss cos lettuce with dressing. Top with sliced chicken, croutons and extra parmesan.',
   ingredients:['3 chicken breasts','2 cos lettuce hearts, leaves roughly torn','Dressing: 4 tbsp mayo + 2 tbsp grated parmesan + 2 tbsp lemon juice + 1 garlic clove crushed + 1 tsp dijon + 1 tsp worcestershire','Handful croutons','Extra parmesan, shaved','2 tbsp olive oil','Salt and pepper'],
   notes:'Homemade dressing takes 2 minutes and is far better than bottled. Double it and keep in the fridge for the week.'},

  {id:'n23',name:'Warm Lentil & Chorizo Salad',category:'Lunch',subcategory:'Salad',cookingTime:'30 min',servings:'3',
   recipe:'Cook lentils in stock with a bay leaf for 20 min until just tender, drain. Slice chorizo and pan-fry until crispy, remove. In same pan sauté onion and garlic until soft. Add lentils, deglaze with red wine vinegar. Toss with spinach, roasted capsicum and chorizo. Dress with dijon vinaigrette.',
   ingredients:['1 cup puy lentils French lentils','600 ml chicken stock','1 bay leaf','150 g chorizo, sliced','1 small red onion, diced','2 garlic cloves, minced','2 cups baby spinach','1 roasted red capsicum jar is fine sliced','2 tbsp red wine vinegar','1 tsp dijon mustard','3 tbsp olive oil','Salt and pepper'],
   notes:'Puy lentils hold their shape — worth tracking down. Great warm or at room temperature for meal prep.'},

  // ── SANDWICH (4) ─────────────────────────────────────────────────
  {id:'s29',name:'Smashed Chickpea Sandwich',category:'Lunch',subcategory:'Sandwich',cookingTime:'10 min',servings:'2',
   recipe:'Drain chickpeas. Roughly mash with a fork with lemon juice, tahini, garlic, cumin and olive oil — keep some texture. Season well. Spread thickly on toasted sourdough. Layer with avocado, cucumber, rocket and sundried tomatoes.',
   ingredients:['400 g can chickpeas, drained and rinsed','Juice of 1 lemon','2 tbsp tahini','1 garlic clove, crushed','1/2 tsp ground cumin','2 tbsp extra-virgin olive oil','4 slices sourdough, toasted','1 avocado, sliced','1/2 cucumber, sliced','Handful rocket','4–5 sundried tomatoes','Salt and pepper'],
   notes:'Add chilli oil for a kick. Works equally well as a wrap.'},

  {id:'n24',name:'Chicken Souvlaki Wrap',category:'Lunch',subcategory:'Sandwich',cookingTime:'20 min',servings:'3',
   recipe:'Cube chicken breasts and marinate in lemon juice, garlic, olive oil, oregano, salt and pepper for at least 30 min. Thread onto skewers and grill on high 8–10 min, turning, until cooked through and charred. Warm pita. Spread with tzatziki. Load with chicken, diced tomato, cucumber, red onion and fresh parsley.',
   ingredients:['3 chicken breasts, cut into chunks','Juice of 1 lemon','3 garlic cloves, crushed','3 tbsp olive oil','1 tsp dried oregano','3 large pita breads','4 tbsp tzatziki','2 tomatoes, diced','1/2 cucumber, diced','1/2 red onion, sliced','Fresh flat-leaf parsley','Salt and pepper'],
   notes:'Tzatziki: Greek yoghurt + grated cucumber + garlic + dill + lemon. Marinate overnight for the best flavour.'},

  {id:'n25',name:'Steak & Caramelised Onion Roll',category:'Lunch',subcategory:'Sandwich',cookingTime:'30 min',servings:'2',
   recipe:'Slowly cook onions in butter with a pinch of sugar on low heat for 20 min, stirring occasionally, until deep golden and jammy. Season steak, sear in hot oiled pan 2–3 min per side for medium-rare. Rest 5 min, slice thin. Toast rolls. Layer with caramelised onion, steak, dijon mayo, rocket and parmesan shavings.',
   ingredients:['2 beef sirloin steaks about 150 g each','2 large onions, thinly sliced','20 g butter','Pinch sugar','2 crusty bread rolls','2 tbsp mayo mixed with 1 tsp dijon','Handful rocket','Parmesan shavings','Salt and pepper'],
   notes:'The onion caramelisation cannot be rushed. Low heat and patience is the whole key.'},

  {id:'n26',name:'Egg & Avocado Sandwich',category:'Lunch',subcategory:'Sandwich',cookingTime:'10 min',servings:'2',
   recipe:'Soft boil eggs for 7 min for just-set yolks. Cool, peel and halve. Mash avocado with lemon juice, salt and a pinch of chilli flakes. Toast sourdough. Spread one slice thickly with avocado. Top with halved eggs. Season with salt, cracked pepper and a drizzle of extra virgin olive oil. Add rocket and close.',
   ingredients:['4 eggs','1 ripe avocado','Juice of 1/2 lemon','Pinch chilli flakes','4 thick slices sourdough','Handful rocket or baby spinach','Extra-virgin olive oil','Salt and cracked black pepper'],
   notes:'7-minute boil gives perfect jammy yolks. Start eggs in cold water, bring to the boil, then time from there.'},

  // ── SOUP (5) ─────────────────────────────────────────────────────
  {id:'s5',name:'Pumpkin Soup',category:'Lunch',subcategory:'Soup',cookingTime:'40 min',servings:'5',
   recipe:'Roast pumpkin cut-side down at 200°C for 30 min. Scoop flesh. Sauté onion and garlic until soft. Add pumpkin and stock, simmer 10 min. Blend smooth. Season, finish with cream.',
   ingredients:['1 kg butternut pumpkin, halved','1 large onion','3 garlic cloves','750 ml chicken stock','100 ml cream','2 tbsp olive oil','1 tsp ground cumin','Salt and pepper','Pepitas to serve'],
   notes:'Make a day ahead — it only gets better. Freezes perfectly.'},

  {id:'s30',name:'Creamy Zucchini Soup',category:'Lunch',subcategory:'Soup',cookingTime:'30 min',servings:'4',
   recipe:'Sauté onion and garlic in oil until soft. Add zucchini and stock, bring to boil, then simmer 15 min until zucchini is very tender. Blend until completely smooth — the zucchini creates a naturally creamy texture without cream. Season well. Serve with a drizzle of olive oil.',
   ingredients:['4 medium zucchini, roughly chopped','1 large onion, diced','3 garlic cloves, minced','1 L chicken or vegetable stock','1 tbsp olive oil','Salt and pepper','Extra-virgin olive oil and fresh herbs to serve'],
   notes:'Only 45 calories per bowl. Blend long enough to be completely silky smooth. Add shredded chicken for protein.'},

  {id:'s31',name:'Asian Chicken Noodle Soup',category:'Lunch',subcategory:'Soup',cookingTime:'30 min',servings:'4',
   recipe:'Simmer stock with ginger, lemongrass and garlic for 15 min. Add chicken breasts and poach 12 min. Remove and shred. Strain broth. Return to simmer, season with fish sauce and soy. Cook noodles separately. Assemble bowls with noodles and chicken, pour hot broth over. Top with spring onion, coriander, chilli and lime.',
   ingredients:['1.5 L chicken stock','2 chicken breasts','3 cm fresh ginger, sliced','1 lemongrass stalk, bruised','3 garlic cloves, smashed','2 tbsp fish sauce','1 tbsp soy sauce','200 g rice noodles','Spring onion, coriander, sliced chilli and lime wedges to serve'],
   notes:'Poaching the breast in the stock builds the flavour of both the broth and the meat at the same time.'},

  {id:'n27',name:'Classic Minestrone',category:'Lunch',subcategory:'Soup',cookingTime:'45 min',servings:'6',
   recipe:'Sauté onion, carrot and celery until soft. Add garlic and tomato paste, cook 1 min. Add crushed tomatoes, stock, borlotti beans and bay leaves. Simmer 20 min. Add zucchini and small pasta, cook 10 min. Stir in cavolo nero or kale for the last 5 min. Serve with extra virgin olive oil and parmesan.',
   ingredients:['1 large onion, diced','2 carrots, diced','2 celery stalks, diced','4 garlic cloves, minced','2 tbsp olive oil','2 tbsp tomato paste','400 g can crushed tomatoes','1.5 L chicken or vegetable stock','400 g can borlotti beans, rinsed','1 zucchini, diced','100 g small pasta ditalini or macaroni','2 cups cavolo nero or kale, chopped','1 parmesan rind','Parmesan to serve'],
   notes:'Use a parmesan rind — it melts into the broth and transforms it. Soup thickens as it sits; add stock when reheating.'},

  {id:'n28',name:'Chicken, Leek & Potato Soup',category:'Lunch',subcategory:'Soup',cookingTime:'40 min',servings:'5',
   recipe:'Sauté leeks in butter until soft and silky, about 8 min. Add garlic, cook 1 min. Add potato and stock, simmer 15 min until potato is tender. Add chicken breasts and poach 12 min. Remove and shred. Blend half the soup for creaminess, leave the other half chunky. Return chicken. Season and finish with a splash of cream.',
   ingredients:['2 large leeks white and light green parts sliced','3 chicken breasts','3 medium potatoes, peeled and diced','4 garlic cloves, minced','1.5 L chicken stock','30 g butter','100 ml cream','Salt and white pepper','Fresh chives to serve'],
   notes:'Blending only half gives the best texture — creamy base with chunky potato. The leek is the soul of this soup.'},

  // ── OTHER (1) ────────────────────────────────────────────────────
  {id:'s32',name:'Baked Sweet Potato with Black Beans',category:'Lunch',subcategory:'Other',cookingTime:'55 min',servings:'2',
   recipe:'Scrub sweet potatoes, prick all over. Bake at 200°C for 45–50 min until completely tender. Meanwhile, warm beans in a pan with cumin, smoked paprika, garlic and lime juice. Split potatoes, fluff flesh with a fork. Load with beans, avocado, Greek yoghurt and coriander.',
   ingredients:['2 large sweet potatoes','400 g can black beans, rinsed and drained','1 tsp ground cumin','1 tsp smoked paprika','1 garlic clove, minced','Juice of 1 lime','1 avocado, sliced','4 tbsp Greek yoghurt','Fresh coriander','Salt and pepper'],
   notes:'Meal prep: bake sweet potatoes ahead. Reheat in microwave and load toppings fresh.'},

  {id:'t1',name:'Avocado & Egg on Toast Fingers',category:'Lunch',subcategory:'Toddler',cookingTime:'10 min',servings:'1',
   recipe:'Soft boil egg for 8 min, peel and slice. Mash avocado with a squeeze of lemon and tiny pinch of salt. Toast bread until golden. Spread avocado thickly, top with sliced egg. Cut into fingers for easy toddler holding.',
   ingredients:['1 egg','1/2 ripe avocado','1 slice wholegrain bread','Squeeze of lemon','Tiny pinch of salt'],
   notes:'NOVA 1-2. Cut into finger-sized strips so toddlers can self-feed easily. Great source of healthy fats and protein.'},

  {id:'t2',name:'Banana Oat Pancakes',category:'Lunch',subcategory:'Toddler',cookingTime:'15 min',servings:'2',
   recipe:'Mash 1 ripe banana well in a bowl. Add eggs and oats, mix together. Let sit 2 min. Cook small spoonfuls in a non-stick pan with a little butter over medium-low heat, 2 min per side until golden. Serve with sliced banana or a little yoghurt.',
   ingredients:['1 ripe banana','2 eggs','1/4 cup rolled oats','Small knob of butter for cooking','Greek yoghurt or sliced banana to serve'],
   notes:'NOVA 1-2. Only 3 ingredients. Naturally sweet from the banana — no added sugar needed. Freeze leftovers for quick weekday lunches.'},

  {id:'t3',name:'Cheese & Veggie Omelette Strips',category:'Lunch',subcategory:'Toddler',cookingTime:'10 min',servings:'1',
   recipe:'Beat eggs with a splash of milk. Finely dice or grate zucchini and capsicum. Cook vegetables in butter in small non-stick pan 2 min. Pour egg over vegetables. Cook on medium-low until mostly set, scatter cheese over half and fold. Cook 1 more min. Slide onto board and cut into strips.',
   ingredients:['2 eggs','1 tbsp milk','2 tbsp grated zucchini','2 tbsp finely diced red capsicum','2 tbsp grated cheddar cheese','Small knob of butter','Tiny pinch of salt'],
   notes:'NOVA 1-3. Strips are easier for toddlers to pick up than wedges. Any soft vegetables work — peas, corn and spinach are great too.'},

  {id:'t4',name:'Homemade Hummus with Veggie Sticks',category:'Lunch',subcategory:'Toddler',cookingTime:'10 min',servings:'4',
   recipe:'Drain chickpeas and blend with tahini, lemon juice, garlic, olive oil and a splash of water until very smooth. Season with a tiny pinch of salt. Serve in a bowl with steamed carrot sticks, cucumber sticks and strips of soft capsicum for dipping.',
   ingredients:['400 g can chickpeas, drained','2 tbsp tahini','Juice of 1/2 lemon','1 small garlic clove','2 tbsp extra-virgin olive oil','2-3 tbsp water','Tiny pinch of salt','Carrot sticks, cucumber sticks, soft capsicum strips to serve'],
   notes:'NOVA 1-3. Blend very smooth for young toddlers. Steaming carrots makes them soft enough for babies just starting finger foods.'},

  {id:'t5',name:'Mini Frittata Muffins',category:'Lunch',subcategory:'Toddler',cookingTime:'25 min',servings:'12 muffins',
   recipe:'Beat eggs with milk and a pinch of salt. Finely chop spinach, grate zucchini and squeeze out excess water, dice roasted capsicum. Mix vegetables and cheese into egg mixture. Pour into greased mini muffin tin. Bake at 180C for 18-20 min until puffed and set. Cool slightly before serving.',
   ingredients:['6 eggs','3 tbsp milk','1/2 cup baby spinach, finely chopped','1/2 cup grated zucchini, squeezed dry','1/4 cup roasted capsicum, finely diced','1/2 cup grated cheddar','Tiny pinch of salt','Butter or oil to grease tin'],
   notes:'NOVA 1-3. Make a batch on Sunday and refrigerate for the week. Freeze well too. Perfect size for little hands.'},

  {id:'t6',name:'Sweet Potato & Lentil Patties',category:'Lunch',subcategory:'Toddler',cookingTime:'35 min',servings:'10 patties',
   recipe:'Bake or microwave sweet potato until tender, scoop out flesh. Cook red lentils in water until very soft, drain well. Mash sweet potato and lentils together with cumin, garlic powder and a pinch of salt. Add flour to bind. Shape into small flat patties. Pan-fry in olive oil 3 min per side until golden. Cool slightly before serving.',
   ingredients:['1 medium sweet potato','1/2 cup red lentils, rinsed','1 tsp ground cumin','1/4 tsp garlic powder','3 tbsp plain flour or oat flour','2 tbsp olive oil','Tiny pinch of salt'],
   notes:'NOVA 1-2. Freeze raw patties between baking paper sheets. Cook straight from frozen. Rich in iron and fibre.'},

  {id:'t7',name:'Ricotta & Veggie Pasta',category:'Lunch',subcategory:'Toddler',cookingTime:'20 min',servings:'2',
   recipe:'Cook small pasta shapes until very soft. Meanwhile steam peas and finely diced zucchini until tender. Drain pasta, reserve a splash of cooking water. Mix ricotta with a spoonful of pasta water to loosen. Toss pasta and vegetables through ricotta. Add grated parmesan. Serve warm.',
   ingredients:['1/2 cup small pasta shapes (risoni, ditalini or broken spaghetti)','1/3 cup ricotta cheese','2 tbsp frozen peas','1/4 zucchini, finely diced','2 tbsp grated parmesan','Tiny pinch of salt'],
   notes:'NOVA 1-3. Cook pasta slightly beyond al dente so it is soft and easy for toddlers to chew. The ricotta makes a naturally creamy sauce with no cream needed.'},

  {id:'t8',name:'Chicken & Vegetable Rice Congee',category:'Lunch',subcategory:'Toddler',cookingTime:'35 min',servings:'3',
   recipe:'Bring stock to boil. Add rice and stir. Simmer uncovered, stirring occasionally, for 25-30 min until rice breaks down into a thick porridge. Add finely shredded cooked chicken breast, finely diced carrot and frozen peas for last 5 min. Stir to combine. Cool to a safe temperature before serving.',
   ingredients:['1/3 cup white rice','700 ml low-sodium chicken stock','100 g cooked chicken breast, very finely shredded','1 small carrot, finely diced','1/4 cup frozen peas','1/2 tsp finely grated ginger (optional)'],
   notes:'NOVA 1-3. Congee is a traditional weaning food across Asia. The silky texture is ideal for young toddlers. Refrigerates well for 3 days.'},

  {id:'t9',name:'Simple Egg Fried Rice',category:'Lunch',subcategory:'Toddler',cookingTime:'15 min',servings:'2',
   recipe:'Use cold cooked rice. Heat a little sesame oil in a non-stick pan. Add rice and break up clumps. Push to one side, scramble 2 eggs in the gap, then mix through rice. Add frozen peas and corn, stir-fry 2 min. Add a tiny splash of low-sodium soy sauce. Toss and serve.',
   ingredients:['1 cup cold cooked white rice','2 eggs','1/4 cup frozen peas','1/4 cup frozen corn','1 tsp sesame oil','1 tsp low-sodium soy sauce'],
   notes:'NOVA 1-3. Cold rice is essential for fried rice — it fries rather than steams. A great way to use leftover rice. No added salt needed if using low-sodium soy.'},

  {id:'t10',name:'Cheesy Broccoli & Potato Bites',category:'Lunch',subcategory:'Toddler',cookingTime:'30 min',servings:'12 bites',
   recipe:'Steam broccoli until very tender. Boil potato until soft. Mash potato well. Finely chop broccoli and mix through mash with grated cheddar, egg and a pinch of salt. Shape into small flat rounds. Bake on lined tray at 190C for 20 min, flipping halfway, until golden on both sides.',
   ingredients:['1 medium potato, peeled and boiled','1 cup broccoli florets, steamed','1/2 cup grated cheddar','1 egg','Tiny pinch of salt','Olive oil spray'],
   notes:'NOVA 1-3. Baking rather than frying makes these lighter and less messy. Freeze after baking and reheat in the oven for 10 min from frozen.'},

  {id:'t11',name:'Pea & Mint Smash on Toast',category:'Lunch',subcategory:'Toddler',cookingTime:'10 min',servings:'1',
   recipe:'Cook frozen peas in boiling water 2 min. Drain and smash roughly with a fork with a tiny pinch of salt, a squeeze of lemon and a few finely chopped mint leaves. Spread thickly on toasted wholegrain bread. Top with a crumble of soft ricotta or feta.',
   ingredients:['1/2 cup frozen peas','1 slice wholegrain bread','Squeeze of lemon','2-3 fresh mint leaves, finely chopped','2 tbsp ricotta or soft feta','Tiny pinch of salt'],
   notes:'NOVA 1-3. Keep the smash chunky for older toddlers or blend smooth for younger ones. Great iron source. Quick and nutritious.'},

  {id:'t12',name:'Soft Chicken & Vegetable Meatballs',category:'Lunch',subcategory:'Toddler',cookingTime:'25 min',servings:'16 meatballs',
   recipe:'Finely grate zucchini, squeeze moisture out in a clean cloth. Combine chicken mince with grated zucchini, carrot, parmesan, egg, garlic powder and a pinch of salt. Mix well. Roll into small balls. Bake at 190C on a lined tray for 18-20 min until cooked through and lightly golden. Serve with a simple tomato dipping sauce.',
   ingredients:['300 g chicken mince','1 small zucchini, grated and squeezed','1 small carrot, finely grated','2 tbsp grated parmesan','1 egg','1/4 tsp garlic powder','Tiny pinch of salt','Simple tomato sauce to serve'],
   notes:'NOVA 1-3. These freeze brilliantly — cook a full batch and freeze in portions. Defrost overnight in the fridge. Great for self-feeding toddlers.'},

  {id:'t13',name:'Homemade Baked Beans on Toast',category:'Lunch',subcategory:'Toddler',cookingTime:'20 min',servings:'3',
   recipe:'Saute finely diced onion in olive oil until very soft. Add garlic and cook 1 min. Add crushed tomatoes, cannellini beans, a pinch of cumin and a small drizzle of honey. Simmer 12 min until thick and saucy. Mash a few beans against the side of the pot to thicken further. Serve on toasted wholegrain bread cut into fingers.',
   ingredients:['400 g can cannellini beans, rinsed','400 g can crushed tomatoes','1 small onion, very finely diced','1 garlic clove, minced','1 tsp olive oil','1/4 tsp ground cumin','1 tsp honey','Wholegrain toast to serve'],
   notes:'NOVA 1-3. Far lower in sodium and sugar than commercial baked beans. Freeze in portions. The mashed beans naturally thicken the sauce.'},

  {id:'t14',name:'Spinach & Ricotta Pinwheels',category:'Lunch',subcategory:'Toddler',cookingTime:'25 min',servings:'12 pinwheels',
   recipe:'Combine ricotta with finely chopped wilted spinach, grated parmesan and a pinch of nutmeg. Spread over a sheet of homemade or store-bought shortcrust pastry. Roll up firmly into a log. Refrigerate 10 min to firm up. Slice into rounds about 2 cm thick. Bake at 190C on a lined tray for 20 min until golden.',
   ingredients:['200 g ricotta','1 cup baby spinach, wilted and very finely chopped','2 tbsp grated parmesan','Pinch of nutmeg','1 sheet shortcrust or puff pastry (look for brands with minimal ingredients)'],
   notes:'NOVA 2-3. Check pastry labels and choose one with the shortest, most recognisable ingredient list. Great in lunchboxes at room temperature.'},

  {id:'t15',name:'Tuna & Sweet Corn Patties',category:'Lunch',subcategory:'Toddler',cookingTime:'20 min',servings:'8 patties',
   recipe:'Drain tuna and corn well. Mix together with mashed potato, egg, grated cheese and a pinch of salt. Shape into small flat patties. Pan-fry in a little olive oil over medium heat 3 min per side until golden and heated through. Cool slightly. Serve with cucumber slices and a little plain yoghurt for dipping.',
   ingredients:['185 g can tuna in springwater, drained','1/2 cup canned corn kernels, drained','1 cup cold mashed potato','1 egg','1/4 cup grated cheddar','Tiny pinch of salt','1 tbsp olive oil','Cucumber and yoghurt to serve'],
   notes:'NOVA 1-3. Use tuna in springwater not brine to keep sodium low. These hold together best if made with cold mash. Freeze between sheets of baking paper.'},

  {id:'t16',name:'Banana & Blueberry Yoghurt Bowl',category:'Lunch',subcategory:'Toddler',cookingTime:'5 min',servings:'1',
   recipe:'Spoon full-fat Greek yoghurt into a bowl. Slice banana over the top. Add a handful of fresh or frozen (thawed) blueberries. Drizzle with a tiny amount of honey if over 12 months. Sprinkle with a small handful of rolled oats for texture.',
   ingredients:['1/2 cup full-fat Greek yoghurt','1/2 banana, sliced','Handful of blueberries fresh or thawed from frozen','1 tbsp rolled oats','Small drizzle of honey if over 12 months'],
   notes:'NOVA 1-2. No honey for babies under 12 months. Full-fat yoghurt is important for toddlers — they need the fat for brain development.'},

  {id:'t17',name:'Carrot & Apple Bircher Muesli',category:'Lunch',subcategory:'Toddler',cookingTime:'5 min (plus overnight soak)',servings:'2',
   recipe:'The night before, combine rolled oats with milk and grated apple. Stir and refrigerate overnight. In the morning, stir in grated carrot, a small dollop of yoghurt and a drizzle of honey if over 12 months. Serve cold or gently warmed.',
   ingredients:['1/2 cup rolled oats','3/4 cup full-fat milk','1/2 apple, grated with skin','1 small carrot, finely grated','2 tbsp full-fat Greek yoghurt','Small drizzle of honey if over 12 months'],
   notes:'NOVA 1-2. Soak overnight to soften oats completely — important for young toddlers. The carrot and apple add natural sweetness. Keeps refrigerated 2 days.'},

  {id:'t18',name:'Soft Beef & Vegetable Stew',category:'Lunch',subcategory:'Toddler',cookingTime:'45 min',servings:'4',
   recipe:'Finely dice beef into very small pieces. Brown in olive oil. Add finely diced onion, carrot, potato and zucchini. Cover with low-sodium beef stock. Simmer covered 30 min until vegetables are completely soft and beef is very tender. Mash slightly against the side of the pot for younger toddlers. Serve warm.',
   ingredients:['150 g lean beef mince or very finely diced chuck','1 small carrot, finely diced','1 small potato, finely diced','1/4 zucchini, finely diced','1/4 onion, very finely diced','300 ml low-sodium beef stock','1 tsp olive oil','1/4 tsp dried thyme'],
   notes:'NOVA 1-2. The smaller the dice, the quicker it cooks and the easier it is for toddlers to eat. Blend partially for very young toddlers.'},

  {id:'t19',name:'Corn & Cheese Fritters',category:'Lunch',subcategory:'Toddler',cookingTime:'20 min',servings:'8 fritters',
   recipe:'Mix corn kernels, grated zucchini (squeezed dry), grated cheese, egg, flour and a pinch of salt into a thick batter. Heat a little olive oil in a non-stick pan over medium heat. Drop spoonfuls of batter and flatten gently. Cook 3 min per side until golden and cooked through. Cool slightly before serving.',
   ingredients:['1/2 cup corn kernels fresh or frozen and thawed','1/2 cup grated zucchini, squeezed very dry','1/3 cup grated cheddar','1 egg','3 tbsp plain flour or wholemeal flour','Tiny pinch of salt','1 tbsp olive oil'],
   notes:'NOVA 1-3. These are a toddler staple. Freezer friendly — freeze in a single layer then bag them. Reheat in the oven or toaster for a quick lunch.'},

  {id:'t20',name:'Creamy Pumpkin Pasta',category:'Lunch',subcategory:'Toddler',cookingTime:'30 min',servings:'3',
   recipe:'Peel and cube pumpkin. Roast at 190C with a little olive oil for 20 min until tender. Blend with a splash of milk, garlic powder and a pinch of salt until smooth and creamy. Cook small pasta until very soft. Drain and toss through warm pumpkin sauce. Top with grated parmesan.',
   ingredients:['200 g butternut pumpkin, cubed','1/2 cup full-fat milk','1/4 tsp garlic powder','Tiny pinch of salt','1 tbsp olive oil','1 cup small pasta shapes','Grated parmesan to serve'],
   notes:'NOVA 1-3. The pumpkin becomes the sauce — no cream or butter needed. A great way to get vitamin A into toddlers. Make extra sauce and freeze in an ice cube tray.'},

  {id:'t21',name:'French Toast Fingers',category:'Lunch',subcategory:'Toddler',cookingTime:'10 min',servings:'1',
   recipe:'Beat egg with milk and a small pinch of cinnamon. Dip both sides of bread into egg mixture, letting it soak in. Cook in a pan with a little butter over medium-low heat for 2-3 min per side until golden. Slice into fingers. Serve with sliced banana or a few fresh berries.',
   ingredients:['1 egg','2 tbsp full-fat milk','1 slice wholegrain bread','Pinch of cinnamon','Small knob of butter','Sliced banana or berries to serve'],
   notes:'NOVA 1-3. No sugar needed — the banana adds all the sweetness. Wholegrain bread adds fibre. A great protein-rich lunch.'},

  {id:'t22',name:'Lentil & Vegetable Soup',category:'Lunch',subcategory:'Toddler',cookingTime:'35 min',servings:'5',
   recipe:'Saute onion and carrot in olive oil until soft. Add garlic and cumin, cook 1 min. Add red lentils and low-sodium stock. Simmer 20 min until lentils are completely broken down and soup is thick. Add diced zucchini for last 5 min. Blend partially or fully for younger toddlers. Serve warm with soft bread.',
   ingredients:['1/2 cup red lentils, rinsed','1 small onion, finely diced','1 carrot, finely diced','1/4 zucchini, diced','1 garlic clove, minced','1/4 tsp ground cumin','700 ml low-sodium vegetable or chicken stock','1 tsp olive oil','Soft bread to serve'],
   notes:'NOVA 1-2. Red lentils dissolve naturally and thicken the soup without any blending needed. Excellent iron source. Freezes perfectly in portions.'},

  {id:'t23',name:'Cottage Cheese & Fruit Bowl',category:'Lunch',subcategory:'Toddler',cookingTime:'5 min',servings:'1',
   recipe:'Spoon full-fat cottage cheese into a bowl. Top with small pieces of soft ripe fruit — whatever is in season. Sprinkle with a few rolled oats. For older toddlers, add a drizzle of honey. The cottage cheese is naturally creamy and mild in flavour.',
   ingredients:['1/3 cup full-fat cottage cheese','1/2 cup soft ripe fruit such as mango, peach, strawberry or banana','1 tbsp rolled oats','Drizzle of honey if over 12 months'],
   notes:'NOVA 1-2. Cut fruit into small pieces appropriate for your toddler. Cottage cheese is high in protein and calcium. No cooking required.'},

  {id:'t24',name:'Soft Vegetable Couscous',category:'Lunch',subcategory:'Toddler',cookingTime:'15 min',servings:'2',
   recipe:'Pour boiling low-sodium stock over couscous, cover and leave 5 min. Fluff with fork. Meanwhile steam finely diced carrot, zucchini and peas until very soft. Mix vegetables through couscous with a drizzle of olive oil and a tiny pinch of salt. Serve warm or at room temperature.',
   ingredients:['1/2 cup couscous','1/2 cup low-sodium chicken or vegetable stock, boiling','1 small carrot, finely diced and steamed','1/4 zucchini, finely diced and steamed','2 tbsp frozen peas, steamed','1 tsp olive oil','Tiny pinch of salt'],
   notes:'NOVA 1-3. Couscous is soft and easy for toddlers to eat with a spoon. Steaming vegetables until very soft is the key. Add a little grated parmesan on top for extra flavour.'},

  {id:'t25',name:'Apple & Cinnamon Porridge',category:'Lunch',subcategory:'Toddler',cookingTime:'10 min',servings:'1',
   recipe:'Cook rolled oats in milk over medium-low heat, stirring frequently, for 5-7 min until thick and creamy. Grate half an apple (with skin) into the porridge in the last minute of cooking. Stir in a pinch of cinnamon. Cool to a safe temperature. Serve topped with a spoonful of yoghurt.',
   ingredients:['1/3 cup rolled oats','2/3 cup full-fat milk','1/2 apple, grated','Pinch of cinnamon','1 tbsp full-fat Greek yoghurt to serve'],
   notes:'NOVA 1-2. Cooking milk directly into the oats makes it creamier than water. The grated apple adds natural sweetness and fibre. Naturally filling and warming.'},

  {id:'t26',name:'Zucchini & Cheese Muffins',category:'Lunch',subcategory:'Toddler',cookingTime:'30 min',servings:'12 mini muffins',
   recipe:'Grate zucchini and squeeze out as much moisture as possible in a clean cloth. Mix with eggs, olive oil, grated cheese, milk, flour and baking powder. Do not overmix. Spoon into greased mini muffin tins. Bake at 180C for 18-20 min until golden and a skewer comes out clean. Cool on rack.',
   ingredients:['1 medium zucchini, grated and squeezed dry','2 eggs','1/4 cup olive oil','1/2 cup grated cheddar','1/4 cup full-fat milk','1 cup wholemeal plain flour','1 tsp baking powder','Tiny pinch of salt'],
   notes:'NOVA 2-3. Squeeze the zucchini very thoroughly or the muffins will be wet. Freeze well — thaw overnight in the fridge. Serve warm or at room temperature.'},

  {id:'t27',name:'Chicken & Avocado Smash Wrap',category:'Lunch',subcategory:'Toddler',cookingTime:'10 min',servings:'1',
   recipe:'Finely shred or dice cooked chicken breast. Mash avocado with a squeeze of lemon and tiny pinch of salt. Warm a small soft wrap or flatbread briefly. Spread avocado over the wrap. Top with chicken and finely diced cucumber. Roll up and slice into small rounds for easy handling.',
   ingredients:['50 g cooked chicken breast, very finely shredded','1/4 ripe avocado','Squeeze of lemon','Small soft wrap or flatbread (minimal ingredients)','2 tbsp finely diced cucumber','Tiny pinch of salt'],
   notes:'NOVA 2-3. Use leftover roast chicken or poached breast. Cut into small rounds so toddlers can self-feed. Great for on the go in a container.'},

  {id:'t28',name:'Baked Egg in Tomato Cups',category:'Lunch',subcategory:'Toddler',cookingTime:'20 min',servings:'2',
   recipe:'Halve 2 medium tomatoes, scoop out seeds carefully with a spoon. Place in a small baking dish. Crack one small egg into each tomato cup. Season with a tiny pinch of salt. Bake at 180C for 15-18 min until egg white is fully set. Cool slightly. Serve with soft toast fingers for dipping.',
   ingredients:['2 medium tomatoes','2 eggs','Tiny pinch of salt','2 slices soft wholegrain bread, toasted and cut into fingers'],
   notes:'NOVA 1-2. Make sure egg whites are fully set for food safety with toddlers. The tomato becomes very soft and sweet when baked. A visually fun meal for curious toddlers.'},

  {id:'t29',name:'Mashed Chickpea & Carrot Bowl',category:'Lunch',subcategory:'Toddler',cookingTime:'15 min',servings:'2',
   recipe:'Steam carrot until completely tender. Drain chickpeas and mash roughly with a fork. Mash carrot through the chickpeas. Add olive oil, a squeeze of lemon and a pinch of cumin. Mix well. Serve warm topped with a spoonful of Greek yoghurt and a drizzle of olive oil. Offer with soft flatbread.',
   ingredients:['400 g can chickpeas, drained and rinsed','1 large carrot, peeled and steamed until very tender','2 tbsp extra-virgin olive oil','Squeeze of lemon','Pinch of ground cumin','Greek yoghurt and flatbread to serve'],
   notes:'NOVA 1-3. The texture can be adjusted from chunky to smooth by blending. Chickpeas are an excellent source of iron and protein for toddlers.'},

  {id:'t30',name:'Soft Polenta with Hidden Veg Sauce',category:'Lunch',subcategory:'Toddler',cookingTime:'25 min',servings:'3',
   recipe:'Saute finely diced onion, zucchini and carrot in olive oil until completely soft. Add crushed tomatoes and simmer 10 min. Blend sauce smooth. Meanwhile bring milk and water to boil, whisk in polenta and stir constantly 5 min until thick and creamy. Stir in parmesan. Serve polenta in bowl with hidden veg sauce spooned over and extra parmesan.',
   ingredients:['1/2 cup instant polenta','1 cup full-fat milk','1 cup water','2 tbsp grated parmesan','Hidden veg sauce: 1/2 onion + 1 small zucchini + 1 small carrot + 400g can crushed tomatoes + 1 tsp olive oil'],
   notes:'NOVA 1-3. The blended sauce hides several vegetables for reluctant eaters. Polenta is naturally gluten-free and its soft texture is ideal for toddlers. Make extra sauce and freeze.'},

  // ── NEW STIR-FRIES ───────────────────────────────────────────────
  {id:'sf1',name:'Mongolian Beef Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',cuisine:'Asian',meatType:'Beef',
   recipe:'Toss beef strips in cornflour and soy. Heat wok until smoking, cook beef in batches until caramelised, remove. In same wok fry garlic and ginger 30 sec. Add sauce (soy, brown sugar, hoisin, water), bring to boil until glossy. Return beef and toss to coat. Finish with spring onions. Serve over steamed rice.',
   ingredients:['600 g beef sirloin, thinly sliced against the grain','2 tbsp cornflour','3 tbsp soy sauce','4 garlic cloves, minced','1 tbsp fresh ginger, grated','3 tbsp hoisin sauce','2 tbsp brown sugar','80 ml water','4 spring onions, sliced on diagonal','2 tbsp neutral oil','Rice to serve'],
   notes:'Freeze the beef for 20 min before slicing — makes it much easier to get thin even strips.'},

  {id:'sf2',name:'Kung Pao Chicken Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',cuisine:'Asian',meatType:'Poultry',
   recipe:'Marinate chicken in soy, Shaoxing wine and cornflour 10 min. Mix sauce: soy, rice vinegar, sugar, cornflour, sesame oil. Stir-fry dried chillies and Sichuan pepper in oil 30 sec. Add chicken, stir-fry until cooked. Add capsicum and zucchini, toss 1 min. Pour in sauce, toss until thick and glossy. Stir through peanuts. Serve over rice.',
   ingredients:['600 g chicken thigh, diced 2cm','2 tbsp soy sauce','1 tbsp Shaoxing rice wine','1 tbsp cornflour','6 dried red chillies','1 tsp Sichuan peppercorns (optional)','1 red capsicum, diced','1 zucchini, diced','80 g roasted peanuts','Sauce: 3 tbsp soy + 2 tbsp rice vinegar + 1 tbsp sugar + 1 tsp cornflour + 1 tsp sesame oil + 60ml water','2 tbsp neutral oil'],
   notes:'Adjust dried chillies to taste — 3 for mild, 6 for medium, 10 for proper heat.'},

  {id:'sf3',name:'Honey Garlic Prawn Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'15 min',servings:'4',cuisine:'Asian',meatType:'Seafood',
   recipe:'Pat prawns dry. Mix sauce: honey, soy, garlic, a splash of lime juice. Heat wok smoking hot, add oil. Cook prawns 1 min per side until pink, remove. In same wok fry garlic 20 sec, add broccoli and capsicum, toss 2 min. Return prawns, pour over sauce, toss until everything is coated and sauce is thick. Finish with sesame seeds and spring onion.',
   ingredients:['600 g raw prawns, peeled and deveined','2 heads broccoli, cut into small florets','1 red capsicum, sliced','4 garlic cloves, minced','3 tbsp honey','3 tbsp soy sauce','Juice of 1 lime','1 tsp sesame oil','1 tbsp cornflour mixed with 2 tbsp water','Sesame seeds and spring onion to serve','2 tbsp neutral oil'],
   notes:'Do not overcrowd the wok with prawns or they will steam instead of sear. Cook in two batches if needed.'},

  {id:'sf4',name:'Black Bean Beef & Capsicum Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',cuisine:'Asian',meatType:'Beef',
   recipe:'Slice beef against grain into thin strips, toss with cornflour and soy. Fry in smoking hot wok in batches until browned, set aside. In same wok fry garlic, ginger and black bean paste 1 min. Add capsicums and onion, toss 2 min. Return beef, add oyster sauce and a splash of water, toss until glossy. Finish with sesame oil.',
   ingredients:['600 g beef rump or sirloin, thinly sliced','3 mixed capsicums, sliced','1 brown onion, sliced into wedges','3 garlic cloves, minced','1 tbsp fresh ginger, grated','2 tbsp black bean paste','2 tbsp oyster sauce','1 tbsp soy sauce','1 tbsp cornflour','1 tsp sesame oil','2 tbsp neutral oil','Rice or noodles to serve'],
   notes:'Black bean paste is sold in jars in the Asian foods aisle. Lee Kum Kee brand is reliable.'},

  {id:'sf5',name:'Thai Basil Chicken (Pad Kra Pao)',category:'Dinner',subcategory:'Stir-fry',cookingTime:'15 min',servings:'4',cuisine:'Asian',meatType:'Poultry',
   recipe:'Heat oil in wok over high heat. Fry garlic and fresh chillies until fragrant, 30 sec. Add chicken mince and break up, stir-fry 3 min until cooked and starting to caramelise. Add oyster sauce, fish sauce, soy and sugar, toss to combine. Remove from heat, fold through Thai basil until just wilted. Serve over steamed jasmine rice topped with a fried egg.',
   ingredients:['600 g chicken mince','4 garlic cloves, roughly chopped','3 long red chillies, sliced (adjust to taste)','Large handful Thai basil leaves','2 tbsp oyster sauce','1 tbsp fish sauce','1 tsp soy sauce','1 tsp caster sugar','2 tbsp neutral oil','4 fried eggs to serve','Jasmine rice to serve'],
   notes:'Thai basil is key — regular basil works in a pinch but has a different flavour. Look for it in Asian grocers.'},

  {id:'sf6',name:'Lemongrass Pork Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',cuisine:'Asian',meatType:'Pork',
   recipe:'Finely chop lemongrass, combine with garlic, fish sauce and sugar to make a paste. Toss pork with half the paste and cornflour. Stir-fry pork in batches in smoking hot wok until caramelised, remove. Fry remaining paste 30 sec, add snake beans or green beans and toss 2 min. Return pork. Season with extra fish sauce and lime. Scatter over fried shallots and fresh herbs.',
   ingredients:['600 g pork mince or finely sliced pork neck','3 lemongrass stalks, white part only, finely chopped','3 garlic cloves, minced','2 tbsp fish sauce','1 tsp caster sugar','1 tbsp cornflour','200 g snake beans or green beans, cut into 4cm pieces','2 long red chillies, sliced','Juice of 1 lime','Fried shallots, fresh coriander and mint to serve','2 tbsp neutral oil'],
   notes:'Pork neck gives more flavour and stays juicy. Ask the butcher to slice it thin if using that cut.'},

  {id:'sf7',name:'Teriyaki Salmon Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',cuisine:'Asian',meatType:'Seafood',
   recipe:'Mix teriyaki sauce: soy, mirin, sake, sugar. Sear salmon fillets skin-side up in hot oil 2 min per side until just cooked, remove. In same pan stir-fry bok choy, edamame and mushrooms 2 min. Add sauce, bubble 1 min. Return salmon, spoon sauce over. Serve over sushi rice with sesame seeds and pickled ginger.',
   ingredients:['4 salmon fillets (approx 150g each)','2 heads bok choy, quartered','150 g shiitake or oyster mushrooms','100 g frozen edamame, defrosted','Teriyaki sauce: 60ml soy + 60ml mirin + 2 tbsp sake + 1 tbsp sugar','1 tbsp neutral oil','1 tsp sesame oil','Sesame seeds and pickled ginger to serve','Sushi rice to serve'],
   notes:'Do not overcook the salmon — it should be just opaque in the centre. Carry-over heat will finish it.'},

  {id:'sf8',name:'Ginger Sesame Tofu & Vegetable Stir-fry',category:'Dinner',subcategory:'Stir-fry',cookingTime:'20 min',servings:'4',cuisine:'Asian',meatType:'Vegetarian',
   recipe:'Press tofu dry, cut into cubes, fry in oil until golden all over, remove. In same wok fry ginger and garlic 30 sec. Add broccoli, snap peas and carrot, toss on high heat 3 min. Return tofu. Mix sauce (soy, sesame oil, rice vinegar, honey, cornflour) and pour over, toss until coated and glossy. Finish with sesame seeds and spring onion.',
   ingredients:['400 g firm tofu, pressed and cubed','2 heads broccoli, cut into florets','150 g sugar snap peas','2 carrots, julienned','3 garlic cloves, minced','1 tbsp fresh ginger, grated','Sauce: 3 tbsp soy + 1 tbsp sesame oil + 1 tbsp rice vinegar + 1 tbsp honey + 1 tsp cornflour + 60ml water','2 tbsp neutral oil','Sesame seeds and spring onion to serve','Steamed rice to serve'],
   notes:'Extra-firm tofu works best. Pressing out the moisture is essential for a golden crust rather than a soggy one.'},

  // ── NEW DINNER SALADS ────────────────────────────────────────────
  {id:'sal1',name:'Warm Roasted Pumpkin & Feta Salad',category:'Dinner',subcategory:'Salad',cookingTime:'35 min',servings:'4',cuisine:'Other',meatType:'Vegetarian',
   recipe:'Toss pumpkin in olive oil, cumin and smoked paprika. Roast at 200°C for 25 min until golden and caramelised. Toast pine nuts in dry pan. Arrange rocket and spinach on platter, top with warm pumpkin, crumbled feta, pine nuts, pomegranate seeds and fresh mint. Drizzle with honey and a squeeze of lemon.',
   ingredients:['800 g butternut pumpkin, cut into 2cm cubes','150 g baby rocket and spinach','150 g Persian or Danish feta, crumbled','50 g pine nuts','Seeds of 1/2 pomegranate','Fresh mint leaves','1 tsp ground cumin','1 tsp smoked paprika','2 tbsp olive oil','1 tbsp honey','Juice of 1 lemon','Salt and pepper'],
   notes:'Add a can of drained chickpeas tossed with the pumpkin to make it more substantial.'},

  {id:'sal2',name:'Vietnamese Chicken & Herb Salad',category:'Dinner',subcategory:'Salad',cookingTime:'25 min',servings:'4',cuisine:'Asian',meatType:'Poultry',
   recipe:'Poach chicken breasts in simmering water with ginger, garlic and fish sauce 12 min. Rest 5 min then shred. Mix dressing: fish sauce, lime juice, sugar, garlic, chilli. Toss shredded chicken with wombok, carrot, spring onion, fresh mint, coriander and Vietnamese mint. Dress generously. Top with crushed peanuts and fried shallots.',
   ingredients:['4 chicken breasts','300 g wombok (Chinese cabbage), shredded','2 carrots, julienned','4 spring onions, sliced','Large handfuls fresh mint, coriander and Vietnamese mint','80 g roasted peanuts, roughly crushed','3 tbsp fried shallots','Dressing: 3 tbsp fish sauce + juice of 2 limes + 2 tbsp sugar + 1 garlic clove minced + 1 chilli minced'],
   notes:'Can be made ahead — keep dressing separate and toss just before serving. The wombok wilts slightly which is fine.'},

  {id:'sal3',name:'Smoked Salmon Nicoise',category:'Dinner',subcategory:'Salad',cookingTime:'20 min',servings:'4',cuisine:'French',meatType:'Seafood',
   recipe:'Boil eggs 7 min for jammy yolk, cool and halve. Blanch green beans 2 min, refresh in cold water. Boil baby potatoes until tender. Make dressing: Dijon, red wine vinegar, capers, olive oil. Arrange lettuce, potatoes, beans, eggs and smoked salmon on a platter. Scatter over olives, capers and dressing. Finish with fresh dill.',
   ingredients:['300 g smoked salmon','4 eggs','400 g baby potatoes, halved','200 g green beans, trimmed','2 heads butter lettuce','80 g kalamata olives','2 tbsp capers','Fresh dill','Dressing: 1 tbsp Dijon mustard + 2 tbsp red wine vinegar + 1 tbsp capers, chopped + 80ml olive oil + salt'],
   notes:'Tinned tuna works just as well as the smoked salmon for a more economical version.'},

  {id:'sal4',name:'Haloumi, Roasted Capsicum & Lentil Salad',category:'Dinner',subcategory:'Salad',cookingTime:'30 min',servings:'4',cuisine:'Middle Eastern',meatType:'Vegetarian',
   recipe:'Char capsicums directly over flame or under grill until blackened. Rest in covered bowl 10 min, peel and slice. Drain and rinse lentils. Pan-fry haloumi slices in a dry pan until deep golden both sides. Make dressing: pomegranate molasses, olive oil, lemon, cumin. Arrange rocket, lentils, capsicum and haloumi. Drizzle with dressing, scatter over fresh parsley and pomegranate seeds.',
   ingredients:['2 x 250 g blocks haloumi, sliced 1cm thick','2 x 400 g cans green or brown lentils, drained','3 large red capsicums','100 g baby rocket','Large handful flat-leaf parsley','Seeds of 1/2 pomegranate','Dressing: 2 tbsp pomegranate molasses + 3 tbsp olive oil + juice of 1 lemon + 1 tsp ground cumin + salt'],
   notes:'Pomegranate molasses is in the Middle Eastern section of most supermarkets — it keeps forever and is worth having.'},

  {id:'sal5',name:'Mexican Street Corn & Grilled Chicken Salad',category:'Dinner',subcategory:'Salad',cookingTime:'25 min',servings:'4',cuisine:'Mexican',meatType:'Poultry',
   recipe:'Marinate chicken thighs in lime juice, cumin, smoked paprika and garlic 15 min. Grill 5 min each side until charred. Char corn cobs directly on grill until blackened in spots, slice kernels off. Mix dressing: mayo, lime juice, chilli, coriander. Toss corn, black beans, tomatoes, avocado and romaine with dressing. Top with sliced chicken, cotija or feta, and corn chips.',
   ingredients:['4 chicken thighs, boneless skinless','3 corn cobs (or 2 x 400g cans corn, drained)','1 x 400 g can black beans, rinsed','2 avocados, sliced','250 g cherry tomatoes, halved','1 head romaine lettuce, chopped','100 g cotija or feta cheese, crumbled','Handful corn chips','Marinade: juice of 2 limes + 1 tsp cumin + 1 tsp smoked paprika + 2 garlic cloves minced','Dressing: 3 tbsp mayo + juice of 1 lime + 1/2 tsp chilli powder + 2 tbsp chopped coriander'],
   notes:'Charring the corn is the key step — do not skip it. It takes the salad from good to great.'},

  {id:'sal6',name:'Fattoush with Lamb Kofta',category:'Dinner',subcategory:'Salad',cookingTime:'30 min',servings:'4',cuisine:'Middle Eastern',meatType:'Lamb',
   recipe:'Mix lamb mince with onion, garlic, cumin, coriander, cinnamon and parsley. Shape into oval koftas. Grill or pan-fry until browned and cooked through. Toast or fry torn pita until crisp. Make dressing: lemon juice, sumac, olive oil, pomegranate molasses. Toss tomatoes, cucumber, radish, purslane or rocket, mint and parsley. Add pita chips and dress generously. Top with kofta and extra sumac.',
   ingredients:['500 g lamb mince','2 pita breads, torn into pieces','3 tomatoes, cut into wedges','2 Lebanese cucumbers, sliced','6 radishes, thinly sliced','Large handful flat-leaf parsley','Large handful fresh mint','Dressing: juice of 2 lemons + 1 tbsp sumac + 60ml olive oil + 1 tsp pomegranate molasses','Kofta spices: 1 tsp cumin + 1 tsp coriander + 1/2 tsp cinnamon + 1/2 onion grated + 2 garlic cloves minced','Olive oil for cooking'],
   notes:'Add a dollop of labne or Greek yoghurt to serve for a creamy contrast to the tangy dressing.'},

  // ── NEW LUNCH SALADS ─────────────────────────────────────────────
  {id:'lsal1',name:'Mango, Prawn & Avocado Salad',category:'Lunch',subcategory:'Salad',cookingTime:'15 min',servings:'3',cuisine:'Other',meatType:'Seafood',
   recipe:'Cook prawns in garlic butter 2 min per side until pink. Make dressing: lime juice, fish sauce, a pinch of sugar, fresh chilli. Halve and slice mango and avocado. Arrange watercress or mixed leaves on plates, top with mango, avocado, prawns and cucumber. Dress lightly. Scatter over fresh mint and lime zest.',
   ingredients:['300 g cooked or raw prawns, peeled','2 ripe mangoes, sliced','2 avocados, sliced','1 Lebanese cucumber, thinly sliced','100 g watercress or mixed leaves','Fresh mint leaves','Dressing: juice of 2 limes + 1 tbsp fish sauce + 1 tsp sugar + 1 small chilli minced','1 tbsp butter + 1 garlic clove for cooking prawns'],
   notes:'Use ripe mangoes — an underripe mango will make the salad taste flat. Frozen cooked prawns work fine, just defrost and pat dry.'},

  {id:'lsal2',name:'Roasted Beetroot, Walnut & Goat Cheese Salad',category:'Lunch',subcategory:'Salad',cookingTime:'45 min',servings:'3',cuisine:'French',meatType:'Vegetarian',
   recipe:'Wrap beetroots in foil, roast at 200°C for 40 min until tender. Cool, peel and quarter. Toast walnuts in dry pan. Make dressing: red wine vinegar, Dijon, honey, olive oil. Arrange rocket and radicchio, top with beetroot, crumbled goat cheese and walnuts. Dress and serve with crusty bread.',
   ingredients:['4 medium beetroots','100 g soft goat cheese, crumbled','80 g walnuts','100 g baby rocket','1/2 head radicchio, torn','Fresh chives','Dressing: 2 tbsp red wine vinegar + 1 tsp Dijon mustard + 1 tsp honey + 60ml olive oil + salt'],
   notes:'Vacuum-packed pre-cooked beetroot is a great shortcut for weekday lunches.'},

  {id:'lsal3',name:'Quinoa Tabbouleh',category:'Lunch',subcategory:'Salad',cookingTime:'20 min',servings:'4',cuisine:'Middle Eastern',meatType:'Vegetarian',
   recipe:'Cook quinoa per packet, spread on tray to cool. Very finely chop a large quantity of flat-leaf parsley and mint — these should be the dominant element, not a garnish. Mix through cooled quinoa along with diced tomato, cucumber and spring onion. Dress generously with olive oil and fresh lemon juice. Season well. Serve with pita and a dollop of hummus.',
   ingredients:['1 cup quinoa, rinsed','Large bunch flat-leaf parsley, very finely chopped','Handful fresh mint, finely chopped','3 tomatoes, finely diced','1 Lebanese cucumber, finely diced','3 spring onions, finely sliced','Juice of 2 large lemons','60 ml olive oil','Salt and pepper','Pita bread and hummus to serve'],
   notes:'The ratio should be mostly herb with quinoa as the base — not the other way around. Use a sharp knife and chop finely rather than pulsing in a processor.'},

  {id:'lsal4',name:'Smashed Cucumber & Sesame Salad',category:'Lunch',subcategory:'Salad',cookingTime:'10 min',servings:'3',cuisine:'Asian',meatType:'Vegetarian',
   recipe:'Place cucumbers on board and smash firmly with the flat of a knife or rolling pin until they crack and burst open. Tear roughly into pieces, salt and rest 10 min then squeeze out excess water. Make dressing: soy, rice vinegar, sesame oil, chilli crisp, garlic, a pinch of sugar. Toss cucumbers with dressing, top with sesame seeds, spring onion and fried shallots.',
   ingredients:['4 Lebanese cucumbers','1 tsp salt','Dressing: 2 tbsp soy sauce + 2 tbsp rice vinegar + 1 tbsp sesame oil + 1 tbsp chilli crisp (e.g. Lao Gan Ma) + 1 garlic clove minced + 1 tsp sugar','2 tbsp sesame seeds, toasted','2 spring onions, finely sliced','2 tbsp fried shallots'],
   notes:'Smashing rather than slicing creates rough edges that soak up the dressing much better. The salting step is important — do not skip it.'},

  // ── FERMENTATION ─────────────────────────────────────────────────
  {id:'f1',name:'Classic Kimchi',category:'Fermentation',subcategory:'Vegetables',cookingTime:'3–5 days',servings:'1 large jar',
   recipe:'Quarter napa cabbage lengthways, cut into 5cm pieces. Toss with salt and let sit 2 hours, tossing every 30 min until wilted. Rinse thoroughly 3 times, drain and squeeze dry. Make paste: blend gochugaru, fish sauce, garlic, ginger and sugar. Toss cabbage with paste, carrot and spring onion. Pack very tightly into a sterilised jar, pressing down until brine rises above veg. Leave 1–2cm headspace. Ferment at room temperature 1–5 days tasting daily. Burp the jar twice daily. Refrigerate when pleasantly sour and funky.',
   ingredients:['1 medium napa cabbage (wombok) about 1.5 kg','1/3 cup sea salt (non-iodised)','1/2 cup gochugaru (Korean red pepper flakes)','6 garlic cloves, minced','1 tbsp fresh ginger, grated','2 tbsp fish sauce (or soy sauce for vegan)','1 tsp sugar','2 large carrots, julienned','6 spring onions, cut into 4cm pieces'],
   notes:'Ferments faster in summer, slower in winter. Properly sour kimchi can sit in the fridge for months and keeps deepening in flavour. Use gloves when mixing — gochugaru stains everything.'},

  {id:'f2',name:'Classic Sauerkraut',category:'Fermentation',subcategory:'Vegetables',cookingTime:'1–4 weeks',servings:'1 large jar',
   recipe:'Remove outer leaves and set aside. Quarter cabbage, remove core, slice very thin (2mm) by hand or mandoline. Weigh cabbage. In a large bowl toss with 2% of its weight in non-iodised salt. Massage firmly for 10–15 min until significant brine is released. Pack tightly into a sterilised jar pressing down hard after each handful until brine rises above cabbage. Tuck a reserved cabbage leaf on top to keep shreds submerged. Weight down, cover loosely and ferment at room temperature, pushing down daily. Taste from day 5. Move to fridge when it reaches your preferred sourness.',
   ingredients:['1 medium green cabbage about 1 kg','20 g non-iodised sea salt (2% of cabbage weight)','Optional: 1 tsp caraway seeds'],
   notes:'Two ingredients. Nothing else. The salt draws water from the cabbage to create the brine — do not add water. Keep veg submerged at all times to prevent mould.'},

  {id:'f3',name:'Lacto-Fermented Dill Pickles',category:'Fermentation',subcategory:'Vegetables',cookingTime:'3–7 days',servings:'1 litre jar',
   recipe:'Make brine: dissolve salt in filtered water. Place dill, garlic, peppercorns and chilli in the bottom of a sterilised 1L jar. Pack cucumbers in vertically as tightly as possible. Pour brine over to cover completely — cucumbers must be submerged. Weight down with a small zip-lock bag filled with brine. Cover loosely. Ferment at room temperature 3–7 days. They will turn from bright to olive green and become pleasantly sour. Refrigerate when done.',
   ingredients:['500 g small pickling cucumbers or Lebanese cucumbers','1 tbsp non-iodised sea salt per 500 ml filtered water','4 large dill sprigs or 1 tbsp dill seeds','4 garlic cloves, lightly smashed','1 tsp black peppercorns','1 small dried chilli (optional)','Filtered or non-chlorinated water'],
   notes:'Use the freshest cucumbers possible — soft cucumbers make soft pickles. Cut the flower end off each cucumber. Do not use tap water if heavily chlorinated as it can inhibit fermentation.'},

  {id:'f4',name:'Kombucha First Ferment',category:'Fermentation',subcategory:'Drinks',cookingTime:'7–14 days',servings:'1 litre',
   recipe:'Brew strong sweet tea: steep 4 teabags in 1L boiling water 5 min. Add sugar and stir to dissolve. Cool completely to room temperature — this is critical, hot tea kills the SCOBY. Transfer to a clean glass jar. Add SCOBY and 100ml starter liquid. Cover with a breathable cloth secured with a rubber band. Ferment at room temperature out of direct sunlight 7–14 days tasting from day 7. When pleasantly tart, remove SCOBY and reserve with some liquid for next batch. Bottle and drink or proceed to second ferment.',
   ingredients:['1 litre filtered or boiled-then-cooled water','4 black tea bags (or 1 tbsp loose leaf)','60 g white sugar','1 SCOBY','100 ml starter liquid from a previous batch or plain raw store-bought kombucha'],
   notes:'Never use metal utensils or containers with a SCOBY. Get a SCOBY from a friend or buy from a health food store. The hotel usually comes with starter liquid.'},

  {id:'f5',name:'Kombucha Second Ferment (Ginger Lemon)',category:'Fermentation',subcategory:'Drinks',cookingTime:'2–3 days',servings:'1 litre',
   recipe:'After first ferment, pour kombucha into swing-top bottles leaving 3cm headspace. Add ginger and lemon juice to each bottle. Seal tightly. Leave at room temperature 2–3 days to build carbonation. Burp bottles once daily — open carefully over a sink. Refrigerate when fizzy enough for your taste. Serve cold.',
   ingredients:['1 litre first-ferment kombucha','1 tbsp fresh ginger juice (grate ginger and squeeze)','Juice of 1 lemon','1 tsp sugar per litre (optional — speeds carbonation)','Swing-top glass bottles'],
   notes:'Check daily — over-carbonated bottles can overflow dramatically when opened. Refrigerating stops the process. Try other flavours: mango and chilli, raspberry, passionfruit.'},

  {id:'f6',name:'Milk Kefir',category:'Fermentation',subcategory:'Dairy',cookingTime:'24–48 hours',servings:'500 ml',
   recipe:'Place kefir grains in a clean glass jar. Add full-fat milk. Cover with a breathable cloth and secure with a rubber band. Ferment at room temperature 24–48 hours, gently swirling once or twice. When thickened to a pourable yoghurt consistency and pleasantly tart, strain through a fine mesh strainer. The grains remain — return them to a clean jar with fresh milk to begin the next batch. Refrigerate finished kefir.',
   ingredients:['1 tbsp milk kefir grains','500 ml full-fat whole milk (unhomogenised is best)'],
   notes:'Kefir grains grow over time. Feed them with fresh milk daily or refrigerate between batches to slow. Kefir is more probiotic-rich than yoghurt.'},

  {id:'f7',name:'Homemade Yoghurt',category:'Fermentation',subcategory:'Dairy',cookingTime:'8–12 hours',servings:'1 litre',
   recipe:'Heat milk in a saucepan to 82°C, stirring occasionally to prevent scorching. Remove from heat and cool to 43°C — a thermometer is essential. Whisk in yoghurt starter. Pour into a warm sterilised jar. Keep at 40–44°C for 8–12 hours — use a yoghurt maker, turned-off oven with light on, or wrap in towels in a warm spot. Do not disturb during incubation. Refrigerate when set.',
   ingredients:['1 litre full-fat whole milk','2 tbsp plain yoghurt with live cultures as starter (or yoghurt starter sachets)'],
   notes:'Temperature control is the key. Too hot kills the bacteria; too cold and they are dormant. Always save 2 tbsp from each batch to start the next one.'},

  {id:'f8',name:'Labneh (Strained Yoghurt)',category:'Fermentation',subcategory:'Dairy',cookingTime:'12–24 hours straining',servings:'500 g',
   recipe:'Line a fine mesh strainer with muslin or a clean tea towel. Spoon 1 litre of full-fat plain yoghurt in, fold cloth over top, place over a bowl in the fridge. Let drain 12 hours for Greek-style yoghurt, 24 hours for firm labneh you can roll into balls. The liquid whey is nutritious — use it in bread, smoothies or soups.',
   ingredients:['1 litre full-fat plain yoghurt with live cultures','Muslin cloth or clean thin tea towel','1/2 tsp salt (optional — mix in before straining for savoury labneh)'],
   notes:'Roll firm labneh balls in herbs and store in olive oil in a jar in the fridge — keeps for weeks. Traditional Middle Eastern staple.'},

  {id:'f9',name:'Sourdough Starter',category:'Fermentation',subcategory:'Bread',cookingTime:'5–7 days to establish',servings:'1 starter',
   recipe:'Day 1: Mix 50g wholemeal flour with 50ml lukewarm filtered water in a clean jar. Stir well, cover loosely, leave at room temperature. Days 2–7: Discard all but 50g, add 50g flour and 50ml water, stir well. Repeat daily. By day 5–7 it should reliably double in size within 4–8 hours of feeding — it is ready to bake with.',
   ingredients:['Plain white flour or wholemeal flour','Filtered or boiled-then-cooled water (same weight as flour)'],
   notes:'Once active, store in the fridge and feed once a week. Bring to room temperature and feed the night before baking. The discard can be used in pancakes, crackers or flatbreads.'},

  {id:'f10',name:'Fermented Hot Sauce',category:'Fermentation',subcategory:'Condiments',cookingTime:'5–14 days',servings:'2 cups',
   recipe:'Make a 2% brine: dissolve 20g non-iodised salt per litre of filtered water. Roughly chop chillies, pack into a sterilised jar with garlic. Pour brine over to fully submerge. Weight down, cover loosely. Ferment at room temperature 5–14 days until pleasantly sour. Drain, reserving brine. Blend chillies and garlic with enough reserved brine to reach desired consistency. Bottle and refrigerate.',
   ingredients:['500 g fresh red chillies (Fresno, cayenne or birds eye)','4–6 garlic cloves','20 g non-iodised salt per 1 litre filtered water for brine','1 tsp sugar (optional)'],
   notes:'Fermentation mellows raw heat and adds depth you cannot get any other way. Keeps for months in the fridge. Start tasting from day 5.'},

  {id:'f11',name:'Fermented Garlic Honey',category:'Fermentation',subcategory:'Condiments',cookingTime:'4 weeks',servings:'1 jar',
   recipe:'Peel garlic cloves and place in a sterilised jar, fill it about halfway. Cover completely with raw honey. Stir to remove air bubbles. Loosely cover. Over the first week, flip the jar daily to keep garlic coated. Burp the lid every few days. Ferment at room temperature for 4 weeks minimum. The garlic mellows and sweetens, the honey becomes deeply savoury.',
   ingredients:['1 head of garlic, cloves separated and peeled','Enough raw unpasteurised honey to completely cover'],
   notes:'Raw honey is essential — pasteurised honey has no active organisms. Use the honey as a glaze for roast chicken or stir into dressings. The garlic loses its raw sharpness completely after 4 weeks.'},

  {id:'f12',name:'Lacto-Fermented Carrots with Ginger',category:'Fermentation',subcategory:'Vegetables',cookingTime:'3–5 days',servings:'1 litre jar',
   recipe:'Make brine: dissolve 20g non-iodised salt in 1 litre filtered water. Cut carrots into sticks. Place ginger and garlic in jar. Pack carrot sticks vertically and tightly. Pour brine over to cover. Weight down. Cover loosely. Ferment at room temperature 3–5 days, tasting daily. Refrigerate when pleasantly tangy and crunchy.',
   ingredients:['500 g carrots, peeled and cut into sticks','20 g non-iodised sea salt per litre filtered water','3 cm piece fresh ginger, sliced','2 garlic cloves, lightly smashed','1/2 tsp black peppercorns'],
   notes:'Fermented carrots stay remarkably crunchy. Eat as a snack, add to salads or serve alongside rich braises. The brine is also delicious as a dressing.'},

  {id:'f13',name:'Water Kefir',category:'Fermentation',subcategory:'Drinks',cookingTime:'24–48 hours',servings:'1 litre',
   recipe:'Dissolve sugar in a little warm water, top up to 1 litre with filtered water at room temperature. Add water kefir grains, a dried fig or apricot and a squeeze of lemon. Cover with a breathable cloth. Ferment 24–48 hours. Strain out grains (feed them with fresh sugar water for next batch). Bottle the liquid and drink plain or second ferment with fruit juice.',
   ingredients:['1 litre filtered water','60 g white sugar','2 tbsp water kefir grains','1 dried fig or apricot','Juice of 1/4 lemon'],
   notes:'Water kefir grains are dairy-free and vegan. Second ferment with mango juice, ginger or pomegranate for a naturally fizzy probiotic drink.'},

  {id:'f14',name:'Fermented Salsa',category:'Fermentation',subcategory:'Condiments',cookingTime:'2–3 days',servings:'2 cups',
   recipe:'Dice tomatoes, onion, jalapeño and coriander. Mix with garlic and lime juice. Add salt and mix well. Pack into a sterilised jar pressing down so juices rise. Cover and leave at room temperature 2–3 days, tasting daily. Refrigerate when pleasantly fermented and tangy.',
   ingredients:['4 ripe tomatoes, finely diced','1 small red onion, finely diced','2 jalapeños, finely diced','Large handful coriander, chopped','3 garlic cloves, minced','Juice of 1 lime','1 tsp non-iodised sea salt'],
   notes:'Only works with very fresh ripe tomatoes. The fermentation mellows the raw onion and jalapeño beautifully. Keeps a week in the fridge.'},

  {id:'f15',name:'Natural Ginger Beer',category:'Fermentation',subcategory:'Drinks',cookingTime:'3–5 days',servings:'1 litre',
   recipe:'First make a ginger bug: combine 2 tsp grated ginger and 2 tsp sugar with 2 tbsp water in a jar. Feed daily with the same amounts for 3–5 days until bubbly. For the ginger beer: boil 1L water with ginger and sugar, cool completely. Strain into a bottle, add lemon juice and 3 tbsp active ginger bug. Seal and leave at room temperature 2–3 days until carbonated. Refrigerate and open carefully.',
   ingredients:['Ginger bug: fresh ginger + white sugar + water fed daily for 3–5 days','1 litre filtered water','100 g sugar','50 g fresh ginger, sliced','Juice of 2 lemons','3 tbsp active ginger bug'],
   notes:'Plastic bottles are useful for gauging carbonation — squeeze to check pressure. Open slowly over a sink. The ginger bug takes 3–5 days to establish but then lives indefinitely with daily feeding.'},

  {id:'f16',name:'Beet Kvass',category:'Fermentation',subcategory:'Drinks',cookingTime:'2–5 days',servings:'1 litre',
   recipe:'Scrub beets thoroughly but do not peel. Dice into 2cm cubes. Place in a sterilised 1L jar with garlic and peppercorns. Dissolve salt in filtered water, pour over beets to cover. Weight down. Cover loosely. Ferment at room temperature 2–5 days. The liquid turns deep ruby red and becomes earthy, tangy and slightly salty. Strain and refrigerate.',
   ingredients:['3 medium raw beetroots','1 litre filtered water','20 g non-iodised sea salt','2 garlic cloves (optional)','1 tsp black peppercorns (optional)'],
   notes:'Traditional Eastern European probiotic tonic. Drink a small glass before meals. After straining you can do a second ferment with the same beets and fresh brine.'},

  {id:'f17',name:'Miso Paste',category:'Fermentation',subcategory:'Condiments',cookingTime:'4–8 weeks',servings:'800 g',
   recipe:'Soak dried soybeans overnight, cook until very soft (2–3 hrs). Drain. Blend or mash until smooth. Cool to room temperature. Mix in koji rice thoroughly, then mix in salt. Press firmly into a sterilised crock or jar, pushing out all air pockets. Smooth the surface, sprinkle with extra salt. Press plastic wrap directly on the surface, weigh down. Cover with cloth and store in a cool dark place 4–8 weeks.',
   ingredients:['250 g dried soybeans','250 g rice koji (find at Japanese grocers or online)','100 g non-iodised sea salt plus extra for surface'],
   notes:'Koji is rice inoculated with Aspergillus oryzae mould — available at Japanese grocery stores or online. White miso is ready sooner; leave longer for a deeper darker flavour.'},

  {id:'f18',name:'Fermented Jalapeños',category:'Fermentation',subcategory:'Vegetables',cookingTime:'5–7 days',servings:'1 jar',
   recipe:'Slice jalapeños into rounds. Pack tightly into a sterilised jar with garlic. Make brine: dissolve salt in filtered water. Pour over to completely cover chillies. Weight down. Cover loosely. Ferment at room temperature 5–7 days until pleasantly tangy and colour shifts from bright to olive green. Refrigerate.',
   ingredients:['300 g fresh jalapeños, sliced into rounds','3 garlic cloves, sliced','20 g non-iodised sea salt per litre filtered water','Filtered water to cover'],
   notes:'Better than pickled jalapeños — more complex, probiotic and alive. Once refrigerated they keep for months. The brine is also excellent as a hot sauce or dressing.'},

  {id:'f19',name:'Fermented Overnight Oats',category:'Fermentation',subcategory:'Other',cookingTime:'12–24 hours',servings:'2',
   recipe:'The night before, combine oats with warm water and a tablespoon of yoghurt, buttermilk or apple cider vinegar. Stir well, cover and leave at room temperature overnight. In the morning, cook normally with fresh water or milk. The porridge will be creamier, cook faster and have a pleasant subtle tang.',
   ingredients:['1 cup rolled oats','1 cup warm water','1 tbsp plain yoghurt, buttermilk or raw apple cider vinegar','Fresh milk or water for cooking','Pinch of salt'],
   notes:'Traditional preparation that reduces phytic acid and significantly improves iron and zinc absorption from the oats. The sourness is very mild — it just tastes like good porridge.'},

  {id:'f20',name:'Jun Tea (Green Tea Kombucha)',category:'Fermentation',subcategory:'Drinks',cookingTime:'7–10 days',servings:'1 litre',
   recipe:'Brew strong green tea, steep 3–5 min. Add raw honey while tea is warm but not hot — above 40°C damages honey. Cool completely. Transfer to a clean glass jar. Add Jun SCOBY and 100ml starter liquid. Cover with breathable cloth. Ferment at room temperature 7–10 days out of direct sunlight. Taste from day 7. Remove SCOBY, reserve with liquid for next batch. Bottle and refrigerate.',
   ingredients:['1 litre filtered water','2 green tea bags or 1 tbsp loose leaf green tea','60 g raw unpasteurised honey','1 Jun SCOBY','100 ml starter liquid from previous Jun batch'],
   notes:'Jun requires a specific SCOBY adapted to honey rather than sugar. The result is lighter and more delicate than standard kombucha. Source Jun SCOBYs from specialist fermentation suppliers.'},

  // ── PASTES & BLENDS ───────────────────────────────────────────────
  {id:'pb1',name:'Chipotle Spice Mix',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'5 min',servings:'6 tbsp',
   recipe:'Combine all ingredients in a jar and shake or stir well. Store in an airtight jar away from heat and light. Use to season chicken, pork, beef or vegetables before grilling, roasting or braising. Rub generously on meat and let sit 30 min to overnight before cooking.',
   ingredients:['2 tbsp smoked paprika','1 tbsp chipotle powder','1 tbsp ground cumin','1 tbsp garlic powder','1 tsp onion powder','1 tsp dried oregano','1 tsp brown sugar','1 tsp salt','1/2 tsp black pepper','1/2 tsp ground coriander'],
   notes:'Use 1–2 tsp per chicken breast, or 1 tbsp per 500g of mince. Doubles as a taco seasoning. Keeps 6 months in a sealed jar.'},

  {id:'pb2',name:'Italian Herb Blend',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'5 min',servings:'8 tbsp',
   recipe:'Combine all dried herbs and mix well. Store in an airtight jar. Use in pasta sauces, on pizza, rubbed on chicken or pork, stirred into soups and stews, or mixed with olive oil as a dipping sauce for bread.',
   ingredients:['2 tbsp dried oregano','2 tbsp dried basil','1 tbsp dried thyme','1 tbsp dried rosemary, crumbled finely','1 tbsp dried marjoram','1 tsp garlic powder','1 tsp onion powder','1/2 tsp dried sage','1/2 tsp chilli flakes (optional)','1/2 tsp fennel seeds, lightly crushed'],
   notes:'Far better value and fresher than supermarket Italian seasoning. Buy dried herbs in bulk from delis. Use within 6 months for best potency.'},

  {id:'pb3',name:'Vindaloo Paste',category:'Pastes & Spices',subcategory:'Pastes',cookingTime:'15 min',servings:'4 portions',
   recipe:'Toast dried chillies in a dry pan 1 min. Soak in hot water 10 min, drain. Blend soaked chillies with garlic, ginger, vinegar, cumin, mustard seeds, turmeric, cinnamon, cloves and salt until a smooth paste forms, adding a splash of water if needed. Store in a sterilised jar in the fridge. Use 2 tbsp per 500g of meat.',
   ingredients:['8 dried Kashmiri chillies (milder) or 4 dried bird eye chillies (hotter)','6 garlic cloves','2 cm piece fresh ginger','3 tbsp red wine vinegar or malt vinegar','2 tsp ground cumin','1 tsp brown mustard seeds','1/2 tsp turmeric','1/2 tsp ground cinnamon','4 whole cloves','1 tsp salt'],
   notes:'Goan-Portuguese in origin. The vinegar is essential — it is what makes vindaloo vindaloo. Keeps refrigerated 2 weeks or frozen 3 months.'},

  {id:'pb4',name:'Tikka Masala Paste',category:'Pastes & Spices',subcategory:'Pastes',cookingTime:'10 min',servings:'4 portions',
   recipe:'Blend all ingredients together until a smooth paste forms, adding a splash of water if needed. Store in a sterilised jar in the fridge. To use: fry 2 tbsp paste in oil 2 min until fragrant, add 400g diced chicken, brown, then add crushed tomatoes and coconut cream. Simmer 20 min.',
   ingredients:['4 garlic cloves','3 cm fresh ginger','2 tbsp tomato paste','1 tbsp ground cumin','1 tbsp ground coriander','2 tsp garam masala','2 tsp smoked paprika','1 tsp turmeric','1 tsp kashmiri chilli powder','1 tsp salt','2 tbsp vegetable oil','Juice of 1/2 lemon'],
   notes:'Homemade paste is dramatically better than jarred. Make a double batch and freeze in ice cube trays for instant weeknight curry.'},

  {id:'pb5',name:'Thai Green Curry Paste',category:'Pastes & Spices',subcategory:'Pastes',cookingTime:'15 min',servings:'4 portions',
   recipe:'Blitz all ingredients in a small food processor or pound in a mortar and pestle until a smooth paste forms. The mortar gives the best texture and fragrance. Store in a sterilised jar covered with a thin layer of oil in the fridge. Use 2–3 tbsp per can of coconut milk.',
   ingredients:['6 long green chillies, roughly chopped','4 green bird eye chillies','3 lemongrass stalks, white part finely sliced','4 kaffir lime leaves, central stem removed','3 cm galangal or fresh ginger','4 garlic cloves','3 shallots, roughly chopped','1 tsp ground cumin','1 tsp ground coriander','1/2 tsp white pepper','2 tbsp fish sauce','1 tsp shrimp paste (optional)','Large handful fresh coriander roots and stems'],
   notes:'Galangal and kaffir lime leaves are available at Asian grocers — they really are worth tracking down. Keeps refrigerated 1 week or frozen 3 months.'},

  {id:'pb6',name:'Harissa Paste',category:'Pastes & Spices',subcategory:'Pastes',cookingTime:'20 min',servings:'6 portions',
   recipe:'Char capsicums and dried chillies directly over a gas flame or under a hot grill until blackened. Place capsicums in a covered bowl 10 min, peel and deseed. Soak dried chillies in hot water 10 min, drain. Blend capsicums, chillies, garlic, cumin, coriander, caraway, lemon juice, salt and olive oil until a smooth paste.',
   ingredients:['3 large red capsicums','6 dried red chillies','4 garlic cloves','1 tsp ground cumin','1 tsp ground coriander','1/2 tsp caraway seeds, toasted and ground','Juice of 1 lemon','2 tbsp olive oil','1 tsp salt'],
   notes:'North African chilli paste. Spread on toast, stir into yoghurt, smear under chicken skin before roasting. Cover surface with olive oil in the jar to preserve.'},

  {id:'pb7',name:'Garam Masala',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'10 min',servings:'8 tbsp',
   recipe:'Toast all whole spices in a dry frying pan on medium heat, stirring constantly, for 2–3 min until fragrant and just beginning to smoke. Remove immediately and cool completely. Grind in a spice grinder or mortar and pestle until fine. Store in an airtight jar away from light.',
   ingredients:['3 tbsp coriander seeds','2 tbsp cumin seeds','1 tbsp black peppercorns','1 tbsp cardamom pods, husks removed','1 cinnamon stick, broken','1 tsp whole cloves','1 tsp fennel seeds','4 dried bay leaves, crumbled','1/2 tsp freshly grated nutmeg (add after grinding)'],
   notes:'Freshly toasted and ground garam masala is incomparably better than pre-ground. Grind in small batches and use within 3 months before the volatile oils fade.'},

  {id:'pb8',name:'Ras el Hanout',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'5 min',servings:'6 tbsp',
   recipe:'Combine all ground spices and mix thoroughly. Store in an airtight jar. Use on lamb, chicken, vegetables and couscous. Add 1–2 tsp to tagines, braises and marinades. Mix 1 tbsp with olive oil and lemon juice for a quick marinade.',
   ingredients:['1 tbsp ground cumin','1 tbsp ground coriander','1 tbsp ground ginger','2 tsp smoked paprika','2 tsp ground cinnamon','1 tsp ground turmeric','1 tsp ground cardamom','1 tsp ground black pepper','1 tsp ground allspice','1/2 tsp ground cloves','1/2 tsp ground nutmeg','1/2 tsp cayenne pepper','1/2 tsp ground fennel'],
   notes:'Ras el hanout means "head of the shop" — traditionally the best spice blend a merchant had. Add dried rose petals for a floral version.'},

  {id:'pb9',name:'Baharat (Middle Eastern 7-Spice)',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'5 min',servings:'6 tbsp',
   recipe:'Combine all spices and mix well. Store in an airtight jar. Use on lamb, beef, chicken and rice. A tablespoon into a lamb braise transforms it. Mix with olive oil and lemon for a marinade. Stir a teaspoon into rice cooking water for fragrant pilaf.',
   ingredients:['2 tbsp ground black pepper','2 tbsp ground coriander','2 tbsp ground cumin','1 tbsp ground cinnamon','1 tbsp ground cloves','1 tbsp ground cardamom','1 tbsp ground nutmeg','1 tsp ground allspice'],
   notes:'The foundational spice blend of Lebanese, Syrian and Palestinian cooking. Warmth of cinnamon and clove combined with earthiness of cumin and coriander defines the flavour of the region.'},

  {id:'pb10',name:'Za\'atar',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'10 min',servings:'8 tbsp',
   recipe:'Toast sesame seeds in a dry pan until golden, cool. Mix toasted sesame with dried thyme, sumac, oregano and salt. For za\'atar paste: mix the dry blend with enough olive oil to form a spreadable paste. Spread on flatbread, brush on chicken before roasting, stir into yoghurt or dip bread into the oil-moistened blend.',
   ingredients:['4 tbsp dried thyme','2 tbsp sumac','2 tbsp toasted sesame seeds','1 tbsp dried oregano','1 tsp salt','Olive oil to mix into paste (about 3–4 tbsp)'],
   notes:'Sumac is essential — it provides the distinctive lemony tartness. Za\'atar paste on flatbread with labneh is one of the great breakfasts.'},

  {id:'pb11',name:'Chermoula',category:'Pastes & Spices',subcategory:'Pastes',cookingTime:'10 min',servings:'4 portions',
   recipe:'Blend or finely chop coriander, parsley, garlic and preserved lemon rind together until almost a paste. Mix in olive oil, lemon juice, cumin, paprika, chilli flakes and salt. Use as a marinade for fish, chicken or lamb — coat generously and leave 30 min to overnight. Also excellent stirred through couscous.',
   ingredients:['Large bunch fresh coriander, roughly chopped','Large bunch flat-leaf parsley, roughly chopped','4 garlic cloves','1 preserved lemon rind, finely chopped (or zest of 2 lemons)','4 tbsp extra virgin olive oil','Juice of 1 lemon','2 tsp ground cumin','1 tsp smoked paprika','1/2 tsp chilli flakes','1 tsp salt'],
   notes:'North African herb marinade. Best made fresh — keeps refrigerated 3 days. Chermoula-marinated fish fillets grilled or baked is one of the great simple Moroccan dishes.'},

  {id:'pb12',name:'Dukkah',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'15 min',servings:'10 tbsp',
   recipe:'Toast hazelnuts in a 180°C oven for 8 min until skins crack. Rub in a tea towel to remove most skins. Toast sesame seeds, coriander seeds and cumin seeds separately in a dry pan until golden. Cool everything completely. Pulse hazelnuts briefly until roughly broken. Add toasted spices and sesame. Pulse a few more times — keep it chunky, not a powder. Season with salt and pepper.',
   ingredients:['100 g blanched hazelnuts','3 tbsp sesame seeds','2 tbsp coriander seeds','1 tbsp cumin seeds','1 tsp black pepper, coarsely ground','1 tsp salt','Optional: 1 tbsp dried mint or thyme'],
   notes:'Egyptian nut and spice blend. Dip bread in olive oil then in dukkah. Sprinkle over roasted vegetables, labneh, scrambled eggs or salads. Keeps sealed 2 weeks at room temperature.'},

  {id:'pb13',name:'Cajun Seasoning',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'5 min',servings:'8 tbsp',
   recipe:'Combine all spices and mix well. Store in an airtight jar. Use on chicken, fish, prawns, pork or vegetables. Blackened chicken: coat breast generously and cook in a very hot cast-iron pan with butter until charred and cooked through.',
   ingredients:['2 tbsp smoked paprika','1 tbsp garlic powder','1 tbsp onion powder','1 tbsp dried oregano','1 tbsp dried thyme','2 tsp ground black pepper','2 tsp ground white pepper','2 tsp ground cumin','1–2 tsp cayenne pepper','1 tsp salt'],
   notes:'Authentic Cajun seasoning contains both black and white pepper. Use generously — this is a robust blend designed for high-heat cooking.'},

  {id:'pb14',name:'BBQ Dry Rub',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'5 min',servings:'10 tbsp',
   recipe:'Combine all ingredients and mix thoroughly, breaking up any brown sugar lumps. Apply generously to meat at least 1 hour before cooking, preferably overnight. Use on pork ribs, brisket, chicken or pulled pork. The brown sugar caramelises to form a dark bark on the outside.',
   ingredients:['3 tbsp brown sugar','2 tbsp smoked paprika','1 tbsp ground black pepper','1 tbsp salt','1 tbsp garlic powder','1 tbsp onion powder','2 tsp ground cumin','2 tsp dry mustard powder','1 tsp cayenne pepper','1 tsp ground coriander'],
   notes:'The overnight rest with the rub is where the magic happens. For brisket, apply the rub the night before and leave uncovered in the fridge so the bark forms better.'},

  {id:'pb15',name:'Berbere (Ethiopian Spice Blend)',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'10 min',servings:'8 tbsp',
   recipe:'Toast whole spices (fenugreek, coriander, cumin, cardamom, peppercorns, cloves, allspice) in a dry pan 2 min until fragrant. Cool completely, grind finely. Combine with remaining ground spices and mix well. Store in an airtight jar. Use in Ethiopian stews, on roast chicken or in lentil dishes.',
   ingredients:['2 tbsp paprika','1 tbsp cayenne pepper','1 tbsp ground fenugreek','1 tsp ground coriander','1 tsp ground cumin','1 tsp ground ginger','1 tsp ground cinnamon','1 tsp ground cardamom','1/2 tsp ground black pepper','1/2 tsp ground cloves','1/2 tsp ground allspice','1/2 tsp ground nutmeg','1/2 tsp ground turmeric'],
   notes:'The spice blend at the heart of Ethiopian cuisine. Fenugreek is the distinctive note — do not skip it. Used in doro wat (chicken stew) and misir wat (spiced lentils).'},

  {id:'pb16',name:'Japanese Shichimi Togarashi',category:'Pastes & Spices',subcategory:'Spice Mixes',cookingTime:'5 min',servings:'6 tbsp',
   recipe:'Toast sesame seeds briefly in a dry pan. Combine all ingredients and mix well. Store in an airtight jar. Shake or sprinkle over ramen, udon, yakitori, grilled chicken, edamame, rice bowls or tempura.',
   ingredients:['2 tbsp shichimi chilli flakes or Korean gochugaru','1 tbsp toasted white sesame seeds','1 tbsp black sesame seeds','1 tbsp dried mandarin or orange peel, very finely ground','2 tsp Sichuan peppercorns, toasted and ground','1 tsp ground ginger','1 tsp nori (dried seaweed), crumbled very fine'],
   notes:'Japanese seven-spice blend. The citrus peel and Sichuan pepper are the distinctive elements. Dried mandarin peel can be made at home by drying mandarin skins in a low oven.'},

  {id:'pb17',name:'Chimichurri',category:'Pastes & Spices',subcategory:'Sauces & Butters',cookingTime:'10 min',servings:'6 portions',
   recipe:'Finely chop parsley, oregano and garlic by hand — a food processor makes it too wet. Combine with red wine vinegar, olive oil, chilli flakes, salt and pepper. Stir well and let sit at room temperature at least 30 min before using to allow flavours to meld.',
   ingredients:['Large bunch flat-leaf parsley, finely chopped (about 1 cup packed)','2 tbsp fresh oregano, finely chopped (or 1 tsp dried)','4 garlic cloves, finely minced','3 tbsp red wine vinegar','80 ml extra virgin olive oil','1 tsp chilli flakes','1 tsp salt','1/2 tsp black pepper'],
   notes:'Argentine herb sauce. Serve with grilled beef, chicken or lamb. Also excellent on roasted potatoes, eggs or stirred through grain salads. Keeps refrigerated 1 week.'},

  {id:'pb18',name:'Miso Butter',category:'Pastes & Spices',subcategory:'Sauces & Butters',cookingTime:'5 min',servings:'8 portions',
   recipe:'Bring butter to room temperature until very soft. Beat together with white miso paste until completely combined and smooth. Add a squeeze of lemon juice and mix through. Roll into a log in baking paper, refrigerate until firm or freeze. Slice off rounds as needed.',
   ingredients:['125 g unsalted butter, softened to room temperature','2 tbsp white miso paste (shiro miso)','1 tbsp lemon juice','Optional: 1 tsp toasted sesame seeds or fresh chives'],
   notes:'One of the best compound butters. Miso adds instant umami depth to anything it touches. Keeps refrigerated 2 weeks or frozen 3 months. Melt over grilled salmon, steak or corn.'},

  {id:'pb19',name:'Massaman Curry Paste',category:'Pastes & Spices',subcategory:'Pastes',cookingTime:'20 min',servings:'4 portions',
   recipe:'Toast dried chillies, coriander seeds, cumin seeds, cardamom and cloves in a dry pan 2 min. Cool and grind. Char shallots, garlic and galangal directly over a flame or under a grill. Blend all toasted spices with charred aromatics, lemongrass, shrimp paste, fish sauce and peanuts until a paste forms, adding a little water as needed.',
   ingredients:['6 dried Kashmiri chillies, soaked in hot water 10 min','3 shallots, charred','4 garlic cloves, charred','3 cm galangal, charred','2 lemongrass stalks, white part finely sliced','1 tsp shrimp paste','1 tbsp fish sauce','1 tbsp roasted peanuts','2 tsp coriander seeds','1 tsp cumin seeds','1/2 tsp cardamom seeds','4 whole cloves','1 tsp white pepper'],
   notes:'Massaman is the mildest and most aromatic of Thai curries, with Indian and Malay influences. The charring step is essential. Use 3 tbsp per can of coconut milk.'},

  {id:'pb20',name:'Nduja-Style Spicy Pork Paste',category:'Pastes & Spices',subcategory:'Pastes',cookingTime:'20 min',servings:'6 portions',
   recipe:'Blend all ingredients in a food processor until a rough paste forms. Transfer to a hot frying pan and cook stirring for 5–8 min until fat renders and paste darkens. Cool and store in a sterilised jar covered with olive oil. Use stirred through pasta, spread on pizza, melted into butter sauces or dotted on eggs.',
   ingredients:['300 g fatty pork mince','3 tbsp smoked paprika (sweet)','1 tbsp hot smoked paprika or cayenne','4 garlic cloves, minced','1 tsp fennel seeds, toasted and ground','1 tsp dried chilli flakes','1 tsp salt','1/2 tsp ground black pepper','2 tbsp red wine vinegar','2 tbsp olive oil'],
   notes:'Inspired by Calabrian nduja. Keeps refrigerated 1 week or freeze in portions. A spoonful transforms pasta sauce, pizza, scrambled eggs or braises instantly.'}
];
