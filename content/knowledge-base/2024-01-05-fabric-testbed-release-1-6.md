---
title: FABRIC Testbed Release 1.6
slug: fabric-testbed-release-1-6
date: "2024-01-05"
date_modified: "2025-08-14"
author: Komal Thareja
status: publish
wp_id: 6241
views: 1669
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Major Changes

This is a minor update to 1.5 capabilities. The enhancements include:

-   Credential Manager
    -   Long-lived tokens - users with Long Lived token permissions can now create tokens with a lifetime upto 9 weeks.
    -   Users can also revoke their tokens if needed. Revoked tokens are maintained in Token Revoke list.
-   There are new Control Framework capabilities:
    
    -   Long-lived tokens – updated to use the long lived tokens and check against the Token Revoke list to disallow operations for revoked tokens.
    
    -   POA (Perform Operational Action) Add/Remove SSH Keys – users can request to add/remove SSH keys to/from the slivers using POA API.
-   There will be an updated release of [FABlib](https://learn.fabric-testbed.net/knowledge-base/fablib-api/) and Jupyter notebooks that helps experimenters take advantage of these new capabilities
    -   Documentation will be forthcoming as part of FABlib update to support these features.
-   Internet2 AL2S/CloudConnect updated as per new AL2S API.
-   Bug Fixes to gracefully handle Openstack Delete VM leaks.
-   List Resources enhanced to return more granular information for sites including the resource information per worker on each site.
-   Oversubscription support - EDC and EDUKY sites have been enabled to support CPU over subscription.
-   New Permissions Slice.OnlyEDUKY added to redirect slices from Educational Projects to EDYKY.
-   Portal: Long-lived token holder list on Project detail page; ephemeral key support for Web SSH feature in Slice Viewer; static content addition of branding resources page. See [portal release notes](https://learn.fabric-testbed.net/knowledge-base/fabric-portal-release-notes/) for more details.

## Packages and Components

### Control Framework

| Control Framework Core | | | --- | --- | | Orchestrator | Long lived tokens, POA Add/remove SSH keys, List Resources, Permission: Slice.OnlyEDUKY | | Site Aggregate Manager | Over subscription, Openstack Delete VM Leaks | | Network Aggregate Manager | AL2S support |

### User APIs and libraries

| FIM (Basic resource descriptions) | Permission: Slice.OnlyEDUKY | | --- | --- |

### Portal and System Services

| Credential Manager | Long lived token support. | | --- | --- | | Portal | Long-lived token holder list on Project detail page; ephemeral key support for Web SSH feature in Slice Viewer; static content addition of branding resources page. |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | FABlib enhancements to support latest features | Ongoing | | Advance reservation support | 1.7, Fall 2024 | | Ability to manage available compute images | 1.7, Fall 2024 | | Support for Tofino P4 switches | 1.7, Fall 2024 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
