---
title: "SSH Troubleshooting"
date: "2023-05-31"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "The most common issues you are likely to encounter are:"
author: "Ilya Baldin"
date_modified: "2023-06-07"
wp_id: 4408
views: 1484
tags:
  - events
---

## Troubleshooting

The most common issues you are likely to encounter are:

-   Expired bastion keys: visit the Portal 'User Profile'/'My SSH Keys' page, click on 'Bastion' and make sure you have a valid bastion key. If you are not sure which key is which, you can always [take a fingerprint](https://learn.fabric-testbed.net/knowledge-base/ssh-key-primer-creating-identifying-fingerprinting-keypairs/) of the key you have and compare it to the fingerprint of the key in the portal.
-   Invalid permissions on private keys: OpenSSH requires that private key files are accessible (read/write) only by their owner. If the permissions are set incorrectly you may see an error like this:

```
Permissions 0644 for '/home/ubuntu/work/fabric_config/sliver_key' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "/home/ubuntu/work/fabric_config/sliver_key": bad permissions
ubuntu@11.22.33.44: Permission denied (publickey).
```

-   This is particularly common in Jupyter Hub, where files under ~/work/ directory can change permissions when a container is restarted. Run `chmod go-rwx ~/work/fabric_config/<private key file>` to reset the permissions.

Note that this does not create a security problem, as each container has a separate storage volume (~/work/) that is not readable by anyone but the owner of the container.

-   Using wrong bastion or sliver keys: be sure you are using the correct keys (bastion and sliver) particularly if you are switching between your laptop and Jupyter Hub.

## Testing your bastion host connection

**To test your bastion host login** try the following (substitute the username and the private bastion (!) key path to `fabric_bastion`):

```
$ ssh -i ~/.ssh/fabric_bastion -C2T -D 14000 -M -N username_0123456789@bastion.fabric-testbed.net
```

This command should succeed silently (you can `Ctrl-C` it). If it does not, try to remedy the reported problem (typical problems include a wrong path to the private key file, wrong permissions on the private key file). Failing that report the problem to FABRIC Forums.

If the test above succeeds you can try a further test that will test the proxy tunnel to your host (substitute the username and the private key path):

```
$ ssh -i ~/.ssh/fabric_bastion -S /tmp/.sshtest -C2T -D 14000 -M -fN username_0123456789@bastion.fabric-testbed.net
$ nc -z localhost 14000 || echo ‘no tunnel’
Connection to localhost port 14000 [tcp/*] succeeded!
$ ssh -S /tmp/.sshtest -O exit username_0123456789@bastion.fabric-testbed.net
Exit request sent.
```

## Repeated Login Failures/Automatic IP Bans

If you repeatedly attempt to login to the bastion hosts with wrong keys from your laptop or desktop, they will automatically ban your IP address for 24 hours, after which you will also automatically be un-banned. Repeated continued failures will result in longer bans and eventually the IP being put on a permanent ban list.
