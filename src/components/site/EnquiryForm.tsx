import { useState, type FormEvent } from "react";
import { services } from "@/lib/site-data";
import { sendEmail } from "@/lib/server-functions";

type Field = { name: string; label: string; type?: string; required?: boolean; full?: boolean };

const fieldStyles =
  "w-full border-b border-input bg-transparent py-3 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brass disabled:opacity-50 disabled:cursor-not-allowed";

export function EnquiryForm({ variant = "enquiry" }: { variant?: "enquiry" | "career" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fields: Field[] =
    variant === "enquiry"
      ? [
          { name: "name", label: "Name", required: true },
          { name: "organisation", label: "Company / Organisation", required: false },
          { name: "phone", label: "Phone", type: "tel", required: true },
          { name: "email", label: "Email", type: "email", required: true },
        ]
      : [
          { name: "name", label: "Full Name", required: true },
          { name: "phone", label: "Phone Number", type: "tel", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "experience", label: "Experience (in years / months)", required: true },
        ];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    
    // Validate required fields explicitly
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    if (!name || !phone || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const payload = {
      type: variant,
      name,
      organisation: variant === "enquiry" ? (formData.get("organisation") as string) : undefined,
      phone,
      email,
      requirement: formData.get("requirement") as string || undefined,
      experience: variant === "career" ? (formData.get("experience") as string) : undefined,
      message,
    };

    try {
      const result = await sendEmail({ data: payload });
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit application.");
      }
    } catch (err: any) {
      console.error("Form submit error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-card border-l-2 border-brass p-8 text-foreground animate-fade-in">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-brass">
          Submission Successful
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {variant === "enquiry"
            ? "Thank you. Your enquiry has been sent successfully."
            : "Application submitted successfully."}
        </p>
        <p className="mt-2 text-xs text-muted-foreground/80">
          Our operations team will review the details and contact you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brass hover:text-brass-soft transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
          <label htmlFor={f.name} className="eyebrow block text-muted-foreground">
            {f.label}
            {f.required ? " *" : ""}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type ?? "text"}
            required={f.required}
            disabled={status === "submitting"}
            className={`${fieldStyles} mt-3`}
            placeholder={f.label}
          />
        </div>
      ))}

      <div className="sm:col-span-2">
        <label htmlFor="requirement" className="eyebrow block text-muted-foreground">
          {variant === "enquiry" ? "Service required" : "Position of interest *"}
        </label>
        <select
          id="requirement"
          name="requirement"
          required={variant === "career"}
          disabled={status === "submitting"}
          className={`${fieldStyles} mt-3`}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {variant === "enquiry"
            ? services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))
            : ["Security Guard", "Supervisor", "Support Personnel", "Other"].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="eyebrow block text-muted-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={status === "submitting"}
          className={`${fieldStyles} mt-3 resize-none`}
          placeholder={
            variant === "enquiry"
              ? "Site type, location and the cover you need."
              : "Tell us about your experience and availability."
          }
        />
      </div>

      {status === "error" && (
        <div className="sm:col-span-2 bg-destructive/5 border-l-2 border-destructive p-5 text-sm text-destructive rounded-sm">
          <p className="font-semibold">Submission Failed</p>
          <p className="mt-1 text-xs text-destructive/90">{errorMessage}</p>
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center bg-obsidian px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-all hover:bg-navy disabled:bg-muted-foreground/30 disabled:text-muted disabled:cursor-not-allowed"
        >
          {status === "submitting"
            ? "Submitting..."
            : variant === "enquiry"
              ? "Request Security Services"
              : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
