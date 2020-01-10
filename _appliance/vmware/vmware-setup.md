---
title: [Set up VMware for ThoughtSpot]
summary: Learn how to install a ThoughtSpot cluster in a VMware environment.
keywords: tbd
last_updated: tbd
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


## Prerequisites

This installation process assumes you have already acquired your host machines.
You can install on a cluster with any number of nodes. A one node cluster is suitable
for a sandbox environment but is insufficient for a production environment. You need at least three nodes for high availability (HA), but there is no limit on the number of nodes.


1. Make sure you have installed the Hypervisor on each of your three nodes.

   The VM template, by default, captures a 72-core configuration. If your
   physical host has more than 72 cores, you may want to edit the VM to have (`n-2`)
   cores (for a physical host with _n_ cores) to fully take advantage of computing
   power of the physical host.

2. Create datastores for all solid-state drive (SSD) and hard drive devices.

## Use the OVF to Create a VM

1. Download the `ThoughtSpot OVF` from the **[Downloads page here]({{ site.baseurl }}/release/downloads.html#virutal-and-cloud-platforms)** to a location on an accessible disk.

2. Log into the ESXi web portal.

    ![]({{ site.baseurl }}/images/vmware-login.png "VMWare Login")

2. Select **Virtual Machines > Create/Register VM**.

   The system displays the dialog for selecting an OVF template.

   ![]({{ site.baseurl }}/images/vmware-ovf.png "ThoughtSpot OVF")

3. Choose the OVF template and press **Next**.

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

8. Make sure that VM is powered off.


## Add hard disks to the VM

| Use Case      | HDFS Disk Requirements |
| --------      | ---------------------- |
| POC           | 2 x 1 TB on HDD        |
| Production    | 3 x 2 TB on HDD        |

For a proof of concept (POC), follow these steps to create two 1TB HDFS disks on
HDD storage, as shown here (2 x 1TB).

For production deployments, ThoughtSpot requires you to have three 2TB HDFS
disks on HDD (3 x 2TB). For this use case, follow these same steps to create the
additional, larger capacity disks.

1. Edit the VM you just created.

   ![]({{ site.baseurl }}/images/vmware-add-disk0.png "Select disk")

2. Select **Add hard disk > New hard disk**.

   You can give the VM up to 38 cores (or approximately 490 G RAM). The ESXi host
   should keep a minimum of 2 cores.

   ![]({{ site.baseurl }}/images/vmware-adddisk1.png "New hard disk")

   The new disk appears as a new row under the only existing SSD row.

3. Click the **New Hard disk** to expand the detailed configuration options.
4. For a proof of concept, set the options as follows. (For production deployments, set the size to 2TB.)

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
     <td>size</td>
     <td>1 TB</td>
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

   ![]({{ site.baseurl }}/images/vmware-adddisk2-1TB.png "New hard disk")

5. Save your changes.
6. Repeat steps 1-5 to create more hard disks.
7. Power on the VM
8. Once the VM is online, run the following command to prepare the HDFS disks:

    ```shell
    sudo /usr/local/scaligent/bin/prepare_disks.sh
    ```

## Next steps

There is no network at this point on your VMs. To make the VM node accessible
from any terminal within local network, contact <a
href="mailto:support@thoughtspot.com">support@thoughtspot.com</a>.
