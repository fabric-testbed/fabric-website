---
title: Working with Python 3.9 on Ubuntu 20.04
slug: working-with-python-3-9-on-ubuntu-20-04
date: "2022-01-10"
date_modified: "2022-01-10"
author: Mina William Morcos
status: pending
wp_id: 1216
views: 2
---

We have outlined in our main guide to install the FABRIC python API locally (here: [https://learn.fabric-testbed.net/knowledge-base/install-the-python-api/](https://learn.fabric-testbed.net/knowledge-base/install-the-python-api/)) that Python 3.9 or later is needed.

However, Ubuntu 20.04 is bundled with python 3.8. In this guide we will outline how to install and work with python 3.9 on Ubuntu 20.04.

After following this guide, you can continue following the main guide starting `pip3 install fabrictestbed`.

## Setup

We are going to use the deadsnakes repository.

```
sudo add-apt-repository ppa:deadsnakes/ppa
```

We can now install python 3.9 (along with other needed stuff not related to the deadsnakes repo).

```
sudo apt install python3.9 python3.9-dev python3.9-venv software-properties-common build-essential
```

Then, we can create and use our virtualenv using the following commands.

```
python3.9 -m venv venv1
source venv1/bin/activate
```

We're done. We can now install `fabrictestbed` through `pip3 install fabrictestbed`. You can continue following the other guide.
