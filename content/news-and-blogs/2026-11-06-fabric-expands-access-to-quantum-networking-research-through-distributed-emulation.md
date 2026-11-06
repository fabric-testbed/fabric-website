---
title: FABRIC Expands Access to Quantum Networking Research Through Distributed
  Emulation
date: 2026-11-06
type: news
category: announcements
excerpt: FABRIC has adapted the SeQUeNCe quantum network simulator to run across
  multiple nodes on its national research infrastructure. The emulator gives
  students and researchers a way to explore quantum networking—including quantum
  key distribution, entanglement, and network attacks—even while access to
  quantum hardware remains limited.
tags:
  - news
---
New tools let students and researchers experiment with quantum networks on a national testbed

FABRIC, a national programmable research infrastructure, is opening a path for researchers and students to explore quantum networking, even before quantum hardware is widely available.

Quantum computers use qubits rather than ordinary bits, enabling simulations in chemistry, pharmaceuticals, and materials science beyond the reach of conventional machines. Quantum networks are their communication counterpart, distributing entangled photons that stay synchronized across distance to support secure communication, precision sensing, and links between quantum computers.

Federal and state investment is growing: the National Science Foundation funds quantum institutes and hubs, and the Department of Energy is leading a push to scale quantum computing. Since no single quantum computer is likely to be big enough, linking machines through quantum networks is seen as a key step.

Yet quantum network hardware remains limited, leaving most students and researchers unable to see how these networks behave. FABRIC is helping fill that gap through software emulation.

Most quantum network simulators, including Argonne National Laboratory’s SeQUeNCe, run as a single process on one machine, so they cannot use FABRIC’s distributed resources. FABRIC Senior Research Software Engineer Komal Thareja of RENCI and Northeastern University undergraduate Isaac Boyles adapted SeQUeNCe to run across multiple FABRIC nodes. Simulated endpoints, the “Alice” and “Bob” of quantum communication, run on separate machines connected through a software P4 switch that emulates the quantum link. The classical link is real, so researchers can see how wide-area conditions affect an experiment.

The emulator lets users study quantum key distribution, entanglement, and repeaters, and test attacks such as those that exploit multiple photons in a single pulse. Experiments are available as Jupyter notebooks through FABRIC’s Artifact Manager, and researchers can launch the needed resources with a single click. The emulator experiment has been downloaded more than 100 times since its first release in June. 

“FABRIC is a mechanism to make new technology accessible to students and researchers at a larger scale,” said Kuang-Ching Wang, a FABRIC principal investigator at Binghamton University. “We want people to see quantum as a new paradigm they can get used to, rather than something untouchable.”

Looking ahead, FABRIC plans to extend the emulator onto specialized resources such as FPGAs and BlueField DPUs to bring experiments closer to real hardware. Working with partners in the U.S. and abroad, and guided by community interest, FABRIC will continue to explore how to connect researchers to quantum capabilities, keeping emerging technology within reach as it develops.

About FABRIC

FABRIC is a national research infrastructure that provides programmable, end-to-end resources for researchers to design, deploy, and evaluate new network architectures, protocols, and applications.

Media Contact

FABRIC Project Team

Email: cdavis@renci.org

Website: whatisfabric.net
