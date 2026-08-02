export interface Testimonial {
  id:          string;
  name:        string;
  institution: string;
  quote:       string;
  topic:       string; // e.g. "FABRIC Does 5G Networking"
  photo?:      string; // path to photo, falls back to photoPlaceholder
  photoPlaceholder: string; // initials shown when no photo
  href:        string;
}

export const testimonials: Testimonial[] = [
  {
    id:          "elie-kfoury",
    name:        "Elie Kfoury",
    institution: "University of South Carolina",
    quote:       "FABRIC stands out because of its end-to-end programmability. This allows users to program all the elements of the network, from network interface cards (NICs) to P4 switches, offering a unique platform for research and innovation in network design.",
    topic:       "FABRIC Does Intelligent Networking",
    photo:       "/imgs/highlights/researchers/elie-kfoury.png",
    photoPlaceholder: "EK",
    href:        "/community/project-highlights/2-intelligent-networking",
  },
  {
    id:          "fengping-hu",
    name:        "Fengping Hu",
    institution: "University of Chicago",
    quote:       "We make extensive use of FABRIC's flexible networking configuration. The scalable infrastructure allows us to deploy and manage cloud-native services to address the growing challenges of real-time data processing for high-energy physics applications.",
    topic:       "FABRIC Does Particle Physics",
    photo:       "/imgs/highlights/researchers/fengping-hu.png",
    photoPlaceholder: "FH",
    href:        "/community/project-highlights/4-big-data-particle-physics",

  },
  {
    id:          "fatou-secka",
    name:        "Fatou Secka",
    institution: "University of Tokyo",
    quote:       "FABRIC's distributed cloud resources allowed us to realistically assess the performance and scalability of our 5G dynamic core configuration. We were able to rigorously test the dynamic control mechanisms and inside communications in a real-world geographically distributed scenario, which was crucial for validating the effectiveness of our solution.",
    topic:       "FABRIC Does 5G Networking",
    photo:       "/imgs/highlights/researchers/fatou-secka.png",
    photoPlaceholder: "FS",
    href:        "/community/project-highlights/7-5g-slicing",
  },
];
