import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-Bnb3IUoX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useInView(threshold = .18) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [threshold]);
	return {
		ref,
		inView
	};
}
function Reveal({ children, delay = 0, className = "", as: As = "div" }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${inView ? "reveal-in" : ""} ${className}`,
		children
	});
}
function ClipImage({ src, alt, className = "", imgClassName = "", width, height, priority = false }) {
	const { ref, inView } = useInView(.12);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `overflow-hidden bg-muted ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width,
			height,
			loading: priority ? "eager" : "lazy",
			decoding: "async",
			className: `h-full w-full object-cover clip-reveal ${inView ? "clip-reveal-in" : ""} ${imgClassName}`
		})
	});
}
function Eyebrow({ children, tone = "dark", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `eyebrow flex items-center gap-3 ${tone === "dark" ? "text-muted-foreground" : "text-ivory/60"} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-8 ${tone === "dark" ? "bg-foreground/30" : "bg-ivory/35"}` }), children]
	});
}
var base = "inline-flex items-center justify-center gap-2 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 min-h-12";
var styles = {
	solid: "bg-obsidian text-ivory hover:bg-navy",
	outline: "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-ivory",
	ghostLight: "border border-ivory/35 text-ivory hover:bg-ivory hover:text-obsidian",
	solidLight: "bg-ivory text-obsidian hover:bg-brass-soft",
	brass: "bg-brass text-obsidian hover:bg-brass-soft"
};
function ActionLink({ to, children, variant = "solid", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: `${base} ${styles[variant]} ${className}`,
		children
	});
}
function ActionAnchor({ href, children, variant = "solid", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: `${base} ${styles[variant]} ${className}`,
		children
	});
}
function TextLink({ to, children, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `group inline-flex items-center gap-3 border-b pb-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors ${tone === "dark" ? "border-foreground/25 text-foreground hover:border-brass hover:text-brass" : "border-ivory/30 text-ivory hover:border-brass hover:text-brass"}`,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "transition-transform duration-300 group-hover:translate-x-1",
			children: "→"
		})]
	});
}
function PageHero({ eyebrow, title, intro, image, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative isolate flex min-h-[72vh] items-end overflow-hidden bg-obsidian pt-32 pb-14 md:min-h-[78vh] md:pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt,
				className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-55",
				loading: "eager",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-12 md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							tone: "light",
							children: eyebrow
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-lg mt-6 text-ivory",
							children: title
						})]
					}), intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-[0.95rem] leading-relaxed text-ivory/70 md:col-span-5 md:col-start-8",
						children: intro
					}) : null]
				})
			})
		]
	});
}
//#endregion
export { PageHero as a, Eyebrow as i, ActionLink as n, Reveal as o, ClipImage as r, TextLink as s, ActionAnchor as t };
