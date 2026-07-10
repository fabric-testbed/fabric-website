---
title: Things to know when using FABRIC for the first time
slug: things-to-know-when-using-fabric-for-the-first-time
date: "2022-09-23"
date_modified: "2025-09-11"
author: Ilya Baldin
status: publish
wp_id: 3163
views: 4499
categories:
  - Getting Started
tags:
  - documentation
  - getting started
---

## Basic Facts

FABRIC has three ways of interacting with it:

-   [Portal](https://portal.fabric-testbed.net/) - manage projects, SSH keys, API tokens. Create or visualize slice topologies
-   Jupyter Notebooks in FABRIC's own Jupyter Hub - using FABRIC APIs to **run experiments** and not just create topologies - all in a browser
-   Use FABRIC APIs from experimenter laptop or desktop - FABRIC API libraries are available for download from PyPi.

We strongly recommend starting your FABRIC experiments with Jupyter Notebooks

The [types of resources FABRIC](https://learn.fabric-testbed.net/knowledge-base/fabric-site-hardware-configurations/) offers are

-   [Virtual machines of different sizes](https://learn.fabric-testbed.net/knowledge-base/how-vms-are-sized-in-fabric/) (up to 64 cores, 384G RAM) with directly attached PCI devices - GPUs, Network Cards, NVMe drives, FPGAs.
-   Virtual machines can be placed at the sites of your choice and interconnected by a [rich set of on-demand Layer 2 and Layer 3 network services](https://learn.fabric-testbed.net/knowledge-base/network-services-in-fabric/)
-   Virtual machines can have large storage volumes attached to them
-   VMs or _slivers_ are arranged in _slices_ representing individual experiment topologies. Slices can be created, modified and deleted.
    -   Slices have a finite lifetime, but can typically be extended before they expire
-   FABRIC Slices can connect to other testbeds or facilities using Facility Ports

## Getting a FABRIC Account

FABRIC uses [different credential types](https://learn.fabric-testbed.net/knowledge-base/fabric-credentials-overview/), however everything is tied to your institutional identity - all elements of the infrastructure - the Portal, Jupyter Hub, this site (Knowledge Base), the use of APIs - everything requires logging in via CI Logon using your university credentials or one of the commercial identity providers (Google, GitHub).

Note that using Google, ORCID, GitHub or Microsoft as your identity provider requires extra verification steps by our staff. Whenever possible please try to use your university identity provider.

To get an account, before you can do anything you [must enroll via the portal](https://learn.fabric-testbed.net/knowledge-base/quick-start-guide/). The enrollment has multiple steps. After you complete the enrollment you can login to the Portal and be added to projects.

Some universities allow you to use multiple different emails with the same password to login to their systems. Please always use a **single email** with FABRIC. Once you sign up using _user@university.edu_, continue using that address for all other activities on FABRIC.

## Using and managing Projects

A Project is a group of experimenters with the same permissions. Professors and senior research staff can request and manage a project. See [Creating a project](https://learn.fabric-testbed.net/knowledge-base/creating-or-joining-a-project/). for more information. Each project has a [set of permissions](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/#project-permissions) to specific FABRIC resources. Project owners can request additional permissions for their projects.

You can only create slices **after** you've been added to one or more projects. Every experiment you create on FABRIC is done on behalf of some project you are part of.

## Interacting with FABRIC

Experimenters interact with FABRIC using REST-based APIs which are invoked using [FABlib library](https://learn.fabric-testbed.net/knowledge-base/fablib-api/) or the Portal. Portal only allows you to manage _slice topologies_ while FABlib also lets you _configure experiments_. This is a crucial difference as in addition to a topology an experiment has configuration states, data and may include resources from other testbeds. The Portal can only create slices on FABRIC. FABlib is developing integrations with other testbeds' APIs to support cross-testbed experiments.

To authenticate APIs FABRIC uses [API tokens](https://learn.fabric-testbed.net/knowledge-base/obtaining-and-using-fabric-api-tokens/). Tokens can expire, they can also be renewed. Note that Jupyter Notebooks automatically manage tokens for you.

We provide a rich set of example Jupyter notebooks that showcase the different capabilities of the testbed and simple experiments. See the [Artifact Manager](https://artifacts.fabric-testbed.net/) to access the examples. In addition, many users contribute examples to the Artifact Manager.

## Logging into VMs

FABRIC relies on [bastion hosts](https://learn.fabric-testbed.net/knowledge-base/logging-into-fabric-vms/) to restrict access to VMs you create in your slices. Because of this, [**two** SSH **keypairs**](https://learn.fabric-testbed.net/knowledge-base/logging-into-fabric-vms/) are needed to login to a VM - a bastion keypair and a slice/sliver keypair. FABRIC allows managing bastion and slice/sliver keys via the Portal and APIs.

Bastion keys expire after 6 months and need to be regenerated. Slice/sliver keys registered with the Portal expire after 2 years. You can find your currently active keys in the Portal.

## Management vs Dataplane

FABRIC has a concept of a [_management_ plane and a _dataplane_](https://learn.fabric-testbed.net/knowledge-base/network-interfaces-in-fabric-vms/)_._ Management plane is used for

-   Logging into VMs via bastion hosts
-   Downloading necessary software into VMs from the Internet

Management plane is rate-limited to about 1Gbps and shared among many experimenters. It has **traffic filtering rules** to prevent hosting Internet-facing services and should not be used as part of experiment data flows.

Most FABRIC sites' management networks are on [IPv6 network](https://learn.fabric-testbed.net/knowledge-base/using-ipv4-only-resources-like-github-or-docker-hub-from-ipv6-fabric-sites/), i.e. they provide IPv6 management addresses to experimenter VMs. Bastion hosts have access to both IPv4 and IPv6 network so they make using IPv4 and IPv6 sites transparent to experimenters. Generally you will not have any problems accessing IPv6 sites from the IPv4 network, however in some cases fetching software from the IPv4 network into your IPv6 VMs may [require additional configuration steps](https://learn.fabric-testbed.net/knowledge-base/using-ipv4-only-resources-like-github-or-docker-hub-from-ipv6-fabric-sites/).

Dataplane on the other hand is intended for running experiments - [connecting VMs with one another into desired topologies](https://learn.fabric-testbed.net/knowledge-base/network-services-in-fabric/) and connecting to external resources - HPC facilities, other testbeds, public cloud providers and the Internet. It provides high-bandwidth (100Gbps on many links) and many types of on-demand network services.

## Getting Help

Visit [this article](https://learn.fabric-testbed.net/knowledge-base/getting-help/) for more information. [This article](https://learn.fabric-testbed.net/knowledge-base/searching-the-knowledge-base/) discusses how to search for information.
