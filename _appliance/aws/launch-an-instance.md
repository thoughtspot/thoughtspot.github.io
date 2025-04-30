---
title: [Set up AWS for ThoughtSpot]
keywords: AWS, AMI
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After you've determined your configuration options, you must set up your virtual machines (VMs) on AWS using a ThoughtSpot Amazon Machine Image (AMI). ThoughtSpot will share this AMI with you and work with you to set up the VMs in the AWS environment.

## Overview of ThoughtSpot setup in AWS
The high-level process for setting up ThoughtSpot in AWS is the following:
1. Contact ThoughtSpot support to get access to ThoughtSpot AMIs.
2. Choose a VM instance configuration recommended by ThoughtSpot.
3. Work with ThoughtSpot to set up your ThoughtSpot cluster.
4. Open the required network ports for communication for the nodes in your cluster and end users.
5. [Deploy your AWS instance using CloudFormation CLI.]({{ site.baseurl }}/appliance/aws/deploy-aws-cloud-formation.html)

## About the ThoughtSpot AMI

The ThoughtSpot AMI comes provisioned with the custom ThoughtSpot image to make deploying simple. An Amazon Machine image (AMI) is a preconfigured template that provides the information required to launch an instance. You must specify an AMI when you launch an instance in AWS. An AMI includes the following:

-   A template for the root volume for the instance (for example, an operating system, an appliance server, and applications).
-   Launch permissions that control which AWS accounts can use the AMI to launch instances.
-   A block device mapping that specifics the volumes to attach to the instance when it’s launch.

To get the latest version of the ThoughtSpot AMI, contact ThoughtSpot and provide your AWS account ID and region where the VMs will be hosted. ThoughtSpot will then provide the current ThoughtSpot base AMI to you.

The ThoughtSpot AMI has specific applications on a CentOS base image. The EBS volumes required to install ThoughtSpot in AWS are included in the AMI. When you launch an EC2 instance from this image, the EBS volumes are automatically sized and provisioned. The base AMI includes 200 GB (xvda), 2X400 GB (xvdb), and SSD (gp2). It contains the maximum number of disks so that it handle the full load of the VM.

##  Prerequisites

ThoughtSpot instances on AWS need AWS EC2 instances to be provisioned in the AWS account before ThoughtSpot can be installed and launched. Please make sure you follow the guidelines below for setting up your EC2 details:
- Contact ThoughtSpot support to get access to ThoughtSpot AMIs
- Choose the appropriate EC2 instance type: See [ThoughtSpot cloud instance types]({{ site.baseurl }}/appliance/cloud.html#thoughtspot-cloud-instance-types) for supported instance types.
- Networking requirements: 10GbE network bandwidth is needed between the VMs. This is the default for the VM type recommended by ThoughtSpot.
- Security: The VMs that are part of a cluster need to be accessible by each other, which means they need to be on the same Amazon Virtual Private Cloud (VPC) and subnetwork. Additional external access may be required to bring data in/out of the VMs to your network.
- Number of EC2 instances needed: Based on the datasets, this number will vary. Please check [ThoughtSpot cloud instance types]({{ site.baseurl }}/appliance/cloud.html#thoughtspot-cloud-instance-types) for recommended nodes for a given data size.
- Staging larger datasets (> 50 GB per VM), may require provisioning additional attached EBS volumes that are SSD (gp2).

## Setting up your ThoughtSpot cluster in AWS

To set up a ThoughtSpot cluster in AWS, do the following:

1. Log in to your AWS account from the [AWS Amazon sign in page](https://console.aws.amazon.com/console/home).
2. Provide ThoughtSpot support with your AWS account ID and the region where the VMs will be hosted.
   Support will grant you permissions and share the current ThoughtSpot base AMI with you.

    {% include note.html content="You can find your account ID and region on the top-right corner of the AWS console." %}

     ![]({{ site.baseurl }}/images/aws_account_id_region.png "AWS account ID and region")

3. Navigate to the EC2 service dashboard by clicking **Services**, then select **EC2**.

     ![]({{ site.baseurl }}/images/navigate_to_ec2_dashboard.png "Navigate to the EC2 Dashboard")

4. Make sure your selected region is correct in the top right corner of the dashboard.
   If not, select a different region you would like to launch your instance in. Let ThoughtSpot support know if you change your region.

     ![]({{ site.baseurl }}/images/select_region.png "Select a region to launch your instance in")

5. Start the process of launching a VM by clicking **Launch Instance**.

     ![]({{ site.baseurl }}/images/launch_instance.png "Launch an instance")

6. Click the **My AMIs** tab, find the ThoughtSpot AMI from the list, and click **Select**.

     ![]({{ site.baseurl }}/images/select_the%20ami.png "Select the AMI")

7. On the Choose and Instance Type page, select a ThoughtSpot-supported instance type.
   (See [ThoughtSpot cloud instance types]({{ site.baseurl }}/appliance/cloud.html#thoughtspot-cloud-instance-types) )        
8. Click **Next: Configure Instance Details**.
9. Configure the instances by choosing the number of EC2 instances you need.
   The instances need to be on the same VPC and subnetwork. ThoughtSpot will set up the instances to be in the same ThoughtSpot cluster.
10. Click **Next: Add Storage**.
    The default storage specified by the ThoughtSpot AMI should be populated. Optionally, you can add extra storage. Based on the dataset size requirement you might need to provision and prepare (formatting/file system placement) an extra storage of 400 GB per VM that is SSD gp2 provisioned.
11. Click **Next: Add Tags** when you are done modifying the storage size.
12. Set a name for tagging your instances and click **Next: Configure Security Group**.
13. Select an existing security group to attach new security groups to such that it meets the security requirements for ThoughtSpot.

    {{site.data.alerts.tip}} <b>Security setting for ThoughtSpot</b><ul><li>The VMs need intragroup security, i.e. every VM in a cluster needs to be accessible from one another. For easier configuration, it is recommended that you enable full access between VMs in a cluster.</li> <li>Additionally, more ports need to be opened on the VM to provide data staging capabilities to your network. Check [Network policies]({{ site.baseurl }}/appliance/firewall-ports.html) to determine the minimum required ports that must be opened for your ThoughtSpot appliance.</li></ul>
    {{site.data.alerts.end}}

14.  Click **Review and Launch**. After you have reviewed your instance launch details, click **Launch**.
15.  Choose a key pair.
      A key pair consists of a public and private key used to encrypt and decrypt login information. If you don’t have a key pair, you must create one, otherwise you won’t be able to SSH into the AWS instance later on.
16.  Click **Launch Instances**. Wait a few minutes for it to fully start up. Once it has started up, it will show up on the EC2 console.
17.  Contact ThoughtSpot support to complete your ThoughtSpot installation.
     They will set up the VM instances to be part of the cluster.
18.  When the setup is complete, you can load data into ThoughtSpot for search analytics.    

## Open the required network ports

See [Network policies]({{ site.baseurl }}/appliance/firewall-ports.html) for a complete list of network ports that must be open for traffic from end users as well as between ThoughtSpot nodes in a cluster.

## Related information  

[EC2 Best Practices](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html)
[Loading data from an AWS S3 bucket]({{site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-an-aws-s3-bucket)
