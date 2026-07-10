---
title: Generating SSH Configuration and SSH Keys
slug: generating-ssh-configuration-and-ssh-keys
date: "2023-05-31"
date_modified: "2025-08-14"
author: Ilya Baldin
status: publish
wp_id: 4402
views: 4096
categories:
  - Getting Started
tags:
  - documentation
  - getting started
---

To access your VMs on FABRIC at a minimum you will need

1.  A valid bastion SSH keypair
2.  A sliver SSH keypair
3.  An SSH client configuration file

Sections below discuss how to generate all of these.

If you are using the Jupyter Hub, the [Configure Environment](https://github.com/fabric-testbed/jupyter-examples/blob/main/configure_and_validate.ipynb) notebook will perform steps 2 and 3 for you. However you still need to generate the bastion keypair for step 1 yourself as described below.

NOTE: Configure Environment notebook is available under `jupyter-examples-*` directory on Jupyter Hub depending on the release you are using.

## Creating an SSH client configuration file

To use FABRIC bastion host you must create an SSH configuration file (regardless of whether you are working from Jupyter Hub or from your laptop or desktop).

If you are on Jupyter Hub and doing it yourself (without the use of the 'Configure Environment' notebook), save the configuration files and key files under `~/work/fabric_config/ssh_config` so they persists between sessions, if you are working from your own laptop/desktop, you can save them anywhere, for instance as `~/.ssh/fabric_ssh_config`.

We do not recommend using the default name `~/.ssh/config` filename to save your FABRIC SSH configuration as this will by default affect your ssh logins to any host, not just FABRIC VMs.

Make sure you know your FABRIC bastion username prior to proceeding and you have generated your bastion keypair and are in possession of the private key file.

```
UserKnownHostsFile /dev/null
StrictHostKeyChecking no
ServerAliveInterval 120 

Host bastion.fabric-testbed.net
     User <FABRIC_BASTION_USERNAME>
     ForwardAgent yes
     Hostname %h
     IdentityFile <FABRIC_BASTION_PRIVATE_KEY_LOCATION>
     IdentitiesOnly yes

Host * !bastion.fabric-testbed.net
     ProxyJump <FABRIC_BASTION_USERNAME>@bastion.fabric-testbed.net:22
```

In the template above replace the things between `< >` with your own values.

After you've done it you can ssh to your sliver simply as `ssh -F ~/work/fabric_config/ssh_config -i <private sliver key file> [centos@](mailto:centos@63.239.135.94)1.2.3.4` from Jupyter Hub or `ssh -F ~/.ssh/fabric_ssh_config -i <private sliver key file> centos@1.2.3.4` from your own laptop.

**NOTE**: Username in the example above is centos for a VM provisioned with centos image and should be changed to reflect the image used for your VM. If using Jupyter Hub, the SSH command is also indicated in one of the cells displaying the list of the VMs in your slice.

Below we discuss procedures currently in place for managing bastion SSH keys. We expect much of this process to be automated in the near future.

## Generating SSH keys and Gaining Access to Bastion Hosts and VM slivers

In order to access your VM slivers in FABRIC you must first have two initial keypairs - a sliver keypair and a bastion keypair. The table below demonstrates the two workflows, depending on whether you want to generate the keypairs yourself or have them generated via the FABRIC portal.

| | Generating keys yourself | Generating keys via FABRIC portal | | --- | --- | --- | | 1 | Generate two keypairs following the instructions in the previous section. | N/A | | 2 | Navigate to the FABRIC portal: https://portal.fabric-testbed.netUser Profile | My SSH Keys section | Navigate to the FABRIC portal: https://portal.fabric-testbed.netUser Profile | My SSH Keys section | | 3 | List the contents of your previously generated bastion public key cat mysshkey.pub Select key type and copy-and-paste the contents into the 'Public Key' field of the 'Upload Public Key' section of the page | Select key type, fill in key name (short string with no spaces), description (longer sentence) and select Key Type in the 'Generate SSH Key Pair' section of the page | | 4 | Click 'Upload Public Key' | Click 'Generate Key Pair' | | 5 | N/A | Download both the public and the private portions of the new key pair. Move them to a permanent location in ~/.ssh/ or ~/work/fabric\_config/(in Jupyter Hub so it persists) and set permissions on the files as follows (substititing proper key names):$ chmod 0600 ~/work/.ssh/mysshkey$ chmod 0644 ~/work/.ssh/mysshkey.pub | | 6 | If you selected 'bastion' key type, this public key will automatically be installed into your account on all bastion hosts (typically within 1 minute). | If you selected 'bastion' key type, this public key will automatically be installed into your account on all bastion hosts (typically within 1 minute). | | 7 | Create the SSH configuration file as described above using the path to the private bastion key and the bastion login name or use the Jupyter Notebook called Configure Environment to do it automatically. | Create the SSH configuration file as described above using the path to the private bastion key and the bastion login name or use the Jupyter Notebook called Configure Environment to do it automatically. | \*Key pair workflows\*

Note that the bastion host will NOT allow you to login directly, use scp or sftp - this is by design. You can only use it to 'hop' to other hosts, like the VM slivers you provision in FABRIC.

## Using SSH to access your VMs

At this point you should be ready to access your FABRIC VM slivers using the bastion host(s) from Jupyter Hub as:

```
$ ssh -F ~/work/fabric_config/ssh_config -i <private *sliver* key file> ubuntu@11.22.33.44
```

or from your laptop:

```
$ ssh -F ~/.ssh/fabric_ssh_config -i <private *sliver* key file> ubuntu@11.22.33.44
```

where 11.22.33.44 is the IP address communicated to you by FABRIC control framework It can be an IPv4 or an IPv6 address - the bastion hosts will take care of necessary translations. Presumably you used the matching **public sliver key file** when creating the slice via FABRIC API.

Note that both in Jupyter Hub and in the Portal for each VM you will see a skeleton or the full SSH command you need to use to access that VM - you may need to substitute the path to your SSH configuration file and your sliver key, but the account name and IP address of the VM will be provided as part of that skeleton.
