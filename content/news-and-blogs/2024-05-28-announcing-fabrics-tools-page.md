---
title: "Announcing FABRIC’s Tools Page"
date: "2024-05-28"
type: "blog"
category: "announcements"
excerpt: "_Featuring the best resources for experiment management, federation with testbeds, large scale data movement, and more!_"
author: "Jayasree Jaganatha"
date_modified: "2024-10-16"
wp_id: 7032
views: 683
tags:
  - news
---

_Featuring the best resources for experiment management, federation with testbeds, large scale data movement, and more!_

Given the high increase in users we’ve seen over the last year, the FABRIC team wants to make sure that all users have access to resources that aid in automation, reduce overhead, and make experiments run more smoothly. Additionally, it’s important that users are able to tap into community experiences and implement approved routes to success, as opposed to replicating them on their own.

We’re excited to announce the [Tools Page](https://learn.fabric-testbed.net/article-categories/tools/) — a Knowledge Base section featuring articles on command-line tools for managing FABRIC experiments, federating with other testbeds and public clouds, supporting large-scale data movement and more.

Each article on our Tools page serves as a “user manual,” and includes an overview of the tool, instructions for installation and configuration, and practical examples. We’ve highlighted a few tools featured on the page below.

**FABRIC Federation Extension (FabFed)**

The FABRIC Federation Extension (FabFed) is a software stack that provides the package and toolkit for the FABRIC users to run large experiments across multiple testbed and cloud providers. Under a “tool-based federation” framework, FabFed integrates external network and cloud resources into a FABRIC slice in a fully automated and orchestrated fashion. Learn more [here](https://learn.fabric-testbed.net/knowledge-base/fabric-federation-extension-fabfed-users-manual/).

**SliceCommander**

SliceCommander is a tool for working with FABRIC slices interactively using a shell-like command interpreter. It is designed so that common tasks on your slices, such as inspecting allocated resources, renewing lifetimes, deleting slices, or seamless SSH to nodes, can be performed quickly and with minimal overhead. While it is not a substitute for FABlib and JupyterHub in designing and creating experiments, SliceCommander may be a useful companion tool to assist with frequently performed tasks on one or more existing slices. Learn more [here](https://learn.fabric-testbed.net/knowledge-base/using-slicecommander-with-fabric/).

**FABRIC Experiment Framework (FABExp)**

The FABRIC Experiment Framework (FABExp) is a Jupyter-based Graphical User Interface (GUI), implemented using IPyWidgets and FABlib API calls, that allows users to manage their experiments in the FABRIC testbed. Users can utilize FABExp to check whether their JupyterHub settings (including keys, config files, etc.) are correct. Then users can start their experiments by defining the topology of a slice, submitting the slice, configuring the slice (setting up networks and installing software), running their experiments and viewing the data. The features provided by FABExp allow users to easily keep track of what they have done in the experiment, e.g, a state “DOCKER\_INSTALLED” will be saved in the Fabric FIM to indicate users have installed Docker on all the nodes in their slice. Users can check the state of the slice to avoid duplicate execution of code, which may sometimes cause errors. In this article, we illustrate the usage of FABExp by showing how to take advantage of each tab of FABExp to easily manage a FABRIC experiment. Learn more [here](https://learn.fabric-testbed.net/knowledge-base/fabric-experiment-frameworkfabexp/).  
  
Have you built a tool on FABRIC that should be featured on the Tools Page? Please reach out to [KC Wang](mailto:kwang@clemson.edu).
