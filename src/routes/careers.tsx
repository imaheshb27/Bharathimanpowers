import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { ClipImage, Eyebrow, PageHero, Reveal } from "@/components/site/primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Bharathi Manpower Services" },
      {
        name: "description",
        content:
          "Join Bharathi Manpower Services. Register your interest for security and manpower roles across Hyderabad and Telangana.",
      },
      { property: "og:title", content: "Careers — Bharathi Manpower Services" },
      {
        property: "og:description",
        content: "Register your interest for security and manpower roles.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career with us."
        intro="Steady work, clear expectations and training before you are placed on post."
        image={images.trainingDrill}
        alt="Security recruits during a morning training drill"
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            {[
              [
                "Why join us",
                "You are placed on a defined post with a defined duty, supervised by people who know the site. Pay, attendance and relief cover are handled by the company.",
              ],
              [
                "Work environment",
                "Our units range from residential gates and jewellery showrooms to hospitals and college campuses — professional environments where conduct matters.",
              ],
              [
                "Training & preparedness",
                "New personnel are prepared before deployment: physical readiness, drill and instruction specific to the post they will hold.",
              ],
              [
                "Current opportunities",
                "We do not list open vacancies on this page. Register your interest below and we will contact you when a suitable posting opens.",
              ],
              [
                "How to apply",
                "Submit your details using the form on this page. If a suitable posting matches your location, our operations team will call you for an in-person briefing. You will need to present active verification and identity documents before onboarding.",
              ],
            ].map(([t, d], i) => (
              <Reveal
                key={t}
                delay={i * 60}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-hairline py-8 first:border-t"
              >
                <span className="eyebrow pt-1 text-muted-foreground">{`0${i + 1}`}</span>
                <div>
                  <h2 className="font-display text-xl font-medium tracking-[-0.02em]">{t}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80} className="md:col-span-5 md:col-start-8">
            <ClipImage
              src={images.preparednessDrill}
              alt="Security personnel standing in saluting alignment during post checks"
              className="aspect-[16/10] w-full border border-foreground/10"
              width={1200}
              height={750}
            />
            <Eyebrow className="mt-5">Our workforce</Eyebrow>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              149+ personnel are on active duty across 16 units as of the June 2026 snapshot.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Eyebrow>Apply</Eyebrow>
            <h2 className="display-md mt-6 max-w-xs">Register your interest.</h2>
          </Reveal>
          <Reveal delay={80} className="md:col-span-7 md:col-start-6">
            <EnquiryForm variant="career" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
