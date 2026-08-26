import { i as images } from "./site-data-CVGiQ81_.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, i as Eyebrow, n as ActionLink, o as Reveal, r as ClipImage } from "./primitives-Bnb3IUoX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DhftkaFx.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		no: "01",
		title: "Who We Are",
		body: ["Bharathi Manpower Services is a registered security and manpower organization providing dependable protection and support personnel to institutions, commercial establishments, and residential communities in Hyderabad and surrounding regions across Telangana.", "Our operations are centered on a singular, direct proposition: placing verified, disciplined, and prepared personnel where they are needed, backed by active supervision and central support."]
	},
	{
		no: "02",
		title: "What We Do",
		body: ["We provide two primary service lines: Security Services (premises protection, access control, perimeter patrols) and Manpower Services (support staff for campuses, apartments, and commercial establishments).", "Additionally, we handle all aspects of site deployment and on-site supervision, managing roster strength, shift coverage, and emergency response internally."]
	},
	{
		no: "03",
		title: "Our Approach",
		body: ["We do not apply general template solutions. Each site deployment is preceded by a detailed review of the premises, its operating hours, and specific security vulnerabilities.", "Once a unit is active, all operational overheads—such as shift handovers, attendance tracking, replacement planning, and supervisor check-ins—remain our responsibility, ensuring zero client distraction."]
	},
	{
		no: "04",
		title: "Our People",
		body: ["Our personnel represent the core of our brand. Every officer is verified prior to hiring, briefed on the specific procedures of their assigned site, and expected to maintain a clean turnout and respectful conduct at all times.", "We emphasize physical readiness, strict adherence to duty hours, and polite but firm communication with staff, residents, and visitors."]
	},
	{
		no: "05",
		title: "Our Commitment",
		body: ["We commit to placing operational accountability first. We ensure that posts are never left unattended, relief cover is immediately deployed when needed, and client concerns are resolved rapidly via central supervisors.", "Our management maintains regular site visits and holds teams accountable to their post orders."]
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: "About Bharathi",
			intro: "A security and manpower organisation built on trained people, supervised deployment and steady day-to-day performance.",
			image: images.teamBriefing,
			alt: "Supervisor briefing security personnel"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-14 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-7",
					children: sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 50,
						className: "grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-hairline py-10 first:border-t sm:grid-cols-[4rem_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow pt-2 text-muted-foreground",
							children: s.no
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-md",
							children: s.title
						}), s.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground",
							children: p
						}, p))] })]
					}, s.no))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5 md:col-start-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:sticky md:top-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipImage, {
								src: images.workforceAssembly,
								alt: "Bharathi security workforce and supervisors assembled for a group photo under Independence Day flags",
								className: "aspect-[16/10] w-full border border-foreground/10",
								width: 1200,
								height: 750
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								className: "mt-6 text-brass tracking-[0.2em]",
								children: "Our people // active workforce"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[0.95rem] leading-relaxed text-muted-foreground",
								children: "The workforce is the company. Everything else — supervision, rostering, reporting — exists to support the person standing on post."
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20 border-b border-hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Purpose" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-md mt-6",
							children: "Our Vision & Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground italic",
							children: "* Note: The vision and mission statements below are placeholder guidelines for review and can be updated to final approved phrasing."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 sm:grid-cols-2 md:col-span-7 md:col-start-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "border-t border-hairline pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold uppercase tracking-wider text-brass",
							children: "Our Vision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "To be the region's most trusted security and manpower partner, recognized for our disciplined personnel, operational integrity, and commitment to premises safety without compromise."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "border-t border-hairline pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold uppercase tracking-wider text-brass",
							children: "Our Mission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "To deliver dependable protection and support personnel by maintaining rigorous on-post supervision, providing clear pre-deployment instructions, and prioritizing the safety and operational requirements of every client site."
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "rule-top pt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Core Principles" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg mt-7",
								children: "Principles that guide our duty."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md self-end text-sm leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7",
							children: "These business principles are the standards our management team and workforce hold themselves to on every shift and at every post. They represent our everyday operational commitment."
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							title: "Professionalism",
							desc: "We expect courteous communication, clean turnout, and respectful behavior from our staff at all times."
						},
						{
							title: "Accountability",
							desc: "Our supervisory team monitors attendance and performance, taking direct responsibility for any site issues."
						},
						{
							title: "Integrity",
							desc: "Honesty and adherence to ethical standards are expected on post, protecting both client property and trust."
						},
						{
							title: "Discipline",
							desc: "Duty schedules, shift handovers, and specific post orders are followed strictly without exception."
						},
						{
							title: "Responsibility",
							desc: "We own our service. Relief management, roster allocations, and operational escalations remain our responsibility."
						},
						{
							title: "Readiness",
							desc: "Personnel are briefed and prepared physically and mentally before their shift begins to handle any eventuality."
						}
					].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 60,
						className: "border-t border-hairline pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-brass",
								children: `0${i + 1}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-medium text-foreground",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: p.desc
							})
						]
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-obsidian py-24 text-ivory md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-8 md:grid-cols-12 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg text-ivory md:col-span-7",
					children: "Talk to us about your requirement."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-3 md:col-span-4 md:col-start-9 md:justify-end",
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
export { About as component };
