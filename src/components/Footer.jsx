import { Link } from "react-router-dom";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.7V13h2.6v8h3.2z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-clay-700 text-cream/80">
      <div className="container-x grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Palletoori Vuragayalu" width="48" height="48" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-display text-lg text-cream">Palletoori Vuragayalu</div>
              <div className="text-[11px] uppercase tracking-widest text-cream/50">Taste of the village</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-cream/70">
            Hand-made Andhra pickles, sweets and snacks — straight from a village kitchen to yours.
          </p>
          <div className="mt-6 flex gap-3">
            <Social href="https://www.facebook.com/share/1Bb4Nmb9w1/" icon={FacebookIcon} />
            <Social href="https://www.instagram.com/palletoori_vuragayalu777" icon={InstagramIcon} />
            <Social href="https://www.youtube.com/@palletoorivuragayalu1" icon={YoutubeIcon} />
          </div>
        </div>

        <FooterCol title="Shop">
          <FooterLink to="/shop">All products</FooterLink>
          <FooterLink to="/shop?cat=veg-pickles">Veg pickles</FooterLink>
          <FooterLink to="/shop?cat=nonveg-pickles">Non-veg pickles</FooterLink>
          <FooterLink to="/shop?cat=sweets">Sweets</FooterLink>
          <FooterLink to="/shop?cat=snacks">Snacks</FooterLink>
        </FooterCol>

        <FooterCol title="Help">
          <FooterLink to="/contact">Contact us</FooterLink>
        </FooterCol>

        <FooterCol title="Stay close">
          <p className="text-sm text-cream/70">
            Recipes, new drops and a free welcome coupon — once a month, never spam.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:outline-none"
            />
            <button className="rounded-r-full bg-spice-500 px-4 text-sm font-semibold text-white hover:bg-spice-600">
              Join
            </button>
          </form>
        </FooterCol>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-cream/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Palletoori Vuragayalu. All rights reserved.</div>
          <div>Made with love in Andhra Pradesh.</div>
        </div>
      </div>

      <a
        href="https://wa.me/917330756930?text=Hi%2C%20I%27m%20Interested%20In%20your%20Products.%20Please%20Provide%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-leaf-500 px-4 py-3 text-white shadow-soft transition hover:bg-leaf-600 hover:pr-5"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.3c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C3.9 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </footer>
  );
}

function Social({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
    >
      <Icon />
    </a>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="font-display text-base text-cream">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-cream/70 transition hover:text-cream">
        {children}
      </Link>
    </li>
  );
}
