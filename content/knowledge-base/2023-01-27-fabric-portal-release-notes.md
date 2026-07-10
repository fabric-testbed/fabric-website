---
title: FABRIC Portal Release Notes
slug: fabric-portal-release-notes
date: "2023-01-27"
date_modified: "2026-06-05"
author: Yaxue Guo
status: publish
wp_id: 3674
views: 2610
categories:
  - Release Notes
tags:
  - documentation
  - release notes
---

## Release 1.9

Major Changes

-   **P4 Switch**: Added support for P4 switches on Slice Builder and Slice Viewer. Users can add P4 switches in sites with switch capability & projects with Switch.P4 tag. The Resources page and site detail page now displays switch availability.

-   **Artifact List:** Public Artifacts: View all artifacts from the Portal on the public experiment page and under _Experiments → Artifact Manager_; Project Artifacts: Accessible via _Project Detail → Project Artifacts_; User Artifacts: Available under _User Profile → My Artifacts_.

-   **Project Slices Visibility**: Users can now view all slices created by members of their project.
-   **Q&A Bot Tool**: A chatbot tool is now available in the Portal, enabling users to ask questions and receive answers more quickly and conveniently.
-   **New Project Creation Workflow**: Users now request projects through the FABRIC Help Portal before being assigned the Project Lead role, which is now project-based rather than global.

| Version | Date | Tagging Message | | --- | --- | --- | | 1.9.22 | 06/05/2026 | Fix cross-browser compatibility and add mobile responsive support | | 1.9.21 | 05/26/2026 | Resource map UI enhancement | | 1.9.20 | 05/19/2026 | Dependency upgrades and minor fixes | | 1.9.19 | 05/11/2026 | Fix/react error 130 unauthenticated | | 1.9.18 | 04/30/2026 | Portal resources API update and UI fixes | | 1.9.17 | 04/24/2026 | Portal UI polish and slice viewer improvements | | 1.9.16 | 04/24/2026 | fix: carousel rendering, resources page crash, parser edge/links fix, UI color updates | | 1.9.15 | 04/23/2026 | refactor: replace CRA with Next.js framework, migrate to release workflow | | 1.9.13/1.9.14 | 04/23/2026 | refactor: replace CRA with Next.js framework | | 1.9.12 | 04/07/2026 | Fix homepage publication count metrics | | 1.9.11 | 04/01/2026 | Update publication API and implement search & pagination for the publications list. | | 1.9.10 | 01/30/2026 | Added REU site link and updated project types. | | 1.9.9 | 01/27/2026 | Updated the site and slice parser to ensure compatibility with the latest API changes. | | 1.9.8 | 01/14/2026 | Updated chatbot with login management and guide article link | | 1.9.7 | 12/05/2025 | Resolve Glob CLI warnings and fix slice extension date formatting | | 1.9.6 | 12/01/2025 | Updated FABRIC newsletter signup form with Mailchimp. | | 1.9.5 | 11/17/2025 | Fixed slices viewing issue on Experiment and User Profile pages. | | 1.9.4 | 11/14/2025 | Updated project creation workflow. | | 1.9.3 | 10/10/2025 | Integrated Q&A bot tool. | | 1.9.2 | 10/02/2025 | Fixed project slice view for users with zero slices. | | 1.9.1 | 08/26/2025 | Add-project features temporarily disabled during transition. | | 1.9.0 | 07/31/2025 | Added support for P4 Switch and artifacts list | \*Releases and Tags information for v1.9\*

## Release 1.8

Major Changes

-   **Resources Page**: Introduced a new **Facility Port Availability** table. Users can now view and search facility port details, including the name, site, VLAN range, and allocated VLAN range.

-   **User Profile Page**: Added a new **Other Identities** section, enabling users to include Google Scholar, ORCID, or other identity information. If the privacy setting is set to public, this information will also appear on the user's public profile.

-   **Project Profile Page**: Project owners can now input custom free-text topics in the project topics field. Facility operators can define project types.

-   **Community - FABRIC User Publications Page**: Updated the page to replace static data with dynamic data sourced from the **FABRIC Publication Tracker API**.

| Version | Date | Tagging Message | | --- | --- | --- | | 1.8.5 | 04/09/2025 | Removed SAC Page | | 1.8.4 | 02/03/2025 | Updated publications page, leadership page and top banner styling | | 1.8.3 | 01/15/2025 | Fixed miscellaneous styling issues caused by package update | | 1.8.1/1.8.2 | 01/10/2025 | Fixed package conflict issue | | 1.8.0 | 01/09/2025 | Added support for facility port availability, project type and topics, users’ other identities | \*Releases and Tags information for v1.8\*

## Release 1.7

Major Changes

