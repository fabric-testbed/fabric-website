---
title: Obtaining and using FABRIC API tokens
slug: obtaining-and-using-fabric-api-tokens
date: "2022-05-26"
date_modified: "2024-07-23"
author: Ilya Baldin
status: publish
wp_id: 1898
views: 3351
categories:
  - "Authorization, Projects and Tokens"
---

As described in [this article](https://learn.fabric-testbed.net/knowledge-base/fabric-user-roles-and-project-permissions/) the foundation of FABRIC user permission are projects and project tags. But how do they actually translate into decisions by the FABRIC Control Framework to allow or deny the use of FABRIC resources? This is where _FABRIC tokens_ come into play. Tokens are JWTs (JSON Web Tokens or short documents expressed in JSON) that are

1.  Tied to your identity
2.  Tied to the project the you are working in
3.  Have a finite lifetime, but can be renewed
4.  Issued to you by an element of FABRIC infrastructure called the _Credential Manager_

When issued, the token includes in it the information about the project tags granted to the chosen project. The token is included into API calls with the Control Framework, allowing elements of the FABRIC Control Framework to make decisions on whether to allocate or not allocate specific resources based on the tags included in the token. FABRIC tokens are a form of a _bearer token_ conferring the rights to specific resources to whoever presents the token. Tokens are stored on your local filesystem, when using your own laptop to call on FABRIC APIs, in your Jupyter notebook container, when using the Jupyter Hub or in your browser if you are working in the Portal.

It is imperative to keep your tokens secure. If your token is leaked, the new owner of the token assumes the same rights you had at the time the token was issued. They can continue using it until the token expires (one hour). If you believe your token is leaked, please login to the Credential Manager [https://cm.fabric-testbed.net/](https://cm.fabric-testbed.net/) and revoke it.

FABRIC software goes to great lengths to hide the majority of interactions with the Credential Manager and other systems making FABRIC token management mostly transparent to the user.

## Using tokens within the FABRIC Portal

The good news is there is nothing you need to do to use FABRIC tokens within the portal - all of it will happen completely transparently to you.

There is nothing you need to do to manage your tokens explicitly if you are only using the portal. If you are using FABlib with Jupyter Hub or on your laptop, read on.

The portal also has the ability to help you obtain a new token via a graphical interface for when you are using FABlib either in Jupyter Hub or on your laptop. Navigate to Experiments and click Manage Tokens. From there you can click on 'Open FABRIC Credential Manager' to be redirected to the Credential Manager.

When generating a token be sure to select the project for which this token is being generated - remember the rights that you have will depend on which permissions are given to the specific project you chose to work in.

You can create and download a new token, view/revoke tokens, and validate identity token in Credential Manager.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/cm-ui-1024x544.png)

## Using tokens within the Jupyter Hub

When your Jupyter Hub notebook container is started, it is pre-loaded with a valid token and FABlib will renew it as necessary while you are running inside the notebook. In the rare instances when the token expires, you may need to go to the FABRIC Portal to obtain a new token.

FABlib expects the token to be in the location identified by the environment variable FABRIC\_TOKEN\_LOCATION. By default, on JupyterHub, FABRIC\_TOKEN\_LOCATION is set to `/home/fabric/.tokens.json`. When you run into a token error such as "**Refresh Token: (invalid grant)**" you can do one of two things:

1.  Restart the container by going to File -> Hub Control Panel, then Stop the container and Start it again.
    -   Sometimes if you have not used the container for a while it may already be stopped so only a Start button is available
2.  Re-generate the tokens again from the Portal as indicated in the section above and cut and paste to JupyterHub in `/home/fabric/.tokens.json`

## Using tokens when working on your laptop/desktop

Presumably you are talking to FABRIC API using FABlib, in which case the tokens should initially be setup as indicated [here](https://learn.fabric-testbed.net/knowledge-base/install-the-python-api/#configure-the-environment).

FABlib expects the token to be in the location identified by the environment variable FABRIC\_TOKEN\_LOCATION. When user runs into a token error such as "**Refresh Token: (invalid grant)**", please re-generate the tokens again from the Portal as indicated in the section above and update in the location specified in FABRIC\_TOKEN\_LOCATION.

## Using long-lived API Tokens

Users running long-lived experiments supported by unattended automated tools can now request non-renewable long-lived API Tokens (lifetime up to 9 weeks).

### Request Long-lived Token role in Portal

To request the project-based long-lived token access, please go to [FABRIC Portal](https://portal.fabric-testbed.net/) \-> select a Project -> choose Project Memberships tab -> Long-lived Token tab -> click Request Long-lived Token Access button.

![](https://learn.fabric-testbed.net/wp-content/uploads/2022/05/long-lived-token-1024x389.png)

In FABRIC Help Portal, please input your request summary and description to provide a justification for why you are requesting the long-lived token role. Your email, project name, project id and request type are pre-filled and doesn't need modification.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/request-ll-token-jira-ticket-1-1024x787.png)

### Manage Long-lived Token in Credential Manager

Users can open FABRIC Credential Manager from Portal Experiments page -> Manage Tokens tab.

If you don't have long-lived token role for the selected project, the default token lifetime would be 4 hours and unchangeable.

Any token with a lifetime longer than 4 hours is considered a long lived token and cannot be refreshed.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/image-1024x311.png)

For projects that you have long-lived token role, you can select up to 9-week lifetime and generate your long-lived token.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/01/created-ll-token-1024x533.png)
