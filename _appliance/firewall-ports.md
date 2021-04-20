---
title: [Network policies]


last_updated: 4/20/2021
summary: "Lists the required and optional ports for an installation."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
For regular operations and for debugging, there are some ports you must keep open to network traffic from end users. Another, larger list of ports must be kept open for network traffic between the nodes in the cluster.

Additionally, your firewall may automatically block Pendo, ThoughtSpot’s system for delivery of in-product tips, short videos, and other training elements. To ensure that you can view Pendo guides, add Pendo to a list of allowed domains.

## Required ports for operations and debugging

{% include content/operations-ports.md %}

## Network Ports

{% include content/ports-network.md %}
