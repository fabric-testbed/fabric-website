---
title: Using the Jupyter Hub
slug: using-the-jupyter-hub
date: "2023-05-31"
date_modified: "2025-02-27"
author: Ilya Baldin
status: publish
wp_id: 4381
views: 1749
categories:
  - Jupyter Hub
---

## Select Jupyter Containers

JupyterHub provides four container options:

-   **Last Stable Release**: The previous stable version.
-   **Default**: The current stable release (recommended for most users).
-   **Bleeding Edge**: Includes the latest fablib and Jupyter examples.
-   **Beyond Bleeding Edge**: Runs fablib and Jupyter examples from the main development branch.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/05/Screenshot-2024-10-15-at-4.33.33 PM-1024x703.png)

NOTE: Versions may change, this image is just an example screen picked from Release 1.7.0

We recommend using the **Default** container for general use. The **Bleeding Edge** is suitable for users who want the latest released features. The **Beyond Bleeding Edge** container, which includes the most recent development changes, is primarily intended for the FABRIC development team and is not recommended for general users.

At any point, only one container can be spawned for a user. To switch between containers, navigate to **File -> Hub Control Panel -> Stop My Server**, then select **Start My Server** and choose the desired container. Any content or work in the user's work directory is retained across containers.

## Frequently Asked Questions?

#### What steps should I take when encountering the error: **Internal Server Error - (invalid\_grant) expired refresh token**?

This error typically occurs due to an expired token. Please try the following steps:  
Go to **File → Hub Control Panel → Stop My Server**, then select **Start Server** to generate a new token.
