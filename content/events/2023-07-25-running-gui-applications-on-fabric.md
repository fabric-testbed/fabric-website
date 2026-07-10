---
title: "Running GUI applications on FABRIC"
date: "2023-07-25"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "See the Services and Tunnels artifact for examples and more information."
author: "Ilya Baldin"
date_modified: "2025-09-11"
wp_id: 4823
views: 1468
tags:
  - events
---

See the [Services and Tunnels](https://artifacts.fabric-testbed.net/artifacts/a66cce35-ec89-4d3a-b2a8-87050b8e71bd) artifact for examples and more information.

Some types of applications you use in an experiment may have an interactive GUI. There are multiple ways of displaying a GUI, some more involved than others, described here.

## Use X11 forwarding via SSH

This is by far the easiest method as it only requires the tools you likely already have. The application must be installed with all of its dependencies on FABRIC VM. To forward the UI of the application back to your laptop simply add a `-Y` option to your ssh command:

ssh -Y -F ~/.ssh/fabric\_ssh\_config -i <private \*sliver\* key file> ubuntu@2620:0:c80:1003:f816:3eff:fe7b:2ca1 

Notice you cannot forward X11 into the Jupyter Hub - it can only be done back to your laptop or desktop.

After you login, simply start the application on the VM and its UI will be displayed on your screen.

Your laptop or desktop are assumed to be able to display X11-based applications. Generally Linux deals with this out of the box. For Mac OS you may need to install [XQuartz](https://www.xquartz.org/). For Windows additional installation of an X Server like [xming](https://sourceforge.net/projects/xming/) may be required.

## Virtual desktop forwarding

This method sends the entire virtual desktop from your VM back to your laptop or desktop. This method is more involved as it requires installing a full desktop environment on the VM (e.g. GNOME) and it also requires the installation of a VNC server (multiple options exist - Tight VNC, Real VNC etc) on the VM and then forwarding the connection from the VNC server to your desktop using SSH tunneling. From there you can connect with a VNC client running on your laptop (that you also need to install) to the forwarded connection to display the virtual desktop.
