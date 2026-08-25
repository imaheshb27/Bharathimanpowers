import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { ActionLink, ClipImage, Eyebrow, PageHero, Reveal } from "@/components/site/primitives";
import { DeploymentIndex, OperationsFigures } from "@/components/site/DeploymentIndex";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations — Bharathi Manpower Services" },
      {
        name: "description",
        content:
          "Active deployment snapshot — June 2026. 16+ active units and 149+ active personnel under supervision across Hyderabad and Telangana.",
      },
      { property: "og:title", content: "Operations — Bharathi Manpower Services" },
      {
        property: "og:description",
        content: "Active deployment snapshot — June 2026. 16+ active units, 149+ active personnel.",
      },
      { property: "og:url", content: "/operations" },
    ],
    links: [{ rel: "canonical", href: "/operations" }],
  }),
  component: Operations,
});

function Operations() {
  return (
    <>
      <PageHero
        eyebrow="Operations"
        title={
          <>
            Real operations.
            <br />
            Real deployments.
          </>
        }
        intro="Active deployment snapshot — June 2026."
        image={images.deployCampus}
        alt="Security personnel on duty at an institutional campus"
      />

      <section className="bg-navy-deep py-20 text-ivory md:py-28">
        <div className="shell">
          <div className="max-w-2xl">
            <OperationsFigures />
          </div>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-ivory/55">
            Each entry below is a separate active unit with its own reported strength. Figures are
            taken from the company's active employee report for June 2026.
          </p>

          <div className="mt-14">
            <DeploymentIndex />
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <Eyebrow>Real-world operations</Eyebrow>
            <h2 className="display-lg mt-7 max-w-2xl">On post, across the day and the night.</h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-7">
              <ClipImage
                src={images.deployHospital}
                alt="Security officer assisting a visitor at a hospital entrance"
                className="aspect-[4/3] w-full"
              />
              <p className="eyebrow mt-4 text-muted-foreground">Healthcare environment — visitor assistance</p>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5 md:pt-20">
              <ClipImage
                src={images.deployResidential}
                alt="Security officer maintaining the entry register at a residential gate"
                className="aspect-[4/5] w-full"
              />
              <p className="eyebrow mt-4 text-muted-foreground">Residential gate — access control</p>
            </Reveal>
            <Reveal delay={60} className="md:col-span-12">
              <ClipImage
                src={images.deployCampus}
                alt="Security personnel managing a queue at an institutional campus"
                className="aspect-[21/9] w-full"
              />
              <p className="eyebrow mt-4 text-muted-foreground">Institutional campus — crowd management</p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-6">
              <ClipImage
                src={images.heroFormation}
                alt="Bharathi security personnel standing in formal formation at dawn"
                className="aspect-[16/10] w-full"
              />
              <p className="eyebrow mt-4 text-muted-foreground">Team formation — ceremonial &amp; security deployments</p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-6 md:pt-12">
              <ClipImage
                src={images.teamBriefing}
                alt="Supervisor briefing security personnel on an active construction site"
                className="aspect-[16/10] w-full"
              />
              <p className="eyebrow mt-4 text-muted-foreground">Workforce briefing — operational alignment before shift</p>
            </Reveal>
            <Reveal delay={140} className="md:col-span-8 md:col-start-3">
              <ClipImage
                src={images.nightPatrol}
                alt="Security officer on night patrol along a building perimeter"
                className="aspect-[16/10] w-full"
              />
              <p className="eyebrow mt-4 text-muted-foreground">Night shift patrol — perimeter surveillance</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-24 text-ivory md:py-32">
        <div className="shell grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="display-lg text-ivory md:col-span-7">Add your site to the roster.</h2>
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
