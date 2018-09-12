---
title: [GCP configuration options]
keywords: GCP, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot engineering has performed extensive testing of the ThoughtSpot appliance on various Google Cloud Platform (GCP) configurations for best performance, load balancing, scalability, and reliability.

## ThoughtSpot Reference Platform

GCP provides an [option](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) for choosing a particular minimal platform setting when selecting an instance type. Our qualification was based on a generic ask of a reference virtual machine (VM) in the chosen category, see [High Memory Machine types](https://cloud.google.com/compute/docs/machine-types#highmem).

[vm type](https://cloud.google.com/compute/docs/cpu-platforms) : n1-highmem-64 (64 vCPUs, 416 GB memory)

## Storage

GCP provides a few types of storage types and media options. The following
storage options were used as reference storage for ThoughtSpot.

[attached storage](https://cloud.google.com/compute/docs/disks/) : {1x250GB + 2x1TB} Type:zonal SSD persistent disks

Encryption at rest is provided by default in these storages and Google manages
the keys. ThoughtSpot uses only persistent storage options. Instance storage
(also known as "local storage") is not used.
