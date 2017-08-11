---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Test network connectivity between nodes

This procedure tests the network connectivity between the ThoughtSpot nodes, and to the LAN. If you can perform these steps successfully, the network settings on ThoughtSpot are correct.

1.   [Log in to the Linux shell using SSH](login_console.html#). 
2.   Ping each of the other nodes in the cluster. 
3.   Ping another machine that exists outside of the cluster, for example, a machine that you will use to stage data to be loaded. 

    **Note:** If you cannot perform these tests successfully, there is a problem with the network setup.

4.   If the tests fail, check [Network connectivity issues](../troubleshooting/check_connectivity.html#). 

**Parent topic:** [Installation and setup](../../admin/setup/intro.html)

**Related information**  


[Log in to the Linux shell using SSH](login_console.html#)

[Log in to ThoughtSpot from a browser](accessing.html#)

