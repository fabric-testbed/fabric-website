export interface ProjectHighlight {
  slug:        string;
  title:       string;
  researcher?: string;
  institution?: string;
  imagePlaceholder: string; // tailwind bg color for placeholder
  href:        string;
  tags:        string[];
}

export const projectHighlights: ProjectHighlight[] = [
  {
    slug:             "high-speed-secure-streaming",
    title:            "Enabling High-Speed Secure Streaming between Federated Scientific Instrument Networks",
    imagePlaceholder: "bg-gradient-to-br from-orange-400 to-red-600",
    href:             "/community/highlights/high-speed-secure-streaming",
    tags:             ["Security", "Streaming", "Federation"],
  },
  {
    slug:             "intelligent-networking",
    title:            "Making Intelligent Networking More Accessible",
    imagePlaceholder: "bg-gradient-to-br from-blue-500 to-cyan-400",
    href:             "/community/highlights/intelligent-networking",
    tags:             ["AI", "Networking", "Accessibility"],
  },
  {
    slug:             "l4s-deployment",
    title:            "Exploring L4S Deployment Challenges and Opportunities",
    imagePlaceholder: "bg-gradient-to-br from-sky-300 to-indigo-400",
    href:             "/community/highlights/l4s-deployment",
    tags:             ["L4S", "Congestion", "Routing"],
  },
  {
    slug:             "big-data-particle-physics",
    title:            "Accelerating Big Data Processing for Particle Physics Experiments",
    imagePlaceholder: "bg-gradient-to-br from-violet-500 to-purple-700",
    href:             "/community/highlights/big-data-particle-physics",
    tags:             ["HPC", "Particle Physics", "Data"],
  },
  {
    slug:             "climate-models",
    title:            "Improving Climate Models without Moving Massive Amounts of Data",
    imagePlaceholder: "bg-gradient-to-br from-teal-400 to-emerald-500",
    href:             "/community/highlights/climate-models",
    tags:             ["Climate", "Data Movement", "HPC"],
  },
  {
    slug:             "ai-image-analysis-pain",
    title:            "Harnessing AI-Powered Image Analysis to Transform Pain Diagnosis",
    imagePlaceholder: "bg-gradient-to-br from-slate-400 to-blue-300",
    href:             "/community/highlights/ai-image-analysis-pain",
    tags:             ["AI", "Healthcare", "Imaging"],
  },
  {
    slug:             "5g-slicing",
    title:            "Extending Local 5G Slicing for Seamless, Secure Remote Global Connectivity",
    imagePlaceholder: "bg-gradient-to-br from-gray-500 to-gray-700",
    href:             "/community/highlights/5g-slicing",
    tags:             ["5G", "Slicing", "Security"],
  },
  {
    slug:             "programmable-networks-secure",
    title:            "Making Programmable Networks More Secure",
    imagePlaceholder: "bg-gradient-to-br from-amber-400 to-orange-500",
    href:             "/community/highlights/programmable-networks-secure",
    tags:             ["Security", "Programmable", "P4"],
  },
  {
    slug:             "ejfat-data-movement",
    title:            "Accelerating Scientific Data Movement with EJFAT",
    imagePlaceholder: "bg-gradient-to-br from-blue-400 to-indigo-600",
    href:             "/community/highlights/ejfat-data-movement",
    tags:             ["EJFAT", "Data Movement", "Science"],
  },
];
