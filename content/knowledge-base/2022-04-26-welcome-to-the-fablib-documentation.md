---
title: Welcome to the FABlib Documentation
slug: welcome-to-the-fablib-documentation
date: "2022-04-26"
date_modified: "2022-04-26"
author: Paul Ruth
status: draft
wp_id: 1684
views: 20
---

## Introduction

FABlib is a Python library used to manage experiments on the FABRIC testbed. The FABRIC testbed is networking testbed that exposes a cloud-like API used to deploy networking experiments composed of compute, storage, and advanced networking hardware from 30+ sites across the U.S. and worldwide.

Experiments on FABRIC are deployed in _slices_ composed of cloud-like resources including the following specialized hardware types:

-   Virtual Machines
-   Smart NICs (ConnectX-6, ConnectX-5)
-   GPUs
-   NVMe drives
-   P4 Tofino switches (coming soon)

Beyond standard cloud resources, FABRIC provides access to dedicated high-bandwidth wide-area layer 2 network circuits. Experiments can include circuits connecting ports on the networking hardware deployed across the testbed.

## Installation

More advanced installation including Jupyter is described [here](https://learn.fabric-testbed.net/knowledge-base/install-the-python-api/).

Basic installation using pip:

```bash
pip install fabrictestbed-extensions
```

## JupyterHub

TODO

## Basic Setup

([Docs](https://learn.fabric-testbed.net/docs/fablib/fablib.html#fablib.fablib.list_sites), [Jupyter Notebook](https://github.com/fabric-testbed/jupyter-examples/blob/master/fabric_examples/fablib_api/get_available_resources.ipynb))  
  
Configure the environment

```python
import os

# If you are using the FABRIC JupyterHub, the following three evnrionment vars
# were automatically provided when you logged in.
#os.environ['FABRIC_CREDMGR_HOST']='cm.fabric-testbed.net'
#os.environ['FABRIC_ORCHESTRATOR_HOST']='orchestrator.fabric-testbed.net'a
#os.environ['FABRIC_TOKEN_LOCATION']=os.environ['HOME']+'/work/fabric_token.json'

# Bastion IPs
os.environ['FABRIC_BASTION_HOST'] = 'bastion-1.fabric-testbed.net'

# Set your Bastion username and private key
os.environ['FABRIC_BASTION_USERNAME']=<bastion_username>
os.environ['FABRIC_BASTION_KEY_LOCATION']=os.environ['HOME']+'/work/fabric_bastion_key'

# Set the keypair FABRIC will install in your slice. 
os.environ['FABRIC_SLICE_PRIVATE_KEY_FILE']=os.environ['HOME']+'/.ssh/id_rsa'
os.environ['FABRIC_SLICE_PUBLIC_KEY_FILE']=os.environ['HOME']+'/.ssh/id_rsa.pub'

# If your slice private key uses a passphrase, set the passphrase
#from getpass import getpass
#print('Please input private key passphrase. Press enter for no passphrase.')
#os.environ['FABRIC_SLICE_PRIVATE_KEY_PASSPHRASE']=getpass()
```

Import FABlib

```python
from fabrictestbed_extensions.fablib.fablib import fablib
```

## Using the API

TODO: add basic usage overview

### Sites and Resources

The available FABRIC resources can be found using the `fablib.Resources` class.  
  
Several common use cases can be seen below.

##### List All Sites

([Docs](https://learn.fabric-testbed.net/docs/fablib/fablib.html#fablib.fablib.list_sites), [Jupyter Notebook](https://github.com/fabric-testbed/jupyter-examples/blob/master/fabric_examples/fablib_api/get_available_resources.ipynb))  
  
The `list_sites` method returns a human readable formatted string that describes the available all sites and resources. Tip: Do not parse the output of this method in order to obtain individual counts. There are specific methods for getting all information in this output string.  
  
Example:

```python
try:
    print(f"{fablib.list_sites()}")
except Exception as e:
    print(f"Exception: {e}")
```

##### Show Site Resources

([Docs](https://learn.fabric-testbed.net/docs/fablib/fablib.html#fablib.fablib.list_sites), [Jupyter Notebook](https://github.com/fabric-testbed/jupyter-examples/blob/master/fabric_examples/fablib_api/get_available_resources.ipynb))  
  
The `show_site` method returns a human readable formatted string that describes the available resources for a specific site specified by site name. Tip: Do not parse the output of this method in order to obtain individual counts. There are specific methods for getting all information in this output string.  
  
Example:

```python
try:
    print(f"{fablib.show_site('STAR')}")
except Exception as e:
    print(f"Exception: {e}")
```

## Slices

dddd

### Create Slices

### Delete Slices

### Get Slices

### Slice Properties

### Extend Slice Reservation

## Nodes

### Images

### Capacities

### Site

### Getting Nodes

### Node Properties

### Accessing Nodes (SSH)

### File Transfers

## Components

### Add Components

### Component Properties

### Component Types
