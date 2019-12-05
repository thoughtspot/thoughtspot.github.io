---
title: [AWS configuration options]
last_updated: 10/09/2019
summary: "Your instances require specific configurations of memory, CPU, storage, and networking capacity."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot can be deployed in your AWS environment by deploying compute (VM) instances in your Amazon VPC as well as an underlying persistent storage infrastructure. Currently two configuration modes are supported by ThoughtSpot:
- Mode 1: Compute VMs + EBS-only persistent storage
- Mode 2: Compute VMs + EBS and S3 persistent storage

The cost of infrastructure for deploying ThoughtSpot is cheaper when using S3. However, there are differences in where data is loaded, as well as in the backup and restore procedure.  For assistance in choosing the best mode for your organization, contact your ThoughtSpot representative. For more information on purchasing ThoughtSpot on AWS, see: [ThoughtSpot Pricing](https://www.thoughtspot.com/pricing){:target="_blank"}.

All AWS VMs in a ThoughtSpot cluster must be in the same availability zone (and therefore, also in the same region). ThoughtSpot does not support deploying VMs in the same cluster across availability zones. For more information, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html){:target="_blank"} in Amazon's AWS documentation.

{: id="ts-aws-instance-types" }
## ThoughtSpot AWS instance types

The following sections contain the supported and recommended instance types for a ThoughtSpot AWS deployment. When setting up your cluster in AWS, use the information here to select an instance type, configure the number of instances required for the storage you need, and add data volumes to your cluster.

For example: If you were deploying a total cluster data size of 1 TB using the standard r5.16xlarge instance type, you would need 4 instances (VMs), because the per-VM user data capacity of that instance type is 250 GB. If you were deploying EBS-only data volumes, you would need 2x1 TB data volumes per VM.

{: id="vm-ebs-only-persistent-storage" }
### VMs with EBS-only persistent storage

![]({{ site.baseurl }}/images/persistent-storage-ebs.svg "AWS EBS-only Persistent Storage")

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM EBS volume |
| --- | --- | --- |--- |
| 20 GB | r4.4xlarge, r5.4xlarge | 16/122, 16/128 | 2X 400 GB |
| 100 GB | r4.8xlarge, r5.8xlarge | 32/244, 32/256 | 2X 400 GB |
| 192 GB | m5.24xlarge | 96/384 | 2X 1 TB |
| 250 GB | r4.16xlarge, r5.16xlarge | 64/488, 64/512 | 2x 1 TB |
| 384 GB | r5.24xlarge | 96/768 | 2X 1.5 TB |

{: id="vm-ebs-s3-persistent-storage"}
### VMs with EBS and S3 persistent storage

![]({{ site.baseurl }}/images/persistent-storage-ebs-s3.svg "AWS EBS and S3 Persistent Storage")

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM EBS volume |
| --- | --- | --- |--- |
| 20 GB | r4.4xlarge, r5.4xlarge | 16/122, 16/128 | 1x 500 GB |
| 100 GB | r4.8xlarge, r5.8xlarge | 32/244, 32/256 | 1x 500 GB |
| 192 GB | m5.24xlarge | 96/384 | 1x 500 GB |
| 250 GB | r4.16xlarge, r5.16xlarge | 64/488, 64/512 | 1x 500 GB |
| 384 GB | r5.24xlarge | 96/768 | 1x 500 GB |

{% include note.html content="The S3 bucket size is approximately equal to the size of the user data." %}

{: id="related"}
## Related information

- [EC2 instance types](https://aws.amazon.com/ec2/instance-types/)
- [EC2 pricing](https://aws.amazon.com/ec2/pricing/)
- [EBS pricing](https://aws.amazon.com/ebs/pricing/)
- [Placement groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)
