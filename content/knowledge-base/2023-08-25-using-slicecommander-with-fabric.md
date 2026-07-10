---
title: Using SliceCommander with FABRIC
slug: using-slicecommander-with-fabric
date: "2023-08-25"
date_modified: "2026-01-12"
author: Ilya Baldin
status: publish
wp_id: 5121
views: 1489
categories:
  - Tools
---

## **SliceCommander**

SliceCommander is a tool for working with FABRIC slices interactively using a shell-like command interpreter. It is designed so that common tasks on your slices, such as inspecting allocated resources, renewing lifetimes, deleting slices, or seamless SSH to nodes, can be performed quickly and with minimal overhead. While it is not a substitute for FABlib and Jupyter Hub in designing and creating experiments, SliceCommander may be a useful companion tool to assist with frequently performed tasks on one or more existing slices.

SliceCommander comes pre-installed in all Jupyter Hub containers starting with version 1.5.x.

## **Installation**

SliceCommander is available from PyPI and can be installed within your existing Python environment. https://pypi.org/project/SliceCommander/

$ pip install slicecommander

## **Usage**

A working fablib environment is a prerequisite for using SliceCommander effectively. Please follow the Configure Environment notebook within Jupyter Hub or install a FABLib environment locally. In particular, a complete FABRIC SSH configuration is required to allow SliceCommander to successfully provide SSH connections to your running FABRIC VMs.

Once FABLib setup is complete, SliceCommander may simply be invoked from a terminal with:

$ slice-commander

Using FABLib, SliceCommander will load any active slices you may have and present you with an interactive prompt. Those coming from \*NIX shells should find familiar commands such as "ls" and "cd" to view and navigate the loaded slice information. Use "help" to view additional available commands and discover usage.

SliceCommander also works with tmux. When launched within a tmux session, SliceCommander will open new panes for each SSH session while keeping the original command prompt available.

## **Examples**

### First Launch

(base) fabric@jupyter-kissel-40es-2enet:~/work$ slice-commander   
  
\------------------------------  --------------------------------------------------  
Credential Manager              cm.fabric-testbed.net  
Orchestrator                    orchestrator.fabric-testbed.net  
Token File                      /home/fabric/.tokens.json  
Project ID                      6b76128d-c73f-431f-a245-0397586a7d40  
Bastion Username                kissel\_0016967042  
Bastion Private Key File        /home/fabric/work/fabric\_config/fabric-bastion-key  
Bastion Host                    bastion.fabric-testbed.net  
Bastion Private Key Passphrase  
Slice Public Key File           /home/fabric/work/fabric\_config/slice\_key.pub  
Slice Private Key File          /home/fabric/work/fabric\_config/slice\_key  
Slice Private Key Passphrase  
Log File                        /tmp/fablib/fablib.log  
Log Level                       INFO  
Version                         1.5.3  
\------------------------------  --------------------------------------------------  
Getting slices...HelloWorld..done \[1 slices\]  
fabric-sc (/)> ls  
HelloWorld  
fabric-sc (/)> help  
  
Documented commands (type help <topic>):  
\========================================  
EOF  cd  delete  exit  help  ls  lsd  pwd  renew  show  ssh  sync  
  
fabric-sc (/)> 

### SSH To a Node

fabric-sc (/)> ssh HelloWorld/Node1
Warning: Permanently added 'bastion.fabric-testbed.net' (ED25519) to the list of known hosts.
Warning: Permanently added '2001:400:a100:3000:f816:3eff:fe25:fa6a' (ED25519) to the list of known hosts.
Activate the web console with: systemctl enable --now cockpit.socket

Last login: Tue Aug 15 18:45:38 2023 from 2600:2701:5000:a902::c
\[rocky@Node1 ~\]$ hostname
Node1
\[rocky@Node1 ~\]$ logout
Connection to 2001:400:a100:3000:f816:3eff:fe25:fa6a closed.

fabric-sc (/HelloWorld/nodes/Node1)> ls
id: fe6699c2-d866-44fc-9b36-6bddeb1c0ba4
name: Node1
cores: 2
ram: 8
disk: 10
image: default\_rocky\_8
image\_type: qcow2
host: dall-w2.fabric-testbed.net
site: DALL
username: rocky
management\_ip: 2001:400:a100:3000:f816:3eff:fe25:fa6a
state: Active
error: 
ssh\_command: ssh -i /home/fabric/work/fabric\_config/slice\_key -F /home/fabric/work/fabric\_config/ssh\_config rocky@2001:400:a100:3000:f816:3eff:fe25:fa6a
public\_ssh\_key\_file: /home/fabric/work/fabric\_config/slice\_key.pub
private\_ssh\_key\_file: /home/fabric/work/fabric\_config/slice\_key

### Renewing a Slice

fabric-sc (/)> renew 7 HelloWorld
Lease End (UTC) : 2023-08-22 18:50:28 +0000
fabric-sc (/)> cd HelloWorld
fabric-sc (/HelloWorld)> ls
id: 2db8f026-e9e3-414b-87ec-05ed8af72b54
name: HelloWorld
lease\_end: 2023-08-22 18:45:03 +0000
lease\_start: 2023-08-11 12:30:10 +0000
project\_id: 6b76128d-c73f-431f-a245-0397586a7d40
state: StableOK
components
nodes
interfaces
networks
slivers
fabric-sc (/HelloWorld)>
