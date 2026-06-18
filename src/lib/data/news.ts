export interface NewsItem {
  slug:     string;
  date:     string;
  title:    string;
  excerpt:  string;
  category: "news" | "blog" | "newsletter" | "announcement";
  href:     string;
}

export interface EventItem {
  slug:      string;
  date:      string;         // ISO format
  month:     string;         // e.g. "Jan"
  day:       string;         // e.g. "20"
  year:      string;
  timeRange: string;
  title:     string;
  excerpt:   string;
  href:      string;
}

export const newsItems: NewsItem[] = [
  {
    slug:     "fabric-services-launch",
    date:     "January 14, 2026",
    title:    "FABRIC Introduces New \"FABRIC Services\" to Expand Access to Advanced Networking Capabilities",
    excerpt:  "FABRIC is excited to announce the launch of FABRIC Services, a new initiative designed to harness creative functions created by FABRIC users to make the testbed's advanced networking technologies more accessible to a wider range of researchers and scientific communities.",
    category: "announcement",
    href:     "/community/news/fabric-services-launch",
  },
  {
    slug:     "ai-qa-tool",
    date:     "December 10, 2025",
    title:    "New AI-Powered Q&A Tool Makes FABRIC More Accessible Than Ever",
    excerpt:  "FABRIC is introducing a next-generation Q&A tool designed to make the testbed more accessible than ever. The new tool streamlines how users discover information, learn core concepts, and navigate the platform, helping new and experienced researchers accelerate their work across FABRIC's nationwide infrastructure.",
    category: "news",
    href:     "/community/news/ai-qa-tool",
  },
];

export const eventItems: EventItem[] = [
  {
    slug:      "2026-09-28-knit13-a-fabric-community-workshop",
    date:      "2026-09-28",
    month:     "Sep",
    day:       "28",
    year:      "2026",
    timeRange: "Washington, DC",
    title:     "KNIT13: Networking for the Future",
    excerpt:   "KNIT13 brings together the FABRIC community for a day of advanced training, plenary sessions, and hands-on exploration of cutting-edge research networking. Co-located with the PAWR PI Meeting in Washington, DC.",
    href:      "/community/events/2026-09-28-knit13-a-fabric-community-workshop",
  },
  {
    slug:      "advancing-ai-driven-user-support",
    date:      "2026-01-20",
    month:     "Jan",
    day:       "20",
    year:      "2026",
    timeRange: "3:00 PM – 4:30 PM ET",
    title:     "Advancing AI-Driven User Support in the FABRIC Testbed | Mastering FABRIC: Tips and Tricks",
    excerpt:   "Join us January 20, 2026 at 3 pm ET for an in-depth session exploring how FABRIC is advancing AI-driven user support through a Q&A tool designed to make the testbed more accessible, intuitive, and efficient for researchers.",
    href:      "/community/events/advancing-ai-driven-user-support",
  },
  {
    slug:      "bluefield-nics-dpus",
    date:      "2026-11-11",
    month:     "Nov",
    day:       "11",
    year:      "2026",
    timeRange: "3:00 PM – 4:30 PM ET",
    title:     "Bluefield NICs | Stitching Together Innovation with FABRIC Users",
    excerpt:   "Data Processing Units (DPUs) are programmable processors designed to offload and accelerate workloads and data processing, freeing up CPU resources and improving system performance. This webinar will highlight how researchers can leverage DPUs within FABRIC to accelerate experimentation.",
    href:      "/community/events/bluefield-nics-dpus",
  },
];
