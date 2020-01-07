---
title: [Set up ThoughtSpot in Azure]
last_updated: 1/7/2020
summary: "After you determine your configuration options, you must set up your virtual
machines using a ThoughtSpot image for Azure."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## About the ThoughtSpot image

To provision ThoughtSpot in the Azure portal, access the ThoughtSpot Virtual Machine in the Azure Marketplace.

The ThoughtSpot Virtual Machine comes provisioned with the custom ThoughtSpot
image to make hosting simple. A virtual machine is a preconfigured template that
provides the information required to launch an instance of ThoughtSpot. It
includes the following:

- A template for the root volume for the instance (for example, an operating
system, an appliance server, and applications).

The ThoughtSpot Virtual Machine has the ThoughtSpot software installed and
configured, on a CentOS base image. Check with your ThoughtSpot contact to
learn about the latest version of the ThoughtSpot Virtual Machine.

Due to security restrictions, the ThoughtSpot Virtual Machine does not have default passwords for the administrator users. When you are ready to obtain the password, contact
[ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html).

## Set up ThoughtSpot in Azure

Follow these steps to provision and set up the VMs and launch ThoughtSpot.

### Prerequisites

Complete these steps before launching your ThoughtSpot Virtual Machine:

1. Obtain an Azure login account.
2. Set up usage payment details with Microsoft Azure.
3. Set up a [Resource Group]({{ site.baseurl }}#create-instance).

{: id="create-instance"}
### Create an instance

Create your virtual machines based on the [ThoughtSpot Virtual Machine](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/thoughtspot-inc.thoughtspotvirtualmachine)
on the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/).

