---
id: 10
slug: "ejfat-data-movement"
title: "Accelerating Scientific Data Movement with EJFAT"
subtitle: "A new data transport system is using FABRIC to test high-speed, in-network processing for data-intensive science workflows"
image: "/imgs/highlights/ejfat-data-movement.png"
imagePlaceholder: "bg-gradient-to-br from-amber-500 to-yellow-400"
institution: "Jefferson Lab / ESnet"
domain: "Data Transport"
learnMore:
  projectUrl: "https://portal.fabric-testbed.net/experiments/public-projects/bbe0d94c-736b-477a-a2e6-fef9fe7ac9ca"
  artifacts:
    - label: "JIRIAF Worker Setup with FABNetv4Ext"
      url: "https://artifacts.fabric-testbed.net/artifacts/e1771f8d-ca7a-42fc-b6ec-542df83168a8"
researchers:
  - name: "Ilya Baldin"
    title: "Data Fabric Integration Architect"
    institution: "High-Performance Data Facility (HPDF) at DOE Jefferson Lab"
    interests: "High-speed optical network architectures, cross-layer interactions, novel signaling schemes, and network security"
    contact: "https://linkedin.com/in/ilya-baldin-3ab2982"
    photo: "/imgs/testimonials/ilya-baldin.jpg"
---

Modern scientific instruments are generating data at unprecedented rates, overwhelming traditional networks and limiting researchers' ability to move experiment data quickly and reliably. To address this challenge, the ESnetJLab FPGA Accelerated Transport project (EJFAT) is developing a new approach, using programmable hardware to reshape how scientific data travels across networks.

EJFAT focuses on the extreme data volumes produced at U.S. Department of Energy (DOE) facilities. Jefferson Lab, for example, operates one of the world's leading particle accelerator centers, where experiments in nuclear physics generate tightly synchronized detector events reaching up to tens of gigabits per second. These events include waveforms, sensor streams, timing information, and reconstructed particle interaction data — large, complex datasets that must be moved quickly to computing facilities for analysis.

To support this, EJFAT leverages field-programmable gate arrays (FPGAs) to segment large, synchronized detector events into smaller pieces, route them efficiently through the network, and reassemble them at their destination. The FPGAs efficiently balance the workload on individual distributed processing servers, ensuring no data losses. This method reduces bottlenecks and supports very high Terabit-per-second throughput, enabling scientific workflows dependent on rapid access to massive datasets.

"Scientific instruments are producing more data than traditional systems can handle," says Ilya Baldin, one of EJFAT project contributors, who currently works on DOE's High-Performance Data Facility (HPDF). "EJFAT focuses on moving that data intelligently and at scale so researchers can access their results faster and more reliably."

## Enabling real-time analysis to optimize experiment time

EJFAT's advantage lies in its potential to support real- or near-real-time analysis. Using EJFAT, live scientific data streams are quickly processed by FPGAs, ensuring compute nodes are not overwhelmed while delivering meaningful results to researchers. Because the system moves data rapidly and continuously, researchers can process detector output as an experiment runs. This allows teams to identify issues early, adjust configurations immediately, and make the most efficient use of limited beam time.

"Being able to see results during an experiment, rather than days or weeks later, changes how facilities operate," explained Baldin. "It helps ensure that every hour of experiment time is used as effectively as possible."

## Testing next-generation data transport on FABRIC

To evaluate EJFAT at a realistic national scale, the team required an environment with in-network programmable hardware, high-capacity networking, and end-to-end configurability. FABRIC's nationwide testbed infrastructure provides exactly the capabilities needed for rapid development and rigorous experimentation.

FABRIC's programmable FPGA support allows researchers to test EJFAT at scale, including running the EJFAT-programmed FPGAs as part of a FABRIC experiment. Its high-bandwidth connections to ESnet (ranging from 100 to 400 Gbps) enable experiments that mirror real DOE data transfer patterns. The testbed's distributed, reconfigurable topology also enables emulating multi-site scientific workflows under realistic latency and load.

Baldin explained, "FABRIC gives us the flexibility to test advanced routing and data-handling strategies without impacting production networks. It allows us to validate performance at the scale required by DOE facilities."

## Building toward broader deployment

Early results show that EJFAT can support sustained high-speed transfers into compute systems, with the potential to reach hundreds of gigabits per second by scaling out clients. These promising findings are informing next steps focused on production readiness and expanded scientific use.

The team is working toward wider adoption across DOE laboratories, integration with AI-driven analysis pipelines, and improved robustness across multi-site scientific environments. This includes exploring how EJFAT can feed machine learning workflows with increasingly raw detector data and evaluating how the system behaves under large, realistic workloads.

"DOE facilities are only going to produce more data," Baldin noted. "By using FABRIC to refine EJFAT now, we're building the foundation for next-generation streaming scientific data management."
