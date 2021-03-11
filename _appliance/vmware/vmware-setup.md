---
title: [Set up ThoughtSpot in VMware]
summary: Learn how to install a ThoughtSpot cluster in a VMware environment.
last_updated: 3/11/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This page explains how to install a ThoughtSpot cluster in a VMware VSphere Hypervisor (ESXi) 6.5 environment.

{% include note.html content="Older versions of ESXi aren't supported due to hardware/driver incompatibility issues." %}

For each hardware node, you must:

* Complete the prerequisites
* Use the ThoughtSpot Open Virtualization Format (OVF) file to create
a virtual machine (VM)
* Add hard disks to the VM

This guide explains how to deploy ThoughtSpot on VMware, using ThoughtSpot's CentOS-based image. Starting with version 6.0.4, you can also deploy ThoughtSpot on VMware using Red Hat Enterprise Linux (RHEL), allowing you to run ThoughtSpot on an RHEL image that your organization manages internally. To install ThoughtSpot using RHEL, refer to the [RHEL deployment guide]({{ site.baseurl }}/appliance/rhel/rhel.html).


## Prerequisites

This installation process assumes you have already acquired your host machines.
You can install on a cluster with any number of nodes. A one node cluster is suitable
for a sandbox environment but is insufficient for a production environment. You need at least three nodes for high availability (HA), but there is no limit on the number of nodes.

1. Make sure you have installed the Hypervisor on each of your nodes.

   The VM template, by default, captures a 72-core configuration. If your
   physical host has more than 72 cores, you may want to edit VM to have (`n-2`)
   cores (for a physical host with n cores) to fully take advantage of computing
   power of the physical host. Extra cores help performance.

   You should aim to allocate 490 GB or more RAM.

2. Create datastores for all solid-state drive (SSD) and hard drive devices.

3. Download and fill out the ThoughtSpot [site survey]({{ site.baseurl }}/site-survey.pdf){:target="_blank"} to have a quick reference for any networking information you may need to fill out as you install ThoughtSpot. Ask your network administrator if you need help filling out the site survey.

## Use the OVF to Create a VM

1. **[Download](https://thoughtspot.egnyte.com/dl/iWvEqo76Pr/){:target="_blank"}** the `ThoughtSpot OVF` to a location on an accessible disk.

2. Log in to the ESXi web portal.

    ![]({{ site.baseurl }}/images/vmware-login.png "VMWare Login")

2. Select **Virtual Machines > Create/Register VM**.

   The system displays the dialog for selecting an OVF template.

   ![]({{ site.baseurl }}/images/vmware-ovf.png "ThoughtSpot OVF")

3. Choose the OVF template and click **Next**.

   The system prompts you to select a storage.

4. Choose the SSD as the destination and click **Next**.

   The system displays the **Deployment Options** dialog.

5. Enter the options and click **Next**.

    | Setting                    | Value                                             |
    |----------------------------|---------------------------------------------------|
    | **Network mappings**       | Select the correct network for your installation. |
    | **Disk provisioning**      | Choose Thin.                                      |
    | **Power on automatically** | Check this box.                                   |

6. Review your selection and click **Finish**.

   ![]({{ site.baseurl }}/images/vmware-complete.png "Complete")

7. Wait for the template to be loaded.

   Depending on your network speed, loading can take several minutes.

   ![]({{ site.baseurl }}/images/vmware-loading.png "OVF Loading")

8. Make sure that VM is powered off.


## Add hard disks to the VM

For most deployments, ThoughtSpot requires you to have three 2TB HDFS
disks on HDD (3 x 2TB). If you expect your user data capacity for each VM to be 100 GB or less, you may not need three 2TB disks. Refer to [Supported configurations]({{ site.baseurl }}/appliance/vmware/vmware-intro.html#supported-configurations) for more information. Follow these steps to create the required 3 2TB hard disks.

1. Edit the VM you just created.

   ![]({{ site.baseurl }}/images/vmware-add-disk0.png "Select disk")

2. Select **Add hard disk > New hard disk**.

   ![]({{ site.baseurl }}/images/vmware-adddisk1.png "New hard disk")

   The new disk appears as a new row under the only existing SSD row.

3. Click the **New Hard disk** to expand the detailed configuration options.
4. Set the options as follows.

    <table>
    <colgroup>
    <col width="50%" />
    <col width="50%" />
    </colgroup>
    <tr>
     <th>Setting</th>
     <th>Value</th>
    </tr>
    <tr>
     <td><strong>Size</strong></td>
     <td>2 TB</td>
    </tr>
    <tr>
     <th>Location</th>
     <td>
     Use the <strong>Browse</strong> button to select the hard disk store.
     <br>
     <img src="{{ "/images/vmware-adddisk3.png "| prepend: site.baseurl  }}" />
     </td>
    </tr>
    <tr>
     <th>Thin provisioned</th>
     <td>Check this box.</td>
    </tr>
    </table>

    You should see something similar to the following:

   ![]({{ site.baseurl }}/images/vmware-add-disk-2-tb.png "New hard disk")

5. Save your changes.
6. Repeat steps 1-5 to create more hard disks. ThoughtSpot requires 3 hard disks for most environments. If you expect your user data capacity for each VM to be 100 GB or less, you may not need three 2TB disks. Refer to [Supported configurations]({{ site.baseurl }}/appliance/vmware/vmware-intro.html#supported-configurations) for more information.
7. Power on the VM.
8. After the VM is online, run the following command to prepare the HDFS disks:

    ```
    $ sudo /usr/local/scaligent/bin/prepare_disks.sh
    ```

## Next steps

There is no network at this point on your VMs. As a prerequisite:

1. Verify that Network Adapter type is set to VMware vmxnet3 (Recommended).
2. Verify that all ESXi hosts in your VMware farm for ThoughtSpot have been trunked to the VLAN assigned to your ThoughtSpot VMs.
3. Verify that the console of all ThoughtSpot VMs is accessible in VMware vCenter Server.

## Additional resources
As you develop your expertise in VMware VM creation, we recommend the following ThoughtSpot U course:
* [Node Configuration: VMware](https://training.thoughtspot.com/node-network-configuration/569476){:target="_blank"}

See other training resources at <br/>
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
