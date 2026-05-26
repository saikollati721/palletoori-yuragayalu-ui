import StoryStrip from "../components/StoryStrip";
import Seo from "../components/seo/Seo";

export default function About() {
  return (
    <>
      <Seo
        pathname="/about/"
        title="Our Story — Four Generations of Pickle-Making"
        description="The story behind Palletoori Vuragayalu — four generations of Andhra pickle and sweet making. Small batches, hand-pounded masala, sun-cured ingredients, cold-pressed sesame oil. The taste your grandmother would recognise."
        keywords={[
          "Palletoori Vuragayalu story",
          "Andhra village pickles",
          "traditional Telugu pickles",
          "homemade Andhra food",
        ]}
      />

      <section className="py-16">
        <div className="container-x max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">Our story</span>
          <h1 className="mt-3 text-4xl text-clay-700 sm:text-5xl">
            Four generations, one stone grinder.
          </h1>
          <p className="mt-6 text-lg text-clay-500">
            Palletoori Vuragayalu means "village pickles" — and that's exactly what we make.
            Recipes that travelled from our great-grandmother's kitchen, prepared the way she
            made them: small batches, hand-pounded masala, sun-cured ingredients, and
            cold-pressed oils.
          </p>
          <p className="mt-4 text-clay-500">
            We don't blend, automate, or rush. A jar of Avakaya cures for fifteen days before
            it ships. The Gongura is plucked, washed and chopped on the same morning it goes
            into the wok. Mutton, chicken and prawns are slow-cooked for hours in gingelly
            oil so the spice gets under the skin. The result is a taste your grandmother
            would recognise.
          </p>
          <p className="mt-4 text-clay-500">
            From the legendary Avakaya of Andhra to the paper-thin Putharekulu of
            Atreyapuram, every product here is a small piece of a craft we refuse to let
            go of. Welcome to the village.
          </p>
        </div>
        <div className="mt-16">
          <StoryStrip />
        </div>
      </section>
    </>
  );
}
