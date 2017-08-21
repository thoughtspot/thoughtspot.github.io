---
title: [Network connection]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "Creating a network connection."
sidebar: mydoc_sidebar
---
# Network connection

Before accessing ThoughtSpot, you will need a network connection.

You can refer to the ThoughtSpot Administrator Guide to see which ports must remain open to outside traffic for handling certain network requests and for inter-cluster communication. You can also find information on how to test your network connectivity between nodes and network security.

Here are some more details on ports and node communication:

-   Port redundancy \(bonding\) is not supported. Only one 10G port is active per node.
-   Nodes communicate to each other via the 10G connection \(data ports\).
-   All nodes should be on the same VLAN – ideally connected to the same top of rack switch.
-   IPMI ports are used for management functions of the nodes.

**Parent topic:** [Hardware and deployment](../../appliance/physical/hardware_and_deployment.html)