-   Project related enhancements: added funding, community and matrix link support; added public project list for unauthenticated users to view.
-   Resources enhancements: added level-2 data to site detail page to show resource availabilities per worker; added time filter to view future resource data.
-   Slice Builder/ Viewer enhancements: users can specify lease start time for future slice creation; FPGA support is added.
-   New external tools: Artifact Manager app is available on the Experiments page -> Artifact Manager tab; Public Metrics, Infrastructure Metrics, Optical Data and Latency Monitor are available on the Resources page -> Measuring and Monitoring Tools.

| Version | Date | Tagging Message | | --- | --- | --- | | 1.7.2 | 09/13/2024 | Added FABRIC User Publications page & enhanced resources table toolbar | | 1.7.1 | 08/06/2024 | Minor content updates and usability enhancements | | 1.7.0 | 07/19/2024 | Updated project and resource features to support latest 1.7 Orchestrator API and Core API | \*Releases and Tags information for v1.7\*

## Release 1.6

Major Changes

-   Added long-lived token holder list to Project detail page; users can view a project’s long-lived token holders and request the access too; Facility operator can manage a project’s long-lived token holders;
-   Enabled another option of using ephemeral key for Web SSH feature; users can either paste their private sliver key or generate/ install ephemeral key at one click to connect to VM in browser;
-   Several static content updates including a new branding resources page for users to download various FABRIC logos, homepage component update and Portal footer navigation bar update.

| Version | Date | Tagging Message | | --- | --- | --- | | 1.6.5 | 05/08/2024 | Added links of measuring and monitoring tools to the Resources page | | 1.6.4 | 04/15/2024 | Minor updates on top navigation bar and topology map | | 1.6.3 | 03/15/2024 | Content updates for Leadership page and Cite FABRIC page | | 1.6.2 | 03/06/2024 | Bug fixes and content updates | | 1.6.1 | 01/16/2024 | Minor content updates and usability enhancements | | 1.6.0 | 01/11/2024 | Long-lived token support, web SSH using ephemeral key, branding resources page and other UI enhancements | \*Releases and Tags information for v1.6\*

## Release 1.5

Major Changes

