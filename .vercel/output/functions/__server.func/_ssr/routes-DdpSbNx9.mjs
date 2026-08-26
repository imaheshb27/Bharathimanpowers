import { r as __toESM } from "../_runtime.mjs";
import { i as images, o as services } from "./site-data-CVGiQ81_.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as Eyebrow, n as ActionLink, o as Reveal, s as TextLink } from "./primitives-Bnb3IUoX.mjs";
import { t as DeploymentIndex } from "./DeploymentIndex-BhflZdYs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DdpSbNx9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceShowcase() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 md:grid-cols-12 md:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:col-span-6 lg:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-t border-foreground/15",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-foreground/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onMouseEnter: () => setActive(i),
						onFocus: () => setActive(i),
						onClick: () => setActive(i),
						"aria-current": active === i,
						className: "group grid w-full grid-cols-[4rem_minmax(0,1fr)] gap-4 py-8 text-left transition-colors duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `font-display text-lg font-medium transition-colors ${active === i ? "text-brass" : "text-muted-foreground/60"}`,
							children: s.index
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `block font-display text-2xl font-semibold uppercase tracking-tight transition-colors sm:text-3xl ${active === i ? "text-foreground" : "text-foreground/45"}`,
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-4 block max-w-md text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-0 h-0 overflow-hidden md:h-auto md:opacity-50"}`,
								children: s.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-6 block overflow-hidden md:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.alt,
									loading: "lazy",
									decoding: "async",
									className: "aspect-[16/10] w-full object-cover"
								})
							})
						] })]
					})
				}, s.title))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden md:col-span-6 md:col-start-7 md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/5] w-full overflow-hidden bg-muted border border-foreground/10",
				children: [services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: s.alt,
					loading: "lazy",
					decoding: "async",
					className: `absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`
				}, s.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/85 to-transparent p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-[0.62rem] uppercase tracking-[0.2em] text-ivory/50",
						children: [services[active]?.index, " — confirmed service line"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-medium text-ivory mt-2",
						children: services[active]?.title
					})]
				})]
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-obsidian pt-[80px] pb-6 sm:pb-8 lg:pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.clientHero,
					alt: "A lineup of uniformed Bharathi security personnel standing in formation at an institutional campus",
					width: 1920,
					height: 1088,
					fetchPriority: "high",
					decoding: "async",
					className: "absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-80 scale-100 hover:scale-105 transition-transform duration-[6000ms] ease-out"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-obsidian/95 via-obsidian/55 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-obsidian/90 via-transparent to-obsidian/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full px-[5vw] flex flex-col justify-center flex-grow py-6 sm:py-10 lg:py-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[520px] lg:max-w-[580px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, {
								tone: "light",
								className: "text-[clamp(0.6875rem,0.9vw,0.875rem)] text-brass tracking-[0.3em] gap-2 items-center uppercase font-display font-medium flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-brass/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 / Company Profile" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-[clamp(2.6rem,6.5vw,5.75rem)] font-display font-semibold mt-4 text-ivory uppercase tracking-[-0.04em] leading-[0.9] max-w-[580px]",
								children: [
									"Security",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"that stands",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"ready."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 max-w-[480px] lg:max-w-[540px] border-l border-brass/30 pl-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.5] text-ivory/65",
									children: "Professional security and manpower solutions built around discipline, preparedness and dependable service."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-row items-center gap-4 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
									to: "/contact",
									variant: "brass",
									className: "px-7 md:px-9 py-4 md:py-4.5 text-[clamp(0.78rem,0.9vw,0.88rem)] font-medium tracking-[0.18em] uppercase text-center min-w-[150px]",
									children: "Get a Quote"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
									to: "/operations",
									variant: "ghostLight",
									className: "px-7 md:px-9 py-4 md:py-4.5 text-[clamp(0.78rem,0.9vw,0.88rem)] font-medium tracking-[0.18em] uppercase text-center min-w-[170px] border-ivory/20 hover:border-ivory text-ivory",
									children: "View Operations"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full px-[5vw] border-t border-hairline-invert/15 pt-5 pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-x-8 gap-y-2",
							children: [
								["Region", "Telangana"],
								["Resource", "Professional Workforce"],
								["Postings", "Active Operations"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-[clamp(0.58rem,0.7vw,0.68rem)] uppercase tracking-[0.2em] text-ivory/30",
									children: [k, " //"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-[clamp(0.625rem,0.8vw,0.75rem)] uppercase tracking-[0.18em] text-ivory/65 font-medium",
									children: v
								})]
							}, k))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-brass animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[clamp(0.625rem,0.8vw,0.75rem)] uppercase tracking-[0.18em] text-brass font-medium",
								children: "Snapshot June 2026"
							})]
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-28 md:py-40 border-b border-hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Who We Are" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg mt-6 uppercase tracking-tight text-foreground",
						children: [
							"People you can trust.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Prepared to perform."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-12 md:grid-cols-12 md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[16/10] w-full overflow-hidden border border-foreground/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: images.campusSupervisors,
								alt: "Bharathi security supervisors and field officers standing at the entrance of an institutional campus in front of a monument and placement billboard",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-4 text-[0.6rem] text-muted-foreground",
							children: "01 / Active Site Supervision and Campus Presence"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 90,
						className: "md:col-span-5 md:flex md:flex-col md:justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-medium leading-relaxed text-foreground",
								children: "Bharathi Manpower Services is a registered professional security and manpower services organization based in Hyderabad, Telangana. We provide dependable, on-site protection and support personnel to institutions, commercial establishments, and residential complexes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm leading-relaxed text-muted-foreground",
								children: "Our workforce is composed of verified, trained, and uniformed personnel who operate under a disciplined post order. With an active supervisor presence across Hyderabad, we handle roster strength, shift coverage, and duty verification internally, ensuring consistent operational safety."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 border-t border-hairline pt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
									to: "/about",
									children: "About Bharathi"
								})
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-28 md:py-40 border-b border-hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What we do" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-6 uppercase tracking-tight max-w-2xl text-foreground",
							children: [
								"Security & manpower.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Built around real needs."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceShowcase, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 border-t border-hairline pt-8 flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Three core service lines, scoped to site requirements."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							to: "/services",
							children: "Explore Services"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-obsidian text-ivory py-32 border-b border-hairline-invert/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-4 md:flex md:flex-col md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							tone: "light",
							className: "text-brass",
							children: "Workforce Preparedness"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-6 uppercase tracking-tight text-ivory",
							children: [
								"Ready before",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"the shift",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"begins."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm leading-relaxed text-ivory/60 max-w-sm",
							children: "Preparation comes before placement. Physical readiness, structured drill, and post-specific briefing give our workforce the discipline and clarity required to stand duty."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 120,
						className: "md:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/9] w-full overflow-hidden border border-hairline-invert/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: images.preparednessDrill,
								alt: "Security personnel standing in alignment and saluting during a supervised post inspection",
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent pointer-events-none" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-4 text-[0.6rem] text-ivory/40",
							children: "02 / Supervised Post Inspection and Saluting Drills"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-hairline-invert/20 pt-12",
					children: [
						["Discipline", "Conduct and turnout held to a consistent standard on post."],
						["Readiness", "Physically and mentally prepared before taking over duty."],
						["Teamwork", "Shifts operate as coordinated units with clear supervision."],
						["Professional Conduct", "Courteous and firm communication with residents and staff."]
					].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 70,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.62rem] uppercase tracking-wider text-brass",
							children: `0${i + 1} / ${t}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ivory/55",
							children: d
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy-deep py-28 text-ivory md:py-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-5 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								tone: "light",
								className: "text-brass",
								children: "Active Postings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md mt-6 uppercase tracking-tight text-ivory",
								children: "Roster scale & active deployments."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm leading-relaxed text-ivory/60",
								children: "Current troop strengths and operational postings verified for June 2026."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 border-t border-hairline-invert/20 pt-8 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-xl font-semibold leading-none text-brass block tracking-tight",
								children: "149+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.62rem] uppercase tracking-wider text-ivory/40",
								children: "Active Personnel on Duty"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-xl font-semibold leading-none text-brass block tracking-tight",
								children: "16+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.62rem] uppercase tracking-wider text-ivory/40",
								children: "Supervised Operating Units"
							})] })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						className: "md:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-hairline-invert/20 pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-[0.62rem] uppercase tracking-wider text-ivory/40 block mb-6",
									children: "Deployment Registry Index"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeploymentIndex, { tone: "light" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 flex justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
										to: "/operations",
										tone: "light",
										children: "Full operations index"
									})
								})
							]
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-24 border-b border-hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Locations" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md mt-6 uppercase tracking-tight text-foreground",
								children: "Selected Active Deployments"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: "Institutions, commercial hubs, and healthcare centers operating under Bharathi security coverage."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						className: "md:col-span-7 md:col-start-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-x-12 gap-y-4 sm:grid-cols-2 border-t border-hairline pt-6",
							children: [
								"Kamineni Hospital",
								"Supraja Hospital",
								"TKR College",
								"P/W College",
								"Bhrungi Hospital",
								"Badrinath Temple",
								"KVP Complex",
								"Sri Bhavani Jewellers"
							].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 border-b border-hairline pb-3 font-display text-sm uppercase tracking-wider text-foreground/75 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-brass" }), d]
							}, d))
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-28 md:py-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Deployment Portfolio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display-lg mt-6 uppercase tracking-tight max-w-xl text-foreground",
					children: [
						"Real People.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Real Operations."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 flex flex-col gap-24 md:gap-36",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "grid md:grid-cols-12 gap-8 items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-9",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[16/9] w-full overflow-hidden border border-hairline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: images.deployCampus,
										alt: "Security personnel managing an orderly queue at an institutional campus",
										className: "h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-3 pb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.62rem] uppercase tracking-wider text-brass",
										children: "Case 01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-lg font-semibold uppercase mt-2",
										children: "Institutional Campus"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground leading-relaxed",
										children: "Gate management and queue handling protocols under active supervisor checks."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "grid md:grid-cols-12 gap-12 md:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-5 md:col-start-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/5] w-full overflow-hidden border border-hairline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: images.deployResidential,
										alt: "Security officer maintaining the entry register at a residential complex gate",
										className: "h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-[0.62rem] uppercase tracking-wider text-brass",
											children: "Case 02"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-sm font-semibold uppercase mt-2",
											children: "Residential Access Gate"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "Register compliance and vehicle verification checks."
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-5 md:pt-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/5] w-full overflow-hidden border border-hairline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: images.deployHospital,
										alt: "Security officer guiding a visitor at a hospital entrance",
										className: "h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-[0.62rem] uppercase tracking-wider text-brass",
											children: "Case 03"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-sm font-semibold uppercase mt-2",
											children: "Healthcare Facilities"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "High-traffic public interface and hospital front-desk support."
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "grid md:grid-cols-12 gap-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[21/9] w-full overflow-hidden border border-hairline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: images.workforceAssembly,
										alt: "Bharathi security personnel standing in formal ceremonial turnout on a rooftop with flags",
										className: "h-full w-full object-cover object-center"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-col sm:flex-row justify-between sm:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.62rem] uppercase tracking-wider text-brass",
										children: "Case 04"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-sm font-semibold uppercase mt-1",
										children: "Formal Assemblies"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground max-w-sm mt-2 sm:mt-0",
										children: "Turnout checks and formal briefing parade formations held routinely by field officers."
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "grid md:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-3 md:col-start-2 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.62rem] uppercase tracking-wider text-brass",
										children: "Case 05"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-lg font-semibold uppercase mt-2",
										children: "Night Shift Patrol"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground leading-relaxed",
										children: "Perimeter walks and security checkpoint logs run through the night."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-7 md:col-start-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[16/10] w-full overflow-hidden border border-hairline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: images.nightPatrol,
										alt: "Security officer on night patrol along a building perimeter",
										className: "h-full w-full object-cover"
									})
								})
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background pb-28 md:pb-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell border-t border-foreground/10 pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Commitment" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md mt-6 uppercase tracking-tight max-w-xs text-foreground",
								children: "Six things we hold ourselves to."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs",
								children: "We believe in providing structured, accountable manpower support. These principles represent our daily operational standards."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						className: "md:col-span-7 md:col-start-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-foreground/15 border-t border-foreground/15",
							children: [
								["Professional Workforce", "Verified, uniformed, and post-briefed personnel standing duty at every site."],
								["Training & Preparedness", "Physical conditioning and duty alignment checks completed prior to placement."],
								["Real-World Deployment", "Sixteen active units under active roster tracking and daily field supervisor reports."],
								["Responsible Service", "Shift coverage, attendance tracking, and relief management handled by us, not the client."],
								["Operational Presence", "Active deployments in key regional zones, enabling immediate supervisor checking."],
								["Established Business", "Operating with full compliance across all labor laws, statutory registrations, and regulatory bodies."]
							].map(([title, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-8 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-brass",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground max-w-lg leading-relaxed",
									children: description
								})]
							}, title))
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-28 md:py-36 border-t border-b border-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Compliance" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-6 uppercase tracking-tight text-foreground",
							children: [
								"Built on",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"compliance."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm leading-relaxed text-muted-foreground max-w-sm",
							children: "We operate strictly within the legal framework required for manpower and security providers, maintaining active statutory contributions."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 90,
					className: "md:col-span-6 md:col-start-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-foreground/15 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.62rem] uppercase tracking-wider text-muted-foreground block mb-6",
								children: "Active Statutory Registrations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "divide-y divide-foreground/10 font-display text-sm uppercase tracking-wider text-foreground",
								children: [
									["EPF Registration", "Employees' Provident Fund compliance registry"],
									["ESIC Registration", "Employees' State Insurance Corporation safety cover"],
									["GST Compliance", "Goods and Services Tax registered vendor filings"],
									["Professional Tax", "State-level professional tax compliance records"],
									["PSARA Framework Alignment", "State security agency regulatory standards alignment"]
								].map(([reg, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "py-4 grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: reg
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-right text-[0.7rem] text-muted-foreground normal-case font-sans",
										children: desc
									})]
								}, reg))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-xs leading-relaxed text-muted-foreground border-t border-foreground/10 pt-6 italic",
								children: "* Note: To prevent unauthorized duplication, registration numbers and active license certificates are shared directly during formal contract stages."
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-28 md:py-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] w-full overflow-hidden border border-foreground/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: images.teamBriefing,
									alt: "Security supervisors briefing personnel on-site during a shift alignment check",
									className: "h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 left-6 right-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.62rem] uppercase tracking-wider text-brass",
										children: "Join the Roster"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-xl font-bold uppercase text-ivory mt-2",
										children: "Active Duty Workforce"
									})]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 90,
						className: "md:col-span-5 md:col-start-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Recruitment" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-lg mt-6 uppercase tracking-tight text-foreground",
								children: [
									"Build your",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"career",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"with us."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm leading-relaxed text-muted-foreground",
								children: "We invite disciplined and prepared personnel to register for steady, supervised roles across our institutional and residential postings. We prioritize on-site training and roster stability."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 border-t border-hairline pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
									to: "/careers",
									variant: "brass",
									className: "w-full sm:w-auto text-center px-10",
									children: "Register Your Interest"
								})
							})
						]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-obsidian py-32 text-ivory md:py-48 border-b border-hairline-invert/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.nightPatrol,
					alt: "",
					"aria-hidden": "true",
					loading: "lazy",
					decoding: "async",
					className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-20 scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shell text-center flex flex-col items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								tone: "light",
								className: "text-brass justify-center",
								children: "Onboard Your Site"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-xl mt-6 uppercase tracking-tight text-ivory",
								children: "Let's talk."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-ivory/60 max-w-md mx-auto leading-relaxed",
								children: "Your security and support posts deserve a disciplined, supervised workforce. Tell us what the premises require."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
									to: "/contact",
									variant: "brass",
									className: "px-10",
									children: "Discuss Your Requirements"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
									to: "/contact",
									variant: "ghostLight",
									className: "px-10",
									children: "Contact Our Team"
								})]
							})
						]
					})
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
