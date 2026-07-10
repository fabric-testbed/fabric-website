---
title: FABRIC Testbed Release Notes 1.7
slug: fabric-testbed-release-notes-1-7
date: "2024-07-19"
date_modified: "2025-08-14"
author: Komal Thareja
status: publish
wp_id: 7213
views: 1889
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Major Changes

This is a major update to 1.6 capabilities. The enhancements include:

### **Portal Enhancements**

**Experiments -> Projects:**

-   **Funding, Community, and Matrix Link Support:** You can now add links to your projects' funding sources, community pages, and matrix chat rooms.
-   **Public Project List:** Unauthenticated users can view a list of public projects, increasing visibility and collaboration opportunities.

**Resources:**

-   **Level-2 Data on Site Detail Page:** View detailed resource availability per host.
-   **Time Filter:** Filter resources based on future availability.

**Slice Builder/Viewer Enhancements:**

-   **Future Lease Start Time:** Specify the lease start time for future slice creation.
-   **FPGA Support:** Utilize FPGA resources in your slices.

### **New Tools and Features**

**Artifact Manager:**

-   **Location:** Available under Experiments -> Artifact Manager
-   **Functionality:** Upload and share your notebooks or papers with other experimenters.

**Measurement Metrics:**

-   **Location:** Available under Resources -> Measuring and Monitoring Tools
-   **Includes:**
    -   Public Metrics
    -   Infrastructure Metrics
    -   Optical Data
    -   Latency Monitor

**Control Framework/FabLib:**

-   **[Advanced Scheduling](https://github.com/fabric-testbed/jupyter-examples/blob/93aba44ed7a1e085913282323f471da93af09bcf//fabric_examples/fablib_api/create_slice/create_slice.ipynb):** Schedule slices in the future using both API and Portal.
-   **[Explicit Route Options](https://github.com/fabric-testbed/jupyter-examples/blob/93aba44ed7a1e085913282323f471da93af09bcf//fabric_examples/fablib_api/create_l2network_wide_area_ero_auto/create_l2network_wide_area_ero_auto.ipynb):** Specify exact network paths for your Network Services.
-   **[Sub Interfaces](https://github.com/fabric-testbed/jupyter-examples/blob/93aba44ed7a1e085913282323f471da93af09bcf/fabric_examples/fablib_api/sub_interfaces/sub_interfaces.ipynb):** Create VLAN-tagged sub-interfaces for Smart NICs, enabling multiple Network Services connections.
-   **[Port Mirroring](https://github.com/fabric-testbed/jupyter-examples/blob/93aba44ed7a1e085913282323f471da93af09bcf/fabric_examples/fablib_api/create_port_mirror/port_mirror_basic.ipynb):** Enhanced to support mirroring Basic NICs.

### **Enhanced Resource Availability**

-   **[Granular Resource Information](https://github.com/fabric-testbed/jupyter-examples/blob/93aba44ed7a1e085913282323f471da93af09bcf/fabric_examples/fablib_api/sites_and_resources/list_all_resources.ipynb):** List hosts within sites to view detailed resource data.
-   **[Specific Time Duration](https://github.com/fabric-testbed/jupyter-examples/blob/93aba44ed7a1e085913282323f471da93af09bcf/fabric_examples/fablib_api/sites_and_resources/list_all_resources.ipynb):** Check resource availability for specified time periods.
-   **[Validate Slice](https://github.com/fabric-testbed/jupyter-examples/blob/93aba44ed7a1e085913282323f471da93af09bcf/fabric_examples/fablib_api/create_slice/create_slice.ipynb):** Validate your slice before submission to ensure resource feasibility.
-   **AL2S Interconnect:** Provision slices spanning public clouds like Google Cloud, AWS, or Azure. The API now supports interconnecting FABRIC and Public Cloud nodes via AL2S.
-   **OVS Switches**: OVS switches can now be provisioned with Basic NICs - check out an example [here](https://github.com/fabric-testbed/jupyter-examples/blob/main/fabric_examples/complex_recipes/openvswitch/openvswitch.ipynb).

### **New OS Images**

We've added several new OS images to expand your options:

-   default\_rocky\_9
-   default\_debian\_12
-   default\_fedora\_39
-   default\_fedora\_40
-   default\_freebsd\_14\_zfs
-   default\_ubuntu\_24
-   default\_kali (requires disk>=100G)
-   attestable\_bmv2\_v2\_ubuntu\_20

## Packages and Components

### Control Framework

| Orchestrator | - Added functionality for users to create VLAN-tagged sub-interfaces for Smart NICs.- Introduced the ability to explicitly define the network path for Network Services.- Enhanced scheduling capabilities to support future slice scheduling.- Enabled port mirroring using Basic NICs.- Various bug fixes and improvements. | | --- | --- | | Site Aggregate Manager | - Enhanced scheduling capabilities to support future slice scheduling.- Various bug fixes and improvements.- Added new images: default\_rocky\_9, default\_debian\_12, default\_fedora\_39, default\_fedora\_40, default\_freebsd\_14\_zfs, default\_ubuntu\_24, default\_kali, attestable\_bmv2\_v1\_ubuntu\_20 | | Network Aggregate Manager | - Support to explicitly specify the network path for the Network Se- Introduced the ability to explicitly define the network path for Network Services.- Enabled port mirroring using Basic NICs. |

### User APIs and libraries

| Fablib API | - Added support for creating VLAN-tagged sub-interfaces for Smart NICs.- Enabled explicit specification of network paths for Network Services.- Introduced advanced scheduling to support future slice scheduling.- Enabled port mirroring using Basic NICs.- Added validation for slices with infeasible requests.- Included support for listing resources by hosts.- Facilitated provisioning slices connecting FABRIC nodes to Public Clouds via AL2S.- Various bug fixes and improvements. | | --- | --- |

### Portal and System Services

#### Portal

| Homepage | Add FABRIC metrics of total/ active slice, active users and total project count. | | --- | --- | | Resources Page | Site Detail Page | - Add level-2 per worker resource availability data;- Support time filter to view future resource data. | | Measuring and Monitoring Tools | Add links to Public Metrics, Infrastructure Metrics, Optical Data and Latency Monitor. | | Experiments Page | Add public project list and public project detail page for unauthenticated users to view. | | Project Detail Page | - Add support of funding/ community and matrix information;- Add WYSIWYG editor for project description field;- Update layout and merge Project Owners, Project Members and Long-lived Token Holders in one Project Memberships tab. | | Slice Builder/ Viewer | - Add FPGA support;- Support slice request for future allocation, users can specify lease start and end time. | | Artifact Manager | Add Artifact Manager tab with link to the independent Artifact Manager app. |

#### Core API

| Core-API Projects | - Update project data model to include - type, topics, community and funding information- Update project search across - name/description/uuid, community, type, funding- Allow limited anonymous access to project information- Modify creation to include Slice. Multisite (backfill as needed)- Add basic metrics | | --- | --- | | Core-API Users | - Update user data model to include - receive promotional email flag- Update ansible role based check- Add services-authorization endpoint check- Add basic metrics | | Core-API | - Other non-user facing fixes / changes / optimizations |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | Support for Tofino P4 switches | 1.8, Spring 2025 | | Ability to manage available compute images | 1.8, Spring 2025 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
