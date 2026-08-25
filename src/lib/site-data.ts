import heroFormation from "@/assets/hero-formation.jpg";
import teamBriefing from "@/assets/team-briefing.jpg";
import trainingDrill from "@/assets/training-drill.jpg";
import deployHospital from "@/assets/deploy-hospital.jpg";
import deployResidential from "@/assets/deploy-residential.jpg";
import deployCampus from "@/assets/deploy-campus.jpg";
import portraitOfficer from "@/assets/portrait-officer.jpg";
import nightPatrol from "@/assets/night-patrol.jpg";
import clientHero from "@/assets/client-hero.jpg";
import preparednessDrill from "@/assets/preparedness-drill.jpg";
import workforceAssembly from "@/assets/workforce-assembly.jpg";
import campusSupervisors from "@/assets/campus-supervisors.jpg";
import logo from "@/assets/logo.jpg";

export const images = {
  heroFormation,
  teamBriefing,
  trainingDrill,
  deployHospital,
  deployResidential,
  deployCampus,
  portraitOfficer,
  nightPatrol,
  clientHero,
  preparednessDrill,
  workforceAssembly,
  campusSupervisors,
  logo,
};

export const COMPANY = "Bharathi Manpower Services";

export const contact = {
  phone: "9100101109",
  phoneHref: "tel:+919100101109",
  whatsapp: "https://wa.me/919100101109",
  email: "bharathi.bms0909@gmail.com",
  emailHref: "mailto:bharathi.bms0909@gmail.com",
  addressLines: [
    "H. No. 3-11-107,",
    "RTC Colony Road No. 2,",
    "Opp: Kamineni Medical College,",
    "HDFC Bank Lane,",
    "LB Nagar,",
    "Hyderabad – 500074"
  ],
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Operations", to: "/operations" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  index: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
  alt: string;
};

/** Confirmed service lines only. */
export const services: Service[] = [
  {
    index: "01",
    title: "Security Services",
    summary:
      "Trained security personnel deployed for access control, premises protection and daily on-site duty.",
    detail:
      "Guards are briefed on the site before deployment, work to a defined post order and report to a supervising line. Duty patterns are arranged around the operating hours of the premises.",
    image: deployHospital,
    alt: "Security officer directing a visitor at a hospital entrance",
  },
  {
    index: "02",
    title: "Manpower Services",
    summary:
      "Support personnel supplied to institutions and establishments according to the requirement of the site.",
    detail:
      "Personnel are selected, verified and placed against the roles a site actually needs, with attendance and replacement handled by the company rather than by the client.",
    image: deployCampus,
    alt: "Personnel managing an orderly queue at an institutional campus",
  },
  {
    index: "03",
    title: "Site Deployment & Supervision",
    summary:
      "Unit-level deployment with supervision, shift coverage and continuity across every active site.",
    detail:
      "Each active unit is tracked by strength and shift. Supervision, relief cover and escalation are handled centrally so a site is never left without accountability.",
    image: nightPatrol,
    alt: "Security officer on night patrol along a commercial building perimeter",
  },
];

export type Deployment = { no: string; unit: string; location: string; strength: number };

export const deployments: Deployment[] = [
  { no: "01", unit: "Kamineni Hospital", location: "LB. Nagar", strength: 32 },
  { no: "02", unit: "P/W College", location: "Kothapet", strength: 22 },
  { no: "03", unit: "TKR College", location: "Meerpet", strength: 20 },
  { no: "04", unit: "Supraja Hospital", location: "Nagole", strength: 15 },
  { no: "05", unit: "Kamineni King Koti", location: "Koti", strength: 15 },
  { no: "06", unit: "Bhrungi Hospital", location: "BN. Reddy V/Puram", strength: 9 },
  { no: "07", unit: "Badrinath Temple", location: "Medchal", strength: 6 },
  { no: "08", unit: "Pallavi Apartment", location: "Bandlaguda", strength: 6 },
  { no: "09", unit: "Ktrish Apartment", location: "Bandlaguda", strength: 6 },
  { no: "10", unit: "CMR", location: "Nadegul / Nadergul", strength: 4 },
  { no: "11", unit: "KVP", location: "Champapet", strength: 3 },
  { no: "12", unit: "Missamma", location: "Champapet", strength: 3 },
  { no: "13", unit: "Sri Bhavani Jewellers", location: "Malakpet", strength: 3 },
  { no: "14", unit: "Pista House", location: "Aramgarh X Road", strength: 2 },
  { no: "15", unit: "Gold Nest", location: "Karmanghat", strength: 2 },
  { no: "16", unit: "Sunrise Motors", location: "Rocktown", strength: 1 },
];

export const ACTIVE_UNITS = 16;
export const ACTIVE_PERSONNEL = 149;
