---
id: 5
slug: "high-speed-secure-streaming"
title: "Infrastructure Framework Enables High-Speed Secure Streaming Between Federated Scientific Instrument Networks"
subtitle: "FABRIC testbed used to evaluate the data streaming performance over SciStream across various network configurations"
image: "/imgs/highlights/high-speed-secure-streaming.jpg"
imagePlaceholder: "bg-gradient-to-br from-green-500 to-teal-400"
institution: "Argonne National Laboratory / University of Chicago"
domain: "Data Streaming"
learnMore:
  projectUrl: "https://portal.fabric-testbed.net/experiments/public-projects/f4344c37-52e3-4d0c-a354-9311342ec109"
  artifacts:
    - label: "High-Speed Traffic Experiments on a Tofino Switch"
      url: "https://artifacts.fabric-testbed.net/artifacts/29d908d4-a3fe-441f-9c6d-0b42589dc3f9"
researchers:
  - name: "Rajkumar Kettimuthu"
    title: "CASE Senior Scientist At-Large"
    institution: "Argonne National Laboratory and the University of Chicago"
    interests: "AI for science, HPC, data-intensive systems, and quantum networking"
    contact: "https://www.anl.gov/profile/rajkumar-kettimuthu"
    photo: "/imgs/testimonials/rajkumar-kettimuthu.jpg"
  - name: "Joaquin Chung"
    title: "Research Scientist"
    institution: "Argonne National Laboratory and the University of Chicago"
    interests: "Quantum networks, advanced wireless, software-defined networking"
    contact: "https://www.anl.gov/profile/joaquin-chung"
    photo: "/imgs/testimonials/joaquin-chung.jpg"
---

Researchers use distributed scientific instruments such as large sensor networks, climate monitoring stations, particle accelerators, and more to tackle complex, large-scale scientific questions. These instruments generate vast amounts of data at remarkable speeds, requiring efficient transfer across long distances for analysis. However, traditional file-based methods often encounter bottlenecks, especially when the instruments producing the data reside in stringent security domains with restricted external network connectivity.

Led by Rajkumar Kettimuthu, researchers at Argonne National Laboratory and the University of Chicago are developing a federated scientific data streaming architecture called SciStream that enables secure, memory-to-memory data streaming between scientific instruments and high-performance computing (HPC) centers to address the limitations of traditional file-based data movement.

"If scientific instruments can rapidly stream data to HPC centers, it would enable immediate feedback, which not only enhances efficiency but also fosters innovative experimentation and smarter decision making," said Joaquin Chung, who helped develop SciStream with Kettimuthu. "By ensuring seamless connectivity, we aim to open new opportunities for scientific discovery."

## Building network bridges

Many data-intensive science works take place across vast distances, e.g., producing data from instruments on the U.S. West Coast and processing them with HPC on the East Coast. This requires navigating many different security domains since each participating entity has its own policies and nuances.

SciStream is designed to facilitate on-demand, secure bridges between instruments and wide area networks by authenticating and authorizing users. It can be deployed at national labs, universities, and HPC centers, allowing users to access resources using institutional identity credentials. The complexities in network connections are hidden from the end user while still ensuring a high level of security for all network connections, making it easy and efficient to use.

## Testing SciStream configurations on FABRIC

As part of the 2024 Summer of Reproducibility program at the University of Chicago, Acheme Acheme, a doctoral student in Kuang-Ching Wang's lab at Clemson University, worked with Chung to create reproducible artifacts to benchmark SciStream under four patterns of streaming traffic.

The goal was to see how SciStream would perform with different network traffic patterns. Unlike other testbeds with limited testing sites, FABRIC enabled testing across various distances — from short distances within the same building to across the U.S.

"FABRIC's geographical distribution allowed us to conduct more credible experiments compared to artificial environments created by packet delay tools, which only simulate statistical queuing," said Acheme. "Additionally, its measurement tools and network resources, including the smart network interfaces, enhanced the testing for this project."

Next, the researchers would like to leverage FABRIC's measurement tools to identify which elements contribute the most delay in streaming between producer and consumer nodes. While they can currently measure the total delay, they aim to capture specific delays between elements for deeper insights. They are also looking at using FABRIC's facility ports to connect to real systems, which might let them create their own testbed on top of FABRIC.
