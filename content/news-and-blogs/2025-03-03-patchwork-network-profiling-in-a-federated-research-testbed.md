---
title: "Patchwork: Network Profiling in a Federated Research Testbed"
date: "2025-03-03"
type: "blog"
category: "announcements"
excerpt: "_Check out Nik Sultana’s recording from the CI Engineering Lunch & Learn Series_"
author: "Jayasree Jaganatha"
date_modified: "2025-05-13"
wp_id: 8487
views: 614
tags:
  - announcement
  - blog
---

_Check out Nik Sultana’s recording from the CI Engineering Lunch & Learn Series_  

https://www.youtube.com/watch?v=XxcWgsdWJEY

This talk from Nik Sultana describes Patchwork, a network profiler for the state-of-the-art FABRIC network testbed. The profiler has two use cases: (1) for FABRIC users to create experiment-level profiles that describe how their experiment uses the network, and (2) to create a testbed-wide profile of FABRIC’s data plane that describes how FABRIC’s users are collectively using the network. Patchwork itself runs as an experiment on FABRIC, and does not require modifications to the testbed.

The talk will cover the design, implementation, and evaluation of Patchwork. The profiler’s design had to be carefully customized for a federated testbed environment. For scalability, Patchwork offloads logic to Alveo FPGA NICs and uses DPDK on FABRIC VMs. Furthermore, Patchwork makes use of FABRIC’s MFlib to heuristically guide the profiler’s sampling of switch ports.

Patchwork has been under development for around 18 months and has been running on FABRIC for over a year. The talk will describe a network profile of FABRIC that was produced using Patchwork during this past year. The team who built Patchwork includes Nishanth Shyamkumar, Hyunsuk Bang, Bjoern Sagstad, Prajwal Venkateshmurthy, and Sean Cummings.

Learn more about the [CI Engineering Lunch and Learn Series](https://www.es.net/science-engagement/ci-engineering-lunch-and-learn-series/).
