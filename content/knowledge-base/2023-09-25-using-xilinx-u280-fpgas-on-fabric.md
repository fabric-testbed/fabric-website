---
title: Using Xilinx U280 FPGAs on FABRIC
slug: using-xilinx-u280-fpgas-on-fabric
date: "2023-09-25"
date_modified: "2023-12-14"
author: Ilya Baldin
status: publish
wp_id: 5444
views: 1937
categories:
  - Programmable Networking
---

## Overview

FPGAs provide an unprecedented level of programmability and can be used both as compute and network accelerators. FABRIC has 23 Xilinx U280 FPGAs deployed in its production footprint and one in the development ring. They are always deployed one per site.

FPGAs can be linked together or to other components, e.g. SmartNICs using FABRIC network services to create complex topologies. FPGAs can be used as 'bump-in-fiber' measurement points or as intelligent NICs or as switches.

Besides native programming, FABRIC FPGAs support P4 programming workflows, which allow to go directly from a P4 program to a bitfile without specialized knowledge of VHDL.

FABRIC supports both [XRT](https://www.xilinx.com/products/design-tools/vitis/xrt.html) and [ONS](https://github.com/Xilinx/open-nic-shell) shells. FPGAs in FABRIC are passed into VMs as PCI pass-through devices, like all other components. All PCI functions presented by the FPGA bitcode to the host are passed into the VM generally without IOMMU support. In addition JTAG-over-USB interface is passed in as an XHCI/USB-3.0 device into the VM allowing for safe reprogamming of the devices.

## How to use FPGAs in FABRIC

It is important to note that FABRIC is meant to be the place to deploy complex FPGA topologies. It is not suited, however, for initial development of FPGA codes. Since FABRIC does not provide bare-metal server access (rather PCI passthrough to VM on a server shared with other experimenters) and the initial development typically requires reboots of the underlying server hardware, it is not possible to perform this type of development on FABRIC - it must be done elsewhere - in the lab or on other testbeds that provide bare-metal access.  
  
Once the initial bitfile is developed outside of FABRIC that sets up FPGA PCI interface (PCI functions and BARs) further updates to the FPGA business logic that don't impact the PCI interface can be performed and tested in FABRIC.

The process of using FPGAs in FABRIC begins with creating and compiling the initial bitfile that sets up the PCI interface for the FPGA application and some initial logic. This bitfile is passed on to the FABRIC team along with instructions on how to preflash an FPGA with the provided file.

FABRIC operations team pre-flashes the FPGAs at the sites indicated by the experimenter and they are then free to allocate the FPGAs on those sites, update and test their bitfile and perform the experiments.

## Creating and compiling the initial bitfile

This step requires licensed tools from Xilinx and access to an FPGA. Experimenters can choose to sign up with XUP ([Xilinx/AMD University Program](https://www.amd.com/en/corporate/university-program.html)) program and request donations of the needed tool licenses and an FPGA or they can use one of the following existing facilities that provide access to those:

| Testbed | Features provided | | --- | --- | | OCT | Provides access to U280 FPGAs on bare-metal and a licensed Vivado build environment sufficient for P4 development. \[how to get an account and build applications\] | | NRP/Nautilus | Provides access to U55C FPGAs via Docker containers and a Vivado build environment, but experimenters are responsible for providing their own licenses. | | Chameleon | Provides access to U280 FPGAs on bare-metal with no development environment. | | CloudLab | Provides access to bare-metal U280 FPGAs with no development environment. Note that to our knowledge the JTAG-over-USB is not connected making them unsuited for ESnet P4 development workflow. | \*US-based testbeds providing access to FPGAs\*

Specific to P4 Workflows described below we provide [the following advisory article](https://learn.fabric-testbed.net/knowledge-base/building-a-xilinx-licensed-toolchain/) that describes how to setup your own licensed Xilinx Vivado toolchain.

FABRIC does not provide access to licensed Xilinx tools.

## Using P4 Workflows on FABRIC

FABRIC team worked with engineers from ESnet and researchers from NEU to develop FABRIC-compatible workflows that allow experimenters to produce bitfiles based on P4 code. The following articles describe each individual workflow:

-   [ESnet P4 Workflow](https://learn.fabric-testbed.net/knowledge-base/using-esnet-p4-workflow-on-fabric/)
-   [NEU P4 Workflow](https://learn.fabric-testbed.net/knowledge-base/using-neu-p4-workflow-on-fabric/)

P4 workflows rely on [OpenNIC Shell](https://github.com/Xilinx/open-nic-shell) (ONS).

## Deploying your bitfile on FABRIC

Once you have created the initial bitfile or bitfile artifact (depending on the workflow) you are ready to request access to FPGAs in FABRIC. Once the initial pre-flashing is done by the FABRIC team, you can freely update the bitfile in memory yourself as long as the PCI interface remains the same.

Fill out [the following form](https://fabric-testbed.atlassian.net/servicedesk/customer/portal/2/group/12/create/63) to gain access to FPGAs.

## Getting Help

We created a [specialized forum](https://learn.fabric-testbed.net/forums/forum/all-about-fpgas/) for discussions specific to the use of FPGAs in FABRIC, which is watched by representatives of different teams who can provide help and feedback.
