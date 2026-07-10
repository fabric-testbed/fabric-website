---
title: "Port Mirroring in FABRIC"
date: "2023-07-17"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "See the Port Mirroring artifact for examples and more information"
author: "Ilya Baldin"
date_modified: "2025-09-11"
wp_id: 4692
views: 1332
tags:
  - events
---

See the [Port Mirroring](https://artifacts.fabric-testbed.net/artifacts/b8d80058-3a3e-4313-822d-9aa5e94904fd) artifact for examples and more information

Port Mirroring is one of many [network services](https://learn.fabric-testbed.net/knowledge-base/network-services-in-fabric/) FABRIC offers to experimenters. The current implementation of Port Mirroring in FABRIC is somewhat limited both by the functionality of FABRIC dataplane switches as well as higher level software. It allows to do one thing:

-   Mirror traffic from one physical port of the dataplane switch at a given site into another physical port of the same switch

You can mirror both to and from the 100G as well as the 10/25Gbps ports however keep in mind that a 100Gbps port produces 200Gbps of traffic if you include both directions, therefore a single 100Gbps port cannot possibly mirror all traffic going through another 100Gbps port.

The general use pattern involves first building a slice or slices that may generate traffic through a particular port (via e.g. FABRIC or internal routing) and then having another slice mirror that port into another one for monitoring or analysis purposes.

In order to mirror a particular port the experimenter must know the name of this port in real life, which is reported as a label on the slice manifests received from FABRIC control framework. So the workflow to creating a slice that receives mirrored traffic looks something like this:

1.  Create slice or slices that will generate the traffic of interest
2.  Select a site and create a sufficiently large VM capable of handling incoming traffic, use a SmartNIC either ConnectX-5 (10/25G) or ConnectX-6 (100G).
3.  Connect one of the ports of the SmartNIC to a PortMirror service. As a parameter specify the name of the port to be mirrored on the label in the service
4.  Create the slice and observe the incoming traffic

A [notebook example](https://github.com/fabric-testbed/jupyter-examples/blob/main/fabric_examples/fablib_api/create_port_mirror/port_mirror.ipynb) is provided with the latest Jupyter Examples

Note that the service allows you to mirror for example an upstream port of any site, which carries the mix of traffic from multiple experiments, as such allowing you to eavesdrop on traffic from others. This could be part of the experiment, but it can also be unintentional and can potentially be abused.

For this reason this service requires a special [project permission](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/) (`Net.PortMirror`) and as part of the request for this feature the project owner must provide a justification for why they need this service and also what measures they will take to either

-   Prevent the abuse of the service by the members of their project (the measures can include e.g. creating another project that is granted this permission with only a few experienced project members entrusted not to abuse the feature).
-   Protect the collected data if they are collecting it from other experiments.

We anticipate further developing this capability to add another variant of this service that only allows mirroring ports that belong to the slice or slices already in the project, thus limiting the potential security implications.
