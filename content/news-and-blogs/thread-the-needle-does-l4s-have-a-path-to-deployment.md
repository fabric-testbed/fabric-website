---
title: "Thread the Needle: Does L4S Have a Path to Deployment?"
date: "2024-12-12"
type: "blog"
category: "research"
excerpt: "This is a user-contributed blog post evaluating TCP Prague and the L4S architecture using FABRIC experiments."
tags:
  - blog
  - thread the needle
---

*This is a user-contributed blog post by Fatih Berkay Sarpkaya, a PhD student at NYU Tandon School of Engineering.*

This post covers how FABRIC is used to evaluate the behavior of TCP Prague, a scalable congestion control protocol developed for the Low Latency, Low Loss, Scalable Throughput (L4S) architecture. L4S is a set of protocols which can dramatically reduce network delay.

## L4S: Low Latency, Low Loss, and Scalable Throughput

The L4S architecture incorporates three essential components: scalable congestion control, Accurate Explicit Congestion Notification (AccECN), and dual queue Active Queue Management (AQM).

## Our Research: Is L4S Favorable in a Partial Deployment Scenario?

Through experiments on FABRIC, the results confirm that when L4S flows are forwarded through an L4S bottleneck, they can achieve high throughput with extremely low latency. However, it's not always beneficial or "safe" for a sender to start using L4S. Since the sender does not know which conditions it will encounter at the bottleneck router, outside of very controlled conditions it may not be "safe" to start using L4S.

## How FABRIC Enables This Research

FABRIC's Jupyter notebook interface, combined with its Python library, makes it much easier to manage and streamline the full-factorial experiment design. All materials are available at [GitHub](https://github.com/fatihsarpkaya/L4S).

For more details, refer to the paper: Fatih Berkay Sarpkaya et al. 2024. *To switch or not to switch to TCP Prague?* In Proceedings of ANRW '24.
