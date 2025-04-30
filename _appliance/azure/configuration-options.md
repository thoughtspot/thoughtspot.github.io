---
title: [Azure configuration options]
summary: "ThoughtSpot offers several Microsoft Azure instance types."
last_updated: 3/17/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot can be deployed in your Azure environment by deploying compute VM instances in your VNET, or Azure Virtual Network, and your underlying persistent storage infrastructure.
ThoughtSpot supports Premium SSD Managed Disks for persistent storage. For more information, see [Managed Disks pricing](https://azure.microsoft.com/en-us/pricing/details/managed-disks/){:target="_blank"} in Microsoft's Azure documentation.

All Azure VMs (nodes) in a ThoughtSpot cluster must be in the same availability zone
(and, therefore, also in the same region). ThoughtSpot does not support deploying VMs( nodes) of the same cluster across availability zones. For more information, see [What are Availability Zones in Azure?](https://docs.microsoft.com/en-us/azure/availability-zones/az-overview){:target="_blank"} in Microsoft's Azure documentation.

When choosing an instance type, ensure that it uses Intel CPUs.

## ThoughtSpot Azure instance types

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM <br>Premium SSD Managed Disk volume | Required root volume capacity |
| --- | --- | --- |--- | --- |
| 200 GB | E64s_v3 | 64/432 | 2x1 TB | 200 GB for each node |
| 100 GB | E32s_v3 | 32/256 | 2X 400 GB | 200 GB for each node |
| 20 GB | E16s_v3 | 16/128 | 2X 400 GB | 200 GB for each node |
| 120 GB | D64_v3, D64s_v4 | 64/256 | 2X 1 TB | 200 GB for each node |

For most instances, the per VM recommended user data capacity is set at 50% of the available RAM on the instance. However, in the case of our 16CPU/128GB RAM and 32CPU/256GB RAM instances, we support user data sizes below those numbers to budget for application overhead.
