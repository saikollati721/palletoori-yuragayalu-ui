export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="rounded-3xl bg-gradient-to-br from-spice-500 to-clay-500 p-10 text-cream sm:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">Get ₹100 off your first jar</h2>
            <p className="mt-3 text-cream/85">
              Subscribe for seasonal drops, recipes from our kitchen, and a welcome coupon.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="you@kitchen.com"
                className="flex-1 rounded-full border border-cream/30 bg-cream/10 px-5 py-3 text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
              />
              <button className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-spice-500 transition hover:bg-clay-50">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
