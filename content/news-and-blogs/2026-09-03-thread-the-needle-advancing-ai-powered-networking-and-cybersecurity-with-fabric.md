---
title: "Thread the Needle: Advancing AI-Powered Networking and Cybersecurity
  with FABRIC"
date: 2026-09-03
type: blog
category: community
excerpt: As artificial intelligence continues to transform industries, the
  demands placed on modern networks are growing at an unprecedented pace.
  Supporting AI applications requires faster data movement, more intelligent
  infrastructure, and new approaches to processing information at scale. At the
  University of South Carolina, researchers Dr. Elie Kfoury and Dr. Jorge
  Crichigno are leveraging FABRIC to explore how specialized networking hardware
  can help meet these challenges by improving both network performance and
  cybersecurity while preparing infrastructure for the next generation of AI.
tags:
  - blog
  - thread the needle
---
As artificial intelligence continues to transform industries, the demands placed on modern networks are growing at an unprecedented pace. Supporting AI applications requires faster data movement, more intelligent infrastructure, and new approaches to processing information at scale. At the University of South Carolina, researchers Dr. Elie Kfoury and Dr. Jorge Crichigno are leveraging FABRIC to explore how specialized networking hardware can help meet these challenges by improving both network performance and cybersecurity while preparing infrastructure for the next generation of AI.

**Rethinking Network Performance in the Age of AI**

For decades, increases in processor performance allowed researchers to tackle increasingly complex computing problems simply by waiting for the next generation of hardware. That trend has slowed dramatically. Today's AI applications demand far more computational power than traditional processors alone can efficiently provide.

To address this challenge, Kfoury and Crichigno focus on domain-specific accelerators—specialized hardware such as programmable switches and SmartNICs (also known as Data Processing Units or DPUs). Unlike traditional network interface cards, these devices can perform computation directly within the network, enabling data to be processed much closer to where it is generated.

"The role of these accelerators is becoming increasingly important," explained Kfoury. "They're allowing us to move intelligence into the network itself, reducing latency and improving overall performance."

Using these programmable devices, the team develops new techniques that accelerate networking tasks while improving security, allowing decisions to be made faster than would be possible using traditional CPU-based systems.

**Detecting Threats Without Breaking Encryption**

One of the group's primary research areas focuses on one of cybersecurity's biggest modern challenges: identifying malicious activity within encrypted network traffic.

Encryption is essential for protecting user privacy, but it also prevents traditional security tools from inspecting packet contents. Rather than decrypting traffic, the researchers use machine learning models running directly on DPUs to analyze network metadata—such as packet timing, packet sizes, and communication patterns—to distinguish normal traffic from potential malware.

By performing this analysis on specialized hardware instead of general-purpose processors, the system can inspect enormous volumes of network traffic with minimal performance impact.

The approach allows organizations to detect malicious activity in near real time, even when the contents of network traffic remain encrypted. Their work has already received international recognition, including two Best Paper awards at IEEE conferences, namely the IEEE International Black Sea Conference on Communications and Networking (BlackSeaCom) in June 2026 and the IEEE Network Operations and Management Symposium (NOMS) – IPSN Workshop in May 2024, demonstrating both the technical significance and practical impact of their research.

**Making High-Speed Networks Smarter**

The team's work extends beyond cybersecurity into intelligent network management.

Today, nearly all internet traffic is encrypted, making it difficult for network operators to understand how bandwidth is being used. Kfoury and Crichigno are developing machine learning techniques that can identify different application types—such as video conferencing, streaming services, or collaboration platforms—without decrypting user data.

This information can then be used to improve network quality of service, prioritize critical applications, and optimize traffic flow while preserving user privacy.

As network speeds continue increasing from 100 to 200, 400, and even 800 gigabits per second, specialized accelerators become increasingly necessary to process millions of packets every second.

"CPUs alone can no longer keep up with the growing demands of modern AI workloads," said Crichigno. "Accelerators allow us to process data at the speed today's networks require."

**Why FABRIC?**

The research group has been involved with FABRIC almost since the testbed's inception. After first learning about the project during the Annual NSF Campus Cyberinfrastructure PI Workshop in 2019, the team recognized that FABRIC offered something difficult to replicate in a university lab: immediate access to cutting-edge networking hardware deployed across a large-scale research infrastructure.

For Kfoury, one of FABRIC's greatest strengths is reproducibility.

Using Jupyter notebook-based workflows, researchers can define entire experimental environments and recreate them whenever needed. New graduate students can begin working quickly without spending weeks configuring hardware or restoring shared systems to a clean state.

"With FABRIC, we can provision sophisticated networking experiments in minutes," Kfoury said. "If I come back a year later, I can rerun the same notebook and recreate the exact environment."

Beyond ease of use, FABRIC provides access to specialized devices, including programmable switches, SmartNICs, GPUs, that would otherwise be difficult or prohibitively expensive for many research groups to acquire.

**Training the Next Generation of Researchers**

The impact of FABRIC extends well beyond research publications.

Every new graduate student joining the USC research group begins learning on FABRIC, using tutorials and hands-on experimentation to gain experience with advanced networking technologies.

As AI accelerators become increasingly common across research and industry, Kfoury and Crichigno are also developing educational materials that teach students how to program and use these specialized devices effectively.

Their goal is to lower the barrier for future researchers, ensuring more scientists can take advantage of emerging AI infrastructure without needing access to expensive hardware of their own.

**Looking Ahead**

Looking toward the future, the researchers see AI driving nearly every aspect of networking innovation.

Their next phase of work explores how small language models can run directly on DPUs, enabling intelligent decision-making at the network edge while accelerating communication between AI agents. They're also investigating how specialized networking hardware can make large AI training workloads faster, more efficient, and less expensive.

As AI continues reshaping computing, the role of programmable network accelerators will only continue to grow.

By combining advanced hardware, machine learning, and the capabilities of the FABRIC testbed, Kfoury, Crichigno, and their students are helping build the intelligent, secure, and high-performance networks that tomorrow's AI applications will depend on.

![](/imgs/uploads/2026-09-03-ttn-best-paper-blackseacom-2026.jpg "Best Paper Award, IEEE International Black Sea Conference on Communications and Networking, Bucharest, Rumania, June 2026. Award received by Sergio Elizalde, PhD student working under Dr. Elie Kfoury and Dr. Jorge Crichigno.")

![](/imgs/uploads/2026-09-03-ttn-best-paper-noms-2024.jpg "Best Paper Award, IEEE/IFIP NOMS – IPSN Workshop, Seoul, Korea, May 2024. Award received by Dr. Crichigno (center).")

![](/imgs/uploads/2026-09-03-ttn-mscc-annual-meeting-2025.jpg "The Minority Serving – Cyberinfrastructure Consortium (MS-CC) 2025 Annual Meeting, Nashville, Tennessee, May 2025. Dr. Elie Kfoury leading a session on conducting research on DPUs using FABRIC.")
