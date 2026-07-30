---
id: 9
slug: "programmable-networks-secure"
title: "Making Programmable Networks More Secure"
subtitle: "Researchers use FABRIC to test new attestation-capable software network switch"
image: "/imgs/highlights/programmable-networks-secure.jpg"
imagePlaceholder: "bg-gradient-to-br from-red-500 to-orange-400"
institution: "Illinois Institute of Technology"
domain: "Cybersecurity"
learnMore:
  projectUrl: "https://portal.fabric-testbed.net/experiments/public-projects/e34dd6bb-f899-499d-a7af-8dfa60559ecb"
  artifacts:
    - label: "Debugging programmable data planes on FABRIC using ProvP4 - KNIT'12 demo"
      url: "https://artifacts.fabric-testbed.net/artifacts/f679fa80-f069-453f-a895-e1272d605e32"
    - label: "CREASE-Crinkle Large-Topology Demo"
      url: "https://artifacts.fabric-testbed.net/artifacts/5862b301-9c7f-4d11-b995-e0751dca0a64"
    - label: "CREASE Demo (\"Causal REasoning and Attestation for Scientific Experimentation\")"
      url: "https://artifacts.fabric-testbed.net/artifacts/67a79160-cae8-4141-a6ec-fb89381531e5"
    - label: "Remote Attestation on Science DMZ with Xilinx-U280"
      url: "https://artifacts.fabric-testbed.net/artifacts/bcf64ac9-1fb7-4dc4-823e-b6158fd2cd41"
    - label: "Network Replay and Consistency Across Testbeds"
      url: "https://artifacts.fabric-testbed.net/artifacts/486cc061-05f3-440d-aa42-d49e9cc57551"
    - label: "Deployment and evaluation of network systems programmed using P4"
      url: "https://artifacts.fabric-testbed.net/artifacts/d03bc2be-1d66-40ab-9270-9f885327daa2"
researchers:
  - name: "Nik Sultana"
    title: "Assistant Professor "
    institution: "Illinois Institute of Technology"
    interests: "Distributed systems, Programmable networking, Security, Automated reasoning, Formal methods"
    contact: "https://www.iit.edu/directory/people/nik-sultana"
    photo: "/imgs/testimonials/nik-sultana.jpg"
  - name: "Alexander Wolosewicz"
    title: "PhD Student"
    institution: "Illinois Institute of Technology"
    interests: "Networking and security, improving visibility in virtual networks"
    contact: "https://transparnet.cs.iit.edu/~awolosewicz/"
    photo: "/imgs/testimonials/alexander-wolosewicz.jpeg"
  - name: "Nishanth Shyamkumar"
    title: "Research Software Engineer"
    institution: "Illinois Institute of Technology"
    interests: "Performance evaluation in Data center and cloud networks"
    contact: "https://www.linkedin.com/in/nishanth-shyamkumar-9bb14980/?skipRedirect=true"
    photo: "/imgs/testimonials/nishanth-shyamkumar.png"
---

Programmable network hardware devices such as switches, routers or network interface cards are becoming more widespread. Although programmability gives network operators the ability to customize devices to meet the unique requirements of their network, this capability can also be used to undermine the security of the hardware and its users.

Nik Sultana, assistant professor at the Illinois Institute of Technology, together with doctoral student Alexander Wolosewicz and research software engineer Nishanth Shyamkumar, used FABRIC to evaluate a prototype software network switch they designed to help safeguard programmable networks.

"We chose to use FABRIC since it was designed to support programmable networking, and it provides an ideal environment in which to situate and evaluate our research," said Sultana. "FABRIC provides a great set of resources and an intuitive user interface, and we plan to continue using it to develop and evaluate further work that is based on this research."

## Integrating Remote Attestation

One problem with programmable networks is that although logs and network monitoring data are available, there isn't a chain of custody through which that data can be trusted. This not only makes verifying configuration evidence difficult but also means that rogue processes may go undetected.

A technique known as remote attestation can help boost security because it provides integrity assurance to remote users of hardware and other resources by establishing well-defined trust relationships among those who provide, use or delegate remote resources.

In the new work, Sultana and his team designed a programmable software network switch that performs remote attestation. It does this by embedding its configuration evidence in the packets it forwards. They created the switch by extending the Behavioral Model v2 simple switch, an open-source software switch simulator that can be programmed using the P4 language.

The new switch generates evidence of its state and transmits this with other data plane traffic. Because it creates evidence of its trustworthiness outside the program or control plane processes, any rogue updates to its configuration will be detected and transmitted. This approach also defines a trusted computing base that is responsible for creating and communicating evidence related to the switch's configuration.

Deciding how to encode evidence without violating compliance with standard protocols was a key challenge in the project. Early attempts occasionally destroyed packets, making them unreadable for end hosts. The researchers developed a solution that places the state information into a hop-by-hop extension field of IPv6 packets. As the packets travel through the network, routers will process the extension field, potentially modifying or accessing the state information it contains. Because hop-by-hop extension headers are part of the IPv6 specification, new behaviors could be introduced without changing existing protocols.

## At-Scale Testing

The researchers used FABRIC to conduct verification and performance tests to confirm that the programmable element they designed worked as an attestor. "FABRIC provided the quality and scale of network and computational resources needed to evaluate our work," said Shyamkumar. "It also provided an excellent platform on which to demonstrate the switch to others. We hope to continue building on this feature to disseminate our work with the research community."

The researchers say that this first prototype switch provides an important starting point for further research into how to build more trustworthy network elements, which in turn can help enable more secure systems and services.

"Our project showed how low-level, autonomous security can occur at network nodes while also serving as a building block to ensure the entire route is secure," said Wolosewicz. "Attestation-capable switches can also provide network operators with a greater understanding of the state of their network and open the way for network users to obtain visibility into how their traffic is being handled by the network."
