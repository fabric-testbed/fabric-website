---
title: FABRIC Testbed Release 1.3
slug: fabric-testbed-release-1-3
date: "2022-08-30"
date_modified: "2025-08-14"
author: Ilya Baldin
status: publish
wp_id: 2690
views: 1418
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

Release date 08/30/2022

## Major Changes

This is a major update to 1.2 capabilities. The enhancements include:

-   Some of the previously separate back-end services have been coalesced into a single CoreAPI service. The service has been enhanced to support a richer set of options related to customizing information about projects and people shown through the Portal.
-   With CoreAPI enhancements the portal now:
    -   Allows users to edit their profile - add their bio, title, personal website, indicate personal pronouns.
    -   Projects can have Public flag set on them by creators and owners which makes their information visible to other users of the testbed
    -   Has convenient pointers to help documentation and service portal to address requests like Project Permissions, Account Problems, Storage Allocation and so on
-   The token management has been moved fully into a standalone Credential Manager service (still reachable via the Portal) to allow multiple concurrent tokens to exist more easily
-   There are new Control Framework capabilities:
    -   To request large external storage volumes that experimenters can attach to their slices as components of VMs. The volumes persist beyond slice lifetimes and are good for storing large volumes of reusable data for a long term. You will find the button to request storage in your Project view.
    -   Slice modify capabilities - slices can now be modified after creation to add VMs and network services under certain conditions. This is a limited functionality release and the full-featured modify capability will become available in Release 1.4
    -   Note that we have modified the set of [VM flavors available at sites](https://learn.fabric-testbed.net/knowledge-base/how-vms-are-sized-in-fabric/) to make them more granular, so that they will more closely approximate what you are requesting. You may see differences in your experiments because the allocated VMs may look different from the ones used in 1.2
    -   There will be an updated release of [FABlib](https://learn.fabric-testbed.net/knowledge-base/fablib-api/) and Jupyter notebooks that helps experimenters take advantage of these new capabilities
    -   Documentation will be forthcoming as part of FABlib update to support these features.
-   User-facing [MFlib (Measurement Framework library)](https://learn.fabric-testbed.net/knowledge-base/mflib-overview/) is now available that allows experimenters to 'instrumentize' the slice by automatically adding necessary elements and configuring the software to have in-slice Prometheus and ELK with graphical dashboards. It measures many of the metrics commonly needed by experimenters. Dashboards can even be linked to Jupyter notebooks! It is integrated into the Jupyter notebooks and the documentation is available.

## Packages and Components

### Control Framework

| Control Framework Core | Multiple bug fixes and usability improvements. | | --- | --- | | Orchestrator | - Support for Storage components- Support for modify | | Broker | - Support for Storage components- Support for modify | | Site Aggregate Manager | - Support for Storage components- Support for modify | | Network Aggregate Manager | - No updates |

### FIM (FABRIC Information Model) and User APIs

| Basic resource descriptions | Support for slice modify, diff-ying slice models to determine the scope of modifications | | --- | --- | | FABlib | Ongoing development of FABlib covering the current capabilities of the Control Framework. |

### JupyterHub

| Federated Identity | Stability improvements | | --- | --- | | Storage | N/A |

### Portal and System Services

| Portal | Integrated with CoreAPI Service, Updated User and Project Profiles, Improved Slice Builder usability | | --- | --- | | CoreAPI | Replaced Project Registry and User Information Service | | Credential Manager | Added a flask support so it can be a standalone graphical service matched to the Portal |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | FABlib enhancements to support latest features | Ongoing | | Experiment notebook sharing in the portal | 1.4, Fall 2022 | | Linking experiments and publications through the portal | 1.4, Fall 2022 | | Programmatic support to expose FABNet slices to the public Internet | 1.4, Fall 2022 | | Initial public cloud integration via CloudConnect service | 1.4, Fall 2022 | | Advance reservation support | 1.5, Spring 2023 | | Full ability to modify slices after creation | 1.4, Fall 2022 | | Ability to manage available compute images | 1.5, Spring 2023 | | Support for FPGAs and P4-to-FPGA tool workflows | TBD, Spring 2023 | | Support for Tofino P4 switches | TBD, Spring 2023 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
