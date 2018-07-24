---
title: [Set up Azure for ThoughtSpot]
keywords: Azure
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After you’ve determined your configuration options, you must setup your virtual
machines (VMs) using a ThoughtSpot image for Azure.


## About the ThoughtSpot image

To provision a ThoughtSpot image in the Azure portal, you’ll need to access the
ThoughtSpot Virtual Machine in the Azure Marketplace.

The ThoughtSpot Virtual Machine comes provisioned with the custom ThoughtSpot
image to make hosting simple. A virtual machine is a preconfigured template that
provides the information required to launch an instance of ThoughtSpot. It
includes the following:

- A template for the root volume for the instance (for example, an operating
system, an appliance server, and applications).

The ThoughtSpot Virtual Machine has the ThoughtSpot software installed and
configured, on an CentOS base image. Check with your ThoughtSpot contact to
learn about the latest version of the ThoughtSpot Virtual Machine.

Due to security restrictions, the ThoughtSpot Virtual Machine does not have default passwords for the
administrator users. When you are ready to obtain the password, contact
ThoughtSpot Support.

## Set up ThoughtSpot on Azure

Follow these steps to provision and set up the VMs and launch ThoughtSpot.

### Prerequisites

Complete these steps before launching your ThoughtSpot Virtual Machine:

1. Obtain an Azure login account.
2. Set up usage payment details with Microsoft Azure.
3. Set up a Resource Group.

### Create an instance

To get started, you need to log into the Azure portal, create a resource group,
get the [ThoughtSpot Virtual
Machine](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/thoughtspot-inc.thoughtspotvirtualmachine)
on the [Azure
Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/), create
a resource based on the VM, and complete initial setup. You can either start at
the Marketplace or from within the resource group you just created, as described
here.

