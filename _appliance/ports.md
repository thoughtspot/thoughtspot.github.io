---
title: [Network policies]
last_updated: 8/26/2020
summary: "Note the list of ports, both required and optional, for regular operations of ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
For regular operations and for debugging, there are some ports you must keep open to network traffic from end users. Another, larger list of ports must be kept open for network traffic between the nodes in the cluster.

{% include content/ports-operations.md %}

{% include content/ports-intracluster.md %}

{% include content/ports-cluster-access.md %}

{% include content/ports-ipmi.md %}
