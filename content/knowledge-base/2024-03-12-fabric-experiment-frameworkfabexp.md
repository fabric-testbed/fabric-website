---
title: FABRIC Experiment Framework(FABExp)
slug: fabric-experiment-frameworkfabexp
date: "2024-03-12"
date_modified: "2025-09-12"
author: Pinyi Shi
status: publish
wp_id: 6691
views: 1581
categories:
  - Tools
---

The Fabric Experiment Framework (FABExp) is a Jupyter-based Graphical User Interface (GUI), implemented using ipywidgets and fablib api calls, that allows users to manage their experiments in the Fabric testbed. Users can utilize FABExp to check whether their JupyterHub settings(including keys, config files and etc) are correct. Then users can start their experiments by defining the topology of a slice, submitting the slice, configuring the slice(setting up networks and installing software), running their experiments and viewing the data. The features provided by FABExp allow users to easily keep track of what they have done in the experiment, e.g, a state "DOCKER\_INSTALLED" will be saved in the Fabric FIM to indicate users have installed Docker on all the nodes in their slice. Users can check the **state** of the slice to avoid duplicate execution of code, which may sometimes cause errors. In this article, we illustrate the usage of FABExp by showing how to take advantage of each tab of FABExp to easily manage a Fabric experiment.

## Backgrund

Technically speaking, a “slice” and an “experiment” are not the same. A slice is a topology that consists of nodes(VMs) and the network connection among these nodes. An Experiment is the act of running a test (experiment) on a network topology (Slice). However, most Fabric Jupyter notebooks currently contain cells to create the slice, run the experiment, and view results, **making it difficult to reuse certain portion of the notebook**. In FABExp, we are dividing an experiment into different phases:

-   **Establish Prerequisites:** Define Information about the Components -- (e.g., experiment name, slice name, dependencies between components, etc)
-   **Slice Creation:** Define/create the topology (Slice) -- (e.g., define the nodes/link and submit), only one component of an experiment
-   **Experiment Setup:** Add/configure software and services needed by the experiment (e.g., enable routes, add services like MFlib, PTP, etc)
-   **Run Experiment:**Invoke commands on the nodes of the experiment (e.g., interactively via login, or via remote execution to run ping tests)
-   **Monitor Performance:** Visualize measurement and monitoring information(Optional)
-   **Analyze the Results:** Collect, process, and visualize the results

## Desirable Features of an Experiment Framework

We list below some desirable features that Fabric Experiment Framework should have:

-   **Conventions (variables)** for passing information between the components/phases of an experiment. For example, the value of the IP address of Node\_1 can be written in a local file. This file can be passed as the header to other notebooks, say if you have a notebook that runs ping test from Node\_2 to Node\_1, the variable "Node1\_Addr" can be directly used so that no additional code is needed to find out the value of the IP address.
-   A mechanism to define **dependencies** between the components of an experiment and way to automatically fulfill (execute) dependencies. For example: to configure a slice you must submit the slice first. So "SLICE\_SUBMITTED" becomes a prerequiste of config\_slice.ipynb.
-   A mechanism to check for **missing pieces** (e.g., ssh keys) and **dependencies** (e.g., PTP not installed/enabled)
-   System to keep track of the **"status"** of the experiment -- what has been done, what remains to be done. In FABExp, we use a list of "state" to help keep track of the experiment status e.g, "SLICE\_DEFINED", "SLICE\_SUBMITTED", "SLICE\_CONFIGURED", "MEAS\_NODE\_ADDED", "MFLIB\_INITIATED", "ELK\_INSTRUMENTIZED", "PROMETHEUS\_INSTRUMENTIZED", "DOCKER\_INSTALLED", "PTP\_INSTALLED"

## Usage of Fabric Experiment Framework(FABExp)

In this section, we will illustrate the usage of FABExp. We are showing the usage with fablib version 1.6 but it works with latest versions.

### Start the GUI

Users can go to the experiment folder and open **welcome.ipynb**. Then run the first code cell in the notebook. A GUI will pop up asking for experiment name.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-09.28.54-1024x432.png)

After the users enter the experiment name click the "**Create New Experiment**" button, a new folder will be created(see it on the left side) using the name you input. All the activities of the experiment will be saved in the newly created folder (without affecting the template folder).

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-11.20.08-1024x507.png)

Then users can select the newly created experiment from the dropdown and click the "**Go to Experiment**" button. A new panel with different tabs will pop up. Be careful when clicking the "Delete Experiment" button since it will delete the newly created folder.

### Check Prerequisites Tab

In this tab, users can specify the location of the configure notebook to check their JH settings. The dropdown scans the directories with names "jupyter-examples-relXXX" in the HOME dir(/home/fabric/work/). Since jupyter-examples-rel1.6.1, a new notebook book called "configure\_and\_validate.ipynb" has been added as a new approach to check the JH settings, if both "configure.ipynb" and "configure\_and\_validate.ipynb" exist in the selected direcory, FABExp will select "configure\_and\_validate.ipynb" based on priority.

