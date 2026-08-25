import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, images } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
          scrolled || open
            ? "border-b border-hairline-invert bg-obsidian/95 py-3 backdrop-blur-sm"
            : "border-b border-transparent py-6"
        }`}
      >
        <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <Link to="/" className="flex items-center gap-3 group min-w-0 leading-none">
            <img
              src={images.logo}
              alt="Bharathi Manpower Services Logo"
              className="h-10 w-auto object-contain bg-white p-0.5 rounded transition-transform group-hover:scale-105 duration-300"
            />
            <div className="flex flex-col justify-center leading-none">
              <span className="block font-display text-[0.95rem] font-bold tracking-[-0.02em] text-ivory transition-colors group-hover:text-brass">
                BHARATHI
              </span>
              <span className="block font-sans text-[0.5rem] tracking-[0.25em] uppercase text-ivory/40 mt-1">
                Manpower Services
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-12 justify-self-center lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="eyebrow text-[0.64rem] text-ivory/55 transition-colors hover:text-ivory"
                activeProps={{ className: "text-brass" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <Link
              to="/contact"
              className="hidden border border-brass/45 hover:bg-brass hover:text-obsidian px-5 py-2.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-brass transition-all duration-300 lg:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] text-ivory lg:hidden"
            >
              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-obsidian transition-opacity duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="shell flex h-full flex-col justify-between pt-28 pb-12">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-baseline gap-4 border-b border-hairline-invert py-5 font-display text-3xl font-semibold tracking-tight text-ivory"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="eyebrow text-[0.6rem] text-brass">{`0${i + 1}`}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center bg-brass px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-obsidian"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
