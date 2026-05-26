import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingBag, Heart, Leaf, Truck, ShieldCheck } from "lucide-react";
import { products, categoryById } from "../data/products";
import { productSeo } from "../data/productSeo";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import ProductLongForm from "../components/ProductLongForm";
import Seo, { JsonLd } from "../components/seo/Seo";
import { productJsonLd, breadcrumbJsonLd, SITE } from "../lib/seo";
import { useCart } from "../cart/CartContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug);
  const [size, setSize] = useState(product?.prices?.[0] ?? null);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <>
        <Seo
          pathname={`/product/${slug}/`}
          title="Product not found"
          description="That product is not available. Browse our full catalogue of Andhra pickles, sweets and snacks."
          noindex
        />
        <div className="container-x py-32 text-center">
          <h1 className="text-3xl text-clay-700">We couldn't find that jar.</h1>
          <Link to="/shop/" className="mt-6 btn-primary">Back to shop</Link>
        </div>
      </>
    );
  }

  const category = categoryById[product.category];
  const seo = productSeo[product.id];
  const price = size?.price ?? product.priceFrom;
  const pathname = `/product/${product.id}/`;
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop/" },
    ...(category ? [{ name: category.name, url: `/product-category/${category.id}/` }] : []),
    { name: product.name, url: pathname },
  ];

  const description =
    seo?.description ??
    `${product.short} Handcrafted Andhra ${category?.name?.toLowerCase() ?? "speciality"} — cold-pressed oils, no preservatives. Buy ${product.name} online at Palletoori Vuragayalu.`;

  return (
    <section className="py-16">
      <Seo
        pathname={pathname}
        title={seo?.title ?? `${product.name} — Authentic Andhra ${category?.name ?? ""}`}
        description={description}
        keywords={seo?.keywords ?? [product.name, "Andhra pickle online", category?.name, "Palletoori Vuragayalu"].filter(Boolean)}
        image={product.image}
        ogType="product"
      >
        {/* Open Graph product tags — used by Facebook, WhatsApp, Pinterest, and
            shopping aggregators to render rich product previews on shared links. */}
        <meta property="product:price:amount" content={String(product.priceFrom)} />
        <meta property="product:price:currency" content="INR" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:brand" content={SITE.name} />
        {category && <meta property="product:category" content={category.name} />}
        {/* Pinterest-specific rich pin price */}
        <meta property="og:price:amount" content={String(product.priceFrom)} />
        <meta property="og:price:currency" content="INR" />
      </Seo>
      <JsonLd
        data={productJsonLd({
          product,
          category,
          url: `${SITE.url}${pathname}`,
          priceFrom: product.priceFrom,
          priceTo: product.priceTo,
        })}
      />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <div className="container-x">
        <nav className="text-sm text-clay-400">
          <Link to="/" className="hover:text-spice-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop/" className="hover:text-spice-500">Shop</Link>
          {category && (
            <>
              <span className="mx-2">/</span>
              <Link to={`/product-category/${category.id}/`} className="hover:text-spice-500">
                {category.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-clay-600">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-clay-50 lg:max-w-none">
            <ProductImage
              src={product.image}
              alt={product.name}
              eager
              className="product-hero-img h-full w-full object-cover"
            />
            {product.discount > 0 && (
              <span className="absolute left-5 top-5 rounded-full bg-spice-500 px-4 py-1.5 text-sm font-semibold text-white">
                -{product.discount}%
              </span>
            )}
          </div>

          <div>
            {category && (
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">
                {category.name}
              </span>
            )}
            <h1 className="mt-2 text-3xl text-clay-700 sm:text-4xl">{product.name}</h1>
            {seo?.telugu && (
              <div className="mt-1 text-base text-clay-400">{seo.telugu}</div>
            )}

            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-3xl text-clay-700">₹{price}</span>
              <span className="text-clay-400 line-through">₹{Math.round(price * 1.25)}</span>
            </div>

            <p className="mt-6 text-clay-500">
              {product.short} Sun-cured the old-fashioned way, slow-tempered in cold-pressed sesame oil,
              and bottled by hand in our village kitchen. Best enjoyed with hot rice and a generous
              spoon of ghee.
            </p>

            {product.prices.length > 1 && (
              <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-clay-400">Choose size</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.prices.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => setSize(s)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        size?.label === s.label
                          ? "bg-clay-700 text-cream"
                          : "bg-white text-clay-600 ring-1 ring-clay-200 hover:bg-clay-50"
                      }`}
                    >
                      {s.label} <span className="text-xs opacity-70">— ₹{s.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full ring-1 ring-clay-200">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2 text-lg text-clay-600">−</button>
                <span className="w-10 text-center font-semibold text-clay-700">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-4 py-2 text-lg text-clay-600">+</button>
              </div>
              <button onClick={() => addItem(product, size, qty)} className="btn-primary flex-1">
                <ShoppingBag size={16} /> Add to cart — ₹{price * qty}
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-clay-200 text-clay-600 hover:bg-clay-50">
                <Heart size={18} />
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-clay-100 pt-8">
              <Feature icon={Leaf} label="No preservatives" />
              <Feature icon={Truck} label="Ships in 24h" />
              <Feature icon={ShieldCheck} label="Quality assured" />
            </div>
          </div>
        </div>

        <ProductLongForm product={product} category={category} />

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl text-clay-700 sm:text-3xl">You may also love</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Feature({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-50 text-spice-500">
        <Icon size={18} />
      </div>
      <span className="text-xs font-medium text-clay-600">{label}</span>
    </div>
  );
}
