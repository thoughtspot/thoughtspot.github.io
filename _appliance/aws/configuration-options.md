---
title: [AWS configuration options]
keywords: AWS, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot can be deployed in your AWS environment by deploying compute (VM) instances in your Amazon VPC as well as an underlying persistent storage infrastructure. Currently two configuration modes are supported by ThoughtSpot:
- Mode 1: Compute VMs + persistent storage using EBS only
- Mode 2: Compute VMs + persistent storage using a combination of EBS and S3

The cost of infrastructure for deploying ThoughtSpot will be cheaper when using S3. However, there are differences in where data gets loaded as well as in the backup and restore procedure.  Please consult your ThoughtSpot representative to understand the best mode to run ThoughtSpot in AWS.

|<b>Operation</b>|<b>VMs with EBS-only persistent storage</b>|<b>VMs with EBS and S3 persistent storage</b>|
|Data loading|Into EBS|Into S3|
|Snapshots|In EBS|In EBS|
|Backups<B>*</B>|In EBS|In EBS|
|Restore a cluster from backup|Copy backup to VM and then restore|Copy backup to VM and then restore|  

<b>*</b>See [Create a manual backup]({{ site.baseurl }}admin/backup-restore/take-backup.html#)


## Storage options

See [Create a manual backup]({{ site.baseurl }}admin/backup-restore/take-backup.html#) for assistance with setting up this option.
![]({{ site.baseurl }}/images/persistent-storage-aws.svg "Persistent Storage with S3")

{% include note.html content="A certain amount of block storage is still required for services like the key-value store and other services. This data volume size is much smaller, however, when using S3 for major services." %}

## ThoughtSpot AWS instance types

The following table contains the supported and recommended instance types for a ThoughtSpot AWS deployment. When setting up your cluster in AWS, use the information here to select an instance type, configure the number of instances required for the storage you need, and add data volumes to your cluster.

For example: If you are deploying a total cluster data size of 1 TB using the standard r5.16xlarge instance type, you need 4 instances (VMs), because the per-VM capacity of that instance type is 250 GB. If you are deploying EBS-only data volumes, you need 1 TB.

<table width="853">
<colgroup>
      <col width="80" />
      <col width="95" />
      <col width="90" />
      <col width="80" />
      <col width="40" />
      <col width="60" />
     <col width="90" />
    <col width="70" />
    <col width="90" />
  </colgroup>
<tr>
    <td style="height:0 px"></td>
    <td style="height:0 px" colspan="2"><p dir="ltr"><center><strong>Use case</strong></center></p></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
  </tr>
<tr>
      <td><p dir="ltr"><strong>Data shape</strong></p></td>
      <td><p dir="ltr"><strong>Total cluster <BR>data size</strong></p></td>
      <td><p dir="ltr"><strong>Per VM <BR>data capacity</strong></p></td>
      <td><p dir="ltr"><strong>Instance type</strong></p></td>
      <td><p dir="ltr"><strong>vCPU/RAM</strong></p></td>
	  <td><p dir="ltr"><strong>Boot volume</strong></p></td>
	  <td><p dir="ltr"><strong>Data <br>volumes <br>EBS only</strong></p></td>
    <td><p dir="ltr"><strong>Data <br>volumes <br>with S3</strong></p></td>
		  <td><p dir="ltr"><strong>Recommended</strong></p></td>
</tr>
<tr>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">Up to 2 TB</p></td>
      <td><p dir="ltr">250 GB</p></td>
      <td><p dir="ltr">r4.16xlarge<sup>a</sup></p></td>
      <td><p dir="ltr">64/488</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"></p></td>
</tr>
<tr>
      <td></td>
      <td><p dir="ltr">Up to 2 TB</p></td>
      <td><p dir="ltr">250 GB (Large)</p></td>
      <td><p dir="ltr">r5.16xlarge<sup>a</sup></p></td>
      <td><p dir="ltr">64/488</p></td>
    <td><p dir="ltr">200 GB</p></td>
    <td><p dir="ltr">2X 1 TB</p></td>
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"><b>✓</b></p></td>
</tr>
<tr>
      <td></td>
      <td><p dir="ltr">&gt;2 TB</p></td>
      <td><p dir="ltr">384 GB (Large)</p></td>
      <td><p dir="ltr">r5.24xlarge</p></td>
      <td><p dir="ltr">96/768</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1.5 TB</p></td>
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>
      <td></td>
      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">r4.8xlarge<sup>b</sup></p></td>
      <td><p dir="ltr">32/244</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>    
	<td></td>
      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">r5.8xlarge<sup>b</sup></p></td>
      <td><p dir="ltr">32/244</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"><b>✓</b></p></td>
    </tr>
<tr>
      <td></td>
      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">r4.4xlarge<sup>b</sup></p></td>
      <td><p dir="ltr">16/122</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>
      <td></td>
      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">r5.4xlarge<sup>b</sup></p></td>
      <td><p dir="ltr">16/122</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"><b>✓</b></p></td>
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
    <td><p dir="ltr">500 GB</p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>
    <td colspan="8"><p dir="ltr">(a) Use the sizing calculators on each cloud provider to plug in expected customer discounts to arrive at the proper recommended cloud instance type.</p><p>(b) Use the small and medium instance-type configuration. Refer to: <a href="/5.2/appliance/cloud.html#use-small-and-medium-instance-types">Use small and medium instance types.</a></p>
    </td>
</tr>
  </table>

## Related information

- [EC2 instance types](https://aws.amazon.com/ec2/instance-types/)
- [EC2 pricing](https://aws.amazon.com/ec2/pricing/)
- [EBS pricing](https://aws.amazon.com/ebs/pricing/)
- [Placement groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
