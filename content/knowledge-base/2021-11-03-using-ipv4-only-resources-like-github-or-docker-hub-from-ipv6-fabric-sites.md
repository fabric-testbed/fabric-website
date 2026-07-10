---
title: Reaching IPv4-only resources like GitHub or Docker Hub from IPv6 FABRIC sites
slug: using-ipv4-only-resources-like-github-or-docker-hub-from-ipv6-fabric-sites
date: "2021-11-03"
date_modified: "2026-01-12"
author: Ilya Baldin
status: publish
wp_id: 925
views: 2426
---

## Overview

It is 2022 2023 and yet some major Internet services to this day do not have a presence in IPv6. Given that the majority of FABRIC sites are only reachable only via an IPv6 [management address](https://learn.fabric-testbed.net/knowledge-base/network-interfaces-in-fabric-vms/), a question arises how to communicate with those major services from those sites.

[FABRIC Bastion hosts](https://learn.fabric-testbed.net/knowledge-base/logging-into-fabric-vms/) address the problem of experimenters SSH-ing into their VMs from either IPv4 or IPv6 networks, however what about if you need to install software in your VM available only from an IPv4 site and your VM has an IPv6 management address? Notably GitHub is one of those major sites that has no IPv6 presence, so how does one install software from GitHub?

Multiple answers exist:

-   Nat64 servers: uses external servers that translate traffic between IPv4 and IPv6 networks with the help of a special DNS setup.
-   SSH proxying: SSH software installed on end-user hosts and on FABRIC resources is enough to make this work.

From here on out we make an assumption that you already know how to [login to your VM via a bastion host](https://learn.fabric-testbed.net/knowledge-base/logging-into-fabric-vms/).

## Reaching IPv4 resources via Nat64

Note that as of August 2023 this section no longer applies - IPv4-from-IPv6 connectivity is now handled **completely transparently** to the experimenters.  
  
FABRIC deployed **its own Nat64 gateway** solution and modified its DNS setup such that each new VM comes up with its DNS properly configured to resolve via the Nat64 as needed. There is no longer a need to manually modify `/etc/resolve.conf` on IPv6 sites.  
  
The section below is preserved for posterity. Relevant Jupyter notebooks will be deprecated going forward.

By far the easiest although not always performant way to do this is to update your DNS configuration in the VM to use Nat64. There is a small number of publicly available servers that bridge the IPv4-IPv6 divide using a protocol called [Nat64](https://nat64.net/). Because the bandwidth through them can be limited, you may notice some downloads are slower than expected. Using these servers requires a modification of the Name Resolution system in each VM. Here is a simple script that can do this:

```
sudo sed -i '/nameserver/d' /etc/resolv.conf
sudo sh -c 'echo nameserver 2a00:1098:2c::1 >> /etc/resolv.conf' 
sudo sh -c 'echo nameserver 2a01:4f8:c2c:123f::1 >> /etc/resolv.conf' 
sudo sh -c 'echo nameserver 2a00:1098:2b::1 >> /etc/resolv.conf'
```

You can also use this [Jupyter Notebook](https://github.com/fabric-testbed/jupyter-examples/blob/master/fabric_examples/fablib_api/accessing_ipv4_services_from_ipv6_nodes/accessing_ipv4_services_from_ipv6_nodes.ipynb) to achieve this result.

## SSH Proxying

### Using cURL with SSH proxy

1.  Start a proxy on the `laptop`:

In this scenario a user has a `laptop`, there is a FABRIC bastion host `bastion` and a remote sliver VM which needs access to GitHub we will call `vm`. We will show how to set up an SSH proxy so you can reach IPv4 resources via cURL, git and docker tools.

```
laptop$ ssh -N -D localhost:5678 localhost
```

2\. Start the reverse tunnel from `vm`:

```
laptop$ ssh -J bastion.fabric-testbed.net -R localhost:4567:localhost:5678 <vm IPv6 address>
```

3\. Verify the proxy is listening:

```
vm$ netstat -ntl | grep 4567
tcp        0      0 127.0.0.1:4567          0.0.0.0:*               LISTEN
tcp6       0      0 ::1:4567
```

4\. Use cURL with `socks5h` proxy type (to ensure DNS resolution is done proxy-side). Note using -x instead of --proxy option - seems to work more reliably:

```
vm$ curl -x socks5h://localhost:4567 https://google.com
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.google.com/">here</A>.
</BODY></HTML>
```

### Using GitHub via SSH proxy

Verify steps 1-4 above work. To enable git to use the proxy:

```
vm$ git config --global http.proxy 'socks5h://localhost:4567'
```

Now you can clone from github:

```
vm$ git clone https://github.com/fabric-testbed/InformationModel.git
```

### Using Docker Hub via proxy

As of 2022 Docker Hub has rolled out [beta IPv6 program](https://www.docker.com/blog/beta-ipv6-support-on-docker-hub-registry/).

Verify steps 1-4 above work. For Docker hub edit ~/.docker/config.json:

```
{
        "proxies":
        {
            "default":
            {
                "httpProxy": "socks5h://127.0.0.1:4567",
                "httpsProxy": "socks5h://127.0.0.1:4567",
                "noProxy": ""
            }
        }
    }
```
