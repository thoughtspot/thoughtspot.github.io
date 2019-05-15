---
title: [Cloud overview]
keywords: setup,cluster,cloud,aws,azure,gcp
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot currently supports the following cloud deployments:

- [Amazon Web Services (AWS) EC2]({{ site.baseurl }}/appliance/aws/about-aws.html)
- [Microsoft Azure]({{ site.baseurl }}/appliance/azure/about-azure.html)
- [Google Cloud Platform (GCP)]({{ site.baseurl }}/appliance/gcp/about-gcp.html)

This page provides recommendations and best practices for ThoughtSpot cloud deployments, including how to set up your ThoughtSpot instance and how to reduce infrastructure costs.

## ThoughtSpot cloud instance types

This table provides guidelines on how to set up ThoughtSpot on each cloud service.

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
    </tr>
    <tr>
      <td><p dir="ltr"><strong>Cloud Provider</strong></p></td>
      <td><p dir="ltr"><strong>Data shape</strong></p></td>
      <td><p dir="ltr"><strong>Total cluster <BR>data size</strong></p></td>
      <td><p dir="ltr"><strong>Per VM <BR>Data capacity</strong></p></td>
      <td><p dir="ltr"><strong>Recommended <BR>Instance type</strong></p></td>
      <td><p dir="ltr"><strong>CPU/RAM</strong></p></td>
    </tr>
    <tr>
      <td><p dir="ltr"><strong>AWS</strong></p></td>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">Up to 2 TB </p></td>
      <td><p dir="ltr">250 GB</p></td>
      <td><p dir="ltr">r4.16xlargea</p></td>
      <td><p dir="ltr">64/488</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">&gt;2 TB</p></td>
      <td><p dir="ltr">384 GB (Large)</p></td>
      <td><p dir="ltr">r5.24xlargeb</p></td>
      <td><p dir="ltr">96/768</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">r4.8xlargec</p></td>
      <td><p dir="ltr">32/244</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">r4.4xlargec</p></td>
      <td><p dir="ltr">16/122</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">192 GB</p></td>
      <td><p dir="ltr">m5.24xlargeb</p></td>
      <td><p dir="ltr">96/384</p></td>
    </tr>
    <tr>
      <td><p dir="ltr"><strong>Azure</strong></p></td>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">&gt;100 GB</p></td>
      <td><p dir="ltr">200 GB</p></td>
      <td><p dir="ltr">E64sv3</p></td>
      <td><p dir="ltr">64/416</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">E32sv3c</p></td>
      <td><p dir="ltr">32/256</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">E16sv3c</p></td>
      <td><p dir="ltr">16/128</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">120 GB</p></td>
      <td><p dir="ltr">D64v3b</p></td>
      <td><p dir="ltr">64/256</p></td>
    </tr>
    <tr>
      <td><p dir="ltr"><strong>GCP</strong></p></td>
      <td><p dir="ltr">Standard</p>
        <p dir="ltr">(1KB/row)</p></td>
      <td><p dir="ltr">Up to 3 TB</p></td>
      <td><p dir="ltr">208 GB</p></td>
      <td><p dir="ltr">n1-highmem-64</p></td>
      <td><p dir="ltr">64/416</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">&gt;3 TB</p></td>
      <td><p dir="ltr">312 GB</p></td>
      <td><p dir="ltr">n1-highmem-96</p></td>
      <td><p dir="ltr">96/624</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 100 GB</p></td>
      <td><p dir="ltr">100 GB</p></td>
      <td><p dir="ltr">n1-highmem-32c</p></td>
      <td><p dir="ltr">32/208</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><br /></td>
      <td><p dir="ltr">Up to 20 GB</p></td>
      <td><p dir="ltr">20 GB</p></td>
      <td><p dir="ltr">n1-highmem-16c</p></td>
      <td><p dir="ltr">16/104</p></td>
    </tr>
    <tr>
      <td><br /></td>
      <td><p dir="ltr">Thin rows</p>
        <p dir="ltr">(&lt;300 bytes/row)</p></td>
      <td><p dir="ltr">Any</p></td>
      <td><p dir="ltr">180 GB</p></td>
      <td><p dir="ltr">n1-standard-96</p></td>
      <td><p dir="ltr">96/360</p></td>
    </tr>
  </table>

## Reducing your cloud infrastructure costs

ThoughtSpot recommends following these guidelines to help reduce the cost of your cloud deployment.  

### Use small and medium instance types

For ThoughtSpot customers who are deploying their instance with lower data sizes (<=100 GB), ThoughtSpot supports “small” (20 GB data) and “medium” (100 GB data) instance types as shown in the table above to help reduce cost of cloud infrastructure. These are instances with lower CPU/RAM sizes (16/32 vCPU and 128 GB/256 RAM). Additional configuration is required before any data can be loaded onto these instances.

Please contact ThoughtSpot support for assistance with this configuration.

### Shut down and restart your cluster

If you do not need your ThoughtSpot cluster to be up and running 24/7, you can shut down your cluster and restart it during normal usage hours to save on the infrastructure costs of running ThoughtSpot instances in cloud provider environments.

To shut down and restart your cluster, do the following in the tscli:

1. Ensure there are no issues with the cluster by running: `$ tscli cluster check`

   The above command should return no failure messages.

2. Stop the cluster by running: `$ tscli cluster stop`

   Wait until you see the message: “Done stopping cluster”

3. Go to your cloud provider's console and shut down all of the ThoughtSpot VMs in your cluster.

4. When you are ready to use ThoughtSpot again, restart your cluster by running:
	`$ tscli cluster start`

   You should see the message: ”Started pre-existing cluster”

   Depending on the size of your cluster, you may need to wait several minutes before the system is up and running. Make sure you budget for this startup time to ensure that the system is fully operational before you expect people to use it.

5. Ensure that your cluster is ready for use by running:
	`$ tscli cluster status`

	The following messages are displayed to indicate your cluster is up and running: <br> 	
  `...`
  `Cluster: RUNNING` <br>
  `Database: READY` <br>
  `Search Engine: READY`
