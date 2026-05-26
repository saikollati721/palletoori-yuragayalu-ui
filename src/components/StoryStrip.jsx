import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";

export default function StoryStrip() {
  return (
    <section className="bg-clay-700 py-20 text-cream">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <ProductImage src="/images/products/boti-gongura.jpg" alt="Boti gongura pickle" width={600} height={600} className="aspect-square rounded-3xl object-cover" />
          <ProductImage src="/images/products/mutton-boneless.jpg" alt="Mutton boneless pickle" width={600} height={600} className="aspect-square rounded-3xl object-cover translate-y-8" />
          <ProductImage src="/images/products/chicken-boneless.jpg" alt="Chicken boneless pickle" width={600} height={600} className="aspect-square rounded-3xl object-cover" />
          <ProductImage src="/images/products/andhra-avakaya.jpg" alt="Andhra avakaya pickle" width={600} height={600} className="aspect-square rounded-3xl object-cover translate-y-8" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-200">A family kitchen</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">From Amma's hands to your dining table.</h2>
          <p className="mt-5 text-cream/80">
            Palletoori Vuragayalu started in a small Andhra village kitchen, where the day begins
            with the thump of a stone grinder and ends with neat rows of glass jars cooling on the
            verandah. We've kept that rhythm — only the address changed.
          </p>
          <p className="mt-4 text-cream/80">
            Every batch is small, every spice is sourced from the farmer we know by name, and every
            jar is tasted before it ships. If it doesn't taste like home, it doesn't leave.
          </p>
          <Link to="/about" className="mt-8 inline-flex btn-primary">Read our story</Link>
        </div>
      </div>
    </section>
  );
}
