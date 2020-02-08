---
title: [Azure configuration options]
summary: "ThoughtSpot offers several Microsoft Azure instance types."
last_updated: 11/18/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot can be deployed in your Azure environment by deploying compute (VM) instances in your VNET as well as an underlying persistent storage infrastructure. Currently we support Premium SSD Managed Disks for persistent storage. For more information, see [Managed Disks pricing](https://azure.microsoft.com/en-us/pricing/details/managed-disks/){:target="_blank"} in Microsoft's Azure documentation.

All Azure VMs (nodes) in a ThoughtSpot cluster must be in the same availability zone
(and, therefore, also in the same region). ThoughtSpot does not support deploying VMs( nodes) of the same cluster across availability zones. For more information, see [What are Availability Zones in Azure?](https://docs.microsoft.com/en-us/azure/availability-zones/az-overview){:target="_blank"} in Microsoft's Azure documentation.

## ThoughtSpot Azure instance types

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM <br>Premium SSD Managed Disk volume |
| --- | --- | --- |--- |
| 200 GB | E64sv3 | 64/432 | 2x1 TB |
| 100 GB | E32sv3 | 32/256 | 2X 400 GB |
| 20 GB | E16sv3 | 16/128 | 2X 400 GB |
| 120 GB | D64v3 | 64/256 | 2X 1 TB |
