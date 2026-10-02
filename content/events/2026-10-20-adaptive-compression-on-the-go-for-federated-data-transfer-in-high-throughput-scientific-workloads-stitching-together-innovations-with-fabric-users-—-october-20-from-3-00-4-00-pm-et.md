---
title: Adaptive Compression on-the-go for Federated Data Transfer in
  High-Throughput Scientific Workloads | Stitching Together Innovations with
  FABRIC Users  — October 20 from 3:00-4:00 PM ET
date: 2026-10-20
type: event
category: webinar
fabric_hosted: true
location: "Virtual "
time: 3:00-4:30 PM ET
registration_url: https://renci.zoom.us/webinar/register/WN_N7WtY2kRTtaJi-_ri_DIjA
tags:
  - events
---
Join us for the next Stitching Together Innovation with FABRIC Users webinar on October 20, 2026, from 3:00-4:00 pm ET as we explore how researchers are using FABRIC to study data movement and performance across geographically distributed research infrastructure. In this session, Dr. Venkat Sai Summan Lamba Karanam will showcase a runtime layer designed to determine during a data transfer whether compressing data before sending it across a wide-area network provides a performance benefit or whether transmitting the raw data is more efficient. The approach accounts for differences in codecs, datasets, network conditions, and link characteristics that cannot be captured from a single-site environment.

Dr. Karanam will provide an overview of an experimental setup spanning four nodes across three continents, connected through dedicated Layer 2 circuits and equipped with ConnectX-6 SmartNICs. Using CERN as the source, with destination nodes at TACC, Amsterdam, and Tokyo, the team measured round-trip times ranging from 16 ms to 263 ms and transferred approximately 300 GB across four scientific workloads in high-energy physics, genomics, and astronomy. Dr. Karanam will discuss the performance of the runtime approach and how real-world latency and bandwidth differences across sites can influence data-transfer decisions and experimental results.

The webinar will also provide an inside look at what FABRIC makes possible for cross-site networking studies. Dr. Karanam will discuss the team's setup on FABRIC and share practical lessons for replicating similar cross-site experiments, including emulating tiered production data-distribution hierarchies with L2PTP and L2STS circuits, using netem delay when paths are window-limited, running long experiments under systemd so they can continue after an SSH session drops, and working with datasets too large to fit on a single node. Whether you're a current FABRIC user or interested in conducting large-scale distributed experiments, this session will offer practical insights into designing, running, and measuring cross-site studies on FABRIC, along with an opportunity to engage directly during a live Q&A.

[Register Here](https://renci.zoom.us/webinar/register/WN_N7WtY2kRTtaJi-_ri_DIjA)

![](/imgs/uploads/adaptive-compression-on-the-go-for-federated-data-transfer-in-high-throughput-scientific-workloads.png)
