---
title: [Cloud overview]
keywords: setup,cluster,cloud,aws,azure,gcp
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
TBD

## ThoughtSpot Cloud instance types
<table width="1182">
    <colgroup>
      <col width="92" />
      <col width="144" />
      <col width="144" />
      <col width="105" />
      <col width="147" />
      <col width="95" />
    </colgroup>
    <tr>
      <td><br /></td>
      <td colspan="2"><p dir="ltr"><strong>Use case</strong></p></td>
      <td><br /></td>
      <td><br /></td>
      <td><br /></td>
    </tr>
    <tr>
      <td><p dir="ltr">Cloud Provider</p></td>
      <td><p dir="ltr">Data shape</p></td>
      <td><p dir="ltr">Total cluster data size</p></td>
      <td><p dir="ltr">Per VM Data capacity</p></td>
      <td><p dir="ltr">Recommended Instance type </p></td>
      <td><p dir="ltr">CPU/RAM</p></td>
    </tr>
    <tr>
      <td><p dir="ltr">AWS</p></td>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">Up to 2TB </p></td>
      <td><p dir="ltr">250GB</p></td>
      <td><p dir="ltr">r4.16xlargea</p></td>
      <td><p dir="ltr">64/488</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">&gt; 2TB</p></td>
      <td><p dir="ltr">384GB (Large)</p></td>
      <td><p dir="ltr">r5.24xlargeb</p></td>
      <td><p dir="ltr">96/768</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 100GB</p></td>
      <td><p dir="ltr">100GB</p></td>
      <td><p dir="ltr">r4.8xlargec</p></td>
      <td><p dir="ltr">32/244</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 20GB</p></td>
      <td><p dir="ltr">20GB</p></td>
      <td><p dir="ltr">r4.4xlargec</p></td>
      <td><p dir="ltr">16/122</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">192GB</p></td>
      <td><p dir="ltr">m5.24xlargeb</p></td>
      <td><p dir="ltr">96/384</p></td>
    </tr>
    <tr>
      <td><p dir="ltr">Azure</p></td>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">&gt;100GB</p></td>
      <td><p dir="ltr">200GB</p></td>
      <td><p dir="ltr">E64sv3</p></td>
      <td><p dir="ltr">64/416</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 100GB</p></td>
      <td><p dir="ltr">100GB</p></td>
      <td><p dir="ltr">E32sv3c</p></td>
      <td><p dir="ltr">32/256</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 20GB</p></td>
      <td><p dir="ltr">20GB</p></td>
      <td><p dir="ltr">E16sv3c</p></td>
      <td><p dir="ltr">16/128</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">120GB</p></td>
      <td><p dir="ltr">D64v3b</p></td>
      <td><p dir="ltr">64/256</p></td>
    </tr>
    <tr>
      <td><p dir="ltr">GCP</p></td>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">Up to 3TB</p></td>
      <td><p dir="ltr">208GB</p></td>
      <td><p dir="ltr">n1-highmem-64</p></td>
      <td><p dir="ltr">64/416</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">&gt;3TB</p></td>
      <td><p dir="ltr">312GB</p></td>
      <td><p dir="ltr">n1-highmem-96</p></td>
      <td><p dir="ltr">96/624</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 100GB</p></td>
      <td><p dir="ltr">100GB</p></td>
      <td><p dir="ltr">n1-highmem-32c</p></td>
      <td><p dir="ltr">32/208</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 20GB</p></td>
      <td><p dir="ltr">20GB</p></td>
      <td><p dir="ltr">n1-highmem-16c</p></td>
      <td><p dir="ltr">16/104</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">180GB</p></td>
      <td><p dir="ltr">n1-standard-96</p></td>
      <td><p dir="ltr">96/360</p></td>
    </tr>
  </table>
## Small and medium instance types

## Cluster Shutdown and restart

## Load data from AWS S3

This guide instructs you how to prepare each of the following cloud deployments:

- [Amazon Web Services (AWS) EC2 node]({{ site.baseurl }}/appliance/aws/about-aws.html)
- [Azure node]({{ site.baseurl }}/appliance/azure/about-azure.html)
- [Google Cloud Platform (GCP) node]({{ site.baseurl }}/appliance/gcp/about-gcp.html)

Once you've configured your nodes, you can contact [ThoughtSpot
Support]({{ site.baseurl }}/appliance/contact.html) by phone, mail, email, or by filing a support ticket.
