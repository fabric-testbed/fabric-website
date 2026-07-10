---
title: FABRIC User Roles and Project Permissions
slug: fabric-user-roles-and-project-permissions
date: "2022-05-24"
date_modified: "2025-11-06"
author: Ilya Baldin
status: publish
wp_id: 1849
views: 5499
categories:
  - "Authorization, Projects and Tokens"
---

## Overview

FABRIC is open for use to a broad crossection of the researcher community. The resources offered by FABRIC to the experimenters are unique and powerful and require a system of controls to ensure no misuse occurs, and resources are used by the community fairly both for education and research. In order to address this problem FABRIC relies on two mechanisms that work in concert with each other:

1.  Per-project permissions
2.  Experimenter roles

The smallest granularity of control in FABRIC is a _project_. Each experimenter belongs to one or more projects and the permissions granted to the project by FABRIC staff determine what the members of the project can do with respect to FABRIC resources.

All members of the same project have _identical_ rights with respect to access to FABRIC resources. Users that do not belong to any projects have _no rights_ with respect to using FABRIC resources - they cannot create slices.

When creating slices on FABRIC experimenters must identify which project they are using - the permissions of that project determine what resources can be added to the slice.

Projects are created for experimenters by FABRIC project administrators once a user has been vetted for the role of a _Project Lead_. Once the project is created it can be assigned one or more additional _Project Owners_ (the Project Lead automatically becomes the first project owner). Project Owners control the membership of the project - can add and remove _Project Members_ to/from the project. _Project Members_ have no special rights to manage projects, but they inherit the permissions granted to their project to use FABRIC resources.

## Changing roles: Becoming Project Lead or Project Owner and managing projects

