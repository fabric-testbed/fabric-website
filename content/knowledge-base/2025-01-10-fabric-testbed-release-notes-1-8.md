---
title: FABRIC Testbed Release Notes 1.8
slug: fabric-testbed-release-notes-1-8
date: "2025-01-10"
date_modified: "2025-08-14"
author: Komal Thareja
status: publish
wp_id: 7995
views: 1780
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Major Changes

We are excited to announce the latest updates and enhancements to our platform. This release focuses on improving scheduling flexibility, refining resource allocation policies, and adding support for advanced networking hardware. Below are the key updates:

### **Portal Enhancements**

-   **Resources Page**:  
    Introduced a new **Facility Port Availability** table. Users can now view and search facility port details, including the name, site, VLAN range, and allocated VLAN range.

-   **User Profile Page**:  
    Added a new **Other Identities** section, enabling users to include Google Scholar, ORCID, or other identity information. If the privacy setting is set to public, this information will also appear on the user's public profile.

-   **Project Profile Page**:  
    Project owners can now input custom free-text topics in the project topics field. Facility operators can define project types.

-   **Community - FABRIC User Publications Page**:  
    Updated the page to replace static data with dynamic data sourced from the **FABRIC Publication Tracker API**.

### **New Features and Enhancements**

#### **Advanced Scheduling Enhancements**

Users can now request slices for future use without specifying an exact start time. The Control Framework will automatically deduce the nearest available timestamp for optimal scheduling. This feature ensures seamless resource planning and allocation.

#### **Improved VM Allocation Policy**

The current **FirstFit Policy**, where VMs are assigned to hosts sequentially until a host is full, has been enhanced to address specific resource allocation challenges:

-   A configurable **threshold capacity** has been introduced, allowing hosts to fill up to a defined level before the system moves to the next host.
-   This change reduces resource contention and ensures better allocation of critical components such as GPUs and SmartNICs.

#### **Email Reminders for Slice Expiry**

Users will now receive automated **email notifications** reminding them of their slice expiration dates. This proactive feature helps prevent unintended disruptions by providing timely reminders for renewal or reconfiguration.

#### **Support for P4 Tofino Switches**

This release introduces **P4 Tofino Switch compatibility**, enabling users to leverage advanced **programmable networking capabilities** within FABRIC. With this update, FABRIC expands its support for cutting-edge networking technologies, empowering high-performance and customizable network solutions.

-   **P4 Tofino Switch Support**: Users can now seamlessly configure and manage P4 Tofino switches.
-   **Pre-built Custom RARE Image**: A custom RARE image with **[SDE 9.13.3 pre-installed](https://github.com/alexandergall/bf-sde-nixpkgs#p4-program-development-with-the-sde-shell)** is deployed on the P4 switch.
-   **Example Notebook**: Users can try using the P4 switches on Fabric using notebook available [here](https://github.com/fabric-testbed/jupyter-examples/blob/main/fabric_examples/fablib_api/fabric_p4_tofino_l2_network/fabric_p4_tofino_l2_network.ipynb) and artifact available [here](https://artifacts.fabric-testbed.net/artifacts/674020c0-adb7-42bc-8c29-87c496599bc1).

**NOTE**: P4 SDE is now open source and available [here](https://p4.org/intels-tofino-p4-software-is-now-open-source/).

### **New OS Images**

We've added several new OS images to expand your options:

-   default\_centos10\_stream
-   default\_fedora\_41
-   docker\_ubuntu\_24

**Note:** Other existing images have also been refreshed to incorporate the latest OS and package updates.

## Packages and Components

### Control Framework

| Orchestrator | - Advanced Scheduling Enhancements- Improved VM Allocation Policy- Email Reminders for Slice Expiry- Support for P4 Tofino Switches | | --- | --- | | Broker | - Advanced Scheduling Enhancements- Improved VM Allocation Policy- Support for P4 Tofino Switches | | Site Aggregate Manager | - Support for P4 Tofino Switches |

### User APIs and libraries

| Fablib API | - Support to create, upload, download or delete Artifacts- Advanced Scheduling Enhancements- Support for P4 Tofino Switches | | --- | --- |

### Portal and System Services

#### Portal

| Resources Page | - Facility Port availability table. | | --- | --- | | User Profile Page | - Other Identities section. | | Project Profile Page | - Project type and project topic fields. | | FABRIC User Publications Page | - Live data from FABRIC Publication Tracker API. |

#### Core API

| Core-API Projects | | | --- | --- | | Core-API Users | | | Core-API | |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | Quotas and Allocation Control | 1.9, Fall 2025 | | QoS control on Network Links | 1.9, Fall 2025 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
