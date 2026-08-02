---
id: 3
slug: "3-l4s-deployment"
title: "Does L4S Have a Path to Deployment?"
subtitle: "Researchers use FABRIC to evaluate the behavior of TCP Prague and the Low Latency, Low Loss, Scalable Throughput (L4S) architecture in partial deployment scenarios"
image: "/imgs/highlights/l4s-deployment.png"
imageFit: "contain"
imagePlaceholder: "bg-gradient-to-br from-indigo-500 to-blue-400"
institution: "NYU Tandon School of Engineering"
domain: "Networking"
learnMore:
  projectUrl: "https://portal.fabric-testbed.net/experiments/public-projects/073ee843-2310-45bd-a01f-a15d808827dc"
  artifacts:
    - label: "Evaluation of TCP Congestion Control for Public High-Performance Wide-Area Networks"
      url: "https://artifacts.fabric-testbed.net/artifacts/00c5b5c5-78ad-4e06-8695-5fc6d6a88fc4"
researchers:
  - name: "Fatih Berkay Sarpkaya"
    title: "PhD Student, Department of Electrical and Computer Engineering"
    institution: "NYU Tandon School of Engineering"
    interests: ""
    contact: "https://engineering.nyu.edu/student/fatih-berkay-sarpkaya"
    photo: "/imgs/highlights/researchers/fatih-berkay-sarpkaya.png"
---

The Low Latency, Low Loss, Scalable Throughput (L4S) architecture is a set of protocols which, when deployed on endpoints and routers across a network, can dramatically reduce the delay experienced by packets traversing the network, enabling latency-sensitive applications like online gaming, video conferencing, and virtual reality.

## L4S: Low Latency, Low Loss, and Scalable Throughput

The L4S architecture is designed to reduce network queuing delay by incorporating three essential components: scalable congestion control, Accurate Explicit Congestion Notification (AccECN), and dual queue Active Queue Management (AQM). To gain all the benefits of L4S, a flow needs to be sent from a server that uses scalable congestion control and AccECN; it needs to traverse a bottleneck router (a router where, due to congestion, outgoing packets have to wait in a queue) that isolates L4S and non-L4S flow in separate queues, and applies ECN marking at a shallow threshold to the L4S queue; and the receiving end host needs to support AccECN.

Before L4S is deployed universally, though, a flow is likely to encounter non-L4S bottlenecks that are shared with non-L4S flows. To encourage more widespread deployment, an L4S flow should have throughput and delay characteristics at least as favorable as a non-L4S flow, even if some elements of the full architecture are missing, and an L4S flow should not be harmful to classic (non-L4S) flows.

## Is L4S favorable in a partial deployment scenario?

Through experiments on FABRIC, researchers confirmed that when L4S flows are forwarded through an L4S bottleneck, they can achieve high throughput with extremely low latency. However, the research also demonstrated that it's not always beneficial or "safe" for a sender to start using L4S.

The research identified that it's OK, even though not beneficial, for a sender to use L4S if the bottleneck router enforces fairness among flows, or if the bottleneck router mingles all flows in a single queue, does not use ECN marking, and the classic (non-L4S) flows at that bottleneck use TCP CUBIC congestion control (which is the most common congestion control protocol among popular Internet sites). In these settings, the L4S flow does not "harm" the non-L4S flows, and its own performance is about as good as a non-L4S flow's performance.

On the contrary, a user can get worse performance using L4S sometimes if the bottleneck router uses the L4S queueing mechanism and the classic flows at that bottleneck use TCP BBR congestion control (the second most common congestion control protocol among popular Internet sites), or if the bottleneck router has a very small buffer size and the classic flows use version 1 of TCP BBR.

The research also identified settings of greater concern, where the L4S flow is harmful to classic flows — most notably, when the bottleneck router mingles all flows in a single queue and uses ECN marking. Since the sender does not know which conditions it will encounter at the bottleneck router, outside of very controlled conditions it may not be "safe" for the sender to start using L4S.

## How FABRIC enables this research

Managing the full-factorial experiment design poses challenges, as it requires running a large number of unique experiments due to the different combinations of network settings.

FABRIC's Jupyter notebook interface, combined with its Python library, makes it much easier to manage and streamline this process. The researchers use the Jupyter interface to define a dictionary for each experiment, then use the FABRIC Python API to execute them. This approach makes it easier to start, stop, and resume experiments, or to add more network conditions afterwards and execute just the new set of experiments.
