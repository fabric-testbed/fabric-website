---
title: "Thread the Needle: Experiences and resources for teaching with FABRIC"
date: "2024-08-23"
type: "blog"
category: "announcements"
excerpt: "_This is a user-contributed blog post by Fraida Fund (__ffund@nyu.edu__), a Research Assistant Professor in the Department of Electrical and Computer Engineering at NYU Tandon School of Engineering._"
author: "Jayasree Jaganatha"
date_modified: "2024-09-03"
wp_id: 7459
views: 970
tags:
  - blog
  - thread the needle
---

_This is a user-contributed blog post by Fraida Fund (_[_ffund@nyu.edu_](mailto:ffund@nyu.edu)_), a Research Assistant Professor in the Department of Electrical and Computer Engineering at NYU Tandon School of Engineering._  

Hello FABRIC community! I have been using research infrastructure (like FABRIC) in the classroom for more than a decade. In this blog post, I am going to share some of those experiences teaching with experimental research infrastructure, and resources that you can use in your own courses.

### Why teach on FABRIC?

There is a common misconception about research infrastructure: that it's intended only for research use. (It's right there in the name!) But research infrastructure is also a significant asset for computer science and engineering education, and thousands of students have gained hands-on experience with networks, distributed systems, and related topics through educational use of these facilities.

As an educator, I have used research infrastructure to make the concepts I am teaching more tangible to my students, have my students gain practical skills, and support students engaged in open-ended projects. Furthermore, I also benefited as a _researcher_ from using research infrastructure in the classroom! I found that after engaging with platforms like FABRIC as part of their coursework, students were better prepared to engage in research on those platforms.

### Teaching with research infrastructure: my experiences

Another common misconception about research infrastructure is that it is most suitable for expert users or advanced courses. Personally, I have used FABRIC and other research platforms with all types of students: high school, undergraduate, and graduate. I have similarly used these platforms in courses ranging from large-scale intro-level courses, to advanced courses targeting students who are interested in research.

But it _is_ true that some _ways_ of using the platform are better suited for some use cases than for others. In my experience, these have been some of the most important considerations for success in education use.

**Have a clear understanding of what you want your students to learn, and align the learning materials with your objectives**. For example, do you want your students to learn how to use FABRIC? or, do you want them to learn how to configure a network interface using standard utilities, and FABRIC is just a platform on which they will do that? The learning materials you use should be focused specifically on your objectives. 

In the courses I teach, I usually want students to learn (1) course-specific concepts, and (2) technical skills for configuring and measuring networks. For example, when I teach about [Designing subnets](https://witestlab.poly.edu/blog/designing-subnets/), I want to make the basic ideas behind IPv4 subnetting more tangible, and I want students to learn how to assign IPv4 addresses and subnet masks to network interfaces in Linux, add static routes for routing traffic between subnets, and use traceroute to validate the routes.

This informs the design of my teaching materials in two ways. First, I don't expect students to know or learn "how to use FABRIC" (beyond running a provided notebook to get resources, and using SSH to access the resources), and I or my course assistants will help students as soon as they encounter any infrastructure problems. Second, rather than configuring resources and executing commands on them using fablib, for the most part my students will just SSH to the resource and use standard Linux utilities, following the lab manual I give them.

**Decide what you can reasonably expect from** **_your_** **specific students**. For example, understand what level of experience your students have with Linux, SSH, etc, how much time they will spend on your FABRIC material, and what level of independence/willingness to debug you can expect from them. 

This determines what type of materials I might consider using in a class - will I demo something myself in front of the class, will I assign the demo to students to run for homework, will students have to do some specific network design on their own, or will they engage in a more creative open-ended project? 

Often, the same learning materials can be used in multiple ways, depending on the audience. For example, consider [TCP congestion control](https://witestlab.poly.edu/blog/tcp-congestion-control-basics/). Depending on the context, I might run it myself during a lecture with different network parameters, to show a class how the congestion window behavior changes. If I would do this, I'd probably put the entire experiment inside a FABRIC notebook, including data analysis and visualization, like this:

https://youtu.be/K6UXA6bKViQ

Alternatively, I might assign the basic experiment for students to run as a homework assignment, with the understanding that this will take a few hours and more expertise - but they will also gain some practical technical skills. The student experience would look more like this:

https://youtu.be/fouqnFd6f-0

In a more advanced course, I might add one or more of the "Additional exercises" at the end. 

Finally, if students have the necessary background and will have several weeks to devote to a course project, I might ask them to propose a new project related to congestion control, then design and execute an experiment to realize it (building on that basic exercise).

**The more you ask from students, the more support you must offer**. There are different ways in which you can support students in their FABRIC experience. On a scale from “most support” to “least support”, some of these are:

-   use in-person class time with course staff present for students to run FABRIC experiments
-   provide a video walkthrough showing what the experiment looks like as a member of the course staff executes and explains the experiment
-   offer synchronous office hours with course staff and asynchronous Q&A (on the course LMS, or a platform like Piazza/Ed) to help students resolve problems

### Example: our lab sequence for Computer Networks

Probably the most natural fit for FABRIC in the classroom is for teaching computer networks! Following the textbook "Computer Networking: A Top-Down Approach" by Kurose and Ross, we use some or all of the following sequence (in a graduate-level course we might require weekly lab assignments, but in an undergraduate course we would assign only 5-6 graded lab assignments):

-   [Hello, FABRIC](https://teaching-on-testbeds.github.io/hello-fabric/) (intro, not graded)

-   [Hello, Linux](https://teaching-on-testbeds.github.io/blog/hello-linux) (skills, not graded)
-   [Inspecting network traffic with tcpdump and Wireshark](https://teaching-on-testbeds.github.io/blog/wireshark-and-tcpdump) (skills, not graded)

-   [TCP/IP protocol stack](https://teaching-on-testbeds.github.io/blog/protocol-layers) (aligned with Chapter 1 in Kurose & Ross 8th edition)
-   [Socket programming in Python](https://teaching-on-testbeds.github.io/blog/sockets-python) (Chapter 2-3 in K&R)
-   [TCP congestion control](https://teaching-on-testbeds.github.io/blog/tcp-congestion-control) (Chapter 3 in K&R)
-   [Static routing](https://teaching-on-testbeds.github.io/blog/static-routing) (Chapter 4 in K&R)
-   [Designing subnets](https://teaching-on-testbeds.github.io/blog/designing-subnets) (Chapter 4 in K&R)
-   [ARP](https://teaching-on-testbeds.github.io/blog/address-resolution-protocol-arp) (Chapter 6 in K&R)
-   [Operation of a learning switch](https://witestlab.poly.edu/blog/basic-ethernet-switch-operation/) (Chapter 6 in K&R)
-   [Secure networked applications](https://teaching-on-testbeds.github.io/blog/secure-applications) (Chapter 8 in K&R)
-   [Network layer security](https://teaching-on-testbeds.github.io/blog/network-layer-security) (Chapter 8 in K&R)

To support these learning materials, I also have Gradescope lab submission templates and rubrics (available to educators by request) and practice problem sets that are randomized and auto-graded in PrairieLearn (also available to educators by request).

### More resources

For more information and resources:

-   [Additional learning materials](https://teaching-on-testbeds.github.io/) (in computer networks and related topics)
-   [Experiences and resources for teaching with FABRIC](https://teaching-on-testbeds.github.io/fabric-tutorial/) (tutorial at FABRIC KNIT 8)
