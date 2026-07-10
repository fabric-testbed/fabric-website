---
title: Navigating FABRIC Portal
slug: navigating-fabric-portal
date: "2023-05-31"
date_modified: "2025-08-05"
author: Ilya Baldin
status: publish
wp_id: 4385
views: 1977
categories:
  - Portal
---

FABRIC Portal is a web based JavaScript application running inside your browser. It communicates with the various back-end systems on user's behalf. From the Portal the user can manage the information and its visibility in their profile, view available testbed resources, create and manage projects and project membership, create experiments, login to created resources and more.

In this article we will walk you through the different parts of the Portal and explain their functionality.

## Homepage

FABRIC resources map and facility updates are shown on the homepage. On the topology map, users can hover on each site to view site status and resource availabilities.

![FABRIC Portal Homepage](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/screencapture-portal-fabric-testbed-net-2025-08-04-17_19_47-545x1024.png)

## Resources

Users can view the testbed resource summary, site resource availability in both map and table views. By zooming in/ out of the map, users can also view international nodes and links. By clicking the column name of the resource table, sites will be sorted in the ascending or descending order.

### Testbed Resources

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/screencapture-portal-fabric-testbed-net-resources-overview-2025-08-04-17_21_35-scaled.png)

By clicking the site name on resource map or table, users can open the site detail page with more site details. This page shows site-level and worker-level resource availability including Core, Disk, Ram, Component and Model data. There is a time filter toolbar for authenticated users to check future resources prior to future allocation request.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/screencapture-portal-fabric-testbed-net-sites-FIU-2025-08-04-17_34_43-scaled.png)

### Measuring and Monitoring Tools

Four external tools: Public Metrics, Infrastructure Metrics, Optical Data and Latency Monitor are available on the Resources page -> Measuring and Monitoring Tools.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/screencapture-portal-fabric-testbed-net-resources-tools-2025-08-04-17_35_11-805x1024.png)

## Experiments

Experiments page provides users with access to their projects, slices, ssh keys, FABRIC Credential Manager and FABRIC Artifact Manager.

### Projects & Slices

The first tab of Project & Slices displays a user's projects and all FABRIC projects. The view will change based on different users' roles and permissions, including the access to create project, edit project information, modify project owners and members, etc. For more information, please read this article: [FABRIC User Roles and Project Permissions](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/).

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/image-1-1024x493.png) \*Experiments Page -> Project & Slices\*

To create a slice in portal, users need select a project first then click the Slices tab -> Create Slice button as shown below. For more Information, please read the article: [Creating your first slice in the Portal](https://learn.fabric-testbed.net/knowledge-base/portal-slice-builder-user-guide/).

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/wechat_2025-08-05_174118_432-1024x315.png) \*Project Detail Page -> Slices tab\* ![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/image-1024x511.png) \*Portal Slice Builder\*

### My Slices

Slices created in the Portal and in JupyterHub will display on the Experiments page -> My Slices tab in a table view. Click on slice name to open Portal Slice Viewer.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/image-2-1024x371.png) \*Experiments Page -> My Slices tab\* ![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/slice_viewer_copy-1024x488.png) \*Portal Slice Viewer\*

### Manage Tokens

Users need to click on the button Open FABRIC Credential Manager to manage their tokens. For more information, please read this article: [Obtaining and using FABRIC API tokens](https://learn.fabric-testbed.net/knowledge-base/obtaining-and-using-fabric-api-tokens/).

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/image-3-1024x277.png) \*Experiments Page -> Manage Tokens tab\*

FABRIC Credential Manager provides the GUI to create, refresh and revoke tokens.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/screencapture-cm-fabric-testbed-net-2024-01-18-14_52_39-1024x634.png) \*FABRIC Credential Manager App\*

### Manage SSH Keys