The role of the Project Lead can only be granted to an experimenter who has successfully enrolled in the FABRIC Portal (see [Quick Start Guide](https://learn.fabric-testbed.net/knowledge-base/quick-start-guide/) for more information).

Becoming a Project Lead is an important responsibility, not granted automatically. There is a human-in-the-loop review process for each Project Lead request. Please read the [Project Lead Policy](https://learn.fabric-testbed.net/knowledge-base/fabric-project-lead-policy/) to make sure you qualify.

To request to be a Project Lead of a new project, navigate to the 'Experiments' tab in FABRIC menu, then from the 'Projects & Slices' menu click on the 'Request a New Project' button as shown in example image below:

![](https://learn.fabric-testbed.net/wp-content/uploads/2022/05/Screenshot-2025-11-06-at-11.21.59-AM.png)

This will lead you to a [Project Lead Request form](https://fabric-testbed.atlassian.net/servicedesk/customer/portal/2/group/11/create/41) in the FABRIC Help Portal. Please fill in the appropriate fields, especially paying attention to the email address you supply in the form - it must be the same email you used to sign up to the FABRIC Portal. If FABRIC Staff have any questions about your request you will receive them in the form of an email at the address you indicate in the form:

![](https://learn.fabric-testbed.net/wp-content/uploads/2022/05/Screenshot-2025-11-06-at-11.23.57-AM-755x1024.png) \*FABRIC Help Portal Project Lead Request form\*

You will be notified by email of the decision. If your request is granted you will interact with a FABRIC staff member who will help to create your project. This generally requires a few pieces of information about your project.

-   Project Name
-   Project Description (brief)
-   Project Lead UUID (you FABRIC uuid)

Once completed a new project will appear in your portal Projects & Slices section. You will be set as the Project Lead, as well as the initial Project Owner, and can manage the project from there.

You can also become a Project Owner, when another Project Owner (could be the Project Lead that created the project) adds you as an owner to their project. Project Owners (and regular Project Members) can be added to or removed from the project by visiting the list of projects, selecting the project, and then selecting the 'Project Memberships' section.

Only those already enrolled in the FABRIC portal can be added to the project as owners or members. Note this includes following through with the entire [enrollment workflow](https://learn.fabric-testbed.net/knowledge-base/quick-start-guide/) which includes **logging into the portal for the first time** once the enrollment has been approved.

## Project permissions

When a project is created initially, it has very limited rights to FABRIC resources: its members can create slices only with small Virtual Machines that have no specialized components and can only span one site_._

To gain additional rights, _project tags_ must be added to the project by FABRIC staff at the request of one of the owners. Each tag unlocks a particular feature of the testbed. Adding permission tags to a project is deliberately a manual process with human-in-the-loop review.

If you try to create a slice that is attempting to use resources or features to which your selected project hasn't been granted permissions, you will get an error back from the Control Framework indicating with project tag needs to be added to your project for this slice request to succeed.

The table below demonstrates the various tags and the rights they confer:

| Project Tag | Description of rights | | --- | --- | | VM.NoLimitCPU | Allows to create VMs with more than 2 CPU cores | | VM.NoLimitRAM | Allows to create VMs with more than 10 GB of RAM | | VM.NoLimitDisk | Allows to create VMs with more than 10 GB of disk | | VM.NoLimit | VM.NoLimitCPU | VM.NoLimitRAM | VM.NoLimitDisk | | Component.GPU | Allows to provision and attach GPU components | | Component.FPGA | Allows to provision and attach FPGA components | | Component.SmartNIC\_ConnectX\_5,Component.SmartNIC\_ConnectX\_6,Component.SmartNIC\_ConnectX\_7\_100,Component.SmartNIC\_ConnectX\_7\_400 | Allows to provision and attach 25G, 100G, or BlueField dedicated SmartNIC components | | Component.Storage | Allows to create and attach persistent rotating storage | | Component.NVME | Allows to provision and attach NVME components | | Net.NoLimitBW | Allows to provision links over 10 Gbps | | Net.FABNetv4Ext | Allows to create slices with public IPv4 connectivity | | Net.FABNetv6Ext | Allows to create slices with public IPv6 connectivity | | Net.PortMirroring | Allows to create slices that include port mirroring | | Slice.Multisite | Allows to create slices spanning multiple sites | | Slice.NoLimitLifetime | Allows to create slices with a lifetime up to 6 months without renewal. | \*FABRIC Project Tags\*

In addition, there are project tags supporting the use of Facility Ports, with each facility port requiring its own unique tag to be used. They have the form of _Net.FacilityPort.XYZ_ where XYZ is the name of the facility port. There is also a _Net.AllFacilityPorts_ tag that allows the use of any Facility Port by the project.

Project permissions can be requested from the project information page in FABRIC portal by Project Owners.

## Managing projects in the real world

This section's target audience are Project Leads and Project Owners and it covers some DOs and DONTs and best practices in managing your FABRIC projects.

Managing FABRIC projects and their permissions may seem daunting, however it's crucial to recognize that along with the privilege of creating and managing projects on FABRIC, there also comes the accountability for the actions of everyone involved in those projects. If you or any members of your projects engage in malicious misuse of resources in FABRIC, both you and them may face permanent loss of access to the platform.

So DO:

1.  Request new permissions for your projects judiciously. Evaluate who you think the members of the specific project will be and how much confidence you have in their ability to use the testbed and the requested features appropriately
2.  Create new projects with different levels of permissions as necessary for different groups of your experimenters - it is very cheap

and DON'T:

1.  Don't bundle together experimenters of vastly different levels of experience and goals into the same project - **create separate projects and request different levels of permissions** for them to minimize the risk
2.  Don't keep experimenters as members of your projects if you have lost touch or no longer feel responsible for them - **remove them from the projects promptly**
3.  Don't create and manage projects on behalf of someone else - remember, you are responsible for the behavior of the experimenters you add to projects. **Do not add to projects people you are not personally familiar with.**

Some examples of the situations to which the DOs and DONTs may apply:

Running a complex research project with researchers of different levels of experience

You have a complex project that may require a lot of resources from FABRIC. You have a group of inexperienced graduate/undergraduate students and a few experienced post-docs and graduate students working on it. You are tempted to use a single project for everything. Don't. The best scenario is to create _two_ projects in FABRIC - one for the students with reduced permissions where they can do their assigned work, another for the postdocs with the full set of resources needed to conduct their research.

Remember you can always assign experimenters to multiple projects - if a student proves their ability to work responsibly you can later assign them to the project with more permissions.

Running a research project and a class

You have a research project and you are teaching a class. You already have a project in FABRIC for the research tasks and it has all the permissions (and then some) to teach the class. Don't be tempted to reuse it. Create a new project with the appropriate set of permissions and add your class students to that project.

Running a class using FABRIC over multiple semesters

You taught a class using a project intentionally created for this class. One semester has ended, another one has begun. Be sure to remove all the students that have finished your class. Don't leave them with privileges on the testbed beyond the time they actually need to use the testbed. If you have a TA or an RA, give them Project Owner permissions and have them maintain proper membership.
