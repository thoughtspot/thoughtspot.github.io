---
title: [Set up AWS for ThoughtSpot]

last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After you've determined your configuration options, you must set up your virtual machines (VMs) on AWS using a ThoughtSpot Amazon Machine Image (AMI). Please read further for next steps.

## Overview of ThoughtSpot setup in AWS
The high-level process for setting up ThoughtSpot in AWS is the following:
1. Gain access to ThoughtSpot AMIs.
2. Choose a VM instance configuration recommended by ThoughtSpot.
3. Set up your Amazon S3 bucket (optional).
4. Set up your ThoughtSpot cluster in AWS.
3. Contact ThoughtSpot to finish setting up your cluster.
4. Open the required network ports for communication for the nodes in your cluster and end users.

## About the ThoughtSpot AMI

The ThoughtSpot AMI comes provisioned with the custom ThoughtSpot image to make deploying simple. An Amazon Machine image (AMI) is a preconfigured template that provides the information required to launch an instance. You must specify an AMI when you launch an instance in AWS. An AMI includes the following:

-   A template for the root volume for the instance (for example, an operating system, an appliance server, and applications).
-   Launch permissions that control which AWS accounts can use the AMI to launch instances.
-   A block device mapping that specifics the volumes to attach to the instance when it’s launch.

The ThoughtSpot AMI has specific applications on a CentOS base image. The EBS volumes required to install ThoughtSpot in AWS are included in the AMI. When you launch an EC2 instance from this image, the EBS volumes are automatically sized and provisioned. The base AMI includes 200 GB (xvda), 2X400 GB (xvdb), and SSD (gp2). It contains the maximum number of disks so that it handle the full load of the VM.

## Prerequisites

To install and launch ThoughtSpot, you must have the following:
- Familiarity with Linux administration, and a general understanding of cloud deployment models.
- The necessary AWS Identity and Access Management (IAM) users and roles assigned to you to access and deploy the various AWS resources and services as defined in the Required AWS components section that follows.  
  For more information about IAM, see: [What Is IAM?](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html){:target="_blank"} in Amazon's AWS documentation.

### Required AWS components

- An AWS VPC. For details, see [VPC and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html){:target="_blank"} in Amazon's AWS documentation.
- A ThoughtSpot AMI. For details, see the next section.
- AWS security groups. For required open ports, see [network policies]({{ site.baseurl }}/appliance/firewall-ports.html).
- AWS VM instances. For instance type recommendations, see [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types).
- EBS volumes.
- (Optional) If deploying with S3 persistent storage, one S3 bucket dedicated to each ThoughtSpot cluster.

### Guidelines for setting up your EC2 instances

- Sign in to your [AWS account](https://console.aws.amazon.com/console/home).
- Copy the following ThoughtSpot public AMI which has been made available in N. California region to your AWS region:  
**AMI Name**: thoughtspot-image-20190718-dda1cc60a58-prod   
**AMI ID**: ami-0b23846e4761375f1  
**Region**: N. California
- Choose the appropriate EC2 instance type: See [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types) for supported instance types.
- Networking requirements: 10 GbE network bandwidth is needed between the VMs. This is the default for the VM type recommended by ThoughtSpot.
- Security: The VMs that are part of a cluster need to be accessible by each other, which means they need to be on the same Amazon Virtual Private Cloud (VPC) and subnetwork. Additional external access may be required to bring data in/out of the VMs to your network.
- Number of EC2 instances needed: Based on the datasets, this number will vary. Please check [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types) for recommended nodes for a given data size.
- Staging larger datasets (> 50 GB per VM), may require provisioning additional attached EBS volumes that are SSD (gp2).

## (Optional) Setting up your Amazon S3 bucket

If you are going to deploy your cluster using the S3-storage option, you must set up that bucket before you set up your cluster. Contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#) to find out if your specific cluster size will benefit from the S3 storage option.

To set up an Amazon S3 bucket in AWS, do the following:

1. In AWS, navigate to the S3 service dashboard by clicking **Services**, then **S3**.

2. Make sure the selected region in the top-right corner of the dashboard is the same region in which you plan to set up your cluster.

3. Click **Create bucket**.

4. In the Name and region page, enter a name for your bucket, select the region where you will set up your cluster, and click **Next**.

5. On the Properties page, click **Next**.

6. On the Configure options page, make sure **Block *all* public access** is selected and click **Next**.

7. On the Set permissions page, click **Create bucket**.

## (Optional) Encrypting your data at rest on Amazon EBS or S3 in AWS

ThoughtSpot makes use of EBS for the data volumes to store persistent data (in the EBS deployment model) and the boot volume (in the EBS and S3 deployment models). ThoughtSpot recommends that you encrypt your data volumes prior to setting up your ThoughtSpot cluster.
If you are using the S3 persistent storage model, you can encrypt the S3 buckets using SSE-S3. ThoughtSpot does not currently support AWS KMS encryption for AWS S3.  

For more information on encryption supported with AWS:
- For EBS, see [Amazon EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html){:target="_blank"} in Amazon's AWS documentation.  
- For S3, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html){:target="_blank"} in Amazon's AWS documentation.

