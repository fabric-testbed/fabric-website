---
title: Advanced Jupyter Hub
slug: advanced-jupyter-hub
date: "2023-05-31"
date_modified: "2024-10-15"
author: Ilya Baldin
status: publish
wp_id: 4418
views: 1966
categories:
  - Jupyter Hub
---

### Setting Up a Local JupyterHub Environment with FABRIC Containers

If you'd prefer to run JupyterHub locally instead of using FABRIC's JupyterHub environment, this can be beneficial for experiments exceeding 24 hours or when handling large datasets. This guide will walk you through running and managing local Jupyter Notebook containers using Docker for different FABRIC releases.

#### Why Run JupyterHub Locally?

-   **Extended Experiment Time**: Run experiments without the 24-hour session limit.
-   **Large Data Handling**: Download and work with large datasets locally.

#### Running FABRIC Containers Locally

You can download the release-specific `docker-compose.yml` file from the [FABRIC repository](https://github.com/fabric-testbed/fabric-docker-images/tree/master/user_local_jupyter_environment), which allows you to launch containers tailored to different development stages. Here's a breakdown of the available container types and how to use them:

* * *

##### 1\. **fabric-default**\-<release>

This container runs the stable release of FABRIC libraries (fablib) and includes stable Jupyter examples. It corresponds to the default option on FABRIC's JupyterHub.

**To start the `fabric-default` container**:

1.  Navigate to the release folder (e.g., version `1.7.0`).
2.  Run the following commands:

```
cd 1.7.0
   docker-compose up -d fabric-default
```

* * *

##### 2\. **fabric-bleeding**

This container includes the latest released version of fablib and the newest Jupyter examples. It corresponds to the "bleeding edge" option on FABRIC's JupyterHub.

**To start the `fabric-bleeding` container**:

1.  Navigate to the release folder (e.g., version `1.7.0`).
2.  Run the following commands:

```
cd 1.7.0
   docker-compose up -d fabric-bleeding
```

* * *

##### 3\. **fabric-beyond-bleeding**

This container runs the most experimental version of fablib and Jupyter examples from the main development branch. It includes the latest development changes and is primarily intended for FABRIC developers.

**To start the `fabric-beyond-bleeding` container**:

1.  Navigate to the release folder (e.g., version `1.7.0`).
2.  Run the following commands:

```
cd 1.7.0
   docker-compose up -d fabric-beyond-bleeding
```

* * *

#### Accessing JupyterHub

Once the container is running, you can access the JupyterLab interface in your browser by navigating to:

```
http://localhost:8888/
```

**Note**: It may take up to one minute for JupyterHub to fully start.

* * *

#### Accessing the Running Container

If you need to interact with the running container directly, follow these steps:

1.  **List running containers**:

```
docker ps
```

This will show a list of active containers, for example:

```
CONTAINER ID   IMAGE                                  COMMAND               STATUS              NAMES
   abcdef123456   fabrictestbed/jupyter-notebook:3.3.8   "start-notebook.sh"   Up 2 minutes        fabric-default
```

2.  **Access the container shell**:

```
docker exec -it fabric-default /bin/bash
```

Replace `fabric-default` with the name of the container you wish to access.

3.  **Exit the container**:

```
exit
```

* * *

#### Important Notes:

-   **One container at a time**: Only one container can run at a time. To switch between containers:

1.  Stop and remove the current container:  
    `bash docker-compose down`
2.  Start the desired container with the `docker-compose up` command.

-   **Work Directory Mapping**: Each container maps the `~/work` directory on your local machine to `/home/fabric/work` inside the container, ensuring all your work is saved locally.
-   **Token Setup**: Before running any Jupyter notebooks, download an authentication token from FABRIC's Credential Manager. Save the token in your `~/work` directory to authenticate and interact with FABRIC resources.

* * *

By following this guide, you'll be able to manage different FABRIC container environments, access JupyterLab via your browser, interact directly with containers, and keep your work synced locally.
