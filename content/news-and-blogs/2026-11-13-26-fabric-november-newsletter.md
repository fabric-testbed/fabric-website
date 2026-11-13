---
title: "'26 FABRIC November Newsletter "
date: 2026-11-13
type: news
category: announcements
excerpt: FABRIC November 2026 Newsletter
tags:
  - news
---
# What’s new with FABRIC?

An update from Paul Ruth, FABRIC Principal Investigator  

We'll be at SC26 in Chicago, November 15 to 20. Come find us at the RENCI booth (#1655), where we have two sessions on what's new in FABRIC, with talks from FABRIC users about their own work. They're Tuesday, November 17, from 3:00 to 4:30 and Wednesday, November 18, from 11:15 to 12:30, Chicago time. We also have a Network Research Exhibition demo that moves cryo-EM data between the US and Cape Town. We'll talk about it Wednesday from 1:00 to 2:00 at the SCinet Theater (booth #4029). The Ciena traveling FABRIC site will be supporting several demos from the Ciena booth (#5035). 

There's more on Sunday, November 15. I'm one of the presenters for a full-day tutorial, In-Network Computing with SmartNICs for HPC Applications (8:30 to 5:00, room W193b), with Elie Kfoury, Jorge Crichigno, Jeff Young, and others. The INDIS workshop that day (room W175a) also has a couple of papers that used FABRIC.

If you haven't tried LoomAI Hub yet, it's at loomai.net. It's now the recommended way to use FABRIC. You sign in with your FABRIC identity and get drag-and-drop topology building and an AI assistant in the browser, with nothing to install. 

**In this newsletter, you’ll find information about…**

* 2027 Golden Stitch Award Nominations now open! 
* QFabric: Explore Quantum Networking Hands-On with FABRIC | Mastering FABRIC: Tips and Tricks Webinar
* KNIT14 Workshop 
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

Submit your nomination by February 12, 2027:[ forms.gle/MBGiCFUuGFxmYe7x6 ](https://forms.gle/MBGiCFUuGFxmYe7x6)   

Help us celebrate the individuals who are stitching together the next generation of research and innovation with FABRIC. 

---

# QFabric: Explore Quantum Networking Hands-On with FABRIC | Mastering FABRIC: Tips and Tricks Webinar

*November 24, 2026 3:00-4:00 pm ET* 

![](/imgs/uploads/qfabric.png)

Join us for the next Mastering FABRIC: Tips and Tricks webinar on November 24, 2026, from 3:00 to 4:30 PM ET.

Quantum networks are often taught through simulators that mathematically model the photon's propagation losses based on quantum mechanics.  Since quantum networks today have very limited ranges (much less than 100 miles), impacts of real network latency have not been emphasized.  For a future where large scale quantum networks become a reality, realistic latencies and loss properties need to be accounted for together for effective network engineering. QFabric lets FABRIC users explore quantum networking protocols as truly distributed experiments running across slices over a real wide-area network.

QFabric emulates fiber attenuation in a P4/BMv2 data plane, carrying "photons" as custom-EtherType frames that are dropped probabilistically. On top of this, it implements BB84, decoy-state BB84, E91/BBM92, and multi-hop entanglement swapping. It also includes a full key distillation pipeline: Cascade error correction, Toeplitz privacy amplification, finite-key security bounds, and an authenticated classical channel. Results are cross-validated against SeQUeNCe and NetSquid running on the same slices.

The heart of this webinar is a live demonstration. Presenter Komal Thareja will run QFabric notebooks on FABRIC slices, showing quantum key distribution between nodes, a CHSH test for entanglement, key establishment across a multi-node repeater chain, and how classical latency affects time-to-key. Along the way, Komal will explain the quantum concepts behind each step, so no prior quantum background is needed. The notebooks are available to all FABRIC users, giving attendees a ready starting point to learn, experiment, and build their own quantum networking research.

The webinar recording will be shared with all registrants following the event. Those interested can [register here](https://renci.zoom.us/webinar/register/WN_FLl4sC1PQqeYy9X4nkcdag).

---

# KNIT14 Workshop Save the Date! 

*Workshop Dates: April 1-2, 2027* 

*Location: Chapel Hill, NC* 

![](/imgs/uploads/basic.png)

Join us for KNIT14, the next FABRIC Community Workshop, taking place April 1–2, 2027, in Chapel Hill, NC. This year's theme, "Integrating Networks into the Scientific Infrastructure," brings the FABRIC community together for two days of talks, demonstrations, and discussion.

Scientific discovery increasingly depends on moving data between instruments, computing resources, storage, and collaborators across institutions. KNIT14 explores how networks can be integrated as a first-class, programmable component of the broader scientific infrastructure. In this model, the network works alongside data services, compute, and AI workflows rather than as a separate layer. Participants will share use cases, identify gaps and barriers, and discuss opportunities for shared tools and collaborative pilots.

What to Expect:

Presentations: Learn how researchers and practitioners are using FABRIC across scientific domains, from high-energy physics to AI-driven network optimization.

Show and Tells: Short presentations followed by panel discussions, with time to dig into approaches, lessons learned, and open questions.

Student Showcase: See the work of the next generation of researchers building on FABRIC.

Hands-On Learning: Explore FABRIC's powerful features and emerging capabilities in expert-led technical sessions.

Demo Night: Watch live demonstrations of experiments and tools, and talk directly with the people who built them.

KNIT14 will be a collaborative event for building connections, exchanging ideas, and contributing to the evolution of this research infrastructure. Visit the [KNIT workshop site](https://knit.fabric-testbed.net/#/) for registration, the agenda, and additional details.

Call for Talks

KNIT14 invites participants to share talks on experimentation across scientific domains, getting started with FABRIC, and innovative uses of FABRIC and other testbeds. Speakers are encouraged to showcase active experiments with live views of slices, resources, and results, or propose new ideas with clearly defined workflows and resource needs. This is a great opportunity to highlight your work, exchange insights, and contribute to the growing FABRIC community. [Submit a talk ](https://docs.google.com/forms/d/e/1FAIpQLSdOqUoAdlLUe0gQpP4mEA6xWyzC4fjkqXnwR4Gi0BQqJ1iyWQ/viewform)

Demo Night

Showcase your innovative projects at KNIT14's Demo Night! Share the work you've been developing by filling out the form to be considered for a presentation. Thank you for expressing interest in presenting at demo night. Please complete the form by March 1, 2027. [Submit a demo](https://docs.google.com/forms/d/e/1FAIpQLSeqXZCwRHqvOewpZeFEGcYNzTYrFUC1c5Cd28qqqHfM6f6mEA/viewform)

---

# FABRIC News 

FABRIC Expands Access to Quantum Networking Research Through Distributed Emulation: FABRIC has adapted the SeQUeNCe quantum network simulator to run across multiple nodes on its national research infrastructure. The emulator gives students and researchers a way to explore quantum networking—including quantum key distribution, entanglement, and network attacks—even while access to quantum hardware remains limited. [See full article linked here](https://www.whatisfabric.net/news-and-blogs/2026-11-06-fabric-expands-access-to-quantum-networking-research-through-distributed-emulation). 

---

## Educational Use: Using FABRIC for Class Projects

As a national research infrastructure for cutting-edge and exploratory research in networking, distributed computing, and science applications, FABRIC encourages faculty to use the infrastructure for teaching their classes. Training next-generation researchers to imagine and construct new computing and networking experiments at-scale is an important goal for FABRIC. FABRIC has created sample experiments and Jupyter notebooks that are ready to be used by networking and systems classes for instructors. 

These experiments include basic ping, network routing, exploring IPv6, TCP analysis, traffic generation, setting up a web server, using Ansible to manage a set of nodes, etc. They are available via GitHub as well as the FABRIC Artifact Manager. Of course, you can create your own assignments for students to do on the FABRIC infrastructure. The FABRIC team provides support from creating an education project and enrolling students to answering questions from instructors and students. More information can be found [here](https://learn.fabric-testbed.net/knowledge-base/fabric-information-for-instructors). 

---

## FABRIC Office Hours

*Connect and troubleshoot with leadership and support*

We have made a new [office hours system](https://outlook.office365.com/owa/calendar/FABRICOfficeHours@admin.live.unc.edu/bookings/) available from the FABRIC portal that allows stakeholders to directly book time with the leadership team and technical team members to discuss anything from the feasibility of their experiments to software questions, to experiment security, to connecting new facilities into FABRIC. 

Book an appointment on our [scheduling platform.](https://outlook.office365.com/owa/calendar/FABRICOfficeHours@admin.live.unc.edu/bookings/)

---

## Solicitations

*Funding opportunities that encourage the use of FABRIC*

See a list of [all solicitations mentioning FABRIC](https://www.whatisfabric.net/research/opportunities) on our website. 

Do you have a project idea that would benefit from using FABRIC? The FABRIC team welcomes requests for Letters of Collaboration. To expedite the process, please contact us by [filling out the form](https://forms.gle/MKV5SfpdSS24XbFD7).

---

## Upcoming Events

See a list of [all upcoming events](https://fabric-testbed.net/events) on our website.
