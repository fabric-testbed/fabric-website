---
title: Getting Started on Programmable Networking Experiments on FABRIC
slug: getting-started-on-programmable-networking-experiments-on-fabric
date: "2025-09-12"
date_modified: "2025-09-12"
author: Cong Wang
status: draft
wp_id: 8906
views: 1
categories:
  - Programmable Networking
---

P4 is a powerful tool for enabling a programmable network data plane. The **FABRIC testbed** provides **P4 Tofino switches** and **Alveo FPGA-based SmartNICs** to support your experimental needs. This guide lists key resources—including blog posts, artifacts, and labs—to help you quickly get started with **P4, DPDK, and INT experiments on FABRIC**.

## 1\. **P4 Experiments with BMv2 Virtual Switches**

### 1.1 BMv2 Labs

The Behavioral Model (BMv2) is a software-based P4 switch that can turn any Linux node into a P4 router. A set of Jupyter notebook labs is available to introduce P4 programming with BMv2 programmable switches.

🔗 [Technical Guide](https://learn.fabric-testbed.net/knowledge-base/p4-programmable-data-plane-switches-bmv2-over-fabric/)  
🔗 [BMv2 Labs Artifact](https://artifacts.fabric-testbed.net/artifacts/a576d727-3360-4fa1-8313-a1828433ba9f)

**Labs included (6 total):**

-   **Lab 1:** Create a slice with a P4 switch.
-   **Lab 2:** Configure the experiment slice and explore the components of a basic P4 program.
-   **Lab 3:** Implement a parser.
-   **Lab 4:** Define match-action tables.
-   **Lab 5:** Populate and manage match-action tables at runtime.
-   **Lab 6:** Recompute header checksums and perform packet deparsing.

### 1.1 **Additional BMv2 Examples & In-band Network Telemetry (INT)**

This artifact provides additional BMv2 examples for deploying and testing custom P4 programs with the `simple_switch` architecture.  
It demonstrates **L2 forwarding, L3 IPv4/IPv6 forwarding, and In-band Network Telemetry (INT)**, along with methods to extract and visualize telemetry data.

🔗 [BMv2 + INT Examples Artifact](https://artifacts.fabric-testbed.net/artifacts/a576d727-3360-4fa1-8313-a1828433ba9f)

**Topologies included:**

-   **L2:** Ethernet forwarding
-   **L3-ipv4:** IPv4 forwarding
-   **INT-ipv4:** IPv4 forwarding with INT (packet telemetry)
-   **L3-ipv6:** IPv6 forwarding

## **2\. P4 Experiments with DPDK**

**DPDK** is a software framework for accelerating packet processing in user space.  
FABRIC provides a full set of labs to help you design and run **P4-DPDK programmable pipelines**.

🔗 [P4-DPDK Labs Artifact](https://artifacts.fabric-testbed.net/artifacts/e4cc5ecd-66e8-4c36-9139-de22a7b05e8d)

**Labs included (9 total):**

-   **Lab 1:** Create a slice with a P4-DPDK pipeline.
-   **Lab 2:** Build a single-node P4 program (PNA architecture) compiled into a DPDK pipeline.
-   **Lab 3:** Define custom headers, implement a parser, and track packet parsing states.
-   **Lab 4:** Introduce match-action tables, matching types, and tracking table key hits/misses (Part 1).
-   **Lab 5:** Extend match-action table exploration with additional examples (Part 2).
-   **Lab 6:** Populate/manage match-action tables at runtime using the DPDK pipeline CLI.
-   **Lab 7:** Recompute header checksums and perform deparsing.
-   **Lab 8:** Deploy a multi-site P4-DPDK slice using real hardware NICs.
-   **Lab 9:** Build a DPDK topology with multi-core processing on real NICs.

## 3\. **P4 Tofino Switches**

### 3.1 **with Edgecore Wedge100BF-32X Tofino Switch**

FABRIC also supports experiments on the **Edgecore Wedge100BF-32X switch**, powered by the **Barefoot Tofino ASIC**.  
This artifact provides a Jupyter notebook for deploying and testing custom P4 programs on real Tofino hardware.

🔗 [P4-Tofino Labs Artifact](https://artifacts.fabric-testbed.net/artifacts/674020c0-adb7-42bc-8c29-87c496599bc1)

The experiment uses **two nodes with traffic forwarded through the P4 switch**, allowing communication via a custom P4 program running directly on the Tofino ASIC.

### 3.2 **P4 Tofino Software model**

FABRIC also supports running P4 on CPU using Barefoot’s **Software Development Environment (SDE)** as Tofino software model node without the Tofino ASIC and is useful to validate P4 functionality.

🔗 [P4-Tofino Software Model](https://artifacts.fabric-testbed.net/artifacts/33a32e96-27a4-4eb6-a215-d8ab7162f78e)

The experiment uses a similar **two nodes with traffic forwarded through the P4 switch**, it lets you test and compile Tofino-targeted P4 programs in a controlled, software-only environment, without touching the actual ASIC switch.

## 4\. P4 Experiments with **SmartNIC**s and FPGAs

### 4.1 **Using ESnet P4 SmartNIC framework**

The ESNet P4 workflow guide outlines how to program AMD/Xilinx Alveo FPGA cards—such as the U280 SmartNICs available in FABRIC—using the open-source ESnet P4 workflow. It covers the process from P4 code development to deployment on FABRIC hardware.

🔗 [Using ESnet P4 Workflow on FABRIC](https://learn.fabric-testbed.net/knowledge-base/using-esnet-p4-workflow-on-fabric/)

Development Workflow

-   Write and test P4 programs.
-   Compile them into FPGA bitfiles using Xilinx tools such as Vivado and VitisNetworkingP4.
-   This step is typically performed outside of FABRIC.

Deployment Workflow

-   Load compiled bitfiles onto FPGA cards in FABRIC using Docker containers.
-   Use runtime tools such as:
-   DPDK (high-speed packet processing)
-   pktgen (traffic generation)
-   sn-cli (for inspecting and configuring SmartNIC hardware features)

### 4.2 Using FPGAs for P4 experiments on FABRIC

Another way to run P4 on FABRIC is to use FPGAs. These guides describes how to set up FPGAs on FABRIC or your own server or VM with Xilinx tools.

1\. [Using Xilinx U280 FPGAs on FABRIC](https://learn.fabric-testbed.net/knowledge-base/using-xilinx-u280-fpgas-on-fabric/)

This guide introduces the key capabilities of the Alveo U280 FPGA cards available within the FABRIC testbed. It helps to go through how to incorporate SmartNICs into network experiments—using high-bandwidth on-board memory, programmable logic, and utility in offloading packet processing tasks from the host CPU.

2\. [FPGA Initialization Notebooks for ESnet and NEU Workflows](https://artifacts.fabric-testbed.net/artifacts/3339af84-fa5b-4f54-a915-fbbbfb44226d)

This artifact provides a set of **Jupyter notebooks** and accompanying resources designed to help users correctly initialize and prepare Alveo U280 FPGAs in FABRIC using either the **ESnet** or **NEU** workflows. These initialization steps are critical to ensure that the FPGA is flashed with the proper bitstream and configurations, avoiding residual settings from past experiments that could interfere with your results.

The **ESnet workflow** notebooks guide you through fetching prebuilt Docker images, flashing the FPGA with ESnet’s bitstream, and setting up the network-acceleration stack. The **NEU workflow** does likewise for a clean experimental environment under the NEU configuration.
