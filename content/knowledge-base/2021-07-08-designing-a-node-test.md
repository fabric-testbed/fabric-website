---
title: Designing a Node - TEST
slug: designing-a-node-test
date: "2021-07-08"
date_modified: "2021-07-12"
author: Nanna Katrin Hannesdottir
status: pending
wp_id: 97
views: 51
---

A notebook on how to create a node.

## Create Experiment

Begin by creating an instance of an experiment object:

```python
from fabrictestbed.slice_editor import 
   (ExperimentTopology, 
   Capacities, 
   ComponentType,
   LinkType, 
   Layer)

#Create Experiment Topology
experiment = ExperimentTopology()
slice_name = "DemoSlice"
```
Note!Choose a good slice name!

## Create Node

Create node1 at the RENCI site ([https://renci.org/](https://renci.org/)).

```python
#add node
node1 = experiment.add_node(name='node1', site='RENC')
```

## Configure Capacities

Decide on capacities for your node. First create the `Capacities()` object.

```python
from fabrictestbed.slice_editor import  
Capacities

node1_capacity = Capacities()
```

Then set the fields of your capacities object to desired values for Core, RAM and Disk

```python
node1_capacity.set_fields(core = 2, ram = 16, disk = 100)
```

**Click to explore alternative capacities values:**

-   Alternative Capacities 1
-   Alternative Capacities 2
-   Alternative Capacities 3

`node1_capacity.set_fields(core = 2, ram = 17, disk = 120)`

`node1_capacity.set_fields (core=4, ram=17, disk=110)`

`node1_capacity.set_fields(core=1, ram=20, disk=150)`

Finally, set the properties of your your node object with the capacities, image\_type and image\_ref

```python
node1.set_properties(capacities=node1_capacity, image_type='qcow2', image_ref='default_ubuntu_20')
```

## Add components

#### Our components

Add on various components to your node.

```python
node1_nvme = node1.add_component(
   ctype= ComponentType.NVME, 
   model='P4510', 
   name='n1_nvme')

node1_gpu = node1.add_component(
ctype = ComponentType.GPU,
model= 'RTX6000', 
name = 'n1_gpu')

node1_nic=node1.add_component(ctype = ComponentType.SharedNIC, model ='ConnectX-6', name='n1_nic')
```
Note!The strings in the `model` argument much be correct according to our components catalogue.

NVMEs

Non Volatile Memory

GPUs

Graphic processing Units

NICs

Network Interface controls

**Note**  
Take care
