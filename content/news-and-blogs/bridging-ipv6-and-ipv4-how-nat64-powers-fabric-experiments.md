---
title: "Bridging IPv6 and IPv4: How NAT64 Powers FABRIC Experiments"
date: "2026-02-11"
type: "blog"
category: "tips-and-tricks"
excerpt: "FABRIC is an IPv6-first research infrastructure, designed to support large-scale experimentation. Because many external services still rely on IPv4, FABRIC provides a NAT64 gateway which allows IPv6-only virtual machines to access IPv4-based services seamlessly."
tags:
  - blog
  - tips and tricks
---

FABRIC is an IPv6-first research infrastructure, designed to support large-scale experimentation. Because many external services still rely on IPv4, FABRIC makes its infrastructure accessible by providing a **NAT64 gateway** which allows IPv6-only virtual machines to access IPv4-based services seamlessly. Komal Thareja, *Distributed Systems Software Engineer*, explains, "NAT64 helps bridge the gap between modern IPv6-based infrastructure and the many tools and services that still operate on IPv4. It allows users to get started quickly without needing to reconfigure their environments."

## What the NAT64 Gateway Does

The NAT64 gateway enables IPv6-only virtual machines on FABRIC to reach IPv4-only services such as software and package repositories like GitHub, container registries, public APIs, and external code repositories. This process is automated through FABRIC's DNS and networking configuration, requiring no additional user setup. This allows users to access common tools such as apt, pip, docker, and git out of the box.

## When NAT64 Works Best

NAT64 is ideal for installing software packages, pulling container images, accessing public repositories, and light, short-term external access.

*NAT64 is meant to make everyday setup tasks easy, not to serve as a high-throughput data transfer mechanism.*

## Important Limitations

The NAT64 gateway is a **shared resource** with limited bandwidth across all users. Because of this, it is not designed for large dataset transfers, sustained high-bandwidth activity, and performance-sensitive workloads.

FABRIC encourages alternative approaches for data-heavy workflows.

## Best Practice: Use Persistent Storage

For better performance and reliability, download data once, store it in FABRIC's persistent storage, and reuse it across experiments.

This reduces repeated external traffic and improves experiment reproducibility.

## When to Use External Networking

For workflows that require higher bandwidth or direct internet access, FABRIC offers external networking options such as **FabNetv4Ext** and **FabNetv6Ext**. These are best suited for large data transfers, high-throughput workflows, and specialized networking experiments.

External networking requires approval and appropriate security configuration. [Click here](https://learn.fabric-testbed.net/knowledge-base/network-services-in-fabric/) to learn more about **FabNetv4Ext** and **FabNetv6Ext**.

## Summary

FABRIC's NAT64 gateway makes it easy to access IPv4-based resources from an IPv6 environment and is well-suited for everyday setup and development tasks. For larger or performance-critical workloads, users should rely on persistent storage or external networking options.

Below are recommendations for various scenarios:

- Initial software setup: NAT64 (default)
- Repeated experiment runs: Persistent storage/Distributed Storage Service
- Large dataset transfer (one-time): External peering
- Performance-sensitive transfers: FABNet paths
- Workshops/tutorials: Pre-staged data + persistence

For more information, post a question on our [forum linked here](https://learn.fabric-testbed.net/forums/forum/fabric-general-questions-and-discussion/).
