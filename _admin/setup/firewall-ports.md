---
title: [Network policies]
tags: [bestpractices]
keywords: network, ports, policies
tags: [networking]
last_updated: tbd
summary: "Lists the required ports, protocols and policies for an installation."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
For regular operations and debugging, there are some ports you you must keep open to network traffic from end users. <mark style="background-color: lightblue">Another list of ports must be open for intracluster traffic, and for inbound and outbound access to the cluster. ICMP v4 is used for checking the health of the cluster.</mark>

## Required ports for operations and debugging

{% include content/operations-ports.md %}

## <mark style="background-color: lightblue">Required ports for cluster communication</mark>

{% include content/ports-network.md %}

## Related information  

[EC2 Best Practices](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html)
