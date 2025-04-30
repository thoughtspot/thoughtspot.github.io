---
title: [Set up high availability for AWS]
keywords: AWS, AMI
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Setting up High Availability (HA) for your ThoughtSpot cluster using AWS Elastic File System (EFS)

To set up HA for your ThoughSpot cluster, do the following:

1. Create an EFS File System that spanns across different availability zones, and across different subnets.

    ![]({{ site.baseurl }}/images/aws_ha_1.png "Create EFS File System")

    ![]({{ site.baseurl }}/images/aws_ha_2.png "Create EFS File System 2")

2. Create two ThoughtSpot clusters in each availability zone and in the subnets, where the file system was created.

    ![]({{ site.baseurl }}/images/aws_ha_3.png "Create EFS File System 3")

    ![]({{ site.baseurl }}/images/aws_ha_4.png "Create EFS File System 4")

3. Change the IP addresses of the cluster (if needed).

4. Create efs <customizable name> directory in /home/admin path and issue the following command to mount the previously created file system, editing the following sample link:
'sudo mount -t nfs -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport fs-f756f1ee.efs.us-west-1.amazonaws.com:/ /home/admin/efs/'
Make sure read and write permissions are provided on all cluster EFS mount points. use: `chmod 777 /home/admin/efs`

5. Go to First cluster. Create a snapshot and backup from that snapshot, on to the mount point where EFS is mounted. Below are sample commands:
`tscli snapshot create EfsTest HA 2`
`tscli backup create --mode full --type full --storage_type local EfsTest /home/admin/efs/Efs-backup`
6. Make sure the backup is created and accessible from all the clusters where EFS is mounted. In our cases both the clusters.
7. Now bring down the first cluster instances.
8. Go to Second cluster, delete existing cluster and create new one by restoring from the first cluster backup which is accessible from efs mount point.
Example: `tscli cluster restore /home/admin/EFS/Efs-backup`

Cluster should now be successfully restored on the second cluster from the backup provided my EFS, achieving HA for ThoughtSpot clusters.
