---
title: FABRIC Testbed Release 1.4
slug: fabric-testbed-release-1-4
date: "2023-01-30"
date_modified: "2025-08-14"
author: Ilya Baldin
status: publish
wp_id: 3736
views: 1753
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Major Changes

This is a major update to 1.3 capabilities. The enhancements include:

-   [Portal UI](https://learn.fabric-testbed.net/knowledge-base/fabric-portal-release-notes/) and CoreAPI Changes:
    -   Slices are now viewed AND created within a project - user must first select the project they are working in before being able to create a slice in the Portal. Slices can also be listed per project or all at once across all projects.
    -   Slice Builder and Viewer now support attaching persistent storage, boot scripts, viewing management IP address, cut-and-paste terminal SSH command as well as downloading and uploading slice topology in a JSON format.
    -   User profile has editable personal information and publicly-viewable toggles for various fields.
    -   Similar projects now have editable information and publicly-viewable toggles for various project fields
    -   Token expiration as well as session timeouts are explicitly flagged by the portal.
    -   Many internal changes to support variously misbehaving/misconfigured institutional identity providers.
-   There are new Control Framework capabilities:
    -   Full support for slice modify - ability to add/remove nodes, components, services and interfaces
    -   Many performance-tuning enhancements
    -   Ability to set and report maintenance state information on a per testbed, per site and per node basis.
    -   Support for fully virtual (no specialized hardware) OpenStack racks
-   New Network Services
    -   [FABNet4Ext and FABNetv6Ext services](https://learn.fabric-testbed.net/knowledge-base/network-services-in-fabric/) - publicly connectable counterparts to FABNetv4 and FABNetv6 which now (with special project permissions) allow to connect to the public internet via the dataplane.
    -   [L3VPN](https://learn.fabric-testbed.net/knowledge-base/network-services-in-fabric/) - a multi-site L3 service similar to FABNetv4 and FABNetv6, but with user-assigned addressing. Also supports L3VPN-to-L3VPN connections to support public cloud VPCs (completing testing, will be applied as a hotfix to 1.4)
    -   Integration with [Internet2 CloudConnect](https://internet2.edu/services/cloud-connect/) (I2CC) service to support public cloud VPCs being joined into slices (completing testing, will be applied as a hotfix to 1.4)
-   There will be an updated release of [FABlib](https://learn.fabric-testbed.net/knowledge-base/fablib-api/) and Jupyter notebooks that helps experimenters take advantage of these new capabilities
    -   Documentation will be forthcoming as part of FABlib update to support these features.
-   [MFlib (Measurement Framework library)](https://learn.fabric-testbed.net/knowledge-base/mflib-overview/) will also be updated to take advantage of modify and other capabilities

## Packages and Components

### Control Framework

| Control Framework Core | New network service integrations, full modify support,reporting metrics collection | | --- | --- | | Orchestrator | New network service integrations, full modify support | | Broker | New network service integrations, full modify support | | Site Aggregate Manager | New network service integrations, full modify support, support for fully virtual OpenStack aggregates | | Network Aggregate Manager | Support for Internet2 AL2S, support for new network services |

### FIM (FABRIC Information Model) and User APIs

| Basic resource descriptions | Support for maintenance info, improved slice diffiying support, improved packaging and installation, JSON data blobs on all objects (UserData, LayoutData, MFData) | | --- | --- | | FABlib | Currently matches 1.3 capabilities, 1.4 in development |

### JupyterHub

| Federated Identity | Stability improvements | | --- | --- | | Storage | N/A |

### Portal and System Services

| Portal | Slice viewer/builder enhancements, token and session timeout flagging, slicelist per project, updated support for CoreAPI user and project profile feeatures. | | --- | --- | | CoreAPI | SSH key expiration, reporting metrics collection, stability improvements, IdP support fixes | | Credential Manager | N/A |

## Future enhancements

We expect the following features or limitations to be addressed in upcoming releases (expected release and date indicated):

| New features or known limitations | Expected in release | | --- | --- | | FABlib enhancements to support latest features | Ongoing | | Experiment notebook sharing in the portal | 1.5, Spring 2023 | | Linking experiments and publications through the portal | 1.6, Fall 2023 | | Advance reservation support | 1.6, Fall 2023 | | Ability to manage available compute images | 1.6, Fall 2023 | | Support for FPGAs and P4-to-FPGA tool workflows | 1.5, Spring 2023 | | Support for Tofino P4 switches | 1.5, Spring 2023 |

## Bugs

Please see [Forums](https://learn.fabric-testbed.net/forums/forum/release-changelogs-and-known-bugs/) for discussions of known bugs in this and other releases.
