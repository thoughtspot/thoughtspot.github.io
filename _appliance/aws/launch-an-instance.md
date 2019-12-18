---
title: [Set up AWS Resources for ThoughtSpot]
last_updated: 12/17/2019
sidebar: mydoc_sidebar
summary: "After you determine your configuration options, you must set up your virtual machines (VMs) on AWS using a ThoughtSpot Amazon Machine Image (AMI)."
permalink: /:collection/:path.html
---
{: id="aws-overview"}
## Overview of ThoughtSpot setup in AWS
Follow these steps to set up your ThoughtSpot VMs on AWS.
<table>
<tr>
  <td>&#10063;</td>
  <td><a href="launch-an-instance#ec2-setup">1. Gain access to ThoughtSpot's AMI.</a></td></tr>
<tr>
  <td>&#10063;</td>
  <td><a href="launch-an-instance#ec2-setup">2. Choose a VM instance configuration recommended by ThoughtSpot.</a></td></tr>
<tr>
  <td>&#10063;</td>
  <td><a href="launch-an-instance#s3-bucket-setup">3. Set up your Amazon S3 bucket (optional).</a></td></tr>
<tr>
  <td>&#10063;</td>
  <td><a href="launch-an-instance#aws-ts-setup-cluster">4. Set up your ThoughtSpot cluster in AWS.</a></td></tr>
<tr>
  <td>&#10063;</td>
  <td><a href="launch-an-instance#security-groups">5. Configure security groups.</a></td></tr>
<tr>
  <td>&#10063;</td>
  <td><a href="launch-an-instance#network-ports">6. Open the required network ports for communication for the nodes in your cluster and end users.</a></td></tr>
<tr>
  <td>&#10063;</td>
  <td><a href="launch-an-instance#install-cluster">7. Configure your nodes and install the cluster.</a></td></tr>
</table>

{: id="prerequisites"}
## About the ThoughtSpot AMI

An Amazon Machine image (AMI) is a preconfigured template that provides the information required to launch an instance. You must specify an AMI when you launch an instance in AWS.

To make deployment easy, the ThoughtSpot AMI includes a custom ThoughtSpot image, with the following components:

-   A template for the root volume for the instance, such as an operating system, an appliance server, and applications.
-   Launch permissions that control which AWS accounts can use the AMI to launch instances.
-   A block device mapping that specifies the volumes to attach to the instance when it launches.

The ThoughtSpot AMI has specific applications on a CentOS base image. The AMI includes the EBS volumes necessary to install ThoughtSpot in AWS. When you launch an EC2 instance from this image, it automatically sizes and provisions the EBS volumes. The base AMI includes 200 GB (xvda), 2X400 GB (xvdb), and SSD (gp2). It contains the maximum number of disks to handle a fully loaded VM.

{: id="prerequisites"}
## Prerequisites

To install and launch ThoughtSpot, you must have the following:
<table>
  <tr>
    <td>&#10063;</td>
    <td>Familiarity with Linux administration, and a general understanding of cloud deployment models.</td></tr>
  <tr>
    <td>&#10063;</td>
    <td>The necessary AWS Identity and Access Management (IAM) users and roles assigned to you to access and deploy the various AWS resources and services as defined in the Required AWS components section that follows.</td></tr>
</table>
  For more information about IAM, see: [What Is IAM?](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html){:target="_blank"} in Amazon's AWS documentation.

{: id="aws-required"}
### Required AWS components

<table>
  <tr>
    <td>&#10063;</td>
    <td>An AWS Virtual Private Cloud (VPC). An AWS VPC is a virtual network specifically for your AWS account. It exists in all availability zones in your region, but you can specify a local zone for even lower latency. For more details, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html" target="_blank">VPCs and Subnets</a> in Amazon's AWS documentation.</td></tr>
  <tr>
    <td>&#10063;</td>
    <td>A ThoughtSpot AMI. For details, see <a href="launch-an-instance#ec2-setup">Setting up your EC2 instances</a>. </td></tr>
  <tr>
    <td>&#10063;</td>
    <td> AWS security groups. For required open ports, see <a href="/appliance/firewall-ports.html">Network Policies</a>.</td></tr>
  <tr>
    <td>&#10063;</td>
    <td> AWS VM instances. For instance type recommendations, see <a href="/appliance/aws/configuration-options.html#ts-aws-instance-types">ThoughtSpot AWS instance types</a>.</td></tr>
  <tr>
    <td>&#10063;</td>
    <td> EBS volumes for data storage.</td></tr>
  <tr>
    <td>&#10063;</td>
    <td>(Optional) If deploying with S3 persistent storage, you need one S3 bucket for each ThoughtSpot cluster.</td></tr>
</table>    

{: id="ec2-setup"}
### Setting up your EC2 instances

