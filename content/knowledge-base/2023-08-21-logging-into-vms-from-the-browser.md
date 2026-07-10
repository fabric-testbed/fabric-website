---
title: Logging into VMs from the browser
slug: logging-into-vms-from-the-browser
date: "2023-08-21"
date_modified: "2024-01-16"
author: Yaxue Guo
status: publish
wp_id: 5080
views: 1329
categories:
  - Portal
---

FABRIC Portal now support logging into VMs from the browser. Besides the way of using SSH command in terminal, now you can connect to a VM sliver directly from Portal.

Firstly you need open a `StableOK` slice containing VMs, click on the VM node on the slice topology, and VM details will show up on the right. Click **Connect to VM** button.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/webssh-1024x517.png) \*Portal Slice Viewer\*

On the pop-up modal, `hostname`, `username`, `bastion hostname` and `bastion username` are auto pre-filled by Portal. You can either 1) paste your sliver private key (any key selected when creating this slice) or 2) Generate and Install a ephemeral key; then paste your bastion private key to the text-area then click **Connect.** (_\*Your private keys will only be used to establish connection and will not be stored._)

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/webssh2-1024x572.png) \*Method 1: Input Sliver Private Key\* ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/webssh3-1024x540.png) \*Method 2: Generate and Install Ephemeral Key at one click\*

Click **Open Terminal** button and the Web SSH Terminal will open in a new browser tab.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/webssh5-1024x485.png) \*Click "Open Terminal"\* ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/webssh6-1024x640.png) \*Web SSH Terminal\*

If there is any issue in establishing the connection, you will see the FABRIC Web SSH App UI below with an error message. (The mostly possible error is `Bad bastion authentication type.` and you will need to check the private keys in use).

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/08/image-11-1024x637.png) \*FABRIC Web SSH App\*
