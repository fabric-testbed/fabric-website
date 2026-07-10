---
title: FABRIC Information for Instructors
slug: fabric-information-for-instructors
date: "2023-08-26"
date_modified: "2023-08-26"
author: James Griffioen
status: publish
wp_id: 5133
views: 5037
categories:
  - Teaching on FABRIC
---

## How do I setup a Class/Course on FABRIC?

Step 1: Instructors who would like to use FABRIC in their classes should submit a [Class Request Form](https://fabric-testbed.atlassian.net/servicedesk/customer/portal/2/group/11/create/64) via the FABRIC ticket system.  
Step 2: Subscribe yourself (and your TA) to [FABRIC Announcements](https://learn.fabric-testbed.net/forums/forum/fabric-announcements/) forum  
Step 3: Subscribe yourself (and your TA) to [FABRIC Educators](https://learn.fabric-testbed.net/forums/forum/fabric-educators/) forum

Class requests will be evaluated for appropriateness for FABRIC, but we expect that a wide range of classes covering topics such as computer networking, operating systems, distributed systems, security, cloud computing, web services, content distribution systems, edge computing, federated learning and many more will be candidates for running on FABRIC. The types of courses that will be allowed have not been predefined, and a goal of FABRIC is to enable new opportunities and completely new and innovative courses. If in doubt whether a course is appropriate, please [submit a class request form](https://fabric-testbed.atlassian.net/servicedesk/customer/portal/2/group/11/create/64).  Also note that FABRIC collaborates with other NSF cyber infrastructure platforms and may refer some requests to other NSF platforms when appropriate (e.g., Cloudlab, Chameleon, DETER, OSG, ACCESS, etc).

Once a class request has been granted, a new FABRIC “Project” will be created for the class with [appropriate permissions](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/). Students in the class can sign up for a FABRIC account using the normal [FABRIC account signup](https://learn.fabric-testbed.net/knowledge-base/signing-up-for-a-fabric-account/) procedures. For institutions that are part of [InCommon](https://incommon.org/), students will simply use their institutional ID to login. Once students have logged in, the professor or TA can [add them to their class project](https://learn.fabric-testbed.net/knowledge-base/managing-project-membership-from-the-portal/). Instructors will receive notice of student requests to join their class/project and can review and grant them through the normal FABRIC project management mechanisms.

Educators and students from institutions which are not part of InCommon can use Microsoft, Google, ORCID or GitHub as their identity providers, however extra steps are required in order to sign up - this will be handled as part of the class request.

Due to our limited capacity we currently do not support educators from non-US-based educational institutions.

## FABRIC Teaching Materials available to Instructors

A wide range of instructional material (assignments, project, and tutorials) designed originally for GENI have been converted for use in FABRIC. In particular, the set of GENI materials on the [GENI Wiki Pages](https://groups.geni.net/geni/wiki/GENIExperimenter/Tutorials) and the [UNC GENI Assignments Page](http://www.cs.unc.edu/Research/geni/geniExercises/) have been converted to [FABRIC teaching materials](https://github.com/fabric-testbed/teaching-materials) and/or [Multi-Platform Teaching Materials](https://teaching-on-testbeds.github.io/). In addition, the FABRIC team has developed a substantial set of [example topologies](https://github.com/fabric-testbed/jupyter-examples/tree/main) (in the form of notebooks) that instructors may find useful.

Instructors that previously used the GENI instructional materials in their courses will quickly recognize the converted assignment and should be able to use them in a relatively seamless way. While the assignments are essentially the same, FABRIC differs from GENI in a few key ways:

1.  GENI topologies were defined using RSPECs. In FABRIC, experiment topologies are defined via [Python calls to FABLib](https://learn.fabric-testbed.net/article-categories/fablib-api/) that specify the nodes (VMs) and links in the topology.
2.  GENI users created the topology via the GENI Portal. FABRIC users create the topology via [JupyterHub notebooks](https://learn.fabric-testbed.net/article-categories/jupyter-hub/) that invoke FABlib calls.
3.  GENI users logged into their nodes (VMs) using a public IP address (and port number). FABRIC users log into their nodes (VMs) by ssh’ing through a bastion host, and from there to their VM. Consequently, users have two sets of ssh keys in FABRIC: (1) one set for the bastion host, and (2) another set for the VMs. Detailed instructions for setting up these ssh keys can be found at [https://github.com/fabric-testbed/teaching-materials/blob/main/Getting%20Started.md](https://github.com/fabric-testbed/teaching-materials/blob/main/Getting%20Started.md).
4.  GENI users could interact with and monitor their experiment using the GENI Desktop. FABRIC users have multiple ways to interact with their experiment, but the most common way is via the [FABRIC JupyterHub](https://learn.fabric-testbed.net/article-categories/jupyter-hub/). Advanced users can also run Jupyter notebooks directly from their laptop/desktop. Example uses of the FABRIC JupyterHub can be found at [https://learn.fabric-testbed.net/knowledge-base/creating-your-first-experiment-in-jupyter-hub/](https://learn.fabric-testbed.net/knowledge-base/creating-your-first-experiment-in-jupyter-hub/).

## What FABRIC Infrastructure is available for Class Use?

When filling out a class request form, you will be asked to describe the type and number of FABRIC resources that will be required by the class.

We expect that the vast majority of classes will only need FABRIC's virtualizable resources (e.g., virtual machines, virtualized/shared network cards, virtualized/shared network links) without the need for QoS or location dependence. Consequently, FABRIC has deployed a dedicated FABRIC rack to support this type of educational use, called the EDUKY rack. Class experiments using the EDUKY rack run across the nodes in the EDUKY rack and otherwise look like research experiments, using JupyterHub to launch and control experiments, leveraging shared programmable NICs, creating L2 and L3 networks from the list of FABRIC-supported network types, utilizing the FABlib and MFlib services for interacting with, and measuring/monitoring, networks, etc.

Some class assignments may require advanced FABRIC capabilities based on resources that are limited in number. Examples include access to non-shared (physical) NIC cards, non-shared (physical) GPUs, non-shared (physical) FPGA cards, QoS networks, location/rack-specific resources, etc. Such classes can also be supported by FABRIC subject to availability of resources (noting that such resources are in high demand by research projects as well).

Unless there is a clear need, we encourage instructors to think about ways in which their classes can be taught using FABRIC’s virtualized resources**.**

## Where can I get help teaching my course on FABRIC?

Instructors are encouraged to subscribe to the [FABRIC Educators Forum](https://learn.fabric-testbed.net/forums/forum/fabric-educators/) where they can raise questions they have about teaching their course on FABRIC.   The FABRIC team monitors the Educators Forum to answer instructor questions.  More importantly, other instructors also subscribe to the educators channel and may jump into the discussion to offer thoughts about how they solved similar issues or the approach they took.  The sharing of ideas can be very helpful to instructors.   If the  issue being raised by an instructor needs focused attention, we will create a help request and assign FABRIC staff to work with the instructor to address the issue.

If you are using the FABRIC teaching materials described above and encounter problems, please be sure to post your question on the Educators Forum.  Depending on your problem, the FABRIC team can assist you in getting your assignment running.

Instructors are also encouraged to subscribe to the [FABRIC Announcement Forum](https://learn.fabric-testbed.net/forums/forum/fabric-announcements/) to be alerted to outages and changes to FABRIC.
