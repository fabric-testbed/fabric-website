---
title: FABRIC Testbed Release 1.1
slug: fabric-testbed-release-1-1
date: "2022-02-25"
date_modified: "2025-08-14"
author: Ilya Baldin
status: publish
wp_id: 1383
views: 1606
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

Release Date 02/28/2022

## Major Changes

This is a major update to 1.0 capabilities. The enhancements include:

-   The portal includes a graphical slice viewer that helps you display your slices created e.g. in Jupyter Notebooks
-   [Bastion hosts](https://learn.fabric-testbed.net/knowledge-base/logging-into-fabric-vms/) are fully integrated into the infrastructure including the Portal (and required to be used to access VMs)

-   Two brand new L3 network services - an IPv4 and IPv6, to which you can attach your VMs. Unlike on-demand L2 services available before (and in GENI), routing is automatically pre-configured within those and any VM attached to a L3 service at any site can communicate with any VM at any other site - these are are own two private Internets.

-   New FABlib user-facing Python library to help manage your experiment resources. FABlib is more intuitive and easier to use than FABRIC native low-level APIs and abstractions.

-   New VM images for different flavors of operating systems

-   Updated Jupyter Hub notebooks that integrate new enhancements and help you learn how to use them

## Packages and Components

### Control Framework

| Control Framework Core | Multiple bug fixes and usability improvements. | | --- | --- | | Orchestrator | - Multiple Shared NICs can be attached to VMs- Network service behavior for L2 services more stable- Ability to attach VM interfaces to FABRIC IPv4 and IPv6 dataplanes | | Broker | - Multiple bug fixes- Added ability to update ARM models without a clean restart | | Site Aggregate Manager | - Support for rebooting user VMs without losing attachments of individual devices- Added ability to update ARM models without a clean restart | | Network Aggregate Manager | - Support for L3 services (IPv4 and IPv6)- Added ability to update ARM models without a clean restart |

### FIM (FABRIC Information Model) and User APIs

| Basic resource descriptions | Multiple fixes and enhancements to support L3 services, Facility Ports | | | --- | --- | --- | | FABlib | Initial release of FABlib covering the current capabilities of the testbed (ability to create slices with VMs and attached components \[NVMEs, GPUs, Network Cards\]) and attached to available network services. | |

### JupyterHub

| Federated Identity | Stability improvements | | --- | --- | | Storage | N/A |

### Portal and System Services

| Portal | Integration of slice viewer, SSH key management | | --- | --- | | Project Registry | Bug fixes and usability improvements | | User Information Service | Implemented SSH key management | | Credential Manager | Bug fixes and usability improvements |

## Future enhancements

We expect all/most of the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | Facility ports, enabling to create cross-testbed experiments | 1.2, Spring 2022 | | Mirror ports, enabling to snoop on slice traffic | 1.2, Spring 2022 | | Ability to attach rotating storage volumes to VMs | 1.2, Spring 2022 | | FABlib ehnancements to support latest features | 1.2, Spring 2022 | | Per-project authorization for fine-grained authorization control over different types of resources and their allocation | 1.2, Spring 2022 | | Graphical slice builder for the Portal | 1.2, Spring 2022 | | Initial support for personal, project and experiment profiles | 1.2, Spring 2022 | | Advance reservation support | 1.3 or 1.4, Summer/Fall 2022 | | Ability to modify slices after creation | 1.3, Summer 2022 | | Ability to manage available compute images | 1.3, Summer 2022 | | Ability to define/save an image | 1.3, Summer 2022 | | Ability to configure compute sliver behavior (post-boot scripts, interface configuration etc) | 1.2, Spring 2022 | | Support for FPGAs | TBD |

## Bugs

Please see Forums for discussions of known bugs.