**Note: Experienced users do not need to go through this step if they are sure their JH settings are correct. New users only need to do it once.**

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-11.38.04-1024x531.png)

If users run "configure\_and\_validate.ipynb", they should see the following(same as the output when users manually run this notebook) Ignore the path in the last line. The check process will stop here.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.26.08.png)

When users click the "Run Configure Notebook" button, if the selected file is "configure.ipynb", users are expected to see the following:

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.23.59-1-1024x264.png)

When users run "configure.ipynb", they are expected to use FABExp to check their JH settings: Check the existence of files, check the content of files and library versions.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.30.39-1024x456.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.36.19-1024x436.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.39.26-1024x366.png)

Please make sure that the "requirements.txt" in the selected dir have the correct library versions.

### Define Your Slice

Users can define their slice using the three files listed: slice name in **load\_variables.py**, topology variables in **topology\_variables.ipynb** and slice topology in **define\_slice.ipynb**.

FABExp checks whether the given slice name is valid or not(whether slice with the same name has been submitted).

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.42.54-1024x498.png)

If the name is ok, users will see:

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.47.53-1024x336.png)

If users change the content in any of these files, they need to **save the file** and click the "Confirm" button(No need to manually run the notebooks). Then they can submit the slice using the "Submit slice button". For option 2, if users close the GUI and the next time when they come back, they can load the saved topology(no matter the slice itself has been submitted or not) using the confirm button.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-12.51.58-1024x444.png)

By clicking the "Submit slice" button, users will see the same output as what they will see in the notebook output cell. At the end of the output, users should see something similar to the following. The "State" button prints the current state of the slice.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-13.23.59-1024x314.png)

### Configure Your Slice

In the "Config\_S/W" tab, users can modify "topology\_variables.ipynb" and "config\_slice.ipynb" to provide any information how they want to config the slice. By default, the notebooks are working. Click "Run Configure Notebook". Users should see the following before and after slice configuration:

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-13.44.29-1-1024x323.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-05-at-14.25.06-1024x284.png)

### Add Measurement Framework Services (optional)

The Measurement Framework provides different services that help the users collect and visualize the data from their slice. In this tab, users will see a list of services available including ELK, Prometheus, Data Transfer, Precision Timing and One Way Latency(OWL). When users check the checkboxes, the corresponding accordion will be displayed showing "What users need to do" to satisfy the requirements of running the selected mflib experiments. (Basically running notebooks to satisfy the requirements). If users click the "show details" button

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-09.13.24-1024x447.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-09.43.59-1024x479.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-09.20.28-1024x550.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-09.44.41-1024x476.png)

The GUI will be automatically updated if the "state" changes. For example, in the figure above, the **One Way Latency** experiment requires the installation of PTP and Docker. Once users finishes running the "INSTALL\_PTP\_NOTEBOOK", they will only be asked to run "INSTALL\_DOCKER\_NOTEBOOK".

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-09.52.30-1024x514.png)

Once all the requirements are satisfied, users will see the following and they can go to the next tab to run the experiments.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-10.09.40-1024x464.png)

### Run Experiments

The first section in this tab show the notebooks for this experiment. For example, in this Fabnet IPv4 experiment, the notebook "**main.ipynb**" just runs ping test from node1 to node2 to verify the network connectivity. There are other notebooks, e.g, notebook1 and notebook2, which are left **empty** for now but users can add the code of their own experiment to these notebooks, save them and click the "Run Notebook" button so that they can run other experiments using this slice.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-10.21.26-1024x233.png)

If users only cares about the default experiment, e.g, the ping test, they can just click the "Run Notebook" button to see the results.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-10.27.39-1024x479.png)

If users have selected any mflib services in the previous tab, they will see the corresponding experiment notebooks they can open and use.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-11.26.19-1024x429.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-11.33.44-1-1024x337.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-11.34.10-1024x395.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-11.40.43-1024x285.png) ![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-10.41.05-1024x353.png)

The last part of this tab allows users to ssh into a selected node by clicking the "Open Terminal" button so that users can type commands in the terminal to run other experiments.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-11.41.21-1-1024x208.png)

### View Output

This tab is designed to help users view their experiment data assuming they have separate notebook e.g, notebook1.ipynb and notebook2.ipynb for this purpose. The example experiment we have here is a ping tests where the output is displayed in the same main.ipynb.

### See Measurements

If users have instrumentized ELK/Prometheus based on what they selected, they will see the notebooks in this tab showing them how to set up SSH tunnels to access the Kibana/Grafana web interfaces, where they will see various dashboards visualizing the collected measurement data from their slice.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-11.47.02-1024x272.png)

### Slice State

Users can always find the status of their experiments: the name of the slice and what has been done in this slice.

![](https://learn.fabric-testbed.net/wp-content/uploads/2024/03/Screen-Shot-2024-03-06-at-11.58.03-1024x192.png)

## Conclusion

Fabric Experiment Framework (FABExp) is a Jupyter-based GUI that helps users manage their experiments in the Fabric testbed. With this tool, users can easily keep track of their experiment status and avoid some common pitfall when running experiments.
