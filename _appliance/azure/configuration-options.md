---
title: [Azure configuration options]
keywords: Azure, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot engineering has performed extensive testing of the ThoughtSpot
appliance on various Azure configurations for best performance, load balancing,
scalability, and reliability.

You can find information here on which configuration of memory, CPU, storage,
and networking capacity you should be running for your instances. There are also
details on how to configure your scope and permissions.

## Hardware configurations

The following Azure resources are required for provisioning a Thoughtspot image
in Azure:
- Virtual Machine Size: Standard E64s v3 (64 vcpus, 432 GB memory)
- Storage: Two 1TB SSD disks
- Network Ports: See PORTS SETTINGS

## Data capacity per node

ThoughtSpot sizes nodes in multiples of 200 GB of data in Azure. This size
refers to the amount of data in the CSV files you will be loading into
ThoughtSpot. The 200GB number takes into account all replication of data done
automatically by ThoughtSpot to provide redundancy and fast performance.

You can start with 200 GB, and add increments of 200 GB each time your data
capacity needs increase. You can also choose to start off with more than 200 GB
of data, as long as you know the best fit configuration for your data volume.
