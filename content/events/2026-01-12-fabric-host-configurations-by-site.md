---
title: "FABRIC Host Configurations by Site"
date: "2026-01-12"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "This page provides detailed CPU information for FABRIC testbed sites, addressing the limitations of the current aggregate advertisements."
author: "Komal Thareja"
date_modified: "2026-01-12"
wp_id: 9362
views: 582
tags:
  - events
---

This page provides detailed CPU information for FABRIC testbed sites, addressing the limitations of the current aggregate advertisements.

## CPU Model Distribution

FABRIC testbed uses four AMD EPYC 7002/7003 series processor models:

-   **EPYC 7532** (32-core): Most common, used at 20 sites (67 total workers)
-   **EPYC 7543** (32-core): Used at 12 sites (36 total workers)
-   **EPYC 7542** (32-core): CERN only (6 workers)
-   **EPYC 7763** (64-core): EDUKY only (17 workers, higher core count)

* * *

## CPU Configuration by Site and Node

The following table shows **confirmed** CPU models for all FABRIC worker nodes.

### Confirmed CPU Models by Worker Node

| Node | CPU Model | Cores per CPU | Total Cores (2 CPUs) | | --- | --- | --- | --- | | amst-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | amst-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | amst-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | atla-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | atla-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | brist-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | brist-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | brist-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | cern-w1 | AMD EPYC 7542 32-Core Processor | 32 | 64 | | cern-w2 | AMD EPYC 7542 32-Core Processor | 32 | 64 | | cern-w3 | AMD EPYC 7542 32-Core Processor | 32 | 64 | | cern-w4 | AMD EPYC 7542 32-Core Processor | 32 | 64 | | cern-w5 | AMD EPYC 7542 32-Core Processor | 32 | 64 | | cern-w6 | AMD EPYC 7542 32-Core Processor | 32 | 64 | | clem-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | clem-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | clem-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | dall-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | dall-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | dall-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | eduky-w1 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w2 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w3 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w4 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w5 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w6 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w7 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w8 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w9 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w10 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w11 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w12 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w13 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w14 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w15 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w16 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | eduky-w17 | AMD EPYC 7763 64-Core Processor | 64 | 128 | | fiu-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | fiu-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | fiu-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | fiu-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | fiu-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gatech-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gatech-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gatech-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gatech-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gatech-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gpn-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gpn-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gpn-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gpn-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | gpn-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | hawi-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | hawi-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | hawi-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | hawi-w4 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | hawi-w5 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | indi-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | indi-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | indi-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | kans-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | kans-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | kans-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | lbnl-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | lbnl-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | lbnl-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | losa-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | losa-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | losa-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | mass-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | mass-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | mass-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | max-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | max-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | max-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | max-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | max-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | mich-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | mich-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | mich-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | ncsa-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | ncsa-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | ncsa-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | newy-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | newy-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | prin-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | prin-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | prin-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | psc-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | psc-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | psc-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | renc-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | renc-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | renc-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | rutg-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | rutg-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | rutg-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | rutg-w4 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | rutg-w5 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | salt-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | salt-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | salt-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | seat-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | seat-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | sri-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | sri-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | sri-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | star-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | star-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | star-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | star-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | star-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | star-w6 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | tacc-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | tacc-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | tacc-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | tacc-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | tacc-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | toky-w1 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | toky-w2 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | toky-w3 | AMD EPYC 7543 32-Core Processor | 32 | 64 | | ucsd-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | ucsd-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | ucsd-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | ucsd-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | ucsd-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | uky-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | uky-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | uky-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | utah-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | utah-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | utah-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | utah-w4 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | utah-w5 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | wash-w1 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | wash-w2 | AMD EPYC 7532 32-Core Processor | 32 | 64 | | wash-w3 | AMD EPYC 7532 32-Core Processor | 32 | 64 |

## CPU Model Distribution Summary

