---
title: "FABRIC Site Hardware Configurations"
date: "2021-10-04"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "Each FABRIC site provides a variety of hardware available to experimenters. This article presents details of the various hardware options used in FABRIC in different phases. It may be useful to FABRIC..."
author: "Ilya Baldin"
date_modified: "2026-01-12"
wp_id: 881
views: 2715
tags:
  - events
---

Each FABRIC site provides a variety of hardware available to experimenters. This article presents details of the various hardware options used in FABRIC in different phases. It may be useful to FABRIC experimenters as well as those who are thinking about purchasing FABRIC-compatible hardware.

## FABRIC Hardware

| Element | Qty | Components/Description | | --- | --- | --- | | Head Node | 1 | Dell R7515- 1x AMD 7532 @2.4Ghz- 128G 3200MT/s RAM- 2x 240GB or 480GB SSD SATA MU- 2x Mellanox ConnectX-5 10/25G (management)- SAS 12Gbps HBA External Controller- 1x Mellanox ConnectX-6 100Gbps (dataplane) | | Storage1 | 1 | Dell EMC ME-4084 Storage Array, 28x12TB 7k SAS drivesorDell EMC ME-4012 or ME-5012 Storage Array 12x16TB 7k SAS drives +Dell EMC ME-412 Expansion Enclosure 12x16TB 7k SAS drivesorFor DC-powered Hanks, the Head Node is equipped with additional storage | | GPU Worker2 | 1+ | Dell R7525- 2x AMD 7532 or 7543 @2.4Ghz- 512G 3200MT/s RAM- 1x Mellanox ConnectX-5 10/25 OCP-3 (management) - 3x NVIDIA RTX-6000 or A30; or 2x NVIDIA A40- 2x 240G or 480GB SSD SATA MU- 2x 1TB Flash SSD NVMe 4- SAS 12Gbps HBA External Controller- 1x Mellanox ConnectX-6 100Gbps (dataplane) | | FastNet Worker | 1+ | Dell R7525 - 2x AMD 7532 or 7543 @ 2.4Ghz- 512G 3200MT/s RAM- 1x Mellanox ConnectX-5 10/25 OCP-3 (management)- 2x 240GB or 480GB SSD SATA- 2x 2.4TB @10K HDD SAS- 4x 1TB U.2 P4510 Flash SSD NVMe 4- 1x Xilinx U280 FPGA (excludes DC-powered Hanks)- 3x Mellanox ConnectX-6 100Gbps | | SlowNet Worker | 1+ | Dell R7525- 2x AMD 7532 or 7543 @ 2.4Ghz- 512G 3200MT/s RAM- 1x Mellanox ConnectX-5 10/25 OCP-3 (management)- 2x Mellanox ConnectX-5 Dual Port 10/25GbE SFP28 (dataplane)- 2x 240GB or 480GB SSD SATA- 2x 2.4TB @10K HDD SAS- 4x 1TB U.2 P4510 Flash SSD NVMe 4- 2x NVIDIA T4 16GB full height (1x in some Hanks)- 1x Mellanox ConnectX-6 100Gbps (dataplane) | | Management Switch | 1 | Dell S4148F- 48x SFP+- 4x 100GbE QSFP28- Dual redundant PSUs- 4x Fan module | | Dataplane Switch | 1 | Cisco 5700 (NCS-57B1-6D24-SYS) | | VPN Device | 1 | Juniper SRX-300- 6xRJ-45 1Gbps, 2xSFP 1Gbpsor(DC-powered Hanks)Juniper SRX-345- 8xRJ-45 1Gbps, 8xSFP 1Gbps | | PTP Server | 1 | Time Machines TM2000B PTP+NTP Server(DC-powered Hanks, or some co-located Hanks, do not have a PTP server) | | PDU3 | 2 | APC AP8865, AP8966 or APDU9966orServerTech Sentry Switched, PRO2 Sentry Switched or PRO3XorSchleifenbauerorSome Hanks have site-specific PDUs | | CAT6A Cables | 15+ | Quantity shown is for minimal configuration with one worker node of each type. See next section. | | 10GbE-SFP+DAC | 10+ | Quantity shown is for minimal configuration with one worker node of each type. See next section. | | 100GbE-QSFP28 DAC | 13+ | Quantity shown is for minimal configuration with one worker node of each type. See next section. | | 100GbE-QSFP28to SFP28 Breakout | 1+ | Quantity shown is for minimal configuration with one worker node of each type. See next section. | | SFP OpticalModules | 2 | At least one module each for the SRX300 and for Dell Management switch for uplink to campus network | | QSFP28 Optical Modules | 1+ | Depends on the number of dataplane uplinks in the topology from the Cisco dataplane switch. | \*Typical FABRIC Hank Hardware\*

