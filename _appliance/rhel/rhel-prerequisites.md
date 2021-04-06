---
title: [RHEL installation prerequisites]
summary: "Prepare the system and ThoughtSpot clusters for installation."
last_updated: 4/6/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
| &#10063; | [1. Set up hosts for the ThoughtSpot cluster](#set-up-hosts) |
| &#10063; | [2. Partition the hosts](#partition-hosts) |
| &#10063; | [3. Install RHEL version 7.7 or 7.8 on all hosts](#install-rhel) |
| &#10063; | [4. Ensure that your Linux kernel is on version 3.10.0-1127.19.1](#linux-kernel-version) |
| &#10063; | [5. Enable the hosts to download RHEL packages](#enable-hosts) |
| &#10063; | [6. Enable an Ansible Control Server](#enable-ansible) |
| &#10063; | [7. Disable SELinux](#disable-selinux) |
| &#10063; | [8. Ensure tmp has permission 777](#tmp-permission) |
| &#10063; | [9. Remove Defaults requiretty from /etc/sudoers](#etc-sudoers) |

{: id="set-up-hosts"}
## Set up hosts for the ThoughtSpot cluster

Set up hosts for the ThoughtSpot cluster on your chosen platform. Please refer to the relevant deployment sections in our documentation for the exact specification for the hosts: CPU, memory, and disks.

- ThoughtSpot-certified hardware appliance manufactured by [DELL]({{ site.baseurl }}/appliance/hardware/installing-dell.html)
- ThoughtSpot-certified hardware appliance manufactured by [SMC ]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html)
- [Amazon Web Services (AWS) EC2]({{ site.baseurl }}/appliance/aws/configuration-options.html)
- [Google Cloud Platform (GCP)]({{ site.baseurl }}/appliance/gcp/configuration-options.html)
- [VMware]({{ site.baseurl }}/appliance/vmware/vmware-intro.html)
- [Microsoft Azure]({{ site.baseurl }}/appliance/azure/configuration-options.html)

{: id="partition-hosts"}
## Partition the hosts

Ensure that all ThoughtSpot hosts have the following partitions on the root drive.

Note that the size of the root drive on appliances is limited to 200GB; the partition requirements are therefore somewhat different when compared to the other environments.

<table>
<tbody>
<tr>
<th>Platform</th>
<th>Partition</th>
<th>Drive type</th>
<th>Description</th>
<th>Minimum size</th>
</tr>
<tr>
<th rowspan="2">Hosts in AWS, GCP, Azure, and VMWare&nbsp;</th>
<td>OS partition</td>
<td>SSD (root drive)</td>
<td>Root partition for OS, <code>/tmp</code></td>
<td>100GB<br />Allocate at least 50GB to <code>/tmp</code></td>
</tr>
<tr>
<td>Export partition</td>
<td>SSD (root drive)&nbsp;</td>
<td>Stores ThoughtSpot objects, hdfs logs, service logs, and so on</td>
<td>200GB</td>
</tr>
<tr>
<th rowspan="2">Hosts on ThoughtSpot-certified hardware appliances</th>
<td>OS partition</td>
<td>SSD (root drive)</td>
<td>Root partition for OS, <code>/tmp</code></td>
<td>80GB<br />Allocate at least 50GB to <code>/tmp</code></td>
</tr>
<tr>
<td>Export partition</td>
<td>SSD (root drive)&nbsp;</td>
<td>Stores ThoughtSpot objects, hdfs logs, service logs, and so on</td>
<td>100GB</td>
</tr>
</tbody>
</table>

{: id="install-rhel"}
## Install RHEL on hosts

ThoughtSpot is certified with RHEL versions 7.7 and 7.8; we **do not** support other versions of RHEL, including 8 and 8.1. Install RHEL version 7.7 or 7.8, and ensure that your [linux kernel version](#linux-kernel-version) is 3.10.0-1127.19.1.

{: id="linux-kernel-version"}
### Linux kernel version
Your Linux kernel ***must*** be on version 3.10.0-1127.19.1. RHEL 7.7 and 7.8 used to come with a Linux kernel of version 3.10.x, which has a bug that causes nodes to reboot unexpectedly. The default Linux kernel version for RHEL 7.7 and 7.8 is now 3.10.0-1127.19.1. However, you may have an older RHEL 7.7 or 7.8, with a Linux kernel of version 3.10.x. You must upgrade to 3.10.0-1127.19.1. If you have trouble upgrading your Linux kernel to version 3.10.0-1127.19.1, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html). This is a requirement for ***all*** platforms: appliance, cloud, and VMware.

{% include warning.html content="If your Linux kernel version is not 3.10.0-1127.19.1, you may run into unexpected node reboots and possible loss of data." %}

{: id="enable-hosts"}
## Enable the hosts to download RHEL packages

{: id="repositories"}
**Repositories**

{: id="yum-repositories"}
- **Yum repositories**: you must enable the following Yum repositories in your cluster: `epel`, `nux-desktop`, `pgdg95`, `rhel`, `rhel-optional`, `rhel-extras`.

{: id="python-repositories"}
- **Python repository**: for Python, ensure the machine is able to reach the `PyPI` repository located at [https://pypi.python.org/](https://pypi.python.org/){: target="_blank”}.

{: id="r-repositories"}
- **R repository**: for R, ensure the machine is able to reach the `CRAN` repository located at [https://cran.rstudio.com/](https://cran.rstudio.com/){: target="_blank"}.

Make sure that you can download RHEL packages to all hosts, either from the [official package repositories](#official-repositories), or from a [mirror repository](#mirror-repositories) owned and managed by your organization.

If you cannot access the RHEL repositories, there is no mirror repository in your organization, or you are unable to access Yum, Python, or R repositories, please [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html).

{: id="official-repositories"}
**Official package repositories**

If the hosts of your ThoughtSpot cluster can access external repositories, either directly or through a proxy, your cluster is online. You can then proceed to download [Yum](#yum-repositories), [Python](#python-repositories), and [R](#r-repositories) package repositories.

{: id="mirror-repositories"}
**Internal mirror repository**

If the hosts of your ThoughtSpot cluster have access to an internal repository that mirrors the public repositories, copy the [Yum
](#yum-repositories), [Python](#python-repositories), and [R](#r-repositories) package repositories to your hosts.

{: id="enable-ansible"}
## Enable an Ansible Control Server

Configure an Ansible Control Server, on a separate host, to run the Ansible playbook that ThoughtSpot supplies. You must install both `rsync` and Ansible on the Ansible Control Server host.

{: id="disable-selinux"}
## Disable SELinux or run it in permissive mode
ThoughtSpot does not support policies that enforce SELinux. We recommend that you disable SELinux, or run it in permissive mode.

{: id="tmp-permission"}
## Ensure tmp has permission 777
The `/tmp` directory must have the `777` permission.

{: id="etc-sudoers"}
## Remove Defaults requiretty from /etc/sudoers
The `/etc/sudoers` file must not have the `Defaults requiretty` line. This line can cause cluster creation to fail.
