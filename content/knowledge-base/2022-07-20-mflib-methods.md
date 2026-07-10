---
title: MFLib Methods
slug: mflib-methods
date: "2022-07-20"
date_modified: "2022-09-15"
author: Charles Carpenter
status: publish
wp_id: 2179
views: 1174
categories:
  - Measurement Framework API (MFlib)
---

MFLib is a python library that enables automatic monitoring of a FABRIC experiment using Prometheus, Grafana and ELK. It is included in the [fabrictestbed-extensions package](https://github.com/fabric-testbed/fabrictestbed-extensions) as mflib. The library is automatically installed in the [fabric-testbed Jupyter](https://jupyter.fabric-testbed.net) environment or it can be installed using `pip install fabrictestbed-extensions` . You can also install the latest code by cloning the [fabrictestbed-extensions source code](https://github.com/fabric-testbed/fabrictestbed-extensions) and following the install instructions.

## Init & Instrumentize

MFlib works on an existing slice to which MFLib must first add some software and services.

**mflib(slice\_name)** `mflib(slice_name, local_storage_directory="/tmp/mflib")` First you must create the MFLib object by passing the slice name to **mflib()** . You can optionally pass a string for where you would like the local working files for the slice to be stored. These files include keys, Ansible hosts file, progress and log files and any downloaded files. The default location is in the tmp directory. If you plan on revisiting the slice or the log files later, you should change the directory to a persistent directory of your choosing.

**mflib.instrumentize()** `mf.instrumentize()` MFLib needs to be "instrumentized" to start the monitoring collection. This process will add the systems needed to collect Prometheus metrics and Elastic logs along with Grafana and Kibana for visualizing the collect data.

## Service Methods

Measurement Framework has "services" which are installed on the measurement node. The mflib.instrumentize() method installs Prometheus, Grafana, ELK and an Overview service. Other services maybe added later.  
MFLib is built on top of mflib.core(). MFLib uses core methods to interact with services using several basic methods: **create, info, update, start, stop and remove**.  
Each of these methods require the service name. Most can also take an optional dictionary and an optional list of files to be uploaded. All will return a json object with at least a "success" and "msg" values.

**mflib.create** `mf.create(service, data=None, files=[])` is used to add a service to the slice. By default, Prometheus, ELK, Grafana and Overview services are added during instrumentation.

**mflib.info** `mf.info(service, data=None)` is used to get information about the service. This will be the most commonly used method. For example Prometheus adds Grafana to the experiment to easily access and visualize the data collected by Prometheus. In order to access Grafana you will need a password. The password can be retrieved using

```
data = {}
data["get"] = ["grafana_admin_password"]
info_results = mf.info("prometheus", data)
print(info_results["grafana_admin_password"])
```

Info calls should not alter the service in anyway.

**mflib.update** `mf.info(service, data=None, files=[])` is used to update the service configurations or make other changes to the service's behavior. For example you can add custom dashboards to Grafana using the grafana\_manager.

```
data = {"dashboard":"add"}
files = ["path_to_dashboard_config.json"]
mf.update("grafana_manager", data, files)
```

**mflib.stop** `mf.stop(service)` is used to stop a service from using resources. The service is not removed and can be restarted.

**mflib.start** `mf.start(service)` is used to restart a stopped service.

**mflib.remove** `mf.remove(service)` is used to remove a service. This will stop and remove any artifacts that were installed on the experiment's nodes.

**mflib.download\_common\_hosts** mflib.download\_common\_hosts() retrieves an ansible hosts.ini file for the slice. The hosts file will contain 2 groups: Experiment\_nodes and Measurement\_node

**mflib.download\_log\_file** mflib.download\_log\_file(service, method) retrieves the log files for runs of the given service's method: create, info, update...etc. This can be useful for debugging.
