import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products, categories, categoryById } from "../data/products";
import ProductCard from "../components/ProductCard";
import Seo, { JsonLd } from "../components/seo/Seo";
import { itemListJsonLd } from "../lib/seo";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const active = params.get("cat") || "all";
  const q = (params.get("q") || "").trim();
  const qLower = q.toLowerCase();

  const list = useMemo(() => {
    let result = active === "all" ? products : products.filter((p) => p.category === active);
    if (qLower) {
      result = result.filter((p) => {
        const cat = categoryById[p.category]?.name?.toLowerCase() ?? "";
        return (
          p.name.toLowerCase().includes(qLower) ||
          p.short.toLowerCase().includes(qLower) ||
          cat.includes(qLower) ||
          p.id.replace(/-/g, " ").includes(qLower)
        );
      });
    }
    return result;
  }, [active, qLower]);

  const setCat = (id) => {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("cat");
    else next.set("cat", id);
    setParams(next);
  };

  const clearSearch = () => {
    const next = new URLSearchParams(params);
    next.delete("q");
    setParams(next);
  };

  return (
    <section className="py-16">
      <Seo
        pathname="/shop/"
        title={q ? `Search: ${q}` : "Shop — Andhra Pickles, Sweets & Snacks"}
        description="Browse all Palletoori Vuragayalu products — Andhra pickles (veg, non-veg, gongura), traditional sweets, karappodulu and snacks. Handmade, cold-pressed oils, no preservatives."
        keywords={[
          "Andhra pickles shop online",
          "buy Andhra pickles",
          "Andhra sweets online",
          "Telugu pickles store",
          "Palletoori Vuragayalu shop",
        ]}
        noindex={Boolean(q)}
      />
      <JsonLd data={itemListJsonLd({ name: "Palletoori Vuragayalu — Shop", items: list, url: "/shop/" })} />

      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">Shop</span>
          <h1 className="mt-3 text-4xl text-clay-700 sm:text-5xl">Our pantry shelf</h1>
          <p className="mt-3 text-clay-500">
            Andhra pickles, traditional sweets, karappodulu and tea-time snacks —
            handmade in small batches, cold-pressed oils, no preservatives. Tap a
            category to open its dedicated page, or filter here.
          </p>
        </div>

        {q && (
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-clay-100 bg-white px-5 py-3 shadow-soft">
            <span className="text-sm text-clay-500">
              {list.length} {list.length === 1 ? "result" : "results"} for{" "}
              <span className="font-medium text-clay-700">"{q}"</span>
            </span>
            <button
              onClick={clearSearch}
              className="ml-auto text-xs font-semibold uppercase tracking-wider text-spice-500 hover:text-spice-600"
            >
              Clear search
            </button>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setCat("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === "all"
                ? "bg-spice-500 text-white shadow-soft"
                : "bg-white text-clay-600 ring-1 ring-clay-100 hover:bg-clay-50"
            }`}
          >
            All ({products.length})
          </button>
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/product-category/${c.id}/`}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-clay-600 ring-1 ring-clay-100 transition hover:bg-clay-50"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-16 rounded-2xl border border-dashed border-clay-200 p-10 text-center text-clay-500">
            {q
              ? <>No jars match "<span className="text-clay-700 font-medium">{q}</span>". Try a different word — like Avakaya, Gongura, Mutton or Karam.</>
              : "No products in this category yet — coming soon."}
          </div>
        )}
      </div>
    </section>
  );
}
