---
title: [elephants]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About the AMI

An AMI is a preconfigured template that provides the information required to launch an instance. Check with your ThoughtSpot contact to learn about the latest version of the ThoughtSpot AMI.

You must specify an AMI when you launch an instance. An AMI includes the following:

-   A template for the root volume for the instance (for example, an operating system, an appliance server, and applications).
-   Launch permissions that control which AWS accounts can use the AMI to launch instances.

-   A block device mapping that specifics the volumes to attach to the instance when it's launch.

## About ThoughtSpot's AMI

The ThoughtSpot AMI comes provisioned with the custom ThoughtSpot image to make hosting simple. Once you've provided your AWS account ID and region where the VMs will be hosted, ThoughtSpot will share the current ThoughtSpot base AMI with you. This AMI has ThoughtSpot specific applications on an Ubuntu 12.04 base image. The EBS volumes required for ThoughtSpot install in AWS comes as part of the AMI. When you launch an EC2 instance from this image, the EBS volumes automatically get sized and provisioned. The storage attached to the base AMI is 200 GB (xvda), 2X400 GB (xvdb), and SSD gp2. It contains the max disks so that it can take care of the full load of the VM.

**Parent topic:** [Installation and setup](../../aws/setup/installation_and_setup.html)

