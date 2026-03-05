---
id: 2
slug: "2-intelligent-networking"
title: "Making Intelligent Networking More Accessible"
subtitle: "Virtual labs deployed on FABRIC are making it easier to learn and experiment with programmable switches and smart network interface cards"
image: "/imgs/highlights/intelligent-networking.jpg"
imagePlaceholder: "bg-gradient-to-br from-blue-500 to-cyan-400"
institution: "University of South Carolina"
domain: "AI / Machine Learning"
learnMore:
  projectUrl: "https://portal.fabric-testbed.net"
  artifacts:
    - label: "Introduction to P4-DPDK"
      url: "https://learn.fabric-testbed.net"
    - label: "P4 Labs (BMv2)"
      url: "https://learn.fabric-testbed.net"
researchers:
  - name: "Elie Kfoury"
    title: "Assistant Professor"
    institution: "University of South Carolina"
    interests: "P4 programmable data planes, computer networks, cybersecurity, and Blockchain"
    contact: "mailto:ekfoury@sc.edu"
    photo: ""
  - name: "Jorge Crichigno"
    title: "Professor"
    institution: "University of South Carolina"
    interests: "Practical implementation of Science DMZs, including the design and implementation of high-speed switched networks, TCP optimization, and experimental evaluation of congestion control algorithms such as BBR, HTCP, and Cubic."
    contact: "mailto:jcrichigno@sc.edu"
    photo: ""
---

Programmable switches make it possible to customize how data flows through a network, enabling precise control over performance, security, and functionality. These smart switches are crucial for advancing networking and developing technologies that can adapt to the ever-changing demands of modern infrastructure.

However, the rapid evolution of this technology often leaves researchers struggling to integrate and compare emerging technologies. Researchers at the University of South Carolina are leveraging the FABRIC testbed, a global infrastructure designed for large-scale networking research and experimentation, to enable seamless exploration and training for various programmable switch platforms.

"Working with these technologies presents a steep learning curve, with limited resources available for beginners," said Jorge Crichigno, leader of the research team. "This project addresses that challenge by providing clear, step-by-step tutorials integrated into FABRIC, ensuring anyone can get started easily and successfully. By removing barriers, we're making advanced networking more accessible to students and researchers."

## Launching a pilot project

As part of a NSF CyberTraining project, Elie Kfoury, who was a graduate student working with Crichigno at the time, developed a group of structured, hands-on training exercises known as virtual lab libraries for teaching programmable switch technology. Each library contained 10-15 labs, with step-by-step instructions spanning 20 to 30 pages. These libraries were created on a dedicated cloud system at the university and deployed as "pods", where they could be used for student workshops and professional training.

"In 2023, we had the idea to port these training materials to FABRIC," said Kfoury. "FABRIC stands out because of its end-to-end programmability. This allows users to program all the elements of the network, from network interface cards (NICs) to P4 switches, offering a unique platform for research and innovation in network design."

The researchers first carried out a pilot project that converted a library covering the software switch called BMv2 into Jupyter notebooks that were deployed over FABRIC. These notebooks included step-by-step instructions, screenshots, and starter code for learners.

This successful pilot laid the groundwork for a new CyberTraining project with the FABRIC team that aims to extend the training materials to cover programmable switches and a newer technology known as a SmartNIC, a programmable network card that, like a programmable switch, can process and modify network traffic directly, enabling greater flexibility and efficiency in managing data flows.

The plan is to make multiple lab libraries available to all FABRIC users. So far, the team has developed an introduction library that covers the basics of P4-DPDK — a new technology that allows developers to create P4 code that is then translated into a Data Plane Development Kit (DPDK) pipeline, combining the expressiveness of P4 with the performance benefits of DPDK.

They also developed a security applications lab library that includes topics like detecting SYN floods, calculating packet inter-arrival times, heavy hitters, firewalls, and packet filtering. The labs include detailed step-by-step guidance, code explanations, and screenshots to ensure users have everything they need to complete them.

## Programmable networking made simple

The researchers note that FABRIC's pre-configured, shared environments eliminate the need for learners to assemble their own hardware and software configurations or troubleshoot setup issues. The standardized training environment also allows users to share and reuse materials easily.

"We made sure that the notebooks were written in a way that allows a user to come back after a month or two, or even a year, and run it just by clicking on the Jupyter Hub display buttons," said Kfoury. "We're trying to make it easy for users to focus on developing the application they are interested in researching without the hassle of trying to understand all the details to make it run."

FABRIC's physical network infrastructure across multiple sites also provides real-world latency and link metrics, enhancing the reliability of research results. The team is now working to develop new lab libraries that rely on physical NICs, showcasing FABRIC's unique capabilities, such as handling 100 Gbps links.

"A lot of researchers are interested in doing experiments involving 100 Gbps of traffic, but they don't have the means to do it," said Kfoury. "FABRIC has the necessary servers, high-speed links, processing power, and SmartNICs, providing a complete set of equipment to do this work."
