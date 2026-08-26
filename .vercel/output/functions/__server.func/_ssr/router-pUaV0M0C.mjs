import { r as __toESM } from "../_runtime.mjs";
import { a as nav, i as images, n as contact, t as COMPANY } from "./site-data-CVGiQ81_.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-pUaV0M0C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DQ7hzFMI.css";
function reportRuntimeError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__siteEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__siteReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${scrolled || open ? "border-b border-hairline-invert bg-obsidian/95 py-3 backdrop-blur-sm" : "border-b border-transparent py-6"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 group min-w-0 leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.logo,
						alt: "Bharathi Manpower Services Logo",
						className: "h-10 w-auto object-contain bg-white p-0.5 rounded transition-transform group-hover:scale-105 duration-300"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-[0.95rem] font-bold tracking-[-0.02em] text-ivory transition-colors group-hover:text-brass",
							children: "BHARATHI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-sans text-[0.5rem] tracking-[0.25em] uppercase text-ivory/40 mt-1",
							children: "Manpower Services"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-12 justify-self-center lg:flex",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "eyebrow text-[0.64rem] text-ivory/55 transition-colors hover:text-ivory",
						activeProps: { className: "text-brass" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden border border-brass/45 hover:bg-brass hover:text-obsidian px-5 py-2.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-brass transition-all duration-300 lg:inline-flex",
						children: "Get a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						className: "flex h-11 w-11 flex-col items-center justify-center gap-[6px] text-ivory lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}` })]
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-0 z-40 bg-obsidian transition-opacity duration-400 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex h-full flex-col justify-between pt-28 pb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col",
				"aria-label": "Mobile",
				children: nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: "flex items-baseline gap-4 border-b border-hairline-invert py-5 font-display text-3xl font-semibold tracking-tight text-ivory",
					style: { transitionDelay: `${i * 40}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-[0.6rem] text-brass",
						children: `0${i + 1}`
					}), item.label]
				}, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "mt-8 inline-flex items-center justify-center bg-brass px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-obsidian",
				children: "Get a Quote"
			})]
		})
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-obsidian text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 py-20 md:grid-cols-12 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.logo,
							alt: "Bharathi Manpower Services Logo",
							className: "h-12 w-auto object-contain bg-white p-0.5 rounded"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold tracking-[-0.02em] leading-none",
							children: "BHARATHI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-1.5 text-[0.6rem] text-ivory/50 leading-none",
							children: "Manpower Services"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-ivory/60",
						children: "Professional security and manpower services — trained personnel, supervised deployment and dependable day-to-day operations."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "md:col-span-3",
					"aria-label": "Footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-ivory/40",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm text-ivory/70 transition-colors hover:text-brass",
							children: item.label
						}) }, item.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-ivory/40",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-ivory/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: contact.phoneHref,
								className: "transition-colors hover:text-brass",
								children: contact.phone
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: contact.emailHref,
								className: "transition-colors hover:text-brass break-all",
								children: contact.email
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: contact.whatsapp,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "transition-colors hover:text-brass",
								children: "WhatsApp"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pt-2 leading-relaxed text-ivory/55",
								children: contact.addressLines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: l
								}, l))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.google.com/maps/dir/?api=1&destination=17.3514023,78.5539932",
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-brass hover:text-brass-soft transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get Directions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
								})
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rule-top-invert",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell flex flex-col gap-2 py-6 text-[0.68rem] uppercase tracking-[0.16em] text-ivory/40 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Telangana, India" })]
			})
		})]
	});
}
function WhatsAppButton() {
	const [showTooltip, setShowTooltip] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://wa.me/919100101109",
		target: "_blank",
		rel: "noreferrer noopener",
		onMouseEnter: () => setShowTooltip(true),
		onMouseLeave: () => setShowTooltip(false),
		className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_18px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(37,211,102,0.65)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 group",
		"aria-label": "Chat on WhatsApp",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-1.5 rounded-full bg-[#25D366]/20 opacity-70 group-hover:animate-ping -z-10 transition-all duration-500" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-obsidian px-3 py-1.5 text-[0.625rem] font-medium uppercase tracking-wider text-brass shadow-lg border border-brass/20 transition-all duration-300 pointer-events-none ${showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`,
				children: "Chat on WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "h-8 w-8 transition-transform duration-300 group-hover:rotate-6 drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)]",
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#FFF",
					d: "M19.005 4.908A9.836 9.836 0 0 0 12.037 2c-5.43 0-9.85 4.42-9.85 9.85 0 1.737.454 3.432 1.316 4.925L2 22l5.37-1.408A9.81 9.81 0 0 0 12.03 21.7c5.428 0 9.85-4.42 9.85-9.85a9.836 9.836 0 0 0-2.875-6.942Z"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#25D366",
					d: "M12.037 3.535a8.3 8.3 0 0 1 5.867 2.43 8.3 8.3 0 0 1 2.43 5.885c0 4.58-3.725 8.305-8.3 8.305a8.272 8.272 0 0 1-4.225-1.155l-.303-.18-3.143.824.84-3.064-.197-.314a8.276 8.276 0 0 1-1.267-4.416c0-4.58 3.725-8.305 8.3-8.305Zm4.838 10.155c-.265-.133-1.567-.773-1.808-.862-.24-.088-.415-.133-.59.133-.175.265-.678.862-.832 1.039-.154.177-.308.2-.573.066a7.228 7.228 0 0 1-2.678-1.653 7.962 7.962 0 0 1-1.854-2.311c-.154-.265-.017-.409.116-.54.12-.12.265-.31.398-.464.133-.155.177-.265.265-.442.088-.177.044-.332-.022-.464-.066-.133-.59-1.423-.808-1.954-.213-.512-.447-.442-.61-.45-.158-.008-.34-.008-.521-.008-.18 0-.473.066-.72.336-.248.27-.946.924-.946 2.253 0 1.33.967 2.61 1.1 2.787.133.177 1.902 2.905 4.61 4.076.643.279 1.146.446 1.538.57.647.206 1.237.177 1.703.107.518-.077 1.567-.64 1.787-1.226.22-.587.22-1.092.155-1.198-.066-.107-.24-.15-.505-.283Z"
				})]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-obsidian px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "numeral text-7xl text-ivory",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-xl font-semibold text-ivory",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-ivory/60",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center bg-brass px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-obsidian",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportRuntimeError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center bg-obsidian px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ivory",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center border border-foreground/25 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bharathi Manpower Services — Security & Manpower, Telangana" },
			{
				name: "description",
				content: "Bharathi Manpower Services provides professional security and manpower services across Telangana with trained personnel and supervised deployment."
			},
			{
				property: "og:site_name",
				content: "Bharathi Manpower Services"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Bharathi Manpower Services",
				description: "Professional security and manpower services.",
				areaServed: "Telangana, India"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-DdpSbNx9.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Bharathi Manpower Services — Security & Manpower Services" },
			{
				name: "description",
				content: "Professional security and manpower solutions built around discipline, preparedness and dependable service. 16 active units, 149+ active personnel — June 2026 snapshot."
			},
			{
				property: "og:title",
				content: "Bharathi Manpower Services"
			},
			{
				property: "og:description",
				content: "Professional security and manpower solutions built around discipline, preparedness and dependable service."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-DhftkaFx.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Bharathi Manpower Services" },
			{
				name: "description",
				content: "Who we are, how we work and how our personnel are prepared. Bharathi Manpower Services provides security and manpower support across Telangana."
			},
			{
				property: "og:title",
				content: "About — Bharathi Manpower Services"
			},
			{
				property: "og:description",
				content: "Who we are, how we work and how our personnel are prepared."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./careers-lgWkzeWi.mjs");
var Route$3 = createFileRoute("/careers")({
	head: () => ({
		meta: [
			{ title: "Careers — Bharathi Manpower Services" },
			{
				name: "description",
				content: "Join Bharathi Manpower Services. Register your interest for security and manpower roles across Hyderabad and Telangana."
			},
			{
				property: "og:title",
				content: "Careers — Bharathi Manpower Services"
			},
			{
				property: "og:description",
				content: "Register your interest for security and manpower roles."
			},
			{
				property: "og:url",
				content: "/careers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/careers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-D_IQtwRf.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Bharathi Manpower Services" },
			{
				name: "description",
				content: "Tell us what security or manpower support you need. Contact Bharathi Manpower Services by phone, WhatsApp or email."
			},
			{
				property: "og:title",
				content: "Contact — Bharathi Manpower Services"
			},
			{
				property: "og:description",
				content: "Tell us what security or manpower support you need."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./operations-DlMooWxB.mjs");
var Route$1 = createFileRoute("/operations")({
	head: () => ({
		meta: [
			{ title: "Operations — Bharathi Manpower Services" },
			{
				name: "description",
				content: "Active deployment snapshot — June 2026. 16+ active units and 149+ active personnel under supervision across Hyderabad and Telangana."
			},
			{
				property: "og:title",
				content: "Operations — Bharathi Manpower Services"
			},
			{
				property: "og:description",
				content: "Active deployment snapshot — June 2026. 16+ active units, 149+ active personnel."
			},
			{
				property: "og:url",
				content: "/operations"
			}
		],
		links: [{
			rel: "canonical",
			href: "/operations"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-C6MYgNLz.mjs");
var Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Security & Manpower Services — Bharathi Manpower Services" },
			{
				name: "description",
				content: "Security services, manpower services and supervised site deployment from Bharathi Manpower Services, Telangana."
			},
			{
				property: "og:title",
				content: "Security & Manpower Services — Bharathi"
			},
			{
				property: "og:description",
				content: "Security services, manpower services and supervised site deployment."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	CareersRoute: Route$3.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	OperationsRoute: Route$1.update({
		id: "/operations",
		path: "/operations",
		getParentRoute: () => Route$6
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
