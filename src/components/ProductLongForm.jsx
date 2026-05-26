import { productSeo } from "../data/productSeo";

/**
 * Renders the keyword-rich long-form content on a product detail page.
 * Uses a curated entry from src/data/productSeo.js if available; otherwise
 * falls back to a template derived from the product itself.
 */
export default function ProductLongForm({ product, category }) {
  const seo = productSeo[product.id] ?? templateFor(product, category);

  return (
    <section className="mt-20 border-t border-clay-100 pt-16">
      <div className="mx-auto max-w-3xl">
        <header>
          {seo.telugu && (
            <div className="text-sm font-medium text-clay-400">{seo.telugu}</div>
          )}
          <h2 className="mt-1 font-display text-3xl text-clay-700 sm:text-4xl">
            Authentic {product.name}
          </h2>
          <p className="mt-6 text-clay-600 leading-relaxed">{seo.intro}</p>
        </header>

        {seo.sections?.length > 0 && (
          <div className="mt-12 space-y-10">
            {seo.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="font-display text-xl text-clay-700">{s.heading}</h3>
                <p className="mt-3 text-clay-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        )}

        {seo.highlights?.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl text-clay-700">Product highlights</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {seo.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl bg-clay-50/60 p-4">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-spice-500" />
                  <span className="text-sm text-clay-700">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {seo.ingredients && (
          <div className="mt-12 rounded-2xl border border-clay-100 bg-white p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-clay-400">
              Ingredients
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-clay-700">{seo.ingredients}</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Lightweight fallback used for products without a curated SEO entry.
function templateFor(product, category) {
  const lower = product.name.toLowerCase();
  return {
    intro: `${product.short} Hand-prepared in our village kitchen, our ${lower} carries the unmistakable depth of traditional Andhra cooking — cold-pressed sesame oil, hand-ground masala, and the kind of slow attention you can taste in every spoonful.`,
    sections: [
      {
        heading: `What makes our ${product.name} special`,
        body: `Every batch of ${lower} is made in small quantities, using the same ${category?.name?.toLowerCase() ?? "Andhra"} method that village kitchens have used for generations. We don't use artificial preservatives, commercial colour or shortcut ingredients — just the basics, done properly.`,
      },
      {
        heading: "How to enjoy",
        body: `Pair with hot rice and a teaspoon of ghee for the classic Andhra serving. Excellent with curd rice, dosa or as a side on a thali. Keep tightly closed; always use a clean, dry spoon.`,
      },
    ],
    highlights: [
      "Made in small batches",
      "Cold-pressed sesame oil",
      "Hand-ground Andhra masala",
      "No artificial preservatives",
    ],
  };
}
