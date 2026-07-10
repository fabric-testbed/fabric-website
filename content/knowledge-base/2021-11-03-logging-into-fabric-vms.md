---
title: Logging into FABRIC VMs
slug: logging-into-fabric-vms
date: "2021-11-03"
date_modified: "2023-06-02"
author: Ilya Baldin
status: publish
wp_id: 938
views: 6316
categories:
  - "Authorization, Projects and Tokens"
---

In order to login to the VMsliver created as part of a FABRIC slice you must utilize a so-called bastion host (aka 'hop node' or 'jump host').

The purpose of the bastion hosts is two-fold:

1.  Provide better facility security by limiting which IP addresses are allowed to contact your VM sliver from the public Internet.
2.  Help bridge IPv4 users to IPv6 sites and vice versa. Many of the FABRIC sites provide only IPv6 addressable VMs which are unreachable for users coming from IPv4 providers. Since FABRIC bastion hosts are dual-stacked (support both IPv4 and IPv6), this problem goes away

As a result, unlike other environments or testbeds you may have encountered, at least **two SSH keypairs** are used in FABRIC**:**

1.  Your 'bastion' keypair - this keypair requires rotation, i.e. the keypair has a finite lifetime before it needs to be renewed. The public key of this keypair is stored on the bastion hosts and allows you to 'hop' over them into your VM slivers. FABRIC will automatically 'expire' this public key and remove it from the bastion host, so you have to periodically generate a new keypair and have the public key uploaded to the bastion hosts.
2.  Your 'sliver' keypairs - these keypairs are long lived. The public key of these keypairs is installed into your VM slivers by FABRIC control framework when you create them. You can use multiple keypairs to login to e.g. VMs in different slices, but below we assume you just have one such keypair.

The portal expires registered bastion keys after 6 months and so new keys must be generated for uninterrupted access. Registered sliver keys expire after two years. You can maintain up to 10 bastion keypairs and up to 10 sliver keypairs all expiring at different times. You can always check the expiration time of any key by visiting the 'My SSH Keys' section of the Portal.

It is not possible to login to the bastion host itself - this is an intentional security measure. You can only use it to hop over to your VMs as described below.

There are several geographically distributed bastion hosts available. These are load balanced via the name - bastion.fabric-testbed.net

Notice that you and **only you** are in the possession of private keys within those keypairs - if you lose them, the keypairs must be regenerated. Even if you use FABRIC portal to generate a keypair, the portal allows you to download your private key, but does not store it. FABRIC only stores the public keys.

In addition there are **two usernames** involved - one on the bastion host and one in the VM sliver.

-   The one used for the bastion host is part of your FABRIC identity and can be found in the portal (see figure below).
-   The one used in the VM sliver typically depends on the image you chose to load and for many cloud-ready images defaults to `ubuntu` or `centos` depending on the distribution you are using.

Both the Portal and Jupyter Notebooks show you exactly the SSH command you need to issue to login to each VM, including its IP address, and the VM image username. Your bastion user name is normally part of your SSH configuration file.

![](https://learn.fabric-testbed.net/wp-content/uploads/2022/02/bastion-login-1-1024x521.png) \*Portal screenshot showing the location of the bastion login\*

Other useful articles on this topic:

-   [Generating SSH Configuration and SSH keys](https://learn.fabric-testbed.net/knowledge-base/generating-ssh-configuration-and-ssh-keys/)
-   [Troubleshooting SSH](https://learn.fabric-testbed.net/knowledge-base/ssh-troubleshooting/)
-   [SSH Key Primer](https://learn.fabric-testbed.net/knowledge-base/ssh-key-primer-creating-identifying-fingerprinting-keypairs/)
-   [Transferring data to and from your VMs](https://learn.fabric-testbed.net/knowledge-base/transferring-data-to-and-from-your-vms/)
