---
title: [Network ports]
last_updated: 4/20/2021
summary: "Note the list of ports, both required and optional, for regular operations of ThoughtSpot."
redirect_from:
- /admin/setup/firewall-ports.html
- /appliance/firewall-ports.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
For regular operations and for debugging, there are some ports you must keep open to network traffic from end users. Another, larger list of ports must be kept open for network traffic between the nodes in the cluster.

Additionally, your firewall may automatically block Pendo, ThoughtSpot’s system for delivery of in-product tips, short videos, and other training elements. To ensure that you can view Pendo guides, add Pendo to a list of allowed domains.

{% include content/ports-operations.md %}

{% include content/ports-intracluster.md %}

{% include content/ports-cluster-access.md %}

{% include content/ports-ipmi.md %}
