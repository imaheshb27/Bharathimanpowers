import { createFileRoute } from "@tanstack/react-router";
import { images, services } from "@/lib/site-data";
import {
  ActionLink,
  ClipImage,
  Eyebrow,
  Reveal,
  TextLink,
} from "@/components/site/primitives";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { DeploymentIndex, OperationsFigures } from "@/components/site/DeploymentIndex";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharathi Manpower Services — Security & Manpower Services" },
      {
        name: "description",
        content:
          "Professional security and manpower solutions built around discipline, preparedness and dependable service. 16 active units, 149+ active personnel — June 2026 snapshot.",
      },
      { property: "og:title", content: "Bharathi Manpower Services" },
      {
        property: "og:description",
        content:
          "Professional security and manpower solutions built around discipline, preparedness and dependable service.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-obsidian pt-[80px] pb-6 sm:pb-8 lg:pb-12">
        <img
          src={images.clientHero}
          alt="A lineup of uniformed Bharathi security personnel standing in formation at an institutional campus"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-80 scale-100 hover:scale-105 transition-transform duration-[6000ms] ease-out"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-obsidian/95 via-obsidian/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-obsidian/90 via-transparent to-obsidian/25" />

        <div className="w-full px-[5vw] flex flex-col justify-center flex-grow py-6 sm:py-10 lg:py-14">
          <div className="max-w-[520px] lg:max-w-[580px]">
            <Eyebrow tone="light" className="text-[clamp(0.6875rem,0.9vw,0.875rem)] text-brass tracking-[0.3em] gap-2 items-center uppercase font-display font-medium flex">
              <span className="h-px w-6 bg-brass/50" />
              <span>01 / Company Profile</span>
            </Eyebrow>
            <h1 className="text-[clamp(2.6rem,6.5vw,5.75rem)] font-display font-semibold mt-4 text-ivory uppercase tracking-[-0.04em] leading-[0.9] max-w-[580px]">
              Security
              <br />
              that stands
              <br />
              ready.
            </h1>
            <div className="mt-5 max-w-[480px] lg:max-w-[540px] border-l border-brass/30 pl-4">
              <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.5] text-ivory/65">
                Professional security and manpower solutions built around discipline, preparedness and dependable service.
              </p>
            </div>
            <div className="mt-6 flex flex-row items-center gap-4 flex-wrap">
              <ActionLink to="/contact" variant="brass" className="px-7 md:px-9 py-4 md:py-4.5 text-[clamp(0.78rem,0.9vw,0.88rem)] font-medium tracking-[0.18em] uppercase text-center min-w-[150px]">
                Get a Quote
              </ActionLink>
              <ActionLink to="/operations" variant="ghostLight" className="px-7 md:px-9 py-4 md:py-4.5 text-[clamp(0.78rem,0.9vw,0.88rem)] font-medium tracking-[0.18em] uppercase text-center min-w-[170px] border-ivory/20 hover:border-ivory text-ivory">
                View Operations
              </ActionLink>
            </div>
          </div>
        </div>

        <div className="w-full px-[5vw] border-t border-hairline-invert/15 pt-5 pb-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                ["Region", "Telangana"],
                ["Resource", "Professional Workforce"],
                ["Postings", "Active Operations"]
              ].map(([k, v]) => (
                <div key={k} className="flex items-center gap-3">
                  <span className="font-display text-[clamp(0.58rem,0.7vw,0.68rem)] uppercase tracking-[0.2em] text-ivory/30">{k} //</span>
                  <span className="font-display text-[clamp(0.625rem,0.8vw,0.75rem)] uppercase tracking-[0.18em] text-ivory/65 font-medium">{v}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
              <span className="font-display text-[clamp(0.625rem,0.8vw,0.75rem)] uppercase tracking-[0.18em] text-brass font-medium">
                Snapshot June 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-background py-28 md:py-40 border-b border-hairline">
        <div className="shell">
          <Reveal className="max-w-4xl">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="display-lg mt-6 uppercase tracking-tight text-foreground">
              People you can trust.
              <br />
              Prepared to perform.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-foreground/10">
                <img
                  src={images.campusSupervisors}
                  alt="Bharathi security supervisors and field officers standing at the entrance of an institutional campus in front of a monument and placement billboard"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="eyebrow mt-4 text-[0.6rem] text-muted-foreground">01 / Active Site Supervision and Campus Presence</p>
            </Reveal>

            <Reveal delay={90} className="md:col-span-5 md:flex md:flex-col md:justify-center">
              <p className="text-lg font-medium leading-relaxed text-foreground">
                Bharathi Manpower Services is a registered professional security and manpower services organization based in Hyderabad, Telangana. We provide dependable, on-site protection and support personnel to institutions, commercial establishments, and residential complexes.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Our workforce is composed of verified, trained, and uniformed personnel who operate under a disciplined post order. With an active supervisor presence across Hyderabad, we handle roster strength, shift coverage, and duty verification internally, ensuring consistent operational safety.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <TextLink to="/about">About Bharathi</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-28 md:py-40 border-b border-hairline">
        <div className="shell">
          <Reveal className="mb-16">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="display-lg mt-6 uppercase tracking-tight max-w-2xl text-foreground">
              Security &amp; manpower.
              <br />
              Built around real needs.
            </h2>
          </Reveal>

          <ServiceShowcase />

          <div className="mt-16 border-t border-hairline pt-8 flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Three core service lines, scoped to site requirements.</span>
            <TextLink to="/services">Explore Services</TextLink>
          </div>
        </div>
      </section>

      {/* TRAINING & PREPAREDNESS */}
      <section className="bg-obsidian text-ivory py-32 border-b border-hairline-invert/10">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4 md:flex md:flex-col md:justify-between">
              <div>
                <Eyebrow tone="light" className="text-brass">Workforce Preparedness</Eyebrow>
                <h2 className="display-lg mt-6 uppercase tracking-tight text-ivory">
                  Ready before
                  <br />
                  the shift
                  <br />
                  begins.
                </h2>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-ivory/60 max-w-sm">
                Preparation comes before placement. Physical readiness, structured drill, and post-specific briefing give our workforce the discipline and clarity required to stand duty.
              </p>
            </Reveal>
            
            <Reveal delay={120} className="md:col-span-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-hairline-invert/10">
                <img
                  src={images.preparednessDrill}
                  alt="Security personnel standing in alignment and saluting during a supervised post inspection"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent pointer-events-none" />
              </div>
              <p className="eyebrow mt-4 text-[0.6rem] text-ivory/40">02 / Supervised Post Inspection and Saluting Drills</p>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-hairline-invert/20 pt-12">
            {[
              ["Discipline", "Conduct and turnout held to a consistent standard on post."],
              ["Readiness", "Physically and mentally prepared before taking over duty."],
              ["Teamwork", "Shifts operate as coordinated units with clear supervision."],
              ["Professional Conduct", "Courteous and firm communication with residents and staff."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <span className="font-display text-[0.62rem] uppercase tracking-wider text-brass">{`0${i + 1} / ${t}`}</span>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE OPERATIONS */}
      <section className="bg-navy-deep py-28 text-ivory md:py-40">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5 flex flex-col justify-between">
              <div>
                <Eyebrow tone="light" className="text-brass">Active Postings</Eyebrow>
                <h2 className="display-md mt-6 uppercase tracking-tight text-ivory">
                  Roster scale &amp; active deployments.
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-ivory/60">
                  Current troop strengths and operational postings verified for June 2026.
                </p>
              </div>

              <div className="mt-12 border-t border-hairline-invert/20 pt-8 space-y-6">
                <div>
                  <span className="display-xl font-semibold leading-none text-brass block tracking-tight">149+</span>
                  <span className="font-display text-[0.62rem] uppercase tracking-wider text-ivory/40">Active Personnel on Duty</span>
                </div>
                <div>
                  <span className="display-xl font-semibold leading-none text-brass block tracking-tight">16+</span>
                  <span className="font-display text-[0.62rem] uppercase tracking-wider text-ivory/40">Supervised Operating Units</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90} className="md:col-span-7">
              <div className="border-t border-hairline-invert/20 pt-8">
                <span className="font-display text-[0.62rem] uppercase tracking-wider text-ivory/40 block mb-6">
                  Deployment Registry Index
                </span>
                <DeploymentIndex tone="light" />
                <div className="mt-12 flex justify-end">
                  <TextLink to="/operations" tone="light">
                    Full operations index
                  </TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SELECTED ACTIVE DEPLOYMENTS */}
      <section className="bg-secondary py-24 border-b border-hairline">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>Locations</Eyebrow>
              <h2 className="display-md mt-6 uppercase tracking-tight text-foreground">
                Selected Active Deployments
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Institutions, commercial hubs, and healthcare centers operating under Bharathi security coverage.
              </p>
            </Reveal>
            <Reveal delay={90} className="md:col-span-7 md:col-start-6">
              <ul className="grid gap-x-12 gap-y-4 sm:grid-cols-2 border-t border-hairline pt-6">
                {[
                  "Kamineni Hospital",
                  "Supraja Hospital",
                  "TKR College",
                  "P/W College",
                  "Bhrungi Hospital",
                  "Badrinath Temple",
                  "KVP Complex",
                  "Sri Bhavani Jewellers"
                ].map((d) => (
                  <li key={d} className="flex items-center gap-3 border-b border-hairline pb-3 font-display text-sm uppercase tracking-wider text-foreground/75 font-medium">
                    <span className="h-1.5 w-1.5 bg-brass" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REAL-WORLD DEPLOYMENT (Photo Essay) */}
      <section className="bg-background py-28 md:py-40">
        <div className="shell">
          <Reveal>
            <Eyebrow>Deployment Portfolio</Eyebrow>
            <h2 className="display-lg mt-6 uppercase tracking-tight max-w-xl text-foreground">
              Real People.
              <br />
              Real Operations.
            </h2>
          </Reveal>

          <div className="mt-20 flex flex-col gap-24 md:gap-36">
            {/* 1. ONE HUGE IMAGE */}
            <Reveal className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-9">
                <div className="aspect-[16/9] w-full overflow-hidden border border-hairline">
                  <img
                    src={images.deployCampus}
                    alt="Security personnel managing an orderly queue at an institutional campus"
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="md:col-span-3 pb-2">
                <span className="font-display text-[0.62rem] uppercase tracking-wider text-brass">Case 01</span>
                <h4 className="font-display text-lg font-semibold uppercase mt-2">Institutional Campus</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Gate management and queue handling protocols under active supervisor checks.
                </p>
              </div>
            </Reveal>

            {/* 2. TWO SMALLER IMAGES (Asymmetric) */}
            <Reveal className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-5 md:col-start-2">
                <div className="aspect-[4/5] w-full overflow-hidden border border-hairline">
                  <img
                    src={images.deployResidential}
                    alt="Security officer maintaining the entry register at a residential complex gate"
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-4">
                  <span className="font-display text-[0.62rem] uppercase tracking-wider text-brass">Case 02</span>
                  <h4 className="font-display text-sm font-semibold uppercase mt-2">Residential Access Gate</h4>
                  <p className="mt-1 text-xs text-muted-foreground">Register compliance and vehicle verification checks.</p>
                </div>
              </div>
              <div className="md:col-span-5 md:pt-16">
                <div className="aspect-[4/5] w-full overflow-hidden border border-hairline">
                  <img
                    src={images.deployHospital}
                    alt="Security officer guiding a visitor at a hospital entrance"
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-4">
                  <span className="font-display text-[0.62rem] uppercase tracking-wider text-brass">Case 03</span>
                  <h4 className="font-display text-sm font-semibold uppercase mt-2">Healthcare Facilities</h4>
                  <p className="mt-1 text-xs text-muted-foreground">High-traffic public interface and hospital front-desk support.</p>
                </div>
              </div>
            </Reveal>

            {/* 3. ONE VERY WIDE IMAGE */}
            <Reveal className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-12">
                <div className="aspect-[21/9] w-full overflow-hidden border border-hairline">
                  <img
                    src={images.workforceAssembly}
                    alt="Bharathi security personnel standing in formal ceremonial turnout on a rooftop with flags"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-between sm:items-center">
                  <div>
                    <span className="font-display text-[0.62rem] uppercase tracking-wider text-brass">Case 04</span>
                    <h4 className="font-display text-sm font-semibold uppercase mt-1">Formal Assemblies</h4>
                  </div>
                  <p className="text-xs text-muted-foreground max-w-sm mt-2 sm:mt-0">
                    Turnout checks and formal briefing parade formations held routinely by field officers.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 4. ANOTHER LARGE IMAGE */}
            <Reveal className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3 md:col-start-2 pt-6">
                <span className="font-display text-[0.62rem] uppercase tracking-wider text-brass">Case 05</span>
                <h4 className="font-display text-lg font-semibold uppercase mt-2">Night Shift Patrol</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Perimeter walks and security checkpoint logs run through the night.
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <div className="aspect-[16/10] w-full overflow-hidden border border-hairline">
                  <img
                    src={images.nightPatrol}
                    alt="Security officer on night patrol along a building perimeter"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY BHARATHI */}
      <section className="bg-background pb-28 md:pb-40">
        <div className="shell border-t border-foreground/10 pt-16">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>Commitment</Eyebrow>
              <h2 className="display-md mt-6 uppercase tracking-tight max-w-xs text-foreground">
                Six things we hold ourselves to.
              </h2>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
                We believe in providing structured, accountable manpower support. These principles represent our daily operational standards.
              </p>
            </Reveal>
            
            <Reveal delay={90} className="md:col-span-7 md:col-start-6">
              <ul className="divide-y divide-foreground/15 border-t border-foreground/15">
                {[
                  ["Professional Workforce", "Verified, uniformed, and post-briefed personnel standing duty at every site."],
                  ["Training & Preparedness", "Physical conditioning and duty alignment checks completed prior to placement."],
                  ["Real-World Deployment", "Sixteen active units under active roster tracking and daily field supervisor reports."],
                  ["Responsible Service", "Shift coverage, attendance tracking, and relief management handled by us, not the client."],
                  ["Operational Presence", "Active deployments in key regional zones, enabling immediate supervisor checking."],
                  ["Established Business", "Operating with full compliance across all labor laws, statutory registrations, and regulatory bodies."]
                ].map(([title, description]) => (
                  <li key={title} className="py-8 group">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-brass">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground max-w-lg leading-relaxed">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-secondary py-28 md:py-36 border-t border-b border-foreground/10">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Eyebrow>Compliance</Eyebrow>
            <h2 className="display-lg mt-6 uppercase tracking-tight text-foreground">
              Built on
              <br />
              compliance.
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground max-w-sm">
              We operate strictly within the legal framework required for manpower and security providers, maintaining active statutory contributions.
            </p>
          </Reveal>
          
          <Reveal delay={90} className="md:col-span-6 md:col-start-7">
            <div className="border-t border-foreground/15 pt-6">
              <span className="font-display text-[0.62rem] uppercase tracking-wider text-muted-foreground block mb-6">
                Active Statutory Registrations
              </span>
              <ul className="divide-y divide-foreground/10 font-display text-sm uppercase tracking-wider text-foreground">
                {[
                  ["EPF Registration", "Employees' Provident Fund compliance registry"],
                  ["ESIC Registration", "Employees' State Insurance Corporation safety cover"],
                  ["GST Compliance", "Goods and Services Tax registered vendor filings"],
                  ["Professional Tax", "State-level professional tax compliance records"],
                  ["PSARA Framework Alignment", "State security agency regulatory standards alignment"]
                ].map(([reg, desc]) => (
                  <li key={reg} className="py-4 grid grid-cols-2 gap-4">
                    <span className="font-semibold">{reg}</span>
                    <span className="text-right text-[0.7rem] text-muted-foreground normal-case font-sans">{desc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground border-t border-foreground/10 pt-6 italic">
                * Note: To prevent unauthorized duplication, registration numbers and active license certificates are shared directly during formal contract stages.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-background py-28 md:py-40">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-12 items-center">
            <Reveal className="md:col-span-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-foreground/10">
                <img
                  src={images.teamBriefing}
                  alt="Security supervisors briefing personnel on-site during a shift alignment check"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-display text-[0.62rem] uppercase tracking-wider text-brass">Join the Roster</span>
                  <h4 className="font-display text-xl font-bold uppercase text-ivory mt-2">Active Duty Workforce</h4>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90} className="md:col-span-5 md:col-start-8">
              <Eyebrow>Recruitment</Eyebrow>
              <h2 className="display-lg mt-6 uppercase tracking-tight text-foreground">
                Build your
                <br />
                career
                <br />
                with us.
              </h2>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                We invite disciplined and prepared personnel to register for steady, supervised roles across our institutional and residential postings. We prioritize on-site training and roster stability.
              </p>
              <div className="mt-10 border-t border-hairline pt-8">
                <ActionLink to="/careers" variant="brass" className="w-full sm:w-auto text-center px-10">
                  Register Your Interest
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-obsidian py-32 text-ivory md:py-48 border-b border-hairline-invert/10">
        <img
          src={images.nightPatrol}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
        
        <div className="shell text-center flex flex-col items-center">
          <Reveal className="max-w-3xl">
            <Eyebrow tone="light" className="text-brass justify-center">Onboard Your Site</Eyebrow>
            <h2 className="display-xl mt-6 uppercase tracking-tight text-ivory">
              Let's talk.
            </h2>
            <p className="mt-6 text-sm text-ivory/60 max-w-md mx-auto leading-relaxed">
              Your security and support posts deserve a disciplined, supervised workforce. Tell us what the premises require.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <ActionLink to="/contact" variant="brass" className="px-10">
                Discuss Your Requirements
              </ActionLink>
              <ActionLink to="/contact" variant="ghostLight" className="px-10">
                Contact Our Team
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
