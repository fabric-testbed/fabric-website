---
title: Reproducibility
slug: reproducibility
date: "2024-11-08"
date_modified: "2024-11-08"
author: Komal Thareja
status: publish
wp_id: 7776
views: 1880
categories:
  - Tools
tags:
  - Reproducibility
---

FABRIC simplifies reproducible research by providing a versatile, programmable infrastructure for networking, computing, data science, and AI experimentation.

Here’s how FABRIC enhances reproducibility:

1.  **Custom Experiment Setups and Isolation**: FABRIC enables users to create custom experiment setups in isolated environments. Each experiment is allocated dedicated resources, allowing it to be easily replicated under similar conditions—a vital aspect of reproducibility.
2.  **Comprehensive Data Collection and Monitoring**: Through its measurement framework (MFLib) and the Public API for Infrastructure Metrics, FABRIC provides extensive logging and monitoring tools. These tools capture performance and activity data during experiments, offering critical information to validate results and support experiment repetition.
3.  **API-Driven Automation**: With APIs like Fablib, SliceManager, and slice\_editor, researchers can automate experiment setup and execution directly from environments like Jupyter Notebooks. This enables seamless repetition of experiments by simply rerunning the same code—essential for reproducibility.

### **For Experimenters/Researchers looking to create artifacts of their experiments**

FABRIC users aiming to create reproducible experiments can do so by following the guidelines in the Artifact Manager [documentation](https://learn.fabric-testbed.net/knowledge-base/artifact-manager/). This documentation provides instructions on how to set up experiments in a way that allows them to be easily replicated and published for others to review.

### **For Experimenters/Researchers/Paper Reviewers looking to validate artifacts published by others**

Those looking to verify the reproducibility of experiments created by other researchers or authors can refer to the instructions for using Artifact Manager in the JupyterHub environment as described [here](https://learn.fabric-testbed.net/knowledge-base/artifact-manager/#artifact-manger-in-jupyter-hub). This guide details how to explore and download artifacts directly into the JupyterHub environment, providing convenient access for validation in a controlled setting.

#### **Requirements for Artifact Validation**

1.  An active FABRIC account and membership in at least one project.
2.  Permissions as specified by the artifact creator must be available to the user’s project.
