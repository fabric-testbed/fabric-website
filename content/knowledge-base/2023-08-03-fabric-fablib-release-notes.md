---
title: FABRIC FABlib Release Notes
slug: fabric-fablib-release-notes
date: "2023-08-03"
date_modified: "2025-08-14"
author: Yaxue Guo
status: publish
wp_id: 4901
views: 1163
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Release 1.5

The [FABlib](https://learn.fabric-testbed.net/knowledge-base/fablib-api/) has been updated to support new Release 1.5 Features. The new version is available in “Bleeding Edge” Jupyter Container. Jupyter Example notebooks that helps experimenters take advantage of these new capabilities have also been added/updated. The new release contains following:

-   **Bug Fixes**

-   **Updates:**
    -   Support for listing facility ports
    -   Early detection of bastion connectivity failures
    -   Network Configuration has been made idempotent and can be re-applied post reboot

-   **New functionality:**
    -   Provisioning Port Mirror Network service described in detail [here](https://learn.fabric-testbed.net/knowledge-base/port-mirroring-in-fabric/)
    -   CPU Pinning and Numa tuning - users can now request to pin virtual CPUs and memory for their node to specific physical CPU and Numa nodes on the host machine for performance optimization
    -   FPGA - users can now request FPGAs to be connected to their nodes
    -   Multiple SSH Keys - users can now pass multiple keys to their slivers when provisioning a slice
