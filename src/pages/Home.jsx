import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import TrustBadges from "../components/TrustBadges";
import StoryStrip from "../components/StoryStrip";
import Newsletter from "../components/Newsletter";
import Seo, { JsonLd } from "../components/seo/Seo";
import { websiteJsonLd } from "../lib/seo";

export default function Home() {
  return (
    <>
      <Seo
        pathname="/"
        title="Andhra Pickles, Sweets & Snacks Online"
        description="Buy authentic homemade Andhra pickles, traditional sweets, karappodulu and snacks at Palletoori Vuragayalu. Avakaya, Gongura, Mutton, Putharekulu — handcrafted with cold-pressed oils and no preservatives. Order online across India."
        keywords={[
          "Andhra pickles online",
          "Avakaya pickle",
          "Gongura pickle",
          "mutton pickle",
          "Tiger prawns pickle",
          "Putharekulu online",
          "Andhra Gunpowder",
          "Telugu pickles",
          "homemade pickles India",
          "Palletoori Vuragayalu",
        ]}
      />
      <JsonLd data={websiteJsonLd()} />

      <Hero />
      <Categories />
      <BestSellers />
      <TrustBadges />
      <StoryStrip />

      <section className="bg-cream py-20">
        <div className="container-x max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">
            Why Palletoori
          </span>
          <h2 className="mt-3 font-display text-3xl text-clay-700 sm:text-4xl">
            Andhra pickles, the way the village makes them
          </h2>
          <div className="mt-6 space-y-4 text-clay-600 leading-relaxed">
            <p>
              Palletoori Vuragayalu means "village pickles" — and that is what we make.
              Recipes carried forward from our great-grandmother's kitchen, prepared in
              small batches with hand-pounded masala, sun-cured ingredients and
              cold-pressed sesame oil. From the legendary Andhra Avakaya to seasonal
              Gongura, slow-cooked Mutton, coastal Tiger Prawns and the paper-thin
              Atreyapuram Putharekulu — every jar carries a craft we refuse to
              compromise.
            </p>
            <p>
              You will not find artificial preservatives, commercial colour, or rushed
              shortcuts in our kitchen. Each batch of pickle sun-cures for days; each
              tray of Mysorepak is cut warm; each Putharekulu sheet is hand-rolled in
              Atreyapuram. That is the difference between a jar made for a shelf and a
              jar made for a meal.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
