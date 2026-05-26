import { Link } from "react-router-dom";
import { categories, products } from "../data/products";

export default function Categories() {
  const countFor = (id) => products.filter((p) => p.category === id).length;
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">Shop by craving</span>
          <h2 className="mt-3 text-3xl text-clay-700 sm:text-4xl">Every jar tells a story</h2>
          <p className="mt-4 text-clay-500">Eight categories, one rule — nothing leaves the kitchen unless it tastes like home.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/product-category/${c.id}/`}
              className="group relative overflow-hidden rounded-2xl border border-clay-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className={`inline-block h-10 w-10 rounded-full ${c.accent} opacity-90`} />
              <div className="mt-6">
                <div className="font-display text-lg text-clay-700">{c.name}</div>
                <div className="mt-1 text-sm text-clay-400">{countFor(c.id)} products</div>
              </div>
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-clay-50 opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
