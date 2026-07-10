---
title: FABRIC Credentials Overview
slug: fabric-credentials-overview
date: "2023-06-08"
date_modified: "2023-12-04"
author: Ilya Baldin
status: publish
wp_id: 4510
views: 1467
categories:
  - "Authorization, Projects and Tokens"
---

## Overview

To use FABRIC three types of credentials are needed for different purposes:

-   Your **institutional username/password** (sometimes GMail/Microsoft/ORCID or GitHub) - this is what lets you login to the [portal](https://portal.fabric-testbed.net), the [Jupyter Hub](https://jupyter.fabric-testbed.net) and this [documentation site](https://learn.fabric-testbed.net).
    -   Logging into the documentation site is only needed if you want to post a new forum topic or respond to an existing forum post.
    -   Your FABRIC account is linked to your institutional account during the [enrollment process](https://learn.fabric-testbed.net/knowledge-base/signing-up-for-a-fabric-account/).

Note that FABRIC does not know or store your username or password - the authentication is performed by what is called an Identity Provider or IdP typically belonging to your home institution (university/college/lab).  
As a result **no FABRIC system will ever directly ask you for your login or password - you will always be redirected to your identity provider (your home institution, Google, GitHub) first.**

-   **Two pairs of SSH keys** - [one or more **sliver keypairs**](https://learn.fabric-testbed.net/knowledge-base/generating-ssh-configuration-and-ssh-keys/) that let you login/SSH into the virtual machines your create and a **bastion** keypair that allows you to 'hop' through the bastion host into your VM.

Using the bastion host is not optional - you always SSH into your VMs via the bastion host.

-   An [API token](https://learn.fabric-testbed.net/knowledge-base/obtaining-and-using-fabric-api-tokens/) that allows you to call on FABRIC control software to create your experiments/slices
    -   These are typically short-lived (1 hour) and self-refreshing so long as you maintain a login session with the portal or Jupyter Hub

## Logging into the forums

Specifically for this site - learn.fabric-testbed.net users are only expected to login when they need to post a new topic or respond to a forum question - otherwise the contents here is open. To login to the Forums, navigate to the forums page by clicking 'Go To Forums' button on the right (or [clicking here](https://learn.fabric-testbed.net/forums/)), navigate to the desired forum and click 'Login to Post' button as shown. Same button is also available at the bottom of every thread for convenience.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/07/Screen-Shot-2023-07-17-at-5.06.47-PM-1.png)

When using the forums you should use the same institutional login as for the FABRIC Portal, however in reality the account system for the forums is separate from FABRIC. You can also e.g. use a GMail account to login to the forums, but note that when answering your questions it may be difficult for us to match with your FABRIC account.
