---
title: [Amazon Linux 2 installation prerequisites]
summary: "Prepare the system and ThoughtSpot clusters for installation."
last_updated: 4/6/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
| &#10063; | [1. Set up hosts for the ThoughtSpot cluster](#set-up-hosts) |
| &#10063; | [2. [Optional] Set up AWS Systems Manager Agent](#aws-ssm) |
| &#10063; | [3. Partition the hosts](#partition-hosts) |
| &#10063; | [4. Enable the hosts to download Amazon Linux 2 packages](#enable-hosts) |
| &#10063; | [5. Enable an Ansible Control Server](#enable-ansible) |
| &#10063; | [6. Disable SELinux or run it in permissive mode](#disable-selinux) |
| &#10063; | [7. Ensure tmp has permission 777](#tmp-permission) |
| &#10063; | [8. Remove Defaults requiretty from /etc/sudoers](#etc-sudoers) |

{: id="set-up-hosts"}
## Set up hosts for the ThoughtSpot cluster

Set up hosts for the ThoughtSpot cluster on Amazon Web Services.

1. Refer to [AWS configuration options]({{ site.baseurl }}/appliance/aws/configuration-options.html) for the exact specification for the hosts:
* CPU
* memory
* disks
2. Refer to [Set up AWS resources for ThoughtSpot]({{ site.baseurl }}/appliance/aws/launch-an-instance.html) to create and launch your AWS virtual machines.
* Ensure that your [AMI]({{ site.baseurl }}/appliance/aws/launch-an-instance.html#al2-ami) is an Amazon Linux 2 image.

{: id="aws-ssm"}
## [Optional] Set up AWS Systems Manager Agent

If you plan to use the [AWS SSM agent](https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html){:target="_blank"} as an alternative to SSH, create a new IAM role while creating VMs. This IAM role must have an SSM policy to grant AWS SSM permission to perform actions on your instances. Refer to [Create an IAM instance profile for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html){:target="_blank"}.

You must install the SSM agent on each node. Refer to [Manually install SSM Agent on EC2 instances for Linux](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-manual-agent-install.html){:target="_blank"}, if the SSM agent is not already on each node.

{: id="partition-hosts"}
## Partition the hosts

As you create VMs, ensure that all ThoughtSpot hosts have the following partitions on the root drive.

<table>
<tbody>
<tr>
<th>Partition</th>
<th>Drive type</th>
<th>Description</th>
<th>Minimum size</th>
</tr>
<tr>
<td><strong>OS partition</strong></td>
<td>SSD (root drive)</td>
<td>Root partition for OS, <code>/tmp</code></td>
<td>100GB<br />Allocate at least 50GB to <code>/tmp</code></td>
</tr>
<tr>
<td><strong>Export partition</strong></td>
<td>SSD (root drive)&nbsp;</td>
<td>Stores ThoughtSpot objects, hdfs logs, service logs, and so on</td>
<td>200GB</td>
</tr>
</tbody>
</table>

{: id="enable-hosts"}
## Enable the hosts to download Amazon Linux 2 packages

{: id="repositories"}
**Repositories**

{: id="yum-repositories"}
- **Yum repositories**: you must enable the following Yum repositories in your cluster: `epel`, `nux-desktop`, `google-cloud-sdk`, and `azure-cli`.

{: id="python-repositories"}
- **Python repository**: for Python, ensure the machine is able to reach the `PyPI` repository located at [https://pypi.python.org/](https://pypi.python.org/{: target="_blank"}).

{: id="r-repositories"}
- **R repository**: for R, ensure the machine is able to reach the `CRAN` repository located at [https://cran.rstudio.com/](https://cran.rstudio.com/){: target="_blank"}.

Make sure that you can download Amazon Linux 2 packages to all hosts, either from the [official package repositories](#official-repositories), or from a [mirror repository](#mirror-repositories) owned and managed by your organization.

If you cannot access the Amazon Linux 2 repositories, there is no mirror repository in your organization, or you are unable to access Yum, Python, or R repositories, please [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html).

{: id="official-repositories"}
__Official package repositories__

If the hosts of your ThoughtSpot cluster can access external repositories, either directly or through a proxy, your cluster is online. You can then proceed to download [Yum](#yum-repositories), [Python](#python-repositories), and [R](#r-repositories) package repositories.

{: id="mirror-repositories"}
**Internal mirror repository**

If the hosts of your ThoughtSpot cluster have access to an internal repository that mirrors the public repositories, copy the [Yum](#yum-repositories), [Python](#python-repositories), and [R](#r-repositories) package repositories to your hosts.

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

## Next steps
Next, [get ThoughtSpot artifacts]({{ site.baseurl }}/appliance/amazon-linux-2/al2-ts-artifacts.html).
