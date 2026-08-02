export interface NavChild {
  label:    string;
  href:     string;
  badge?:   string;
}

export interface NavItem {
  label:    string;
  href:     string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: "About FABRIC",
    href:  "/about",
    children: [
      { label: "Overview",                        href: "/about" },
      { label: "Leadership",                      href: "/about/leadership" },
      { label: "Partners",                        href: "/about/partners" },
      { label: "Branding",                        href: "/about/branding" },
    ],
  },
  {
    label: "Facilities & Infrastructure",
    href:  "/facilities",
    children: [
      { label: "Resource Map",                    href: "https://portal.fabric-testbed.net/resources/overview" },
      { label: "Testbed & Facilities",            href: "/facilities/testbeds-and-facilities" },
      { label: "Measuring & Monitoring",          href: "https://portal.fabric-testbed.net/resources/tools" },
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
      { label: "Newsletter Signup",              href: "/community/newsletter" },
      { label: "Workshop Reports",                 href: "/community/workshop-reports" },
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
      { label: "Community Forum",                 href: "https://learn.fabric-testbed.net/forums" },
      { label: "Support",                         href: "https://portal.fabric-testbed.net/help" },
    ],
  },
  {
    label: "Use FABRIC",
    href:  "/use-fabric",
    children: [
      { label: "New to FABRIC? Start Here",       href: "/use-fabric/get-started" },
      { label: "Start an Experiment in LoomAI",    href: "https://loomai.fabric-testbed.net/hub/login", badge: "Recommended" },
      { label: "Start an Experiment in JupyterHub", href: "https://jupyter.fabric-testbed.net/hub" },
    ],
  },
];
