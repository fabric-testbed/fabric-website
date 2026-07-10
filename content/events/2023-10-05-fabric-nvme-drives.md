---
title: "FABRIC NVMe Drives"
date: "2023-10-05"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "See the NVMe Drive artifact for examples and more information."
author: "Ilya Baldin"
date_modified: "2025-09-11"
wp_id: 5774
views: 1188
tags:
  - events
---

See the [NVMe Drive](https://artifacts.fabric-testbed.net/artifacts/b3e5d2dd-e0f1-46ee-bb6b-639ca0b72f41) artifact for examples and more information.

Almost each worker node in almost each FABRIC site contains some number of NVMe drives. These are all 1TB read-optimized SSDs however due to the changes in the availability of components during FABRIC construction the model of the NVMe differs from site to site (although all NVMes in a given site are always the same).

In FABRIC slice models the NVMes are always reported as `P4510` however in reality the models are different. The table below shows which sites have which NVMe models:

| Site | NVMe Model | | --- | --- | | AMST | Dell DC NVMe PE8010 RI U.2 960GB | | ATLA | Dell DC NVMe PE8010 RI U.2 960GB | | CERN | Dell Express Flash CD5 960G SFF | | CLEM | Dell Express Flash CD5 960G SFF | | DALL | Dell Express Flash CD5 960G SFF | | EDC | None | | FIU | Dell Express Flash CD5 960G SFF | | GATECH | Dell Express Flash CD5 960G SFF | | GPN | Dell Express Flash CD5 960G SFF | | HAWI | Dell DC NVMe PM9A3 RI U.2 960GB | | INDI | Dell DC NVMe PE8010 RI U.2 960GB | | KANS | Dell DC NVMe PE8010 RI U.2 960GB | | LBNL | Dell Express Flash NVMe P4510 1TB SFF | | LOSA | Dell DC NVMe PE8010 RI U.2 960GB | | MASS | Dell Express Flash CD5 960G SFF | | MAX | Dell Express Flash CD5 960G SFF | | MICH | Dell Express Flash CD5 960G SFF | | NCSA | Dell Express Flash CD5 960G SFF | | NEWY | Dell DC NVMe PE8010 RI U.2 960GB | | PSC | Dell DC NVMe PE8010 RI U.2 960GB | | RENC | Dell Express Flash NVMe P4510 1TB SFF | | RUTG | Dell DC NVMe PE8010 RI U.2 960GB | | SALT | Dell Express Flash CD5 960G SFF | | SEAT | Dell DC NVMe PE8010 RI U.2 960GB | | SRI | Dell DC NVMe PE8010 RI U.2 960GB | | STAR | Dell Express Flash NVMe P4510 1TB SFF | | TACC | Dell Express Flash CD5 960G SFF | | UCSD | Dell Express Flash CD5 960G SFF | | UKY | Dell Express Flash NVMe P4510 1TB SFF | | UTAH | Dell Express Flash CD5 960G SFF | | WASH | Dell Express Flash CD5 960G SFF |
