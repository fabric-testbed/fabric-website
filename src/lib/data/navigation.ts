export interface NavItem {
  label:    string;
  href:     string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  {
    label: "About FABRIC",
    href:  "/about",
    children: [
      { label: "Overview",                        href: "/about" },
      { label: "Leadership",                      href: "/about/leadership" },
      { label: "Partners",                        href: "/about/partners" },
    ],
  },
  {
    label: "Facilities & Infrastructure",
    href:  "/facilities",
    children: [
      { label: "Resource Map",                    href: "/facilities/resource-map" },
      { label: "Testbed & Facilities",            href: "/facilities/testbeds-and-facilities" },
      { label: "Measuring & Monitoring",          href: "/facilities/measuring-and-monitoring" },
    ],
  },
  {
    label: "Community & Events",
    href:  "/community",
    children: [
      { label: "Project Highlights",              href: "/community/project-highlights" },
      { label: "KNIT",                            href: "https://knit.fabric-testbed.net" },
      { label: "Events & Workshops",              href: "/community/events" },
      { label: "News & Blogs",                    href: "/news-and-blogs" },
    ],
  },
  {
    label: "Research & Collaboration",
    href:  "/research",
    children: [
      { label: "User Publications",               href: "/research/publications" },
      { label: "Cite FABRIC",                     href: "/research/cite" },
      { label: "Collaboration & Grant Opportunities", href: "/research/opportunities" },
    ],
  },
  {
    label: "Documentation & Support",
    href:  "/documentation",
    children: [
      { label: "Knowledge Base",                  href: "https://learn.fabric-testbed.net" },
      { label: "Community Forum",                 href: "https://ask.fabric-testbed.net" },
      { label: "Support",                         href: "/documentation/support" },
    ],
  },
  {
    label: "Use FABRIC",
    href:  "/use-fabric",
    children: [
      { label: "New to FABRIC? Start Here",       href: "/use-fabric/get-started" },
      { label: "Start an Experiment",             href: "https://portal.fabric-testbed.net" },
    ],
  },
];
