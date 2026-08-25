import { useState } from "react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <a
      href="https://wa.me/919100101109"
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_18px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(37,211,102,0.65)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Premium Outer Pulsing Ripple */}
      <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/20 opacity-70 group-hover:animate-ping -z-10 transition-all duration-500"></span>

      {/* Tooltip */}
      <span
        className={`absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-obsidian px-3 py-1.5 text-[0.625rem] font-medium uppercase tracking-wider text-brass shadow-lg border border-brass/20 transition-all duration-300 pointer-events-none ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Official Multi-colored Crisp WhatsApp SVG Icon */}
      <svg
        className="h-8 w-8 transition-transform duration-300 group-hover:rotate-6 drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFF"
          d="M19.005 4.908A9.836 9.836 0 0 0 12.037 2c-5.43 0-9.85 4.42-9.85 9.85 0 1.737.454 3.432 1.316 4.925L2 22l5.37-1.408A9.81 9.81 0 0 0 12.03 21.7c5.428 0 9.85-4.42 9.85-9.85a9.836 9.836 0 0 0-2.875-6.942Z"
        />
        <path
          fill="#25D366"
          d="M12.037 3.535a8.3 8.3 0 0 1 5.867 2.43 8.3 8.3 0 0 1 2.43 5.885c0 4.58-3.725 8.305-8.3 8.305a8.272 8.272 0 0 1-4.225-1.155l-.303-.18-3.143.824.84-3.064-.197-.314a8.276 8.276 0 0 1-1.267-4.416c0-4.58 3.725-8.305 8.3-8.305Zm4.838 10.155c-.265-.133-1.567-.773-1.808-.862-.24-.088-.415-.133-.59.133-.175.265-.678.862-.832 1.039-.154.177-.308.2-.573.066a7.228 7.228 0 0 1-2.678-1.653 7.962 7.962 0 0 1-1.854-2.311c-.154-.265-.017-.409.116-.54.12-.12.265-.31.398-.464.133-.155.177-.265.265-.442.088-.177.044-.332-.022-.464-.066-.133-.59-1.423-.808-1.954-.213-.512-.447-.442-.61-.45-.158-.008-.34-.008-.521-.008-.18 0-.473.066-.72.336-.248.27-.946.924-.946 2.253 0 1.33.967 2.61 1.1 2.787.133.177 1.902 2.905 4.61 4.076.643.279 1.146.446 1.538.57.647.206 1.237.177 1.703.107.518-.077 1.567-.64 1.787-1.226.22-.587.22-1.092.155-1.198-.066-.107-.24-.15-.505-.283Z"
        />
      </svg>
    </a>
  );
}
