---
title: "SSH Key Primer (creating, identifying, fingerprinting keypairs)"
date: "2023-05-31"
type: "event"
category: "webinar"
fabric_hosted: true
excerpt: "To generate a new keypair (regardless of whether it is 'bastion' or 'sliver') you can use a command-line tool called `ssh-keygen` found on most modern UNIX (Mac)/Linux systems."
author: "Ilya Baldin"
date_modified: "2023-08-03"
wp_id: 4411
views: 1260
tags:
  - events
---

To generate a new keypair (regardless of whether it is 'bastion' or 'sliver') you can use a command-line tool called `ssh-keygen` found on most modern UNIX (Mac)/Linux systems.

SSH keys can use different \*cyphers\* and key lengths. FABRIC accepts a subset of available cyphers and keylengths:

1.  RSA keys of length 3072 bits or longer
2.  ECDSA keys of length 256 bits or longer

To generate a new keypair you can use the command as follows (the first parameter indicates keypair cypher, the second key length in bits):

```
$ ssh-keygen -t rsa -b 3072
Generating public/private rsa key pair.
Enter file in which to save the key (/home/username/.ssh/id_rsa): /home/username/.ssh/fabric_bastion
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/username/.ssh/fabric_bastion.
Your public key has been saved in /home/username/.ssh/fabric_bastion.pub.
The key fingerprint is:
SHA256:1xK3ceE7KJUa8Rdt6/tw+AF1WHacNcUXnGo9iH7c6lQ user@host
The key's randomart image is:
+---[RSA 3072]----+
|          .   +*%|
|           o o XO|
|          o B Oo+|
|           O X.=.|
|        S * *.=E.|
|         . + oo= |
|            ..+.o|
|            .. =.|
|            ..  +|
+----[SHA256]-----+
```

To create an ECDSA keypair, use `ssh-keygen -t ecdsa -b 256` instead.

By default the keys in a keypair are saved under `~/.ssh/` directory as id\_<cypher> for private key and id\_<cypher>.pub for public key (for instance `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`). In the procedure above the keys are saved as `~/.ssh/fabric_bastion` and `~/.ssh/fabric_bastion.pub`. They do not have to be, however - you can point to any directory and filename to save them in an alternate location.

When working in the Jupyter Hub we recommend saving keys into `~/work/fabric_config/` directory so they persist across sessions. The traditional ~/.ssh/ location is ephemeral - it gets recreated every time you create a new notebook and any keys saved there are lost.

By convention the filename specified in response to `Enter file in which to save the key` is used to store the private key and the public key has the `.pub` extension in the same directory.

Note that key files must have specific permissions set to be usable by the SSH client. Your private key must have permissions set to 0600 or `-rw-------` (read-writable by you and not readable or writable by anyone else). Your public key has to be visible to everyone with permission 0644 or `-rw-r--r--` (read-writable by you, readable by anyone).

When generating multiple keypairs (bastion and sliver) be sure they are named differently and don't overwrite one another. It is also advisable NOT to use the default `~/.ssh/id_rsa[.pub]` keys that you may have already generated for yourself for other projects.

If you look at the generated files the private key will look something like this (this may vary with OpenSSH client version you are using):

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAaAAAABNlY2RzYS
1zaGEyLW5pc3RwMjU2AAAACG5pc3RwMjU2AAAAQQQKFkHrkVfosif4leHbHuy1ENW1On83
C4KXpbRBuSucJOkWX07zqIwXnDrYPse5qSHjZYwdIGSBJzwJLF36AqziAAAAyHFe8gtxXv
ILAAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBAoWQeuRV+iyJ/iV
...
```

And public key:

```
ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAy......7mpIeNljB0gZIEnPAksXfoCrOI= user@hostname
```

The keys above are truncated with `...`.

When looking at the public key you can see it consists of 3 elements - key cypher (ecdsa-sha2-nistp256), key value (AAAAE2VjZHNhLXNoYTItbmlzdHAy......) and comment (user@hostname). You should never modify the first two, however the comment can be edited - it simply helps you identify this particular public key and its purpose.

Whenever SSH documents talk about **identity** they mean the private key file. As described in the overview, when using FABRIC you are using two of these identities - the bastion and the sliver private keys. You need to indicate to your SSH client which identity to use for which host and this can be tricky, the next section describes how to make it simpler.

One additional useful thing to know is how to get the **fingerprint** of a key. A fingerprint is a short hash that has a low probability of collision (with any other key) that helps to uniquely identify a key. This is useful sometimes when multiple keys are in play and you want to quickly eyeball if they are different or if they are the same.

To generate a fingerprint of a key you can use the `ssh-keygen` command as follows:

```
$ ssh-keygen -E md5 -lf ~/work/.ssh/id_ecdsa.pub
256 MD5:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:dd:00 keycomment (ECDSA)
```

FABRIC uses md5 hash type in the portal, when displaying your public keys, you can also use `-E sha256` to indicate that you prefer SHA256 hash type. When in doubt which key you are using, you can take its MD5 fingerprint and compare to the one in FABRIC portal to make sure the two fingerprints match.

Note that you can take the fingerprint of either public or private key - the result will be the same as SSH will try to find the matching public key. Also note that changing the comment field of the public key does not affect the fingerprint result.
