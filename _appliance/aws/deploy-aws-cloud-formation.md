---
title: [Deploy AWS using CloudFormation CLI]

last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Deploying your AWS instance using the CloudFormation CLI

To deploy your AWS instance using CloudFormation CLI, do the following:

1. A ThoughtSpot cluster requires AWS nodes to be configured with EBS volumes.

2. Below is a Sample JSON file to deploy an AWS instance, please edit the values to the keys as per requirement.


   `{`

   `"AWSTemplateFormatVersion" : "2010-09-09",`

   `"Description" : "Thoughtspot Ec2 Instance",`

   `"Resources" : {`

   `"EC2Instance" : {`

   `"Type" : "AWS::EC2::Instance",`

   `"Properties" : {`

   `"AvailabilityZone" : "us-west-2c",`

   `"ImageId" : "ami-08aaf182e43599854",`

   `"KeyName" : "<key pair>",`

   `"InstanceType" : "r4.16xlarge",`

   `"BlockDeviceMappings" : [`

   `{`

   `"DeviceName" : "/dev/xvda",`

   `"Ebs" : {`

   `"SnapshotId": "snap-01e554619c99184cf",`

   `"VolumeType" : "gp2",`

   `"DeleteOnTermination" : "true",`

   `"VolumeSize" : "200"`

   `}`

   `},`

   `{`

   `"DeviceName" : "/dev/xvdb",`

   `"Ebs" : {`

   `"SnapshotId": "snap-012d2e12313e1cdb2",`

   `"VolumeType" : "gp2",`

   `"DeleteOnTermination" : "true",`

   `"VolumeSize" : "1024"`

   `}`

   `},`

   `{`

   `"DeviceName": "/dev/xvdc",`

   `"Ebs": {`

   `"SnapshotId": "snap-0ab3b43966023820a",`

   `"DeleteOnTermination": true,`

   `"VolumeType": "gp2",`

   `"VolumeSize": "1024"`

   `}`

   `}`

   `],`

   `"EbsOptimized" : true,`

   `"NetworkInterfaces": [`

   `{`

   `"DeviceIndex": 0,`

   `"Description": "Primary network interface",`

   `"SubnetId": "subnet-3aaf9e63",`

   `"DeleteOnTermination": true,`

   `"GroupSet": [`

   `"sg-0e2725bca060835ea"`

   `]`

   `}`

   `]`

   `}`

   `}`

   `}`

   `}`

3. aws cloudformation create-stack --stack-name testing --template-body file:///<json-file-path> --capabilities CAPABILITY_IAM

4. Verify the AWS instance is deployed from console.
