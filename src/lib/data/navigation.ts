export interface NavItem {
  label:    string;
  href:     string;
  children?: { label: string; href: string; desc?: string }[];
}

/** Primary navigation — mirrors the prototype screenshots */
export const navItems: NavItem[] = [
  {
    label: "About FABRIC",
    href:  "/about",
    children: [
      { label: "Overview",          href: "/about",                   desc: "What FABRIC is and why it exists" },
      { label: "Team",              href: "/about/team",              desc: "Leadership and core staff" },
      { label: "Advisory Boards",   href: "/about/advisory-boards",   desc: "Scientific and infrastructure advisors" },
      { label: "Funding & Awards",  href: "/about/funding",           desc: "NSF grants and acknowledgments" },
    ],
  },
  {
    label: "Facilities & Infrastructure",
    href:  "/facilities",
    children: [
      { label: "Overview",          href: "/facilities",              desc: "The global FABRIC testbed" },
      { label: "Resource Map",      href: "/facilities/resource-map", desc: "Sites, nodes, and capacity" },
      { label: "Prism",             href: "/facilities/prism",        desc: "Persistent infrastructure" },
      { label: "AERO",              href: "/facilities/aero",         desc: "Wireless & mobility" },
    ],
  },
  {
    label: "Community & Events",
    href:  "/community",
    children: [
      { label: "News",              href: "/community/news",          desc: "Latest announcements and updates" },
      { label: "Events",            href: "/community/events",        desc: "Webinars, conferences, workshops" },
      { label: "Project Highlights",href: "/community/highlights",    desc: "User research stories" },
      { label: "Newsletter",        href: "/community/newsletter",    desc: "Subscribe to FABRIC updates" },
    ],
  },
  {
    label: "Research & Collaboration",
    href:  "/research",
    children: [
      { label: "Current Projects",  href: "/research/projects",       desc: "Active research on FABRIC" },
      { label: "Publications",      href: "/research/publications",   desc: "Papers and reports" },
      { label: "Partnerships",      href: "/research/partnerships",   desc: "NSF, ACCESS, and other collaborations" },
    ],
  },
  {
    label: "Documentation & Support",
    href:  "/documentation",
    children: [
      { label: "Knowledge Base",    href: "https://learn.fabric-testbed.net", desc: "Guides, tutorials, and docs" },
      { label: "Forums",            href: "https://ask.fabric-testbed.net",   desc: "Community Q&A" },
      { label: "Orientation Video", href: "/documentation/orientation",       desc: "Get started with FABRIC" },
      { label: "Office Hours",      href: "/documentation/office-hours",      desc: "Meet with the FABRIC team" },
      { label: "KNIT Conference",   href: "/documentation/knit",              desc: "Annual user community gathering" },
    ],
  },
  {
    label: "Use FABRIC",
    href:  "/use-fabric",
    children: [
      { label: "Get Started",       href: "/use-fabric/get-started",  desc: "Sign up and run your first experiment" },
      { label: "Is FABRIC Right for Me?", href: "/use-fabric/overview", desc: "Learn what FABRIC enables" },
      { label: "Enter Portal",      href: "https://portal.fabric-testbed.net", desc: "Log in to your account" },
    ],
  },
];
