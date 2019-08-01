---
title: [Azure configuration options]
keywords: Azure, configuration
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot can be deployed in your Azure environment by deploying compute (VM) instances in your VNET as well as an underlying persistent storage infrastructure. Currently we support Premium SSD Managed Disks for persistent storage. For more information, see [Managed Disks pricing](https://azure.microsoft.com/en-us/pricing/details/managed-disks/){:target="_blank"} in Microsoft's Azure documentation.

All Azure VMs (nodes) in a ThoughtSpot cluster must be in the same availability zone
(and, therefore, also in the same region). ThoughtSpot does not support deploying VMs( nodes) of the same cluster across availability zones. For more information, see [What are Availability Zones in Azure?](https://docs.microsoft.com/en-us/azure/availability-zones/az-overview){:target="_blank"} in Microsoft's Azure documentation.

## ThoughtSpot Azure instance types

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
      <td><p dir="ltr">>100 GB </p></td>
      <td><p dir="ltr">200 GB</p></td>
      <td><p dir="ltr">E64sv3</p></td>
      <td><p dir="ltr">64/416</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">E32sv3<sup>b</sup></p></td>
      <td><p dir="ltr">32/256</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    </tr>
    <tr>
      <td><br /></td>

      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">E16sv3<sup>b</sup></p></td>
      <td><p dir="ltr">16/128</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 400 GB</p></td>
    </tr>

    <tr>

      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">120 GB</p></td>
      <td><p dir="ltr">D64v3</p></td>
      <td><p dir="ltr">64/256</p></td>
		<td><p dir="ltr">200 GB</p></td>
		<td><p dir="ltr">2X 1 TB</p></td>
    </tr>
	<tr>

      <td colspan="6"><p dir="ltr">(a) Use the sizing calculators on each cloud provider to plug in expected customer discounts to arrive at the proper recommended cloud instance type.</p><p>(b) Use the small and medium instance-type configuration. Refer to: <a href="/5.2/appliance/cloud.html#use-small-and-medium-instance-types">Use small and medium instance types.</a></p>
       </td>
    </tr>
  </table>
