// IMPORTANT — SEO preservation:
// Product `id` and category `id` MUST match the slugs indexed at
// palletoorivuragayalu.in/product/{slug}/ and /product-category/{slug}/.
// Renaming a slug here breaks Google's link equity. If you must rename,
// add a 301 in public/_redirects from the old URL to the new one.

export const categories = [
  { id: "veg-pickles",            name: "Veg Pickles",        accent: "bg-leaf-500" },
  { id: "nonveg-pickles",         name: "Non-Veg Pickles",    accent: "bg-spice-500" },
  { id: "gongura-nonveg-pickles", name: "Gongura Non-Veg",    accent: "bg-clay-500" },
  { id: "homemade-karappodulu",   name: "Karappodulu",        accent: "bg-clay-400" },
  { id: "traditional-snacks",     name: "Traditional Snacks", accent: "bg-clay-300" },
  { id: "traditional-sweets",     name: "Traditional Sweets", accent: "bg-spice-600" },
  { id: "godavari-putharekulu",   name: "Putharekulu",        accent: "bg-clay-200" },
  { id: "nonveg-pickles-combo",   name: "Combos",             accent: "bg-leaf-600" },
];

// Each product carries an explicit `prices: [{label, price}]` table — pricing is
// no longer derived from a global SIZES multiplier. `priceFrom` / `priceTo`
// remain as derived fields for backward compatibility with the JSON-LD layer.
const p = (id, name, category, image, prices, discount, short, bestSeller = false) => {
  const nums = prices.map((s) => s.price);
  return {
    id, name, category, image, prices,
    priceFrom: Math.min(...nums),
    priceTo: Math.max(...nums),
    singlePrice: prices.length === 1,
    discount, short, bestSeller,
  };
};

// Reusable size sets to keep product definitions terse.
const PICKLE_150 = [ // veg pickles + karappodulu (same flat rate)
  { label: "250 g", price: 150 },
  { label: "500 g", price: 300 },
  { label: "1 kg",  price: 600 },
];
const SNACK_200 = [ // snacks: no 250g
  { label: "500 g", price: 200 },
  { label: "1 kg",  price: 400 },
];
const SWEET_LIGHT = SNACK_200; // most lighter sweets share the 200/400 rate
const SWEET_RICH = [ // ariselu, sunnundalu, ghee mysore pak
  { label: "500 g", price: 350 },
  { label: "1 kg",  price: 700 },
];
const SWEET_KAJU = [ // kaju chikki, kaju burfi
  { label: "250 g", price: 250 },
  { label: "500 g", price: 500 },
  { label: "1 kg",  price: 1000 },
];

// Helper for non-veg pickles where every product has its own 250/500/1kg row.
const nv = (p250, p500, p1k) => [
  { label: "250 g", price: p250 },
  { label: "500 g", price: p500 },
  { label: "1 kg",  price: p1k  },
];

