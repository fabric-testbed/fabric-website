export interface ProjectHighlight {
  slug:        string;
  title:       string;
  researcher?: string;
  institution?: string;
  domain?:      string;
  image?:       string; // path under /imgs/highlights/
  imagePlaceholder: string; // tailwind bg color fallback
  href:        string;
}

export const projectHighlights: ProjectHighlight[] = [
  {
    slug:             "high-speed-secure-streaming",
    title:            "Enabling High-Speed Secure Streaming between Federated Scientific Instrument Networks",
    researcher:       "Elie Kfoury",
    institution:      "Boston University",
    domain:           "Networking",
    image:            "/imgs/highlights/high-speed-secure-streaming.jpg",
    imagePlaceholder: "bg-gradient-to-br from-orange-400 to-red-600",
    href:             "/community/project-highlights/high-speed-secure-streaming",
  },
  {
    slug:             "2-intelligent-networking",
    title:            "Making Intelligent Networking More Accessible",
    institution:      "University of South Carolina",
    domain:           "AI / Machine Learning",
    image:            "/imgs/highlights/intelligent-networking.jpg",
    imagePlaceholder: "bg-gradient-to-br from-blue-500 to-cyan-400",
    href:             "/community/project-highlights/2-intelligent-networking",
  },
  {
    slug:             "l4s-deployment",
    title:            "Exploring L4S Deployment Challenges and Opportunities",
    institution:      "University of Amsterdam",
    domain:           "Networking",
    image:            "/imgs/highlights/l4s-deployment.png",
    imagePlaceholder: "bg-gradient-to-br from-sky-300 to-indigo-400",
    href:             "/community/project-highlights/l4s-deployment",
  },
  {
    slug:             "big-data-particle-physics",
    title:            "Accelerating Big Data Processing for Particle Physics Experiments",
    institution:      "University of Chicago",
    domain:           "Physics",
    image:            "/imgs/highlights/big-data-particle-physics.jpg",
    imagePlaceholder: "bg-gradient-to-br from-violet-500 to-purple-700",
    href:             "/community/project-highlights/big-data-particle-physics",
  },
  {
    slug:             "climate-models",
    title:            "Improving Climate Models without Moving Massive Amounts of Data",
    institution:      "TACC",
    domain:           "Climate Science",
    image:            "/imgs/highlights/climate-models.jpg",
    imagePlaceholder: "bg-gradient-to-br from-teal-400 to-emerald-500",
    href:             "/community/project-highlights/climate-models",
  },
  {
    slug:             "ai-image-analysis-pain",
    title:            "Harnessing AI-Powered Image Analysis to Transform Pain Diagnosis",
    institution:      "University of California San Diego",
    domain:           "AI / Machine Learning",
    image:            "/imgs/highlights/ai-image-analysis-pain.jpg",
    imagePlaceholder: "bg-gradient-to-br from-slate-400 to-blue-300",
    href:             "/community/project-highlights/ai-image-analysis-pain",
  },
  {
    slug:             "5g-slicing",
    title:            "Extending Local 5G Slicing for Seamless, Secure Remote Global Connectivity",
    institution:      "Rutgers University",
    domain:           "5G / Wireless",
    image:            "/imgs/highlights/5g-slicing.jpg",
    imagePlaceholder: "bg-gradient-to-br from-gray-500 to-gray-700",
    href:             "/community/project-highlights/5g-slicing",
  },
  {
    slug:             "programmable-networks-secure",
    title:            "Making Programmable Networks More Secure",
    institution:      "Georgia Tech",
    domain:           "Security",
    image:            "/imgs/highlights/programmable-networks-secure.jpg",
    imagePlaceholder: "bg-gradient-to-br from-amber-400 to-orange-500",
    href:             "/community/project-highlights/programmable-networks-secure",
  },
  {
    slug:             "ejfat-data-movement",
    title:            "Accelerating Scientific Data Movement with EJFAT",
    institution:      "TACC",
    domain:           "Data & Storage",
    image:            "/imgs/highlights/ejfat-data-movement.png",
    imagePlaceholder: "bg-gradient-to-br from-blue-400 to-indigo-600",
    href:             "/community/project-highlights/ejfat-data-movement",
  },
];
