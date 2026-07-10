---
title: "Thread the Needle: Accelerating Big Data Processing for Particle Physics Experiments"
date: "2024-11-27"
type: "blog"
category: "community"
excerpt: "_Using the FABRIC testbed, researchers reduce data processing time from a week to minutes, enhancing efficiency and reducing costs for large-scale scientific research_"
author: "Jayasree Jaganatha"
date_modified: "2024-11-27"
wp_id: 7860
views: 723
tags:
  - blog
  - thread the needle
---

_Using the FABRIC testbed, researchers reduce data processing time from a week to minutes, enhancing efficiency and reducing costs for large-scale scientific research_

[ATLAS](https://atlas-public.web.cern.ch/), one of the largest particle physics experiments at CERN’s [Large Hadron Collider](http://home.web.cern.ch/topics/large-hadron-collider) (LHC), brings together researchers from across the globe to tackle some of the most profound questions in physics. The project uses LHC’s high-energy environment to probe the building blocks of matter, revealing the fundamental forces that govern their interactions.

ATLAS has already produced groundbreaking discoveries, such as the elusive Higgs boson, but the journey doesn’t stop there. As scientists set their sights on answering other fundamental physics questions, one of the biggest challenges lies in managing and analyzing the immense amount of data generated during LHC experiments. 

ATLAS researchers at the University of Chicago are working to solve this problem by prototyping novel approaches for accessing & processing data from the LHC. Using the [FABRIC testbed](https://portal.fabric-testbed.net/), a global infrastructure designed for large-scale networking research and experimentation, they developed a method that drastically reduces the time and bandwidth required for data analysis. 

"Data that once took a week to transfer and process can take as little as five minutes with our approach, potentially enabling a much more efficient way for physicists to explore the fundamental questions of the universe,” said research team member [Ilija Vukotic](https://efi.uchicago.edu/people/profile/ilija-vukotic/) from the University of Chicago. "Using FABRIC’s networking and computing resources, we significantly reduced the volume of data transferred across the Atlantic while also lowering network and data storage costs by minimizing the need to store large amounts of data at other locations.” 

**Moving data filtering to the source**

For many years, analyzing the massive amounts of data from CERN has required the data to be distributed to various locations. This meant that researchers had to write code to process the data and send it to these locations, which would return the data as smaller, more manageable datasets. If the datasets were still too large, they would be filtered multiple times until they could be analyzed interactively. 

“With this process, it can take a week to get initial results,” said Vukotic. “Even then, the data must be downloaded at a specialized data center using some type of batch queue, and the final analysis must still be performed, which can take hours.” 

For the new approach, data filtering is performed at CERN through FAB nodes physically situated there. FAB, which stands for FABRIC Across Borders, expanded the FABRIC testbed by connecting the core North American infrastructure to nodes in Asia and Europe.

The FAB nodes are not part of the CERN network, but they are positioned adjacent to it. This provides a convenient way to get high-power computing very close to the data source without deploying the resources within the CERN network, which would pose significant logistical complications. This setup also gives the researchers complete control over the network and data processing.

To carry out data processing, the researchers used a software service to directly filter data at the FAB nodes before transmitting it through a dedicated network to analysis facilities such as a dedicated analysis facility at the University of Chicago. Using FABRIC's advanced networking capabilities, they created computing resource platforms, or slices, that included Kubernetes clusters. Kubernetes is an open-source system used to create scalable, cloud-native computing clusters that can support high-throughput data processing.

**Leveraging a flexible and scalable network**

“We make extensive use of FABRIC’s flexible networking configuration, particularly for linking CERN with Chicago to support high throughput data delivery,” said research team member [Fengping Hu](https://efi.uchicago.edu/people/profile/fengping-hu/), from the University of Chicago. “The scalable infrastructure allows us to deploy and manage cloud-native services to address the growing challenges of real-time data processing for high-energy physics applications.”

The researchers recently demonstrated data filtering and delivery at 200 Gbps (gigabits per second) in a collaborative project with the NSF's Institute for Research and Innovation in Software for High Energy Physics (IRIS-HEP). This demonstration tackles the anticipated scale challenges in software and computing facilities for data analysis during the High Luminosity LHC (HL-LHC), set to begin operations in 2030. By filtering and reformatting data closer to storage systems at CERN using the newly prototyped in-network capabilities offered by FAB, this approach could greatly speed up data analysis and improve cost efficiency.
