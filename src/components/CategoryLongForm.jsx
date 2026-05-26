/**
 * Renders the category intro + supporting paragraphs.
 * Takes a categorySeo entry: { intro, body: [{ heading, text }] }.
 */
export default function CategoryLongForm({ category, seo }) {
  if (!seo) return null;

  return (
    <section className="mt-20 border-t border-clay-100 pt-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl text-clay-700 sm:text-3xl">
          About {category.name}
        </h2>
        {seo.intro && (
          <p className="mt-5 text-clay-600 leading-relaxed">{seo.intro}</p>
        )}

        {seo.body?.length > 0 && (
          <div className="mt-10 space-y-8">
            {seo.body.map((b) => (
              <div key={b.heading}>
                <h3 className="font-display text-xl text-clay-700">{b.heading}</h3>
                <p className="mt-2 text-clay-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
