import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { products, categories, categoryById } from "../data/products";
import { categorySeo } from "../data/categorySeo";
import ProductCard from "../components/ProductCard";
import CategoryLongForm from "../components/CategoryLongForm";
import Seo, { JsonLd } from "../components/seo/Seo";
import { breadcrumbJsonLd, itemListJsonLd } from "../lib/seo";

export default function ProductCategory() {
  const { slug } = useParams();
  const category = categoryById[slug];

  if (!category) {
    return <Navigate to="/shop/" replace />;
  }

  const list = useMemo(
    () => products.filter((p) => p.category === slug),
    [slug]
  );

  const seo = categorySeo[slug];
  const pathname = `/product-category/${slug}/`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop/" },
    { name: category.name, url: pathname },
  ];

  const description =
    seo?.description ??
    `Browse our ${category.name.toLowerCase()} — ${list.length} authentic Andhra products, handmade with cold-pressed oils and no preservatives. Buy online at Palletoori Vuragayalu.`;

  return (
    <section className="py-16">
      <Seo
        pathname={pathname}
        title={seo?.title ?? `${category.name} — Authentic Andhra ${category.name} Online`}
        description={description}
        keywords={seo?.keywords ?? [category.name, "Andhra pickles online", "Palletoori Vuragayalu"]}
      />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={itemListJsonLd({ name: category.name, items: list, url: pathname })} />

      <div className="container-x">
        <nav className="text-sm text-clay-400">
          <Link to="/" className="hover:text-spice-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop/" className="hover:text-spice-500">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-clay-600">{category.name}</span>
        </nav>

        <div className="mt-6 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">Category</span>
          <h1 className="mt-3 text-4xl text-clay-700 sm:text-5xl">{category.name}</h1>
          {seo?.intro && (
            <p className="mt-4 text-clay-600 leading-relaxed">{seo.intro}</p>
          )}
          <p className="mt-3 text-sm text-clay-500">
            {list.length} {list.length === 1 ? "product" : "products"} in this category.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/product-category/${c.id}/`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                c.id === slug
                  ? "bg-spice-500 text-white shadow-soft"
                  : "bg-white text-clay-600 ring-1 ring-clay-100 hover:bg-clay-50"
              }`}
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
            No products in this category yet — coming soon.
          </div>
        )}

        <CategoryLongForm category={category} seo={seo} />
      </div>
    </section>
  );
}
