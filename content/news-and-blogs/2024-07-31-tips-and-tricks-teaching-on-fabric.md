---
title: "Tips and Tricks: Teaching on FABRIC"
date: "2024-07-31"
type: "blog"
category: "announcements"
excerpt: "_Getting started with using FABRIC in classrooms"
author: "Jayasree Jaganatha"
date_modified: "2025-06-04"
wp_id: 7338
views: 1564
tags:
  - blog
  - tips and tricks
---

_Getting started with using FABRIC in classrooms  
_

FABRIC can be used in a wide range of classes covering topics such as computer networking, operating systems, distributed systems, security, cloud computing, web services, content distribution systems, edge computing, and federated learning. In particular, FABRIC provides a unique environment where students can control every aspect of the system from the topology of the network, to the configuration of the virtual machine hardware, to the operating systems and software stacks run on the VMs.  The ability to assign projects where students run experiments on resources that reside in geographically distinct locations allows for real-world experimentation such as network delay (latency) tests between sites. Moreover, students can quickly visualize data using the FABRIC Measurement Framework library (MFlib).

For new instructors planning to onboard students and incorporate FABRIC in their curriculum, the FABRIC team has put together a reference guide with information on creating a class project, creating student accounts, available resources, example assignments, and other step-by-step instructions on getting started, and directions to access help from community members. Highlights from this guide are included below. For more detailed information, please refer to the article [FABRIC Information for Instructors](https://learn.fabric-testbed.net/knowledge-base/fabric-information-for-instructors/).

### Resources available to instructors

The FABRIC team expects that the vast majority of classes will only need FABRIC’s virtualizable resources without the need for QoS or location dependence. FABRIC has deployed a dedicated FABRIC rack to support this type of educational use, called the EDUKY rack. Class experiments using the EDUKY rack run across the nodes in the EDUKY rack and share many similarities with research experiments, including:

-   Using JupyterHub to launch and control experiments
-   Leveraging shared programmable NICs
-   Creating L2 and L3 networks from the list of FABRIC-supported network types
-   Utilizing the FABlib and MFlib services for interaction

If required for the class, the FABRIC team can allow instructors access to advanced resources on a case-by-case basis, such as non-shared (physical) GPUs, NIC cards, and FPGA cards; QoS networks; and location- or rack-specific resources. However, unless there is a clear need, we encourage instructors to think about ways in which their classes can be taught using FABRIC’s virtualized resources.

### Instructional materials available to instructors

A wide range of instructional material, including assignments, projects, and tutorials, are available for use in FABRIC, converted from materials designed originally for GENI. In particular, the set of GENI materials on the [GENI Wiki Pages](https://groups.geni.net/geni/wiki/GENIExperimenter/Tutorials) and the [UNC GENI Assignments Page](http://www.cs.unc.edu/Research/geni/geniExercises/) have been converted to [FABRIC teaching materials](https://github.com/fabric-testbed/teaching-materials) and/or [Multi-Platform Teaching Materials](https://teaching-on-testbeds.github.io/). In addition, the FABRIC team has developed a substantial set of [example topologies in the form of notebooks](https://github.com/fabric-testbed/jupyter-examples/tree/main) that instructors may find useful.

Instructors that previously used the GENI instructional materials in their courses will quickly recognize the converted assignment and should be able to use them in a relatively seamless way. Key differences are noted in the [full article](https://learn.fabric-testbed.net/knowledge-base/fabric-information-for-instructors/#fabric-teaching-materials-available-to-instructors).

### How to get started

Instructors who would like to use FABRIC in their classes should submit a [Class Request Form](https://fabric-testbed.atlassian.net/servicedesk/customer/portal/2/group/11/create/64) via the FABRIC ticket system and provide detailed information about course assignments and resources needed. Please note it is extremely important that you as an instructor are comfortable with using FABRIC by going through tutorials on your own or participating in offered in-person or on-line tutorials before you offer a class on FABRIC.

Once a class request has been granted, a new FABRIC “Project” will be created for the class with [appropriate permissions](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/). Students in the class can sign up for a FABRIC account using the normal [FABRIC account signup procedures](https://learn.fabric-testbed.net/knowledge-base/signing-up-for-a-fabric-account/). Instructors will receive notice of student requests to join their class/project and can review and grant them through the normal FABRIC project management mechanisms.

A full set of instructions can be found on the [Getting Started](https://github.com/fabric-testbed/teaching-materials/blob/main/Getting%20Started.md) section of the FABRIC teaching materials on Github.

### Getting help as an instructor

Instructors are encouraged to subscribe to the [FABRIC Educators Forum](https://learn.fabric-testbed.net/forums/forum/fabric-educators/) where they can raise questions they have about teaching their course on FABRIC and the existing teaching materials. The FABRIC team monitors the Educators Forum to answer instructor questions. More importantly, other instructors also subscribe to the educators channel and may jump into the discussion to offer thoughts about how they solved similar issues or the approach they took. The sharing of ideas can be very helpful to instructors. 

If the issue being raised by an instructor needs focused attention, we will create a help request and assign FABRIC staff to work with the instructor to address the issue.

Instructors are also encouraged to subscribe to the [FABRIC Announcement Forum](https://learn.fabric-testbed.net/forums/forum/fabric-announcements/) to be alerted to outages and changes to FABRIC.
