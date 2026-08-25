import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </As>
  );
}

export function ClipImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  return (
    <div ref={ref} className={`overflow-hidden bg-muted ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover clip-reveal ${inView ? "clip-reveal-in" : ""} ${imgClassName}`}
      />
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${
        tone === "dark" ? "text-muted-foreground" : "text-ivory/60"
      } ${className}`}
    >
      <span className={`h-px w-8 ${tone === "dark" ? "bg-foreground/30" : "bg-ivory/35"}`} />
      {children}
    </p>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 min-h-12";

const styles: Record<string, string> = {
  solid: "bg-obsidian text-ivory hover:bg-navy",
  outline: "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-ivory",
  ghostLight: "border border-ivory/35 text-ivory hover:bg-ivory hover:text-obsidian",
  solidLight: "bg-ivory text-obsidian hover:bg-brass-soft",
  brass: "bg-brass text-obsidian hover:bg-brass-soft",
};

export function ActionLink({
  to,
  children,
  variant = "solid",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function TextLink({
  to,
  children,
  tone = "dark",
}: {
  to: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 border-b pb-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors ${
        tone === "dark"
          ? "border-foreground/25 text-foreground hover:border-brass hover:text-brass"
          : "border-ivory/30 text-ivory hover:border-brass hover:text-brass"
      }`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
  alt: string;
}) {
  return (
    <header className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-obsidian pt-32 pb-14 md:min-h-[78vh] md:pb-20">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/45" />
      <div className="shell w-full">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="display-lg mt-6 text-ivory">{title}</h1>
          </div>
          {intro ? (
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ivory/70 md:col-span-5 md:col-start-8">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
