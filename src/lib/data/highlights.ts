export interface ProjectHighlight {
  slug:        string;
  title:       string;
  researchers:  string[];
  institution:  string;
  domain:       string;
  image?:       string;
  imagePlaceholder: string;
  href:        string;
}

export const projectHighlights: ProjectHighlight[] = [
  {
    slug:             "2-intelligent-networking",
    title:            "Making Intelligent Networking More Accessible",
    researchers:      ["Elie Kfoury", "Jorge Crichigno"],
    institution:      "University of South Carolina",
    domain:           "AI / Machine Learning",
    image:            "/imgs/highlights/intelligent-networking.jpg",
    imagePlaceholder: "bg-gradient-to-br from-blue-500 to-cyan-400",
    href:             "/community/project-highlights/2-intelligent-networking",
  },
  {
    slug:             "l4s-deployment",
    title:            "Does L4S Have a Path to Deployment?",
    researchers:      ["Fatih Berkay Sarpkaya"],
    institution:      "NYU Tandon School of Engineering",
    domain:           "Networking",
    image:            "/imgs/highlights/l4s-deployment.png",
    imagePlaceholder: "bg-gradient-to-br from-indigo-500 to-blue-400",
    href:             "/community/project-highlights/l4s-deployment",
  },
  {
    slug:             "big-data-particle-physics",
    title:            "Accelerating Big Data Processing for Particle Physics Experiments",
    researchers:      ["Ilija Vukotic"],
    institution:      "University of Chicago",
    domain:           "Particle Physics",
    image:            "/imgs/highlights/big-data-particle-physics.jpg",
    imagePlaceholder: "bg-gradient-to-br from-purple-500 to-blue-400",
    href:             "/community/project-highlights/big-data-particle-physics",
  },
  {
    slug:             "high-speed-secure-streaming",
    title:            "Infrastructure Framework Enables High-Speed Secure Streaming Between Federated Scientific Instrument Networks",
    researchers:      ["Rajkumar Kettimuthu", "Joaquin Chung"],
    institution:      "Argonne National Laboratory",
    domain:           "Data Streaming",
    image:            "/imgs/highlights/high-speed-secure-streaming.jpg",
    imagePlaceholder: "bg-gradient-to-br from-green-500 to-teal-400",
    href:             "/community/project-highlights/high-speed-secure-streaming",
  },
  {
    slug:             "climate-models",
    title:            "Improving Climate Models Without Moving Massive Amounts of Data",
    researchers:      ["Ravi Madduri", "Zilinghan Li"],
    institution:      "Argonne National Laboratory",
    domain:           "Climate Science",
    image:            "/imgs/highlights/climate-models.jpg",
    imagePlaceholder: "bg-gradient-to-br from-emerald-500 to-green-400",
    href:             "/community/project-highlights/climate-models",
  },
  {
    slug:             "ai-image-analysis-pain",
    title:            "Harnessing AI-Powered Image Analysis to Transform Pain Diagnosis",
    researchers:      ["Kuang-Ching Wang", "Benjamin Formby"],
    institution:      "Clemson University",
    domain:           "Healthcare / AI",
    image:            "/imgs/highlights/ai-image-analysis-pain.jpg",
    imagePlaceholder: "bg-gradient-to-br from-rose-500 to-orange-400",
    href:             "/community/project-highlights/ai-image-analysis-pain",
  },
  {
    slug:             "5g-slicing",
    title:            "Extending Local 5G Slicing for Seamless, Secure Remote Global Connectivity",
    researchers:      ["NAKAO Akihiro", "Fatou Secka"],
    institution:      "University of Tokyo",
    domain:           "5G Networking",
    image:            "/imgs/highlights/5g-slicing.jpg",
    imagePlaceholder: "bg-gradient-to-br from-violet-500 to-indigo-400",
    href:             "/community/project-highlights/5g-slicing",
  },
  {
    slug:             "programmable-networks-secure",
    title:            "Making Programmable Networks More Secure",
    researchers:      ["Nik Sultana", "Alexander Wolosewicz", "Nishanth Shyamkumar"],
    institution:      "Illinois Institute of Technology",
    domain:           "Cybersecurity",
    image:            "/imgs/highlights/programmable-networks-secure.jpg",
    imagePlaceholder: "bg-gradient-to-br from-red-500 to-orange-400",
    href:             "/community/project-highlights/programmable-networks-secure",
  },
  {
    slug:             "ejfat-data-movement",
    title:            "Accelerating Scientific Data Movement with EJFAT",
    researchers:      ["Ilya Baldin"],
    institution:      "Jefferson Lab / ESnet",
    domain:           "Data Transport",
    image:            "/imgs/highlights/ejfat-data-movement.png",
    imagePlaceholder: "bg-gradient-to-br from-amber-500 to-yellow-400",
    href:             "/community/project-highlights/ejfat-data-movement",
  },
];
