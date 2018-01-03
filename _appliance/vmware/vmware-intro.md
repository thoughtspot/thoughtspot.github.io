---
title: [VMWare configuration overview]
keywords: vmware
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Congratulations on purchasing and ThoughtSpot instance. This section is an
overview of the VMWare VSphere Hypervisor (ESXi) 6.5 environment for use with
ThoughtSpot.

## About ThoughtSpot on VMWare

VMWare can provide lots of memory and CPU for your ThoughtSpot instance, and it
can be easily updated from development instances. The following diagram shows a
generic view of the components of a VMWare and ThoughtSpot architecture:

 ![]({{ site.baseurl }}/images/vmware-components.png "VMWare components")

Your database capacity will determine the number of instances you'll need and
the instance network/storage requirements. In addition, you can go with multiple
VMs based on your dataset size.

## Configuration

ThoughtSpot Engineering has performed extensive testing of the ThoughtSpot
appliance on VMWare for best performance, load balancing, scalability, and
reliability. Your individual host machines meet following requirements:

* 512G Memory
* 200G SSD
* 3X 2T Hard disks (6T in total in hard disk space)
* 40 Cores

ThoughtSpot provides a VMWare template (OVF) for you to configure your VMs. OVF
is a platform-independent, efficient, extensible, and open packaging and
distribution format for virtual machines. The ThoughtSpot OVF format has a
configuration for:

* thin provisioning
* reserved memory for the VM

All nodes should have VMWare VSphere Hypervisor (ESXi) 6.5 installed.

## Questions or comments?

We hope your experience with ThoughtSpot is excellent. Please let us know how it
goes, and what we can do to make it better. You can [contact ThoughtSpot]({{
site.baseurl }}/aws/welcome/contact.html) by phone, mail, email, or by filing a
support ticket.
