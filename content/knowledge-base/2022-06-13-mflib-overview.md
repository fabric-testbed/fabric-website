---
title: MFlib Overview
slug: mflib-overview
date: "2022-06-13"
date_modified: "2025-09-12"
author: James Griffioen
status: publish
wp_id: 2106
views: 1744
categories:
  - Measurement Framework API (MFlib)
---

The Measurement Framework library (MFlib) is used to automatically measure the performance of a user's experiment (slice) and includes metrics such as CPU loads, memory loads, disk loads, network packet counts, bandwidth, and much more. MFlib automatically "instrumentizes" and experimenter's slice by adding monitoring software and services to the slice. These services are designed to collect common numeric measurements (e.g., cpu loads, number of packets sent over an interface, etc.) as well as system logs and custom logs. The library consists of a set of python calls that can be invoked from a Jupyter notebook or from any python program.

The easiest way to get started using MFLib is to use the example Jupyter notebooks that are preinstalled in the FABRIC JupyterHub. You may also clone the [jupyter-examples repository](https://github.com/fabric-testbed/jupyter-examples) yourself. See the _start\_here.ipynb_ notebook in the root directory of _jupyter-examples_. Look for the "Monitoring MFlib" section.

For the latest, most up-to-date documentatioons see [https://fabrictestbed-mflib.readthedocs.io/en/latest/README.html](https://fabrictestbed-mflib.readthedocs.io/en/latest/README.html)[](http://ReadTheDocs)

MFLib uses [Prometheus](https://learn.fabric-testbed.net/knowledge-base/prometheus/) and [ELK](https://learn.fabric-testbed.net/knowledge-base/elk/) to gather metrics and logs.

MFLib uses Grafana and Kibana to visualize the gathered metrics and logs. See [Grafana](https://learn.fabric-testbed.net/knowledge-base/grafana/) and [Kibana](https://learn.fabric-testbed.net/knowledge-base/kibana/) knowledge pages for details on how to access and use the dashboards with your experiment.

MFLib consists of several classes. Click on the links for method documentation.

-   Core - Core makes up the base class that defines methods needed to interact with the nodes in a slice, most notably with the special Measurement Node. This class is used by higer-level classes so the average user will not need to use this class directly.
-   [MFLib](https://learn.fabric-testbed.net/knowledge-base/mflib-methods/) - MFLib is the main class that a user will use to instrumentize a slice and interact with the monitoring systems.
-   [MFVis](https://learn.fabric-testbed.net/knowledge-base/visualizing-measurement-graphs-in-fabric-jupyterhub/) - MFVis makes it easy to show and download Grafana graphs directly from python code. MFVis requires that the slice has been previously instumentized by MFLib

Source code is available at [https://github.com/fabric-testbed/mflib](https://github.com/fabric-testbed/mflib)
