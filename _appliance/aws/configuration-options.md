---
title: [AWS configuration options]
keywords: AWS, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
<link rel='stylesheet' type='text/css' href='../css/cloud.css'>
<style>
th, td {
  valign: middle;
tr:hover {background-color: #f5f5f5;};
</style>
ThoughtSpot can be deployed in your AWS environment by deploying compute (VM) instances in your Amazon VPC as well as an underlying persistent storage infrastructure. Currently two configuration modes are supported by ThoughtSpot:
- Mode 1: Compute VMs + EBS-only persistent storage
- Mode 2: Compute VMs + EBS and S3 persistent storage

The cost of infrastructure for deploying ThoughtSpot is cheaper when using S3. However, there are differences in where data is loaded, as well as in the backup and restore procedure.  Please consult your ThoughtSpot representative to understand the best mode to run ThoughtSpot in AWS.

<table style width="853">
<colgroup>
      <col width="80" />
      <col width="95" />
      <col width="90" />
      <col width="80" />
      <col width="40" />
      <col width="60" />
     <col width="90" />
  </colgroup>
<tr>
    <td style="height:0 px"></td>
    <td style="height:0 px" colspan="2"><p dir="ltr"><center><strong>Use case</strong></center></p></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
    <td style="height:0 px"></td>
  </tr>
<tr>
      <td><p dir="ltr"><strong>Data shape</strong></p></td>
      <td><p dir="ltr"><strong>Total cluster <BR>data size</strong></p></td>
      <td><p dir="ltr"><strong>Per VM <BR>data capacity</strong></p></td>
      <td><p dir="ltr"><strong>vCPU/RAM</strong></p></td>
	  <td><p dir="ltr"><strong>EBS <br>Data <br>volumes</strong></p></td>
	      <td><p dir="ltr"><strong>Instance type</strong></p></td>
		  <td><p dir="ltr"><strong>Recommended</strong></p></td>
</tr>
<tr>
      <td rowspan="7"><p dir="ltr">Standard(1KB/row)</p></td>
      <td rowspan="2"><p dir="ltr">Up to 2 TB</p></td>
      <td rowspan="2"><p dir="ltr">250 GB</p></td>
      <td rowspan="2"><p dir="ltr">64/488</p></td>
		<td rowspan="2"><p dir="ltr">2X 1 TB</p></td>
	      <td><p dir="ltr">r4.16xlarge<sup>a</sup></p></td>
		<td><p dir="ltr"></p></td>
</tr>
<tr>
      <td><p dir="ltr">r5.16xlarge<sup>a</sup></p></td>
		<td><p dir="ltr"><b>✓</b></p></td>
</tr>
<tr>
      <td><p dir="ltr">&gt; 2 TB</p></td>
      <td><p dir="ltr">384 GB (Large)</p></td>
      <td><p dir="ltr">96/768</p></td>
		<td><p dir="ltr">2X 1.5 TB</p></td>
	      <td><p dir="ltr">r5.24xlarge</p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>
      <td rowspan="2"><p dir="ltr">Up to 100 GB</p></td>
      <td rowspan="2"><p dir="ltr">100 GB</p></td>
      <td rowspan="2"><p dir="ltr">32/244</p></td>
		<td rowspan="2"><p dir="ltr">2X 400 GB</p></td>
	      <td><p dir="ltr">r4.8xlarge<sup>b</sup></p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>    
	      <td><p dir="ltr">r5.8xlarge<sup>b</sup></p></td>
		<td><p dir="ltr"><b>✓</b></p></td>
    </tr>
<tr>
      <td rowspan="2"><p dir="ltr">Up to 20 GB</p></td>
      <td rowspan="2"><p dir="ltr">20 GB</p></td>
      <td rowspan="2"><p dir="ltr">16/122</p></td>
		<td rowspan="2"><p dir="ltr">2X 400 GB</p></td>
	      <td><p dir="ltr">r4.4xlarge<sup>b</sup></p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>
	      <td><p dir="ltr">r5.4xlarge<sup>b</sup></p></td>
		<td><p dir="ltr"><b>✓</b></p></td>
</tr>
    <tr>
      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt; 300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">192 GB</p></td>
      <td><p dir="ltr">96/384</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
		<td><p dir="ltr">m5.24xlarge</p></td>
		<td><p dir="ltr"></p></td>
    </tr>
<tr>
        <td colspan="8"><p dir="ltr">(a) Use the sizing calculators on each cloud provider to plug in expected customer discounts to arrive at the proper recommended cloud instance type.</p><p>(b) Use the small and medium instance-type configuration. Refer to: <a href="/appliance/cloud.html#use-small-and-medium-instance-types">Use small and medium instance types.</a></p><p>All instance types require a boot volume of 200 GB.</p>
        </td>
</tr>
  </table>
## Related information

- [EC2 instance types](https://aws.amazon.com/ec2/instance-types/)
- [EC2 pricing](https://aws.amazon.com/ec2/pricing/)
- [EBS pricing](https://aws.amazon.com/ebs/pricing/)
- [Placement groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