1Storage is directly connected to the Head Node and GPU Node(s), except in DC-powered Hanks, where the Head Node functions as a storage server.

2Each site contains one Head Node; the number of each type of Worker Node varies depending on the budget and power constraints. Port counts on management and dataplane switches, as well as PDUs, must be carefully considered.

3 Other PDU options are possible, assuming they respect the overall power and outlet constraints. Switched and monitored (per outlet or at least per bank) PDUs are strongly encouraged. On average, a FABRIC Hank draws about 3.2KW.

4 FABRIC site advertisements report a single model of NVMe drive - a 1TB Intel P4510, however in reality different sites may have other Dell-branded 1TB read-optimized NVMe drives: Toshiba CD5 and CD6, Dell PE8010 and Samsung PM9A3. Currently the aggregate model returned by e.g. `list_sites()` call does not allow you to discriminate or use it as a filter, however [this article](https://learn.fabric-testbed.net/knowledge-base/fabric-nvme-drives/) shows available NVMe models per site.

_Please consult [this article](https://learn.fabric-testbed.net/knowledge-base/fabric-host-configurations-by-site/) for detailed CPU specifications._

## Port/Cable Count Calculations

Port and cable counts depend on the selected quantities of worker nodes as well as which storage option was selected; site-specific variations also occur. This table excludes DC-powered Hanks.

-   S = quantity of SlowNet workers
-   F = quantity of FastNet workers
-   G = quantity of GPU workers
-   W = total workers nodes (S + F + G)

| Outlet/port/cable Type | Formula | Description | | --- | --- | --- | | Power C13 | 7 (ME-4084)or11 (ME-4012/5012 + Expansion) | - 1: SRX- 2: Dell Switch- 2: Cisco Switch- 2: Head node- 0: ME-4084 (see next row)- 4: ME-4012/5012 + ME-412 | | Power C19 | W\*2 + 2 (ME4084)or W\*2 (ME4012 + ME412) | - 2: Each worker node- 2: ME4084- 0: ME4012 + ME412 | | CAT6A | 12+W | - 3: Head node- 1: Each worker node- 1: Each PDU- Remaining cables between management, dataplane switches and the SRX- Each cable requires a 10GBASE-T SFP+ module for the management switch.- 1x 1ft cable, the rest 10ft | | 10GbE-SFP+DAC | 4 + 2\*W | - 4: Head node- 2: Each worker node- 10ft | | 100GbE-QSFP28 DAC | 2+G+9\*F+S | - 2: Head node- 1: GPU Node- 9: FastNet node- 1: SlowNet node- 15ft | | 100GbE-QSFP28 to SFP28 Breakout | S | - 1: SlowNet node- 15ft | \*Port Count Calculations\*

Storage units (ME-4012 or ME-5012, plus ME-412; or, ME-4084) typically come with all necessary SAS cables included if only one GPU node is included.

## FAB Hardware

We try to maintain similarity in hardware across sites; however, some substitutions were necessary due to different hardware generations and COVID-related supply chain issues.

| Site | Description of changes | | --- | --- | | CERN | All workers: AMD CPU substituted for 7542 model with 128M cache instead of 256MGPU node and SlowNet node: RTX6000s and T4s substituted for NVidia A30s | | Bristol | GPU node: 3x RTX6000 are replaced with 3x A30 NVIDIA GPUsSlowNet node: 2x T4 are replaced with 1x A30 NVIDIA GPU | | Amsterdam | GPU node: 3x RTX6000 are replaced with 3x A30 NVIDIA GPUsSlowNet node: 2x T4 are replaced with 1x A30 NVIDIA GPU | | Tokyo | GPU node: 3x RTX6000 are replaced with 3x A30 NVIDIA GPUsSlowNet node: 2x T4 are replaced with 1x A30 NVIDIA GPU | \*Hardware Changes in FAB sites\*