-   Facility Port support in Slice Builder and Slice Viewer;
-   New feature of opening Web SSH terminal in Slice Viewer;
-   Support for multiple sliver keys when creating slice;
-   User experience enhancements in Slice Builder (set error boundary for Slice Viewer to show guidance for slices failing to render; added searchable drop-down feature for site selection);
-   Updated homepage by merging marketing website content (Recent News/ Twitter Feed/ Partners);
-   Migrated static content from [FABRIC marketing website](https://fabric-testbed.net/) to Portal and learn site; unified the top navigation bar between portal and learn site;
-   Updated Portal navigation bar with new items and user name initial avatar;
-   Enhanced the usability of project owner/ member management UI by separating add and view/ delete users;
-   Added “Teaching Classes on FABRIC” card on Contact Us page to point to educator signup form;
-   Support of viewing Persistent Storage on project detail page;
-   Added check-cookie page for the user account issue troubleshooting workflow;
-   Project expiration time support: warning message with link to “Renew Project” for projects going to expire in one month and expired projects. (Facility Operator can modify project expiration time in portal, and other users need use FABRIC Help Portal to submit a ticket for renewing project).

| Version | Date | Tagging Message | | --- | --- | --- | | 1.5.3 | 11/03/2023 | Updated partner logo list, fixed persistent storage rendering issue | | 1.5.2 | 11/02/2023 | Persistent storage, project lifetime, check-cookie page and other usability enhancements & bug fixes | | 1.5.1 | 09/21/2023 | Migrated marketing website content, updated navigation bar and enhanced usability | | 1.5.0 | 08/17/2023 | Facility Port, SSH-to-VM-slivers, multiple sliver keys, and UX enhancements in Slice Viewer/Builder; homepage update | \*Releases and Tags information for v1.5\*

## Release 1.4

**Major Changes**

-   Slices viewed and created per-project.
-   Improvements to slice builder/viewer
    -   Support for Storage attachment, Boot Script, management IP address, SSH command;
    -   Download/ upload topology JSON for slice setup.
-   Support for CoreAPI features
    -   User profile preference setting and public user profile page;
    -   Project preference setting and public project page.
-   Session timeout modal and token auto-refresh.
-   Site maintenance information showed on map and site detail page added;
-   Search-box for people/ projects added on Portal navigation bar;
-   Project member batch update enabled for project management;
-   Office Hours booking option added on Contact Us page;
-   New Signup page for redirecting non-institutional signup users to initiate account petition in Jira ticket system;
-   UI updates and UX enhancements on SSH Key Management page and Project Detail page;
-   Slice-extend feature.

| Version | Date | Tagging Message | | --- | --- | --- | | v1.4.8 | 06/14/2023 | added slice-extend feature, updated token-generate logic | | v1.4.7 | 05/26/2023 | added new signup page, partial-maintenance site state; improved SSH Key management UI and changed Project default tab | | v1.4.6 | 05/16/2023 | updated site parser to show worker maintenance status, and disabled token auto-refresh | | v1.4.5 | 04/21/2023 | new feature of project member batch update/ searching people and projects, and several content updates | | v1.4.4 | 02/22/2023 | updated topology map, added site page and site maintenance status | | v1.4.3 | 02/01/2023 | added portal version number at footer | | v1.4.2 | 01/20/2023 | updated UI to manage slices by projects | | v1.4.1 | 01/13/2023 | added session timeout modal / token auto-refresh | | v1.4.0 | 12/09/2022 | updated Slice Builder/ Viewer to support CF 1.3 | \*Releases and Tags information for v1.4\*

## Release 1.3

**Major Changes**

-   Initially integrated with CoreAPI Service;
-   Updated User and Project Profiles;
-   Improved Slice Builder usability.

| Version | Date | Tagging Message | | --- | --- | --- | | v1.3.6 | 11/07/2022 | updated user/project preference setting; added public user profile page | | v1.3.5 | 10/06/2022 | (v1.3.5 is wrongly created and deleted) | | v1.3.4 | 10/06/2022 | enhanced slice viewer with ssh info and updated project permission management UI | | v1.3.3 | 09/14/2022 | updated README documentation and updated role-based project view | | v1.3.2 | 09/07/2022 | added helper text to Slice Builder and updated role-based project view | | v1.3.1 | 08/29/2022 | hot fixes for user profile and project pages | | v1.3.0 | 08/24/2022 | initial integration with Core API and slice builder update | \*Releases and Tags information for v1.3\*

## Release 1.2

Major Changes

-   Graphical slice builder that allows experimenters to graphically define their experiment slice topology;
-   Contact Us page and help links on project detail page.

| Version | Date | Tagging Message | | --- | --- | --- | | v1.2.7 | 07/27/2022 | added Jira help links and Trusted CI badge | | v1.2.6 | 07/11/2022 | added help page and updated FABRIC map | | v1.2.5 | 06/20/2022 | Hot fixes for user feedback | | v1.2.4 | 06/06/2022 | facility updates addition for Release 1.2 | | v1.2.3 | 06/01/2022 | added guide links and enabled auto-refresh for configuring-state slices | | v1.2.2 | 05/25/2022 | slice builder and viewer updated | | v1.2.1 | 05/16/2022 | top navigation bar updated | | v1.2.0 | 05/13/2022 | new feature slice builder added | \*Releases and Tags information for v1.2\*

## Release 1.1

Major Changes

-   Graphical slice viewer that helps to display slices created e.g. in Jupyter Notebooks;
-   SSH key management that allows to generate/ upload/ delete users' bastion and sliver keys.

| Version | Date | Tagging Message | | --- | --- | --- | | v1.1.11 | 04/12/2022 | new maintenance notice | | v1.1.10 | 03/18/2022 | facility updates update for Release 1.1 | | v1.1.9 | 03/07/2022 | bug fix for deleting ssh key function | | v1.1.8 | 03/07/2022 | SSH Key Management UI update and link fix | | v1.1.7 | 03/01/2022 | bug fix for slice viewer display issue | | v1.1.6 | 02/23/2022 | projects and slices UI updated | | v1.1.5 | 02/23/2022 | bug fix for slice viewer, compatible with Orchestrator API v1.1 | | v1.1.4 | 02/22/2022 | node package dependencies audit | | v1.1.3 | 02/21/2022 | bug fix for downloading public key function | | v1.1.2 | 02/02/2022 | project page updated compatible with refactored PR | | v1.1.1 | 01/31/2022 | minor UI updates for usability improvement, and new facility updates | | v1.1.0 | 01/18/2022 | ssh key management added, compatible with UIS API v1.1.0 | \*Releases and Tags information for v1.1\*

## Release 1.0

Major Changes

-   Federated login with COmanage support;
-   Display resource availability map with real-time information on compute resources;
-   Create/update/delete projects;
-   Manage CF credential tokens.

| Version | Date | Tagging Message | | --- | --- | --- | | v1.0.3 | 12/02/2021 | slice viewer update, global role addition for Jupyterhub active members | | v1.0.2 | 11/11/2021 | new feature of slice viewer, compatible with Orchestrator API v1.0.4 | | v1.0.1 | 10/14/2021 | resource page and JupyterHub link update, compatible with Orchestrator API v1.0.4 | \*Releases and Tags information for v1.0\*