## Setting up your ThoughtSpot cluster in AWS

To set up a ThoughtSpot cluster in AWS, do the following:

1. In AWS, navigate to the EC2 service dashboard by clicking **Services**, then **EC2**.

     ![]({{ site.baseurl }}/images/navigate_to_ec2_dashboard.png "Navigate to the EC2 Dashboard")

2. Make sure your selected region is correct in the top-right corner of the dashboard.
   If not, select a different region you would like to launch your instance in. Let ThoughtSpot support know if you change your region.

3. Start the process of launching a VM by clicking **Launch Instance**.

     ![]({{ site.baseurl }}/images/launch_instance.png "Launch an instance")

4. Click the **My AMIs** tab, find the ThoughtSpot AMI from the list, and click **Select**.

5. On the Choose an Instance Type page, select a ThoughtSpot-supported instance type.
   (See [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types).)

6. Click **Next: Configure Instance Details**.

7. Configure the instances by choosing the number of EC2 instances you need.
   The instances must be on the same VPC and subnetwork. ThoughtSpot will set up the instances to be in the same ThoughtSpot cluster.  

   **S3 storage setting**: If you are going to use the S3 storage option, you must go to the **IAM role** menu and select **ec2rolewithfulls3access**. This setting gives your instance access to all S3 buckets in your account's region. If you want to restrict the access to a specific bucket, you must create a new IAM role that provides access to the specific bucket, and select it instead. For details on that, click **Create new IAM role**.

8. Click **Next: Add Storage**.
   Add the required storage based on the storage requirements of the instance type you have selected, and the amount of data you are deploying. For specific storage requirements, refer to [ThoughtSpot AWS instance types]({{ site.baseurl }}/appliance/aws/configuration-options.html#thoughtspot-aws-instance-types).

9. When you are done modifying the storage size, Click **Next: Add Tags**.

10. Set a name for tagging your instances and click **Next: Configure Security Group**.

11. Select an existing security group to attach new security groups to so that it meets the security requirements for ThoughtSpot.

    {{site.data.alerts.tip}} <b>Security setting for ThoughtSpot</b><ul><li>The VMs need intragroup security, i.e. every VM in a cluster must be accessible from one another. For easier configuration, ThoughtSpot recommends that you enable full access between VMs in a cluster.</li> <li>Additionally, more ports must be opened on the VM to provide data staging capabilities to your network. Check <a href="https://docs.thoughtspot.com/5.2/appliance/firewall-ports.html">Network policies</a> to determine the minimum required ports that must be opened for your ThoughtSpot appliance.</li></ul>
    {{site.data.alerts.end}}

12.  Click **Review and Launch**. After you have reviewed your instance launch details, click **Launch**.

13.  Choose a key pair.
      A key pair consists of a public and private key used to encrypt and decrypt login information. If you don’t have a key pair, you must create one, otherwise you won’t be able to SSH into the AWS instance later on.

14.  Click **Launch Instances**. Wait a few minutes for it to fully start up. After it starts, it will appear on the EC2 console.

15. SSH as `admin` into the IP address of the instance, using the password: `Th0ughtSp0t`.

16. Prepare your storage for use with your cluster, by running this command:  
`sudo /usr/local/scaligent/bin/prepare_disks.sh`.

    When complete, your storage is mounted and ready for use with your cluster.

17.  Contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#) to complete your ThoughtSpot installation.
     They will set up the VM instances to be part of your cluster. If you created an S3 bucket to use for storage, tell them the name of your bucket.

18.  When the setup is complete, you can load data into ThoughtSpot for search analytics.    

## Open the required network ports

To determine which network ports to open for a functional ThoughtSpot cluster, see [Network policies]({{ site.baseurl }}/appliance/firewall-ports.html).

## Related information  

[EC2 Best Practices](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html)  
[Loading data from an AWS S3 bucket]({{site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-an-aws-s3-bucket)
