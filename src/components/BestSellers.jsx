import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  const list = products.filter((p) => p.bestSeller);

  return (
    <section className="bg-gradient-to-b from-cream to-clay-50 py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">Customer favourites</span>
            <h2 className="mt-3 text-3xl text-clay-700 sm:text-4xl">Best sellers this season</h2>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-spice-500 hover:underline">
            View all products →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
