---
id: 6
slug: "climate-models"
title: "Improving Climate Models Without Moving Massive Amounts of Data"
subtitle: "FABRIC used to test federated learning approach across geographically distributed data sites"
image: "/imgs/highlights/climate-models.jpg"
imagePlaceholder: "bg-gradient-to-br from-emerald-500 to-green-400"
institution: "Argonne National Laboratory"
domain: "Climate Science"
learnMore:
researchers:
  - name: "Ravi Madduri"
    title: "Senior Computer Scientist"
    institution: "Argonne National Laboratory"
    interests: "AI and HPC"
    contact: "https://www.anl.gov/profile/ravi-k-madduri"
    photo: "/imgs/testimonials/ravi-madduri.jpg"
  - name: "Zilinghan Li"
    title: "Machine Learning Engineer"
    institution: "Argonne National Laboratory"
    interests: "AI for Science and Biomedicine, Federated Learning and Scalable Learning"
    contact: "https://zilinghan.github.io/"
    photo: "/imgs/testimonials/zilinghan-li.jpg"
---

Climate models are vital for understanding how natural variability and human-induced changes affect the Earth's climate system. These models rely on vast amounts of data, including historical climate records and current atmospheric conditions, to ensure accurate simulations and reliable projections of future climate scenarios.

Researchers at the U.S. Department of Energy (DOE) Argonne National Laboratory are working to use a federated learning framework called Advanced Privacy-Preserving Federated Learning (APPFL) to enhance and accelerate climate modeling. The goal is to develop a way to train large-scale machine-learning climate models without having to move the large amounts of data typically required for this task.

Using the FABRIC testbed, the Argonne researchers are testing APPFL with real-world networking conditions.

"FABRIC offers the capability to understand the role of the network when training models across geographically distributed sites using large amounts of data at each site," said research team leader Ravi Madduri, a senior computer scientist at Argonne National Lab and a co-lead of APPFL. "As these models continually increase in size, it puts some burden on the network and thus affects how fast these models can converge."

## Climate data complexities

The Earth System Grid Federation (ESGF) has long been a cornerstone in climate research, providing web-based, distributed access to climate model data from NASA and NOAA climate and weather models. Through collaborations such as the Intergovernmental Panel on Climate Change, ESGF has generated petabytes of data stored across various DOE sites.

The sheer size of these datasets makes it logistically challenging to move them to where they are needed to train climate models. APPFL, an open-source software project funded by the DOE's ASCR program, aims to help solve this problem, allowing research communities to train robust machine learning models seamlessly and securely across distributed clients. This approach not only cuts down on the amount of data that needs to be moved to train models but also preserves privacy because each client contributes to a shared model without needing to expose its own data.

To accomplish this, the researchers are combining FABRIC's network connectivity and distributed compute hardware with APPFL to train models by transferring only the model weights — learned parameters defining how a machine learning model makes predictions — rather than the data itself. This could make it possible to use ESGF climate data located across multiple DOE sites to fine-tune existing models or build new foundational climate models without having to move all the data to a central location.

## Testing the network

Using FABRIC, the researchers have successfully carried out a demonstration experiment that connected a server node at the University of Michigan with two client nodes in Salt Lake City. To do this, they trained a shallow convolutional neural network on a small dataset using a semi-asynchronous algorithm the researchers developed called FedCompass.

FedCompass is a federated learning algorithm that uses a policy framework configured to adaptively assign varying amounts of training tasks to different clients using knowledge of the available computing power of individual clients. This capability allows for faster convergence and improved robustness of machine learning models. By accounting for the different computing capabilities of the sites in the federation, FedCompass helps researchers understand and characterize how computing power heterogeneity affects overall model performance.

The researchers say that one of the most important features of FABRIC for this experiment was the ability to configure the network topology. "It was also useful that all nodes operate under a local area network, allowing for seamless communication," said research team member Zilinghan Li, a machine learning engineer at Argonne. "When using high-performance computing resources, firewall restrictions often prevent inbound connections. This is not a problem with the FABRIC network, which has smooth inbound and outbound connections between nodes."

The team is continuing their experiments with FABRIC. Next, they plan to use APPFL to apply federated learning for building foundational models for various DOE scientific research facilities that generate large amounts of data such as Argonne's Advanced Photon Source, the Stanford Linear Accelerator Center and the Spallation Neutron Source.
