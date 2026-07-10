---
title: Passing Xilinx U280 FPGA into a KVM VM
slug: passing-xilinx-u280-fpga-into-a-kvm-vm
date: "2023-10-06"
date_modified: "2025-09-11"
author: Ilya Baldin
status: publish
wp_id: 5826
views: 1263
---

This is an advisory article - if you are working with e.g. a donated FPGA and want to build a VM with a licensed toolchain **in your lab**, you need to be able to pass the FPGA into the VM. The article provides some pointers on how to do this specifically for a KVM VM. We do not cover other hypervisors.

If you encounter problems with this process, please consult AMD/Xilinx user forums.

## Overview

Note that U280 is a _multi-function_ PCI device and needs to be passed into the VM as a multi-function device (the number of functions presented to the host depends on the bitfile):

```
[root@host ~]# lspci | grep Xilinx 
25:00.0 Processing accelerators: Xilinx Corporation Device 500c
25:00.1 Processing accelerators: Xilinx Corporation Device 500d
```

Note that bus and device number are the same (`25:00`) while the function number differs. Unfortunately based on [this discussion](https://gitlab.com/libvirt/libvirt/-/issues/160), hot-plugging multi-function devices does not yet work in KVM. In other words if you do two `virsh atach-device` operations you end up with two separate devices in the VM, rather than one device with two functions. In order to pass the device as a multi-function PCI device the libvirt domain file defining the VM must be edited and the vm _rebooted_ for the changes to take place.

## Passing FPGA into VM

In order to pass the FPGA into the VM we need to edit the domain file of the VM to add appropriate stanzas for FPGA PCI function _and_ the JTAG-over-USB XHCI/USB3.0 device. The following code snippets can be inserted using e.g. `virsh edit <domain>` command:

```
<hostdev mode='subsystem' type='pci' managed='yes'>
      <source>
        <address domain='0x0' bus='0x25' slot='0x0' function='0x0'/>
      </source>
      <address type='pci' domain='0x0000' bus='0xFF' slot='0x00' function='0x0' multifunction='on'/>
    </hostdev>
    <hostdev mode='subsystem' type='pci' managed='yes'>
      <source>
        <address domain='0x0' bus='0x25' slot='0x0' function='0x1'/>
      </source>
      <address type='pci' domain='0x0000' bus='0xFF' slot='0x00' function='0x1'/>
    </hostdev>
    <hostdev mode='subsystem' type='usb' managed='yes'>
      <source>
        <vendor id='0x0403'/>
        <product id='0x6011'/>
      </source>
      <address type='usb' bus='2' port='2'/>
    </hostdev>
    <controller type='usb' index='2' model='nec-xhci'/>
```

Note that for each PCI function there is a separate entry matching the BDF (Bus Device Function) PCI address of what is found on the host. The destination BDF can be dependent on which chipset emulation is used in KVM (we strongly recommend the `q35` PCIe chipset emulation, which can also be set in the domain file).

-   For `q35` emulation you must leave `slot` number 0 and set the `bus` to the desired value
-   For older `i440fx` emulation you must leave `bus` 0 and change the slot to e.g. `0xFF`

Note that Xilinx recommends using the newer `q35` emulation when working with their devices.

The JTAG USB device will be passed in based on the vendor and product id (in this case set to Xilinx U280). Also note that the code above creates an XHCI controller in the VM to support the device.

After you make the modifications to the domain file the VM needs to be rebooted with e.g. `virsh reboot <domain>`.
