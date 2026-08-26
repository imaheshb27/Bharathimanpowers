import { r as __toESM } from "../_runtime.mjs";
import { o as services } from "./site-data-CVGiQ81_.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-C1ZeHdt4.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EnquiryForm-CmJRxlww.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendEmail = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("08a758e7d6230116a0b6744cff40a623ca5ff37af1b98eecb391e40f1c570d17"));
var fieldStyles = "w-full border-b border-input bg-transparent py-3 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brass disabled:opacity-50 disabled:cursor-not-allowed";
function EnquiryForm({ variant = "enquiry" }) {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const fields = variant === "enquiry" ? [
		{
			name: "name",
			label: "Name",
			required: true
		},
		{
			name: "organisation",
			label: "Company / Organisation",
			required: false
		},
		{
			name: "phone",
			label: "Phone",
			type: "tel",
			required: true
		},
		{
			name: "email",
			label: "Email",
			type: "email",
			required: true
		}
	] : [
		{
			name: "name",
			label: "Full Name",
			required: true
		},
		{
			name: "phone",
			label: "Phone Number",
			type: "tel",
			required: true
		},
		{
			name: "email",
			label: "Email",
			type: "email",
			required: true
		},
		{
			name: "experience",
			label: "Experience (in years / months)",
			required: true
		}
	];
	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		setErrorMessage(null);
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const phone = formData.get("phone");
		const email = formData.get("email");
		const message = formData.get("message");
		if (!name || !phone || !email || !message) {
			setStatus("error");
			setErrorMessage("Please fill in all required fields.");
			return;
		}
		const payload = {
			type: variant,
			name,
			organisation: variant === "enquiry" ? formData.get("organisation") : void 0,
			phone,
			email,
			requirement: formData.get("requirement") || void 0,
			experience: variant === "career" ? formData.get("experience") : void 0,
			message
		};
		try {
			const result = await sendEmail({ data: payload });
			if (result.success) setStatus("success");
			else {
				setStatus("error");
				setErrorMessage(result.error || "Failed to submit application.");
			}
		} catch (err) {
			console.error("Form submit error:", err);
			setStatus("error");
			setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
		}
	};
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-card border-l-2 border-brass p-8 text-foreground animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold uppercase tracking-wider text-brass",
				children: "Submission Successful"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: variant === "enquiry" ? "Thank you. Your enquiry has been sent successfully." : "Application submitted successfully."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted-foreground/80",
				children: "Our operations team will review the details and contact you shortly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setStatus("idle"),
				className: "mt-6 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brass hover:text-brass-soft transition-colors",
				children: "Send another message"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-8 sm:grid-cols-2",
		children: [
			fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: f.full ? "sm:col-span-2" : "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: f.name,
					className: "eyebrow block text-muted-foreground",
					children: [f.label, f.required ? " *" : ""]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: f.name,
					name: f.name,
					type: f.type ?? "text",
					required: f.required,
					disabled: status === "submitting",
					className: `${fieldStyles} mt-3`,
					placeholder: f.label
				})]
			}, f.name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "requirement",
					className: "eyebrow block text-muted-foreground",
					children: variant === "enquiry" ? "Service required" : "Position of interest *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "requirement",
					name: "requirement",
					required: variant === "career",
					disabled: status === "submitting",
					className: `${fieldStyles} mt-3`,
					defaultValue: "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Select an option"
					}), variant === "enquiry" ? services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s.title,
						children: s.title
					}, s.title)) : [
						"Security Guard",
						"Supervisor",
						"Support Personnel",
						"Other"
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: r,
						children: r
					}, r))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "message",
					className: "eyebrow block text-muted-foreground",
					children: "Message *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "message",
					name: "message",
					rows: 4,
					required: true,
					disabled: status === "submitting",
					className: `${fieldStyles} mt-3 resize-none`,
					placeholder: variant === "enquiry" ? "Site type, location and the cover you need." : "Tell us about your experience and availability."
				})]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2 bg-destructive/5 border-l-2 border-destructive p-5 text-sm text-destructive rounded-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Submission Failed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-destructive/90",
					children: errorMessage
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: status === "submitting",
					className: "inline-flex min-h-12 items-center justify-center bg-obsidian px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-all hover:bg-navy disabled:bg-muted-foreground/30 disabled:text-muted disabled:cursor-not-allowed",
					children: status === "submitting" ? "Submitting..." : variant === "enquiry" ? "Request Security Services" : "Submit Application"
				})
			})
		]
	});
}
//#endregion
export { EnquiryForm as t };
