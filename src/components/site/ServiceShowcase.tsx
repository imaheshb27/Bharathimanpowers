import { useState } from "react";
import { services } from "@/lib/site-data";

export function ServiceShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 md:grid-cols-12 md:gap-16">
      <div className="md:col-span-6 lg:col-span-5">
        <ul className="border-t border-foreground/15">
          {services.map((s, i) => (
            <li key={s.title} className="border-b border-foreground/15">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-current={active === i}
                className="group grid w-full grid-cols-[4rem_minmax(0,1fr)] gap-4 py-8 text-left transition-colors duration-300"
              >
                <span
                  className={`font-display text-lg font-medium transition-colors ${
                    active === i ? "text-brass" : "text-muted-foreground/60"
                  }`}
                >
                  {s.index}
                </span>
                <div>
                  <span
                    className={`block font-display text-2xl font-semibold uppercase tracking-tight transition-colors sm:text-3xl ${
                      active === i ? "text-foreground" : "text-foreground/45"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`mt-4 block max-w-md text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 ${
                      active === i ? "opacity-100" : "opacity-0 h-0 overflow-hidden md:h-auto md:opacity-50"
                    }`}
                  >
                    {s.summary}
                  </span>
                  <span className="mt-6 block overflow-hidden md:hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:col-span-6 md:col-start-7 md:block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted border border-foreground/10">
          {services.map((s, i) => (
            <img
              key={s.title}
              src={s.image}
              alt={s.alt}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/85 to-transparent p-8">
            <p className="font-display text-[0.62rem] uppercase tracking-[0.2em] text-ivory/50">
              {services[active]?.index} — confirmed service line
            </p>
            <p className="font-display text-lg font-medium text-ivory mt-2">
              {services[active]?.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
