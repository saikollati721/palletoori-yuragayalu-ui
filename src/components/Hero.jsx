import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import ProductImage from "./ProductImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* LCP element on home — eager + high fetchpriority so it loads first. */}
        <ProductImage
          src="/images/hero/banner-1.jpg"
          alt=""
          width={1920}
          height={1080}
          eager
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-clay-700/90 via-clay-700/60 to-transparent" />
      </div>

      <div className="container-x relative grid min-h-[560px] grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2">
        <div className="max-w-xl text-cream">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <Leaf size={14} /> 100% Homemade
          </span>
          <h1 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            The pickle jar from <span className="text-clay-200">our village,</span> straight to your kitchen.
          </h1>
          <p className="mt-5 text-base text-cream/85 sm:text-lg">
            Slow-cooked over wood fire, sun-cured, hand-bottled. Andhra recipes passed down four generations — without preservatives, shortcuts, or compromise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-primary">
              Shop best sellers <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10">
              Our story
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-cream/85">
            <Stat value="4 gen" label="of recipes" />
            <Stat value="0" label="preservatives" />
            <Stat value="25k+" label="happy kitchens" />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative ml-auto h-[420px] w-[420px]">
            <div className="absolute inset-0 rounded-full bg-clay-200/30 blur-2xl" />
            <ProductImage
              src="/images/products/andhra-avakaya.jpg"
              alt="Andhra Avakaya pickle"
              width={256}
              height={256}
              className="absolute right-0 top-0 h-64 w-64 rounded-3xl object-cover shadow-soft ring-4 ring-cream/30"
            />
            <ProductImage
              src="/images/products/gongura-natukodi.jpg"
              alt="Gongura Natukodi pickle"
              width={224}
              height={224}
              className="absolute bottom-0 left-0 h-56 w-56 rounded-3xl object-cover shadow-soft ring-4 ring-cream/30"
            />
            <ProductImage
              src="/images/products/tiger-prawns.jpg"
              alt="Tiger Prawns pickle"
              width={160}
              height={160}
              className="absolute bottom-10 right-10 h-40 w-40 rounded-2xl object-cover shadow-soft ring-4 ring-cream/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display text-2xl text-cream">{value}</div>
      <div className="text-xs uppercase tracking-widest text-cream/60">{label}</div>
    </div>
  );
}
