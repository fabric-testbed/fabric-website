---
title: "Thread The Needle: Harnessing AI-Powered Image Analysis to Transform Pain Diagnosis "
date: "2024-10-17"
type: "blog"
category: "community"
excerpt: "_FABRIC testbed helps researchers optimize machine learning and data transfer for real-time ultrasound image processing_"
author: "Jayasree Jaganatha"
date_modified: "2024-10-22"
wp_id: 7659
views: 818
tags:
  - blog
  - thread the needle
---

_FABRIC testbed helps researchers optimize machine learning and data transfer for real-time ultrasound image processing_

To treat pain, current medical practices rely heavily on pharmaceuticals. However, this approach doesn’t address the root causes of the pain and comes with side effects and a risk of dependency. A new collaborative project at Clemson University aims to find better ways to treat pain by combining advanced ultrasound imaging with machine learning to uncover the deeper, often hidden, causes of pain.

The project, inspired by the [NIH’s Helping to End Addiction Long-term](https://www.nimh.nih.gov/research/research-funded-by-nimh/research-initiatives/helping-to-end-addiction-long-termr-initiative-nih-heal-initiativer#:~:text=What%20is%20the%20NIH%20HEAL,better%20manage%20chronic%20pain%20conditions.) (NIH HEAL) Initiative and funded as a team science project through SC-TRIMH - a NIH COBRE center at Clemson University, brings together an interdisciplinary team of experts, including physicians, computer scientists and imaging experts, to figure out how to better visualize and understand the physical markers of pain within muscle tissues and tendons. The goal is to eventually make it possible for more physicians to use ultrasound to diagnose pain in their clinics.

“We are developing image-driven machine learning solutions that can be integrated into a distributed infrastructure,” research team leader [Kuang-Ching Wang](https://kwang.people.clemson.edu/) from Clemson University. “This would allow image data from millions of doctors around the country — whether at large hospital systems or small rural facilities — to be processed in real-time at distributed data centers.” 

To figure out the best ways to achieve efficient machine learning and data transfer, the researchers are tapping into the capabilities of the [FABRIC testbed](https://portal.fabric-testbed.net/), a global infrastructure designed for large-scale networking research and experimentation. This involves working to turn imaging data into a form that machine learning algorithms can use to help with diagnosis, as well as creating mechanisms to present the outcome of this machine-aided assessment to physicians in real-time.

**Using AI to look for pain**

Working with sports medicine physicians at Prisma Health, South Carolina’s largest health system next to Clemson University, Wang’s team has been using ultrasound to examine pain in the upper back and more recently the Achilles tendon, where injuries like worn or torn tendons are common. 

"Initially, we used traditional image processing techniques to analyze ultrasound scans of muscle tissues, searching for patterns that could link to the subject's pain,” said Benjamin Formby, who focuses on the machine learning and image analysis aspects of the research. “But we soon realized that machine learning could offer far more promising results."

Using Clemson’s high performance computing cluster, Formby developed a machine learning algorithm that pinpoints injury sites in tendons imaged with ultrasound. After testing the algorithm using an ultrasound machine connected to a local server that stored the images, the researchers linked the ultrasound system to the FABRIC testbed to enable analysis of live ultrasound scans and real-time predictions.

Because this application would potentially be used by many doctor's offices simultaneously, the researchers had to consider both the amount of data that the network can handle and what processing resources are needed, including CPUs as well as the GPUs required for image processing with machine learning. 

Although FABRIC contains GPUs, it does not have the large number of GPUs needed for this type of intensive image data analysis. After considering several options, the researchers decided to connect FABRIC to the cloud-based [Chameleon testbed](https://www.chameleoncloud.org/) using a facility port at the Chameleon site at TACC. With this setup, the researchers were able to extend the machine learning algorithms from Clemson’s high performance computing resources to Chameleon and directly link their imaging lab to seamlessly integrate real-time ultrasound machine data into the FABRIC experiment. 

“FABRIC provided the distributed network necessary to run this type of testing without having to physically build a network from scratch, which would have been very time-consuming,” said Acheme Acheme, who focuses on the system-level aspects of the project. “FABRIC provides not only the network capacity to do this but also the geographic distribution of network resources to simulate how the traffic would behave in real-world implementation.” 

**Pinpointing bottlenecks**

For one of their first experiments, the researchers used several data streams to look at the network constraints in terms of the bandwidth used. From this, they realized that the bottleneck wasn't necessarily in the network, but instead in how quickly they could process the frames from the video images for machine learning, which is a frame-by-frame process. 

Based on these findings, the researchers are exploring ways to determine which frames the algorithm needs to make inferences so that unnecessary frames can be removed before they are passed on to the network. This would limit the number of frames sent over the network, improving machine learning performance.

The researchers said that FABRIC's resource reservation feature was useful for scheduling experiments while its Measurement Framework Library (MFLib) was crucial for tracking resource usage and performance. 

**Looking to the future**

The team's current proof of concept is promising but more data is needed to ensure the approach can effectively serve a large population and support pain diagnosis across a broad array of patients and conditions. The researchers point out that a key challenge when applying AI in healthcare is the fact that it doesn't always offer clear insights into why failures occur. To address this, they are analyzing different layers of the data and various computing processes to identify evidence that can be used to trace where issues occur. 

Wang notes that a lack of familiarity with emerging processing capabilities can hinder the medical community’s pursuit of advanced treatment solutions like this. However, recent demonstrations from his group showing how nationwide computing resources could enhance medical workflows have sparked excitement about the potential for this technology to be commercialized in the future.
