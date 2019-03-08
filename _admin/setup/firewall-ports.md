---
title: [Network policies]
tags: [bestpractices]
keywords: network, ports, policies
tags: [networking]
last_updated: tbd
summary: "Lists the required and optional ports and policies for an installation."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
For regular operations and for debugging, there are some ports you will need to keep open to network traffic from end users. Another, larger list of ports must be kept open for network traffic between the nodes in the cluster. <mark style="background-color: lightblue">ICMP v4 is used for checking the health of the cluster.</mark>

## Required ports for operations and debugging

{% include content/operations-ports.md %}

## Network Ports

{% include content/ports-network.md %}

## Related information  

[EC2 Best Practices](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html)
