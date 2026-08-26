import { i as images } from "./site-data-CVGiQ81_.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, i as Eyebrow, o as Reveal, r as ClipImage } from "./primitives-Bnb3IUoX.mjs";
import { t as EnquiryForm } from "./EnquiryForm-CmJRxlww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-lgWkzeWi.js
var import_jsx_runtime = require_jsx_runtime();
function Careers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Careers",
			title: "Build your career with us.",
			intro: "Steady work, clear expectations and training before you are placed on post.",
			image: images.trainingDrill,
			alt: "Security recruits during a morning training drill"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-6",
					children: [
						["Why join us", "You are placed on a defined post with a defined duty, supervised by people who know the site. Pay, attendance and relief cover are handled by the company."],
						["Work environment", "Our units range from residential gates and jewellery showrooms to hospitals and college campuses — professional environments where conduct matters."],
						["Training & preparedness", "New personnel are prepared before deployment: physical readiness, drill and instruction specific to the post they will hold."],
						["Current opportunities", "We do not list open vacancies on this page. Register your interest below and we will contact you when a suitable posting opens."],
						["How to apply", "Submit your details using the form on this page. If a suitable posting matches your location, our operations team will call you for an in-person briefing. You will need to present active verification and identity documents before onboarding."]
					].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 60,
						className: "grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-hairline py-8 first:border-t",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow pt-1 text-muted-foreground",
							children: `0${i + 1}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-medium tracking-[-0.02em]",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground",
							children: d
						})] })]
					}, t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "md:col-span-5 md:col-start-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipImage, {
							src: images.preparednessDrill,
							alt: "Security personnel standing in saluting alignment during post checks",
							className: "aspect-[16/10] w-full border border-foreground/10",
							width: 1200,
							height: 750
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							className: "mt-5",
							children: "Our workforce"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "149+ personnel are on active duty across 16 units as of the June 2026 snapshot."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Apply" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-md mt-6 max-w-xs",
						children: "Register your interest."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					className: "md:col-span-7 md:col-start-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { variant: "career" })
				})]
			})
		})
	] });
}
//#endregion
export { Careers as component };
