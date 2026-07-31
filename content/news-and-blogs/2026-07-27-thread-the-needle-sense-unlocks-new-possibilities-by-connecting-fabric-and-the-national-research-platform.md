---
title: "Thread the Needle: SENSE Unlocks New Possibilities by Connecting FABRIC and the National Research Platform"
date: "2026-07-27"
type: "blog"
category: "thread the needle"
excerpt: "Through the Department of Energy's SENSE software, researchers can now seamlessly access the best capabilities of both FABRIC and the National Research Platform, turning separate platforms into one research environment."
tags:
  - blog
  - thread the needle
---

Modern scientific research rarely happens in one place. Data is collected across institutions, AI models run on specialized hardware, and experiments increasingly rely on geographically distributed resources. While platforms like FABRIC and the National Research Platform (NRP) each provide powerful capabilities, researchers have traditionally had to choose between them, or spend significant effort stitching them together.

Through the Department of Energy's SENSE software, that is beginning to change.

For Mohammad Sada, an engineer at the San Diego Supercomputer Center (SDSC), the goal isn't simply connecting two cyberinfrastructure platforms. It's enabling researchers to seamlessly access the best capabilities of both.

## Turning Separate Platforms into One Research Environment

With FABRIC and NRP deployed at many of the same research sites across the country, there is an opportunity to integrate the two national research infrastructures into a single experimental environment.

"The main interest here is combining both environments in one experiment," Sada said. "Each one of these environments has different resources and different characteristics to offer." FABRIC gives researchers programmable networking and a flexible testbed where they can experiment freely. NRP complements those capabilities with large GPU resources, AI infrastructure, and additional specialized hardware. Rather than forcing researchers to decide which platform best fits their needs, SENSE enables them to use both simultaneously.

## SENSE: The Glue That Makes It Possible

SENSE, developed by ESnet, provisions high-performance network connections between distributed research resources. Sada describes its role simply: "It's the glue that holds it all together."

Without SENSE, connections between research platforms are often static or limited to specific locations. With SENSE, researchers can dynamically connect resources wherever they are deployed. "You can connect your FABRIC experiment in Chicago to your NRP experiment in San Diego—or connect your FABRIC experiment in Chicago to five different NRP locations at the same time." Instead of thinking about where resources are located, researchers can focus on selecting the capabilities they need.

## Empowering New Scientific Workflows

The real impact of SENSE isn't the networking itself. It's what the networking enables. Researchers can generate large volumes of data on FABRIC's programmable networking infrastructure while simultaneously using NRP's GPU clusters to perform AI and machine learning analysis. Specialized hardware available on each platform, including different FPGA architectures and programmable network devices, can be incorporated into the same experiment.

For users, the transition between infrastructures is virtually invisible. That abstraction allows researchers to build more sophisticated experiments without adding complexity to their workflows.

## From Infrastructure to Research

Beyond networking individual resources, SENSE also enables higher-level orchestration tools. Working with FABRIC and ESnet, Sada helped integrate Kubernetes across FABRIC and NRP so researchers can launch distributed computing environments with a single workflow. Automated notebooks provision networking, deploy compute resources, and create a unified Kubernetes cluster spanning both infrastructures. Instead of managing multiple systems, researchers interact with what appears to be a single computing environment. "The end result is one API they talk to. They schedule jobs, write to persistent storage, and everything is abstracted for them."

## Building the Future of Distributed Science

As AI, advanced networking, and large-scale computing continue to shape scientific discovery, researchers increasingly need access to diverse resources that no single platform can provide alone. Bridging FABRIC and NRP with SENSE demonstrates how national cyberinfrastructure can evolve into a connected ecosystem—one where researchers combine the strengths of multiple platforms through simple, automated workflows.

That's the promise of SENSE—not just connecting infrastructure, but empowering researchers to build larger, smarter, and more capable scientific experiments than any single platform could support alone.
