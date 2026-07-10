---
title: How to install fablib after locally installing the FABRIC API
slug: how-to-install-fablib-after-locally-installing-the-fabric-api
date: "2022-01-10"
date_modified: "2022-01-10"
author: Mina William Morcos
status: pending
wp_id: 1219
views: 1
---

Below are steps to install fablib on your local machine.

Make sure you're in the virtual environment that you created when installing the FABRIC API. And if you're wondering about the base directory of those commands, you can just be in the folder that contains `jupyter-examples`. This will clone `fabrictestbed-extensions` next to it.

```
git clone https://github.com/fabric-testbed/fabrictestbed-extensions.git
cd fabrictestbed-extensions/
git checkout pruth-test-harness
pip3 install .
```

Then, you can find notebooks working with fablib on the branch "working-dec" in the jupyter-examples repo. Navigate to jupyter-examples and checkout "working-dec".

```
git checkout working-dec
```
