---
title: "Thread the Needle: Infrastructure Framework enables High-Speed Secure Streaming between Federated Scientific Instrument Networks"
date: "2025-02-12"
type: "blog"
category: "community"
excerpt: "_FABRIC testbed used to evaluate the data streaming performance over SciStream across various network configurations_"
author: "Jayasree Jaganatha"
date_modified: "2025-02-11"
wp_id: 8227
views: 913
tags:
  - blog
  - thread the needle
---

_FABRIC testbed used to evaluate the data streaming performance over SciStream across various network configurations_

Researchers use distributed scientific instruments such as large sensor networks, climate monitoring stations, particle accelerators, etc., to tackle complex, large-scale scientific questions. These instruments generate vast amounts of data at remarkable speeds, requiring efficient transfer across long distances for analysis. However, traditional file-based methods often encounter bottlenecks, especially when the instruments producing the data reside in stringent security domains with restricted external network connectivity.

Led by [Rajkumar Kettimuthu](https://www.anl.gov/profile/rajkumar-kettimuthu), researchers at [Argonne National Laboratory](https://www.anl.gov/) and the [University of Chicago](https://www.uchicago.edu/) are developing a federated scientific data streaming architecture called [SciStream](https://wordpress.cels.anl.gov/scistream/) that enables secure, memory-to-memory data streaming between scientific instruments and high-performance computing (HPC) centers to address the limitations of traditional file-based data movement. 

“If scientific instruments can rapidly stream data to HPC centers, it would enable immediate feedback, which not only enhances efficiency but also fosters innovative experimentation and smarter decision making,” said [Joaquin Chung](https://www.anl.gov/profile/joaquin-chung), who helped develop SciStream with Kettimuthu. “By ensuring seamless connectivity, we aim to open new opportunities for scientific discovery.”

To test SciStream, the researchers drew on the [FABRIC testbed](https://portal.fabric-testbed.net/), which provides a unique geographically distributed network of 29 sites, each with large amounts of compute and storage, which are interconnected by dedicated high-speed optical links.

### Building network bridges

Many data-intensive science works take place across vast distances, e.g., producing data from instruments on the U.S. West Coast and processing them with HPC on the East Coast. This requires navigating many different security domains since each participating entity has its own policies and nuances. These instruments and computing facilities are usually interconnected by regional networks that have independent security domains. 

SciStream is designed to facilitate on-demand, secure bridges between instruments and wide area networks by authenticating and authorizing users. It can be deployed at national labs, universities, and HPC centers, allowing users to access resources using institutional identity credentials. The complexities in network connections are hidden from the end user while still ensuring a high level of security for all network connections, making it easy and efficient to use.

“When we were applying for NSF funding to develop SciStream, FABRIC was just starting to be deployed, and we were excited to incorporate it into our grant,” said Chung. “FABRIC was proposing an architecture that has not been deployed before by having compute, storage, and network capabilities in every node of the wide area network. This was fascinating because it would allow us to select different network configurations with which to test SciStream.”  

### Testing SciStream configurations

As part of the [2024 Summer of Reproducibility](https://repeto.cs.uchicago.edu/2024/09/18/2024-summer-of-reproducibility-another-great-year-promoting-practical-reproducibility/) program at the University of Chicago, Acheme Acheme, a doctoral student in [Kuang-Ching Wang’s](https://www.clemson.edu/cecas/departments/ece/faculty_staff/faculty/kwang.html) lab at Clemson University, worked with Chung to create reproducible artifacts to benchmark SciStream under four patterns of streaming traffic. 

The goal was to see how SciStream would perform with different network traffic patterns. Unlike the [Chameleon Cloud testbed](https://www.chameleoncloud.org/), which the team has experimented with before but has limited testing sites, FABRIC enabled testing across various distances — from short distances within the same building to across the U.S. 

“FABRIC’s geographical distribution allowed us to conduct more credible experiments compared to artificial environments created by packet delay tools, which only simulate statistical queuing,” said Acheme. “Additionally, its measurement tools and network resources, including the smart network interfaces, enhanced the testing for this project.”

Next, the researchers would like to leverage FABRIC's measurement tools to identify which elements contribute the most delay in streaming between producer and consumer nodes. While they can currently measure the total delay, they aim to capture specific delays between elements for deeper insights. They are also looking at using FABRIC’s facility ports to connect to real systems, which might let them create their own testbed on top of FABRIC. 

_FABRIC users can find SciStream on FABRIC’s Artifact Manager._
