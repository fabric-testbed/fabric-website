---
title: "'26 October FABRIC Newsletter"
date: 2026-10-16
type: news
category: announcements
excerpt: FABRIC 2026 October Newsletter
tags:
  - newsletter
---
# What’s new with FABRIC?

An update from Paul Ruth, FABRIC Principal Investigator  

Thanks to everyone who came to KNIT13 and the MERIF Workshop at George Washington University at the end of September. We asked people to tell us what FABRIC doesn't do yet, and you did. Those conversations are going straight into our planning for the next phase of FABRIC, and we came away with a much better sense of where we should be heading.

If you couldn't make it to DC, there's another chance soon. We'll be at SC26 in Chicago, November 15 to 20. Come find us at the RENCI booth, where we're giving a talk on what's new in FABRIC. We also have a Network Research Exhibition demo, and the Ciena traveling FABRIC site will be supporting several demos on the floor. There's one more thing we're putting together with Ciena that we aren't ready to announce yet, so stop by and see it.

We now list 216 publications that used FABRIC, and we're sure we're missing some. If one of yours isn't on the list, please let us know.

If you haven't tried LoomAI Hub yet, it's at loomai.net. It's now the recommended way to use FABRIC. You sign in with your FABRIC identity and get drag-and-drop topology building and an AI assistant in the browser, with nothing to install. There's more in the FABRIC News section below.

In this newsletter, you’ll find information about…

* 2027 Golden Stitch Award Nominations now open! 
* Adaptive Compression on-the-go for Federated Data Transfer in High-Throughput Scientific Workloads | Stitching Together Innovations with FABRIC Users Webinar
* FABRIC News
* Opportunities to collaborate with the FABRIC team

---

# 2027 Golden Stitch Award Nominations Now Open! 

![](/imgs/uploads/awards.png)

FABRIC is excited to announce the 2027 Golden Stitch Award nomination process, recognizing outstanding innovation and impact across the FABRIC community.

We invite all active FABRIC users to nominate themselves or a colleague who has demonstrated exceptional creativity, research, or educational use of FABRIC resources.

Award Categories:

 • Best Published Paper

 • Best FABRIC Experiment (must be packaged as an artifact in the Artifact Manager)

 • Best Classroom Use of FABRIC

Winners will be recognized during KNIT 14 (April 2027) with a certificate of achievement and featured in a FABRIC blog post highlighting their work.

Submit your nomination by February 12, 2027: [forms.gle/MBGiCFUuGFxmYe7x6](https://forms.gle/MBGiCFUuGFxmYe7x6)   

Help us celebrate the individuals who are stitching together the next generation of research and innovation with FABRIC. 

---



# Adaptive Compression on-the-go for Federated Data Transfer in High-Throughput Scientific Workloads | Stitching Together Innovations with FABRIC Users

October 20, 2026 3:00-4:00 pm ET 

![](/imgs/uploads/adaptive-compression-on-the-go-for-federated-data-transfer-in-high-throughput-scientific-workloads.png)

Join us for the next Stitching Together Innovation with FABRIC Users webinar on October 20, 2026, from 3:00-4:00 pm ET as we explore how researchers are using FABRIC to study data movement and performance across geographically distributed research infrastructure. In this session, Dr. Venkat Sai Summan Lamba Karanam will showcase a runtime layer designed to determine during a data transfer whether compressing data before sending it across a wide-area network provides a performance benefit or whether transmitting the raw data is more efficient. The approach accounts for differences in codecs, datasets, network conditions, and link characteristics that cannot be captured from a single-site environment.

Dr. Karanam will provide an overview of an experimental setup spanning four nodes across three continents, connected through dedicated Layer 2 circuits and equipped with ConnectX-6 SmartNICs. Using CERN as the source, with destination nodes at TACC, Amsterdam, and Tokyo, the team measured round-trip times ranging from 16 ms to 263 ms and transferred approximately 300 GB across four scientific workloads in high-energy physics, genomics, and astronomy. Dr. Karanam will discuss the performance of the runtime approach and how real-world latency and bandwidth differences across sites can influence data-transfer decisions and experimental results.

The webinar will also provide an inside look at what FABRIC makes possible for cross-site networking studies. Dr. Karanam will discuss the team's setup on FABRIC and share practical lessons for replicating similar cross-site experiments, including emulating tiered production data-distribution hierarchies with L2PTP and L2STS circuits, using netem delay when paths are window-limited, running long experiments under systemd so they can continue after an SSH session drops, and working with datasets too large to fit on a single node. Whether you're a current FABRIC user or interested in conducting large-scale distributed experiments, this session will offer practical insights into designing, running, and measuring cross-site studies on FABRIC, along with an opportunity to engage directly during a live Q&A.

The webinar recording will be shared with all registrants following the event. Those interested can [register here](https://renci.zoom.us/webinar/register/WN_N7WtY2kRTtaJi-_ri_DIjA).

---

# FABRIC News 

Why Testbeds Matter: From Big Ideas to Real-World Impact. Testbeds like FABRIC provide researchers with a safe, controlled, and shared environment to move ideas from theory toward real-world application. By enabling experimentation at scale, FABRIC helps researchers identify bottlenecks, test assumptions, measure performance, improve technologies, and reproduce results—capabilities that simulations and commercial networks alone cannot provide. Its programmable infrastructure connects networks, computing resources, instruments, and research facilities, supporting advances in areas such as networking, cybersecurity, AI, wireless systems, high-performance computing, and quantum research. [See full article linked here](https://www.whatisfabric.net/news-and-blogs/2026-10-09-why-testbeds-matter-from-big-ideas-to-real-world-impact). 

---

# Educational Use: Using FABRIC for Class Projects

As a national research infrastructure for cutting-edge and exploratory research in networking, distributed computing, and science applications, FABRIC encourages faculty to use the infrastructure for teaching their classes. Training next-generation researchers to imagine and construct new computing and networking experiments at-scale is an important goal for FABRIC. FABRIC has created sample experiments and Jupyter notebooks that are ready to be used by networking and systems classes for instructors. 

These experiments include basic ping, network routing, exploring IPv6, TCP analysis, traffic generation, setting up a web server, using Ansible to manage a set of nodes, etc. They are available via GitHub as well as the FABRIC Artifact Manager. Of course, you can create your own assignments for students to do on the FABRIC infrastructure. The FABRIC team provides support from creating an education project, enrolling students, to answering questions from instructors and students. More information can be found [here](https://learn.fabric-testbed.net/knowledge-base/fabric-information-for-instructors). 

---

# FABRIC Office Hours

*Connect and troubleshoot with leadership and support*

We have made a new [office hours system](https://outlook.office365.com/owa/calendar/FABRICOfficeHours@admin.live.unc.edu/bookings/) available from the FABRIC portal that allows stakeholders to directly book time with the leadership team and technical team members to discuss anything from the feasibility of their experiments to software questions, to experiment security, to connecting new facilities into FABRIC. 

Book an appointment on our [scheduling platform](https://outlook.office365.com/owa/calendar/FABRICOfficeHours@admin.live.unc.edu/bookings/).

---

# Solicitations

*Funding opportunities that encourage the use of FABRIC*

See a list of [all solicitations mentioning FABRIC](https://www.whatisfabric.net/research/opportunities) on our website. 

Do you have a project idea that would benefit from using FABRIC? The FABRIC team welcomes requests for Letters of Collaboration. To expedite the process, please contact us by [filling out the form](https://forms.gle/MKV5SfpdSS24XbFD7).

---

# Upcoming Events

See a list of [all upcoming events](https://fabric-testbed.net/events) on our website.
