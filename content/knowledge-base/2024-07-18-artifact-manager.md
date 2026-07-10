---
title: Artifact Manager
slug: artifact-manager
date: "2024-07-18"
date_modified: "2025-09-12"
author: Yaxue Guo
status: publish
wp_id: 7259
views: 1575
categories:
  - "Authorization, Projects and Tokens"
---

_Direct URL:_ [https://artifacts.fabric-testbed.net](https://artifacts.fabric-testbed.net)

* * *

## Introduction

The [Artifacts Manager](https://artifacts.fabric-testbed.net) is a platform for FABRIC users to safely store project related artifacts in a shareable way.

Artifacts can be stored and shared at three permission levels (aka visibility)

-   **author**: Only the artifact authors can view the artifact and download content versions
-   **project**: Artifact authors as well as project personnel (determined by the referenced FABRIC project) can view the artifact and download content versions
-   **public**: All users (including anonymous ones) can view the artifact and download content versions

_**Reminder**: Authors are always the only users that can edit the artifact and add new content versions_  
_**Reminder**: Contents of the ”artifact” are the responsibility of the user to manage, and care should be taken to not include private keys, tokens, or other secret information (FABRIC does not review these files, but does retain the right to remove inappropriate files)_  
_**Note**: Existing FABRIC users will be recognized by the system, and denoted as such following a successful login. Non-FABRIC users will always be denoted as an "AnonymousUser", regardless of how many times they attempt to login._

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-9.41.00 AM-1024x776.png)

* * *

## Creating an artifact

Any active FABRIC user who participates in one or more projects can create an artifact. Non-FABRIC users may view and/or download public artifacts, but will not be able to create new or modify existing artifacts.

Start by Logging in to the Artifact Manager using your FABRIC credentials. Once logged in, the "AnonymousUser" information should be replaced by your information, and your existing artifacts should be displayed.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-9.50.03 AM-1024x776.png)

Clicking on the "Artifacts" link in the navigation bar at the top of the screen will list all active artifacts viewable by you, as well as show a "Create Artifact" button if you meet the criteria to create an artifact.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-9.56.05 AM-1024x768.png)

Clicking the "Create Artifact" button will take you to a form that allows you to create the landing page information for your artifact and subsequent file contents as versions.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-10.05.34 AM-1024x768.png)

Required fields

-   Title - Free text string up to 255 characters
-   Short Description - Free text string up to 255 characters
-   Visibility - author, project, public

Optional fields

-   Long Description - Free text string up to 5000 characters
-   Show Project - Boolean, default to True (False will hide the project name/UUID info if it exists)
-   Project (by UUID) - UUID of the project the artifact is associated with
-   Tags - Fixed word choices to help identity the artifacts intent or use
-   Show Authors - Boolean, default to True (False will hid the artifact authors from general view)
-   Authors - List of other FABRIC users who can contribute as authors to the artifact (The UI supports up to 12 authors, but more can be added via the API directly)

**Example Artifact**

The following artifact is used for demonstration purposes only, and you should fill out your field with the information that is pertinent to your purposes.

-   Project UUID - This information can be found from the portal project page and copied over
-   UUD: `7f33ecf0-5dd7-4fd5-b1b7-061367f8bca6` references a project named "_**stealey - private**_"

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-10.28.35 AM-1024x776.png)

Authors can be looked up by name or email search from the "Search for FABRIC authors" box

-   This example searched for "Komal" and then the Author UUID of the account was copy/pasted into the Authors (by UUID) box
-   By default the creator of the Artifact will also become an Author of the artifact

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-10.30.03 AM-1024x768.png)

Once all of the information is filled out, choose the "Save" option as the bottom of the page

Upon successful validation of the provided fields the information will be saved as an artifact.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-10.37.25 AM-1024x768.png)

If validation is not successful, an error message would appear at the top of the page when attempting to submit/save the artifact

-   example: providing an invalid UUID for a project as shown below
-   {'ValidationError': \[{'project\_uuid': ErrorDetail(string="unable to find project: '7f33ecf0-5dd7-4fd5-b1b7-061367f8bca'", code='invalid')}, {'project\_uuid': ErrorDetail(string="user is not member of project: '7f33ecf0-5dd7-4fd5-b1b7-061367f8bca'", code='invalid')}\]}

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-11.00.01 AM-1024x776.png)

**Adding contents / versions to an artifact**

Once an artifact exists, contents can be added to it by choosing a "tarball" file to upload

-   At this time any file, or set of files, that can be represented as a "tarball" are suitable for the contents of an atrifact
-   File type: `.tgz`, .`tar`, `.tar.gz`
-   Contents of the "tarball" are the responsibility of the user to manage, and care should be taken to not include private keys, tokens, or any other file that may reveal private/secret information
-   Future iterations of Artifact Manger plan to include GitHub repositories and DOIs (Zenodo) as artifact content types.

In section **Add a new Version** there is an option to "Choose File" (only available to artifact authors). This allows the user to choose a "tarball" from their local system to upload to the artifact.

-   Example: A tarball named "**_example-artifact.tar.gz_**" has been chosen to upload

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-11.20.28 AM-1024x776.png)

Once the file is chosen, the "Submit" button will upload the file contents to the artifact and generate a new version.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-11.21.03 AM-1024x776.png)

As the underlying contents change, or the artifact evolves, newer contents can be uploaded in a similar manner. Versions will be denoted by date (most recent first), and multiple versions submit on the same date will be "dot-notated" with an increasing integer value.

-   Example: a few more uploads of the contents to simulate an evolving artifact

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-11.24.43 AM-1024x776.png)

Though prior versions cannot be deleted, they can be disabled from being downloadable by clicking the "disable" option.

-   Example: only allow the most recent version to be downloadable
-   A prompt will be displayed to the user asking if they want to proceed with disabling the version

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-11.26.24 AM-1024x776.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-11.27.00 AM-1024x768.png)

Returning to the list of artifacts by choosing "Artifacts" from the navigation bar would show your new artifact as it would appear to all who have access to discover it.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-11.29.09 AM-1024x776.png)

* * *

## Update an existing artifact

Select the artifact you wish to update from the "My Artifacts" page

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-2.24.09 PM-1024x768.png)

The artifact "My example artifact" will be used

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-2.25.39 PM-1024x776.png)

Choosing the "Edit" button will put the artifact into edit mode.

-   Note: Versions can updated from the artifact landing page, and does not require the user to go into the edit view

All existing fields can be updated. The only notable difference is that existing authors are identified by their full name and affiliation as well as UUID.

-   Note: Only the author UUID is required to add new authors, the full output on edit view is for the convenience of the editing author to know who is already associated to the artifact

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-2.36.29 PM-1024x776.png)

When finished editing, choose to "Save" the artifact to retain the updated values

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/07/Screenshot-2024-10-28-at-2.37.42 PM-1024x776.png)

* * *

## Deleting an artifact

TODO

* * *

## Navigating the Artifact Manger API

TODO

## Artifact Manger in Jupyter Hub

For more information, please refer to this [link](https://learn.fabric-testbed.net/knowledge-base/artifact-manger-in-jupyter-hub/).
