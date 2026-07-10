---
title: Power Usage Metrics
slug: power-usage-metrics
date: "2025-02-04"
date_modified: "2025-02-04"
author: Charles Carpenter
status: draft
wp_id: 8156
---

Power usage monitoring for FABRIC racks and experiments is currently very limited. There are many obstacles to pass power usage from a rack server to a user experiment. This page outlines a few of the difficulties and possible tools.

## Resolution

The frequency of metric gathering is low compared to the variations in power usage. This depends on the time frame desired. Some tools may grab measurements in millisecond intervals, however most metrics are currently gathered every 30 seconds.

## PDU - Power Distribution Units

Many PDUs make power usage, often watts & voltage, available for each plug in the unit. There are several different PDUs in use throughout the different datacenters that house the FABRIC racks. The mappings from plugs to servers is not clear. APIs for obtaining the information differ and some datacenters use their own PDUs to which we do not have access.

## RAPL -

## Existing Power Metrics

### Prometheus

rPDUIdentDevicePowerWatts renc,uky,clem, psc

rPDUIdentDevicePowerVA

node\_rapl\_core\_joules\_total

node\_rapl\_package\_joules\_total
