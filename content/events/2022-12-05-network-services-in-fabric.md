---
title: "Network Services in FABRIC"
date: "2022-12-05"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "FABRIC offers a rich set of what are called 'Network Services', abstractions of connectivity options possible between elements of your experiment in FABRIC dataplane."
author: "Ilya Baldin"
date_modified: "2023-11-25"
wp_id: 3531
views: 2457
tags:
  - events
---

FABRIC offers a rich set of what are called 'Network Services', abstractions of connectivity options possible between elements of your experiment in FABRIC [dataplane](https://learn.fabric-testbed.net/knowledge-base/network-interfaces-in-fabric-vms/).

FABRIC offers Layer 2, Layer 3 and specialized services. Layer 2 services create on-demand Ethernet connections between dataplane interfaces in one or more FABRIC sites. Similarly Layer 3 services offer 'out-of-the-box' IPv4 or IPv6 connectivity.

The majority of the time when using [FABlib](https://learn.fabric-testbed.net/knowledge-base/fablib-api/) you can simply select whether you want a Layer2 or a Layer 3 (IPv4 or IPv6) network service and the API will automatically select the appropriate _internal_ FABRIC service type for you.

The remainder of this section discusses these internal FABRIC service types that support different properties of connections, this discussion may help you with debugging or understanding the behavior of your experiments.

Note that many services require special [project permissions](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/) to be granted before they can be used.

## Layer 2 Services

| Service Name | Service Description | Permissions Required | | --- | --- | --- | | L2Bridge | A single-site Ethernet service that can connect multiple Basic and Dedicated interfaces in a single site | No special permissions. | | L2STS | A site-to-site Ethernet service that can connect multiple Basic and Dedicated interfaces between exactly two sites | Slice.Multisite. | | L2PTP | A port-to-port Ethernet service that can connect exactly two dedicated interfaces between two sites. | Slice.Multisite. | \*Layer 2 Services\*

In addition to connecting together VM slivers in your slice L2 Services can also connect to other testbeds (e.g. Chameleon, CloudLab), HPC facilities, scientific instruments and campus resources via Facility Ports.

## Layer 3 Services

| Service Name | Service Description | Address Space | Permissions Required | | --- | --- | --- | --- | | FABNetv4 | An IPv4 service with RFC1918 addressing which can connect any number of interfaces across any number of sites. Communication with the outside world (public Internet) is not possible. | RFC1918 assigned by FABRIC | No special permission if using within a single site, otherwise Slice.Multisite. | | FABNetv6 | An IPv6 service using FABRIC's IPv6 address allocation, which can connect any number of interfaces across any number of sites. Communication with the outside world (public IPv6 Internet) is not possible. | 2602:FCFB::/36 | No special permission if using within a single site, otherwise Slice.Multisite. | | FABNetv4Ext | An IPv4 service which uses FABRIC's IPv4 public addresses which can connect any number of interfaces across any number of sites. Selected nodes can communicate with the outside world. | 23.134.232.0/22 | Net.FABNetv4Ext1 | | FABNetv6Ext | An IPv6 service which uses FABRIC's IPv6 public addresses which can connect any number of interfaces across any number of sites. Selected nodes can communicate with the outside world (IPv6 Internet). | 2602:FCFB::/36 | Net.FABNetv6Ext1 | | L3VPN | A Layer 3 VPN service which constructs a privately routed L3 network (IPv4 or IPv6) with user-selected addressing. | RFC1918 assigned by user. | No special permission if using within a single site, otherwise Slice.Multisite. | \*Layer 3 Services\*

## Specialized Services

| Service Name | Service Description | PermissionsRequired | | --- | --- | --- | | PortMirror | A service that allows to mirror a single physical port in FABRIC topology into a Dedicated card port at a given site. | Net.PortMirror2 | \*Specialized Services\*

1 _Because FABNetv4Ext and FABNetv6Ext expose your slice directly to the outside world, additional security review is required prior to granting this permission_

2 _Because PortMirror service allows experimenters to eavesdrop on traffic from other experiments, additional security review is required prior to granting this permission._
