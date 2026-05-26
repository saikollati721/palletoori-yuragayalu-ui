import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../cart/CartContext";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-clay-100 bg-white transition hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}/`} className="relative block aspect-square overflow-hidden bg-clay-50">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-spice-500 px-3 py-1 text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/product/${product.id}/`}>
          <h3 className="font-display text-lg text-clay-700 hover:text-spice-500">{product.name}</h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-clay-500">{product.short}</p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-clay-400">
              {product.singlePrice ? product.prices[0].label : "From"}
            </div>
            <div className="font-display text-xl text-clay-700">
              ₹{product.priceFrom}
              {!product.singlePrice && (
                <span className="text-sm font-normal text-clay-400"> – ₹{product.priceTo}</span>
              )}
            </div>
          </div>
          <button
            onClick={() => addItem(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-50 text-clay-600 transition hover:bg-spice-500 hover:text-white"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
