---
title: [GCP configuration options]
keywords: GCP, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot engineering has performed extensive testing of the ThoughtSpot
appliance on various Google Cloud Platform (GCP) configurations for best
performance, load balancing, scalability, and reliability.

You can find information here on which configuration of memory, CPU, storage,
and networking capacity you should be running for your instances.

## Hardware configurations

GCP provides several storage types and media options. ThoughtSpot requires [attached storage](https://cloud.google.com/compute/docs/disks/) and persistent disks. The ThoughtSpot reference implementation uses the Google `n1-highmem-64`, which is on the higher end of the [High Memory Machine types](https://cloud.google.com/compute/docs/machine-types#highmem).

The following table summarizes the reference implementation machine type, along with minimum required CPU, memory capacity, and storage.


|Machine Type | Storage Type           | Data Capacity             |vCPUs|System Memory |
|-------------|---------------------   | -----------------         |-----|--------------|
|n1-highmem-64|zonal SSD attached disks|1x250GB plus two 1TB disks | 64  |416 GB        |

Encryption at rest is provided by default in these storages and Google manages
the keys. ThoughtSpot uses only persistent storage options. Instance storage
(also known as "local storage") is not used for ThoughtSpot deployments on GCP.

## Data capacity per node

Each [GCP n1-highmem-64 machine](https://cloud.google.com/compute/docs/machine-types#highmem)
has 416 GB of memory and can accommodate ~208 GB of ThoughtSpot dedicated data.
As a ThoughtSpot recommended sizing heuristic for this platform, the number of
nodes needed to host a given data size is equal to data size (GB), modulo 208.
This size refers to the amount of data in the CSV files you will be loading into
ThoughtSpot. The 208 GB number takes into account all replication of data done
automatically by ThoughtSpot to provide redundancy and fast performance.

You can start with the minimum platform described here, and add capacity by
adding nodes and disks as needed. You can also choose to start off with more
data capacity, as long as you know the best fit configuration for your data
volume.
