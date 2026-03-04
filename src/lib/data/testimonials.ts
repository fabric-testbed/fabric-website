export interface Testimonial {
  id:          string;
  name:        string;
  institution: string;
  quote:       string;
  topic:       string; // e.g. "FABRIC Does 5G Networking"
  photoPlaceholder: string; // initials or color
  href:        string;
}

export const testimonials: Testimonial[] = [
  {
    id:          "fatou-secka",
    name:        "Fatou Secka",
    institution: "University of Tokyo",
    quote:       "FABRIC's distributed cloud resources allowed us to realistically assess the performance and scalability of our 5G dynamic core configuration. We were able to rigorously test the dynamic control mechanisms and inside communications in a real-world geographically distributed scenario, which was crucial for validating the effectiveness of our solution.",
    topic:       "FABRIC Does 5G Networking",
    photoPlaceholder: "FS",
    href:        "/community/highlights/5g-networking-fatou",
  },
  {
    id:          "elie-kfoury",
    name:        "Elie Kfoury",
    institution: "University of South Carolina",
    quote:       "FABRIC stands out because of its end-to-end programmability. This allows users to program all the elements of the network, from network interface cards (NICs) to P4 switches, offering a unique platform for research and innovation in network design.",
    topic:       "FABRIC Does Intelligent Networking",
    photoPlaceholder: "EK",
    href:        "/community/highlights/intelligent-networking-elie",
  },
];
