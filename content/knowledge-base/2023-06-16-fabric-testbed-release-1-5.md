---
title: FABRIC Testbed Release 1.5
slug: fabric-testbed-release-1-5
date: "2023-06-16"
date_modified: "2025-08-14"
author: Ilya Baldin
status: publish
wp_id: 4474
views: 1500
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Major Changes

This is a major update to 1.4 capabilities. The enhancements include:

-   [Portal UI](https://learn.fabric-testbed.net/knowledge-base/fabric-portal-release-notes/) and CoreAPI Changes:
    -   CoreAPI authentication by cookie or API token equivalently for a subset of endpoints
        -   FABLib will provide ability to access/manage SSH keys same way Portal does
    -   Facility Port support in Portal Slice Builder and Slice Viewer
    -   New feature of opening Web SSH terminal in Portal Slice Viewer
    -   Support for multiple sliver keys when creating slice in Portal Slice Builder
    -   Portal Homepage update and other Slice Builder UX enhancements
-   Artifact Manger (coming shortly):
    -   Create and store versioned "artifacts" within the FABRIC artifact storage backend
    -   Permissions at the author, project, or public access level
-   There are new Control Framework capabilities:
    
    -   Long-lived slice support - users with specific project permissions (Slice.NoLimitLifetime project permission) can create slices that can exist beyond the default limit of 2 weeks (up to 6 months without renewal).
    -   FPGA support - users can request Xilinx U280 FPGAs components in their slices (Component.FPGA permission)
        -   We plan to work with a small number of experimenters initially to prove this capability and document appropriate experimental workflows.
    
    -   Multiple SSH Keys - users can pass up to 10 SSH Keys when creating slices
    -   Performance Tuning - NUMA information for the various components is available to the users now. Users can pin virtual cpus of their VMs to the specific host cpus and also tune the memory allocated the VM to be on a specific NUMA node.
    -   Resource availability - we have changed how we compute available cores, RAM and disk. Hyperthreading is on on all workers and each thread is counted as a core, making a typical worker have 128 instead of previously reported 64 cores.
-   New Network Services and Federation
    -   L3VPN service to help connect to public clouds
    -   Support for Internet2 AL2S/CloudConnect
-   Jupyter Hub:
    -   Users can now select one of several available container images with different versions of notebooks and underlying FABRIC libraries (from stable to bleeding edge) targeted at different types of experiments and educational activities.
-   There will be an updated release of [FABlib](https://learn.fabric-testbed.net/knowledge-base/fablib-api/) and Jupyter notebooks that helps experimenters take advantage of these new capabilities
    -   Documentation will be forthcoming as part of FABlib update to support these features.
-   [MFlib (Measurement Framework library)](https://learn.fabric-testbed.net/knowledge-base/mflib-overview/) will be updated to use OS images for improved setup time and stability. MFLib will also take advantage of L3 networks and new capabilities now available in FABLib.

## Packages and Components

### Control Framework

| Control Framework Core | | | --- | --- | | Orchestrator | Long lived slices, Numa and CPU pinning, Multiple SSH Keys, FPGAs | | Broker | FPGAs | | Site Aggregate Manager | Long lived slices, Numa and CPU pinning, Multiple SSH Keys, FPGAs | | Network Aggregate Manager | L3VPN support, AL2S support |

### User APIs and libraries

| FIM (Basic resource descriptions) | FPGAs, Neo4j 5.3.0, improved packaging, support for NUMA regions | | --- | --- | | FABlib | FPGAs | | MFlib | |

### JupyterHub

| Federated Identity | Ability to select different container images (stable, bleeding edge, educational) | | --- | --- | | Storage | N/A |

### Portal and System Services

| Portal | Facility Port, Multiple SSH Keys, Web SSH app | | --- | --- | | CoreAPI | Authenticate by cookie or token (CM token) equivalently for a subset of endpoints. Stub work for long-lived tokens and token revocation checks. | | Artifact Manager | Create versioned "artifacts" that are stored in the FABRIC artifact storage backend (Git and Zenodo at a later date). Artifact permissions are at the author, project or public level. | | Credential Manager | |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | FABlib enhancements to support latest features | Ongoing | | Advance reservation support | 1.6, Fall 2023 | | Ability to manage available compute images | 1.6, Fall 2023 | | Support for Tofino P4 switches | 1.6, Fall 2023 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
