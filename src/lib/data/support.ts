export interface SupportResource {
  label:   string;
  desc:    string;
  href:    string;
  external?: boolean;
}

export const supportResources: SupportResource[] = [
  {
    label: "Knowledge Base",
    desc:  "The Knowledge Base serves as the official documentation hub for FABRIC, and includes technical guides, release notes, tutorials, and more.",
    href:  "https://learn.fabric-testbed.net",
    external: true,
  },
  {
    label: "Forums",
    desc:  "The FABRIC community forum gives users a space to review portal updates and seek support from the user community.",
    href:  "https://learn.fabric-testbed.net/forums/",
    external: true,
  },
  {
    label: "Orientation Video",
    desc:  "This orientation session reviews FABRIC's features and includes a live demo on creating an account and starting your first experiment.",
    href:  "https://www.youtube.com/watch?v=GzGndNhn5gE",
  },
  {
    label: "Office Hours",
    desc:  "Set up time with members of the FABRIC Team during their Office Hours.",
    href:  "https://outlook.office365.com/owa/calendar/FABRICOfficeHours@admin.live.unc.edu/bookings/",
  },
  {
    label: "KNIT Conference",
    desc:  "KNIT is a semi-annual gathering of the FABRIC user community to discuss use cases and best practices on the platform.",
    href:  "https://knit.fabric-testbed.net/",
  },
];
