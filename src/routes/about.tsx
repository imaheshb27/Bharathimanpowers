import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { ActionLink, ClipImage, Eyebrow, PageHero, Reveal } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bharathi Manpower Services" },
      {
        name: "description",
        content:
          "Who we are, how we work and how our personnel are prepared. Bharathi Manpower Services provides security and manpower support across Telangana.",
      },
      { property: "og:title", content: "About — Bharathi Manpower Services" },
      {
        property: "og:description",
        content: "Who we are, how we work and how our personnel are prepared.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const sections = [
  {
    no: "01",
    title: "Who We Are",
    body: [
      "Bharathi Manpower Services is a registered security and manpower organization providing dependable protection and support personnel to institutions, commercial establishments, and residential communities in Hyderabad and surrounding regions across Telangana.",
      "Our operations are centered on a singular, direct proposition: placing verified, disciplined, and prepared personnel where they are needed, backed by active supervision and central support.",
    ],
  },
  {
    no: "02",
    title: "What We Do",
    body: [
      "We provide two primary service lines: Security Services (premises protection, access control, perimeter patrols) and Manpower Services (support staff for campuses, apartments, and commercial establishments).",
      "Additionally, we handle all aspects of site deployment and on-site supervision, managing roster strength, shift coverage, and emergency response internally.",
    ],
  },
  {
    no: "03",
    title: "Our Approach",
    body: [
      "We do not apply general template solutions. Each site deployment is preceded by a detailed review of the premises, its operating hours, and specific security vulnerabilities.",
      "Once a unit is active, all operational overheads—such as shift handovers, attendance tracking, replacement planning, and supervisor check-ins—remain our responsibility, ensuring zero client distraction.",
    ],
  },
  {
    no: "04",
    title: "Our People",
    body: [
      "Our personnel represent the core of our brand. Every officer is verified prior to hiring, briefed on the specific procedures of their assigned site, and expected to maintain a clean turnout and respectful conduct at all times.",
      "We emphasize physical readiness, strict adherence to duty hours, and polite but firm communication with staff, residents, and visitors.",
    ],
  },
  {
    no: "05",
    title: "Our Commitment",
    body: [
      "We commit to placing operational accountability first. We ensure that posts are never left unattended, relief cover is immediately deployed when needed, and client concerns are resolved rapidly via central supervisors.",
      "Our management maintains regular site visits and holds teams accountable to their post orders.",
    ],
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Bharathi"
        intro="A security and manpower organisation built on trained people, supervised deployment and steady day-to-day performance."
        image={images.teamBriefing}
        alt="Supervisor briefing security personnel"
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            {sections.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 50}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-hairline py-10 first:border-t sm:grid-cols-[4rem_minmax(0,1fr)]"
              >
                <span className="eyebrow pt-2 text-muted-foreground">{s.no}</span>
                <div>
                  <h2 className="display-md">{s.title}</h2>
                  {s.body.map((p) => (
                    <p key={p} className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal className="md:sticky md:top-32">
              <ClipImage
                src={images.workforceAssembly}
                alt="Bharathi security workforce and supervisors assembled for a group photo under Independence Day flags"
                className="aspect-[16/10] w-full border border-foreground/10"
                width={1200}
                height={750}
              />
              <Eyebrow className="mt-6 text-brass tracking-[0.2em]">Our people // active workforce</Eyebrow>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                The workforce is the company. Everything else — supervision, rostering, reporting —
                exists to support the person standing on post.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-secondary py-20 border-b border-hairline">
        <div className="shell grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Eyebrow>Purpose</Eyebrow>
            <h2 className="display-md mt-6">Our Vision &amp; Mission</h2>
            <p className="mt-4 text-xs text-muted-foreground italic">
              * Note: The vision and mission statements below are placeholder guidelines for review and can be updated to final approved phrasing.
            </p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            <Reveal className="border-t border-hairline pt-6">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-brass">Our Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To be the region's most trusted security and manpower partner, recognized for our disciplined personnel, operational integrity, and commitment to premises safety without compromise.
              </p>
            </Reveal>
            <Reveal className="border-t border-hairline pt-6">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-brass">Our Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To deliver dependable protection and support personnel by maintaining rigorous on-post supervision, providing clear pre-deployment instructions, and prioritizing the safety and operational requirements of every client site.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <Reveal className="rule-top pt-14">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <Eyebrow>Core Principles</Eyebrow>
                <h2 className="display-lg mt-7">Principles that guide our duty.</h2>
              </div>
              <p className="max-w-md self-end text-sm leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
                These business principles are the standards our management team and workforce hold themselves to on every shift and at every post. They represent our everyday operational commitment.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Professionalism",
                desc: "We expect courteous communication, clean turnout, and respectful behavior from our staff at all times.",
              },
              {
                title: "Accountability",
                desc: "Our supervisory team monitors attendance and performance, taking direct responsibility for any site issues.",
              },
              {
                title: "Integrity",
                desc: "Honesty and adherence to ethical standards are expected on post, protecting both client property and trust.",
              },
              {
                title: "Discipline",
                desc: "Duty schedules, shift handovers, and specific post orders are followed strictly without exception.",
              },
              {
                title: "Responsibility",
                desc: "We own our service. Relief management, roster allocations, and operational escalations remain our responsibility.",
              },
              {
                title: "Readiness",
                desc: "Personnel are briefed and prepared physically and mentally before their shift begins to handle any eventuality.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="border-t border-hairline pt-6">
                <p className="eyebrow text-brass">{`0${i + 1}`}</p>
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-24 text-ivory md:py-32">
        <div className="shell grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="display-lg text-ivory md:col-span-7">
            Talk to us about your requirement.
          </h2>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:col-start-9 md:justify-end">
            <ActionLink to="/contact" variant="brass">
              Get a Quote
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
