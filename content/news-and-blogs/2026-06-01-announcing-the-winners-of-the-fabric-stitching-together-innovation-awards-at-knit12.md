---
title: "Announcing the Winners of the FABRIC “Stitching Together Innovation” Awards at KNIT12"
date: "2026-06-01"
type: "blog"
category: "announcements"
excerpt: "Published: June 1, 2026"
author: "Chelsea Davis"
date_modified: "2026-06-01"
wp_id: 9843
views: 188
tags:
  - announcement
  - blog
---

Published: June 1, 2026

The FABRIC team is excited to announce the winners of the FABRIC _Stitching Together Innovation Awards_, recognizing outstanding contributions from the community in advancing research, education, and experimentation on the FABRIC testbed. The awards were announced during the 12th Knowledge Network for Innovations in Testbeds (KNIT12) meeting held in Honolulu, Hawaii. 

These awards celebrate innovative uses of FABRIC across classrooms, large-scale networking experiments, tooling, and research publications demonstrating the power and flexibility of the platform for advancing networking and distributed systems research.

## **Best Classroom Use Award**

### **Nik Sultana**

**Title:** _Using FABRIC to Teach a Range of Courses: Computer Networking, Data Communication, and Parallel and Distributed Computing_

Over the past three years, Nik Sultana has demonstrated an exceptional commitment to integrating FABRIC into the classroom through teaching demos, assignments, projects, and outreach activities. His work showcases how FABRIC can support hands-on experiential learning across multiple domains of computer science and networking education.

Courses leveraging FABRIC included computer networking, data communication, and parallel and distributed computing, with students using the platform throughout the semester for experimentation and applied learning.

Examples of course implementations include:

-   [CS 595 Fall 2023 Course Materials](http://www.cs.iit.edu/~nsultana1/teaching/F23CS595/?utm_source=chatgpt.com)
-   [CS 542 Spring 2024 Course Materials](http://www.cs.iit.edu/~nsultana1/teaching/S24CS542/?utm_source=chatgpt.com)
-   [CS 542 Spring 2025 Course Materials](http://www.cs.iit.edu/~nsultana1/teaching/S25CS542/?utm_source=chatgpt.com)
-   [CS 455 Fall 2025 Course Materials](http://www.cs.iit.edu/~nsultana1/teaching/F25CS455/?utm_source=chatgpt.com)
-   [CS 451 Spring 2026 Course Materials](http://www.cs.iit.edu/~nsultana1/teaching/S26CS451/?utm_source=chatgpt.com)

An additional example highlighting how FABRIC can incubate classroom-driven research can be found here:

-   [CREASE Research Blog Example](https://crease.cs.iit.edu/blog3.html?utm_source=chatgpt.com)

## **Best Experiment Award**

### **Mazahir Hussain**

**Title:** _SENSE in Practice: Quantifying the End-to-End Benefits of Intent-Based Bandwidth Reservation for Exascale Science Workflows_

This award recognizes groundbreaking experimentation demonstrating how FABRIC can be integrated into global research infrastructures to support next-generation scientific workflows.

The project evaluated the SENSE (Software-Defined Network for End-to-end Networked Science at the Exascale) paradigm, enabling science applications to treat the network as a “first-class schedulable resource.” By integrating FABRIC with infrastructures including GNA-G AutoGOLE and the National Research Platform (NRP), the team demonstrated successful intent-based multi-domain network provisioning with guaranteed bandwidth reservations.

The experiments quantified how deterministic reservations enable high-priority scientific data flows to complete significantly faster than traditional best-effort networking approaches — an important advancement for exascale science applications such as Large Hadron Collider CMS workflows.

The work utilized the NSF-funded FABRIC infrastructure as a core component of the MIST (Multi-Infrastructure SENSE Testbed).

**Citation:**Inder Monga, Mazahir Hussain, Justas Balcas, Aashay Arora, Diego Davila, Buseung Cho, Xi Yang, and Cees De Laat. _SENSE in Practice: Quantifying the End-to-End Benefits of Intent-Based Bandwidth Reservation for Exascale Science Workflows._ Proceedings of the SC25 Workshops of the International Conference for High Performance Computing, Networking, Storage and Analysis, November 2025.

## **Best Matrix Award**

### **Alexander Wolosewicz** 

**Title:** _A Network Debugger for FABRIC Experiments_

This award highlights the development of a novel tool designed to improve the usability and debugging capabilities available to FABRIC users. The project has contributed tutorials, talks, demonstrations, and posters at previous KNIT meetings while actively engaging with the broader FABRIC community.

This project's tool allows users to more easily detect and diagnose network issues within their topologies. Recently integrated into Fablib, it provides convenient Jupyter commands for adding monitor nodes to virtual topologies and managing them. Traffic observed by monitor nodes is collected in a central database, where it can be queried through Jupyter. The tool allows for localizing errors with much less effort than conventional techniques.

The work represents an important contribution toward improving experiment observability and troubleshooting for researchers using FABRIC for advanced networking experimentation.

## **Best Paper Award**

### **Arash Sarabi and Prateek Jain**

**Title:** _Design and Modeling of a New File Transfer Architecture to Reduce Undetected Errors Evaluated in the FABRIC Testbed_

This award recognizes innovative research addressing the integrity and reliability challenges associated with petabyte-scale scientific data transfers.

The paper introduces the Multi-Level Error Detection (MLED) framework, a configurable recursive architecture that leverages in-network resources to reduce undetected error probability during large-scale file transmission. Through experiments conducted on the FABRIC testbed, the researchers demonstrated that MLED can detect and correct adversarial transmission errors within the network itself, avoiding costly retransmission of entire files.

Compared to traditional transport- and data-link-layer error detection approaches, the implementation achieved a 100% gain in goodput under non-zero error rates while sustaining throughput exceeding 800 Mbps on a single connection without appreciable delay increases.

**FABRIC Project ID:** ASU-BU-MLED-Project

**Citation:**Prateek Jain, Arash Sarabi, Abraham Matta, and Violet R. Syrotiuk. _Design and Modeling of a New File Transfer Architecture to Reduce Undetected Errors Evaluated in the FABRIC Testbed._ Proceedings of the ACM on Measurement and Analysis of Computing Systems, Volume 9, Issue 2, SIGMETRICS June 2025.

## **Celebrating Innovation Across the FABRIC Community**

The FABRIC community continues to demonstrate how advanced programmable infrastructure can accelerate innovation across education, networking research, distributed systems experimentation, and scientific computing. From empowering students in the classroom to enabling exascale science workflows and advancing reliable data transfer architectures, this year’s award winners exemplify the breadth and impact of research being conducted on FABRIC.

Congratulations again to all of the award recipients recognized at KNIT12 in Honolulu.
