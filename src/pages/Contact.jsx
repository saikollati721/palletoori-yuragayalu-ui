import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import Seo from "../components/seo/Seo";

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const CONTACT_EMAIL = "palletoorivuragayalu@gmail.com";
const PHONE = "+91 73307 56930";
const PHONE_TEL = "917330756930";
const WHATSAPP_URL = `https://wa.me/${PHONE_TEL}`;
const INSTAGRAM_URL = "https://www.instagram.com/palletoori_vuragayalu777";
const FACEBOOK_URL = "https://www.facebook.com/share/1EB7iQUbmm/";
const YOUTUBE_URL = "https://www.youtube.com/@palletoorivuragayalu1";
const ADDRESS_LINES = [
  "Palletoori Vuragayalu",
  "Sivalayam Temple",
  "Tanuku, West Godavari District",
  "Andhra Pradesh, India",
];

export default function Contact() {
  return (
    <>
      <Seo
        pathname="/contact/"
        title="Contact"
        description="Get in touch with Palletoori Vuragayalu. Call, WhatsApp or email us for orders, bulk enquiries or anything Andhra cooking."
        keywords={[
          "Palletoori Vuragayalu contact",
          "Andhra pickles bulk order",
          "Telugu pickles wholesale",
          "Tanuku pickles",
        ]}
      />

      <section className="py-16">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">Get in touch</span>
            <h1 className="mt-3 text-4xl text-clay-700 sm:text-5xl">We'd love to hear from you.</h1>
            <p className="mt-4 text-clay-500">
              Questions about an order? Bulk enquiries? Just want to share what you cooked
              last weekend? Reach out via phone, WhatsApp or email — we read every message.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ContactRow icon={Phone} label="Call us" href={`tel:+${PHONE_TEL}`} value={PHONE} />
            <ContactRow icon={MessageCircle} label="WhatsApp" href={WHATSAPP_URL} value={PHONE} external />
            <ContactRow icon={Mail} label="Email" href={`mailto:${CONTACT_EMAIL}`} value={CONTACT_EMAIL} />
            <ContactRow icon={Clock} label="Hours" value="Mon – Sat · 10:00 AM – 7:00 PM" />
            <ContactRow icon={MapPin} label="Kitchen" value={ADDRESS_LINES.join(", ")} className="sm:col-span-2" />
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-50 text-clay-600 transition hover:bg-spice-500 hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-50 text-clay-600 transition hover:bg-spice-500 hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-50 text-clay-600 transition hover:bg-spice-500 hover:text-white"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href, external, className = "" }) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay-50 text-spice-500">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-clay-400">{label}</div>
        <div className="text-clay-700">{value}</div>
      </div>
    </>
  );

  const base = `flex items-start gap-4 rounded-2xl border border-clay-100 bg-white p-5 shadow-soft ${className}`;

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${base} transition hover:border-spice-500/30 hover:text-spice-500`}
      >
        {content}
      </a>
    );
  }
  return <div className={base}>{content}</div>;
}
