---
title: FABRIC Testbed Release Notes 1.9
slug: fabric-testbed-release-notes-1-9
date: "2025-07-31"
date_modified: "2025-08-14"
author: Komal Thareja
status: publish
wp_id: 8707
views: 1341
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Major Changes

We are excited to announce the latest updates and enhancements to our platform. This release enhances performance guarantees with QoS-enabled L2PTP links, improves resource management through project-level limits, and streamlines usability with a refined FPGA workflow and automated notifications. The Portal now supports adding P4 switches to slices, improved artifact management and visibility, and cross-project slice access to enhance collaboration. Usability improvements include a streamlined project request process, enhanced publication tracking, and email alerts for expiring certificates and project states. In addition, JupyterHub storage is now linked to persistent FABRIC user IDs instead of email addresses—ensuring that your data remains accessible even if your login credentials or organizational affiliation change. All of these updates support FAIR and scalable research experimentation.

## Key Updates

### Portal Updates

**P4 Switch Support in Slice Builder and Viewer**

Users can now add P4 switches to slices at sites that support programmable switching. This feature is available for projects that include the `Switch.P4` tag. Switch availability is also now displayed on the Resources page and on each site's detail page.

**Public and Project Artifact Access**

Users can now access and launch public artifacts directly from the Experiment page and from the Artifact Manager under the Experiments menu.

-   Public Artifacts: Available via the public experiment page and Artifact Manager
-   Project Artifacts: Viewable under Project Detail → Project Artifacts
-   User Artifacts: Accessible from User Profile → My Artifacts

**Project-Wide Slice Visibilit**y

Users can now view all slices created by other members of their project. This update enhances transparency and collaboration within project teams.

### Improved Usability

**Streamlined Project Management**

-   New project requests must now be submitted via the designated Jira form (self-service project creation is no longer supported).
-   The initial submitter of the Jira form is automatically designated as the project lead.
-   Email notifications are sent when project members are added or removed.

**Certificate and Access Notifications**

-   Automated email reminders are now sent for expiring SSH keys at 30, 7, and 1-day intervals.
-   Project expiration and certificate expiry notifications are delivered to impacted users.
-   Access to JupyterHub now requires membership in an **active** project; expired or retired projects no longer satisfy access requirements.

**Publication and Metrics Enhancements**

-   Improved tracking and visibility of publications associated with projects.
-   Additional metrics are collected for project and user lifecycle events, including project creation/retirement and member/owner changes.

### **Guaranteed QoS and Path-Controlled L2 Network Creation Using EROs**

Users can now create Layer 2 point-to-point (L2PTP) links with **guaranteed bandwidth**, and **explicit path control** using **Explicit Route Objects (EROs)** through the FABlib API. This feature enables precise control over network behavior, making it ideal for experiments that require predictable and reproducible performance.

**View Artifact:**  
Try out this capability using the public QoS-enabled, path-controlled L2PTP [artifact](https://artifacts.fabric-testbed.net/artifacts/3339af84-fa5b-4f54-a915-fbbbfb44226d) available in the FABRIC examples.

Users can view the various links and their capacities using the [artifact](https://artifacts.fabric-testbed.net/artifacts/9474668f-95a1-47ed-86df-385f9378d5fc).

### ****Enhanced Resource Management****

Project-level controls now support configurable limits on scarce resources (e.g., GPU hours), promoting fair access and broader trial usage.

### FPGA Initialization Support for ESnet and NEU Workflows

We’ve added a new set of Jupyter notebooks to support FPGA setup for ESnet and NEU workflows. These notebooks provide step-by-step instructions for:

-   Flashing the FPGA with workflow-specific bitstreams
-   Installing tested Docker images used in the workflows
-   Ensuring the FPGA is in a clean, compatible state before running custom code

> **Important:** Experimenters should run one of these notebooks as the **first step** before using an FPGA to guarantee compatibility with the desired workflow.

The notebooks rely on pre-built and validated artifacts hosted on `resources.fabric-testbed.net`. Building the latest firmware or Docker images from source (e.g., ESnet GitHub) is optional and not covered in this release.

**View Artifact:**  
To access the initialization notebooks and resources, check this [artifact](https://artifacts.fabric-testbed.net/artifacts/3339af84-fa5b-4f54-a915-fbbbfb44226d)!

### Update to JupyterHub Storage

We’ve made an important improvement to how your storage (PVCs) is handled in FABRIC JupyterHub. Your storage is now linked to your **FABRIC user ID** (a unique identifier), instead of your email address or username. Previously, your storage was tied to your email or login name. If you changed organizations, updated your email, or switched identity providers (such as moving from campus login to Google login), you might have lost access to your files and needed us to manually move your files between accounts.

**With this update:**

-   Your data stays with you, no matter how your login changes
-   No disruptions if you switch institutions or update your contact information
-   Improved reliability for your JupyterHub environment

**What You Need to Do**

No action is required. We have already:

-   Created new storage linked to your user ID
-   Migrated your existing data to the new storage
-   Ensured your files are available exactly where you left them

If you have any issues accessing your files, please reach out to [FABRIC support](mailto:help@fabric-testbed.net).

### **New OS Images**

We've added several new OS images to expand your options:

-   default\_rocky\_10
-   _docker_\_rocky\_10
-   default\_ubuntu\_25
-   _docker_\_ubuntu\_25
-   dpu\_ubuntu\_24
-   attestable\_bmv2\_ubuntu\_20
-   default\_debian\_13

**Note:** Other existing images have also been refreshed to incorporate the latest OS and package updates.

## Packages and Components

### Control Framework

| Orchestrator | - QoS enabled L2PTP links- PCI Rescanning enabling FPGA Flashing- Granular Permissions- Support for Blue Field3 DPUs | | --- | --- | | Broker | - QoS enabled L2PTP links- PCI Rescanning enabling FPGA Flashing- Support for Blue Field3 DPUs | | Site Aggregate Manager | - QoS enabled L2PTP links- PCI Rescanning enabling FPGA Flashing- Support for Blue Field3 DPUs |

### User APIs and libraries

| Fablib API | - QoS enabled L2PTP links- PCI Rescanning enabling FPGA Flashing- Granular Permissions- Support for Blue Field3 DPUs | | --- | --- |

### Portal and System Services

#### Portal

| P4 Switch | Added support for P4 switches on Slice Builder and Slice Viewer. Users can add P4 switches in sites with switch capability & projects with Switch.P4 tag. The Resources page and site detail page now displays switch availability. | | --- | --- | | Artifact List | - Public Artifacts: View all artifacts from the Portal on the public experiment page and under Experiments → Artifact Manager; - Project Artifacts: Accessible via Project Detail → Project Artifacts; - User Artifacts: Available under User Profile → My Artifacts. | | Project Slices Visibility | Users can now view all slices created by members of their project. |

#### Core API

| Core-API Projects | - New project requests can be made via Jira forms (no longer can be created by users independently)- Designate project lead based on Jira form submission (set as initial project owner)- Project expiry enforced at the control framework level- Email for add/remove project members- Reworked project lifecycle to include active/expired/retired states | | --- | --- | | Core-API Users | - Jupyterhub access requires users be a member of an ACTIVE project (expired/retired projects no longer count as membership)- Email for ssh key expiry warning (30, 7, 1 day notice) | | Core-API | - Additional reports metrics collection for user and project events (create/retire, add/remove member/owner)- Endpoints added for Artifact, Publication, and Journey tracker management |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | Quotas and Allocation Control | 1.10, Spring 2026 | | QoS control on Network Links | 1.10, Spring 2026 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
