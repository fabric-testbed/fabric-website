---
title: FABRIC Testbed Release 1.0
slug: fabric-testbed-release-1-0
date: "2021-07-26"
date_modified: "2025-08-14"
author: Paul Ruth
status: publish
wp_id: 378
views: 1455
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

Release Date 07/23/2021

## Major Changes

This is the first major release of FABRIC software stack. It includes basic functionality for all components. Major user-facing features include:

-   Ability to login to the portal, create and join projects, obtain and download credentials, inspect resource availability
-   Ability to provision basic compute nodes (VMs) and attach available PCI devices. This capability is supported jointly by the Control Framework, system services and command-line tools. Supports the following PCI device types:
    -   Network cards (ConnectX-5, ConnectX-6 dedicated and shared/SR-IOV)
    -   NVMe drives
    -   GPUs
-   Ability to provision basic network services - Layer 2 Bridge (L2Bridge), Layer 2 Port-to-Port (L2PTP) and Layer 2 Site-to-Site (L2STS) to interconnect compute nodes.

-   Ability to user JupyterHub using federated identity. Ability to run Python tools library from pre-configured notebooks.
-   Ability to use the knowledge base (learn.fabric-testbed.net) using federated identity - provides structured documentation and discussion forums

## Packages and Components

### Control Framework

| Control Framework Core | Inter-actor messaging via Kafka, actor policies and state machines, integration with FIM. | | --- | --- | | Orchestrator | Embedding support for compute and network services and attachment of PCI device components | | Broker | Resource accounting, resource advertisements using a combined model of site and network advertisements. | | Site Aggregate Manager | Support for provisioning virtual machines of multiple flavors through OpenStack and attachment/detachment of indicated PCI devices via Ansible. | | Network Aggregate Manager | Support for provisioning initial set of L2 services (L2Bridge, L2PTP, L2STS). |

### FIM (FABRIC Information Model)

| Basic resource descriptions | Provides the ability to create, save, serialize and deserialize FIM resource descriptions (slices, aggregates) using a combination of Neo4j and NetworkX. Supports basic compute (VM), components (NVMe, GPUs, Network cards). | | --- | --- |

### JupyterHub

| Federated Identity | Ability by users to log in using institutional credentials after registering with COmanage | | --- | --- | | Storage | Use attached 10TB storage for user notebook data |

### Portal and System Services

| Portal | Federated login with COmanage support, display resource availability map with real-time information on compute resources, create/populate/delete projects, obtain CF credentials | | --- | --- | | Project Registry | Manage project data in conjunction with COmanage. | | User Information Service | Manage user data in conjunction with COmanage | | Credential Manager | Issue CF credentials to users using federated identity |

## Limitations

We expect all/most of the following feature limitations to be addressed in upcoming releases (expected release date indicated):

| Feature limitation | Expected in release | | --- | --- | | Some L2 services (L2STS) have limitations when using a combination of shared and dedicated cards in the same site. Depending on the selected options certain connections may not work properly | Fall 2021 | | No advance reservation support | Spring 2022 | | No ability to modify slices after creation | Spring 2022 | | No ability to list available compute images | Spring 2022 | | No ability to define/save an image | Fall 2021 | | No ability to configure compute sliver behavior (post-boot scripts, interface configuration etc) | Fall 2021 | | No ability to attach rotating storage volumes to VMs | Fall 2021 | | No support for FPGAs | TBD |

## Bugs

The following known bugs are present in the currently deployed versions of software:
