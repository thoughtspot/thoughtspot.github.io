---
title: [GCP configuration options]
keywords: GCP, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot can be deployed in your GCP environment by deploying compute (VM) instances in your VPC as well as an underlying persistent storage infrastructure. Currently we support Zonal SSD persistent disk for persistent storage. For more information, see [Zonal Persistent disks](https://cloud.google.com/compute/docs/disks/#pdspecs){:target="_blank"} in Google's Cloud documentation.

All GCP VMs (nodes) in a ThoughtSpot cluster must be in the same zone
(and, therefore, also in the same region). ThoughtSpot does not support deploying VMs (nodes) of the same cluster across zones. For more information, see [Regions and Zones](https://cloud.google.com/compute/docs/regions-zones/){:target="_blank"} in Google's Cloud documentation.

## ThoughtSpot GCP instance types

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
      <td><p dir="ltr">Up to 3 TB </p></td>
      <td><p dir="ltr">208 GB</p></td>
      <td><p dir="ltr">n1-highmem-64</p></td>
      <td><p dir="ltr">64/416</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">&gt;3 TB</p></td>
      <td><p dir="ltr">312 GB</p></td>
      <td><p dir="ltr">n1-highmem-96</p></td>
      <td><p dir="ltr">96/624</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1.5 TB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">n1-highmem-32<sup>b</sup></p></td>
      <td><p dir="ltr">16/104</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">n1-highmem-16<sup>b</sup></p></td>
      <td><p dir="ltr">16/122</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    </tr>
    <tr>

      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">180 GB</p></td>
      <td><p dir="ltr">n1-standard-96</p></td>
      <td><p dir="ltr">96/330</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
    </tr>
	<tr>

      <td colspan="6"><p dir="ltr">(a) Use the sizing calculators on each cloud provider to plug in expected customer discounts to arrive at the proper recommended cloud instance type.</p><p>(b) Use the small and medium instance-type configuration. Refer to: <a href="/5.2/appliance/cloud.html#use-small-and-medium-instance-types">Use small and medium instance types.</a></p>
       </td>
    </tr>
  </table>

GCP provides several storage types and media options. ThoughtSpot requires [attached storage](https://cloud.google.com/compute/docs/disks/) and persistent disks.        
