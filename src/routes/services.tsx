import { createFileRoute } from "@tanstack/react-router";
import { images, services } from "@/lib/site-data";
import { ActionLink, ClipImage, Eyebrow, PageHero, Reveal, TextLink } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Security & Manpower Services — Bharathi Manpower Services" },
      {
        name: "description",
        content:
          "Security services, manpower services and supervised site deployment from Bharathi Manpower Services, Telangana.",
      },
      { property: "og:title", content: "Security & Manpower Services — Bharathi" },
      {
        property: "og:description",
        content: "Security services, manpower services and supervised site deployment.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const serviceDetails: Record<
  string,
  {
    covers: string[];
    applicable: string[];
    benefit: string;
  }
> = {
  "Security Services": {
    covers: [
      "On-site guard placement (day, night, or 24-hour shifts)",
      "Access control for vehicles, visitors, and vendors",
      "Gatehouse register maintenance and entry logs",
      "Perimeter patrols and boundary security sweeps",
      "Visitor assistance and gate security compliance",
    ],
    applicable: [
      "Healthcare facilities and hospital entrances",
      "Residential apartments and gated communities",
      "Educational institutions and college campuses",
      "Commercial showrooms and retail jewelry outlets",
    ],
    benefit:
      "Provides a disciplined, visible physical presence that deters unauthorized access, maintains order at entry points, and ensures clear records of visitors.",
  },
  "Manpower Services": {
    covers: [
      "Support staff placed according to specific site requirements",
      "Office assistants and desk support help",
      "Campus queue handlers and crowd guiding personnel",
      "Dedicated event support staff for temporary needs",
      "General yard, maintenance, or logistics helpers",
    ],
    applicable: [
      "Corporate offices and commercial complexes",
      "Educational institutes and campus zones",
      "Event venues and ceremonial deployments",
      "Industrial yards and logistics facilities",
    ],
    benefit:
      "Reduces administrative overhead by transferring recruitment, attendance management, and payroll compliance entirely to Bharathi, while providing trained, verified support staff.",
  },
  "Site Deployment & Supervision": {
    covers: [
      "Roster planning, scheduling, and shift coverage tracking",
      "Central supervisor inspection visits (day and night)",
      "Guaranteed relief cover for staff absences",
      "Incident reporting and direct escalation management",
      "Site-specific training on post orders",
    ],
    applicable: [
      "All active security and manpower deployments",
      "Large-scale installations with multiple guard posts",
      "Round-the-clock operations requiring overnight supervision",
    ],
    benefit:
      "Ensures operational continuity so that your site is never left unattended, and that on-duty personnel remain strictly aligned to post orders.",
  },
};

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Security &amp; manpower
            <br />
            services.
          </>
        }
        intro="Three service lines, each scoped to the site it serves — with supervision and continuity built in."
        image={images.deployCampus}
        alt="Security personnel on duty at an institutional campus"
      />

      <section className="bg-background">
        <div className="shell py-12 border-b border-hair">
          <Eyebrow>Services We Provide</Eyebrow>
          <h2 className="display-md mt-6">Professional security and support lines.</h2>
        </div>

        {services.map((s, i) => {
          const details = serviceDetails[s.title];
          return (
            <article
              key={s.title}
              className={`border-b border-hairline py-20 md:py-28 ${i % 2 === 1 ? "bg-secondary" : ""}`}
            >
              <div className="shell grid gap-10 md:grid-cols-12 md:gap-14">
                <Reveal
                  className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}
                >
                  <ClipImage
                    src={s.image}
                    alt={s.alt}
                    className="aspect-[4/3] w-full"
                    imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                  />
                  
                  {details && (
                    <div className="mt-8 border-t border-hairline pt-6">
                      <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Where It Is Applicable
                      </h4>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {details.applicable.map((app) => (
                          <li key={app} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brass" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Reveal>

                <Reveal
                  delay={90}
                  className={`md:col-span-6 md:self-center ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}
                >
                  <Eyebrow>{`Service ${s.index}`}</Eyebrow>
                  <h2 className="display-lg mt-6">{s.title}</h2>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>

                  {details && (
                    <>
                      <div className="mt-8 border-t border-hairline pt-6">
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          What It Covers
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {details.covers.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-none bg-brass" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 bg-foreground/[0.03] border-l-2 border-brass p-4">
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Client Benefit / Purpose
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {details.benefit}
                        </p>
                      </div>
                    </>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <ActionLink to="/contact" variant="brass">
                      Discuss Your Requirements
                    </ActionLink>
                    <ActionLink to="/contact" variant="outline">
                      Enquire
                    </ActionLink>
                  </div>
                </Reveal>
              </div>
            </article>
          );
        })}
      </section>

      {/* SERVICE BENEFITS / ASSURANCE */}
      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>Assurance</Eyebrow>
              <h2 className="display-md mt-6">What you can expect from Bharathi</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                We believe in providing straightforward, reliable security and support. Our assurance is built on operational reality, not empty slogans.
              </p>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:col-start-6">
              {[
                {
                  title: "Professional Personnel",
                  desc: "Verified, uniformed, and briefed on your site procedures before they take up duty.",
                },
                {
                  title: "Disciplined Operations",
                  desc: "Rosters are followed strictly, and shifts are logged with clear handovers.",
                },
                {
                  title: "Workforce Readiness",
                  desc: "Personnel are physically prepared and instructed on their post expectations.",
                },
                {
                  title: "Responsible Service",
                  desc: "We manage our own staff attendance, payroll, and statutory requirements directly.",
                },
                {
                  title: "Site-Specific Support",
                  desc: "Duty structures and instructions are tailored to the actual physical parameters of your premises.",
                },
                {
                  title: "Operational Support",
                  desc: "Central supervisors conduct regular checks to monitor posts and support on-duty guards.",
                },
              ].map((benefit) => (
                <div key={benefit.title} className="border-b border-hairline pb-6">
                  <h3 className="font-display text-base font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-24 text-ivory md:py-32">
        <div className="shell grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="display-lg text-ivory md:col-span-7">
            Tell us what the site needs.
          </h2>
          <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
            <ActionLink to="/contact" variant="brass">
              Get a Quote
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
