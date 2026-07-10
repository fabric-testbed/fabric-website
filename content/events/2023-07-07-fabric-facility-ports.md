---
title: "FABRIC Facility Ports"
date: "2023-07-07"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "FABRIC offers a number of unique network services that can connect different interfaces of slice elements (slivers) together in custom topologies. These topologies are contained within the FABRIC data..."
author: "Ilya Baldin"
date_modified: "2025-09-11"
wp_id: 4643
views: 1714
tags:
  - events
---

FABRIC offers a number of unique [network services](https://learn.fabric-testbed.net/knowledge-base/network-services-in-fabric/) that can connect different [interfaces of slice elements (slivers)](https://learn.fabric-testbed.net/knowledge-base/network-interfaces-in-fabric-vms/) together in custom topologies. These topologies are contained within the FABRIC dataplane. If you want to attach elements of infrastructure external to FABRIC into your [slice](https://learn.fabric-testbed.net/knowledge-base/glossary/), you must utilize one or more Facility Ports. These are pre-negotiated connection points between FABRIC dataplane and some other element of cyber-infrastructure - a campus network or campus cluster, a datacenter, a scientific instrument, a testbed. Once added into the FABRIC dataplane, they can be made part of a slice and connected to via one of the available network services.

A partial list of FABRIC facility ports, by way of example, includes:

-   CloudLab [Utah](https://www.cloudlab.us/) (including Powder/RENEW PAWR testbed) and [Clemson](https://clemson.cloudlab.us/portal/frontpage.php) locations
-   [Chameleon Cloud](https://chameleoncloud.org/) U of Chicago and TACC locations
-   [Cryo-EM](https://iqb.rutgers.edu/cryofacilities) facility at Rutgers University (RCNF)
-   LHC at U of Chicago and at U of Michigan

Facility Ports in FABRIC can connect to facilities that offer programmatic configuration of their side of the connection (e.g. Chameleon or CloudLab) as well as manual configuration (RCNF, LHC).

## Using Facility Ports

See the [Facility Port](https://artifacts.fabric-testbed.net/artifacts/239be881-4755-4eea-8ab4-df5d29aa45d4) artifact for examples and more information.

## Adding new Facility Ports

If you are an **experimenter** who needs a connection to a particular facility, instrument or testbed that is not already one of FABRIC Facility Ports, or you are a member of **campus, facility or regional provider IT team** interested in connecting to FABRIC, the FABRIC team is always interested in expanding its footprint and connecting more CI resources in order to make FABRIC into a more capable and diverse platform.

Use the Office Hours page from the Portal [Contact Us](https://portal.fabric-testbed.net/help) page to book time with members of the FABRIC team to discuss your particular facility (use 'Connecting to FABRIC' category):

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/Screen-Shot-2023-07-07-at-2.46.08-PM.png)

## But what is a Facility Port, really?

In 'network speak' a Facility Port is a pre-negotiated set of VLANs that connect the facility (via some combination of campus, regional and national network providers) to a nearest FABRIC node. Those VLANs may have IPv4 or IPv6 configuration associated with them.

All these details are established, discussed and noted in FABRIC documentation in the design discussions regarding the Facility Port. FABRIC staff help coordinate with the various network providers to make sure that the necessary connections are established and intermediate network elements are configured to pass the traffic.

Part of the negotiation with the facility also involves a discussion on who should be allowed to use the new Facility Port. FABRIC staff grants permissions to use Facility Ports to projects based on requests from project owners (requests are sent via FABRIC ticket system), and the process always involves a human-in-the-loop review prior to the permission being granted. The actual process depends on the facility - it can take any number of forms and depends on the preferences of facility IT personnel and its policies:

-   FABRIC Staff grants the permission so long as the project demonstrates a bona fide documented need
-   FABRIC Staff consults with facility personnel prior to granting permission
-   Only a specific pre-approved list of experimenters and their projects are allowed to use the Facility Port
