---
title: [Setup VMWare for ThoughtSpot]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This page explains how to install a ThoughtSpot cluster in a VMWare VSphere
Hypervisor (ESXi) 6.5 environment.  For each hardware node, you must:

* Complete the prerequisites
* Use the OVF to create a VM
* Add hard disks to the VM


## Prerequisites

This installation process assumes you have already acquired your host machines.
You can install on a one or three node cluster. A one node cluster is suitable
for a sandbox environment but is insufficient for a production environment.

1. Make sure you have installed the Hypervisor on each of your three nodes.

   The VM template, by default, captures a 38-core configuration. If your
   physical host has more than 40 cores, you may want to edit VM to has (n-2)
   cores (for a physical host with n cores) to fully take advantage of computing
   power of the physical host.

2. Assign a static IP to the VM.
2. Create datastores for all solid-state drive (SSD) and hard drive devices.

## Use the OVF to Create a VM

1. Download the [ThoughtSpot OVF]() to a location on an accessible disk.

2. Log into the ESXi web portal.

    ![]({{ site.baseurl }}/images/vmware-login.png "VMWare Login")

2. Select **Virtual Machines > Create/Register VM**.

   The system displays the dialog for selecting an OVF template.

   ![]({{ site.baseurl }}/images/vmware-ovf.png "ThoughtSpot OVF")

3. Choose the OVF a template and press **Next**.

   The system prompts you to select a storage.

4. Choose the SSD as the destination and press **Next**.

   The system displays the **Deployment Options** dialog.

5. Enter the options and press **Next**.

    | Setting                    | Value                                             |
    |----------------------------|---------------------------------------------------|
    | **Network mappings**       | Select the correct network for your installation. |
    | **Disk provisioning**      | Choose Thin.                                      |
    | **Power on automatically** | Check this box.                                   |

6. Review your selection and press **Finish**.

   ![]({{ site.baseurl }}/images/vmware-complete.png "Complete")

7. Wait for the template to be loaded.

   Depending on your network speed, loading can take several minutes.

   ![]({{ site.baseurl }}/images/vmware-loading.png "OVF Loading")


## Add hard disks to the VM

1. Edit the VM you just created.

   ![]({{ site.baseurl }}/images/vmware-add-disk0.png "Select disk")

2. Select **Add hard disk > New hard disk**.

   ![]({{ site.baseurl }}/images/vmware-adddisk1.png "New hard disk")

   The new disk appears as a new row under the only existing SSD row.

3. Click the **New Hard disk** to expand the detailed configuration options.
4. Set the options as follows:

    <table>
    <tr>
     <th>Setting</th>
     <th>Value</th>
    </tr>
    <tr>
     <td>size</td>
     <td>2 TB.</td>
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

   ![]({{ site.baseurl }}/images/vmware-adddisk2.png "New hard disk")

5. Save your changes.
6. Repeat steps 1-5 for the remaining hard disks.
7. Reboot the VM.

## ThoughtSpot guided installation

Once you've configured your nodes, you contact <a
href="mailto:support@thoughtspot.com">support@thoughtspot.com</a> or your
on-site ThoughtSpot Customer Success Engineer for help installing the
ThoughtSpot software.
