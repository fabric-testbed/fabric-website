---
title: Export Elasticsearch Data to Google Bigquery
slug: export-elasticsearch-data-to-google-bigquery
date: "2023-08-18"
date_modified: "2023-08-18"
author: Pinyi Shi
status: pending
wp_id: 4959
views: 1
categories:
  - Measurement Framework API (MFlib)
---

## Overview

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/08/image-2-1024x517.png)

By using the service, users can (1)dump any measurement data from **Elasticsearch** in their Fabric slices to **Google Bigquery** and (2)Issue SQL style commands in Jupyterhub to query Bigquery and get the data.

## Prerequisite

Everything comes in a Docker image. To use the service, experimenters should have a VM with both **Docker** and **Elasticsearch** installed. If users have instrumentized their Fabric slices, the measurement node with Elasticsearch and Docker preinstalled by the Measurement Framework already satisfies this requirement (We use the measurement node as an example in this article but the service itself works with any Elasticsearch cluster).

Besides the above requirement, users should also set up their **Google Bigquery account**, including the project and dataset. Finally, a **Google service account** that manages the Bigquery project should be created and we will use the **service account key** file in the experiment to dump and query data from Bigquery. Users can find detailed information in the section below.

## Setting Up Google Bigquery Account

-   Create a project: [https://cloud.google.com/resource-manager/docs/creating-managing-projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
-   Enable the Bigquery API: [https://cloud.google.com/bigquery/docs/enable-transfer-service#enable-api](https://cloud.google.com/bigquery/docs/enable-transfer-service#enable-api)
-   Create and download the service account key: [https://cloud.google.com/iam/docs/keys-create-delete](https://cloud.google.com/iam/docs/keys-create-delete)
-   Create dataset under the project: [https://cloud.google.com/bigquery/docs/datasets#console](https://cloud.google.com/bigquery/docs/datasets#console)

After setting up the account, users should download the **Google Service Account Key** which will be used later in Jupyterhub.

## Using the Service

On the measurement node, run the following command to pull the Docker image:

```
sudo docker pull fabrictestbed/mf-elk-bigquery:0.1.0
```

Then run the Docker container using the image:

```
sudo docker run -dit \
-v /PATH_TO_GOOGLE_SERVICE_ACCOUNT_KEY:/root/key.json \
--network=host \
--privileged \
--name elk-bigquery \
fabrictestbed/mf-elk-bigquery:0.1.0
```

You can create an empty key file on the measurement node and paste the content of your downloaded **Google Service Account Key**, or you can upload the key file to Jupyterhub and then upload it to the measurement node.

To dump the data to Bigquery, you can run the following command by changing the arguments:

```
sudo docker exec -i elk-bigquery \
python3 elk-bigquery.py \
--query '{"query":{"range":{"@timestamp":{"gte":"now-1h"}}}}' \
--index metricbeat-7.13.2-2023.07.10-000001 \
--key key.json \
--table elk-bigquery.metricbeat.test
```

The '--query' argument can be any Elasticsearch query you want. You need to specify which Elasticsearch to query in the '--index' argument, and which Bigquery table you want to dump the data to in the '--table' argument ({project}.{dataset}.{table\_name}).

## Schema Generation

The service automatically generates schema based on the Elasticsearch query response. The query response is a nested dictionary (unknown layers of keys) and the names are combined using the '.' as you will see on the Elasticsearch web UI.

![](https://learn.fabric-testbed.net/wp-content/uploads/2023/08/image-3.png)

While in the json response:

```
{'agent':{'emphemeral_id': '03ad8d12-869d-4007-bc9f-5d857a020b03', 'hostname': 'Node1', 'id': '117dc100-9468-4397-b00e-689242cacce8', 'name': 'Node1', 'type': 'filebeat', 'version': '7.13.2'}}
```

**However, Bigquery has requirements on the schema definition:** [https://cloud.google.com/bigquery/docs/schemas](https://cloud.google.com/bigquery/docs/schemas) so the service converts the keys in the json data from the Elasticsearch query response and defines the Bigquery schema. The rules can be described as follows:

-   **Characters not allowed** **are removed**: @timestamp -> timestamp
-   **Key names in the nested dictionary are combined using '\_'**: in the above example column names appear as 'agent\_emphemeral\_id', 'agent\_hostname', 'agent\_id', 'agent\_name', 'agent\_type', 'agent\_version'. If there are more layers in the nested dictionary, more '\_' are added following the same rule.
-   **Data type conversion**: str-> STRING, int/float->FLOAT64, dict->JSON, bool->BOOL, list->REPEATED STRING/FLOAT64/JSON
