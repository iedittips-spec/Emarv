export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Emarv Homes & Properties",
  shortName: "EMARV",
  descriptor: "Homes · Property · Possibility",
  description:
    "A considered starting point for exploring homes and property opportunities with Emarv Homes & Properties.",
  heroImage: "/manus-storage/homepage-drone-gated-entry_d01745ef.jpg",
  contact: {
    phone: null as string | null,
    whatsapp: null as string | null,
    email: null as string | null,
    location: null as string | null,
  },
  socials: [] as SocialLink[],
  missingInformation: [
    "Official logo asset",
    "Verified property inventory and pricing",
    "Official phone, WhatsApp, email, and business location",
    "Approved positive Google Reviews",
    "Live enquiry destination or email service",
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;
