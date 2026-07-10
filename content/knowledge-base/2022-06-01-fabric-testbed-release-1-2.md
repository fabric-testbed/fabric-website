---
title: FABRIC Testbed Release 1.2
slug: fabric-testbed-release-1-2
date: "2022-06-01"
date_modified: "2025-08-14"
author: Ilya Baldin
status: publish
wp_id: 1798
views: 1858
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

Release Date 05/28/2022

## Major Changes

This is a major update to 1.1 capabilities. The enhancements include:

-   The portal includes a graphical slice builder that allows experimenters to graphically define their experiment slice topology. This is in addition to the already available graphical slice viewer.
-   Two brand new network capabilities:
    -   Facility Ports - allow to attach FABRIC experiment slices to external facilities. The first facility to become available is Chameleon UC site, other sites (Chameleon TACC, CloudLab Utah) soon to follow.
    -   Mirror Ports - allow experimenters to mirror traffic from the dataplane into their slice on demand.
-   Per-project authorization - starting with this release FABRIC software will enforce per-project permissions on what types of FABRIC features members of the project are allowed to use. A basic project allows to create small VMs with shared NICs and only within a single site. All other features - NVMe, SmartNICs, GPUs, larger VMs, advanced network services, specific Facility Ports must be explicitly allowed by requesting that FABRIC operators add authorization tags to the project.

-   Multiple enhancements for supporting experiment configuration - post-boot scripts, interface configuration.

-   Enhancements to FABlib to support new features in the Control Framework
-   Updated Jupyter Hub notebooks that integrate new enhancements and help you learn how to use them

## Packages and Components

### Control Framework

| Control Framework Core | Multiple bug fixes and usability improvements. | | --- | --- | | Orchestrator | - Support for Facility Ports- Support for Mirror Ports- Support for post-boot scripts and interface configuration | | Broker | - Support for Facility Ports- Support for Mirror Ports | | Site Aggregate Manager | - Support for post-boot scripts and interface configuration | | Network Aggregate Manager | - Support for Facility Ports- Support for Mirror Ports |

### FIM (FABRIC Information Model) and User APIs

| Basic resource descriptions | Multiple fixes and enhancements to support Facility Ports, Mirror Ports, shared storage | | | --- | --- | --- | | FABlib | Ongoing development of FABlib covering the current capabilities of the Control Framework. | |

### JupyterHub

| Federated Identity | Stability improvements | | --- | --- | | Storage | N/A |

### Portal and System Services

| Portal | Graphical Slice Builder, multiple usability enhancements | | --- | --- | | Project Registry | Bug fixes and usability improvements | | User Information Service | None | | Credential Manager | None |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | Transformation of Project Registry and User Information Service into Core API Service, including associated Portal adaptations | 1.3, Summer 2022 | | Independent portal-styled token management app for Credential Manager | 1.3, Summer 2022 | | Ability to attach rotating storage volumes to VMs | 1.3, Summer 2022 | | Ability to collect in-slice measurements | 1.3, Summer 2022 | | FABlib ehnancements to support latest features | Ongoing | | Initial support for personal profiles, public project pages in the portal | 1.3, Summer 2022 | | Experiment notebook sharing in the portal | 1.3, Summer 2022 | | Advance reservation support | 1.4, Fall 2022 | | Ability to modify slices after creation | 1.4, Fall 2022 | | Ability to manage available compute images | 1.4, Fall 2022 | | Support for FPGAs and P4-to-FPGA tool workflows | TBD, Fall 2022 | | Support for Tofino P4 switches | TBD, Fall 2022 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
