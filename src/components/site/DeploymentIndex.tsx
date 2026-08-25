import { deployments, ACTIVE_UNITS, ACTIVE_PERSONNEL } from "@/lib/site-data";
import { Reveal } from "./primitives";

export function OperationsFigures({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-ivory" : "text-foreground";
  const sub = tone === "light" ? "text-ivory/50" : "text-muted-foreground";
  const rule = tone === "light" ? "rule-top-invert" : "rule-top";

  return (
    <div className={`grid grid-cols-2 gap-8 ${rule} pt-8 sm:gap-14`}>
      {[
        { value: ACTIVE_UNITS, label: "Active units" },
        { value: ACTIVE_PERSONNEL, label: "Active personnel" },
      ].map((f) => (
        <div key={f.label}>
          <p className={`numeral text-[clamp(3.5rem,11vw,7rem)] ${text}`}>{f.value}</p>
          <p className={`eyebrow mt-4 ${sub}`}>{f.label}</p>
        </div>
      ))}
    </div>
  );
}

export function DeploymentIndex({ tone = "light" }: { tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <ul className={light ? "border-t border-hairline-invert" : "border-t border-hairline"}>
      {deployments.map((d, i) => (
        <Reveal
          as="li"
          key={d.no}
          delay={Math.min(i * 25, 200)}
          className={`group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 py-5 transition-colors duration-300 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,10rem)_auto] sm:gap-x-8 ${
            light
              ? "border-b border-hairline-invert hover:bg-ivory/[0.04]"
              : "border-b border-hairline hover:bg-foreground/[0.03]"
          }`}
        >
          <span className={`eyebrow text-[0.62rem] ${light ? "text-ivory/40" : "text-muted-foreground"}`}>
            {d.no}
          </span>
          <span
            className={`font-display text-lg font-medium tracking-[-0.015em] transition-colors sm:text-xl ${
              light ? "text-ivory group-hover:text-brass" : "text-foreground group-hover:text-brass"
            }`}
          >
            {d.unit}
          </span>
          <span
            className={`col-start-2 text-sm sm:col-start-3 ${light ? "text-ivory/50" : "text-muted-foreground"}`}
          >
            {d.location}
          </span>
          <span
            className={`col-start-3 row-start-1 justify-self-end numeral text-2xl sm:col-start-4 ${
              light ? "text-ivory/80" : "text-foreground"
            }`}
          >
            {d.strength}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
