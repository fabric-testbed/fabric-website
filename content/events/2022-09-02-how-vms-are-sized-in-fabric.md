---
title: "How VMs are sized in FABRIC"
date: "2022-09-02"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "When you ask FABRIC to create you a VM node, you have the option of specifying its 'size', i.e. the number of CPU cores, the size of the RAM and associated disk (note that it is also possible to attac..."
author: "Ilya Baldin"
date_modified: "2026-01-12"
wp_id: 2832
views: 1604
tags:
  - events
---

When you ask FABRIC to create you a VM node, you have the option of specifying its 'size', i.e. the number of CPU cores, the size of the RAM and associated disk (note that it is also possible to attach a large 'external' persistent disk to the node, however that is a [separate article](https://learn.fabric-testbed.net/knowledge-base/using-fabric-persistent-storage/)). You may say something like this in your experiment code:

```
cores=10
ram=20
disk=50

# create a slice object
slice = fablib.new_slice(name=slice_name)

# Add a node to it at
slice.add_node(name=name, site=site, host=worker, cores=cores, ram=ram, disk=disk)
```

Here `cores`, `ram`, and `disk` are integers, with RAM and disk size measured in Gigabytes. You can request VMs of size up to 64 cores and 384 GB of RAM with a disk size varying from 10GB to 4TB, however there are set increments in which you can request 'the next size up' and not all combinations of all possible values of these dimensions are achievable.

-   Cores start at 1, then 2, then in increments of 2 up to 64
-   RAM goes in powers of 2 between 2 and 256 and then goes up to 384GB
-   Disk starts from 10, 100, 500GB, 2TB, 4TB

All available combinations of these dimensions are defined in approximately 1000 'flavors' inside OpenStack that runs in individual FABRIC sites. Notice this is not all **possible** combinations, but instead all **available** - to cap the number of combinations at about 1000.

FABlib code, when you ask for certain number of cores, RAM and disk tries to find the nearest _**larger**_ flavor than what you are requesting, until your request exceeds the largest, and then it gives you the largest flavor possible. You can always check by looking at your node properties using FABlib what the actual dimensions of the allocated VM are:

```
try:
    for node in slice.get_nodes():
        print(f"{node}")
except Exception as e:
    print(f"Exception: {e}")
```
```
-----------------  -------------------------------------------------------------------------------------------------------------------------
ID                 d67ed5b6-d3a8-4985-b006-2fe36c1537ae
Name               Node1
Cores              10
RAM                32
Disk               100
Image              default_rocky_8
Image Type         qcow2
Host               site-w1.fabric-testbed.net
Site               SITE
Management IP      xyz.xyz.xyz.xyz
Reservation State  Active
Error Message
SSH Command        ssh -i /home/fabric/work/fabric_config/slice_key -J user_000012345@bastion.fabric-testbed.net rocky@xyz.xyz.xyz.xyz
-----------------  -------------------------------------------------------------------------------------------------------------------------
```

A careful reader will notice that we requested a VM with 10 cores, 20 GB of RAM and 50 GB of disk, but received a VM with 10 cores, 32 GB of RAM and 100GB of disk.

For those truly curious, the flavors available in a particular release (and they may change from release to release, occasionally) you can see the full set of flavors [here on GitHub](https://github.com/fabric-testbed/InformationModel/blob/master/fim/slivers/data/instance_sizes.json).
