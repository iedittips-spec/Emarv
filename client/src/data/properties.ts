import { site } from "./site";

export type PropertyStatus = "Available" | "Reserved" | "Sold" | "Sample";

export type Property = {
  id: string;
  slug: string;
  title: string;
  location: string;
  propertyType: string;
  price: string;
  status: PropertyStatus;
  description: string;
  summary: string;
  images: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  isSample: boolean;
};

export const properties: Property[] = [
  {
    id: "sample-001",
    slug: "sample-gated-community-home",
    title: "Gated community home — sample listing",
    location: "Location to be confirmed",
    propertyType: "Residential property",
    price: "Price on request",
    status: "Sample",
    summary: "A polished content placeholder for the first verified Emarv listing.",
    description:
      "This sample listing demonstrates how a live Emarv property will be presented. Replace the title, location, pricing, imagery, description, and specifications with verified details before publishing it as an active listing.",
    images: [site.heroImage],
    features: [
      "Verified feature details to be added",
      "Property specifications to be added",
      "Viewing information to be added",
    ],
    specifications: [
      { label: "Property type", value: "To be confirmed" },
      { label: "Location", value: "To be confirmed" },
      { label: "Availability", value: "Sample content" },
      { label: "Price", value: "To be confirmed" },
    ],
    isSample: true,
  },
];

export const getPropertyBySlug = (slug: string) =>
  properties.find((property) => property.slug === slug);