1. Sign into your [AWS account](https://console.aws.amazon.com/console/home).
2. Copy the following ThoughtSpot public AMI to your AWS region:  
**AMI Name**: thoughtspot-image-20190814-dcbd20d0e36-prod   
**AMI ID**: ami-04b9b321ab752a297  
**Region**: Oregon
    {% include note.html content="The AMI is based in the Oregon region. You may have to temporarily switch to the Oregon region on the AWS website to access it. Then you can return to your own region." %}
    {% include note.html content="The AMI is backward-compatible with ThoughtSpot releases 5.1.x - 6.0.x." %}
3. Choose the appropriate EC2 instance type: See [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#ts-aws-instance-types) for help choosing the correct instance type for your cluster.
4. Networking requirements: 10 GbE network bandwidth is needed between the VMs. Ensure that you have this bandwidth.
5. Ensure that all your VMs are on the same Amazon Virtual Private Cloud (VPC) and subnetwork. This is necessary because VMs that are part of a cluster need to be accessible by each other.  Additional external access may be required to bring data in/out of the VMs to your network.
6. Determine the number of EC2 instances you need: Based on the datasets, this number will vary. Refer to [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types) for recommended nodes for a given data size.

{% include note.html content="Staging larger datasets (> 50 GB per VM), may require provisioning additional attached EBS volumes that are SSD (gp2)." %}

{: id="s3-bucket-setup"}
## Setting up your Amazon S3 bucket (recommended)

If you are going to deploy your cluster using the S3-storage option, you must set up that bucket before you set up your cluster. Contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#) to find out if your specific cluster size will benefit from the S3 storage option.

Follow these steps to set up an S3 bucket in AWS.

1. On the AWS website, navigate to the S3 service dashboard by clicking **Services**, then **S3**.

2. Make sure the selected region in the top-right corner of the dashboard is the same region in which you plan to set up your cluster.

3. Click **Create bucket**.

4. In the **Name and region** page, enter a name for your bucket.

5. Select your region.

6. Click **Next**.

5. On the **Properties** page, click **Next**.

6. On the Configure options page, ensure that **Block *all* public access** is selected.

7. Click **Next**.

7. On the Set permissions page, click **Create bucket**.

{: id="encrypt"}
## Encrypting your data at rest

ThoughtSpot makes use of EBS for the data volumes to store persistent data (in the EBS deployment model) and the boot volume (in the EBS and S3 deployment models). ThoughtSpot recommends that you encrypt your data volumes prior to setting up your ThoughtSpot cluster.
If you are using the S3 persistent storage model, you can encrypt the S3 buckets using SSE-S3 or AWS KMS.

For more information on encryption supported with AWS:
- For EBS, see [Amazon EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html){:target="_blank"} in Amazon's AWS documentation.  
- For S3, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html){:target="_blank"} in Amazon's AWS documentation.

{: id="aws-ts-setup-cluster"}
## Setting up your ThoughtSpot cluster in AWS

To set up a ThoughtSpot cluster in AWS, follow these steps:

1. On the AWS website, navigate to the EC2 service dashboard by clicking **Services**, then **EC2**.

     ![]({{ site.baseurl }}/images/navigate_to_ec2_dashboard.png "Navigate to the EC2 Dashboard")

2. Make sure your selected region is correct in the top-right corner of the dashboard.
   If not, select your region. Let ThoughtSpot support know if you change your region.

3. Start the process of launching a VM by clicking **Launch Instance**.

     ![]({{ site.baseurl }}/images/launch_instance.png "Launch an instance")

4. Click the **My AMIs** tab and search **ThoughtSpot** to find the ThoughtSpot AMI.

5. Click **Select**.

5. On the **Choose an Instance Type** page, select a ThoughtSpot-supported instance type.
   (See [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types).)

6. Click **Next: Configure Instance Details**.

7. Configure the instances by choosing the number of EC2 instances you need.
   The instances must be on the same VPC and subnetwork. ThoughtSpot sets up the instances to be in the same ThoughtSpot cluster.  

   **S3 storage setting**: If you are going to use the S3 storage option, you must go to the **IAM role** menu and select **ec2rolewithfulls3access**. This setting gives your instance access to all S3 buckets in your account's region. ThoughtSpot recommends that you restrict access to a specific S3 bucket. Create a new IAM role that provides access to the specific bucket, and select it. For details on that, click **Create new IAM role**.

8. Click **Next: Add Storage**.
   Add the required storage based on your instance type (either EBS volumes or S3), and the amount of data you are deploying. For specific storage requirements, refer to [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types).

9. When you are done modifying the storage size, Click **Next: Add Tags**.

10. Set a name for tagging your instances. This tag allows you to identify your instance more easily.

{: id="security-groups"}
## Configure security groups

11. Click **Next: Configure Security Group**.

11. Select an existing security group to attach new security groups to so that it meets the security requirements for ThoughtSpot.

    {{site.data.alerts.tip}} <b>Security setting for ThoughtSpot</b><ul><li>The VMs need intragroup security, i.e. every VM in a cluster must be accessible from one another. For easier configuration, ThoughtSpot recommends that you enable full access between VMs in a cluster.</li> <li>Additionally, more ports must be opened on the VM to provide data staging capabilities to your network. Check <a href="https://docs.thoughtspot.com/5.2/appliance/firewall-ports.html">Network policies</a> to determine the minimum required ports you must open for your ThoughtSpot appliance.</li></ul>
    {{site.data.alerts.end}}

12.  Click **Review and Launch**.

13. After you have reviewed your instance launch details, click **Launch**.

13.  Choose a key pair.
      A key pair consists of a public and private key used to encrypt and decrypt login information. If you don’t have a key pair, you must create one. Without a key pair, you cannot SSH into the AWS instance later on.

14.  Click **Launch Instances**. Wait a few minutes for it to fully start up. After it starts, it will appear on the EC2 console.

## Prepare the VMs

Before installing a ThoughtSpot cluster, an administrator must [prepare the VMs.]({{ site.baseurl }}/appliance/aws/aws-prepare-vms.html)
