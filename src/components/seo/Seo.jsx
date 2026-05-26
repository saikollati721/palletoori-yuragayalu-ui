import { Helmet } from "react-helmet-async";
import { SITE, buildTitle, absoluteUrl, canonical } from "../../lib/seo";

/**
 * Per-page meta. Compose with <JsonLd /> blocks for structured data.
 *
 * Props:
 *   title       — page title (will be appended with site name)
 *   description — meta description (~150-160 chars)
 *   pathname    — current URL pathname; used to build canonical
 *   keywords    — array of keyword strings
 *   image       — OG / Twitter image path (absolute or relative)
 *   ogType      — "website" (default) | "product" | "article"
 *   noindex     — true → robots noindex,nofollow (cart/checkout/admin)
 *   children    — additional <Helmet> children (custom tags)
 */
export default function Seo({
  title,
  description = SITE.description,
  pathname = "/",
  keywords,
  image = SITE.defaultImage,
  ogType = "website",
  noindex = false,
  children,
}) {
  const finalTitle = buildTitle(title);
  const url = canonical(pathname);
  const imgUrl = absoluteUrl(image);
  const kw = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return (
    <Helmet prioritizeSeoTags>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {kw && <meta name="keywords" content={kw} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      {/* Dimensions help Facebook / WhatsApp / LinkedIn render previews faster and avoid cropping.
          All product photos and the logo are 1200x1200; safe default. */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:image:alt" content={title || SITE.name} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
      <meta name="twitter:image:alt" content={title || SITE.name} />

      {children}
    </Helmet>
  );
}

/** Inline JSON-LD block — pass any object that conforms to schema.org. */
export function JsonLd({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