**AMD EPYC 7532 (20 sites, 67 workers):** CLEM, DALL, FIU, GATECH, GPN, INDI, LBNL, MASS, MAX, MICH, NCSA, RENC, SALT, SRI, STAR, TACC, UCSD, UKY, UTAH, WASH **AMD EPYC 7543** (12 sites, 36 workers): AMST, ATLA, BRIST, HAWI, KANS, LOSA, NEWY, PRIN, PSC, RUTG, SEAT, TOKY **AMD EPYC 7542** (1 site, 6 workers): CERN only **AMD EPYC 7763** (1 site, 17 workers): EDUKY only (higher core count)

* * *

## CPU Model Specifications

Confirmed AMD EPYC processor models used in FABRIC testbed:

### AMD EPYC 7532 (Most Common - 20 Sites)

-   **Generation**: EPYC 7002 Series (Rome)
-   **Cores per CPU**: 32
-   **Base Frequency**: 2.4 GHz
-   **Max Boost**: 3.3 GHz
-   **L3 Cache**: 256 MB
-   **TDP**: 200W
-   **Sites**: CLEM, DALL, FIU, GATECH, GPN, INDI, LBNL, MASS, MAX, MICH, NCSA, RENC, SALT, SRI, STAR, TACC, UCSD, UKY, UTAH, WASH

### AMD EPYC 7543 (12 Sites)

-   **Generation**: EPYC 7003 Series (Milan)
-   **Cores per CPU**: 32
-   **Base Frequency**: 2.8 GHz
-   **Max Boost**: 3.7 GHz
-   **L3 Cache**: 256 MB
-   **TDP**: 225W
-   **Performance**: ~17% higher base frequency than 7532
-   **Sites**: AMST, ATLA, BRIST, HAWI, KANS, LOSA, NEWY, PRIN, PSC, RUTG, SEAT, TOKY

### AMD EPYC 7542 (CERN Only)

-   **Generation**: EPYC 7002 Series (Rome)
-   **Cores per CPU**: 32
-   **Base Frequency**: 2.9 GHz
-   **Max Boost**: 3.4 GHz
-   **L3 Cache**: 128 MB
-   **TDP**: 225W
-   **Performance**: ~21% higher base frequency than 7532
-   **Sites**: CERN only

### AMD EPYC 7763 (EDUKY Only)

-   **Generation**: EPYC 7003 Series (Milan)
-   **Cores per CPU**: 64
-   **Base Frequency**: 2.45 GHz
-   **Max Boost**: 3.5 GHz
-   **L3 Cache**: 256 MB
-   **TDP**: 280W
-   **Special**: Double the core count of other models
-   **Sites**: EDUKY only

### Frequency Differences Matter

Performance variations between FABRIC's EPYC models (relative to 7532 baseline): | CPU Model | Base GHz | Boost GHz | Generation | Relative Performance | Sites Count | | --- | --- | --- | --- | --- | --- | | EPYC 7532 | 2.4 | 3.3 | Rome (7002) | 1.00× (baseline) | 20 sites | | EPYC 7543 | 2.8 | 3.7 | Milan (7003) | ~1.17× | 12 sites | | EPYC 7542 | 2.9 | 3.4 | Rome (7002) | ~1.21× | CERN only | | EPYC 7763 | 2.45 | 3.5 | Milan (7003) | ~1.02× (2x cores) | EDUKY only | **Key Insights:**

-   The 7543 (Milan) has ~17% higher base frequency than the 7532 (Rome)
-   The 7542 at CERN has the highest base frequency among 32-core models (~21% higher than 7532)
-   The 7763 at EDUKY has double the cores (64 vs 32) with similar frequency to 7532
-   Generation matters: Milan (7003) models generally have better IPC than Rome (7002)

## Additional Resources

-   [AMD EPYC 7002 Series Processors](https://www.amd.com/en/products/specifications/processors/12256,12261)
-   [Dell PowerEdge R7525 Specifications](https://www.dell.com/en-us/shop/dell-poweredge-servers/poweredge-r7525-rack-server/spd/poweredge-r7525)
-   [FABRIC Portal](https://portal.fabric-testbed.net/)
-   [FABRIC Learn - Hardware Configurations](https://learn.fabric-testbed.net/)

* * *

**Last Updated**: January 2026 **Note**: This documentation is based on confirmed CPU model information from the FABRIC testbed deployment.
