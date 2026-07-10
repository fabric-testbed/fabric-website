---
title: "FABRIC Tips &amp; Tricks: Debugging Smarter with CREASE"
date: "2026-04-20"
type: "blog"
category: "announcements"
excerpt: "Published: April 20, 2026"
author: "Chelsea Davis"
date_modified: "2026-04-20"
wp_id: 9694
views: 281
tags:
  - blog
  - tips and tricks
---

Published: April 20, 2026

On a research testbed as powerful and flexible as FABRIC, experimentation and iteration are the norm. New protocols, evolving topologies, programmable switches, and distributed workflows are constantly in motion. When something breaks in a complex network experiment, however, identifying _where_ and _why_ it failed can quickly become a time-consuming part of the research process.

[CREASE is a research-driven debugging tool](https://crease.cs.iit.edu/) designed to dramatically ease the process.

Developed by Alexander Wolosewicz and Nik Sultana at Illinois Institute of Technology as part of a larger collaboration that involves researchers at SRI and at Georgetown University, CREASE provides FABRIC users visibility into their experiments, without drowning in data or manually logging into every node.

As Alexander, PhD student in networking and security explains, “CREASE is a tool that makes it very easy to take your FABRIC experiment topology and monitor traffic in certain parts of it. After you do some experiments, you can go to the data it monitored and answer questions like: Why did something happen? Why did traffic not get to where it was expected?”

In other words, CREASE gives researchers a focused lens into network behavior exactly when and where they need it.

* * *

### **Why Debugging on Research Networks Is Different**

In production environments, systems are expected to be stable. In research, instability is part of the process. As Nik notes, “People are typically running research prototypes on FABRIC. Those research prototypes are constantly evolving. And for most of their existence, while they're being developed, those research prototypes are faulty—until they're ready.”

That reality underscores the need for built-in observability. When experimenting with distributed systems, programmable data planes, or new routing logic, failures are not exceptions; they are signals. The faster researchers can interpret those signals, the faster they can iterate.

CREASE was built with that workflow in mind.

* * *

### **From Manual Debugging to One Line of Python**

Before building CREASE, Alexander relied on traditional debugging methods: SSHing into multiple nodes, manually running packet captures, coordinating trace collection, and re-triggering traffic to reproduce bugs.

That approach works but it does not scale.

“The goal of the tool is to reduce the effort required,” Alexander explains. Instead of manually stitching together traces from multiple components, CREASE integrates into a FABRIC topology and collects the necessary monitoring data automatically.

In a [controlled user study](https://artifacts.fabric-testbed.net/artifacts/5862b301-9c7f-4d11-b995-e0751dca0a64) presented at CSET 2025 (Cyber Security Experimentation and Test), researchers evaluated how effectively CREASE improved debugging workflows. Participants with varying levels of experience were divided into two groups: one using CREASE and one using traditional methods. For users with moderate experience on FABRIC, the difference was striking: once familiar with the tool, they could debug it in a single line of Python code. For complex network experiments, that reduction in friction can translate directly into faster research cycles.The CREASE team also presented their work at KNIT 11. [Click here](https://crease.cs.iit.edu/knit11/tutorial.mp4) to view a tutorial video.

* * *

### **A Real-World Use Case: Debugging P4 and Tofino Experiments**

CREASE is particularly powerful in experiments involving programmable data planes, such as those written in P4. P4 allows researchers to define how network devices process packets, enabling experimentation with new protocols, telemetry mechanisms, or in-network computation.

But programmability introduces complexity and bugs.

“If I have multiple P4 devices,” Alexander explains, “which is the one introducing the bug? Where is that happening?”

This becomes especially important when working with hardware switches such as Tofino devices available on FABRIC. Unlike virtual machines, users cannot simply log into a hardware switch and run packet captures.

“I can’t go into a Tofino and start running packet captures on it,” Alexander says. “And this tool allows me to get that granularity, though, to see what’s going in and what’s going out.”

CREASE provides that external visibility, helping researchers isolate where packet loss, corruption, or unexpected behavior occurs—even in complex, multi-path topologies.

* * *

### **Tips for Getting the Most Out of CREASE**

As a research prototype, CREASE is powerful but evolving. The team has produced tutorial artifacts and onboarding materials, including step-by-step Jupyter Notebook examples that demonstrate how to deploy the tool, collect data, and interpret results.

One practical tip from Alexander: always begin with a known event window.

“When you have some notion of when it occurred, then with all the information the tool gathered, you can say, ‘Hey, this is the time range something went wrong, show me what you looked at.’”

Because network captures can generate large volumes of data, narrowing analysis to a specific time range dramatically improves efficiency. Rather than combing through extensive logs, researchers can zero in on the exact moment a packet was lost or misrouted.

Another important reminder: CREASE is open source and extensible. While it works across general use cases, it remains a research artifact. That openness creates opportunity—users can adapt or extend it for specialized workflows.

* * *

### **Integration into the FABRIC Ecosystem**

Currently, CREASE can be added to a FABRIC environment by cloning the associated repository and patching it into the FABRIC Python library within a notebook workflow. However, the team is actively collaborating with FABRIC developers to reduce friction even further.

As Nik describes, the goal is to integrate CREASE directly into the core FABRIC library so that “from the get-go, everybody has access to this, and we’ll be able to have less friction in utilizing its features.”

If integration proceeds as expected, users will eventually have CREASE capabilities available out of the box—no additional installation steps required.

Nik also emphasizes how important FABRIC’s openness has been to this effort: “FABRIC is designed in order to facilitate deployment of user-generated tools. That’s why we, as FABRIC users, can build and run these things.” The collaborative ecosystem enables tools like CREASE to move from research concept to community resource.

* * *

### **Need Help? Reach Out.**

The CREASE team welcomes feedback and questions. The [tutorial artifacts](https://crease.cs.iit.edu/) include contact information, and researchers can reach out directly by email to discuss use cases, troubleshooting, or potential extensions.

As Alexander reflects, “It’s been great, the collaboration we’ve been able to have with the FABRIC teams. That collaborative spirit extends to the broader research community.”

If you are running evolving prototypes, experimenting with programmable networking, or simply tired of manually tracing packet paths across nodes, CREASE offers a smarter way to debug on FABRIC. And in research, saving time on debugging means spending more time discovering.
