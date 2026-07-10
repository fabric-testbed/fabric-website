---
title: "Exciting Updates in FABRIC Post 1.7: New Features Now Available!"
date: "2024-07-24"
type: "blog"
category: "announcements"
excerpt: "Dear FABRIC Community,"
author: "Jayasree Jaganatha"
date_modified: "2024-07-24"
wp_id: 7314
views: 715
tags:
  - news
---

Dear FABRIC Community,

We are thrilled to announce the release of FABRIC 1.7, packed with a host of new features designed to enhance your experience and expand the capabilities of the FABRIC testbed. Thank you for your patience during the recent maintenance period. You'll find these updates well worth the wait. Here's what's new:

### Portal Enhancements

**Experiments -> Projects:**

-   **Funding, Community, and Matrix Link Support:** You can now add links to your projects' funding sources, community pages, and matrix chat rooms.
-   **Public Project List:** Unauthenticated users can view a list of public projects, increasing visibility and collaboration opportunities.

**Resources:**

-   **Level-2 Data on Site Detail Page:** View detailed resource availability per host.
-   **Time Filter:** Filter resources based on future availability.

**Slice Builder/Viewer Enhancements:**

-   **Future Lease Start Time:** Specify the lease start time for future slice creation.
-   **FPGA Support:** Utilize FPGA resources in your slices.

### New Tools and Features

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

-   **Advanced Scheduling:** Schedule slices in the future using both API and Portal.
-   **Explicit Route Options:** Specify exact network paths for your Network Services.
-   **Sub Interfaces:** Create VLAN-tagged sub-interfaces for Smart NICs, enabling multiple Network Services connections.
-   **Port Mirroring:** Enhanced to support mirroring Basic NICs.

### Enhanced Resource Availability

-   **Granular Resource Information:** List hosts within sites to view detailed resource data.
-   **Specific Time Duration:** Check resource availability for specified time periods.
-   **Validate Slice:** Validate your slice before submission to ensure resource feasibility.
-   **AL2S Interconnect:** Provision slices spanning public clouds like Google Cloud, AWS, or Azure. The API now supports interconnecting FABRIC and Public Cloud nodes via AL2S.
-   **OVS Switches**: OVS switches can now be provisioned with Basic NICs - check out an example [here](https://github.com/fabric-testbed/jupyter-examples/blob/main/fabric_examples/complex_recipes/openvswitch/openvswitch.ipynb).

### New OS Images

We've added several new OS images to expand your options:

-   default\_rocky\_9
-   default\_debian\_12
-   default\_fedora\_39
-   default\_fedora\_40
-   default\_freebsd\_14\_zfs
-   default\_ubuntu\_24
-   default\_kali
-   attestable\_bmv2\_v2\_ubuntu\_20

We would like to point out new capabilities that will help us highlight your successful projects. Project owners can now log in to their project profile page and explore several new management features. Among these, you’ll be able to set a direct link to your FABRIC Matrix, as well as fields for letting us know about your project’s funding agency, communities, and a newly improved description field. The description field now supports a rich text editor, allowing you to include a full abstract and links to your site and/or publications. We highly encourage all users to take advantage of these updates by filling out these fields to enhance your project profiles and enable us to highlight your projects . Thank you for your continued engagement and support!

We are excited for you to explore these new features and see their impact on your projects. For detailed instructions on how to use these updates, please visit our documentation or contact our support team.

Thank you for being a valued part of the FABRIC community.

Best regards,

The FABRIC Team