1. Log into the Azure portal.

    In a browser, go to [http://azure.microsoft.com](http://azure.microsoft.com), and log into your Azure account.

2. On the Azure portal homepage, hover over **Virtual machines**, and click **Create**.

    {% include image.html file="azure-createvm.png" title="Create a virtual machine" alt="Hover over Virtual machines and click create." caption="Create a virtual machine" %}

3. Specify information under **Basics**.<br>
    {% include image.html file="azure-basicsettings.png" title="Specify information under Basics" alt="In the Basics menu, specify your subscription type, resource group, VM name, region, image, size, authentication, and port rules." caption="Specify information under Basics" %}

    <table>
      <tr>
        <td><strong>1</strong></td>
        <td>Choose a subscription type from the dropdown menu.</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td>If your company already has a resource group, <em>select existing</em>. If not, <em>create new</em>.</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td>Specify a name for your virtual machine.</td>
      </tr>
      <tr>
        <td><strong>4</strong></td>
        <td>Specify the region in which you are creating the VM.</td>
      </tr>
      <tr>
        <td><strong>5</strong></td>
        <td>Click <strong>Browse all public and private images</strong>, and search for the ThoughtSpot image. Click on it.</td>
      </tr>
      <tr>
        <td><strong>6</strong></td>
        <td>Choose <code>E64S_V3 standard</code> for your VM's size. For more information, refer to <a href="/appliance/azure/configuration-options.html">Azure configuration options</a>.</td>
      </tr>
      <tr>
        <td><strong>7</strong></td>
        <td>Select <strong>SSH public key</strong> and specify a username.</td>
      </tr>
      <tr>
        <td><strong>8</strong></td>
        <td>Enter your SSH public key. <a href="{{ site.baseurl }}/appliance/contact.html">Contact ThoughtSpot support</a> to obtain a public key, if you do not have one. Note that this SSH public key is different from the SSH private key you use later, to ssh into your VM from the command line.</td>
      </tr>
      <tr>
        <td><strong>9</strong></td>
        <td>Choose <strong>allow selected ports</strong>.</td>
      </tr>
      <tr>
        <td><strong>10</strong></td>
        <td>Open the necessary Inbound and Outbound ports to ensure that the ThoughtSpot processes do not get blocked. See the <a href="#port-requirements">minimum port requirements.</a></td>
      </tr>
    </table>

2. Specify information under **Disks**.

    {% include image.html file="azure-disks.png" title="Specify disk information" alt="In the Disks menu, choose a disk type, add data disks, and select managed disks" caption="Specify disk information" %}

    <table>
      <tr>
        <td><strong>1</strong></td>
        <td>Choose a disk type from the dropdown menu. ThoughtSpot recommends the Premium SSD disks.</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td>Click <strong>Create and attach a new disk</strong>. Add two data disks. Refer to <a href="/configuration-options.html#thoughtspot-azure-instance-types.html">Azure configuration options</a> to see what size they should be.</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td>Under **Advanced**, click **yes** to **use managed disks**.</td>
      </tr>
    </table>

    {% include tip.html content=" The new Standard SSD disk types are only available for particular regions. Make sure this disk type is supported in the region you chose for your VM before selecting it." %}

   See [Standard SSD Disks for Virtual Machine workloads](https://azure.microsoft.com/en-us/blog/preview-standard-ssd-disks-for-azure-virtual-machine-workloads/) for more on SSD disks. ThoughtSpot recommends the Premium SSD disks.

4. Specify information under **Networking**.

    {% include image.html file="azure-networking.png" title="Specify networking information" alt="Specify your virtual network, and set inbound and outbound ports, if you haven't already" caption="Specify networking information" %}

    <table>
      <tr>
        <td><strong>1</strong></td>
        <td>Find your company's virtual network and select it, or <strong>create new</strong>.</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td>Find your company's public IP, or <strong>create new</strong>.</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td>Select <strong>Advanced</strong> for <em>NIC network security group</em>.</td>
      </tr>
      <tr>
        <td><strong>4</strong></td>
        <td>After you select <strong>Advanced</strong>, the <strong>Configure network security group</strong> option appears. Find your company's security group, or <strong>create new</strong>. When creating your security group, ensure that the required ports are open. Refer to the <a href="#port-requirements">minimum port requirements.</a></td>
      </tr>
    </table>
5. Under **Management**, configure your monitoring and management preferences. If you have no preferences, you can leave them at their default settings.

6. Under **Advanced**, configure your advanced settings preferences. If you have no preferences, you can leave them at their default settings.

7. Under **Tags**, tag your virtual machine with a human-readable string to help you identify it.

8. Click **Review + create** in the bottom left corner of your screen.

9. Review your changes, and click **create**. Azure does the final validation check.

{: id="port-requirements"}
### Minimum required ports
Open the necessary Inbound and Outbound ports to ensure that the ThoughtSpot
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


   {% include note.html content="Nodes purchased from Azure must be reachable to each other so that they can communicate and form a distributed environment. ThoughtSpot requires that these ports be accessible between nodes within a cluster.  Use your discretion about whether to restrict public access or not for all nodes and all ports." %}

   Refer to [network policies]({{ site.baseurl }}/appliance/firewall-ports.html) for more information.

### Prepare for starting up ThoughtSpot

_Prerequisite_: To log into the VM, you need the private key that is available in the image. You can obtain this from your ThoughtSpot contact.

1. Obtain the VM’s public and private IP addresses.

   - To see the public IP, click the VM name link. This will show the public IP of the VM.
   - To see the private IP, select **more services** from the Microsoft Azure homepage. Select **Networking** from the list on the left side of the screen.

2. In a terminal application, connect to the VM through SSH. When prompted, enter the private key provided for the admin user.

   - You must file a support ticket to obtain this private key; it is necessary for the first login.
   - This key is different from the credentials, or the public keys supplied in earlier steps, which do not work in this context.
```
   $ ssh admin@<VM-IP>
```   

3. Update the password for both the `admin` and the `thoughtspot` users.<br>
  The command prompts you to type in a new password, and then to confirm the password.

   ```
   $ sudo passwd admin
   Changing password for user admin
   $ sudo passwd thoughtspot
   Changing password for user thoughtspot
   ```
   {% include warning.html content="If you do not change the password, you cannot log back into your Azure VMs. Your private key does not work after initial installation." %}

4. Update the file `/etc/hosts` with all the node IP addresses for the other VMs
that will be part of the ThoughtSpot cluster.

### Verify storage disks

Verify the existence of your data disks, created in Step 4 of [create an instance](#create-instance), by issuing `lsblk` in your terminal application:

   ```
   $ lsblk
   ```

   Your result may look something like the following:

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

7. Unmount the temporary disk by issuing the following command:

   ```
   $ sudo umount /mnt/resource
   ```

   {% include warning.html content="The <code>/mnt/resource</code> disk, which is mounted on the <code>/dev/sdb</code> disk, is temporary. Any data on it will be wiped if the VM is shut down. You must unmount the <code>/mnt/resource</code> disk." %}

8. Prepare the disks /dev/sdc and /dev/sdd for ThoughtSpot by issuing the following command:

    {% include warning.html content="Do not use the disk <code>/dev/sdb</code>. Any data on it will be wiped if the VM is shut down." %}

    ```
    $ sudo /usr/local/scaligent/bin/prepare_disks.sh /dev/sdc /dev/sdd
    ```

9. Check the disks' status by issuing the following command:

   ```
   $ df -h
   ```

10. Repeat the steps in this section for each node in your cluster.

### Create network support settings

{% include tip.html content="All changes in this section must be re-applied each
time after a cluster is created or updated. If these changes are not present, a
reboot of the VMs will not have network access. So when updating these files,
keep a backup to copy after any subsequent cluster creation or update." %}

1. SSH into one of your VMs.
```
    ssh admin@<VM-IP>
```
1. Update the VM's hostname:

   ```
   $ sudo hostnamectl set-hostname <HOSTNAME>
   ```

   If you are using a static name, you can issue:

   ```
   sudo hostnamectl set-hostname <HOSTNAME> --static
   ```

2. Update `/etc/sysconfig/network-scripts/ifcfg-eth0` with the IP and hostname:

   ```
   $ sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0

   DEVICE=eth0 ONBOOT=yes BOOTPROTO=dhcp HWADDR=<Add eth0 MAC> TYPE=Ethernet USERCTL=no PEERDNS=yes IPV6INIT=no
   ```

3. Modify permissions for `/etc/hosts`. This command allows the root user to retain read/write permissions, and grants read-only permissions to other users.
    ```
    $ sudo chmod 644 /etc/sysconfig/network-scripts/ifcfg-eth0
    ```
4. Repeat this process (steps 1 through 4) for each node.

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
