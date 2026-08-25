import { createFileRoute } from "@tanstack/react-router";
import { contact, images } from "@/lib/site-data";
import { ActionAnchor, Eyebrow, PageHero, Reveal } from "@/components/site/primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bharathi Manpower Services" },
      {
        name: "description",
        content:
          "Tell us what security or manpower support you need. Contact Bharathi Manpower Services by phone, WhatsApp or email.",
      },
      { property: "og:title", content: "Contact — Bharathi Manpower Services" },
      {
        property: "og:description",
        content: "Tell us what security or manpower support you need.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        intro="LET'S TALK ABOUT YOUR SECURITY REQUIREMENTS."
        image={images.deployResidential}
        alt="Security officer on duty at a residential gate"
      />

      {/* SECTION 1: CONTACT DETAILS & MAP */}
      <section className="bg-background py-24 md:py-32">
        <div className="shell grid gap-14 md:grid-cols-12">
          {/* Contact details */}
          <Reveal className="md:col-span-4">
            <Eyebrow>Direct</Eyebrow>
            <dl className="mt-8 space-y-7">
              <div className="border-b border-hairline pb-5">
                <dt className="eyebrow text-muted-foreground">CALL US</dt>
                <dd className="mt-2">
                  <a
                    href="tel:+919100101109"
                    className="font-display text-xl font-medium tracking-[-0.02em] transition-colors hover:text-brass"
                  >
                    9100101109
                  </a>
                </dd>
              </div>
              <div className="border-b border-hairline pb-5">
                <dt className="eyebrow text-muted-foreground">EMAIL US</dt>
                <dd className="mt-2">
                  <a
                    href="mailto:bharathi.bms0909@gmail.com"
                    className="font-display text-lg font-medium tracking-[-0.02em] transition-colors hover:text-brass break-all"
                  >
                    bharathi.bms0909@gmail.com
                  </a>
                </dd>
              </div>
              <div className="border-b border-hairline pb-5">
                <dt className="eyebrow text-muted-foreground">VISIT OUR OFFICE</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  H. No. 3-11-107,
                  RTC Colony Road No. 2,
                  Opp: Kamineni Medical College,
                  HDFC Bank Lane,
                  LB Nagar,
                  Hyderabad – 500074
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionAnchor href="https://wa.me/919100101109" variant="outline" className="w-full sm:w-auto">
                WhatsApp Us
              </ActionAnchor>
            </div>
          </Reveal>

          {/* Embedded Map */}
          <Reveal delay={90} className="md:col-span-8 flex flex-col gap-6">
            <Eyebrow>Location Map</Eyebrow>
            <div className="grid gap-6 lg:grid-cols-12 border border-hairline bg-card p-4 sm:p-6">
              {/* Map embed */}
              <div className="lg:col-span-7 aspect-[16/10] w-full overflow-hidden border border-hairline relative min-h-[300px]">
                <iframe
                  title="Office location map"
                  src="https://maps.google.com/maps?q=17.3514023,78.5539932&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full grayscale contrast-[1.05] opacity-90"
                />
              </div>
              
              {/* Map detail card content */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">LB Nagar Office</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground whitespace-pre-line">
                    H. No. 3-11-107,
                    RTC Colony Road No. 2,
                    Opp: Kamineni Medical College,
                    HDFC Bank Lane,
                    LB Nagar,
                    Hyderabad – 500074
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=17.3514023,78.5539932"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-12 w-full items-center justify-center bg-obsidian px-5 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-brass hover:text-obsidian text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: CONTACT / ENQUIRY FORM */}
      <section className="bg-secondary py-24 md:py-32 border-t border-hairline">
        <div className="shell grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Eyebrow>Enquiry</Eyebrow>
            <h2 className="display-md mt-6 mb-8 max-w-sm">
              Send us the details of your requirement.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Please fill out the form with your details. Our representative will contact you with a customized service plan and quotation.
            </p>
          </Reveal>

          <Reveal delay={90} className="md:col-span-7 md:col-start-6">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
