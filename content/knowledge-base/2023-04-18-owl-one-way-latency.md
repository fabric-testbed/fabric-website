---
title: OWL (One-way Latency)
slug: owl-one-way-latency
date: "2023-04-18"
date_modified: "2025-09-11"
author: Mami Hayashida
status: publish
wp_id: 4119
views: 1340
categories:
  - Measurement Framework API (MFlib)
---

OWL (One-way Latency) is a network latency measurement tool developed specifically for experiments leveraging the PTP (precision time protocol) on FABRIC testbed.

Traditionally, the network latency between two endpoints are measured by the round-trip time as the system clocks on the endpoints were almost always "off" by a large margin. Using PTP-enabled nodes on FABRIC, however, we are able to timestamp a UDP packet when it leaves one node, and timestamps it again when it is received at the destination node.

For OWL, the "sent" timestamp, along with a sequence number (generated automatically starting at a random integer incremented for each subsequent packet) are written to the data section of each UDP "probe packet" and set to a specific port of the receiving node. The receiver node listens to UDP packets coming into the port, records the receipt time. The OWL application calculates the one-way latency by subtracting the sent time from the received time.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/04/owl_architecture.jpg)

## How to use OWL

**Jupyter Notebook Example**: [https://github.com/fabric-testbed/jupyter-examples/blob/96535785ee47d99ddb1bfdbd9a1a3dea6ace286f/fabric\_examples/complex\_recipes/owl/owl.ipynb](https://github.com/fabric-testbed/jupyter-examples/blob/96535785ee47d99ddb1bfdbd9a1a3dea6ace286f/fabric_examples/complex_recipes/owl/owl.ipynb)

**Docker version of OW**L: [https://hub.docker.com/r/fabrictestbed/owl](https://hub.docker.com/r/fabrictestbed/owl) (the Jupyter Notebook above shows how to use this image)

**Source code**: [https://github.com/fabric-testbed/owl](https://github.com/fabric-testbed/owl)

OWL can theoretically be used in a non-FABRIC environment. It is, however, essential that the sender and receiver nodes use highly synchronized clocks.

## Latency Dashboard

As a service to the FABRIC user community, we provide a latency dashboard that shows the one way latency between measured between nodes placed on FABRIC sites that are currently up and PTP-capable. Since the measurements are taken on the Data Plane, users should expect similar performance in their own slices:

[https://public-metrics.fabric-testbed.net/latency/](https://public-metrics.fabric-testbed.net/latency/)