Two SSH [key pairs](https://learn.fabric-testbed.net/knowledge-base/generating-ssh-configuration-and-ssh-keys/) are used in FABRIC: bastion key pair and sliver key pair. On this tab, users can view their stored sliver and bastion keys and download public keys; generate or upload sliver and bastion keys. For more information, please read the articles: [Generating SSH Configuration and SSH Keys](https://learn.fabric-testbed.net/knowledge-base/generating-ssh-configuration-and-ssh-keys/) and [Logging into FABRIC VMs](https://learn.fabric-testbed.net/knowledge-base/logging-into-fabric-vms/).

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/image-5-883x1024.png) \*Experiments page -> Manage SSH Keys\*

### Artifact Manager

Artifact Manager is a platform for sharing and reproducing FABRIC research artifacts. It also provides a REST API for use by various clients.  An artifact consists of one or more files organized into a single directory in TGZ format (.tgz or .tar.gz).  Please consult  [this guide](https://learn.fabric-testbed.net/knowledge-base/artifact-manager/)  for FABRIC Artifact Manager.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/image-6-1024x895.png) \*Experiments page -> Artifact Manager\*

## Knowledge Base

[FABRIC Knowledge Base](https://learn.fabric-testbed.net/) provides rich content to help experimenters to learn about FABRIC testbed and tools, communicate with the community in [Forums](https://learn.fabric-testbed.net/forums/) and create cutting-edge experimentation and research.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/screencapture-learn-fabric-testbed-net-2025-08-05-18_00_28-1024x625.png)

## JupyterHub

After login to JupyterHub, you can create your private JupyterHub environment here and try a set of FABRIC example notebooks. For more information, please take a look at the [articles on using the JupyterHub](https://learn.fabric-testbed.net/article-categories/jupyter-hub/).

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/image-3-1024x532.png)

## User Profile

To access the User Profile page, users need login first and click the user avatar on the top right navigation bar.

### My Profile

FABRIC maintains a limited amount of personal information about the Users. Users can edit personal information and set privacy preferences on the My Profile tab. The checked items will be display on the user's public profile page and be viewable to all FABRIC users.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/profile_copy-1009x1024.png) \*User Profile page -> My Profiles tab\* ![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/public_profile_copy-1024x635.png) \*Public User Profile page\*

### My Roles & Projects

Users can check their [FABRIC global roles](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/) and project roles on this tab.

-   Project Lead: can create new projects, designate Project Owner(s) and invite regular members into a project. Faculty or senior staff at universities can request this role.
-   Facility Operator: a 'superuser' allowed to manipulate any project. This role is reserved for FABRIC staff.
-   Active User: A fully enrolled FABRIC Testbed User with all the rights and privileges therein.
-   Jupyterhub: Provides access to the Jupyterhub cluster. User must be a member of at least one project to maintain this access.

To learn about managing project members and owners, visit [this article](https://learn.fabric-testbed.net/knowledge-base/managing-project-membership-from-the-portal/).

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/roles_copy-1024x686.png)

### My SSH Keys

Similar to the Manage SSH Keys tab on Experiments page, you can view all your sliver and bastion keys here. But for generating, uploading and deleting keys, please go to the Experiments -> Manage SSH Keys page.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/my_keys_copy-1024x592.png)

### My Slices

Similar to the My Slices tab on Experiments page, you can view all your slices here.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/my_slices_copy-1024x548.png)

## Contact Us

If you find any issue in using FABRIC testbed, please use the Contact Us page:

-   For experiments issues, FABRIC Knowledge Base is the most useful place to find an answer. There are plenty of guides and articles, and you can also post a question in the Forums if no answer could be found in existing content.
-   For account issues, you can either use the FABRIC Account Help Portal or send an email.
-   FABRIC has also started the beta version of Office Hours for users to set up time with FABRIC team members;
-   For teaching classes on FABRIC, please request a FABRIC project for educational use and use educator forum to ask questions and share experiences.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/screencapture-portal-fabric-testbed-net-help-2025-08-05-18_03_24-1024x789.png)
