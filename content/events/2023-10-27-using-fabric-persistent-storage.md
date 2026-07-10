---
title: "Using FABRIC persistent storage"
date: "2023-10-27"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "See the Persistent Storage artifact form examples and more information."
author: "Ilya Baldin"
date_modified: "2025-09-11"
wp_id: 5962
views: 1548
tags:
  - events
---

See the [Persistent Storage](https://artifacts.fabric-testbed.net/artifacts/22f6887b-c377-46d5-93f9-0163c3ed489f) artifact form examples and more information.

## Overview

FABRIC has 3 types of storage that VMs can use:

-   Built-in VM disk - its size is determined when you create the VM by [specifying the `disk=` parameter](https://learn.fabric-testbed.net/knowledge-base/how-vms-are-sized-in-fabric/) (measured in GB)
-   [NVME SSD](https://learn.fabric-testbed.net/knowledge-base/fabric-nvme-drives/) drives that can be attached on-demand to each virtual machine (`Component.NVME` permission is required on the project)
-   Persistent rotating storage at specific sites

This article covers the last option. Unlike the other two options, persistent rotating storage outlives the slice lifetime. For example you can create a slice with a VM, attach persistent storage to it, save some data onto the drive mapped to that storage, then delete the slice. You can then come back some time later, create a new VM, attach the storage back and your data will still be there.

This is particularly useful if you are working with large datasets that need to be used as part of your experiment - you can download the data once onto persistent storage and then continue using it with different slices.

A typical use for such functionality is to create a slice that is attached to FABNetv4 or FABNetv6 internal network and serves data and files over it to other parts of the experiment. Note that it is up to you as an experimenter to decide how the data is served - you may decide to install NFS (generally doesn't work well over large latencies), you may decide to use REST/WebDAV or you may install an object store like MinIO. FABRIC only provides a bare block device that you must format yourself. The choice of filesystem may be limited by the version of the Linux kernel you are using.

## Specifics

In order to use this functionality, your project owner must request persistent storage to be allocated at specific sites via the portal. There is a 'Request Storage' button in the project view.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/10/Screenshot-2023-10-27-at-2.38.32-PM.png)

The button leads to a ticket form where you must identify the specific sites at which the storage needs to be allocated - this strongly depends on the planned topology of your experiment.

You also must provide a name for the volume - this is the name that will be used to mount the volume into the VM. You must also identify the size of the partition (in GB). Note that most FABRIC sites have about 1.25PB of disk space allocatable to such persistent volumes and the space is allocated on the first-come-first-serve basis.

Within a single request you can request one volume name, e.g. `my-volume` of size 100TB will be allocated at MICH, TACC and UCSD. If you need multiple volume names and sizes, please fill out multiple requests.

Each allocation typically lasts for 12 months (although you can tell us in the request how long you initially expect to need the volumes) and at the end of the period you will get an automated email requesting you either confirm you still need the volumes or tell us we can garbage collect them.

Existing persistent storage allocations are shown in the Persistent Storage tab of the project view in the portal.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/11/Screenshot-2023-11-02-at-4.42.28-PM-1024x398.png)

## Caveats

When the volumes are created your project will automatically be given `Component.Storage` permission - no need to request it separately.

You can see the volumes allocated to your project in the portal project view.

\- The VM attached to the storage must be located at the **same site** where the volume is allocated  
\- The VM must be allocated to a slice **within the project** to which the storage volume belongs  
\- A volume can only be attached to a **single** VM at any given time
