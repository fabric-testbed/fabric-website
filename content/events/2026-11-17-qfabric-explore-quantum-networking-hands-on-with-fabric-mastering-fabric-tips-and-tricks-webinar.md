---
title: "QFabric: Explore Quantum Networking Hands-On with FABRIC | Mastering
  FABRIC: Tips and Tricks Webinar "
date: 2026-11-24
type: event
category: webinar
fabric_hosted: true
location: https://renci.zoom.us/webinar/register/WN_FLl4sC1PQqeYy9X4nkcdag
time: 3:00-4:30 PM ET
registration_url: https://renci.zoom.us/webinar/register/WN_FLl4sC1PQqeYy9X4nkcdag
tags:
  - events
---
Join us for the next Mastering FABRIC: Tips and Tricks webinar on November 24, 2026, from 3:00 to 4:30 PM ET.

Quantum network is often taught through simulators that mathematically model the photon's propagation losses based on quantum mechanics.  Since quantum networks today have very limited ranges (much less than 100 miles), impacts of real network latency have not been emphasized.  For a future where large-scale quantum networks become a reality, realistic latencies and loss properties need to be accounted for together for effective network engineering. QFabric lets FABRIC users explore quantum networking protocols as truly distributed experiments running across slices over a real wide-area network.

QFabric emulates fiber attenuation in a P4/BMv2 data plane, carrying "photons" as custom-EtherType frames that are dropped probabilistically. On top of this, it implements BB84, decoy-state BB84, E91/BBM92, and multi-hop entanglement swapping. It also includes a full key distillation pipeline: Cascade error correction, Toeplitz privacy amplification, finite-key security bounds, and an authenticated classical channel. Results are cross-validated against SeQUeNCe and NetSquid running on the same slices.

The heart of this webinar is a live demonstration. Presenter Komal Thareja will run QFabric notebooks on FABRIC slices, showing quantum key distribution between nodes, a CHSH test for entanglement, key establishment across a multi-node repeater chain, and how classical latency affects time-to-key. Along the way, Komal will explain the quantum concepts behind each step, so no prior quantum background is needed. The notebooks are available to all FABRIC users, giving attendees a ready starting point to learn, experiment, and build their own quantum networking research.

![](/imgs/uploads/qfabric.png)
