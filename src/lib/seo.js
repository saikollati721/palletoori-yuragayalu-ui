// Site-wide SEO config + helpers.
// Tweak SITE.url when you cut over DNS to the new host.

export const SITE = {
  name: "Palletoori Vuragayalu",
  shortName: "Palletoori",
  url: "https://palletoorivuragayalu.in", // canonical host — no trailing slash
  defaultImage: "/images/logo.jpg",
  locale: "en_IN",
  tagline: "Authentic Andhra Pickles, Sweets & Snacks",
  description:
    "Buy authentic homemade Andhra pickles, traditional sweets, karappodulu and snacks. Avakaya, Gongura, Mutton, Putharekulu — handcrafted with cold-pressed oils and no preservatives.",
};

export const absoluteUrl = (path) => {
  if (!path) return SITE.url;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
};

export const canonical = (pathname) => {
  // Live site uses trailing slashes everywhere — keep that to match indexed URLs.
  let p = pathname || "/";
  if (p !== "/" && !p.endsWith("/")) p = `${p}/`;
  return `${SITE.url}${p}`;
};

// Use shortName ("Palletoori", 10 chars) instead of full name ("Palletoori Vuragayalu", 20 chars)
// so titles fit closer to Google's ~60-char SERP cutoff. The brand is the last thing in the
// title, so on the rare product where the full title still exceeds the cutoff, Google truncates
// the brand suffix rather than the keyword-bearing product name.
export const buildTitle = (pageTitle) =>
  pageTitle ? `${pageTitle} — ${SITE.shortName}` : `${SITE.name} — ${SITE.tagline}`;

// ----- JSON-LD builders -----

const shippingDetails = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "100",
    currency: "INR",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "IN",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 7, unitCode: "DAY" },
  },
};

const returnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "IN",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  merchantReturnLink: `${SITE.url}/contact/`,
};

export const productJsonLd = ({ product, category, url, priceFrom, priceTo, brand = SITE.name }) => {
  const isSingle = product.singlePrice || product.prices?.length === 1;
  // Single-price products (combos, putharekulu) get a single Offer node so Google can read a clean price.
  // Multi-size products use AggregateOffer with lowPrice/highPrice and the real number of sizes.
  const offers = isSingle
    ? {
        "@type": "Offer",
        priceCurrency: "INR",
        price: priceFrom,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url,
        seller: { "@type": "Organization", name: SITE.name, "@id": `${SITE.url}/#business` },
        shippingDetails,
        hasMerchantReturnPolicy: returnPolicy,
      }
    : {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: priceFrom,
        highPrice: priceTo,
        offerCount: product.prices?.length ?? 3,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url,
        seller: { "@type": "Organization", name: SITE.name, "@id": `${SITE.url}/#business` },
        shippingDetails,
        hasMerchantReturnPolicy: returnPolicy,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short,
    image: absoluteUrl(product.image),
    sku: product.id,
    brand: { "@type": "Brand", name: brand },
    category: category?.name,
    offers,
  };
};

export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: it.url ? absoluteUrl(it.url) : undefined,
  })),
});

export const itemListJsonLd = ({ name, items, url }) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  url: absoluteUrl(url),
  hasPart: {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: absoluteUrl(`/product/${p.id}/`),
      name: p.name,
    })),
  },
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: `${SITE.url}/`,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/shop/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});
