---
title: "Thread the Needle: Does L4S have a path to deployment?"
date: "2024-12-13"
type: "blog"
category: "community"
excerpt: "_This is a user-contributed blog post by Fatih Berkay Sarpkaya, a PhD student in the Department of Electrical and Computer Engineering at NYU Tandon School of Engineering._"
author: "Jayasree Jaganatha"
date_modified: "2024-12-12"
wp_id: 7946
views: 905
tags:
  - blog
  - thread the needle
---

_This is a user-contributed blog post by [Fatih Berkay Sarpkaya](mailto:fbs6417@nyu.edu), a PhD student in the Department of Electrical and Computer Engineering at NYU Tandon School of Engineering._

Hello FABRIC Community! In this blog post, we will tell you about how we use FABRIC to evaluate the behavior of TCP Prague, a scalable congestion control protocol that is developed for the Low Latency, Low Loss, Scalable Throughput (L4S) architecture. L4S is a set of protocols which, when deployed on endpoints and routers across a network, can dramatically reduce the delay experienced by packets traversing the network, enabling latency-sensitive applications like online gaming, video conferencing, and virtual reality.

## **L4S: Low Latency,  Low Loss, and Scalable Throughput**

The Low Latency, Low Loss, Scalable Throughput (L4S) architecture is designed to reduce network queuing delay by incorporating three essential components: scalable congestion control, Accurate Explicit Congestion Notification (AccECN), and dual queue Active Queue Management (AQM). To gain all the benefits of L4S, a flow needs to be sent from a server that uses scalable congestion control and AccECN; it needs to traverse a bottleneck router  (a router where, due to congestion, outgoing packets have to wait in a queue) that isolates L4S and non-L4S flow in separate queues, and applies ECN marking at a shallow threshold to the L4S queue; and the receiving end host needs to support AccECN.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeZnV2NLS4SfWvyu2UUeXTIhrmzYqXsKkQ_b-LRWTUcSbWVfLX4d9M1XuYERMgsU5kwGNjkMq0_GfgjYsJgLafCACrScuXtTNB4I7F_tJhR29BZ4U29b1y7Zy31-rtC-LoNEHvW7-CEiL2czXIa_LAmOPS3?key=SbKHpbNqYtriwJTv6P05hA)

Before L4S is deployed universally, though, a flow is likely to encounter non-L4S bottlenecks that are shared with non-L4S flows. To encourage more widespread deployment…

-   An L4S flow should have throughput and delay characteristics at least as favorable as a non-L4S flow, even if some elements of the full     architecture are missing. 
-   An L4S flow should not be harmful to classic (non-L4S) flows. 

In our work, we investigate L4S flow behavior from the point of view of the sender, who does not know what type of conditions a flow will encounter along the path! We evaluate partial L4S deployment scenarios including both L4S-compatible and non-L4S bottlenecks, in order to better understand the path to deployment for L4S. 

## **Our research: Is L4S favorable in a partial deployment scenario?**

Through our experiments on FABRIC, our results confirm that when L4S flows are forwarded through an L4S bottleneck, they can achieve high throughput with extremely low latency. However, we also demonstrated that it's not always beneficial or  "safe" for a sender to start using L4S. 

We identified that it's OK, even though not beneficial, for a sender to use L4S if…

-   The bottleneck router enforces fairness among flows 
-   The bottleneck router mingles all flows in a single queue, does not use ECN marking, and the classic (non-L4S) flows at that bottleneck use TCP CUBIC congestion control (which is the most common congestion control protocol among popular Internet sites)

In these settings, the L4S flow does not "harm" the non-L4S flows, and its own performance is about as good as a non-L4S flow's performance.

On the contrary, a user can get worse performance using L4S sometimes, if…

-   The bottleneck router uses the L4S queueing mechanism, and the classic (non-L4S) flows at that bottleneck use TCP BBR congestion control  (which is the second most common congestion control protocol among popular Internet sites).
-   The bottleneck router has a very small buffer size, and the classic (non-L4S) flows at that bottleneck use version 1 of the TCP BBR congestion control.

We also identified settings that are of greater concern, where the L4S flow is harmful to the classic flow - the classic flow achieves much less throughput than it is supposed to. Most notably, when the bottleneck router mingles all flows in a single queue, and uses ECN marking.

Since the sender does not know which conditions it will encounter at the bottleneck router, outside of very controlled conditions it may not be "safe" for the sender to start using L4S.

## **How FABRIC enables this research**

Managing our full-factorial experiment design poses challenges, as it requires running a large number of unique experiments due to the different combinations of network settings. 

FABRIC's Jupyter notebook interface, combined with its Python library and some of our own tricks, makes it much easier to manage and streamline this process. We use the Jupyter interface to define a dictionary for each experiment we want to run, then use the FABRIC Python API to execute them. This approach makes it easier to start, stop, and resume experiments, or to add more network conditions afterwards and execute just the new set of experiments.

All of the materials for our FABRIC experiments are available at the following Github repositories:

-   [https://github.com/fatihsarpkaya/TCP-ECN](https://github.com/fatihsarpkaya/TCP-ECN)
-   [https://github.com/fatihsarpkaya/L4S](https://github.com/fatihsarpkaya/L4S)

In reviewing the repositories, you can see how we implement the approach described above, and you can adapt it to your own experiments if it is helpful.

## **References**

For more details on our work, you may refer to our paper: 

Fatih Berkay Sarpkaya, Ashutosh Srivastava, Fraida Fund, and Shivendra Panwar. 2024. _To switch or not to switch to TCP Prague? Incentives for adoption in a partial L4S deployment._ In Proceedings of the 2024 Applied Networking Research Workshop (ANRW '24). Association for Computing Machinery, New York, NY, USA, 45–52. [https://doi.org/10.1145/3673422.3674896](https://doi.org/10.1145/3673422.3674896)
