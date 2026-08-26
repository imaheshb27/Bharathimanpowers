import { r as deployments } from "./site-data-CVGiQ81_.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as Reveal } from "./primitives-Bnb3IUoX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DeploymentIndex-BhflZdYs.js
var import_jsx_runtime = require_jsx_runtime();
function OperationsFigures({ tone = "light" }) {
	const text = tone === "light" ? "text-ivory" : "text-foreground";
	const sub = tone === "light" ? "text-ivory/50" : "text-muted-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `grid grid-cols-2 gap-8 ${tone === "light" ? "rule-top-invert" : "rule-top"} pt-8 sm:gap-14`,
		children: [{
			value: 16,
			label: "Active units"
		}, {
			value: 149,
			label: "Active personnel"
		}].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `numeral text-[clamp(3.5rem,11vw,7rem)] ${text}`,
			children: f.value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `eyebrow mt-4 ${sub}`,
			children: f.label
		})] }, f.label))
	});
}
function DeploymentIndex({ tone = "light" }) {
	const light = tone === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: light ? "border-t border-hairline-invert" : "border-t border-hairline",
		children: deployments.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			as: "li",
			delay: Math.min(i * 25, 200),
			className: `group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 py-5 transition-colors duration-300 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,10rem)_auto] sm:gap-x-8 ${light ? "border-b border-hairline-invert hover:bg-ivory/[0.04]" : "border-b border-hairline hover:bg-foreground/[0.03]"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `eyebrow text-[0.62rem] ${light ? "text-ivory/40" : "text-muted-foreground"}`,
					children: d.no
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-display text-lg font-medium tracking-[-0.015em] transition-colors sm:text-xl ${light ? "text-ivory group-hover:text-brass" : "text-foreground group-hover:text-brass"}`,
					children: d.unit
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `col-start-2 text-sm sm:col-start-3 ${light ? "text-ivory/50" : "text-muted-foreground"}`,
					children: d.location
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `col-start-3 row-start-1 justify-self-end numeral text-2xl sm:col-start-4 ${light ? "text-ivory/80" : "text-foreground"}`,
					children: d.strength
				})
			]
		}, d.no))
	});
}
//#endregion
export { OperationsFigures as n, DeploymentIndex as t };