1. Log in to the Azure portal.

    In a browser, go to [http://azure.microsoft.com](http://azure.microsoft.com), and log in to your Azure account.

2. Create a Resource Group.

   ![]({{ site.baseurl }}/images/azure_create_resource_group.png "Create a resource group")

3. Next, create a resource based on the ThoughtSpot Virtual Machine.

   a. Click **Create a resource**, search the Marketplace for the ThoughtSpot Virtual Machine, and select it.

     ![]({{ site.baseurl }}/images/azure_choose_ts_in_marketplace.png "Choose ThoughtSpot in Marketplace")

   b. On the ThoughtSpot Virtual Machine page, click **Create**.

     ![]({{ site.baseurl }}/images/azure_create_ts_vm.png "Choose ThoughtSpot in Marketplace")

### Configure basic settings

1. Provide a name and password for your new virtual machine.

2. Choose a disk type.

   {% include tip.html content="the new SSD disk types are currently available
   for only particular regions, so if you choose this disk type, make sure it's
   supported on the region you chose for your VM." %}

   See [Standard SSD Disks for Virtual Machine workloads](https://azure.microsoft.com/en-us/blog/preview-standard-ssd-disks-for-azure-virtual-machine-workloads/) for more on SSD disks.

3. Provide a Resource Group, by clicking `existing` and selecting one.

4. Select a location.

5. Click **OK** to save the Basics, which should look similar to the example below.

   ![]({{ site.baseurl }}/images/azure_ts_vm_basics.png "Basic settings on the ThoughtSpot Azure VM")

### Choose a machine size

For **Choose a size**, select `E64S_V3 standard`.

![]({{ site.baseurl }}/images/azure_choose_disk_size.png "Choose a disk size")


### Configure network settings, storage, and other options

_Prerequisite_: Get the details needed for setting up the Virtual Network,
Subnet, and Network Security Group from your Azure support team.

1. For storage, select **Yes** to **use managed disks**.

2. Under **Network**, select **Virtual network**, then **Subnet**, then **Public
IP addresses**, and set those names, addresses, and ranges approriately for your
network.

3. Open the necessary Inbound and Outbound ports to ensure that the ThoughtSpot
processes do not get blocked.

   The minimum ports needed are:

   | Port    | Protocol   | Service                       |
   | ------- | ---------- | ----------------------------  |
   | 22    | SSH          |  Secure Shell access          |
   | 80    | HTTP         |  Web access                   |
   | 443   | HTTPS        |  Secure Web access            |
   | 12345 | TCP          |  ODBC and JDBC drivers access |
   | 2201  | HTTP         |  Cluster Debugging            |
   | 2101  | HTTP         |  Node daemon Debugging        |
   | 4001  | HTTP         |  Data Cache Debugging         |


   {% include note.html content="ThoughtSpot requires that nodes purchased from
Azure must be reachable to each other so that they can communicate and form a
distributed environment. ThoughtSpot only requires that those ports be accessible
between nodes within a cluster.  Use your discretion about whether
to restrict public access or not for all nodes/all ports" %}

4. Leave other configurations such as `auto shutdown` and `monitoring` on their
default settings.

   ![]({{ site.baseurl }}/images/azure_network_settings.png "Configure network settings and other options")

5. Click **OK**.

    Azure will do the final validation check.

### Review the Summary

Verify that the validation check succeeded and that summary of information shown
is correct. If you find errors, reconfigure as needed.

When you are satisfied with the virtual machine setup, click **Create**.

### Prepare for starting up ThoughtSpot

_Prerequisite_: To log in to the VM, you will need the private key that is
available in the image. You can obtain this from your ThoughtSpot contact.

1. Obtain the VM’s public and private IP addresses.

   - To see the public IP, click on the VM name link. This will show the public IP of the VM.
   - To see the private IP click on Networking (below SETTINGS on the left side of the screen).

2. Connect to the VM via SSH, using the private key provided for the admin user.

3. Update the password for both the `admin` and the `thoughtspot` users.

   ```
   $ sudo passwd admin Changing password for user admin
   $ sudo passwd thoughtspot Changing password for user thoughtspot
   ```

4. Update the file `/etc/hosts` with all the node IP addresses for the other VMs
that will be part of the ThoughtSpot cluster.

### Add Storage Disks

1. Go back to the VM and click on it.
2. Add 2 SSD disks of 1TB each.
3. Click **Add data disk** and choose **Create disk from the menu**.
4. Create one mode data disk (demo-disk2) and save them both.
5. Click **Save** to add the disks to the VM.
6. Verify that the disks were added by issuing this command in the shell on the VM:

   ```
   $ lsblk
   ```

   Which returns results like:

   ```
   NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
   fd0       2:0    1    4K  0 disk
   sda       8:0    0  200G  0 disk
   ├─sda1    8:1    0    1G  0 part /mntboot
   ├─sda2    8:2    0   20G  0 part /
   ├─sda3    8:3    0   20G  0 part /update
   └─sda4    8:4    0  159G  0 part /export
   sdb       8:16   0    1T  0 disk
   └─sb1     8:17   0    1T  0 part /mnt/resource
   sdc       8:32   0    1T  0 disk
   sdd       8:48   0    1T  0 disk
   sr0      11:0    1  628K  0 rom
   ```

7. Unmount the temporary disk by issuing:

   ```
   $ sudo umount /mnt/resource
   ```

8. Prepare the disks /dev/sdc and /dev/sdd for ThoughtSpot by issuing the command:

   ```
   $ sudo /usr/local/scaligent/bin/prepare_disks.sh /dev/sdc /dev/sdd
   ```

   {% include warning.html content="Do not use the disk /dev/sdb. This is reserved
   for ThoughtSpot use." %}

9. Check the disks status by issuing:

   ```
   $ df -h
   ```

10. Repeat the steps in this section for each node in your cluster.


### Make network support settings

{% include tip.html content="All changes in this section must be re-applied each
time after a cluster is created or updated. If these changes are not present, a
reboot of the VMs will not have network access. So when updating these files,
keep a backup to copy after any subsequent cluster creation or update." %}

1. Update hostnames for all the nodes by issuing:

   ```
   $ sudo hostnamectl set-hostname <HOSTNAME>
   ```

   If you are using a static name, you can issue:

   ```
   sudo hostnamectl set-hostname <HOSTNAME> --static
   ```

2. Update `/etc/hosts` with the IP and hostname:

   ```
   $ sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0

   DEVICE=eth0 ONBOOT=yes BOOTPROTO=dhcp HWADDR=<Add eth0 MAC> TYPE=Ethernet USERCTL=no PEERDNS=yes IPV6INIT=no
   ```

3. Do not reboot any of the nodes, until these changes are made to each node:

   a. Open the grub file  /update/etc/default/grub in an editor:

      ```
      $ sudo vi /update/etc/default/grub
      ```

   b. Change the line:

      ```
      GRUB_CMDLINE_LINUX="console=tty0 console=ttyS1,115200n8"
      ```
      to:

      ```
      GRUB_CMDLINE_LINUX="console=tty0 console=ttyS1,115200n8 net.ifnames=0"
      ```

    c. Save your changes.

4. Issue these commands:

   ```
   $ sudo cp /update/etc/default/grub /etc/default/
   $ rm /usr/local/scaligent/bin/setup-net-devices.sh
   ```

5. Reboot the nodes.
