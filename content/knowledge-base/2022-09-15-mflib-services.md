---
title: MFLib Services
slug: mflib-services
date: "2022-09-15"
date_modified: "2022-09-15"
author: Charles Carpenter
status: publish
wp_id: 2777
views: 1165
categories:
  - Measurement Framework API (MFlib)
---

MFLib uses the concept of "services" to facilitate interactions with the Measurement Framework running in an experiment. These services are installed on the Measurement Node that is added to an experiment when MFLib is initialized. The basic methods used to interact with the services are found in the MFLib Core. There are also higher level objects that may use the MFLib Core methods in the background. One example is MFVis lets you add graphs to a Jupyter notebook with very little code.

A service must be created before it can be used. `MFLib.create(<service_name>)` will setup the service so it can be used. Depending on the service this could be a quick setup that just needs to prepare a few files on the Measurement Node or it could be a complex setup that installs software on both the Measurement Node and all of the experiment nodes.

Most services will need to return information such as URLs or passwords. These can be retrieved using the `MFLib.info(<service_name>, <data>)` method. The needed data object will vary depending on the service. Often calling `MFLib.info(<service_name>)` without a data object will get some basic information or a help string. The info method should not alter the service in anyway.

If a service needs to be altered, `MFLib.update(<service_name>, <data>, <files>)`can be used to upload commands, data and files to the services.

There are a number of standard services pre-loaded on the Measurement Node. A subset of those will be installed when `MFLib.instrumentize()` is run.

## Included Services

**Prometheus** - Prometheus installs Prometheus and Grafana to the Measurement Node. Prometheus node exporters are installed on all of the nodes in the experiment. Node exporters gather a wide variety of metrics on the node and make them available to Prometheus. Grafana is used to analyze and visualize the metrics.

**ELK** - ELK installs the Elastic Search database along with Kibana for analyzing and visualizing the metrics and logs gathered by filebeats running on the experiment nodes.

**Grafana Manager** \- Grafana Manager adds extra tools for automating changes to Grafana such as uploading custom dashboards.

**Overview** - Overview provides an overview of the available services. This is a basic help service that can retrieve a list of services and their README files.
