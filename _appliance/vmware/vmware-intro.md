---
title: [VMware configuration overview]
summary: "You can host ThoughtSpot on VMware."
last_updated: 5/21/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This section is an overview of the ThoughtSpot AI-Driven analytics platform hosted on the VMware vSphere Hypervisor (ESXi) 6.5 environment.

## About ThoughtSpot in VMware

The VMware virtualization platform provides highly scalable and efficient memory
and CPU resources management that can be used by ThoughtSpot instances.
Additionally, the VMware virtualization environment is an easy transition
between development and production environments. The following diagram shows
the components of a VMware and ThoughtSpot architecture:

![]({{ site.baseurl }}/images/vmware-components.png)

{% include note.html content="This is a generic representation. ThoughtSpot supports VMware deployment using its CentOS-based image, or on an RHEL image that your organization manages internally." %}

Your database capacity will determine the number of ThoughtSpot instances and
the instance network/storage requirements. In addition, you can scale your
ThoughtSpot VMs as your dataset size grows.

## Supported configurations

ThoughtSpot Engineering has performed extensive testing of the ThoughtSpot
platform in VMware for the best performance, load balancing, scalability,
and reliability. Based on this testing, ThoughtSpot recommends the following
_minimum specifications_ for an individual VMware ESXi host machine.

When choosing an instance type, ensure that it uses Intel CPUs.

<table width="100%" border="0">
	  <tbody>
	    <tr>
	      <th scope="col">Per VM user data capacity</th>
	      <th scope="col">CPU/RAM</th>
	      <th scope="col">Data disk</th>
				<th scope="col">Required root volume capacity</th>
        </tr>
	    <tr>
	      <td>20 GB</td>
	      <td>16/128 GB</td>
	      <td>2x400 GB</td>
				<td>200 GB for each node</td>
        </tr>
	    <tr>
	      <td>100 GB</td>
	      <td>32/256 GB</td>
	      <td>2x400 GB</td>
				<td>200 GB for each node</td>
        </tr>
	    <tr>
	      <td>256 GB</td>
	      <td>72/512 GB</td>
	      <td>3x2 TB</td>
				<td>200 GB for each node</td>
        </tr>
		<tr>
	      <td colspan="4"><b>Note:</b> All cores must be hyperthreaded. 200 GB SSD boot disk required for all configurations.</td>
	      <td></td>
	      <td></td>
        </tr>
  </tbody>
</table>

For most instances, the per VM recommended user data capacity is set at 50% of the available RAM on the instance. However, in the case of our 16CPU/128GB RAM and 32CPU/256GB RAM instances, we support user data sizes below those numbers to budget for application overhead.

Locally attached storage provides the best performance.

SAN can be used, but must comply with the following requirements:
* 136 MBps minimum random read bandwidth
* 240 random IOPS (~4ms seek latency)

NAS/NFS is not supported since its latency is so high that it tends to be unreliable.

All virtualization hosts should have VMware vSphere Hypervisor (ESXi) 6.5 installed.

ThoughtSpot provides a VMware template (OVF) together with a VMDK (Virtual
Machine Disk) file for configuring a VM. VMDK is a file format that describes
containers for virtual hard disk drives to be used in virtual machines like
VMware Workstation or VirtualBox. OVF is a platform-independent, efficient,
extensible, and open packaging distribution format for virtual machines.

The ThoughtSpot VM configuration uses thin provisioning and sets the recommended
reserved memory, among other important specifications. You can obtain these
files from [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html).

## Questions or comments?

We hope your experience with ThoughtSpot is excellent. Please let us know how it
goes, and what we can do to make it better. You can [contact ThoughtSpot]({{
site.baseurl }}/appliance/contact.html) by email, phone, or by filing a support ticket.
