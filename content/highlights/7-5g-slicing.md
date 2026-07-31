---
id: 7
slug: "7-5g-slicing"
title: "Extending Local 5G Slicing for Seamless, Secure Remote Global Connectivity"
subtitle: "FABRIC testbed used to simulate local 5G hotspots set up across transcontinental distances"
image: "/imgs/highlights/5g-slicing.jpg"
imagePlaceholder: "bg-gradient-to-br from-violet-500 to-indigo-400"
institution: "University of Tokyo"
domain: "5G Networking"
learnMore:
  projectUrl: ""
  artifacts:
researchers:
  - name: "NAKAO Akihiro"
    title: "Vice Dean, School of Engineering"
    institution: "University of Tokyo"
    interests: "Research and development aimed at next-generation communication technologies, Beyond 5G/6G, are rapidly progressing. Recent large-scale communication disruptions have highlighted the urgent need for strengthening the resilience and reliability of communication infrastructures."
    contact: "https://www.t.u-tokyo.ac.jp/en/about/member/akihiro-nakao"
    photo: "/imgs/testimonials/akihiro-nakao.png"
  - name: "Fatou Secka"
    title: "Adjunct Lecturer"
    institution: "University of Gambia"
    interests: "5G Network Slicing, Network Security (WireGuard, IPsec, DMVPN), Cisco Routing & Switching (CCIE, CCNP)"
    contact: "https://linkedin.com/in/fatou-s-secka-8033686a"
    photo: "/imgs/testimonials/fatou-secka.png"
---

Whether traveling or working from home, remote workers often use Wi-Fi networks and VPNs with separate authentication devices to access critical company resources from locations around the world. Wrestling with slow, insecure connections not only hinders productivity but also leaves sensitive data vulnerable.

To address this challenge, Professor Akihiro Nakao at the University of Tokyo and Fatou Secka, a master's student in Nakao's lab, are working to extend local 5G secure networking across transcontinental network slices. Their goal is to develop a solution that provides secure and easy-to-use high-performance connectivity for global businesses and industrial IoT applications.

Essential to this study has been experimentation on the FABRIC testbed. The idea to use FABRIC for this work grew out of Nakao's long history of collaboration with Professor Kuang-Ching Wang from Clemson University on developing GENI, a virtual laboratory for network science and engineering that is considered a precursor to FABRIC.

Shortly after Nakao's group began focusing research on local 5G networks, Wang and a large group of international collaborators launched FABRIC. "This inspired us to explore how we could integrate FABRIC into our research at the University of Tokyo," said Nakao.

In 2021, the University of Tokyo became a facility partner for the FABRIC project. Through the NSF IRNC program, a FABRIC node is hosted at the University of Tokyo, connected to the US FABRIC network through trans-pacific optical networks.

## Bridging transcontinental networks

5G technology enables the creation of customized networks through network slicing, a technique that allows multiple virtual networks to be made on a shared physical infrastructure. Each network, or slice, can be tailored to meet specific service requirements. However, 5G slicing is achieved by local 5G base stations and hence its service requirements are only available on local networks.

The researchers developed a way to extend secure local 5G slicing to transcontinental networks by connecting the local 5G network to a dynamic core configuration to provide secure end-to-end network connectivity. Implementing SIM-based authentication and an integrated network infrastructure made it possible to enhance network security without the need for additional software or complex configurations.

"This approach reduces the risk of unauthorized access while also eliminating the need to connect via traditional VPNs and removing the need to manually configure additional software," said Secka. "We also integrated 3GPP 5G functions, which streamline accounting, billing and policy management."

## Simulating a global network

FABRIC's programmable infrastructure allowed the researchers to realistically simulate all the complexities of a real-world 5G core network, connecting local 5G hotspots across transcontinental distances. They used the flexible and scalable testing environment to perform extensive experiments with different configurations, helping them fine-tune their approach to optimize network efficiency and security.

Using FABRIC, the researchers established simulated local 5G hotspots in Tokyo, Japan, and Dallas, Texas, that were interconnected via a trans-oceanic link. They demonstrated an Inter-site Round-Trip Time (RTT) averaging around 145 ms, which is fast enough for most business and IoT applications.

"FABRIC's distributed cloud resources allowed us to realistically assess the performance and scalability of our dynamic core configuration," said Secka. "We were able to rigorously test the dynamic control mechanisms and inside communications in a real-world geographically distributed scenario, which was crucial for validating the effectiveness of our solution."

This successful demonstration of extending secure local 5G networking over transcontinental slices sets the stage for future advancements in 5G network slicing, particularly in the context of global operations and industrial automation. Future plans include integrating real wireless equipment and expanding the setup to other FABRIC sites to demonstrate the potential for widespread, secure communication infrastructure.

Nakao is a recent recipient of ASPIRE, a prestigious award by the Japanese government to accelerate global collaboration in next-generation cyber infrastructure (NGCI) research. Through ASPIRE, Nakao will continue to work with FABRIC to collaborate in advanced networking research.
