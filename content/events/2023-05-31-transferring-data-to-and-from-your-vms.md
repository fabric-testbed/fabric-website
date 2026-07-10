---
title: "Transferring data to and from your VMs"
date: "2023-05-31"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "You can use `scp` command to transfer data between Jupyter Hub or your laptop and your sliver VM."
author: "Ilya Baldin"
date_modified: "2023-07-28"
wp_id: 4415
views: 1746
tags:
  - events
---

You can use `scp` command to transfer data between Jupyter Hub or your laptop and your sliver VM.

From Jupyter Hub or your laptop to the VM:

```
$ scp -F ~/.ssh/fabric_ssh_config -i <private *sliver* key file> <local file name> ubuntu@11.22.33.44:~/<remote file name>
```

From the VM back to Jupyter Hub or your laptop:

```
$ scp -F ~/.ssh/fabric_ssh_config -i <private *sliver* key file>  ubuntu@11.22.33.44:~/<remote file name> <local file name>
```

Note that if your VM's address is IPv6, the address needs to be enclosed into square brackets:  
`scp -F ~/.ssh/fabric_ssh_config -i <private *sliver* key file> ubuntu@[2620:0:c80:1003:f816:3eff:fe7b:2ca1]:~/<remote file name> <local file name>`  
In some shells (like zsh) the opening bracket may need to be escaped with a `\`:  
`scp -F ~/.ssh/fabric_ssh_config -i <private *sliver* key file> ubuntu@\[2620:0:c80:1003:f816:3eff:fe7b:2ca1]:~/<remote file name> <local file name>`
