// Per-product extended SEO content. Keyed by product id (slug).
// Products without an entry fall back to template SEO derived from the product
// itself (see seoForProduct() in src/lib/productSeoHelpers.js).
//
// Pattern (from the existing live site, polished):
//   - title:      "{Product Name} — {hook phrase}"
//   - description: keyword-rich, action-oriented, 150-160 chars
//   - keywords:    primary + secondary keywords
//   - telugu:      native script for local SEO
//   - intro:       1-2 paragraph keyword-rich opener
//   - sections:    [{ heading, body }] long-form content blocks
//   - highlights:  bullet list of selling points
//   - ingredients: short list/sentence
//   - pairings:    "how to enjoy" / "perfect pairings" content

export const productSeo = {
  "andhra-avakaya-pickle": {
    title: "Andhra Avakaya Pickle — Authentic Spicy Mango Pickle Online",
    description:
      "Experience the fiery, tangy world-famous Andhra Avakaya Pickle. Handcrafted with premium raw mangoes, Guntur red chillies and cold-pressed sesame oil — using traditional Telugu recipes. No preservatives. Buy online.",
    keywords: [
      "Andhra Avakaya Pickle",
      "Spicy Mango Pickle",
      "Authentic South Indian Pickle",
      "Cut Mango Pickle with Mustard",
      "Guntur Chili Mango Pickle",
      "Buy Avakaya Online",
    ],
    telugu: "ఆంధ్ర ఆవకాయ",
    intro:
      "If Indian cuisine were a royal court, Andhra Avakaya would wear the crown. Known globally for its fiery heat, pungent aroma and unmatched tanginess, Avakaya is more than a condiment — it is a cultural icon of the Telugu people, packed into every spoonful of raw mango, mustard and Guntur red chilli.",
    sections: [
      {
        heading: "What makes our Avakaya different",
        body: "We source raw mangoes from Kothapalli Kobbari and Panchadara Kalasa varieties — prized for their firm inner endocarp that holds the spice masala without splitting. Each batch is hand-cured with Guntur Sannam red chilli powder, mustard seeds (ava), rock salt and cold-pressed gingelly oil — the four pillars of a real Avakaya.",
      },
      {
        heading: "Flavour profile & experience",
        body: "Expect a slow-build heat that opens with mustard's pungency, settles into Guntur chilli's deep warmth and finishes with the unmistakable sour-salty grip of cured mango. Cold-pressed sesame oil rounds every spoonful with a nutty, lingering richness — the Avakaya you remember from childhood.",
      },
      {
        heading: "How to enjoy Andhra Avakaya",
        body: "Start with a tablespoon over hot steamed rice with a teaspoon of ghee — the classic Andhra way. Pair with Mudda Pappu (plain dal) for the iconic 'Pappu-Avakaya' combination. Modern pairings: spread on dosas, fold into curd rice, or eat with hot phulkas.",
      },
    ],
    highlights: [
      "Sun-cured for 3 days in traditional ceramic Bharani jars",
      "Cold-pressed sesame (gingelly) oil",
      "Guntur Sannam red chilli powder",
      "Zero artificial preservatives, zero acetic acid",
      "Made in small batches — no machinery",
    ],
    ingredients:
      "Raw mango, mustard seeds, Guntur red chilli powder, rock salt, fenugreek, cold-pressed sesame oil, asafoetida.",
  },

  "mutton-boneless-pickle": {
    title: "Mutton Boneless Pickle — Premium Andhra Style Online",
    description:
      "Buy our premium Boneless Mutton Pickle online. Tender meat chunks, cold-pressed oils, hand-ground Andhra masala and zero preservatives. Order authentic Andhra non-veg pickle at Palletoori Vuragayalu.",
    keywords: [
      "Boneless Mutton Pickle",
      "Andhra Mutton Pickle online",
      "Buy Mutton Pickle India",
      "Spicy Mutton Pickle",
      "Homemade Mutton Pickle",
    ],
    telugu: "మటన్ బోన్‌లెస్ పచ్చడి",
    intro:
      "Enjoy the ultimate meat-lover's pickle without the hassle of bones. Our Boneless Mutton Pickle features tender, succulent chunks of fresh mutton marinated in a rich blend of traditional Andhra spices and slow-cooked in cold-pressed sesame oil — the way village kitchens have done it for generations.",
    sections: [
      {
        heading: "Why our Boneless Mutton Pickle",
        body: "We use fresh, never frozen, hand-trimmed mutton — boneless cuts only, so every spoonful is meat. The marinade is a slow-roasted house masala of chilli, turmeric, coriander and fenugreek. The cooking is unhurried: low flame, gingelly oil, the kind of patience you can taste.",
      },
      {
        heading: "Taste & texture profile",
        body: "Each piece is firm-tender, soaked deep with spice but never dry. The flavour opens with the bright heat of Guntur chilli, settles into the earthy depth of roasted coriander and finishes with the warm, nutty hum of cold-pressed sesame oil. Heat level: bold, but balanced.",
      },
      {
        heading: "How to enjoy",
        body: "A spoon over hot rice with ghee is the canonical Andhra serving. Pair with sannarava idli, curd rice or biryani as a side. For a quick meal: warm a tablespoon, fold into hot pulao, finish with raw onion and lime.",
      },
    ],
    highlights: [
      "Fresh boneless mutton, hand-trimmed",
      "Slow-cooked in cold-pressed sesame oil",
      "House-roasted Andhra masala",
      "No artificial preservatives, no colour",
      "Stays fresh 3 months refrigerated",
    ],
    ingredients:
      "Fresh boneless mutton, cold-pressed sesame oil, Guntur red chilli, mustard, fenugreek, coriander, turmeric, ginger, garlic, rock salt.",
  },

  "tiger-prawns-pickle": {
    title: "Tiger Prawns Pickle — Coastal Andhra Speciality Online",
    description:
      "Plump tiger prawns marinated in mustard, garlic and cold-pressed sesame oil — the coastal Andhra speciality. Slow-cooked, hand-spiced, zero preservatives. Buy Tiger Prawns Pickle online at Palletoori Vuragayalu.",
    keywords: [
      "Tiger Prawns Pickle",
      "Andhra Prawn Pickle online",
      "Coastal Andhra pickle",
      "Buy Prawns Pickle India",
      "Spicy Prawn Pickle",
    ],
    telugu: "రొయ్యల పచ్చడి",
    intro:
      "Coastal Andhra's signature pickle. Plump tiger prawns are deveined, marinated in mustard and garlic, and slow-cooked in cold-pressed sesame oil with hand-ground masala. The result is one of India's most prized seafood pickles — bold, briny, unforgettable.",
    sections: [
      {
        heading: "Sourced from the coast, not a freezer",
        body: "Our tiger prawns come from coastal Andhra Pradesh, graded by size on the day. We never use farm-frozen blocks. Each prawn is deveined and washed by hand before it enters the marinade.",
      },
      {
        heading: "How to enjoy",
        body: "A tablespoon over hot rice with ghee. Pair with sambar rice for a coastal lunch. For a fast meal: warm with a splash of oil, fold over toast, top with sliced onion and curry leaves.",
      },
    ],
    highlights: [
      "Plump tiger prawns from coastal Andhra",
      "Cold-pressed sesame oil base",
      "Mustard + garlic forward",
      "No preservatives, no added colour",
    ],
    ingredients:
      "Tiger prawns, cold-pressed sesame oil, mustard, garlic, Guntur red chilli, fenugreek, turmeric, rock salt.",
  },

  "chicken-bonless-pickle": {
    title: "Chicken Boneless Pickle — Authentic Andhra Online",
    description:
      "Boneless chicken cured with Guntur chilli, fenugreek and cold-pressed sesame oil — the Andhra way. Tender, smoky, zero preservatives. Buy authentic homemade Chicken Pickle at Palletoori Vuragayalu.",
    keywords: [
      "Chicken Boneless Pickle",
      "Boneless Chicken Pickle online",
      "Andhra Chicken Pickle",
      "Buy Chicken Pickle India",
    ],
    telugu: "చికెన్ బోన్‌లెస్ పచ్చడి",
    intro:
      "Tender, juicy, boneless chicken pieces marinated and slow-cooked in cold-pressed sesame oil with a hand-ground Andhra masala. A people-pleaser pickle — bold enough for traditionalists, friendly enough for newcomers.",
    sections: [
      {
        heading: "Why this is our most-loved chicken pickle",
        body: "Boneless cuts mean a clean eating experience. The masala leans into Guntur chilli and roasted fenugreek, with a quiet hum of garlic. Cold-pressed sesame oil holds everything together and acts as the natural preservative — no chemicals, no shortcuts.",
      },
    ],
    highlights: [
      "Fresh boneless chicken",
      "Cold-pressed sesame oil",
      "Roasted Andhra masala",
      "No preservatives",
    ],
    ingredients:
      "Boneless chicken, sesame oil, Guntur red chilli, mustard, fenugreek, turmeric, ginger-garlic, rock salt.",
  },

  "gongura-natukodi-pickle": {
    title: "Gongura Natukodi Pickle — Country Chicken in Sorrel Masala",
    description:
      "Free-range country chicken (Natukodi) slow-cooked in tangy gongura with traditional Andhra spice. The signature combination of two Andhra icons — sorrel and country chicken. Buy online at Palletoori Vuragayalu.",
    keywords: [
      "Gongura Natukodi Pickle",
      "Country chicken gongura",
      "Natukodi pickle online",
      "Andhra gongura chicken",
    ],
    telugu: "గోంగూర నాటుకోడి పచ్చడి",
    intro:
      "Two Andhra icons in a single jar. Free-range country chicken — Natukodi — slow-cooked with sun-wilted sorrel leaves (gongura) and a deep, layered Andhra masala. The chicken brings depth; gongura brings the unmistakable sour bite.",
    sections: [
      {
        heading: "Country chicken, not broiler",
        body: "Natukodi is the village's free-range bird — leaner, denser, deeper-flavoured than broiler. It needs slow cooking to surrender, and that's exactly what we do: long simmer, low flame, gingelly oil.",
      },
      {
        heading: "How to enjoy",
        body: "Best with hot rice and a generous ladle of ghee. The traditional plate: rice, Gongura Natukodi, a small chunk of raw onion, and a glass of buttermilk. That's lunch in coastal Andhra.",
      },
    ],
    highlights: [
      "Free-range Natukodi (country chicken)",
      "Fresh-picked gongura, sun-wilted",
      "Cold-pressed sesame oil",
      "No preservatives",
    ],
    ingredients:
      "Country chicken, fresh gongura leaves, sesame oil, red chilli, mustard, fenugreek, turmeric, garlic, rock salt.",
  },

  "boti-gongura-pickle": {
    title: "Boti Gongura Pickle — Goat Boti Slow-Simmered in Sorrel",
    description:
      "Slow-simmered goat boti with fresh sorrel leaves and Andhra masala. Rich, rustic, deeply flavourful — the kind of pickle that defines Sundays in Andhra. Buy Boti Gongura Pickle online.",
    keywords: [
      "Boti Gongura Pickle",
      "Goat boti pickle",
      "Gongura boti online",
      "Andhra boti pickle",
    ],
    telugu: "బోటి గోంగూర పచ్చడి",
    intro:
      "Goat boti — slow-simmered for hours until the texture turns tender and the spice gets under the skin. Folded into gongura just at the right tartness. This is the pickle for those who know.",
    sections: [
      {
        heading: "Long-cook, slow-build",
        body: "Boti needs time. A short cook gives you something chewy; a long one gives you the silken bite this pickle is built around. We cook ours for hours in sesame oil before the gongura ever meets the pot.",
      },
    ],
    highlights: [
      "Long, low-flame cook",
      "Cold-pressed sesame oil",
      "Fresh gongura",
      "No preservatives",
    ],
    ingredients:
      "Goat boti, gongura leaves, sesame oil, red chilli, mustard, fenugreek, garlic, rock salt.",
  },

  "bellam-putharekulu-pack-of-10pcs": {
    title: "Bellam Putharekulu — Atreyapuram Paper Sweet (Pack of 10)",
    description:
      "Authentic Atreyapuram Bellam Putharekulu — paper-thin rice sheets layered with jaggery, ghee and cardamom. The legendary 'Paper Sweet' of East Godavari, hand-rolled and fresh-packed. Order pack of 10 online.",
    keywords: [
      "Bellam Putharekulu",
      "Atreyapuram putharekulu",
      "Paper sweet Andhra",
      "Putharekulu online",
      "Godavari sweet",
      "Jaggery putharekulu",
    ],
    telugu: "బెల్లం పూతరేకులు",
    intro:
      "The paper-thin sweet that put Atreyapuram on India's culinary map. Wafer-fine rice-starch sheets are coaxed off a hot pot in seconds, folded around a jaggery centre, and brushed with pure ghee. Eat one and you understand why people drive hours for these.",
    sections: [
      {
        heading: "Made by hand — and only by hand",
        body: "There is no machine that makes real putharekulu. Each sheet is layered from a wet rice-paste film by a maker who has trained for years. We work with families in the Atreyapuram cluster of East Godavari, where this craft has lived for generations.",
      },
      {
        heading: "How to enjoy",
        body: "Eat at room temperature; never refrigerate (they go soggy). The sheet should crack delicately on the first bite, then the jaggery centre takes over. Best paired with a strong filter coffee — the sweetness needs the bitter contrast.",
      },
    ],
    highlights: [
      "Hand-rolled in Atreyapuram",
      "Pure cow ghee",
      "Jaggery from the Bobbili belt",
      "Pack of 10",
    ],
    ingredients: "Rice starch, jaggery, ghee, cardamom.",
  },

  "ghee-mysorepak": {
    title: "Ghee Mysorepak — Soft, Pure Ghee, Melt-in-the-Mouth",
    description:
      "Soft, ghee-laden Mysore Pak that melts on the tongue. Made with pure cow ghee, premium gram flour and sugar — the original recipe, no shortcuts. Buy Ghee Mysorepak online at Palletoori Vuragayalu.",
    keywords: [
      "Ghee Mysorepak online",
      "Soft mysore pak",
      "Pure ghee mysore pak",
      "Andhra mysorepak",
    ],
    intro:
      "The Mysorepak the way it was meant to be — soft, gritty in just the right way, drowning in pure ghee. Each cube is cut while warm, packed once cooled, never reformulated for shelf-life.",
    sections: [
      {
        heading: "Pure ghee — no vanaspati, ever",
        body: "Our Mysorepak begins and ends with cow ghee. A single batch uses more ghee than gram flour by weight. The sugar syrup is taken to a single-thread consistency by eye and ear — never timed with a thermometer.",
      },
    ],
    highlights: [
      "Pure cow ghee",
      "Soft, melt-in-mouth texture",
      "Premium gram flour",
      "No vanaspati, no margarine",
    ],
    ingredients: "Cow ghee, gram flour (besan), sugar.",
  },

  "idly-karam": {
    title: "Idly Karam — Authentic Andhra Gunpowder Podi Online",
    description:
      "Authentic Idly Karam — the original Andhra Gunpowder. Slow-roasted lentils, Guntur chillies, fresh garlic, ground in small batches. Spice up your idli, dosa, upma. Buy at Palletoori Vuragayalu.",
    keywords: [
      "Idly Karam",
      "Andhra Gunpowder online",
      "Idli podi",
      "Spicy Idli Karam Podi",
      "Karam podi for dosa",
    ],
    telugu: "ఇడ్లీ కారం",
    intro:
      "The original Andhra Gunpowder — Idly Karam. A bold blend of slow-roasted lentils, sun-dried Guntur chillies and fresh garlic, ground in small batches and packed warm. Mix into a spoon of sesame oil and your breakfast just got an upgrade.",
    sections: [
      {
        heading: "What goes into our Idly Karam",
        body: "Whole urad, channa and toor dal — roasted in a kadai until just golden. Guntur Sannam red chillies, sun-dried then dry-roasted to wake the heat. Fresh garlic, curry leaves added last for aroma. No oil in the powder, no fillers, no commercial chilli colour.",
      },
      {
        heading: "How to enjoy",
        body: "Stir a tablespoon into sesame oil and dab over hot idli or dosa. Sprinkle on upma. Mix into hot rice with ghee for a 5-minute meal. Travels well — every Andhra home keeps a jar in the kitchen and another for the suitcase.",
      },
    ],
    highlights: [
      "Slow-roasted lentils",
      "Guntur Sannam chillies",
      "Fresh garlic, curry leaves",
      "Small-batch, no commercial colour",
    ],
    ingredients:
      "Urad dal, channa dal, toor dal, Guntur red chilli, garlic, curry leaves, salt, asafoetida.",
  },

  "nallakaram": {
    title: "Nallakaram — Classic Andhra Black Podi Online",
    description:
      "The classic black podi of Andhra — toasted urad dal and Guntur red chilli, stone-pounded dark and bold. Earthy, smoky, deep heat. Buy Nallakaram online.",
    keywords: [
      "Nallakaram",
      "Andhra Black Podi",
      "Telugu Nalla Karam",
      "Urad Dal Podi Online",
      "Spicy Rice Mix Podi",
      "Buy Nallakaram Online",
    ],
    telugu: "నల్ల కారం",
    intro:
      "Nallakaram — literally 'black spice powder' — is the deepest, darkest podi in our karappodulu range. Built around dry-roasted urad dal and Guntur red chilli, our Nallakaram is the kind of bold, smoky, earthy podi that turns a quiet bowl of rice and ghee into a meal you remember. Stone-pounded in our Tanuku village kitchen by a four-generation family, it is karam in its purest, most uncompromising form.",
    sections: [
      {
        heading: "What makes our Nallakaram special",
        body: "We dry-roast urad dal slowly in an iron kadai until each grain turns a deep, almost coffee-brown — the colour and aroma that give Nallakaram its name. Guntur red chillies are toasted separately to coax out their colour without burning their fruit, then everything is hand-pounded on a stone grinder with garlic and rock salt. No machinery, no shortcuts — the coarse, fragrant texture is the whole point.",
      },
      {
        heading: "Flavour profile & experience",
        body: "Expect a deep, almost smoky roasted-urad warmth that opens the bite, followed by Guntur chilli's slow, steady heat and the savoury punch of garlic. The finish is long, earthy and slightly bitter in the best way — the unmistakable character of properly-roasted Nallakaram. It is more grown-up than peanut or sesame podis, the karam Andhra cooks reach for when the meal demands real backbone.",
      },
      {
        heading: "How to enjoy Nallakaram",
        body: "Sprinkle Nallakaram generously over hot rice with a drizzle of cold-pressed sesame oil or ghee and mix until every grain is dark and glossy. It also pairs beautifully with idli, dosa, pongal and curd rice — even a soft-boiled egg or buttered toast lifts with a pinch. Keep a small dabba on the dining table; many Telugu families do.",
      },
    ],
    highlights: [
      "Dry-roasted urad dal to deep brown",
      "Guntur red chillies, separately toasted",
      "Hand-pounded on stone grinder",
      "Small-batch from Tanuku, hand-packed",
      "No artificial flavours or preservatives",
    ],
    ingredients: "Urad dal, Guntur red chilli, garlic, cumin, rock salt, asafoetida.",
  },

  "gongura-pickle": {
    title: "Gongura Pickle — Andhra Sorrel Leaf Pickle Online",
    description:
      "Andhra's iconic Gongura Pickle — fresh sorrel leaves slow-cooked the village way with sesame oil, chilli and fenugreek. Tangy, deep, no preservatives. Buy Gongura Pickle at Palletoori Vuragayalu.",
    keywords: [
      "Gongura Pickle",
      "Sorrel leaf pickle",
      "Andhra gongura online",
      "Telugu gongura recipe",
    ],
    telugu: "గోంగూర పచ్చడి",
    intro:
      "Andhra's most beloved leaf — gongura — slow-cooked the village way. Fresh sorrel leaves de-stemmed, sun-wilted, sautéed in gingelly oil, then folded into a roasted spice masala. The result is a pickle that's sharply tart, deeply savoury, unmistakably ours.",
    sections: [
      {
        heading: "How to enjoy",
        body: "A spoon over hot rice with a teaspoon of ghee. The classic Andhra plate. Also excellent folded into curd rice, on dosa, or as a sandwich spread.",
      },
    ],
    highlights: [
      "Fresh sorrel leaves",
      "Cold-pressed sesame oil",
      "Sun-wilted, never bitter",
      "No preservatives",
    ],
    ingredients:
      "Gongura leaves, sesame oil, red chilli, mustard, fenugreek, garlic, rock salt.",
  },

  "nonveg-pickles-combo-pack": {
    title: "Non-Veg Pickles Combo Pack — Andhra Tasting Set Online",
    description:
      "Curated Non-Veg Pickles Combo Pack with our best Andhra mutton, chicken, prawns and fish pickles. Hand-bottled in Tanuku, cold-pressed oils, no preservatives. Buy online.",
    keywords: [
      "Non-Veg Pickles Combo Pack",
      "Andhra Pickles Combo",
      "Non-Veg Pickle Gift Pack",
      "Mutton Chicken Prawns Combo",
      "Buy Andhra Combo Online",
      "Telugu Pickles Gift Set",
    ],
    telugu: "నాన్ వెజ్ అచ్చడు కాంబో",
    intro:
      "The Non-Veg Pickles Combo Pack is the easiest way into our world — a curated tasting set of the best-selling pickles from our 4-generation Tanuku kitchen, bundled into one fixed-price box. Mutton, chicken, prawns and fish, each slow-cooked in cold-pressed sesame oil with hand-pounded Andhra masala. The Non-Veg Pickles Combo Pack is built for first-time orders, festive gifting, and Sunday tasting flights at home.",
    sections: [
      {
        heading: "What's inside the combo",
        body: "We rotate the selection seasonally around our most-loved jars — typically a mutton pickle, a chicken pickle, a prawns pickle and a fish pickle, each in tasting-friendly portions. Every jar is slow-cooked, hand-bottled in Tanuku, and finished with cold-pressed sesame oil. The Non-Veg Pickles Combo Pack lets you experience four distinct styles of Andhra spice oil without committing to four full jars upfront.",
      },
      {
        heading: "Why the combo is the smartest start",
        body: "Choosing your first Andhra non-veg pickle can be hard — every variety has its own character. The Non-Veg Pickles Combo Pack solves that by giving you the most beloved profiles side by side: the deep richness of mutton, the everyday warmth of chicken, the sweet brininess of prawns and the bright tang of fish. It is also a thoughtful, ready-to-gift box for non-veg pickle lovers — birthdays, housewarmings, Diwali, or sending a piece of Andhra to family abroad.",
      },
      {
        heading: "How to enjoy your combo",
        body: "Spoon each pickle over hot rice with a teaspoon of ghee — the classic Andhra way. Pair the spicier jars with curd rice to balance the heat, fold the lighter ones into biryani for an instant lift, or roll them into phulkas for a quick lunch. Refrigerate after opening and use a clean, dry spoon to extend shelf-life. The combo travels exceptionally well, making it a popular pick for journeys and gift hampers.",
      },
    ],
    highlights: [
      "Curated best-selling non-veg pickles",
      "Cold-pressed sesame (gingelly) oil",
      "Hand-bottled in Tanuku, small batches",
      "Tasting-friendly portion sizes",
      "Perfect gift-ready packaging",
      "No artificial preservatives or colours",
    ],
    ingredients: "Mutton, chicken, prawns and fish, Andhra red chilli powder, garlic, ginger, tamarind, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },

  // ===== Curated entries added in this session =====

  "allam-pickle": {
  title: "Allam Pickle — Andhra Ginger Pickle for Curd Rice Online",
  description:
    "Sharp, zingy Allam Pickle handcrafted in Tanuku with fresh ginger, tamarind and cold-pressed sesame oil. The Andhra ginger pickle that wakes up plain curd-rice. Buy online.",
  keywords: [
    "Allam Pickle",
    "Andhra Ginger Pickle",
    "Homemade Allam Pachadi",
    "Buy Allam Pickle Online",
    "Ginger Pickle for Curd Rice",
    "Traditional Telugu Ginger Pickle",
  ],
  telugu: "అల్లం పచ్చడి",
  intro:
    "Allam Pickle is the quiet hero of every Andhra meal — a sharp, sinus-clearing ginger pachadi that transforms a humble bowl of curd rice into a feast. Made in our village kitchen in Tanuku, our Allam Pickle balances the fiery bite of fresh ginger with tamarind's sourness, jaggery's whisper of sweetness and the warm depth of red chilli, hand-pounded on a stone grinder the way our grandmothers always did.",
  sections: [
    {
      heading: "What makes our Allam Pickle special",
      body: "We peel and grind fresh ginger by hand, then slow-cook it with seedless tamarind pulp, jaggery and red chilli powder in cold-pressed sesame oil. The masala — mustard, fenugreek and asafoetida — is hand-pounded on a stone grinder, never machine-blitzed. This patient method coaxes out ginger's full pungency while mellowing its raw edge, giving our Allam Pickle a glossy, jam-like texture that clings to every grain of rice.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a bright, lifting heat from ginger that opens the palate, followed by tamarind's deep tang and a soft jaggery finish that keeps you reaching for more. Cold-pressed sesame oil rounds the Allam Pickle with a nutty richness, while a faint bitterness from fenugreek gives it grown-up depth. It is bold, but never harsh — a pickle that wakes you up rather than burns you out.",
    },
    {
      heading: "How to enjoy Allam Pickle",
      body: "The classic pairing is a generous teaspoon of Allam Pickle stirred into curd rice — instant magic. Spread it on dosa or idli for a sharp counterpoint to coconut chutney, fold it into pongal, or serve it on a thali alongside dal and ghee rice. It also works beautifully as a dip for hot phulkas on a cold evening.",
    },
  ],
  highlights: [
    "Hand-pounded masala on stone grinder",
    "Cold-pressed sesame (gingelly) oil",
    "Balanced with jaggery and tamarind",
    "Zero artificial preservatives or colours",
    "Small-batch, hand-bottled in Tanuku",
  ],
  ingredients:
    "Fresh ginger, tamarind, jaggery, red chilli powder, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "andhra-magaya-pickle": {
  title: "Andhra Magaya Pickle — Grated Mango Pickle with Fenugreek",
  description:
    "Coastal Andhra Magaya Pickle made with sun-dried grated raw mango, red chilli and fenugreek. Slow-cured in cold-pressed sesame oil. A Tanuku family recipe. Buy online.",
  keywords: [
    "Andhra Magaya Pickle",
    "Grated Mango Pickle",
    "Maagaya Pachadi",
    "Buy Magaya Pickle Online",
    "Coastal Andhra Pickle",
    "Sun-dried Mango Pickle",
  ],
  telugu: "ఆంధ్ర మాగాయ",
  intro:
    "Andhra Magaya Pickle is the elegant cousin of Avakaya — a coastal Andhra classic where raw mango is grated, sun-dried and then cured with red chilli, mustard and fenugreek. Lighter than Avakaya yet just as soulful, our Andhra Magaya Pickle is handcrafted in Tanuku by a four-generation family using the same slow methods our great-grandmothers swore by, with cold-pressed sesame oil and no shortcuts.",
  sections: [
    {
      heading: "What makes our Andhra Magaya different",
      body: "We start with firm, freshly grated raw mango that is sun-dried until its moisture concentrates into a chewy, intense tang. This dried mango is then cured with Guntur red chilli powder, mustard, fenugreek and rock salt, hand-pounded on a stone grinder. A slow soak in cold-pressed sesame oil rehydrates the shreds into glossy ribbons. Our Andhra Magaya Pickle keeps its bite — never mushy, always toothsome.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a long, slow tang that lingers like a memory — sharper and more concentrated than fresh mango. The fenugreek brings a savoury bitterness, the chilli adds steady warmth and the mustard a gentle pungency. Cold-pressed sesame oil binds it all with a nutty hum. Andhra Magaya Pickle is the kind of flavour that improves with every passing week in the jar.",
    },
    {
      heading: "How to enjoy Andhra Magaya",
      body: "Eat it the classic way — a spoonful over hot rice with a generous drizzle of ghee. It pairs beautifully with Mudda Pappu, curd rice or sambar rice. Tuck it into a thali, spread it inside a dosa, or pack it with phulkas for travel. Andhra Magaya Pickle is a pantry staple that turns the simplest meal into something memorable.",
    },
  ],
  highlights: [
    "Sun-dried grated raw mango",
    "Hand-pounded fenugreek and mustard masala",
    "Cold-pressed sesame (gingelly) oil",
    "Slow-cured, small-batch tradition",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Raw mango, red chilli powder, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "bellam-avakaya-pickle": {
  title: "Bellam Avakaya Pickle — Sweet & Spicy Jaggery Mango Pickle",
  description:
    "Bellam Avakaya Pickle balances raw mango and Guntur chilli with mellow jaggery sweetness. Handcrafted in Tanuku with cold-pressed sesame oil. Sweet-spicy magic. Buy online.",
  keywords: [
    "Bellam Avakaya Pickle",
    "Sweet Mango Pickle",
    "Jaggery Mango Pickle",
    "Buy Bellam Avakaya Online",
    "Sweet Spicy Andhra Pickle",
    "Homemade Bellam Avakaya",
  ],
  telugu: "బెల్లం ఆవకాయ",
  intro:
    "Bellam Avakaya Pickle is the gentler, sweeter sibling of classic Avakaya — where raw mango and fiery red chilli meet the deep, caramel warmth of jaggery (bellam). Made in our village kitchen in Tanuku using a four-generation family recipe, our Bellam Avakaya Pickle is the pickle even non-spice-lovers fall for: bold yet rounded, fiery yet forgiving, traditional yet utterly addictive on a plate of hot rice.",
  sections: [
    {
      heading: "What makes our Bellam Avakaya special",
      body: "We hand-cut firm raw mangoes and cure them with hand-pounded mustard, Guntur red chilli powder, fenugreek and rock salt. The signature touch is unrefined jaggery, slowly melted to coat every mango piece, balanced with cold-pressed sesame oil. Our Bellam Avakaya Pickle is sun-cured in small batches until the jaggery deepens into a glossy, sticky masala that hugs each mango piece.",
    },
    {
      heading: "Flavour profile & experience",
      body: "First comes the warm caramel sweetness of jaggery, then the sour-salty grip of cured mango, and finally the slow, steady heat of Guntur chilli and mustard. Cold-pressed sesame oil adds a nutty roundness. Bellam Avakaya Pickle is sweet-and-spicy in the truest sense — the heat is honest, but the jaggery softens the blow so each spoonful feels indulgent rather than aggressive.",
    },
    {
      heading: "How to enjoy Bellam Avakaya",
      body: "Serve a tablespoon of Bellam Avakaya Pickle over hot rice with a drizzle of ghee — the classic Andhra Sunday lunch. Pair with plain dal, curd rice, or roti and yoghurt. It is also a hit with children and first-time pickle eaters thanks to the jaggery balance. Try it on dosas, in chapati rolls, or alongside a South Indian thali.",
    },
  ],
  highlights: [
    "Slow-melted unrefined jaggery",
    "Guntur Sannam red chilli powder",
    "Cold-pressed sesame (gingelly) oil",
    "Sun-cured in small traditional batches",
    "No artificial preservatives, no colours",
  ],
  ingredients:
    "Raw mango, jaggery, mustard seeds, Guntur red chilli powder, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "chinthakaya-pickle": {
  title: "Chinthakaya Pickle — Young Tamarind Pickle with Garlic Online",
  description:
    "Chinthakaya Pickle made from young green tamarind, ground with garlic, red chilli and cold-pressed sesame oil. A tangy, bold Andhra pachadi from Tanuku. Buy online.",
  keywords: [
    "Chinthakaya Pickle",
    "Young Tamarind Pickle",
    "Andhra Chinthakaya Pachadi",
    "Buy Chinthakaya Pickle Online",
    "Garlic Tamarind Pickle",
    "Homemade Chintakaya Pickle",
  ],
  telugu: "చింతకాయ పచ్చడి",
  intro:
    "Chinthakaya Pickle is one of Andhra's most underrated treasures — a vivid, tangy pachadi made from young green tamarind pods, ground together with garlic and red chilli before the tamarind matures into its familiar brown sweetness. Our Chinthakaya Pickle is handcrafted in Tanuku from seasonal raw tamarind, hand-pounded on a stone grinder and finished with cold-pressed sesame oil for that unmistakable village-kitchen depth.",
  sections: [
    {
      heading: "What makes our Chinthakaya Pickle special",
      body: "We use only young, green tamarind harvested before the pods harden. The flesh is pounded with garlic cloves, Guntur red chilli powder, mustard and fenugreek on a stone grinder, then finished with rock salt and cold-pressed sesame oil. There is no cooking — the rawness is the magic. Our Chinthakaya Pickle keeps its bright green-brown colour and aggressive tang that mellows beautifully over a few weeks.",
    },
    {
      heading: "Flavour profile & experience",
      body: "The first hit is electric sourness — sharper, greener and more alive than ripe tamarind. Then comes the pungent kick of raw garlic and the slow burn of Guntur chilli, with mustard adding pop. Cold-pressed sesame oil softens the edges and ties the masala together. Chinthakaya Pickle is fiercely tangy, deeply savoury and impossible to forget once you have tried it the right way.",
    },
  ],
  highlights: [
    "Made with young green tamarind",
    "Hand-pounded garlic and chilli masala",
    "Cold-pressed sesame (gingelly) oil",
    "Seasonal small-batch pickle",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Young green tamarind, garlic, red chilli powder, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "karivepaku-pickle": {
  title: "Karivepaku Pickle — Andhra Curry Leaf Pickle for Idli Online",
  description:
    "Karivepaku Pickle made with fresh curry leaves, tamarind and cold-pressed sesame oil. A deep, herbal Andhra pachadi from Tanuku — perfect with idli and dosa. Buy online.",
  keywords: [
    "Karivepaku Pickle",
    "Curry Leaf Pickle",
    "Andhra Karivepaku Pachadi",
    "Buy Karivepaku Pickle Online",
    "Curry Leaf Pickle for Idli",
    "Homemade Karivepaku Pickle",
  ],
  telugu: "కరివేపాకు పచ్చడి",
  intro:
    "Karivepaku Pickle is Andhra's love letter to the curry leaf. Where most cuisines treat curry leaves as a tempering afterthought, our Karivepaku Pickle places them centre-stage — sun-dried, hand-ground with tamarind, garlic and red chilli, and slow-cooked in cold-pressed sesame oil until the leaves release their full, earthy fragrance. Made in our Tanuku village kitchen by a four-generation family, it is herbal warmth in a jar.",
  sections: [
    {
      heading: "What makes our Karivepaku Pickle special",
      body: "We use only fresh, deep-green curry leaves, gently sun-dried to concentrate their oils. They are then hand-pounded on a stone grinder with tamarind, Guntur red chilli powder, garlic, mustard and fenugreek. A slow simmer in cold-pressed sesame oil binds the masala into a dark, glossy paste. Our Karivepaku Pickle smells of forest and home all at once — an aroma that wakes the entire kitchen.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a deep, almost smoky herbal warmth from the curry leaves, balanced by tamarind's mellow sourness and the steady heat of red chilli. Garlic and mustard add savoury punch, while sesame oil gives the Karivepaku Pickle its signature nutty roundness. It is less aggressive than mango or chilli pickles — more grounding, more comforting, the kind of flavour you crave on quiet weekday evenings.",
    },
    {
      heading: "How to enjoy Karivepaku Pickle",
      body: "Karivepaku Pickle is famously brilliant with idli and dosa — a small spoonful alongside coconut chutney is a South Indian breakfast upgrade. It also shines on hot rice with ghee, in curd rice, or smeared into a phulka roll. Try it as a sandwich spread or alongside upma and pongal for a fragrant, herbal lift.",
    },
  ],
  highlights: [
    "Fresh sun-dried curry leaves",
    "Hand-pounded masala on stone grinder",
    "Cold-pressed sesame (gingelly) oil",
    "Pairs beautifully with idli and dosa",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Curry leaves, tamarind, garlic, red chilli powder, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "kotthimeera-pickle": {
  title: "Kotthimeera Pickle — Fresh Coriander Leaf Pickle from Andhra",
  description:
    "Kotthimeera Pickle made with fresh coriander leaves, tamarind and red chilli, finished in cold-pressed sesame oil. A fragrant Tanuku pachadi for everyday meals. Buy online.",
  keywords: [
    "Kotthimeera Pickle",
    "Coriander Leaf Pickle",
    "Andhra Kotthimeera Pachadi",
    "Buy Kotthimeera Pickle Online",
    "Coriander Pickle for Rice",
    "Homemade Kotthimeera Pickle",
  ],
  telugu: "కొత్తిమీర పచ్చడి",
  intro:
    "Kotthimeera Pickle captures the bright, green soul of fresh coriander in a jar. Where curry leaves bring earthiness, coriander brings lift — a clean, herbal freshness that cuts through heavy meals. Our Kotthimeera Pickle is handcrafted in Tanuku using bunches of fresh coriander, pounded with tamarind and red chilli on a stone grinder and finished with cold-pressed sesame oil. Fragrant, fresh and unmistakably Andhra.",
  sections: [
    {
      heading: "What makes our Kotthimeera Pickle special",
      body: "We use fresh coriander leaves picked at peak fragrance, washed and gently wilted to lock in their oils. They are hand-pounded with tamarind pulp, Guntur red chilli powder, garlic, mustard and fenugreek on a stone grinder — never blitzed in a machine. A finish of cold-pressed sesame oil gives our Kotthimeera Pickle its signature gloss and a nutty depth that carries the bright coriander notes beautifully.",
    },
    {
      heading: "Flavour profile & experience",
      body: "First comes a wave of green, citrusy coriander fragrance, followed by tamarind's gentle tang and the slow warmth of red chilli. Garlic adds savoury punch while mustard pops on the tongue. Cold-pressed sesame oil rounds every spoonful with nutty richness. Kotthimeera Pickle is the freshest-tasting Andhra pickle in our range — vivid, herbal and full of life.",
    },
    {
      heading: "How to enjoy Kotthimeera Pickle",
      body: "A spoonful of Kotthimeera Pickle over hot rice with ghee is the simplest pleasure. It also brightens curd rice, dals and khichdi, and works as a fresh counterpoint to richer dishes like biryani or pulao. Spread it on dosa, smear it inside a phulka roll, or serve it on a thali alongside sambar rice for a clean, herbal lift.",
    },
  ],
  highlights: [
    "Fresh, fragrant coriander leaves",
    "Hand-pounded masala on stone grinder",
    "Cold-pressed sesame (gingelly) oil",
    "Bright, herbal, small-batch pickle",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Coriander leaves, tamarind, garlic, red chilli powder, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "lemon-pickle": {
  title: "Lemon Pickle — Sun-Cured Andhra Nimmakaya Pachadi Online",
  description:
    "Lemon Pickle sun-cured with rock salt, red chilli and cold-pressed sesame oil. A bright, zesty Andhra nimmakaya pachadi handcrafted in Tanuku. Buy online today.",
  keywords: [
    "Lemon Pickle",
    "Nimmakaya Pachadi",
    "Andhra Lemon Pickle",
    "Buy Lemon Pickle Online",
    "Sun-cured Lemon Pickle",
    "Homemade Nimmakaya Pickle",
  ],
  telugu: "నిమ్మకాయ పచ్చడి",
  intro:
    "Lemon Pickle is the bright spark on every Andhra thali — sun-soaked lemons aged with rock salt until the rind softens into chewy, tangy bliss. Our Lemon Pickle is handcrafted in Tanuku using whole lemons, cured slowly in the sun with red chilli and hand-pounded mustard, then finished with cold-pressed sesame oil. The result is a zesty, citrus-forward pachadi that lifts the simplest meal into something memorable.",
  sections: [
    {
      heading: "What makes our Lemon Pickle special",
      body: "We use firm, juicy lemons that we cut, salt and sun-cure patiently until the rinds turn translucent and tender. They are then folded into a hand-pounded masala of Guntur red chilli powder, mustard, fenugreek and rock salt, finished with cold-pressed sesame oil. Our Lemon Pickle is never boiled or shortcut — only the sun and time soften the rind into that signature chewy, melt-in-the-mouth bite.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a bright, mouth-watering citrus tang that hits first, followed by the warm depth of red chilli and a savoury mustard kick. The cured rind is chewy and intense, releasing waves of lemon oil with every bite. Cold-pressed sesame oil rounds the Lemon Pickle with nutty warmth. It is sharp, salty, gently spicy — the kind of pickle that wakes up dal, rice and conversation alike.",
    },
    {
      heading: "How to enjoy Lemon Pickle",
      body: "A piece of cured rind alongside curd rice is the classic Andhra comfort meal. Lemon Pickle also pairs beautifully with thalis, ghee rice, pongal and khichdi. Serve it with parathas and yoghurt, tuck it into lunch boxes, or eat it straight off the spoon when you need a quick zesty lift. A pantry must-have.",
    },
  ],
  highlights: [
    "Sun-cured whole lemon pieces",
    "Hand-pounded mustard and chilli masala",
    "Cold-pressed sesame (gingelly) oil",
    "Slow-aged, small-batch traditional method",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Lemons, red chilli powder, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "pandumirchi-pickle": {
  title: "Pandumirchi Pickle — Ripe Red Chilli Pickle with Mustard Online",
  description:
    "Pandumirchi Pickle made with plump ripe red chillies stuffed with mustard masala, slow-cured in cold-pressed sesame oil. Fiery, fragrant Tanuku pachadi. Buy online.",
  keywords: [
    "Pandumirchi Pickle",
    "Ripe Red Chilli Pickle",
    "Andhra Pandumirapakaya Pachadi",
    "Buy Pandumirchi Pickle Online",
    "Stuffed Red Chilli Pickle",
    "Spicy Andhra Pickle",
  ],
  telugu: "పండుమిర్చి పచ్చడి",
  intro:
    "Pandumirchi Pickle is Andhra's bravest pickle — plump, red-ripe chillies stuffed and cured with a fragrant mustard masala until they soften into smoky, fiery jewels. Our Pandumirchi Pickle is handcrafted in Tanuku by a four-generation family, using ripe (not green) chillies that bring sweetness alongside heat. Cold-pressed sesame oil and hand-pounded masala finish the jar with the kind of depth no shortcut can fake.",
  sections: [
    {
      heading: "What makes our Pandumirchi Pickle special",
      body: "We choose plump, sun-ripened red chillies — the kind that have turned fully red on the plant — and gently slit each one to hold the masala. A hand-pounded paste of mustard, fenugreek, garlic, tamarind and rock salt is tucked inside, and the chillies are slow-cured in cold-pressed sesame oil. Over days, the Pandumirchi Pickle deepens in colour and aroma as the oil draws out the chilli's natural sweetness.",
    },
    {
      heading: "Flavour profile & experience",
      body: "First comes the fruity sweetness of ripe red chilli — a flavour green chillies cannot match — followed by a strong, building heat. The mustard masala adds pungency and savoury depth, tamarind brings tang, and cold-pressed sesame oil ties everything with nutty richness. Pandumirchi Pickle is fiery, yes, but layered and fragrant — a pickle for those who want flavour to match the heat.",
    },
    {
      heading: "How to enjoy Pandumirchi Pickle",
      body: "A single chilli alongside hot rice and ghee is a meal in itself. Pandumirchi Pickle also pairs brilliantly with curd rice, where the dairy tames the heat into pure pleasure. Serve it with idli, dosa, pongal or on a thali. Adventurous eaters love it inside a paratha roll or as a side to bland khichdi for instant drama.",
    },
  ],
  highlights: [
    "Whole ripe red chillies, slit and stuffed",
    "Hand-pounded mustard masala",
    "Cold-pressed sesame (gingelly) oil",
    "Slow-cured small-batch tradition",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Ripe red chillies, mustard seeds, fenugreek, garlic, tamarind, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "tamota-pickle": {
  title: "Tamota Pickle — Andhra Tomato Pickle with Garlic & Chilli Online",
  description:
    "Tamota Pickle made with sun-ripened tomatoes simmered with garlic, red chilli and cold-pressed sesame oil. A Tanuku family recipe — tangy, garlicky, deep. Buy online.",
  keywords: [
    "Tamota Pickle",
    "Andhra Tomato Pickle",
    "Tomato Pachadi",
    "Buy Tomato Pickle Online",
    "Garlic Tomato Pickle",
    "Homemade Tamota Pachadi",
  ],
  telugu: "టమాట పచ్చడి",
  intro:
    "Tamota Pickle is the Andhra answer to comfort food — sun-ripened tomatoes slow-simmered with garlic, red chilli and tamarind until they collapse into a glossy, deeply savoury pachadi. Our Tamota Pickle is handcrafted in our Tanuku village kitchen using a four-generation family recipe, finished with cold-pressed sesame oil and hand-pounded masala. It is the pickle that disappears fastest from any jar, regardless of who is at the table.",
  sections: [
    {
      heading: "What makes our Tamota Pickle special",
      body: "We use ripe, red, full-flavoured tomatoes that we cook down slowly with garlic, Guntur red chilli powder, tamarind and rock salt in cold-pressed sesame oil. The masala — mustard, fenugreek and asafoetida — is hand-pounded on a stone grinder for that unmistakable village-kitchen depth. Our Tamota Pickle is patient, not hurried; the tomatoes reduce until their natural sugars caramelise into a sticky, jammy richness.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a sweet-tart tomato base that opens the bite, followed by the deep warmth of garlic, the slow burn of red chilli and a savoury anchor from mustard and fenugreek. Cold-pressed sesame oil binds everything with a nutty, lingering finish. Tamota Pickle is comforting and crowd-pleasing — tangy enough to brighten rice, savoury enough to eat with a spoon when no one is watching.",
    },
    {
      heading: "How to enjoy Tamota Pickle",
      body: "Spoon Tamota Pickle over hot rice with ghee, mix it into curd rice, or serve it on a thali alongside sambar and rasam. It works beautifully with idli, dosa, pongal and upma, and is a sandwich spread waiting to happen. Travellers love it with phulkas and parathas — a jar-sized taste of Andhra in any lunchbox.",
    },
  ],
  highlights: [
    "Sun-ripened tomatoes, slow-simmered",
    "Hand-pounded masala on stone grinder",
    "Cold-pressed sesame (gingelly) oil",
    "Garlic-forward Tanuku family recipe",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Tomatoes, garlic, red chilli powder, tamarind, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "vellulli-pickle": {
  title: "Vellulli Pickle — Andhra Garlic Pickle Slow-Cured Online",
  description:
    "Vellulli Pickle made with whole garlic cloves slow-pickled in cold-pressed sesame oil with red chilli and tamarind. A pungent, mellow Tanuku pachadi. Buy online.",
  keywords: [
    "Vellulli Pickle",
    "Andhra Garlic Pickle",
    "Vellulli Pachadi",
    "Buy Garlic Pickle Online",
    "Homemade Vellulli Pickle",
    "Whole Garlic Andhra Pickle",
  ],
  telugu: "వెల్లుల్లి పచ్చడి",
  intro:
    "Vellulli Pickle is comfort in clove form — whole garlic cloves slow-pickled in cold-pressed sesame oil until they soften into mellow, almost-sweet pearls of flavour. Our Vellulli Pickle is handcrafted in Tanuku using a four-generation family recipe, balancing garlic's pungent bite with tamarind's tang and Guntur red chilli's warmth. It is the kind of pickle that turns a quiet bowl of rice into something deeply satisfying.",
  sections: [
    {
      heading: "What makes our Vellulli Pickle special",
      body: "We peel each garlic clove by hand and slow-cure them whole — never crushed — so they keep their shape and absorb the masala fully. The hand-pounded masala of mustard, fenugreek, Guntur red chilli powder and tamarind is folded in gently, then everything rests in cold-pressed sesame oil. Over days, the Vellulli Pickle mellows beautifully — the garlic softens, the heat rounds out and the oil turns into liquid gold.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Bite into a clove and the first wave is pungent garlic — sharp, deep, unmistakable — followed by tamarind's tang and the slow warmth of red chilli. The slow cure transforms raw garlic's aggression into a mellow, almost buttery softness. Cold-pressed sesame oil rounds every spoonful with nutty richness. Vellulli Pickle is bold yet comforting — pungent without being harsh, intense without being tiring.",
    },
    {
      heading: "How to enjoy Vellulli Pickle",
      body: "A clove of Vellulli Pickle alongside hot rice and ghee is the classic Andhra winter meal. It also pairs beautifully with curd rice, dal-rice and pongal. Spread the oil and masala on dosa or idli, fold it into khichdi, or serve it with phulkas. Garlic lovers eat the cloves straight off the spoon — and we cannot blame them.",
    },
  ],
  highlights: [
    "Whole hand-peeled garlic cloves",
    "Slow-cured, never crushed",
    "Hand-pounded masala on stone grinder",
    "Cold-pressed sesame (gingelly) oil",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Garlic, red chilli powder, tamarind, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "vusiri-pickle": {
  title: "Vusiri Pickle — Andhra Amla Gooseberry Pickle with Vitamin C",
  description:
    "Vusiri Pickle made with whole Indian gooseberries (amla), red chilli and cold-pressed sesame oil. A bright, sour Tanuku pachadi rich in vitamin C. Buy online.",
  keywords: [
    "Vusiri Pickle",
    "Amla Pickle",
    "Indian Gooseberry Pickle",
    "Andhra Vusiri Pachadi",
    "Buy Amla Pickle Online",
    "Homemade Gooseberry Pickle",
  ],
  telugu: "ఉసిరి పచ్చడి",
  intro:
    "Vusiri Pickle is Andhra's pantry powerhouse — Indian gooseberries (amla), famously rich in vitamin C, cured with red chilli, mustard and cold-pressed sesame oil. Our Vusiri Pickle is handcrafted in Tanuku by a four-generation family using the same slow methods our grandmothers swore by. Bright, fiercely sour and deeply savoury, it is the kind of pickle that brings a meal alive with one small spoonful.",
  sections: [
    {
      heading: "What makes our Vusiri Pickle special",
      body: "We use firm, fresh amla that we gently steam to soften, then segment by hand. The pieces are folded into a hand-pounded masala of Guntur red chilli powder, mustard, fenugreek and rock salt, and slow-cured in cold-pressed sesame oil. No machinery, no shortcuts. Our Vusiri Pickle preserves the gooseberry's signature sour bite and the natural vitamin C amla is universally known for.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a sharp, mouth-puckering sourness that opens the palate, followed by red chilli's steady warmth and mustard's gentle pungency. Amla has its own bittersweet finish — a clean, slightly astringent note that lingers pleasantly. Cold-pressed sesame oil rounds the Vusiri Pickle with nutty richness. It is the most refreshing pickle in our range — sour, bright and oddly satisfying after a heavy meal.",
    },
    {
      heading: "How to enjoy Vusiri Pickle",
      body: "A piece of Vusiri Pickle alongside hot rice and ghee is the classic combination. It pairs beautifully with curd rice, dal-rice and khichdi, and brings welcome brightness to a heavy thali. Many enjoy it with parathas or even straight off the spoon as a daily wellness habit, thanks to amla's well-known vitamin C content.",
    },
  ],
  highlights: [
    "Whole hand-segmented Indian gooseberries",
    "Naturally rich in vitamin C",
    "Hand-pounded masala on stone grinder",
    "Cold-pressed sesame (gingelly) oil",
    "No artificial preservatives or colours",
  ],
  ingredients:
    "Indian gooseberry (amla), red chilli powder, mustard seeds, fenugreek, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "boti-pickle": {
  title: "Boti Pickle — Slow-Cooked Andhra Goat Boti Pickle Online",
  description:
    "Boti Pickle slow-cooked in garlicky Andhra masala and cold-pressed sesame oil. Hand-bottled in Tanuku — no preservatives, no shortcuts. Buy authentic goat boti pickle online.",
  keywords: [
    "Boti Pickle",
    "Andhra Boti Pickle",
    "Goat Boti Pickle",
    "Buy Boti Pickle Online",
    "Traditional Andhra Non-Veg Pickle",
    "Tanuku Boti Achaar",
  ],
  telugu: "బోటి అచ్చడు",
  intro:
    "Boti Pickle is the bold, deeply savoury heirloom of Andhra non-veg pickling — tender goat boti slow-cooked into a garlicky, chilli-laced masala until every piece soaks up the spice oil. Made in Tanuku by our 4-generation family using hand-pounded masala and cold-pressed sesame oil, this Boti Pickle is rich, rustic and unapologetically full-flavoured.",
  sections: [
    {
      heading: "What makes our Boti Pickle different",
      body: "Every batch of our Boti Pickle is hand-cleaned, slow-cooked and folded into a masala pounded on a stone grinder — never blitzed in a machine. We use generous garlic, freshly roasted whole spices and Andhra red chilli, all bloomed in cold-pressed gingelly oil. The result is a deep, mahogany-coloured pickle where the boti stays tender and the oil carries weeks of flavour memory.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a slow, smoky heat from roasted chilli, the pungent depth of garlic and ginger, and the unmistakable earthiness of goat boti carried by nutty sesame oil. A faint tang from tamarind lifts the richness, and the finish lingers long — the kind of pickle that makes you reach for a second spoon before the first is gone.",
    },
    {
      heading: "How to enjoy Boti Pickle",
      body: "Serve a spoonful of Boti Pickle over hot rice with a teaspoon of ghee for the classic Andhra experience. Pair with curd rice to balance the heat, or fold a little into biryani for an instant lift. It also works beautifully with hot phulkas, dosa or as a punchy side to ragi sangati.",
    },
  ],
  highlights: [
    "Slow-cooked, hand-cleaned goat boti",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded masala on stone grinder",
    "Small-batch, hand-bottled in Tanuku",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Goat boti, Andhra red chilli powder, garlic, ginger, tamarind, mustard, fenugreek, rock salt, cold-pressed sesame oil.",
  },
  "chicken-pickle": {
  title: "Chicken Pickle — Bone-In Andhra Chicken Pickle Online",
  description:
    "Bone-in Chicken Pickle slow-cooked with Andhra chilli, black pepper and cold-pressed sesame oil. Hand-bottled in Tanuku — no preservatives. Buy authentic chicken pickle online.",
  keywords: [
    "Chicken Pickle",
    "Andhra Chicken Pickle",
    "Bone-in Chicken Pickle",
    "Buy Chicken Pickle Online",
    "Spicy Chicken Achaar",
    "Tanuku Chicken Pickle",
  ],
  telugu: "కోడి అచ్చడు",
  intro:
    "Chicken Pickle is the everyday hero of Andhra non-veg pickling — bone-in pieces of chicken slow-cooked with hand-pounded chilli, black pepper and garlic until the masala clings to every curve. Made in Tanuku by our 4-generation family, our Chicken Pickle is bright, peppery and built to last, with cold-pressed sesame oil sealing in the flavour for weeks.",
  sections: [
    {
      heading: "What makes our Chicken Pickle different",
      body: "We use bone-in cuts because the bone carries flavour — the masala lingers longer and tastes deeper. Whole spices are dry-roasted, then hand-pounded on a stone grinder before being bloomed in cold-pressed gingelly oil. Black pepper and Andhra red chilli share the heat, while curry leaves and garlic round the base. No machinery, no shortcuts — only slow-cooked patience.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect an upfront chilli warmth, a slow peppery hum and the savoury pull of bone-in chicken simmered in spice oil. Tamarind threads a gentle sourness through the masala, and the gingelly oil finishes every bite with a nutty richness. It is the kind of Chicken Pickle that turns plain rice into a meal worth remembering.",
    },
    {
      heading: "How to enjoy Chicken Pickle",
      body: "A heaped spoon of Chicken Pickle over hot rice with ghee is the unbeatable Andhra classic. Tuck it into a roti roll for a quick lunchbox win, layer it into biryani, or serve alongside curd rice to tame the heat. Travels well and only gets better as the flavours settle.",
    },
  ],
  highlights: [
    "Bone-in chicken for deeper flavour",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded masala, no machinery",
    "Slow-cooked in small batches",
    "Zero artificial preservatives or colours",
    "Refrigerate for extended shelf-life",
  ],
  ingredients:
    "Chicken (bone-in), Andhra red chilli powder, black pepper, garlic, ginger, tamarind, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "crab-pickle": {
  title: "Crab Pickle — Coastal Andhra Crab Pickle in Spice Oil",
  description:
    "Crab Pickle slow-cooked in Andhra spice oil with garlic, chilli and cold-pressed sesame oil. A coastal indulgence hand-bottled in Tanuku. Buy authentic crab pickle online.",
  keywords: [
    "Crab Pickle",
    "Andhra Crab Pickle",
    "Coastal Crab Pickle",
    "Buy Crab Pickle Online",
    "Spicy Seafood Pickle",
    "Tanuku Crab Achaar",
  ],
  telugu: "పీత అచ్చడు",
  intro:
    "Crab Pickle is a coastal Andhra indulgence — sweet, tender crab meat slow-cooked in a deep, garlicky spice oil until every shred soaks up the masala. Made in Tanuku by our 4-generation family using hand-pounded spices and cold-pressed sesame oil, this Crab Pickle is rich, briny and unapologetically luxurious — a celebration jar from the Andhra coast.",
  sections: [
    {
      heading: "What makes our Crab Pickle different",
      body: "Crab is delicate, so every batch of our Crab Pickle is cooked slowly and gently — never rushed. The masala is hand-pounded on a stone grinder, then bloomed in cold-pressed gingelly oil with garlic, ginger and Andhra chilli. We layer in tamarind for sharpness and finish with mustard tempering, so each spoon delivers a crisp, briny sweetness wrapped in spice.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Sweet crab meets a deep, garlicky chilli heat that builds slowly rather than burning. Tamarind brings a clean tang, mustard adds pungency and the cold-pressed sesame oil ties everything together with a nutty finish. The Crab Pickle has the unmistakable depth of coastal cooking — the kind of jar you ration carefully.",
    },
    {
      heading: "How to enjoy Crab Pickle",
      body: "Spoon Crab Pickle generously over hot steamed rice with a knob of ghee — this is its true home. It also pairs beautifully with curd rice, lifts a plain biryani into something memorable, or works as a punchy side with dosa and idli. A little goes a long way.",
    },
  ],
  highlights: [
    "Slow-cooked sweet crab meat",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded coastal spice blend",
    "Small-batch, hand-bottled in Tanuku",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Crab meat, Andhra red chilli powder, garlic, ginger, tamarind, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "fish-pickle": {
  title: "Fish Pickle — Andhra Fish Pickle in Chilli & Tamarind",
  description:
    "Fish Pickle made with firm fish chunks cured in Andhra chilli, tamarind and cold-pressed sesame oil. Hand-bottled in Tanuku, no preservatives. Buy authentic fish pickle online.",
  keywords: [
    "Fish Pickle",
    "Andhra Fish Pickle",
    "Spicy Fish Pickle",
    "Buy Fish Pickle Online",
    "Telugu Chepa Achaar",
    "Tanuku Fish Pickle",
  ],
  telugu: "చేప అచ్చడు",
  intro:
    "Fish Pickle is the bright, savoury staple of Andhra coastal kitchens — firm fish chunks cured slowly in chilli, tamarind and cold-pressed sesame oil until every piece holds the masala like a memory. Made in Tanuku by our 4-generation family, our Fish Pickle balances tang and heat with the unmistakable depth of slow-cooked spice — the kind of jar that travels home with everyone.",
  sections: [
    {
      heading: "What makes our Fish Pickle different",
      body: "We choose firm-fleshed fish that holds its shape through slow cooking, then cure it in hand-pounded Andhra masala bloomed in cold-pressed gingelly oil. Tamarind is added in two layers — once for sourness, once for shine — and the whole pickle is hand-bottled while still warm. No machinery, no acetic acid, no compromises on the Fish Pickle that reaches your kitchen.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a bright tamarind tang that opens the bite, a steady Andhra chilli heat through the middle, and the savoury richness of fish carried by nutty sesame oil. Mustard tempering adds a pungent lift, fenugreek a faint bitter depth. Each spoon of the Fish Pickle is layered and clean — never muddy, never one-note.",
    },
    {
      heading: "How to enjoy Fish Pickle",
      body: "Spoon Fish Pickle over hot rice with a teaspoon of ghee — the simplest, finest pairing. It also lifts curd rice, makes biryani sing, and works wonderfully tucked into a dosa fold. Carry it on travels; it only gets better as the oil settles into the masala over the first few days.",
    },
  ],
  highlights: [
    "Firm fish chunks, hand-cleaned",
    "Cold-pressed sesame (gingelly) oil",
    "Double-layered tamarind tang",
    "Hand-pounded masala, no machinery",
    "Zero artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Fish, Andhra red chilli powder, tamarind, garlic, ginger, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "korameenu-fish-pickle": {
  title: "Korameenu Fish Pickle — Andhra Korameenu Pickle Online",
  description:
    "Korameenu Fish Pickle slow-simmered in Andhra spice base with cold-pressed sesame oil. Prized freshwater fish, hand-bottled in Tanuku. Buy korameenu pickle online.",
  keywords: [
    "Korameenu Fish Pickle",
    "Andhra Korameenu Pickle",
    "Korameenu Achaar",
    "Buy Korameenu Pickle Online",
    "Freshwater Fish Pickle",
    "Tanuku Korameenu Pickle",
  ],
  telugu: "కొరమీను అచ్చడు",
  intro:
    "Korameenu Fish Pickle celebrates one of Andhra's most prized freshwater fish — firm, meaty korameenu slow-simmered in a deep Andhra spice base until the masala wraps every flake. Made in Tanuku by our 4-generation family using hand-pounded spices and cold-pressed sesame oil, our Korameenu Fish Pickle is the kind of jar that turns an ordinary meal into a Sunday feast.",
  sections: [
    {
      heading: "What makes our Korameenu Fish Pickle different",
      body: "Korameenu has firm, white flesh that rewards slow cooking — and that is exactly how we treat it. The fish is gently cleaned, then folded into a masala hand-pounded on a stone grinder and bloomed in cold-pressed gingelly oil. Tamarind, garlic and Andhra chilli build the body of the Korameenu Fish Pickle, while mustard tempering finishes it with a clean, pungent lift.",
    },
    {
      heading: "Flavour profile & experience",
      body: "The first bite opens with bright tamarind, settles into a slow Andhra chilli warmth, and ends with the unmistakable richness of korameenu carried by nutty sesame oil. Garlic and curry leaves thread through every spoon, while fenugreek adds a quiet, grown-up depth. Each piece holds its shape — a sign of true slow-cooked pickling.",
    },
    {
      heading: "How to enjoy Korameenu Fish Pickle",
      body: "Serve a generous spoon of Korameenu Fish Pickle over hot rice with ghee — the way Andhra grandmothers intended. Pair with curd rice to balance the heat, fold into biryani for a Sunday upgrade, or eat with dosa, idli or hot phulkas when the craving hits between meals.",
    },
  ],
  highlights: [
    "Prized firm-fleshed korameenu fish",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded Andhra masala",
    "Slow-simmered in small batches",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Korameenu fish, Andhra red chilli powder, tamarind, garlic, ginger, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "mutton-bon-pickle": {
  title: "Mutton Bone Pickle — Traditional Andhra Mutton Pickle Online",
  description:
    "Bone-in Mutton Bone Pickle slow-cooked the traditional Andhra way with hand-pounded masala and cold-pressed sesame oil. Hand-bottled in Tanuku. Buy mutton pickle online.",
  keywords: [
    "Mutton Bone Pickle",
    "Andhra Mutton Pickle",
    "Bone-in Mutton Achaar",
    "Buy Mutton Pickle Online",
    "Traditional Mutton Pickle",
    "Tanuku Mutton Pickle",
  ],
  telugu: "మేక మాంసం అచ్చడు",
  intro:
    "Mutton Bone Pickle is the heirloom non-veg pickle of Andhra Sunday tables — bone-in mutton slow-cooked in hand-pounded masala and cold-pressed sesame oil until the meat surrenders to the spice. Made in Tanuku by our 4-generation family, our Mutton Bone Pickle is deep, rich and unapologetically traditional — the kind of jar that holds the memory of every family lunch.",
  sections: [
    {
      heading: "What makes our Mutton Bone Pickle different",
      body: "We use bone-in cuts because bone carries the soul of any mutton pickle — flavour seeps from the marrow into the masala over hours of slow cooking. Spices are dry-roasted, hand-pounded on a stone grinder, and bloomed in cold-pressed gingelly oil. Garlic, ginger, Andhra chilli and a quiet hum of black pepper build the base of the Mutton Bone Pickle.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a deep, mahogany-rich masala carrying tender mutton, a slow chilli heat that opens up rather than scorches, and the savoury pull of bone-in meat threaded through every spoon. Tamarind lifts the richness, fenugreek adds a faint bitter complexity, and the sesame oil finishes long — the kind of long that makes silence at the table feel right.",
    },
    {
      heading: "How to enjoy Mutton Bone Pickle",
      body: "Spoon Mutton Bone Pickle over hot rice with ghee — there is no better Sunday lunch in Andhra. Pair with curd rice to tame the heat, layer into mutton biryani for double depth, or eat with hot phulkas and a wedge of onion. Travels beautifully; deepens further over the first week.",
    },
  ],
  highlights: [
    "Bone-in mutton for deep flavour",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded masala on stone grinder",
    "Slow-cooked, small-batch, hand-bottled",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Mutton (bone-in), Andhra red chilli powder, garlic, ginger, black pepper, tamarind, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "mutton-keema-pickle": {
  title: "Mutton Keema Pickle — Spiced Minced Mutton Pickle Online",
  description:
    "Mutton Keema Pickle sautéed with onion, ginger and roasted Andhra spice in cold-pressed sesame oil. Hand-bottled in Tanuku, no preservatives. Buy keema pickle online.",
  keywords: [
    "Mutton Keema Pickle",
    "Andhra Keema Pickle",
    "Minced Mutton Pickle",
    "Buy Keema Pickle Online",
    "Spicy Keema Achaar",
    "Tanuku Keema Pickle",
  ],
  telugu: "కీమా అచ్చడు",
  intro:
    "Mutton Keema Pickle is the everyday weekday joy of Andhra non-veg jars — finely minced mutton sautéed with onion, ginger and roasted spice until every grain is coated in deep, glossy masala. Made in Tanuku by our 4-generation family using cold-pressed sesame oil and hand-pounded spices, our Mutton Keema Pickle is rich, scoopable and built for the busiest of lunches.",
  sections: [
    {
      heading: "What makes our Mutton Keema Pickle different",
      body: "Keema needs patience — it must brown slowly so every grain develops flavour, not steam in its own moisture. We slow-sauté the mince with onion, ginger and garlic, then fold in hand-pounded Andhra chilli and roasted spices, all bloomed in cold-pressed gingelly oil. The result is a Mutton Keema Pickle that is dry-rich rather than oily, with deep, even seasoning.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a savoury, almost roasted depth from browned mince and onion, a steady Andhra chilli warmth, and aromatic lift from ginger, garlic and curry leaves. Tamarind threads through a gentle tang, and the sesame oil rounds it all with nutty richness. The Mutton Keema Pickle scoops easily and clings to whatever you eat it with.",
    },
    {
      heading: "How to enjoy Mutton Keema Pickle",
      body: "Spoon Mutton Keema Pickle into hot rice with ghee for a five-minute Andhra lunch. Stuff into phulkas or parathas for an unbeatable roll, fold into biryani, or top a bowl of curd rice. It also makes an excellent sandwich filling and the easiest, most flavour-packed lunchbox companion you will pack.",
    },
  ],
  highlights: [
    "Slow-sautéed minced mutton",
    "Onion, ginger and roasted spice base",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded Andhra masala",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Minced mutton, onion, ginger, garlic, Andhra red chilli powder, tamarind, mustard, fenugreek, curry leaves, roasted spices, rock salt, cold-pressed sesame oil.",
  },
  "natukodi-pickle": {
  title: "Natukodi Pickle — Andhra Free-Range Country Chicken Pickle",
  description:
    "Natukodi Pickle made with free-range country chicken in robust home masala and cold-pressed sesame oil. Hand-bottled in Tanuku, no preservatives. Buy natukodi pickle online.",
  keywords: [
    "Natukodi Pickle",
    "Andhra Natukodi Pickle",
    "Country Chicken Pickle",
    "Buy Natukodi Pickle Online",
    "Free-Range Chicken Achaar",
    "Tanuku Natukodi Pickle",
  ],
  telugu: "నాటు కోడి అచ్చడు",
  intro:
    "Natukodi Pickle is the proud village cousin of regular chicken pickle — free-range country chicken slow-cooked in a robust home masala that tastes the way Andhra grandmothers remember. Made in Tanuku by our 4-generation family using hand-pounded spices and cold-pressed sesame oil, our Natukodi Pickle is leaner, gamier and far more flavour-dense — a jar that respects the bird.",
  sections: [
    {
      heading: "What makes our Natukodi Pickle different",
      body: "Natukodi is firmer and more flavourful than broiler chicken, so it stands up to slow cooking and long-bloomed masala beautifully. We hand-pound the spices on a stone grinder, bloom them in cold-pressed gingelly oil, and fold in bone-in country chicken so the marrow deepens the masala. Garlic, ginger, Andhra chilli and black pepper drive the Natukodi Pickle's robust flavour.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a deeper, more rustic chicken flavour than usual — leaner meat, firmer bite, and a gamier savouriness that village kitchens swear by. Andhra chilli brings the heat, black pepper a slow warmth, and tamarind a quiet sour lift. The sesame oil finishes long and nutty, and each spoon of Natukodi Pickle eats like a memory of a courtyard lunch.",
    },
    {
      heading: "How to enjoy Natukodi Pickle",
      body: "A spoon of Natukodi Pickle over hot rice with ghee is the Andhra village classic. Pair with ragi sangati for a deeply traditional plate, fold into biryani, or eat with curd rice and a wedge of raw onion. It also lifts roti rolls and dosa wraps into a serious meal.",
    },
  ],
  highlights: [
    "Free-range country chicken (natukodi)",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded robust home masala",
    "Slow-cooked, small-batch, hand-bottled",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Country chicken (natukodi), Andhra red chilli powder, garlic, ginger, black pepper, tamarind, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "nethallu-fish-pickle": {
  title: "Nethallu Fish Pickle — Crisp Andhra Nethallu Pickle Online",
  description:
    "Nethallu Fish Pickle made with tiny crisp-tempered nethallu steeped in Andhra spice oil and cold-pressed sesame oil. Hand-bottled in Tanuku. Buy nethallu pickle online.",
  keywords: [
    "Nethallu Fish Pickle",
    "Andhra Nethallu Pickle",
    "Tiny Fish Pickle",
    "Buy Nethallu Pickle Online",
    "Crispy Fish Achaar",
    "Tanuku Nethallu Pickle",
  ],
  telugu: "నెత్తల్లు అచ్చడు",
  intro:
    "Nethallu Fish Pickle is the small-but-mighty hero of Andhra coastal jars — tiny nethallu fish crisp-tempered and steeped in deep, garlicky spice oil until they shatter delicately on the tongue. Made in Tanuku by our 4-generation family using hand-pounded spices and cold-pressed sesame oil, our Nethallu Fish Pickle is intense, briny and addictive in a way only tiny fish can be.",
  sections: [
    {
      heading: "What makes our Nethallu Fish Pickle different",
      body: "Tiny fish need a careful hand — they must crisp without burning, and steep without turning to mush. We crisp the nethallu first in cold-pressed gingelly oil, then fold them into a hand-pounded masala bloomed with garlic, ginger and Andhra chilli. The Nethallu Fish Pickle keeps that delicate crunch for weeks when refrigerated, while soaking up the spice oil beautifully.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a delicate, briny crispness from the nethallu, a deep Andhra chilli heat from the spice oil, and a savoury garlic-led depth that builds with every spoon. Tamarind cuts through with a clean tang and mustard tempering adds pungency. The sesame oil keeps each tiny fish glossy, nutty and ready to crack between rice grains.",
    },
    {
      heading: "How to enjoy Nethallu Fish Pickle",
      body: "Spoon Nethallu Fish Pickle over hot rice with ghee — the crunch against soft rice is the whole point. It also pairs brilliantly with curd rice, lifts a plain dosa, and works as a punchy side to ragi sangati. A small jar travels well and disappears faster than you expect.",
    },
  ],
  highlights: [
    "Tiny crisp-tempered nethallu fish",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded coastal masala",
    "Small-batch, hand-bottled in Tanuku",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Nethallu fish, Andhra red chilli powder, garlic, ginger, tamarind, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "pandugappa-fish-pickle": {
  title: "Pandugappa Fish Pickle — Meaty Andhra Pandugappa Pickle",
  description:
    "Pandugappa Fish Pickle cured with mustard, garlic and Andhra chilli in cold-pressed sesame oil. Hand-bottled in Tanuku, no preservatives. Buy pandugappa pickle online.",
  keywords: [
    "Pandugappa Fish Pickle",
    "Andhra Pandugappa Pickle",
    "Pandugappa Achaar",
    "Buy Pandugappa Pickle Online",
    "Meaty Fish Pickle",
    "Tanuku Pandugappa Pickle",
  ],
  telugu: "పండుగప్ప అచ్చడు",
  intro:
    "Pandugappa Fish Pickle is the meaty, full-flavoured pride of Andhra fish jars — thick chunks of pandugappa cured slowly with mustard, garlic and Andhra chilli in cold-pressed sesame oil. Made in Tanuku by our 4-generation family using hand-pounded spices and slow-cooked methods, our Pandugappa Fish Pickle is the kind of jar that feels like a feast in a spoon.",
  sections: [
    {
      heading: "What makes our Pandugappa Fish Pickle different",
      body: "Pandugappa has dense, satisfying flesh that holds shape through long cooking, and we treat it accordingly. Each chunk is cured with hand-pounded mustard, garlic and Andhra chilli, then slow-cooked in cold-pressed gingelly oil until the masala wraps every piece. Tamarind is layered in twice for brightness, and the Pandugappa Fish Pickle is hand-bottled while warm so the oil seals the flavour in.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a robust mustard pungency upfront, a slow Andhra chilli warmth, and the satisfying chew of meaty pandugappa carried through every spoon. Garlic builds a savoury backbone, tamarind delivers a clean lift, and the sesame oil rounds the finish with nutty richness. The Pandugappa Fish Pickle is bold but balanced — a jar that announces itself without overpowering.",
    },
    {
      heading: "How to enjoy Pandugappa Fish Pickle",
      body: "Serve Pandugappa Fish Pickle over hot rice with a teaspoon of ghee — the classic Andhra way. Pair with curd rice to soften the heat, fold into biryani for a coastal upgrade, or eat with dosa, idli and hot phulkas. The chunks hold up beautifully even after weeks in the jar.",
    },
  ],
  highlights: [
    "Meaty pandugappa fish chunks",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded mustard-garlic masala",
    "Slow-cooked, small-batch, hand-bottled",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Pandugappa fish, Andhra red chilli powder, mustard, garlic, ginger, tamarind, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "small-prawns-pickle": {
  title: "Small Prawns Pickle — Sweet Andhra Prawn Pickle Online",
  description:
    "Small Prawns Pickle simmered in Andhra spice oil with garlic, chilli and cold-pressed sesame oil. Hand-bottled in Tanuku, no preservatives. Buy small prawns pickle online.",
  keywords: [
    "Small Prawns Pickle",
    "Andhra Prawn Pickle",
    "Royyala Achaar",
    "Buy Prawns Pickle Online",
    "Spicy Prawn Pickle",
    "Tanuku Small Prawns Pickle",
  ],
  telugu: "చిన్న రొయ్యల అచ్చడు",
  intro:
    "Small Prawns Pickle is the sweet, fiery jewel of Andhra non-veg pickles — tiny sweet prawns simmered patiently in spice oil until each one drinks in the masala. Made in Tanuku by our 4-generation family using hand-pounded spices and cold-pressed sesame oil, our Small Prawns Pickle packs surprising punch into every spoon — sweet, briny, and unmistakably coastal.",
  sections: [
    {
      heading: "What makes our Small Prawns Pickle different",
      body: "Small prawns are naturally sweet, so the masala has to support — not bully — the prawn. We hand-pound Andhra chilli, garlic and ginger on a stone grinder, then bloom them in cold-pressed gingelly oil before folding in the prawns to simmer slowly. The result is a Small Prawns Pickle where each prawn stays plump, holds its shape, and carries the spice oil like a perfect little capsule of flavour.",
    },
    {
      heading: "Flavour profile & experience",
      body: "The first impression is sweet-briny prawn; the second is a steady, garlicky Andhra chilli heat that builds without overwhelming. Tamarind delivers a clean sour lift, mustard tempering brings pungency, and the sesame oil ties it all together with a nutty, lingering finish. The Small Prawns Pickle is intense but elegant — a coastal indulgence in every spoon.",
    },
    {
      heading: "How to enjoy Small Prawns Pickle",
      body: "Spoon Small Prawns Pickle over hot rice with ghee — the simplest, most rewarding plate. It also lifts curd rice, makes a plain biryani memorable, and works wonderfully with dosa or hot phulkas. A little goes a long way; one careful spoon is often the whole meal's hero.",
    },
  ],
  highlights: [
    "Sweet, plump small prawns",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded garlic-chilli masala",
    "Slow-simmered in small batches",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Small prawns, Andhra red chilli powder, garlic, ginger, tamarind, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "gongura-chicken-pickle": {
  title: "Gongura Chicken Pickle — Tangy Andhra Sorrel Chicken Pickle",
  description:
    "Gongura Chicken Pickle with boneless chicken folded into tart sorrel masala and cold-pressed sesame oil. Hand-bottled in Tanuku. Buy gongura chicken pickle online.",
  keywords: [
    "Gongura Chicken Pickle",
    "Andhra Gongura Chicken Pickle",
    "Sorrel Chicken Pickle",
    "Buy Gongura Chicken Pickle Online",
    "Tangy Chicken Achaar",
    "Tanuku Gongura Pickle",
  ],
  telugu: "గోంగూర చికెన్ అచ్చడు",
  intro:
    "Gongura Chicken Pickle marries two Andhra icons — tart gongura (sorrel) leaves and tender boneless chicken — into one bright, savoury jar. Made in Tanuku by our 4-generation family using hand-pounded spices and cold-pressed sesame oil, our Gongura Chicken Pickle balances lemony sorrel tang with deep chilli heat — a fresh, modern take on a generations-old Andhra tradition.",
  sections: [
    {
      heading: "What makes our Gongura Chicken Pickle different",
      body: "Gongura is the star, not the garnish. We cook fresh sorrel leaves slowly until they collapse into a glossy, deeply sour base, then fold in boneless chicken that has been hand-cleaned and gently simmered. Hand-pounded Andhra chilli and garlic are bloomed in cold-pressed gingelly oil, then layered into the Gongura Chicken Pickle so the sorrel leads and the spice follows in a steady, supportive heat.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a bright, lemon-y sorrel tang that opens every bite, a deep Andhra chilli warmth that builds beneath, and tender boneless chicken carrying both. Garlic and curry leaves add savoury anchor, while sesame oil rounds the finish with nutty richness. The Gongura Chicken Pickle is tangier than regular chicken pickle — sharper, fresher and remarkably moreish.",
    },
    {
      heading: "How to enjoy Gongura Chicken Pickle",
      body: "Spoon Gongura Chicken Pickle over hot rice with a teaspoon of ghee — the gongura tang against rice is unbeatable. Pair with curd rice to soften the sourness, fold into biryani for a tangy twist, or roll into phulkas for a quick, punchy lunch. Travels well and deepens over the first few days.",
    },
  ],
  highlights: [
    "Fresh gongura (sorrel) leaves",
    "Boneless chicken, hand-cleaned",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded Andhra masala",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Boneless chicken, gongura (sorrel) leaves, Andhra red chilli powder, garlic, ginger, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "gongura-mutton-pickle": {
  title: "Gongura Mutton Pickle — Tangy Andhra Sorrel Mutton Pickle",
  description:
    "Gongura Mutton Pickle with tender mutton in a sour gongura base and cold-pressed sesame oil. Generations-old Tanuku recipe, no preservatives. Buy gongura mutton pickle online.",
  keywords: [
    "Gongura Mutton Pickle",
    "Andhra Gongura Mutton Pickle",
    "Sorrel Mutton Pickle",
    "Buy Gongura Mutton Pickle Online",
    "Tangy Mutton Achaar",
    "Tanuku Gongura Mutton Pickle",
  ],
  telugu: "గోంగూర మేక అచ్చడు",
  intro:
    "Gongura Mutton Pickle is an Andhra family heirloom in a jar — tender mutton braised into a deeply sour gongura (sorrel) base until the meat and the leaves taste like they were always meant to meet. Made in Tanuku by our 4-generation family using hand-pounded spices and cold-pressed sesame oil, our Gongura Mutton Pickle is bold, tangy and unmistakably traditional.",
  sections: [
    {
      heading: "What makes our Gongura Mutton Pickle different",
      body: "Mutton needs time, and gongura needs respect — so we cook them both slowly and separately first. The gongura is reduced into a glossy, sour base; the mutton is slow-braised in hand-pounded Andhra masala. The two are then married in cold-pressed gingelly oil so the sorrel cuts the richness of the meat. The result is a Gongura Mutton Pickle with layered depth rather than flat heat.",
    },
    {
      heading: "Flavour profile & experience",
      body: "Expect a sharp, lemon-y gongura tang upfront, the deep savouriness of slow-braised mutton through the middle, and a slow Andhra chilli warmth threading every spoon. Garlic and ginger build a robust backbone, while cold-pressed sesame oil finishes with nutty richness. The Gongura Mutton Pickle is generous, bold and quietly elegant — a Sunday lunch in a jar.",
    },
    {
      heading: "How to enjoy Gongura Mutton Pickle",
      body: "Spoon Gongura Mutton Pickle over hot rice with ghee — the tang against the warm rice is the whole point of Andhra Sundays. Pair with curd rice to balance the sourness, layer into mutton biryani, or eat with hot phulkas and raw onion. Even better after a day or two in the fridge.",
    },
  ],
  highlights: [
    "Slow-braised tender mutton",
    "Fresh gongura (sorrel) leaves",
    "Cold-pressed sesame (gingelly) oil",
    "Generations-old Tanuku recipe",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Mutton, gongura (sorrel) leaves, Andhra red chilli powder, garlic, ginger, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "gongura-prawns-pickle": {
  title: "Gongura Prawns Pickle — Tangy Andhra Sorrel Prawn Pickle",
  description:
    "Gongura Prawns Pickle with sweet prawns set against tart sorrel and cold-pressed sesame oil. Hand-bottled in Tanuku, no preservatives. Buy gongura prawns pickle online.",
  keywords: [
    "Gongura Prawns Pickle",
    "Andhra Gongura Prawns Pickle",
    "Sorrel Prawn Pickle",
    "Buy Gongura Prawns Pickle Online",
    "Tangy Prawn Achaar",
    "Tanuku Gongura Prawns Pickle",
  ],
  telugu: "గోంగూర రొయ్యల అచ్చడు",
  intro:
    "Gongura Prawns Pickle is a coastal-meets-countryside marvel — sweet prawns set against the sharp, lemon-y tang of fresh sorrel leaves, all bound by hand-pounded spice and cold-pressed sesame oil. Made in Tanuku by our 4-generation family, our Gongura Prawns Pickle is bright, briny and deeply Andhra — a jar that captures two flavour worlds in a single spoon.",
  sections: [
    {
      heading: "What makes our Gongura Prawns Pickle different",
      body: "Prawns sweeten as they cook; gongura sours as it reduces — get the balance wrong and you lose both. We slow-reduce sorrel into a glossy tangy base, then fold in plump prawns simmered gently in cold-pressed gingelly oil with hand-pounded Andhra chilli, garlic and ginger. The Gongura Prawns Pickle is layered so the sorrel sings on top and the prawn sweetness anchors below.",
    },
    {
      heading: "Flavour profile & experience",
      body: "The first bite is bright lemon-y gongura; the second is sweet, briny prawn; the third is a slow, garlicky Andhra chilli warmth that ties the two together. Mustard tempering adds a clean pungency, curry leaves bring fragrance, and the sesame oil finishes long and nutty. The Gongura Prawns Pickle is one of the most surprising jars in our range.",
    },
    {
      heading: "How to enjoy Gongura Prawns Pickle",
      body: "Spoon Gongura Prawns Pickle over hot rice with a teaspoon of ghee — sweet, sour and spicy in one bite. Pair with curd rice to soften the tang, fold into prawn biryani for double depth, or eat with dosa, idli and hot phulkas. A small jar disappears faster than you'd expect.",
    },
  ],
  highlights: [
    "Sweet plump prawns",
    "Fresh gongura (sorrel) leaves",
    "Cold-pressed sesame (gingelly) oil",
    "Hand-pounded Andhra masala",
    "No artificial preservatives or colours",
    "High shelf-life when refrigerated",
  ],
  ingredients:
    "Prawns, gongura (sorrel) leaves, Andhra red chilli powder, garlic, ginger, mustard, fenugreek, curry leaves, rock salt, cold-pressed sesame oil.",
  },
  "kandi-karam": {
  title: "Kandi Karam — Authentic Andhra Toor Dal Podi Online",
  description: "Earthy, warming Kandi Karam made from roasted toor dal, dry red chillies and curry leaves. Stone-pounded in Tanuku using a 4-generation Telugu recipe. Buy online.",
  keywords: ["Kandi Karam", "Andhra Toor Dal Podi", "Kandi Podi Online", "Traditional Telugu Karam", "Rice Mix Podi", "Buy Kandi Karam"],
  telugu: "కంది కారం",
  intro: "Kandi Karam is the everyday Andhra hero — the podi that quietly anchors a Telugu meal. Made by slow-roasting kandi pappu (toor dal) until it releases its nutty perfume, then pounding it with dry red chillies, curry leaves and rock salt on a stone grinder, our Kandi Karam delivers earthy warmth in every spoonful. It is the kind of podi that turns plain rice and ghee into comfort.",
  sections: [
    { heading: "What goes into our Kandi Karam", body: "We begin with plump toor dal, roasted whole in small iron kadai until golden. Dry red chillies are toasted separately to coax out their colour without burning their fruit. Curry leaves, garlic and a whisper of cumin round out the blend. Everything is pounded — never machine-milled — so the podi keeps its coarse, satisfying texture and slow-release flavour." },
    { heading: "How to enjoy Kandi Karam", body: "Sprinkle a generous spoonful over hot steamed rice, add a drizzle of ghee or cold-pressed sesame oil, and mix until every grain is coated. It also pairs beautifully with idli, dosa and curd rice. Many Telugu homes keep a small steel dabba of Kandi Karam on the table — a daily ritual our recipe is built to honour." },
  ],
  highlights: ["Stone-pounded for coarse, aromatic texture", "Slow-roasted toor dal hero ingredient", "4-generation Tanuku family recipe", "No artificial flavours or preservatives", "Hand-packed in small batches"],
  ingredients: "Toor dal, dry red chillies, curry leaves, garlic, cumin, rock salt, asafoetida.",
  },
  "karivepaku-karam": {
  title: "Karivepaku Karam — Andhra Curry Leaf Podi Online",
  description: "Fragrant Karivepaku Karam built around fresh, sun-dried curry leaves, roasted lentils and Guntur chillies. Stone-pounded in Tanuku. No preservatives. Buy online.",
  keywords: ["Karivepaku Karam", "Curry Leaf Podi", "Andhra Karivepaku Podi", "Karuveppilai Podi", "Rice Mix Karam", "Buy Karivepaku Karam"],
  telugu: "కరివేపాకు కారం",
  intro: "Karivepaku Karam takes the humble curry leaf and gives it the spotlight it deserves. We sun-dry fresh curry leaves until they crackle, then roast them gently with urad dal, chana dal and Guntur red chillies before stone-pounding the lot into a deeply aromatic podi. The result is a Karivepaku Karam that turns a quiet bowl of rice into a meal worth sitting down for.",
  sections: [
    { heading: "The curry-leaf difference", body: "Most commercial curry-leaf podis use dried leaves that have lost their oils. We dry our leaves slowly in the shade so the essential aromatics stay locked in. When toasted, they release a green, almost citrusy fragrance that defines our Karivepaku Karam. Pounding on stone keeps the leaves visible in the podi — flecks of dark green you can see and smell." },
    { heading: "Ways to use it", body: "The classic pairing is hot rice with ghee or cold-pressed sesame oil. But Karivepaku Karam also lifts plain curd rice, makes a sharp dip for idli, and sprinkled over uppma it turns breakfast into something memorable. A spoonful stirred into warm dal adds an instant Andhra accent." },
  ],
  highlights: ["Shade-dried curry leaves for maximum aroma", "Roasted urad and chana dal base", "Guntur red chillies for clean heat", "Stone-pounded, never machine-milled", "Hand-packed small batches from Tanuku"],
  ingredients: "Curry leaves, urad dal, chana dal, dry red chillies, garlic, tamarind, rock salt, asafoetida.",
  },
  "munagaku-karam": {
  title: "Munagaku Karam — Andhra Drumstick Leaf Podi Online",
  description: "Munagaku Karam made with sun-dried drumstick leaves, roasted lentils and Guntur chillies. Nutty, quietly fiery, nutrient-rich. Stone-pounded in Tanuku. Buy online.",
  keywords: ["Munagaku Karam", "Drumstick Leaf Podi", "Moringa Podi Andhra", "Munaga Aaku Karam", "Telugu Rice Podi", "Buy Munagaku Karam"],
  telugu: "మునగాకు కారం",
  intro: "Munagaku Karam is the quietly nourishing cousin in our karappodulu family. Drumstick leaves — known to be nutrient-rich — are sun-dried, gently roasted, and stone-pounded with toor dal, dry red chillies and a few well-chosen aromatics. The result is a podi that is nutty, gently fiery and unmistakably wholesome — the kind of Munagaku Karam Telugu grandmothers have been making for generations.",
  sections: [
    { heading: "Why drumstick leaf belongs in your kitchen", body: "Munaga aaku has been a Telugu staple for as long as anyone can remember — added to dals, stir-fries and podis. We dry the leaves slowly in the shade to keep their green colour and earthy flavour intact, then roast them just enough to deepen their character. The leaves are nutrient-rich by nature, which makes our Munagaku Karam a thoughtful daily addition." },
    { heading: "How to enjoy it", body: "A spoonful of Munagaku Karam over hot rice with ghee is the simplest, most satisfying way in. It also pairs well with ragi sankati, jowar roti and even plain curd rice. Stirred into hot uppma or sprinkled over a soft-boiled egg, it brings an Andhra-style green warmth to almost any plate." },
  ],
  highlights: ["Shade-dried drumstick leaves, nutrient-rich", "Roasted toor dal and chana dal", "Guntur red chillies for gentle heat", "Stone-pounded in small batches", "No artificial flavours or preservatives"],
  ingredients: "Drumstick leaves, toor dal, chana dal, dry red chillies, garlic, cumin, rock salt, asafoetida.",
  },
  "nuvvula-karam": {
  title: "Nuvvula Karam — Andhra Sesame Seed Podi Online",
  description: "Nuvvula Karam made from slow-roasted white sesame, dry red chillies and rock salt. Deep, nutty, calcium-rich. Stone-pounded in Tanuku. No preservatives. Buy online.",
  keywords: ["Nuvvula Karam", "Sesame Seed Podi", "Andhra Nuvvula Podi", "Til Podi Telugu", "Rice Mix Sesame Karam", "Buy Nuvvula Karam"],
  telugu: "నువ్వుల కారం",
  intro: "Nuvvula Karam is all about the deep, roasted perfume of sesame. We slow-roast white sesame seeds (nuvvulu) on low flame until they turn the colour of pale honey and start to crackle, then pound them with dry red chillies, garlic and rock salt. The result is a Nuvvula Karam with a rich, oily mouthfeel and a calcium-rich nuttiness that lingers long after the bite.",
  sections: [
    { heading: "Sesame, the slow way", body: "Nuvvulu need patience. Rush the roast and the seeds taste bitter; under-roast them and the podi falls flat. We do it on low flame in iron kadai, stirring continuously, until every seed is even in colour. Sesame is naturally calcium-rich, and our Nuvvula Karam captures that goodness in a form Telugu kitchens have trusted for generations." },
    { heading: "How to enjoy Nuvvula Karam", body: "The classic move: a fat spoonful on hot rice with a generous pour of cold-pressed sesame oil or ghee. Mix until the rice glistens. It also turns plain idli into a treat — dust a little Nuvvula Karam on top and dip in oil. Stirred into curd rice, it adds a roasted, nutty layer that lifts the whole bowl." },
  ],
  highlights: ["Slow-roasted white sesame, calcium-rich", "Dry red chillies for clean Andhra heat", "Stone-pounded for coarse texture", "Hand-packed small batches from Tanuku", "No artificial flavours or preservatives"],
  ingredients: "White sesame seeds, dry red chillies, garlic, cumin, rock salt, tamarind, asafoetida.",
  },
  "palli-karam": {
  title: "Palli Karam — Andhra Peanut Podi Online for Rice",
  description: "Palli Karam made with slow-roasted peanuts, dry red chillies, garlic and rock salt. Crunchy, mildly hot, kid-friendly. Stone-pounded in Tanuku. Buy online.",
  keywords: ["Palli Karam", "Andhra Peanut Podi", "Groundnut Podi", "Palli Podi Telugu", "Mild Rice Podi", "Buy Palli Karam"],
  telugu: "పల్లి కారం",
  intro: "Palli Karam is the karappodi every Telugu child grows up loving. Roasted peanuts (palli) are the star — toasted until their skins blister, then pounded with just enough dry red chilli, garlic and rock salt to bring warmth without overpowering the nut. The result is a Palli Karam that is crunchy, mildly hot and impossibly comforting — the gateway podi for new eaters and an everyday favourite for the rest of us.",
  sections: [
    { heading: "What makes our Palli Karam special", body: "We roast peanuts whole, in small batches, until the skins crack and the kernels turn golden inside. Stone-pounding (instead of machine-grinding) keeps the texture coarse so you get real peanut crunch in every spoonful. The chilli is dialled back deliberately — Palli Karam should taste of peanut first, heat second. That balance is what generations of Tanuku cooks have insisted on." },
    { heading: "Ways to enjoy Palli Karam", body: "Spoon it over hot rice with ghee or cold-pressed sesame oil for the textbook Andhra plate. It also works beautifully on idli, dosa and uppma. Many families pack it in school tiffins with chapati. A pinch sprinkled on buttered toast turns a quick breakfast into something children ask for again." },
  ],
  highlights: ["Slow-roasted peanuts, coarse texture", "Mild heat — kid-friendly recipe", "Garlic and red chilli for depth", "Stone-pounded, never machine-milled", "Hand-packed in small batches"],
  ingredients: "Roasted peanuts, dry red chillies, garlic, cumin, rock salt, tamarind.",
  },
  "best-chakralu-snacks": {
  title: "Chakralu — Authentic Andhra Rice Flour Spiral Snack Online",
  description: "Crispy Chakralu spirals made from rice flour, sesame and ajwain. Deep-fried in cold-pressed sesame oil. No maida. Tanuku-made, hand-pressed. Buy online.",
  keywords: ["Chakralu", "Andhra Rice Flour Snack", "Telugu Chakli", "Sesame Chakralu", "Tea Time Snack Andhra", "Buy Chakralu Online"],
  telugu: "చక్రాలు",
  intro: "Chakralu are the spiral, sun-shaped crisps that announce festive Andhra kitchens long before the sweets arrive. Ours are made the slow way — rice flour worked into a soft dough with sesame, ajwain, hot oil and just enough chilli, then hand-pressed into spirals and fried in cold-pressed sesame oil. Every Chakralu shatters at first bite with a clean, toasty crunch and a finish of warm sesame.",
  sections: [
    { heading: "Made the traditional way", body: "We use rice flour as the base — never maida or all-purpose flour. Hot oil is worked into the dough to give the snack its signature short, brittle texture. The dough is then pressed through a brass chakli mould into hot cold-pressed sesame oil, where each spiral fries to a pale gold. The result: Chakralu that taste of rice, sesame and ajwain — exactly as they should." },
    { heading: "How to enjoy Chakralu", body: "Pair Chakralu with strong filter coffee or a tumbler of evening chai. They travel beautifully — perfect for tiffin boxes, train journeys and Diwali hampers. Crush a few over chaat or curd rice for extra texture. Stored in an airtight tin, they stay crisp through many tea breaks." },
  ],
  highlights: ["Rice flour base — no maida adulteration", "Hand-pressed spirals", "Fried in cold-pressed sesame oil", "Sesame and ajwain for authentic flavour", "Made in small Tanuku batches"],
  ingredients: "Rice flour, sesame seeds, ajwain, red chilli powder, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "bundi-mixture": {
  title: "Bundi Mixture — Andhra Boondi Tea Time Snack Online",
  description: "Bundi Mixture with crisp boondi, peanuts, sev and curry leaves. Fried in cold-pressed sesame oil. No maida. Tanuku-made small batches. Buy online.",
  keywords: ["Bundi Mixture", "Andhra Boondi Mixture", "Telugu Tea Snack", "South Indian Mixture", "Peanut Curry Leaf Snack", "Buy Bundi Mixture"],
  telugu: "బూంది మిక్చర్",
  intro: "Bundi Mixture is the everyday namkeen Telugu households have leaned on for tea-time forever. Our version begins with tiny gram-flour boondi, fried to a golden crackle, then tossed warm with roasted peanuts, fine sev, fried curry leaves and a careful mix of spices. Every handful of Bundi Mixture gives you crunch, warmth and that unmistakable Andhra-style curry-leaf perfume.",
  sections: [
    { heading: "Why ours tastes different", body: "Most mass-market mixtures lean on cheap oil and stale spice. We fry our boondi and sev fresh, in small batches, in cold-pressed sesame oil. The peanuts are roasted with their skins on for fuller flavour. Curry leaves are fried whole and folded in last so they stay green and aromatic. There is no maida — just chickpea flour, peanuts and honest spices." },
    { heading: "How to enjoy Bundi Mixture", body: "A bowl of Bundi Mixture and a cup of strong chai is a small, daily ceremony. Serve it as a quick guest snack, sprinkle it over curd rice for instant crunch, or use it to top a quick chaat. It is a thoughtful addition to Diwali hampers and travels well in airtight tins for long journeys." },
  ],
  highlights: ["Fresh-fried boondi and sev", "Roasted peanuts with skins on", "Curry leaves folded in warm", "Cold-pressed sesame oil, no maida", "Small-batch Tanuku recipe"],
  ingredients: "Gram flour, peanuts, sesame oil, curry leaves, dry red chillies, turmeric, rock salt, asafoetida.",
  },
  "chegodilu": {
  title: "Chegodilu — Authentic Andhra Ring Snack Online",
  description: "Chegodilu — crunchy Andhra ring-shaped snack made from rice flour, sesame and chilli. Deep-fried in cold-pressed sesame oil. Hand-shaped in Tanuku. Buy online.",
  keywords: ["Chegodilu", "Andhra Ring Snack", "Telugu Chegodi", "Rice Flour Snack", "South Indian Tea Snack", "Buy Chegodilu Online"],
  telugu: "చేగోడీలు",
  intro: "Chegodilu are the little crunchy rings that no Telugu festive kitchen is complete without. Each Chegodilu is hand-shaped — a soft rice-flour dough rolled into a thin rope, joined into a ring, and slipped into hot cold-pressed sesame oil to fry to a deep, even gold. The first bite snaps cleanly; the rest is warm chilli, sesame and the comfort of a recipe four generations old.",
  sections: [
    { heading: "Hand-shaped, the old way", body: "There is no shortcut to a proper Chegodilu. We mix rice flour with a touch of urad flour, hot oil, sesame seeds, ajwain and chilli powder. The dough is portioned, rolled and ringed by hand — one Chegodilu at a time. Frying in cold-pressed sesame oil gives that nutty undertone that machine-made versions never quite catch." },
    { heading: "Pairings and serving", body: "Chegodilu and a steel tumbler of filter coffee is the classic Andhra tea-time scene. They are a fixture in Diwali, Sankranti and wedding hampers, and they travel exceptionally well — perfect for sending to family abroad. Serve them with a tangy tomato pickle for a quick, satisfying mid-afternoon plate." },
  ],
  highlights: ["Hand-shaped rings, one by one", "Rice flour base — no maida", "Sesame, ajwain and chilli classic", "Cold-pressed sesame oil fry", "Small-batch Tanuku recipe"],
  ingredients: "Rice flour, urad flour, sesame seeds, ajwain, red chilli powder, rock salt, cold-pressed sesame oil.",
  },
  "janthikalu": {
  title: "Janthikalu — Classic Andhra Chakli Snack Online",
  description: "Janthikalu — golden, pressed Andhra chakli with rice flour, gram flour and gentle spice. Fried in cold-pressed sesame oil. No maida. Tanuku-made. Buy online.",
  keywords: ["Janthikalu", "Andhra Chakli", "Telugu Janthikalu", "Pressed Rice Snack", "South Indian Murukku", "Buy Janthikalu Online"],
  telugu: "జంతికలు",
  intro: "Janthikalu is the Andhra family of chakli — pressed coils of seasoned dough, fried to a crisp gold. Our Janthikalu starts with a blend of rice flour and roasted gram flour, kneaded with sesame seeds, cumin, ajwain and a measured pinch of chilli. Pressed through a traditional brass mould into hot cold-pressed sesame oil, each piece emerges crackling, fragrant and ready for tea.",
  sections: [
    { heading: "The Janthikalu method", body: "A great Janthikalu lives or dies on its dough. Too tight and the coil cracks; too loose and the snack drinks oil. We work hot oil into the flour mix to set the texture, rest the dough briefly, and press only as much as can be fried fresh. Sesame oil — cold-pressed, never refined — gives our Janthikalu its signature toasty backbone." },
    { heading: "Serving and pairings", body: "Janthikalu is built for chai and filter coffee, but it also makes a fine companion to evening drinks or a quick guest plate alongside boondi and peanut chikki. Pack them into Diwali tins, share with neighbours, send a box to family far away — they hold their crunch beautifully when stored in an airtight container." },
  ],
  highlights: ["Rice flour and gram flour base", "Pressed through brass mould", "Sesame, cumin, ajwain seasoning", "Cold-pressed sesame oil fry", "No maida, hand-packed batches"],
  ingredients: "Rice flour, gram flour, sesame seeds, cumin, ajwain, red chilli powder, rock salt, cold-pressed sesame oil.",
  },
  "lavu-karappusa": {
  title: "Lavu Karappusa — Thick Andhra Sev with Pepper Online",
  description: "Lavu Karappusa — thick, peppery Andhra sev with ajwain and gram flour. Deep-fried in cold-pressed sesame oil. Tanuku-made, hand-pressed. Buy online.",
  keywords: ["Lavu Karappusa", "Thick Andhra Sev", "Telugu Karappusa", "Pepper Sev Snack", "South Indian Tea Snack", "Buy Lavu Karappusa"],
  telugu: "లావు కారప్పూస",
  intro: "Lavu Karappusa is the thicker, bolder cousin of the everyday sev — sturdy strands of gram-flour dough pressed through a wide-hole mould and fried in cold-pressed sesame oil. What sets our Lavu Karappusa apart is the pepper-and-ajwain backbone: warm, slightly bitter, slightly tingly, with a satisfying chew at the centre and a crisp shell that snaps with every bite. A tea-time favourite, plain and proud.",
  sections: [
    { heading: "Thick, peppery, hand-pressed", body: "We use freshly milled gram flour, cracked black pepper, ajwain and rock salt — no chilli to mask the spice. The dough is pressed through a wide-aperture mould directly into hot oil, where it puffs into thick, golden strands. Frying in cold-pressed sesame oil gives Lavu Karappusa its nutty finish; the thick gauge gives it the chew that defines the snack." },
    { heading: "How to enjoy Lavu Karappusa", body: "Lavu Karappusa was made for chai breaks — a small bowl on the side, a cup of strong tea in hand, and an unhurried hour. Crumble it over curd rice for instant crunch and pepper warmth, or pack it into journey tins where it holds up better than thinner sev. A frequent feature in Andhra wedding and festive hampers." },
  ],
  highlights: ["Thick-gauge hand-pressed sev", "Cracked black pepper and ajwain", "Fried in cold-pressed sesame oil", "No maida or artificial flavours", "Made in small Tanuku batches"],
  ingredients: "Gram flour, rice flour, black pepper, ajwain, rock salt, cold-pressed sesame oil, asafoetida.",
  },
  "pappu-chegodilu": {
  title: "Pappu Chegodilu — Lentil Andhra Ring Snack Online",
  description: "Pappu Chegodilu — lentil-rich Andhra rings with chana dal, rice flour and sesame. Extra bite, deep crunch. Fried in cold-pressed sesame oil. Buy online.",
  keywords: ["Pappu Chegodilu", "Lentil Chegodilu", "Andhra Dal Rings", "Telugu Chegodi", "Chana Dal Snack", "Buy Pappu Chegodilu"],
  telugu: "పప్పు చేగోడీలు",
  intro: "Pappu Chegodilu turns up the volume on the classic Andhra ring. We soak chana dal until just tender, then coarsely crush it into a rice-flour dough seasoned with sesame, ajwain and red chilli. Each Pappu Chegodilu is hand-shaped into a ring and fried in cold-pressed sesame oil. The lentil pieces give it extra bite — a deeper, more savoury crunch that holds up beautifully against a strong cup of filter coffee.",
  sections: [
    { heading: "Lentils for the extra bite", body: "The defining move in our Pappu Chegodilu is the chana dal. Soaked just enough to soften, it is crushed coarse so you see — and feel — flecks of lentil through every ring. This gives the snack a heartier, more savoury character than regular chegodilu, with a crunch that lasts longer in the mouth. The dough still rests on rice flour, so the snap stays clean." },
    { heading: "Serving suggestions", body: "Pappu Chegodilu is the snack you reach for when chai needs serious company. It also plays beautifully on a festive platter alongside janthikalu and bundi mixture, and makes a thoughtful addition to Diwali and Sankranti hampers. Pack it into journey tins or office drawers — it stays crisp for many tea breaks if kept airtight." },
  ],
  highlights: ["Soaked, coarsely crushed chana dal", "Rice flour base — no maida", "Hand-shaped rings, small batches", "Sesame, ajwain and red chilli", "Fried in cold-pressed sesame oil"],
  ingredients: "Rice flour, chana dal, sesame seeds, ajwain, red chilli powder, rock salt, cold-pressed sesame oil.",
  },
  "ribbon-pakodi": {
  title: "Ribbon Pakodi — Andhra Flat Ribbon Murukku Online",
  description: "Ribbon Pakodi — flat, brittle Andhra murukku with rice flour, gram flour and chilli. Fried in cold-pressed sesame oil. No maida. Tanuku-made. Buy online.",
  keywords: ["Ribbon Pakodi", "Andhra Ribbon Murukku", "Telugu Ribbon Pakoda", "Flat Murukku Snack", "South Indian Tea Snack", "Buy Ribbon Pakodi"],
  telugu: "రిబ్బన్ పకోడీ",
  intro: "Ribbon Pakodi is the flat, ribbon-shaped murukku that disappears from the tin faster than you can refill it. Ours is pressed from a dough of rice flour, gram flour and a measured hit of red chilli, slipped into hot cold-pressed sesame oil where each ribbon curls and crisps within seconds. The result is a Ribbon Pakodi that snaps brittle on first bite and finishes with a gentle Andhra warmth — addictive in the best possible way.",
  sections: [
    { heading: "Built for clean crunch", body: "Ribbon Pakodi is all about thickness. Too thick and it goes chewy; too thin and it burns. We rest the dough, press it through a flat-slot mould, and fry only as much as the kadai can hold without crowding. Cold-pressed sesame oil gives the ribbons a nutty backbone, and the simple seasoning — chilli, salt, a hint of asafoetida — lets the flours speak." },
    { heading: "How to enjoy Ribbon Pakodi", body: "Pair Ribbon Pakodi with strong filter coffee or evening chai for the classic Andhra tea-time pause. Crumble it into curd rice for instant crunch, or add it to your Diwali and festive hampers — its flat shape packs neatly into tins and travels remarkably well. Children will finish a packet before you have finished a cup." },
  ],
  highlights: ["Flat, brittle ribbon shape", "Rice flour and gram flour base", "Pressed through flat-slot mould", "Cold-pressed sesame oil fry", "No maida or artificial flavours"],
  ingredients: "Rice flour, gram flour, red chilli powder, rock salt, cumin, cold-pressed sesame oil, asafoetida.",
  },
  "sanna-karappusa": {
  title: "Sanna Karappusa — Fine Andhra Sev with Mild Chilli Online",
  description: "Sanna Karappusa — fine, delicate Andhra sev with gram flour and mild chilli. Perfect for chaat and curd rice. Fried in cold-pressed sesame oil. Buy online.",
  keywords: ["Sanna Karappusa", "Fine Andhra Sev", "Telugu Karappusa", "Thin Sev Snack", "Curd Rice Topping", "Buy Sanna Karappusa"],
  telugu: "సన్న కారప్పూస",
  intro: "Sanna Karappusa is the delicate, fine-strand sev — the opposite number to its thicker cousin Lavu Karappusa. Pressed through a fine-hole mould into hot cold-pressed sesame oil, our Sanna Karappusa fries in seconds into pale, lacy strands seasoned with just a whisper of chilli and salt. It is light enough to disappear by the handful, and fine enough to sit gracefully on top of chaat or a bowl of curd rice.",
  sections: [
    { heading: "Fine strands, careful frying", body: "The challenge with Sanna Karappusa is heat control. Too hot and the strands brown unevenly; too cool and they turn limp. We work in small batches, watching the oil carefully, lifting the sev out the moment it turns pale gold. Gram flour and rice flour in the right proportion give it that snap-crisp texture; cold-pressed sesame oil gives the nutty undertone that ties it together." },
    { heading: "Ways to use Sanna Karappusa", body: "Sprinkle Sanna Karappusa over curd rice for instant texture and gentle heat. Use it as the crunchy topping on bhel, masala puri or any chaat. Eat it straight from the tin with chai. Its fine strands also make it the perfect mix-in for homemade mixtures — a tablespoon goes a long way." },
  ],
  highlights: ["Fine-strand, delicate sev", "Mild chilli — chaat-friendly", "Gram flour and rice flour blend", "Fried in cold-pressed sesame oil", "Small-batch, hand-packed in Tanuku"],
  ingredients: "Gram flour, rice flour, red chilli powder, rock salt, ajwain, cold-pressed sesame oil, asafoetida.",
  },
  "bellam-gavvalu": {
  title: "Bellam Gavvalu — Jaggery-Coated Andhra Sweet Online",
  description: "Crunchy shell-shaped Bellam Gavvalu hand-rolled and coated in pure Andhra jaggery syrup. Made in Tanuku with cow ghee. No preservatives. Buy authentic Telugu sweets online.",
  keywords: ["Bellam Gavvalu", "Jaggery Gavvalu", "Andhra Sweets Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Telugu Sweets", "Bellam Sweets"],
  telugu: "బెల్లం గవ్వలు",
  intro: "Bellam Gavvalu are the little shell-shaped wonders of Andhra kitchens — crisp, golden, and caramel-glossed with pure jaggery. Shaped by hand on the back of a fork or a fresh banana leaf, each piece carries the imprint of someone's patient grandmother. They are the kind of sweet that disappears from the dabba long before any festival actually arrives.",
  sections: [
    { heading: "Shaped By Hand, One Shell At A Time", body: "Every gavva is rolled individually — a small disc of dough pressed into ridges that catch the jaggery syrup beautifully. This is slow work, the sort that machines cannot fake. Our family in Tanuku has been making them for four generations, and the rhythm of pressing, frying, and coating has barely changed. The ridges aren't decoration; they're what holds the caramel."},
    { heading: "Jaggery That Tastes Like Andhra", body: "We use dark, mineral-rich jaggery sourced from Andhra farms, melted to a single-thread consistency so it sets glossy and brittle rather than sticky. Pure cow ghee — never Dalda — gives the dough its short, crisp bite. No maida, no artificial colour, no preservatives. Just wheat flour, ghee, and bellam doing what they have always done together."},
    { heading: "A Sankranti And Diwali Classic", body: "Gavvalu are festival royalty in coastal Andhra — piled into steel tins at Sankranti, gifted in small boxes at Diwali, and packed into school lunchboxes year-round. Their long shelf-friendly crunch makes them ideal for sending to family abroad or carrying on long journeys home."},
  ],
  highlights: ["Hand-shaped shell by shell", "Pure Andhra jaggery coating", "Made in cow ghee, no Dalda", "No maida, no preservatives", "Small-batch from Tanuku"],
  ingredients: "Wheat flour, pure cow ghee, Andhra jaggery, and a pinch of salt.",
  },
  "bundi-chikki": {
  title: "Boondi Chikki — Crisp Jaggery Boondi Sweet Online",
  description: "Boondi Chikki — tiny fried gram-flour pearls locked in glossy Andhra jaggery. Hand-made in Tanuku with pure cow ghee. No preservatives. Order authentic Telugu sweets online.",
  keywords: ["Boondi Chikki", "Bundi Chikki", "Jaggery Boondi Sweet", "Andhra Chikki Online", "Sankranti Sweets", "Diwali Snacks", "Traditional Telugu Sweets"],
  telugu: "బూంది చిక్కీ",
  intro: "Boondi Chikki is the teatime sweet that built childhoods — golden gram-flour pearls suspended in a clear sheet of jaggery, snapping cleanly between the teeth. It's nostalgic in the best way: the kind of thing you ate at your grandmother's house and forgot was special, until you tried to find it again and realised nobody makes it like this anymore.",
  sections: [
    { heading: "Pearls Of Boondi, Locked In Bellam", body: "Each boondi is fried fresh to a light, hollow crunch — never soggy, never overcooked — and folded into jaggery syrup at the precise moment it reaches the snap stage. Too early and the chikki turns chewy; too late and it crystallises. Four generations of practice tells you when to pour. We've been doing this in Tanuku long enough to trust the smell more than the thermometer."},
    { heading: "Real Jaggery, Real Ghee", body: "Our jaggery comes from Andhra and carries its proper mineral depth — not the bland, pale stuff that turns chikki sticky. A whisper of pure cow ghee keeps the brittle glossy and clean-breaking. No artificial colour, no glucose syrup, no preservatives. This is chikki the way it tasted before factories arrived."},
    { heading: "Made For Festivals And Long Journeys", body: "Boondi chikki travels beautifully — perfect for Sankranti hampers, Diwali gift boxes, or care packages to children studying away from home. Pack a small piece in your handbag and you have an instant, dependable pick-me-up."},
  ],
  highlights: ["Fresh-fried boondi pearls", "Pure Andhra jaggery", "Cow ghee, no Dalda", "No glucose, no preservatives", "Festival-ready Tanuku sweet"],
  ingredients: "Bengal gram flour, Andhra jaggery, pure cow ghee, and a touch of cardamom.",
  },
  "gottam-kaja": {
  title: "Gottam Kaja — Hollow Syrup-Soaked Andhra Sweet Online",
  description: "Gottam Kaja — hollow tube-shaped kaja with shatter-crisp layers and light sugar syrup. Hand-made in Tanuku with pure cow ghee. No preservatives. Buy authentic Andhra sweets online.",
  keywords: ["Gottam Kaja", "Andhra Kaja", "Hollow Kaja Sweet", "Telugu Sweets Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Andhra Sweets"],
  telugu: "గొట్టం కాజా",
  intro: "Gottam Kaja is engineering disguised as a sweet — a hollow, golden tube whose walls shatter into a hundred crisp layers the moment you bite. The name itself comes from gottam, the Telugu word for a pipe or hollow reed. Soaked just-so in light sugar syrup, it manages the rare trick of being syrupy and shatter-crisp in the same bite.",
  sections: [
    { heading: "The Art Of The Hollow Layer", body: "Making gottam kaja is a quiet test of skill: the dough is rolled, layered with ghee, rolled again, and shaped into hollow cylinders before frying. The layers separate during frying to create those signature airy walls. Done wrong, the kaja collapses. Done right — the way our family has done it for four generations in Tanuku — each piece sings when you tap it."},
    { heading: "Light Syrup, Pure Cow Ghee", body: "We use only pure cow ghee, never Dalda or vanaspati, which is why the layers fry up clean and stay crisp even after the syrup soak. The sugar syrup is kept to a single thread — enough to sweeten and glaze without turning the kaja soggy. No artificial colour, no preservatives, no shortcuts."},
    { heading: "A Wedding And Festival Centrepiece", body: "Gottam kaja is the showpiece of Andhra wedding sweet trays and Diwali gift boxes — its impressive length and shimmer make it instantly recognisable. It's also a favoured Sankranti offering, served alongside ariselu and sunnundalu in coastal households."},
  ],
  highlights: ["Hollow, hand-shaped tubes", "Hundred shatter-crisp layers", "Pure cow ghee, no Dalda", "Light single-thread syrup", "Tanuku family recipe"],
  ingredients: "Wheat flour, pure cow ghee, sugar syrup, and a hint of cardamom.",
  },
  "madatha-kaja": {
  title: "Madatha Kaja — Flaky Layered Andhra Sweet Online",
  description: "Madatha Kaja — folded, flaky kaja with countless ghee-rich layers soaked in light sugar syrup. Hand-made in Tanuku, pure cow ghee, no preservatives. Buy Andhra sweets online.",
  keywords: ["Madatha Kaja", "Layered Kaja", "Andhra Kaja Online", "Telugu Sweets Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Andhra Sweets"],
  telugu: "మడత కాజా",
  intro: "Madatha Kaja takes its name from madata — the Telugu word for a fold — and that is precisely what makes it magic. Sheets of dough are layered with ghee, folded, rolled, folded again, until each piece holds dozens of paper-fine leaves. Fried golden and dipped in light syrup, it breaks into flakes that drift across the plate like petals.",
  sections: [
    { heading: "Folded, Not Hurried", body: "The kaja's character lives in its lamination. Each fold traps a film of pure cow ghee between sheets of dough, and during frying those films puff and separate into countless crisp layers. We don't take shortcuts with the folding — it's done by hand on a marble slab, the way our great-grandmother taught the family in Tanuku. Machine-pressed kaja simply cannot hold the same architecture."},
    { heading: "Just Enough Syrup", body: "The syrup is kept deliberately light — a thin glaze that sweetens without flooding. This is what allows madatha kaja to stay flaky for days rather than collapsing into sogginess. Pure cow ghee, real sugar, and our own slow timing. No vanaspati, no preservatives, no artificial colour."},
    { heading: "Festival, Wedding, And Everyday Treasure", body: "From Diwali boxes to Ugadi pooja plates, madatha kaja is the sweet that signals occasion. It is also a favourite for sending to relatives abroad — wrapped well, it travels with its flakes intact and arrives tasting of home."},
  ],
  highlights: ["Dozens of hand-folded layers", "Pure cow ghee lamination", "Light, non-soggy syrup glaze", "No maida shortcuts, no preservatives", "Made in Tanuku, small batches"],
  ingredients: "Wheat flour, pure cow ghee, sugar, and a whisper of cardamom.",
  },
  "kaju-burfi": {
  title: "Kaju Burfi — Soft Pure Cashew Andhra Sweet Online",
  description: "Kaju Burfi — soft, fragrant pure cashew burfi with a whisper of cardamom. Hand-made in Tanuku with cow ghee, no maida, no preservatives. Buy authentic Andhra sweets online.",
  keywords: ["Kaju Burfi", "Cashew Burfi", "Pure Kaju Sweet", "Andhra Sweets Online", "Diwali Sweets", "Sankranti Gift Sweets", "Telugu Festival Sweets"],
  telugu: "కాజు బర్ఫీ",
  intro: "Kaju Burfi is restraint pretending to be indulgence — a smooth, ivory-coloured diamond that tastes purely of cashew, lightly perfumed with cardamom. There is nothing else hiding inside. No maida, no semolina, no thickeners. Just slow-ground cashews and a careful hand at the sugar, set in a tray and cut into the shape every Indian recognises.",
  sections: [
    { heading: "Cashews, Sugar, And A Watchful Eye", body: "We grind whole cashews into a fine paste and cook it with sugar syrup over a low flame until it reaches exactly the right setting point. A second too long and the burfi turns grainy; a second too short and it refuses to set. Four generations in Tanuku have taught the family how to read the spoon. The result is a piece that melts cleanly on the tongue."},
    { heading: "Pure Ingredients, Nothing Borrowed", body: "There is no maida bulking out our kaju burfi — only cashews, sugar, a touch of pure cow ghee, and a hint of cardamom. We don't use silver leaf, artificial colour, or preservatives. The natural sheen comes from the ghee and the kaju itself."},
    { heading: "The Universal Gifting Sweet", body: "Kaju burfi sits at the heart of every Indian celebration — Diwali hampers, Sankranti gift boxes, wedding trays, Ugadi visits, and the boss's anniversary. Its mild sweetness and elegant shape make it welcome on every table, across every region."},
  ],
  highlights: ["Pure cashew, no maida filler", "Soft, melt-on-tongue texture", "Cow ghee and natural cardamom", "No silver leaf or artificial colour", "Festival-ready gifting sweet"],
  ingredients: "Whole cashews, sugar, pure cow ghee, and cardamom.",
  },
  "kaju-chikki": {
  title: "Kaju Chikki — Cashew Jaggery Brittle Andhra Sweet Online",
  description: "Kaju Chikki — whole cashews set in clear glossy Andhra jaggery brittle. Hand-made in Tanuku with cow ghee. No preservatives. Buy authentic Telugu sweets online.",
  keywords: ["Kaju Chikki", "Cashew Chikki", "Jaggery Cashew Brittle", "Andhra Chikki Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Telugu Sweets"],
  telugu: "కాజు చిక్కీ",
  intro: "Kaju Chikki is what happens when humble jaggery brittle gets a promotion — generous whole cashews held in a clear, amber sheet of bellam that snaps like glass. Each piece is more nut than syrup, the cashews glossy and lightly toasted, the jaggery thin enough to let their flavour come through. Sweet without being heavy.",
  sections: [
    { heading: "Whole Cashews, Generously Set", body: "We don't skimp on the kaju. Whole cashews are lightly roasted to bring out their oils, then folded into jaggery cooked to a precise hard-crack stage. The brittle sets into a clean, even sheet that breaks with a satisfying snap — never sticky, never tooth-clinging. The proportion of nut to jaggery is what separates a good kaju chikki from a memorable one."},
    { heading: "Andhra Jaggery, Cow Ghee, Nothing Else", body: "Our jaggery is sourced from Andhra farms for its deep, mineral flavour. A small measure of pure cow ghee — never Dalda — helps the chikki release cleanly and stay glossy. No glucose, no artificial colour, no preservatives. Four generations of getting this exactly right in Tanuku."},
    { heading: "Festival Gifting And Everyday Pick-Me-Up", body: "Kaju chikki is a Sankranti and Diwali staple, but also the perfect lunchbox or travel sweet — sturdy enough to carry, indulgent enough to feel like a treat. It is a favourite for sending to family overseas, where good cashew chikki is genuinely hard to find."},
  ],
  highlights: ["Generous whole cashews", "Clean glass-like snap", "Pure Andhra jaggery", "Cow ghee, no Dalda", "No glucose or preservatives"],
  ingredients: "Whole cashews, Andhra jaggery, and pure cow ghee.",
  },
  "mysore-pak": {
  title: "Mysore Pak — Grainy Ghee-Rich Andhra Sweet Online",
  description: "Mysore Pak — the original grainy, ghee-rich classic made with pure cow ghee and gram flour. Hand-made in Tanuku, no preservatives. Buy authentic South Indian sweets online.",
  keywords: ["Mysore Pak", "Ghee Mysore Pak", "South Indian Sweets", "Andhra Sweets Online", "Diwali Sweets", "Sankranti Gift Sweets", "Traditional Telugu Sweets"],
  telugu: "మైసూర్ పాక్",
  intro: "Mysore Pak is the South's greatest argument for the power of three ingredients. Gram flour, sugar, and an almost startling amount of pure cow ghee, cooked together until the mixture turns porous, grainy, and impossibly fragrant. The original — not the dense fudge-style — should melt on contact, leave a buttery whisper on the lips, and demand a second piece immediately.",
  sections: [
    { heading: "The Grainy Original", body: "The traditional Mysore Pak we make is porous and crumbly, not the dense brick that has become common. Achieving that honeycomb texture requires beating the cooked mixture at exactly the right temperature so air pockets lock in as it sets. It is a sweet you cannot rush. Our family in Tanuku has been making it this way for four generations, and the recipe has not been written down because it lives in muscle memory."},
    { heading: "Pure Cow Ghee, Generously", body: "Mysore Pak is not a sweet to be shy with ghee, and we don't pretend otherwise. We use pure cow ghee — never Dalda, never vanaspati — which is what gives the burfi its distinctive aroma and clean finish. Just gram flour, sugar, and ghee. No maida, no artificial colour, no preservatives."},
    { heading: "Festival Centrepiece, South Indian Soul", body: "From Diwali boxes to Ugadi celebrations, wedding sweet platters to temple prasadam, Mysore Pak is the South's gift to the festival table. Its grainy melt and ghee fragrance make it instantly nostalgic, especially for those who grew up between Karnataka and coastal Andhra."},
  ],
  highlights: ["Traditional grainy, porous texture", "Generous pure cow ghee", "No maida, no Dalda", "Just three real ingredients", "Tanuku, four generations"],
  ingredients: "Gram flour, sugar, and pure cow ghee.",
  },
  "nethi-ariselu": {
  title: "Nethi Ariselu — Jaggery Rice Andhra Festival Sweet Online",
  description: "Nethi Ariselu — jaggery and rice-flour discs fried in pure cow ghee. The iconic Andhra Sankranti sweet, hand-made in Tanuku. No preservatives. Buy Telugu sweets online.",
  keywords: ["Nethi Ariselu", "Ariselu Online", "Andhra Sankranti Sweets", "Jaggery Rice Sweet", "Telugu Festival Sweets", "Diwali Sweets", "Traditional Andhra Sweets"],
  telugu: "నేతి ఆరిసెలు",
  intro: "Nethi Ariselu is the heart of Sankranti — dark, glossy, jaggery-rice discs fried in pure cow ghee until the edges crisp and the centre stays softly chewy. In Telugu households, the smell of ariselu being fried is the smell of festival itself. Few sweets are this technically demanding, and few are this loved. We make ours the slow, old way.",
  sections: [
    { heading: "A Sweet That Refuses To Be Rushed", body: "True ariselu begin with rice that is soaked, dried, and stone-ground into the right flour — coarse enough to hold structure, fine enough to fry evenly. Jaggery is melted to a single-thread syrup and folded in by hand. The dough rests, then is patted into discs and fried slowly in pure cow ghee. Hurry any step and the ariselu either burn, dissolve, or refuse to puff. Four generations of practice in Tanuku gets it right."},
    { heading: "Pure Ghee, Pure Jaggery", body: "We fry only in pure cow ghee — never reused oil, never Dalda — which is what gives our ariselu their characteristic clean, fragrant finish. The jaggery is sourced from Andhra farms. No artificial colour, no preservatives, no maida. Just rice, bellam, ghee, and sesame seeds dusted on top."},
    { heading: "Sankranti, Pongal, And Every Wedding Tray", body: "Ariselu is non-negotiable at Sankranti in Andhra homes, and equally welcome at weddings, housewarmings, and Diwali. Send a box to family abroad and you are sending a piece of every January morning they remember."},
  ],
  highlights: ["Stone-ground rice flour", "Andhra jaggery, single-thread", "Fried in pure cow ghee", "Sesame-dusted, hand-shaped", "Sankranti's signature sweet"],
  ingredients: "Rice flour, Andhra jaggery, pure cow ghee, and sesame seeds.",
  },
  "nethi-sunnundalu": {
  title: "Nethi Sunnundalu — Urad Dal Ghee Laddu Andhra Sweet Online",
  description: "Nethi Sunnundalu — roasted urad-dal laddus bound with pure cow ghee and jaggery. Hand-made in Tanuku, no preservatives. Buy authentic Andhra Telugu sweets online.",
  keywords: ["Nethi Sunnundalu", "Sunnundalu Online", "Urad Dal Laddu", "Andhra Sweets Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Telugu Sweets"],
  telugu: "నేతి సున్నుండలు",
  intro: "Nethi Sunnundalu are the laddus every Andhra mother packs into her child's hostel trunk. Roasted urad dal, ground fine, bound with pure cow ghee and jaggery, and rolled into dense, fragrant spheres that smell of warmth itself. They are the original nourishing sweet — quietly powerful, deeply traditional, and impossible to stop at one.",
  sections: [
    { heading: "Urad Dal, Slow-Roasted Until It Sings", body: "The character of a good sunnundalu comes entirely from how the urad dal is roasted. We dry-roast it slowly on a heavy pan, stirring constantly, until each grain turns a deep golden and releases its nutty aroma. Then it is stone-ground while still warm. Rush the roast and you get a raw, bitter laddu; over-roast and it turns acrid. Four generations of family in Tanuku know exactly when to lift the pan."},
    { heading: "Bound With Cow Ghee And Jaggery", body: "We bind the ground dal with pure cow ghee — never Dalda — and Andhra jaggery rather than refined sugar. This is the version mothers and grandmothers actually make at home. No maida, no preservatives, no fillers. Just dal, ghee, and bellam, with maybe a stray cashew for texture."},
    { heading: "Hostel Tins And Festival Plates", body: "Sunnundalu travel beautifully and keep their character well, which is why they end up in every hostel tin, every overseas care package, and every Sankranti and Diwali sweet box. A laddu and a glass of milk is a complete morning."},
  ],
  highlights: ["Slow-roasted urad dal", "Andhra jaggery, no refined sugar", "Pure cow ghee, no Dalda", "Hand-rolled, dense and fragrant", "No maida or preservatives"],
  ingredients: "Roasted urad dal, Andhra jaggery, pure cow ghee, and cardamom.",
  },
  "nuvvula-chikki": {
  title: "Nuvvula Chikki — Sesame Jaggery Andhra Brittle Online",
  description: "Nuvvula Chikki — wholesome sesame brittle set in pure Andhra jaggery. Calcium-rich sesame, hand-made in Tanuku, no preservatives. Buy authentic Telugu sweets online.",
  keywords: ["Nuvvula Chikki", "Sesame Chikki", "Til Jaggery Brittle", "Andhra Sweets Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Telugu Sweets"],
  telugu: "నువ్వుల చిక్కీ",
  intro: "Nuvvula Chikki is the chikki your grandmother quietly approved of — toasted white sesame seeds locked into a thin, glossy sheet of Andhra jaggery, snapping into wholesome, nutty squares. Sesame is naturally calcium-rich and jaggery carries its own iron, which is why this brittle has long been a winter and Sankranti favourite across Telugu households.",
  sections: [
    { heading: "Toasted Sesame, Caught Just Right", body: "We dry-roast white sesame seeds slowly until they turn pale gold and begin to dance on the pan, then fold them immediately into jaggery cooked to a clean hard-crack. The timing is everything: too cool and the chikki turns chewy, too hot and the sesame bitters. Four generations in Tanuku have taught the family to read the syrup the way some people read the sky."},
    { heading: "Andhra Jaggery, Nothing Else", body: "The jaggery is sourced from Andhra and used unrefined for its mineral depth. A whisper of pure cow ghee keeps the brittle glossy and clean-breaking. No glucose syrup, no artificial colour, no preservatives. This is sesame chikki the way it has been made in Andhra kitchens for centuries — only with our family's particular hand."},
    { heading: "Sankranti, Winter, And School Tiffins", body: "Nuvvula Chikki is a classic Sankranti sweet — sesame and jaggery being the season's traditional warming pair — and equally welcome in Diwali boxes and school lunchboxes. It travels well, keeps beautifully, and feels honest in a way few sweets do."},
  ],
  highlights: ["Toasted white sesame seeds", "Pure Andhra jaggery", "Calcium-rich, iron-rich pairing", "No glucose, no preservatives", "Tanuku, small-batch chikki"],
  ingredients: "White sesame seeds, Andhra jaggery, and a touch of pure cow ghee.",
  },
  "palli-chikki": {
  title: "Palli Chikki — Peanut Jaggery Andhra Brittle Online",
  description: "Palli Chikki — the classic peanut and jaggery brittle of Andhra childhoods. Hand-made in Tanuku with pure jaggery and cow ghee. No preservatives. Buy Telugu sweets online.",
  keywords: ["Palli Chikki", "Peanut Chikki", "Groundnut Jaggery Brittle", "Andhra Sweets Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Telugu Sweets"],
  telugu: "పల్లి చిక్కీ",
  intro: "Palli Chikki is the snack of Telugu childhoods — roasted groundnuts caught inside a thin, glossy plank of jaggery, snapping into squares that taste of every railway journey, every long afternoon, every grandmother's steel dabba. There is nothing fancy about it, and that is exactly the point. A perfect palli chikki needs only good peanuts, good bellam, and good timing.",
  sections: [
    { heading: "Peanuts, Roasted And Skinned With Care", body: "We dry-roast Andhra groundnuts slowly until their skins crackle and slip off cleanly, then de-skin them by hand so no bitter papery bits make it into the chikki. The peanuts are folded into jaggery cooked to hard-crack and pressed thin while still hot. Done right, the brittle is more nut than syrup, with a clean shatter and a deep roasted aroma."},
    { heading: "Real Jaggery, No Shortcuts", body: "The jaggery comes from Andhra farms and is used unrefined. A small measure of pure cow ghee — never Dalda — keeps the surface glossy and the brittle from sticking. No glucose, no artificial colour, no preservatives. This is the chikki you remember, not the candy-bar version that has crowded it out of shops."},
    { heading: "Sankranti Tins, Diwali Boxes, Railway Bags", body: "Palli Chikki is the most democratic of Andhra sweets — equally at home in a festival hamper, a child's school bag, or a long train ride. It travels brilliantly and keeps its crunch, making it a favourite for sending to family abroad."},
  ],
  highlights: ["Andhra groundnuts, hand-skinned", "Pure unrefined jaggery", "Cow ghee, no Dalda", "No glucose, no preservatives", "Generations-old Tanuku recipe"],
  ingredients: "Roasted peanuts, Andhra jaggery, and pure cow ghee.",
  },
  "ravva-laddu": {
  title: "Ravva Laddu — Semolina Cashew Ghee Andhra Sweet Online",
  description: "Ravva Laddu — semolina laddus with cashew, cardamom and pure cow ghee. Hand-rolled in Tanuku, no maida, no preservatives. Buy authentic Andhra Telugu sweets online.",
  keywords: ["Ravva Laddu", "Rava Laddu", "Sooji Laddu", "Andhra Sweets Online", "Sankranti Sweets", "Diwali Sweets", "Traditional Telugu Sweets"],
  telugu: "రవ్వ లడ్డు",
  intro: "Ravva Laddu is the homely, golden laddu that every Telugu home knows how to make for unannounced guests. Fine semolina, roasted in pure cow ghee until it turns nutty, bound with sugar syrup, studded with cashews and perfumed with cardamom, then rolled while still warm into firm, comforting spheres. Familiar, generous, and never out of place.",
  sections: [
    { heading: "Slow-Roasted Semolina Is Everything", body: "The flavour of a good ravva laddu lives entirely in how the semolina is roasted. We toast it gently in pure cow ghee until it shifts from pale yellow to a soft golden and releases its nutty aroma — the moment to stop is something only practice teaches. Four generations of family in Tanuku know exactly when to lift the pan, when to add the cashews, and when to start rolling."},
    { heading: "Pure Cow Ghee, Whole Cashews, Cardamom", body: "We use only pure cow ghee — never Dalda, never vanaspati — which is what gives the laddu its short, melting bite and clean fragrance. Whole cashews are fried separately and folded in. Cardamom is freshly pounded. No maida, no artificial colour, no preservatives."},
    { heading: "A Sweet For Every Occasion", body: "Ravva Laddu is a festival regular — Sankranti, Diwali, Ugadi — but also the laddu of pooja plates, housewarmings, and afternoon visits. It is mild enough for elders, generous enough for children, and packs beautifully for sending to family abroad."},
  ],
  highlights: ["Slow ghee-roasted semolina", "Whole cashews, fresh cardamom", "Pure cow ghee, no Dalda", "Hand-rolled while warm", "No maida or preservatives"],
  ingredients: "Fine semolina, sugar, pure cow ghee, cashews, and cardamom.",
  },
  "bellam-dry-fruit-putharekulu-pack-of-10pcs": {
  title: "Bellam Dry Fruit Putharekulu — Pack of 10 Atreyapuram Sweet",
  description: "Bellam Dry Fruit Putharekulu — Atreyapuram's GI-tag paper sweet layered with jaggery and dry fruits. Pack of 10, hand-rolled, pure cow ghee. Buy authentic Andhra sweets online.",
  keywords: ["Bellam Dry Fruit Putharekulu", "Putharekulu Pack of 10", "Atreyapuram Putharekulu", "Jaggery Putharekulu Online", "Andhra Paper Sweet", "Diwali Gift Sweets", "Sankranti Sweets"],
  telugu: "బెల్లం డ్రై ఫ్రూట్ పుట్టారేకులు",
  intro: "Bellam Dry Fruit Putharekulu is Atreyapuram's iconic paper sweet at its most generous — gossamer rice sheets layered with pure cow ghee, dark Andhra jaggery, and a careful scatter of crushed dry fruits. Each pack of 10 carries the labour of hours: sheets so thin you can almost see through them, folded around a filling rich enough to feel like an occasion all by itself.",
  sections: [
    { heading: "Atreyapuram's GI-Tag Paper Sweet", body: "Putharekulu is a recognised Geographical Indication sweet from Atreyapuram in East Godavari, where the unique humid air helps the rice batter set into edible sheets. The technique — hand-rolling the batter onto an inverted hot pan and lifting it as paper — exists almost nowhere else. Our putharekulu are made in this same Godavari tradition, kept faithful by four generations of family practice."},
    { heading: "Jaggery, Ghee, And Real Dry Fruits", body: "We layer each sheet with pure cow ghee, powdered Andhra jaggery, and a hand-crushed mix of cashews, almonds, and pistachios. No artificial colour, no preservatives, no maida. The jaggery gives the sweet its deep, mineral caramel character, while the dry fruits add bite and aroma to every wafer-thin bite."},
    { heading: "The Festival Gifting Pack Of 10", body: "Each box contains 10 hand-rolled pieces — the standard putharekulu festival pack, ideal for Diwali, Sankranti, Ugadi, weddings, and gifting to family abroad. The paper sweet has long been Andhra's most recognisable gift, and the dry-fruit jaggery version is its most lavish form."},
  ],
  highlights: ["Pack of 10 hand-rolled pieces", "Atreyapuram GI-tag tradition", "Pure jaggery and cow ghee", "Hand-crushed dry fruit layer", "No maida or preservatives"],
  ingredients: "Rice-sheet wafers, Andhra jaggery, pure cow ghee, cashews, almonds, and pistachios.",
  },
  "bellam-putharekulu-pack-of-10pcs": {
  title: "Bellam Putharekulu — Pack of 10 Atreyapuram Paper Sweet",
  description: "Bellam Putharekulu — Atreyapuram's iconic GI-tag paper sweet layered with Andhra jaggery and pure cow ghee. Pack of 10, hand-rolled in Tanuku. Buy Andhra sweets online.",
  keywords: ["Bellam Putharekulu", "Putharekulu Pack of 10", "Atreyapuram Putharekulu", "Jaggery Putharekulu Online", "Andhra Paper Sweet", "Sankranti Sweets", "Diwali Gift Sweets"],
  telugu: "బెల్లం పుట్టారేకులు",
  intro: "Bellam Putharekulu is the original, unadorned version of Atreyapuram's famous paper sweet — wafer-thin rice sheets brushed with pure cow ghee and layered with powdered Andhra jaggery, then folded into delicate, papery rectangles. Each pack of 10 is a small marvel of Godavari craftsmanship: sweet, light, and somehow vanishing on the tongue almost before you've registered the flavour.",
  sections: [
    { heading: "The GI-Tag Sweet Of Atreyapuram", body: "Putharekulu carries a Geographical Indication tag tied specifically to Atreyapuram in East Godavari, where the climate and the technique combine to produce sheets impossibly thin. The batter is rolled by hand onto the bottom of a hot inverted pan and lifted off as paper. It is one of India's most technically demanding sweets, and our family has been making it in the Godavari tradition for four generations."},
    { heading: "Jaggery Done The Old Way", body: "We layer each sheet with pure cow ghee and finely powdered Andhra jaggery — and nothing else. No maida, no artificial colour, no preservatives. The jaggery is sourced from Andhra farms for its deep, almost molasses-like character, which is what gives bellam putharekulu their unmistakable warm caramel depth."},
    { heading: "A Gift Pack Of 10, Festival-Ready", body: "Each box contains 10 hand-rolled paper-thin pieces — the classic putharekulu festival pack. Putharekulu is one of the most-sent Andhra sweets at Diwali, Sankranti, Ugadi, and weddings, and the jaggery version is the older, more traditional choice."},
  ],
  highlights: ["Pack of 10 paper-thin pieces", "Atreyapuram GI-tag tradition", "Pure Andhra jaggery layering", "Pure cow ghee, hand-rolled", "No maida or preservatives"],
  ingredients: "Hand-rolled rice-sheet wafers, Andhra jaggery, and pure cow ghee.",
  },
  "sugar-dry-fruit-putharekulu-pack-of-10pcs": {
  title: "Sugar Dry Fruit Putharekulu — Pack of 10 Atreyapuram Sweet",
  description: "Sugar Dry Fruit Putharekulu — Atreyapuram's GI-tag paper sweet layered with sugar and dry fruits. Pack of 10, hand-rolled, pure cow ghee. Buy authentic Andhra sweets online.",
  keywords: ["Sugar Dry Fruit Putharekulu", "Putharekulu Pack of 10", "Atreyapuram Putharekulu", "Sugar Putharekulu Online", "Andhra Paper Sweet", "Diwali Gift Sweets", "Sankranti Sweets"],
  telugu: "షుగర్ డ్రై ఫ్రూట్ పుట్టారేకులు",
  intro: "Sugar Dry Fruit Putharekulu is the celebratory, fair-skinned cousin of the jaggery version — gossamer rice sheets brushed with pure cow ghee and layered with fine powdered sugar and a generous scatter of crushed cashews, almonds, and pistachios. Each pack of 10 is a study in lightness: delicate, fragrant, and almost weightless until the dry fruits land on the tongue.",
  sections: [
    { heading: "Atreyapuram, In Its Lighter Avatar", body: "Putharekulu is a Geographical Indication sweet from Atreyapuram in East Godavari, made by rolling thin rice batter on a hot inverted pan and lifting it off as edible paper. The sugar version is the one most often served at weddings and family functions — its pale gold colour and gentler sweetness make it especially welcome on celebratory plates. Our family has worked this technique for four generations."},
    { heading: "Sugar, Ghee, And Real Dry Fruits", body: "We layer each sheet with pure cow ghee, finely powdered sugar, and a hand-crushed mix of cashews, almonds, and pistachios. No artificial colour, no preservatives, no maida. The cleaner sweetness of the sugar lets the dry fruits and ghee come through more clearly than in the jaggery version."},
    { heading: "The Pack Of 10 For Gifting", body: "Each box contains 10 hand-rolled pieces — the standard putharekulu festival pack, perfectly suited to Diwali hampers, Sankranti boxes, Ugadi visits, weddings, and sending to family abroad. The sugar-and-dry-fruit version is the lavish, lighter-toned choice."},
  ],
  highlights: ["Pack of 10 hand-rolled pieces", "Atreyapuram GI-tag tradition", "Powdered sugar and dry fruit layer", "Pure cow ghee, no Dalda", "No artificial colour or preservatives"],
  ingredients: "Rice-sheet wafers, powdered sugar, pure cow ghee, cashews, almonds, and pistachios.",
  },
  "sugar-putharekulu-pack-of-10pcs": {
  title: "Sugar Putharekulu — Pack of 10 Atreyapuram Paper Sweet",
  description: "Sugar Putharekulu — Atreyapuram's GI-tag paper sweet layered with powdered sugar and pure cow ghee. Pack of 10, hand-rolled in Tanuku. Buy authentic Andhra sweets online.",
  keywords: ["Sugar Putharekulu", "Putharekulu Pack of 10", "Atreyapuram Putharekulu", "Sugar Paper Sweet Online", "Andhra Paper Sweet", "Diwali Gift Sweets", "Sankranti Sweets"],
  telugu: "షుగర్ పుట్టారేకులు",
  intro: "Sugar Putharekulu is the lightest expression of Atreyapuram's famous paper sweet — wafer-thin rice sheets brushed with pure cow ghee and dusted with finely powdered sugar, folded into delicate translucent rectangles. Each pack of 10 is hand-rolled from scratch, and the sweet is so airy that it seems to dissolve on contact, leaving only ghee fragrance and gentle sweetness behind.",
  sections: [
    { heading: "The Paper Sweet Of Atreyapuram", body: "Putharekulu holds a Geographical Indication tag for Atreyapuram in East Godavari, where the climate allows rice batter to be lifted off a hot inverted pan as edible paper. The sugar version is the version most non-Andhra guests fall in love with first — pale, polite, and incredibly delicate. Our family has been making it in the Godavari tradition for four generations."},
    { heading: "Just Sugar, Ghee, And Rice", body: "We layer each rice sheet with pure cow ghee and finely powdered sugar — that is all. No maida, no artificial colour, no preservatives. The simplicity is the point: with so few ingredients, the quality of each one matters more, which is why we use only pure cow ghee and freshly milled sugar."},
    { heading: "Pack Of 10 For Festivals And Gifting", body: "Each box contains 10 hand-rolled pieces — the standard putharekulu festival pack. Sugar putharekulu is a particular favourite for Diwali, weddings, Ugadi, and Sankranti gifting, as well as for sending to family abroad who know of the sweet but cannot find a proper version locally."},
  ],
  highlights: ["Pack of 10 paper-thin pieces", "Atreyapuram GI-tag tradition", "Powdered sugar and cow ghee", "Hand-rolled from scratch", "No maida or preservatives"],
  ingredients: "Hand-rolled rice-sheet wafers, powdered sugar, and pure cow ghee.",
  },
};
