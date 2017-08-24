---
title: [Network connectivity issues]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
If network connectivity to and from ThoughtSpot is not working, try using these steps to find and correct the issue.

To troubleshoot network connectivity for ThoughtSpot:

1.   Make sure that the network cables are connected correctly.
2.   Check that the network cable is connecting the nodes to the network switch.
3.   Try replacing the cable with a cable from a known working system to rule out a bad cable or switch connectivity issues.
4.   Make sure the eth0 interface is connected to the network by issuing: `ethtool eth0` The port that's currently connected will have "link detected" in the last line of the output.
5.   If the networking settings have been reconfigured, reboot each of the nodes.

**Parent topic:** [About troubleshooting](../../admin/troubleshooting/troubleshooting_intro.html)
