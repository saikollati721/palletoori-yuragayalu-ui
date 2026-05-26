const WHATSAPP_NUMBER = "917330756930";
const PREFILLED_MSG = "Hi Palletoori Vuragayalu, I'd like to know more about your pickles.";

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MSG)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/20 transition hover:scale-110 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.45-8.44ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.72.97 1-3.62-.24-.37a9.88 9.88 0 0 1-1.51-5.27c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.02 2.9a9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.88-9.95 9.88Zm5.45-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.15.2 2.1 3.22 5.1 4.51.71.31 1.27.5 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
