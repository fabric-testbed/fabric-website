---
title: Parsed HTML sample
slug: parsed-html-sample
date: "2022-02-04"
date_modified: "2022-02-04"
author: Mason Hicks
status: draft
wp_id: 1310
views: 5
---

# fablib[¶](#fablib "Permalink to this headline")

fabrictestbed\_extensions/fablib stuff.

## `abc_fablib`[¶](#abc-fablib "Permalink to this headline")

_class_ abc\_fablib.AbcFabLIB[¶](#abc_fablib.AbcFabLIB "Permalink to this definition")

Library class. This class is a wrapper for environment variable references.

\_\_init\_\_()[¶](#abc_fablib.AbcFabLIB.__init__ "Permalink to this definition")

Constructor. Sets up FABRIC environment variables for clean references.

## `component`[¶](#component "Permalink to this headline")

_class_ component.Component(_node\=None_, _fim\_component\=None_)[¶](#component.Component "Permalink to this definition")

Class representing hardware components.

\_\_init\_\_(_node\=None_, _fim\_component\=None_)[¶](#component.Component.__init__ "Permalink to this definition")

Constructor. Sets up class state based on input values (default None).

Parameters

-   **node** ([_Component_](#component.Component "component.Component")) – A Node instance to pass to this Component.
    
-   **node** – A FIM Compnent instance to pass to this Component.
    

_static_ calculate\_name(_node\=None_, _name\=None_)[¶](#component.Component.calculate_name "Permalink to this definition")

Static hack that makes it possible to find interfaces. Takes the node’s full name and subtracts out the inputted name.

Parameters

-   **node** (_Node_) – Node to calculate the name of.
    
-   **name** (_str_) – Name to subtract from Node’s name.
    

Returns

the calculated name.

Return type

str

_static_ new\_component(_node\=None_, _model\=None_, _name\=None_)[¶](#component.Component.new_component "Permalink to this definition")

Static method that adds a component of a particular model to an inputted node.

Parameters

-   **node** (_Node_) – Node to calculate name of.
    
-   **model** (_str_) – Model key of component model desired.
    
-   **name** (_str_) – Name of the component.
    

Returns

the new Component.

Return type

[Component](#component.Component "component.Component")

get\_interfaces()[¶](#component.Component.get_interfaces "Permalink to this definition")

Gets the interfaces attached to the Component instance called on.

Returns

a list of interfaces on the Component instance.

Return type

list<interface>

get\_fim\_component()[¶](#component.Component.get_fim_component "Permalink to this definition")

Getter method for fim\_component.

Returns

the fim\_component field.

Return type

[Component](#component.Component "component.Component")

get\_slice()[¶](#component.Component.get_slice "Permalink to this definition")

Getter method for get\_slice.

Returns

the get\_slice field.

Return type

Slice

get\_node()[¶](#component.Component.get_node "Permalink to this definition")

Getter method for node.

Returns

the node field.

Return type

Node

get\_site()[¶](#component.Component.get_site "Permalink to this definition")

Wrapped getter method for node.get\_site().

Returns

the site of node

Return type

Site

get\_name()[¶](#component.Component.get_name "Permalink to this definition")

Wrapped getter method for the name of the FIM component.

Returns

the name of the FIM component.

Return type

str

get\_details()[¶](#component.Component.get_details "Permalink to this definition")

Wrapped getter method for the details of the FIM component.

Returns

the details of the FIM component.

Return type

str

get\_disk()[¶](#component.Component.get_disk "Permalink to this definition")

Wrapped getter method for the disk space of the FIM component.

Returns

the amount of disk space on the FIM component.

Return type

int

get\_unit()[¶](#component.Component.get_unit "Permalink to this definition")

Wrapped getter method for the unit of the FIM component.

Returns

the unit on the FIM component.

Return type

str

get\_pci\_addr()[¶](#component.Component.get_pci_addr "Permalink to this definition")

Wrapped getter method for the PCI Address of the FIM component.

Returns

the PCI Address on the FIM component.

Return type

str

get\_model()[¶](#component.Component.get_model "Permalink to this definition")

Get the model of the component.

Returns

the model of the component.

Return type

Model

get\_fim\_model()[¶](#component.Component.get_fim_model "Permalink to this definition")

Get the model of the FIM component.

Returns

the model of the FIM component.

Return type

Model

get\_type()[¶](#component.Component.get_type "Permalink to this definition")

Get the type of the component.

Returns

the type of the component.

Return type

Model

configure\_nvme(_mount\_point\='/mnt/nvme\_mount'_, _verbose\=False_)[¶](#component.Component.configure_nvme "Permalink to this definition")

Configure the NVME of this component.

Parameters

-   **mount\_point** (_str_) – The system location of this component’s mount point.
    
-   **verbose** (_boolean_) – An indicator for whether or not to provide verbose output.
    

_class_ component.Disk(_component_)[¶](#component.Disk "Permalink to this definition")

\_\_init\_\_(_component_)[¶](#component.Disk.__init__ "Permalink to this definition")

Constructor

_class_ component.NIC(_component_)[¶](#component.NIC "Permalink to this definition")

\_\_init\_\_(_component_)[¶](#component.NIC.__init__ "Permalink to this definition")

Constructor

_class_ component.GPU(_component_)[¶](#component.GPU "Permalink to this definition")

\_\_init\_\_(_component_)[¶](#component.GPU.__init__ "Permalink to this definition")

Constructor

## `fablib`[¶](#id1 "Permalink to this headline")

_class_ fablib.fablib[¶](#fablib.fablib "Permalink to this definition")

\_\_init\_\_()[¶](#fablib.fablib.__init__ "Permalink to this definition")

Constructor. Calls build\_slice\_manager.

build\_slice\_manager()[¶](#fablib.fablib.build_slice_manager "Permalink to this definition")

Creates, initializes, and returns a SliceManager object.

Returns

an initialized SliceManager.

Return type

SliceManager

_static_ init\_fablib()[¶](#fablib.fablib.init_fablib "Permalink to this definition")

Initializes a fablib object.

_static_ get\_default\_slice\_key()[¶](#fablib.fablib.get_default_slice_key "Permalink to this definition")

Gets the default slice key from the fablib object.

Returns

the default slice key.

Return type

str

_static_ get\_config()[¶](#fablib.fablib.get_config "Permalink to this definition")

Gets all of the configuration values of the fablib object.

Returns

a dictionary containing all fablib objects.

Return type

dict\[str->fablib\_object\]

_static_ get\_default\_slice\_public\_key()[¶](#fablib.fablib.get_default_slice_public_key "Permalink to this definition")

Gets the default slice public key.

Returns

the default slice public key.

Return type

str

_static_ get\_default\_slice\_public\_key\_file()[¶](#fablib.fablib.get_default_slice_public_key_file "Permalink to this definition")

Gets the file of the slice public key.

Returns

the file of the default slice public key.

Return type

File

_static_ get\_default\_slice\_private\_key\_file()[¶](#fablib.fablib.get_default_slice_private_key_file "Permalink to this definition")

Gets the file of the slice private key.

Returns

the file of the default slice private key.

Return type

File

_static_ get\_default\_slice\_private\_key\_passphrase()[¶](#fablib.fablib.get_default_slice_private_key_passphrase "Permalink to this definition")

Gets the passphrase of the default slice private key.

Returns

the passphrase of the default slice private key.

Return type

str

_static_ get\_credmgr\_host()[¶](#fablib.fablib.get_credmgr_host "Permalink to this definition")

Gets the CredmgrHost object.

Returns

the CredmgrHost object.

Return type

CredmgrHost

_static_ get\_orchestrator\_host()[¶](#fablib.fablib.get_orchestrator_host "Permalink to this definition")

Gets the OrchestratorHost object.

Returns

the OrchestratorHost object.

Return type

OrchestratorHost

_static_ get\_fabric\_token()[¶](#fablib.fablib.get_fabric_token "Permalink to this definition")

Gets the FABRIC token.

Returns

the FABRIC token.

Return type

str

_static_ get\_bastion\_username()[¶](#fablib.fablib.get_bastion_username "Permalink to this definition")

Gets the Bastion username.

Returns

the Bastion username.

Return type

str

_static_ get\_bastion\_key\_filename()[¶](#fablib.fablib.get_bastion_key_filename "Permalink to this definition")

Gets the Bastion key filename.

Returns

the Bastion key filename.

Return type

str

_static_ get\_bastion\_public\_addr()[¶](#fablib.fablib.get_bastion_public_addr "Permalink to this definition")

Gets the Bastion public address.

Returns

the Bastion public address.

Return type

str

_static_ get\_bastion\_private\_ipv4\_addr()[¶](#fablib.fablib.get_bastion_private_ipv4_addr "Permalink to this definition")

Gets the Bastion private IPV4 address.

Returns

the Bastion private IPV4 address.

Return type

str

_static_ get\_bastion\_private\_ipv6\_addr()[¶](#fablib.fablib.get_bastion_private_ipv6_addr "Permalink to this definition")

Gets the Bastion private IPV6 address.

Returns

the Bastion private IPV6 address.

Return type

str

_static_ set\_slice\_manager(_slice\_manager_)[¶](#fablib.fablib.set_slice_manager "Permalink to this definition")

Setter for the FABLIB SliceManager.

Parameters

**slice\_manager** (_SliceManager_) – the (new) SliceManager object.

_static_ get\_slice\_manager()[¶](#fablib.fablib.get_slice_manager "Permalink to this definition")

Getter for the FABLIB SliceManager.

Returns

the SliceManager object.

Return type

SliceManager

_static_ create\_slice\_manager()[¶](#fablib.fablib.create_slice_manager "Permalink to this definition")

Creates a SliceManager object.

Returns

a new SliceManager object.

Return type

SliceManager

_static_ new\_slice(_name_)[¶](#fablib.fablib.new_slice "Permalink to this definition")

Creates a new Slice.

Parameters

**name** (_str_) – The name of the new Slice.

Returns

the new Slice.

Return type

Slice

_static_ get\_site\_advertisment(_site_)[¶](#fablib.fablib.get_site_advertisment "Permalink to this definition")

Gets an advertised site.

Parameters

**site** (_str_) – The site key to search for.

Returns

the site

Return type

Site

_static_ get\_available\_resources()[¶](#fablib.fablib.get_available_resources "Permalink to this definition")

Gets the available on the instance SliceManager.

Returns

the SliceManager’s topology.

Return type

Topology

_static_ get\_slices(_excludes\=\[Dead, Closing\]_, _verbose\=False_)[¶](#fablib.fablib.get_slices "Permalink to this definition")

Gets the slices on the instance SliceManager.

Parameters

-   **excludes** (_list__\[__SliceState__\]_) – A list of SliceState to exclude from the built list.
    
-   **verbose** (_boolean_) – An indicator on whether to give verbose output.
    

Returns

a list of Slice objects.

Return type

list\[Slice\]

_static_ get\_slice(_name\=None_, _slice\_id\=None_, _verbose\=False_)[¶](#fablib.fablib.get_slice "Permalink to this definition")

Gets a particular slice.

Parameters

-   **name** (_str_) – The name of the Slice.
    
-   **slice\_id** (_str_) – The ID of the Slice.
    
-   **verbose** (_boolean_) – An indicator on whether to give verbose output.
    

Returns

the Slice object.

Return type

Slice

_static_ delete\_slice(_slice\_name\=None_)[¶](#fablib.fablib.delete_slice "Permalink to this definition")

Deletes a slice with the given name.

Parameters

**slice\_name** (_str_) – The name of the Slice to delete.

_static_ delete\_all()[¶](#fablib.fablib.delete_all "Permalink to this definition")

Deletes all of the slices on the instance SliceManager.
