export type Service = {
  id: string;
  title: string;
  description: string;
  label: string;
  isPlaceholder: boolean;
};

export const services: Service[] = [
  {
    id: "property-discovery",
    title: "Property discovery",
    description:
      "A clear starting point for sharing what you are looking for and narrowing the conversation to relevant opportunities.",
    label: "Editable service description",
    isPlaceholder: true,
  },
  {
    id: "property-enquiries",
    title: "Property enquiries",
    description:
      "A straightforward route to ask about a listing, request more information, or begin a conversation about your next move.",
    label: "Editable service description",
    isPlaceholder: true,
  },
  {
    id: "property-guidance",
    title: "Property guidance",
    description:
      "A considered space for the questions that come before a property decision, with room to add Emarv’s verified approach and expertise.",
    label: "Editable service description",
    isPlaceholder: true,
  },
];
