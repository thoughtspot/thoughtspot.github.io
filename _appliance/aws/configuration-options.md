---
title: [AWS configuration options]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot engineering has performed extensive testing of the ThoughtSpot appliance on various Amazon Elastic Compute Cloud (EC2) and Amazon Elastic Block Store (EBS) configurations for best performance, load balancing, scalability, and reliability.

You can find information here on which configuration of memory, CPU, storage, and networking capacity you should be running for your instances. There are also details on how to configure your placement groups.

## Hardware configurations

There is only one available hardware configuration for deploying ThoughtSpot on Amazon: `r4.16xlarge`

Below are charts depicting the specifications for the configuration for EC2 and EBS requirements. Both EC2 and EBS requirements must be fulfilled to deploy on Amazon.

|Instance name|Data capacity|vCPUs|DRAM|
|-------------|-------------|-----|----|
|r4.16xlarge|Up to 250 GB|64|488 GB|

|Instance name|Data capacity|Root volume (SSD)|Data volume (SSD or HDD)|
|-------------|-------------|-------------------|--------------------------|
|r4.16xlarge|Up to 250 GB|1 vol 200 GB|2 vols 400 GB each|



## ThoughtSpot software license sizes

ThoughtSpot only sells software licenses in multiples of 250 GB of data. So you can start with 250 GB, and add increments of 250 GB each time your data capacity needs increase. You can also choose to start off with more than 250 GB of data, as long as you know the best fit configuration for your data volume.

## Lego blocks

If you aren't sure what kind of configuration you need, it might help to think of the hardware configurations in terms of simple Lego blocks. The r4.16xlarge size can be seen as a 250 GB block.

{% include note.html content="ThoughtSpot does not support sizes other than r4.16xlarge." %}

Since the minimum data volume offered is 250 GB, you would need one r4.16xlarge block to match the data capacity. This scales linearly. So, 500 GB would require two r4.16xlarge blocks.

## Placement groups

A placement group is a logical grouping of instances within a single availability zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both.

ThoughtSpot relies on high connectivity between nodes of a cluster, which is why creating a placement group is recommended. Being in same placement group will give you the best shot at the highest bandwidth across AWS EC2 instances and the lowest latencies. This will make the node-node network reach the closest AWS promised specs. Our default recommendation for a multi-instance setup requires a placement group since it works best for our application performance. Also, AWS will provide jumbo frames (9000 MTU) support in such situations, and they don't charge extra for being in the same placement group. Having said that, ThoughtSpot will still work with EC2s in the cluster across placement groups in an availability zone.

## Related information:

- [EC2 instance types](https://aws.amazon.com/ec2/instance-types/)
- [EC2 pricing](https://aws.amazon.com/ec2/pricing/)
- [EBS pricing](https://aws.amazon.com/ebs/pricing/)
- [Placement groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
