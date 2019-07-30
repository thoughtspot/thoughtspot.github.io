---
title: [Set up AWS for ThoughtSpot]
keywords: AWS, AMI
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After you've determined your configuration options, you must setup your virtual machines (VMs) using an Amazon Machine Image (AMI). This AMI will be shared with you by ThoughtSpot SRE liaison.


## About the ThoughtSpot AMI

The ThoughtSpot AMI comes provisioned with a custom ThoughtSpot image to make hosting simpler.  An AMI is a preconfigured template that provides the information required to launch an instance.  You must specify an AMI when you launch an instance. An AMI includes the following:

-   A template for the root volume for the instance (For example, an operating system, an appliance server, and applications).
-   Launch permissions that control which AWS accounts can use the AMI to launch instances.
-   A block device mapping that specifies the volumes to attach to the instance when it's launch.

The ThoughtSpot AMI has specific applications on an CentOS base image. The EBS volumes required for ThoughtSpot install in AWS comes as part of the AMI. When you launch an EC2 instance from this image, the EBS volumes automatically get sized and provisioned. The storage attached to the base AMI is 200 GB (xvda), 2X1 TB (xvdb), and SSD gp2. It contains the maximum size of disks and it can manage full load of the VM.

Please go through the section "Copy ThoughtSpot AMI to your region" to start commissioning your EC2 instances.

##  Launch an instance

Follow these steps to set up the VMs and launch ThoughtSpot.

### Overview

ThoughtSpot instances on AWS need AWS EC2 instances to be provisioned in the AWS account before ThoughtSpot can be installed and launched. Please make sure you follow the guidelines below for your EC2 details:

-   EC2 instance type: r4.16xlarge.
-   Networking requirement: 10GbE network is needed between the VMs. This is the default for the chosen VM type.
-   Security: VMs need to be accessible from each other, which means they need to be on the same Amazon Virtual Private Cloud (VPC) and subnetwork. Additional external access may be required to bring data in/out of the VMs to your network.
-   Number of EC2 instances needed: Based on the datasets, the number of EC2 instances needed will vary. Also for staging larger datasets (\> 50 GB per VM), there may be a need to provision additional attached EBS volumes that are SSD gp2 provisioned.


###  Copy ThoughtSpot AMI to your region

1. Log in to your AWS account from the [AWS Amazon sign in page](https://console.aws.amazon.com/console/home).
2. Copy the following ThoughtSpot public AMI which has been made available in N. California region to your AWS region:  
**AMI Name**: centos-golden-20171207-61be6ad-prod-small  
**AMI ID**: ami-f1151091  
**Region**: N. California

3. Navigate to the EC2 service dashboard by clicking **Services**, then select **EC2**.

     ![]({{ site.baseurl }}/images/navigate_to_ec2_dashboard.png "Navigate to the EC2 Dashboard")

4. Make sure your selected region is correct on the top right corner of the dashboard.
   If not, select a different region you would like to launch your instance in. Let ThoughtSpot Support know if you change your region.

     ![]({{ site.baseurl }}/images/select_region.png "Select a region to launch your instance in")

## Create an instance

1. Create an instance by clicking **Launch Instance**.

     ![]({{ site.baseurl }}/images/launch_instance.png "Launch an instance")

2. Select the appropriate AMI from the AMI Selection step by clicking **Select**.

   The ThoughtSpot shared AMI can be found under the **My AMIs** tab.

     ![]({{ site.baseurl }}/images/select_the%20ami.png "Select the AMI")

3. Select `r4.16xlarge` as the instance type.
4. Click **Next: Configure Instance Details**.
5. Configure the instances by choosing the number of EC2 instances you need based on your EC2 details.
   The instances need to be on the same VPC and subnetwork.
6. Click **Next: Add Storage**.
    The default storage specified by the ThoughtSpot AMI should be populated. Optionally, you can add extra storage. Based on the dataset size requirement you might need to provision and prepare (formatting/file system placement) an extra storage of 400 GB per VM that is SSD gp2 provisioned.
7. Click **Next: Add Tags** when you are done modifying the storage size.
8. Set a name for tagging your instances and click **Next: Configure Security Group**.
9. Select an existing security group to attach new security groups to such that it meets the security requirements for ThoughtSpot.

    {{site.data.alerts.tip}} <b>Security setting for ThoughtSpot</b><ul><li>The VMs need intragroup security, i.e. every VM in a cluster needs to be accessible from one another. For easier configuration, it is better to open all accesses from across VMs in a cluster.</li> <li>Additionally, more ports need to be opened on the VM to provide data staging capabilities to your network. Check the network ports reference to determine the minimum required ports that need to be opened for your ThoughtSpot appliance.</li></ul>
    {{site.data.alerts.end}}


10.  Click **Review and Launch**. After you have reviewed your instance launch details, click **Launch**.
11.  Choose a key pair.
      A key pair consists of a public and private key used to encrypt and decrypt login information. If you don’t have a key pair, you should create one, otherwise you won’t be able to SSH into the AWS instance later on.
12.  Click **Launch Instances**. Wait a few minutes for it to fully start up. Once it has started up, it will show up on the EC2 console.
13.  Contact ThoughtSpot Support to complete your ThoughtSpot installation.

## Related information  

[EC2 Best Practices](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html)
