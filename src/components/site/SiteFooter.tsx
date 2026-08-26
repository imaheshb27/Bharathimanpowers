import { Link } from "@tanstack/react-router";
import { COMPANY, contact, nav, images } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="Bharathi Manpower Services Logo"
              className="h-12 w-auto object-contain bg-white p-0.5 rounded"
            />
            <div>
              <p className="font-display text-lg font-semibold tracking-[-0.02em] leading-none">BHARATHI</p>
              <p className="eyebrow mt-1.5 text-[0.6rem] text-ivory/50 leading-none">Manpower Services</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
            Professional security and manpower services — trained personnel, supervised deployment
            and dependable day-to-day operations.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="eyebrow text-ivory/40">Navigate</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-ivory/70 transition-colors hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow text-ivory/40">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            <li>
              <a href={contact.phoneHref} className="transition-colors hover:text-brass">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="transition-colors hover:text-brass break-all">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-brass"
              >
                WhatsApp
              </a>
            </li>
            <li className="pt-2 leading-relaxed text-ivory/55">
              {contact.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </li>
            <li className="pt-1">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=17.3514023,78.5539932"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-brass hover:text-brass-soft transition-colors"
              >
                <span>Get Directions</span>
                <span>→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-top-invert">
        <div className="shell flex flex-col gap-2 py-6 text-[0.68rem] uppercase tracking-[0.16em] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {COMPANY}
          </span>
          <span>Telangana, India</span>
        </div>
        <div className="pb-8 pt-4 text-center text-[0.6rem] tracking-[0.15em] uppercase text-ivory/25">
          Designed & Developed by{" "}
          <a
            href="https://www.dreevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brass transition-colors duration-200 font-medium"
          >
            Dreevn
          </a>
        </div>
      </div>
    </footer>
  );
}
