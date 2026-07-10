---
title: Artifact Manger in Jupyter Hub
slug: artifact-manger-in-jupyter-hub
date: "2024-11-01"
date_modified: "2024-11-01"
author: Komal Thareja
status: publish
wp_id: 7762
views: 1776
categories:
  - Jupyter Hub
---

This section walks you through accessing and using the Artifact Manager within Jupyter Hub to explore and manage project artifacts seamlessly. Please refer to the [link](https://learn.fabric-testbed.net/knowledge-base/artifact-manager/) for more information on Artifact Manager.

## **Pre-requisites**

Before proceeding, ensure the following:

-   You are registered with FABRIC. For more information, please refer to this [link](https://learn.fabric-testbed.net/knowledge-base/signing-up-for-a-fabric-account/).
-   You have joined a project within FABRIC. If not, see this [link](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/) for instructions.
-   Your Jupyter Hub environment is configured. If it isn’t, refer to this [link](https://learn.fabric-testbed.net/knowledge-base/creating-your-first-experiment-in-jupyter-hub/) for setup details.

## **Explore Artifacts**

### **Log in to Jupyter Hub**

Begin by logging into Jupyter Hub with your credentials. Select the **Bleeding Edge** container option and click Start. For more information please refer to this [link](https://learn.fabric-testbed.net/knowledge-base/using-the-jupyter-hub/).

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.20.22 AM-1.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.35.31 AM.png)

### **Navigate to the Examples Directory**

-   Once logged in, locate the `jupyter-examples-*` directory in your file navigator on Jupyter Hub.
-   Open the _Start Here_ notebook within this directory. This will guide you to the resources and documentation needed to explore FABRIC’s features.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.28.36 AM.png)

### **Open the Artifact Manager**

-   Inside the _Start Here_ notebook, find and click on the _Explore Artifacts_ notebook. This specific notebook allows you to browse, filter, and download artifacts linked to your project or available publicly on FABRIC.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.30.14 AM-1024x388.png)

### **Exploring Available Artifacts**

-   Run the initial cell within the _Explore Artifacts_ notebook to populate a list of artifacts. This list includes:
    -   **Public Artifacts**: Artifacts available for all users.
    -   **Project-Specific Artifacts**: Artifacts exclusive to your project.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.37.54 AM-1024x515.png)

### **Filtering and Selecting Artifacts**

-   Use the built-in filters to narrow down the artifacts based on specific criteria like name, tag, or project.
-   For each artifact, you’ll see all available versions listed. Review the versions to identify the one that best suits your needs.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.39.55 AM-1024x319.png)

### **Downloading Artifacts**

-   Once you’ve identified the artifact and version you wish to use, click _Download_. The selected artifact will automatically download to your work directory, located at `/home/fabric/work`.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.40.30 AM-1024x349.png)

-   After the download completes, navigate to this directory to start using the artifact within your environment.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.41.07 AM.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.41.16 AM.png)

With the artifact downloaded and accessible in your work directory, you can now integrate it into your workflow. For further exploration or updates, revisit the _Explore Artifacts_ notebook to stay up-to-date with new additions.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.41.28 AM.png)

## **Managing Artifacts via Fablib API**

In addition to exploring and downloading artifacts, you can also create, upload, or delete artifacts within the FABRIC environment using the Fablib API.

### **Log in to Jupyter Hub**

Begin by logging into Jupyter Hub with your FABRIC credentials as described in the section above.

### **Navigate to the Examples Directory**

-   Once logged in, locate the `Jupyter-examples-*` directory in your file navigator.
-   Open the _Start Here_ notebook in this directory, which provides an overview and navigation for the available resources on FABRIC.

### **Access the Manage Artifacts Notebook**

-   Inside the _Start Here_ notebook, find and click on the _Manage Artifacts_ notebook. This notebook is specifically designed to help you manage artifacts using the Fablib API.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.52.32 AM-1024x399.png)

### **Using the Fablib API for Artifact Management**

-   The _Manage Artifacts_ notebook includes detailed instructions and examples for managing artifacts via the Fablib API. With these commands, you can:
    -   **Create New Artifacts**: Generate and register new artifacts within your project.**Upload Artifacts**: Add files or resources as artifacts to make them available for other users in your project.**Delete Artifacts**: Remove outdated or unnecessary artifacts from your project.

Please refer to the documentation [here](https://fabric-fablib.readthedocs.io/en/latest/fablib.html#fabrictestbed_extensions.fablib.fablib.FablibManager.create_artifact) for more details.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-11-01-at-9.54.02 AM.png)
