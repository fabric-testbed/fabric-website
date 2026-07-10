---
title: P4 Programmable Data Plane Switches (BMv2) over FABRIC
slug: p4-programmable-data-plane-switches-bmv2-over-fabric
date: "2023-08-15"
date_modified: "2023-08-15"
author: Ilya Baldin
status: publish
wp_id: 5016
views: 1720
categories:
  - Programmable Networking
---

Traditionally, the data plane has been designed with fixed functions to forward packets using a small set of protocols (e.g., IP, Ethernet). This closed-design paradigm has limited the capability of the switches to proprietary implementations which are hard-coded by vendors. Recently, data plane programmability has attracted significant attention from both the research community and the industry, permitting programmers to run customized packet processing functions in the data plane.

The Cyberinfrastructure Lab (CILab) at the University of South Carolina (USC) has developed step-by-step hands-on lab experiments on data plane programming using the P4 language. The labs use the Behavioral Model version 2 (BMv2) as the software switch. Topics include fundamentals of P4, P4 building blocks, parser implementation in the data plane, populating match-action tables, and others. The learner will acquire expertise to create, test, and deploy P4 applications on custom topologies in FABRIC.

The [lab library](https://github.com/fabric-testbed/jupyter-examples/tree/main/fabric_examples/complex_recipes/p4_labs_bmv2/main.ipynb) consists of the following experiments:

-   [Lab 1](https://github.com/fabric-testbed/jupyter-examples/tree/main/fabric_examples/complex_recipes/p4_labs_bmv2/lab1_creating_a_slice_with_a_P4_switch.ipynb) - Creating a Slice with a P4 Switch: This lab describes how to create a slice with a P4 switch. It also shows how to deploy the high-performance BMv2 switch to achieve up to ~1Gbps throughput.
-   [Lab 2](https://github.com/fabric-testbed/jupyter-examples/tree/main/fabric_examples/complex_recipes/complex_recipes/p4_labs_bmv2/lab2_P4_program_building_blocks.ipynb) - P4 Program Building Blocks: This lab describes the building blocks and the general structure of a P4 program. It maps the program’s components to the Protocol-Independent Switching Architecture (PISA).
-   [Lab 3](https://github.com/fabric-testbed/jupyter-examples/tree/main/fabric_examples/complex_recipes/p4_labs_bmv2/lab3_parser_implementation.ipynb) - Parser Implementation: This lab describes how to define custom headers in a P4 program. It then explains how to implement a simple parser that parses the defined headers.
-   [Lab 4](https://github.com/fabric-testbed/jupyter-examples/tree/main/fabric_examples/complex_recipes/p4_labs_bmv2/lab4_introduction_to_match-action_tables.ipynb) - Introduction to Match-action Tables: This lab describes match-action tables and how to define them in a P4 program. It then explains the different types of matching that can be performed on keys.
-   [Lab 5](https://github.com/fabric-testbed/jupyter-examples/tree/main/fabric_examples/complex_recipes/p4_labs_bmv2/lab5_populating_and_managing_match-action_tables_at_runtime.ipynb) - Populating and Managing Match-action Tables at Runtime: This lab describes how to populate and manage match-action tables at runtime. It then explains a tool (simple\_switch\_CLI) that is used with the software switch (BMv2) to manage the tables.
-   [Lab 6](https://github.com/fabric-testbed/jupyter-examples/tree/main/fabric_examples/complex_recipes/p4_labs_bmv2/lab6_checksum_recalculation_and_packet_deparsing.ipynb) - Checksum Recalculation and Packet Deparsing: This lab describes how to recompute the checksum of a header. Recomputing the checksum is necessary if the packet header was modified by the P4 program. The lab also describes how a P4 program performs deparsing to emit headers.

More advanced laboratories are being developed, covering topics such as advanced P4 constructs, advanced parsing, stateful processing, data plane/control plane communication protocols, fine-grained measurements, cybersecurity applications, etc. Examples of future laboratories include monitoring queue occupancy, implementing custom protocols with header stacks, sending digests to notify the control plane about custom events, implementing a Denial of Service (DoS) mitigation system, implementing a custom firewall, etc.

**Acknowledgements**

_The P4 documentation and notebooks are provided by The Cyberinfrastructure Lab at the University of South Carolina ([http://ce.sc.edu/cyberinfra](http://ce.sc.edu/cyberinfra)). This work is in part funded by NSF grant #2118311 and ONR grant #N00014-23-1-2245._

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/08/usc-logo.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2023/08/onr-logo.png)
