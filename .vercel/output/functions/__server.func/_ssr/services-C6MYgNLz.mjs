import { i as images, o as services } from "./site-data-CVGiQ81_.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, i as Eyebrow, n as ActionLink, o as Reveal, r as ClipImage } from "./primitives-Bnb3IUoX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C6MYgNLz.js
var import_jsx_runtime = require_jsx_runtime();
var serviceDetails = {
	"Security Services": {
		covers: [
			"On-site guard placement (day, night, or 24-hour shifts)",
			"Access control for vehicles, visitors, and vendors",
			"Gatehouse register maintenance and entry logs",
			"Perimeter patrols and boundary security sweeps",
			"Visitor assistance and gate security compliance"
		],
		applicable: [
			"Healthcare facilities and hospital entrances",
			"Residential apartments and gated communities",
			"Educational institutions and college campuses",
			"Commercial showrooms and retail jewelry outlets"
		],
		benefit: "Provides a disciplined, visible physical presence that deters unauthorized access, maintains order at entry points, and ensures clear records of visitors."
	},
	"Manpower Services": {
		covers: [
			"Support staff placed according to specific site requirements",
			"Office assistants and desk support help",
			"Campus queue handlers and crowd guiding personnel",
			"Dedicated event support staff for temporary needs",
			"General yard, maintenance, or logistics helpers"
		],
		applicable: [
			"Corporate offices and commercial complexes",
			"Educational institutes and campus zones",
			"Event venues and ceremonial deployments",
			"Industrial yards and logistics facilities"
		],
		benefit: "Reduces administrative overhead by transferring recruitment, attendance management, and payroll compliance entirely to Bharathi, while providing trained, verified support staff."
	},
	"Site Deployment & Supervision": {
		covers: [
			"Roster planning, scheduling, and shift coverage tracking",
			"Central supervisor inspection visits (day and night)",
			"Guaranteed relief cover for staff absences",
			"Incident reporting and direct escalation management",
			"Site-specific training on post orders"
		],
		applicable: [
			"All active security and manpower deployments",
			"Large-scale installations with multiple guard posts",
			"Round-the-clock operations requiring overnight supervision"
		],
		benefit: "Ensures operational continuity so that your site is never left unattended, and that on-duty personnel remain strictly aligned to post orders."
	}
};
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Security & manpower",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"services."
			] }),
			intro: "Three service lines, each scoped to the site it serves — with supervision and continuity built in.",
			image: images.deployCampus,
			alt: "Security personnel on duty at an institutional campus"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-12 border-b border-hair",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Services We Provide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-md mt-6",
					children: "Professional security and support lines."
				})]
			}), services.map((s, i) => {
				const details = serviceDetails[s.title];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: `border-b border-hairline py-20 md:py-28 ${i % 2 === 1 ? "bg-secondary" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shell grid gap-10 md:grid-cols-12 md:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: `md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipImage, {
								src: s.image,
								alt: s.alt,
								className: "aspect-[4/3] w-full",
								imgClassName: "transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
							}), details && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 border-t border-hairline pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Where It Is Applicable"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2 text-sm text-muted-foreground",
									children: details.applicable.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: app })]
									}, app))
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 90,
							className: `md:col-span-6 md:self-center ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: `Service ${s.index}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display-lg mt-6",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-[0.95rem] leading-relaxed text-muted-foreground",
									children: s.summary
								}),
								details && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 border-t border-hairline pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "What It Covers"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-2 text-sm text-muted-foreground",
										children: details.covers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none bg-brass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, item))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 bg-foreground/[0.03] border-l-2 border-brass p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Client Benefit / Purpose"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: details.benefit
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
										to: "/contact",
										variant: "brass",
										children: "Discuss Your Requirements"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
										to: "/contact",
										variant: "outline",
										children: "Enquire"
									})]
								})
							]
						})]
					})
				}, s.title);
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Assurance" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md mt-6",
								children: "What you can expect from Bharathi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: "We believe in providing straightforward, reliable security and support. Our assurance is built on operational reality, not empty slogans."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 md:col-span-7 md:col-start-6",
						children: [
							{
								title: "Professional Personnel",
								desc: "Verified, uniformed, and briefed on your site procedures before they take up duty."
							},
							{
								title: "Disciplined Operations",
								desc: "Rosters are followed strictly, and shifts are logged with clear handovers."
							},
							{
								title: "Workforce Readiness",
								desc: "Personnel are physically prepared and instructed on their post expectations."
							},
							{
								title: "Responsible Service",
								desc: "We manage our own staff attendance, payroll, and statutory requirements directly."
							},
							{
								title: "Site-Specific Support",
								desc: "Duty structures and instructions are tailored to the actual physical parameters of your premises."
							},
							{
								title: "Operational Support",
								desc: "Central supervisors conduct regular checks to monitor posts and support on-duty guards."
							}
						].map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-hairline pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-foreground",
								children: benefit.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: benefit.desc
							})]
						}, benefit.title))
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-obsidian py-24 text-ivory md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-8 md:grid-cols-12 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg text-ivory md:col-span-7",
					children: "Tell us what the site needs."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-4 md:col-start-9 md:justify-self-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/contact",
						variant: "brass",
						children: "Get a Quote"
					})
				})]
			})
		})
	] });
}
//#endregion
export { Services as component };
