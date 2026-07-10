---
title: Creating your first experiment in Jupyter Hub
slug: creating-your-first-experiment-in-jupyter-hub
date: "2023-05-31"
date_modified: "2025-10-03"
author: Ilya Baldin
status: publish
wp_id: 4364
views: 4355
categories:
  - Getting Started
  - Jupyter Hub
tags:
  - documentation
  - getting started
---

The easiest way to create experiments on FABRIC is using [JupyterHub](https://jupyter.org/hub). You can create your private JupyterHub environment by logging into the [FABRIC portal](https://portal.fabric-testbed.net/) and clicking JupyterHub from the top menu.

**Click JupyterHub**

The FABRIC JupyterHub uses your institutional ID and password to authenticate you as a FABRIC user.

**Click "Sign in with CILogon**.

**Login with your institutional ID and password.**

When you login for the first time, a private JuypyterHub environment will be built for you.

**Wait for your private environment to build.**

Your JupyterHub environment is a private container that includes a file system where you can store your FABRIC experiment notebooks. By default, FABRIC includes a set of example notebooks that demonstrate the use of the FABRIC Python API.

**Open the jupyter-examples folder.**

In the example folder there is a table of contents notebook labeled "start-here".

**Open the start-here notebook.**

The "start-here" notebook includes links to several examples. Follow the suggested flow of notebooks to explore FABRIC's various features. **Be sure to run the 'Configure Environment' notebook first to set up your container configuration - SSH keys, SSH configuration file, FABlib configuration file.** Then choose the "Hello, FABRIC" example notebook.

**Open the Hello, FABRIC notebook.**

When you open the "Hello, FABRIC" notebook you will see an example that uses the FABRIC Python API. In order to run the example and start your first slice you need to repeatedly click the Jupyter play button. Each click will run one cell of the notebook. Run all of the cells you will have executed your first FABRIC experiment.

**Hit the play button to execute each step of the notebook.**