export const products = [
  // ----- Veg Pickles (all flat 150/300/600) -----
  p("andhra-avakaya-pickle",    "Andhra Avakaya Pickle",      "veg-pickles", "/images/products/andhra-avakaya.jpg",      PICKLE_150, 25, "The legendary raw-mango avakaya — sun-cured with mustard and red chilli.", true),
  p("allam-pickle",             "Allam Pickle",               "veg-pickles", "/images/products/allam-pickle.jpg",        PICKLE_150, 15, "Sharp ginger pickle that wakes up plain curd-rice in seconds."),
  p("andhra-magaya-pickle",     "Andhra Magaya Pickle",       "veg-pickles", "/images/products/magaya-pickle.jpg",       PICKLE_150, 20, "Grated raw mango cured with red chilli and fenugreek — a coastal classic."),
  p("bellam-avakaya-pickle",    "Bellam Avakaya Pickle",      "veg-pickles", "/images/products/bellam-avakaya.jpg",      PICKLE_150, 20, "Sweet-and-spicy mango avakaya rounded with jaggery."),
  p("chinthakaya-pickle",       "Chinthakaya Pickle",         "veg-pickles", "/images/products/chinthakaya-pickle.jpg",  PICKLE_150, 15, "Young tamarind ground with garlic and red chilli — tangy and bold."),
  p("gongura-pickle",           "Gongura Pickle",             "veg-pickles", "/images/products/gongura-pickle.jpg",      PICKLE_150, 15, "Andhra's iconic sorrel-leaf pickle, slow-cooked the village way."),
  p("karivepaku-pickle",        "Karivepaku Pickle",          "veg-pickles", "/images/products/karivepaku-pickle.jpg",   PICKLE_150, 15, "Curry-leaf pickle with deep, herbal warmth — pairs beautifully with idli."),
  p("kotthimeera-pickle",       "Kotthimeera Pickle",         "veg-pickles", "/images/products/kothimeera-pickle.jpg",   PICKLE_150, 15, "Coriander leaves pounded with tamarind and chilli — fragrant and fresh."),
  p("lemon-pickle",             "Lemon Pickle",               "veg-pickles", "/images/products/lemon-pickle.jpg",        PICKLE_150, 15, "Sun-soaked lemons aged with rock salt and red chilli — bright and zesty."),
  p("pandumirchi-pickle",       "Pandumirchi Pickle",         "veg-pickles", "/images/products/pandumirchi-pickle.jpg",  PICKLE_150, 15, "Plump red-ripe chillies stuffed with mustard masala. Fiery and fragrant."),
  p("tamota-pickle",            "Tamota Pickle",              "veg-pickles", "/images/products/tomato-pickle.jpg",       PICKLE_150, 15, "Sun-ripened tomatoes simmered with garlic, chilli and sesame oil."),
  p("vellulli-pickle",          "Vellulli Pickle",            "veg-pickles", "/images/products/vellulli-pickle.jpg",     PICKLE_150, 15, "Garlic cloves slow-pickled until soft and mellow — pungent comfort."),
  p("vusiri-pickle",            "Vusiri Pickle",              "veg-pickles", "/images/products/vusiri-pickle.jpg",       PICKLE_150, 15, "Indian gooseberry (amla) pickle — bright, sour and rich in vitamin C."),

  // ----- Non-Veg Pickles ----- (live site URLs have typos; preserved for SEO)
  p("mutton-boneless-pickle",   "Mutton Boneless Pickle",     "nonveg-pickles", "/images/products/mutton-boneless.jpg",     nv(450, 900, 1800), 17, "Tender boneless mutton in a fragrant blend of home-ground masalas.", true),
  p("tiger-prawns-pickle",      "Tiger Prawns Pickle",        "nonveg-pickles", "/images/products/tiger-prawns.jpg",        nv(400, 800, 1600), 20, "Plump tiger prawns marinated in mustard and garlic — coastal Andhra classic.", true),
  p("chicken-bonless-pickle",   "Chicken Boneless Pickle",    "nonveg-pickles", "/images/products/chicken-boneless.jpg",    nv(300, 600, 1200), 25, "Boneless chicken cured with chilli, fenugreek and cold-pressed sesame oil.", true),
  p("boti-pickle",              "Boti Pickle",                "nonveg-pickles", "/images/products/boti-pickle.jpg",         nv(400, 800, 1600), 18, "Slow-cooked goat boti in a deep, garlicky masala."),
  p("chicken-pickle",           "Chicken Pickle",             "nonveg-pickles", "/images/products/chicken-bone.jpg",        nv(250, 500, 1000), 20, "Bone-in country chicken pickled with chilli and pepper."),
  p("crab-pickle",              "Crab Pickle",                "nonveg-pickles", "/images/products/crab-pickle.jpg",         nv(400, 800, 1600), 18, "Sweet crab meat slow-cooked in spice oil — a coastal indulgence."),
  p("fish-pickle",              "Fish Pickle",                "nonveg-pickles", "/images/products/fish-pickle.jpg",         nv(250, 500, 1000), 20, "Firm fish chunks cured in chilli and tamarind — bright and savoury."),
  p("korameenu-fish-pickle",    "Korameenu Fish Pickle",      "nonveg-pickles", "/images/products/korameenu.jpg",           nv(375, 750, 1500), 18, "Prized korameenu fish in a slow-simmered Andhra spice base."),
  p("mutton-bon-pickle",        "Mutton Bone Pickle",         "nonveg-pickles", "/images/products/mutton-bone.jpg",         nv(400, 800, 1600), 18, "Bone-in mutton pickled the traditional way — rich and deeply flavourful."),
  p("mutton-keema-pickle",      "Mutton Keema Pickle",        "nonveg-pickles", "/images/products/mutton-keema.jpg",        nv(500, 1000, 2000), 18, "Minced mutton sautéed with onion, ginger and roasted spice."),
  p("natukodi-pickle",          "Natukodi Pickle",            "nonveg-pickles", "/images/products/natukodi-pickle.jpg",     nv(400, 800, 1500), 20, "Free-range country chicken in a robust home masala."),
  p("nethallu-fish-pickle",     "Nethallu Fish Pickle",       "nonveg-pickles", "/images/products/nethallu.jpg",            nv(250, 500, 1000), 20, "Tiny nethallu fish, crisp-tempered and steeped in spice oil."),
  p("pandugappa-fish-pickle",   "Pandugappa Fish Pickle",     "nonveg-pickles", "/images/products/pandugappa.jpg",          nv(400, 800, 1600), 18, "Meaty pandugappa cured with mustard, garlic and chilli."),
  p("small-prawns-pickle",      "Small Prawns Pickle",        "nonveg-pickles", "/images/products/small-prawns-pickle.jpg", nv(350, 700, 1400), 18, "Small, sweet prawns simmered in spice oil — packs a punch."),

  // ----- Gongura Non-Veg -----
  p("gongura-natukodi-pickle",  "Gongura Natukodi Pickle",    "gongura-nonveg-pickles", "/images/products/gongura-natukodi.jpg", nv(400, 800, 1600),  20, "Country chicken slow-cooked in tangy gongura with traditional Andhra spice.", true),
  p("boti-gongura-pickle",      "Boti Gongura Pickle",        "gongura-nonveg-pickles", "/images/products/boti-gongura.jpg",     nv(425, 850, 1700),  17, "Slow-simmered boti with sorrel leaves — rich, rustic, deeply flavourful.", true),
  p("gongura-chicken-pickle",   "Gongura Chicken Pickle",     "gongura-nonveg-pickles", "/images/products/gongura-chicken.jpg",  nv(350, 700, 1400),  18, "Boneless chicken folded into tart gongura masala."),
  p("gongura-mutton-pickle",    "Gongura Mutton Pickle",      "gongura-nonveg-pickles", "/images/products/gongura-mutton.jpg",   nv(500, 999, 1999),  18, "Tender mutton in a deeply sour gongura base — generations-old recipe."),
  p("gongura-prawns-pickle",    "Gongura Prawns Pickle",      "gongura-nonveg-pickles", "/images/products/gongura-prawns.jpg",   nv(425, 850, 1700),  18, "Sweet prawns set against the sharp tang of fresh sorrel leaves."),

  // ----- Karappodulu (all flat 150/300/600) -----
  p("idly-karam",               "Idly Karam",                 "homemade-karappodulu", "/images/products/idly-karam.jpg",       PICKLE_150, 15, "Roasted-lentil idli powder — toss with sesame oil for breakfast bliss."),
  p("kandi-karam",              "Kandi Karam",                "homemade-karappodulu", "/images/products/kandi-karam.jpg",      PICKLE_150, 15, "Toor-dal podi with chilli and curry leaf — earthy and warming."),
  p("karivepaku-karam",         "Karivepaku Karam",           "homemade-karappodulu", "/images/products/karivepaku-karam.jpg", PICKLE_150, 15, "Curry-leaf-forward podi that turns a bowl of rice into a meal."),
  p("munagaku-karam",           "Munagaku Karam",             "homemade-karappodulu", "/images/products/munagaku-karam.jpg",   PICKLE_150, 15, "Drumstick-leaf podi — nutritious, nutty and quietly fiery."),
  p("nallakaram",               "Nallakaram",                 "homemade-karappodulu", "/images/products/nalla-karam.jpg",      PICKLE_150, 15, "The classic black podi — toasted urad and red chilli."),
  p("nuvvula-karam",            "Nuvvula Karam",              "homemade-karappodulu", "/images/products/nuvvula-karam.jpg",    PICKLE_150, 15, "Sesame-rich podi with deep, roasted aroma."),
  p("palli-karam",              "Palli Karam",                "homemade-karappodulu", "/images/products/palli-karam.jpg",      PICKLE_150, 15, "Peanut podi — crunchy, mildly hot, kid-friendly."),

  // ----- Traditional Snacks (500g/1kg only — no 250g) -----
  p("best-chakralu-snacks",     "Chakralu",                   "traditional-snacks", "/images/products/chakralu.jpg",         SNACK_200, 15, "Spiral rice-flour crisps with sesame and ajwain."),
  p("bundi-mixture",            "Bundi Mixture",              "traditional-snacks", "/images/products/bundi-mixture.jpg",    SNACK_200, 15, "Crisp boondi tossed with peanuts, sev and curry leaves."),
  p("chegodilu",                "Chegodilu",                  "traditional-snacks", "/images/products/chegodilu.jpg",        SNACK_200, 15, "Ring-shaped Andhra snack with a satisfying crunch."),
  p("janthikalu",               "Janthikalu",                 "traditional-snacks", "/images/products/janthikalu.jpg",       SNACK_200, 15, "Classic chakli — pressed, golden, and gently spiced."),
  p("lavu-karappusa",           "Lavu Karappusa",             "traditional-snacks", "/images/products/lavu-karappusa.jpg",   SNACK_200, 15, "Thick sev with pepper and ajwain — a tea-time favourite."),
  p("pappu-chegodilu",          "Pappu Chegodilu",            "traditional-snacks", "/images/products/pappu-chegodilu.jpg",  SNACK_200, 15, "Lentil-rich chegodilu with extra bite."),
  p("ribbon-pakodi",            "Ribbon Pakodi",              "traditional-snacks", "/images/products/ribbon-pakodi.jpg",    SNACK_200, 15, "Flat, brittle ribbon murukku — addictive in the best way."),
  p("sanna-karappusa",          "Sanna Karappusa",            "traditional-snacks", "/images/products/sanna-karappusa.jpg",  SNACK_200, 15, "Fine sev with mild chilli — perfect over chaat or curd-rice."),

  // ----- Traditional Sweets -----
  p("bellam-gavvalu",           "Bellam Gavvalu",             "traditional-sweets", "/images/products/bellam-gavvalu.jpg",   SWEET_LIGHT,                                      15, "Shell-shaped sweet coated in jaggery syrup — crunchy and caramelly."),
  p("bundi-chikki",             "Boondi Chikki",              "traditional-sweets", "/images/products/boondi-chikki.jpg",    SWEET_LIGHT,                                      15, "Crisp boondi locked in jaggery — a nostalgic teatime sweet."),
  p("ghee-mysorepak",           "Ghee Mysorepak",             "traditional-sweets", "/images/products/ghee-mysorepak.jpg",   SWEET_RICH,                                       20, "Soft, ghee-laden Mysore pak that melts on the tongue."),
  p("gottam-kaja",              "Gottam Kaja",                "traditional-sweets", "/images/products/gottam-kaja.jpg",      [{label:"500 g",price:300},{label:"1 kg",price:600}], 15, "Hollow, syrup-soaked kaja with shatter-crisp layers."),
  p("madatha-kaja",             "Madatha Kaja",               "traditional-sweets", "/images/products/kaja.jpg",             SWEET_LIGHT,                                      15, "Layered, flaky kaja drenched in light sugar syrup."),
  p("kaju-burfi",               "Kaju Burfi",                 "traditional-sweets", "/images/products/kaju-burfi.jpg",       SWEET_KAJU,                                       18, "Pure cashew burfi — soft, fragrant, and lightly cardamomed."),
  p("kaju-chikki",              "Kaju Chikki",                "traditional-sweets", "/images/products/kaju-chikki.jpg",      SWEET_KAJU,                                       15, "Cashews set in clear jaggery brittle."),
  p("mysore-pak",               "Mysore Pak",                 "traditional-sweets", "/images/products/mysore-pak.jpg",       SWEET_LIGHT,                                      15, "The grainy, ghee-rich original — comforting and classic."),
  p("nethi-ariselu",            "Nethi Ariselu",              "traditional-sweets", "/images/products/nethi-ariselu.jpg",    SWEET_RICH,                                       15, "Jaggery and rice-flour discs fried in ghee — a festival staple."),
  p("nethi-sunnundalu",         "Nethi Sunnundalu",           "traditional-sweets", "/images/products/nethi-sunnundalu.jpg", SWEET_RICH,                                       15, "Roasted urad-dal laddus bound with ghee and jaggery."),
  p("nuvvula-chikki",           "Nuvvula Chikki",             "traditional-sweets", "/images/products/nuvvula-chikki.jpg",   SWEET_LIGHT,                                      15, "Sesame brittle with jaggery — wholesome and crunchy."),
  p("palli-chikki",             "Palli Chikki",               "traditional-sweets", "/images/products/palli-chikki.jpg",     SWEET_LIGHT,                                      15, "Peanut and jaggery brittle — the snack you grew up on."),
  p("ravva-laddu",              "Ravva Laddu",                "traditional-sweets", "/images/products/ravva-laddu.jpg",      SWEET_LIGHT,                                      15, "Semolina laddus with cashew, cardamom and ghee — homely and rich."),

  // ----- Putharekulu (pack of 10pcs — single fixed price, no size selector) -----
  p("bellam-dry-fruit-putharekulu-pack-of-10pcs", "Bellam Dry Fruit Putharekulu", "godavari-putharekulu", "/images/products/bellam-dryfruit-putharekulu.jpg", [{label:"Pack of 10",price:350}], 22, "Paper-thin rice sheets layered with jaggery and dry fruits (pack of 10)."),
  p("bellam-putharekulu-pack-of-10pcs",           "Bellam Putharekulu",           "godavari-putharekulu", "/images/products/bellam-putharekulu.jpg",          [{label:"Pack of 10",price:250}], 28, "Atreyapuram's iconic paper sweet, layered with jaggery (pack of 10)."),
  p("sugar-dry-fruit-putharekulu-pack-of-10pcs",  "Sugar Dry Fruit Putharekulu",  "godavari-putharekulu", "/images/products/sugar-dryfruit-putharekulu.jpg",  [{label:"Pack of 10",price:350}], 22, "Sugar-and-dry-fruit version of the famous paper-thin sweet (pack of 10)."),
  p("sugar-putharekulu-pack-of-10pcs",            "Sugar Putharekulu",            "godavari-putharekulu", "/images/products/sugar-putharekulu.jpg",           [{label:"Pack of 10",price:250}], 28, "Delicate sugar-dusted putharekulu, hand-rolled from scratch (pack of 10)."),

  // ----- Combos (single fixed price, no size selector) -----
  p("nonveg-pickles-combo-pack", "Non-Veg Pickles Combo Pack", "nonveg-pickles-combo", "/images/products/nonveg-combo.jpg", [{label:"Combo pack",price:999}], 17, "A curated tasting of our best non-veg pickles — perfect to gift."),
];

// Helper for components that don't have direct access to the array
export const productById = Object.fromEntries(products.map((p) => [p.id, p]));
export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));
