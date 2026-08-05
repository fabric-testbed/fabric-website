---
id: 11
slug: "11-ai-traffic-engineering"
title: "Teaching Networks to Think: AI-Driven Traffic Engineering on FABRIC"
subtitle: "Using deep reinforcement learning and programmable infrastructure to replace static routing with intelligent, adaptive network decision-making"
image: "/imgs/highlights/ai-traffic-engineering.jpg"
imagePlaceholder: "bg-gradient-to-br from-teal-500 to-emerald-400"
institution: "Oak Ridge National Laboratory"
domain: "AI / Machine Learning"
learnMore:
  projectUrl: "https://portal.fabric-testbed.net/experiments/public-projects/16eafd43-3e6c-4546-854c-935eea16552a"
  artifacts: []
researchers:
  - name: "Mariam Kiran"
    title: "Group Leader for Quantum Communications and Networking"
    institution: "Oak Ridge National Laboratory"
    interests: "Her research focuses on 'Engineering Self-Driving Networks', exploring AI/ML solutions for improving network performance, flexibility and high-speed distributed data transfers for science. Involving themes of deep learning, software engineering and complex networks, I have developed solutions for optimizing data movement, TCP/IP protocols, learning controllers for Wide area network (WANs), wireless/5G (& Beyond) and Quantum networked devices. "
    contact: "https://www.ornl.gov/staff-profile/mariam-kiran"
    photo: "/imgs/highlights/researchers/mariam-kiran.jpg"
  - name: "Shashwitha Puttaswamy"
    title: "Research Scientist"
    institution: "The George Washington University"
    interests: "Her research focuses on cyberinfrastructure, high-performance networking, distributed scientific computing, large-scale data movement, IoT-enabled sensing, and HPC systems for data-intensive research."
    contact: "https://www.caaren.org/shashwitha-puttaswamy"
    photo: "/imgs/highlights/researchers/Shashwitha-Puttaswamy.jpeg"
---

When large-scale science moves across networks, it is rarely a simple point-A-to-point-B journey. High-energy physics datasets, telescope imagery, real-time analytics, and cloud workloads all compete for bandwidth—each with different performance needs. What if the network could learn, adapt, and optimize itself in real time?

That's the question driving the work of Mariam Kiran of Oak Ridge National Laboratory and Shashwitha Puttaswamy of The George Washington University. Using FABRIC, they are developing an AI-driven approach to dynamic traffic engineering that replaces static routing tables with intelligent, adaptive decision-making.

## Moving Beyond the Shortest Path

Traditional networks rely on precomputed routing tables and shortest-path algorithms. But science workflows are rarely that simple.

As Kiran explains: "When large science transfers are happening on the network, there are multiple objectives that you need to optimize. You need to reduce packet loss, you need to optimize for throughput, and you need to make sure that the transfer time is less. So it's a multi-objective problem that you're trying to solve when you are actually transferring from A to B."

Instead of relying on static routes, the team asked a different question: Can AI make these decisions on the fly?

Their approach uses deep reinforcement learning—an agent that observes live network conditions and adapts routing dynamically: "Can AI look at current network traffic, current packet loss that is happening, current links that are not working? And then adapt the traffic routes based on the demand of the traffic?"

To make the idea tangible, Kiran compares it to daily life: "If I open up Google Maps… I could see the shortest possible route to get to the airport. But if it's 9 am versus 5 pm, I could choose different paths, because I know that the traffic is going to be different on the roads."

In other words, instead of always taking the "shortest path," the system learns which path is _best_ under current conditions.

## Why FABRIC?

Designing an algorithm in simulation is one thing. Deploying it in a real network is another.

Before joining Oak Ridge, Kiran received her DOE Early Career Grant at ESnet, where she was building an AI Self-driving network for the ESnet Science network that would optimize traffic parameters and reduce packet loss. However, being experimental work, it is very difficult to test algorithms in production networks as they are carrying significant scientific data daily.

FABRIC changed that limitation.

"I started deploying all of my experiments on FABRIC. I would build a topology of complex devices across the FABRIC network, deploying the algorithms, simulating traffic, and actually see them in action."

Using P4-programmable devices on FABRIC, the team can modify packet headers and dynamically steer flows based on application requirements. Puttaswamy explains: "We have developed code that uses the P4 approach, where we change the header of the IP packets themselves dynamically, based on the application needs."

By modifying DSCP fields and leveraging application-aware routing, the system classifies and prioritizes traffic in real time.

## Optimizing for Elephant and Mice Flows

Science networks carry very different types of data.

"We have these big files, like physics-generated data from detectors. These are long transfers that take 5 hours to complete," Kiran says. "At the same time, you also have very small files, such as images being taken of materials and analyzed in real time; here, latency is a huge matter to optimize."

These "elephant flows" and "mice flows" require different optimization strategies. The team has introduced seven traffic classes, including low latency, high throughput, long-lived, short-lived, intent-based, and default flows.

"So this is nothing but an application-driven flow," says Puttaswamy. "We have an insight of the traffic itself, so that we can prioritize the flow."

The results are compelling. In early experiments on FABRIC: "The RTT went down by 98%, and the bandwidth improvement factor was 38% improvement."

While the project remains in its early stages, published results demonstrate clear performance gains compared to traditional routing approaches.

## Scaling in the Future

Today, the experiments run on relatively small topologies of 5 to 7 nodes. But the long-term vision is far bigger.

Currently, the AI agent operates in a centralized model—one "brain" making routing decisions. The next step is decentralization.

"Right now, the AI that we are doing is still centralized; it's just one brain that is doing the calculations," Kiran explains. "But we want to take it to a decentralized approach, where you have multiple agents that are making decisions in a decentralized way."

This shift will be critical for hyperscale environments: "If you think about topologies like Facebook or Google that have 1000s of devices, where you cannot make all of these decisions in a centralized way… So that is why we're thinking of decentralized, because it will help with scaling of this technique."

The team is also exploring how large language models (LLMs) might automate additional aspects of network configuration and control.

## FABRIC Helps Advance Networking Research

For Kiran, FABRIC is more than a testbed—it is an enabler of discovery.

"As a network researcher, I can say that FABRIC has been a necessity for network research. I still go back to FABRIC because of the ease of configuring networks, servers, and it's really good for computer scientists who are trying to develop new techniques on how data can be moved more efficiently and test algorithms."

She emphasizes what sets FABRIC apart: "I haven't found other examples of testbeds where it allows networking research to actually set up real experiments; otherwise, we're testing simulations. And production networks don't allow us to do experiments."

And that, ultimately, is the thread running through this work. By combining programmable infrastructure, real-world experimentation, and AI-driven control, this team is helping networks move from static systems to adaptive, intelligent platforms. "FABRIC is essential for all kinds of network research, so we can test our crazy ideas in real, practical situations."
