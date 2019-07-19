---
title: [AWS configuration options]
keywords: AWS, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot engineering has performed extensive testing of the ThoughtSpot
application on the Amazon Elastic Compute Cloud (EC2) platform, including both Amazon Elastic Block
Store (EBS) and S3 storage configurations for the best performance, scalability,
reliability, and cost savings.

You can find information here on which configuration of memory, CPU, storage,
and networking capacity you should be running for your instances. There are also
details on how to configure your placement groups.

## Persistent storage options

In order to reduce the cost of a deployment, S3 is available as persistent storage for major services like the ThoughtSpot database and search engine. HDFS is also available, but it uses EBS for underlying storage which is significantly more expensive than the object-based S3 storage. If your cluster size is 1 TB or greater, you may benefit from the cost savings of the S3 storage option. Contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#) for assistance with setting up this option.
![]({{ site.baseurl }}/images/persistent-storage.png "Persistent Storage with S3")

## ThoughtSpot AWS instance types

<table width="853">
    <colgroup>
      <col width="110" />
      <col width="110" />
      <col width="110" />
      <col width="105" />
      <col width="140" />
      <col width="95" />
    </colgroup>
	<tr>
      <td><br /></td>
      <td colspan="2"><p dir="ltr"><center><strong>Use case</strong></center></p></td>
      <td><br /></td>
      <td><br /></td>
      <td><br /></td>
      <td><br /></td>

    </tr>
    <tr>
      <td><p dir="ltr"><strong>Data shape</strong></p></td>
      <td><p dir="ltr"><strong>Total cluster <BR>data size</strong></p></td>
      <td><p dir="ltr"><strong>Per VM <BR>Data capacity</strong></p></td>
      <td><p dir="ltr"><strong>Recommended <BR>Instance type</strong></p></td>
      <td><p dir="ltr"><strong>vCPU/RAM</strong></p></td>
	  <td><p dir="ltr"><strong>Boot volume</strong></p></td>
	  <td><p dir="ltr"><strong>Data volumes</strong></p></td>
    </tr>
    <tr>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">Up to 2 TB </p></td>
      <td><p dir="ltr">250 GB</p></td>
      <td><p dir="ltr">r4.16xlarge<sup>a</sup></p></td>
      <td><p dir="ltr">64/488</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">&gt;2 TB</p></td>
      <td><p dir="ltr">384 GB (Large)</p></td>
      <td><p dir="ltr">r5.24xlarge</p></td>
      <td><p dir="ltr">96/768</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1.5 TB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">r4.8xlarge<sup>b</sup></p></td>
      <td><p dir="ltr">32/244</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">r4.4xlarge<sup>b</sup></p></td>
      <td><p dir="ltr">16/122</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    </tr>
    <tr>

      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">192 GB</p></td>
      <td><p dir="ltr">m5.24xlarge</p></td>
      <td><p dir="ltr">96/384</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
    </tr>
	<tr>

      <td colspan="6"><p dir="ltr">(a) Use the sizing calculators on each cloud provider to plug in expected customer discounts to arrive at the proper recommended cloud instance type.</p><p>(b) Use the small and medium instance-type configuration. Refer to: <a href="/5.2/appliance/cloud.html#use-small-and-medium-instance-types">Use small and medium instance types.</a></p>
       </td>
    </tr>
  </table>

## Regions, availability zones, and placement groups

AWS instances are configured to a location with regard to where the computing
resources are physically located. You must specify a region, an availability
zone, and a placement group.

AWS nodes in a ThoughtSpot cluster must be in the same [availability zone](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) (and, therefore, also in the same region).

A [placement group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
is a logical grouping of instances _within_ a single availability zone.
Placement groups are recommended for applications that benefit from low network
latency, high network throughput, or both.

ThoughtSpot relies on high connectivity between nodes of a cluster, which is why
creating a placement group is recommended. Being in same placement group will
give you the best shot at the highest bandwidth across AWS EC2 instances and the
lowest latencies. This will make the node-node network reach the closest AWS
promised specs. Our default recommendation for a multi-instance setup requires a
placement group since it works best for our application performance. Also, AWS
will provide jumbo frames (9000 MTU) support in such situations, and they don't
charge extra for being in the same placement group.

Having said that, ThoughtSpot will still work with EC2s in the cluster across
placement groups in an availability zone.

## Related information

- [EC2 instance types](https://aws.amazon.com/ec2/instance-types/)
- [EC2 pricing](https://aws.amazon.com/ec2/pricing/)
- [EBS pricing](https://aws.amazon.com/ebs/pricing/)
- [Placement groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
