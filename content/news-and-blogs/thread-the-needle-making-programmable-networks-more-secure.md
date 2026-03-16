---
title: "Thread the Needle: Making Programmable Networks More Secure"
date: "2024-03-22"
type: "blog"
category: "research"
excerpt: "Researchers use FABRIC to test new attestation-capable software network switch."
tags:
  - blog
  - thread the needle
---

*Researchers use FABRIC to test new attestation-capable software network switch*

Programmable network hardware devices such as switches, routers or network interface cards are becoming more widespread. Although programmability gives network operators the ability to customize devices, this capability can also be used to undermine security.

Nik Sultana, assistant professor at the Illinois Institute of Technology, used FABRIC to evaluate a prototype software network switch designed to help safeguard programmable networks.

## Integrating Remote Attestation

The team designed a programmable software network switch that performs remote attestation by embedding its configuration evidence in the packets it forwards. They created the switch by extending the Behavioral Model v2 simple switch, programmable using the P4 language. The solution places the state information into a hop-by-hop extension field of IPv6 packets.

## At-Scale Testing

The researchers used FABRIC to conduct verification and performance tests. "FABRIC provided the quality and scale of network and computational resources needed to evaluate our work," said Shyamkumar.

"Our project showed how low-level, autonomous security can occur at network nodes while also serving as a building block to ensure the entire route is secure," said Wolosewicz.

To learn more, check out the [project website](http://transparnet.cs.iit.edu/).
