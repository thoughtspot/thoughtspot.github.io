---
title: [Amazon Linux 2 Deployment Overview]
summary: "Run ThoughtSpot on an Amazon Linux 2 image that your organization manages internally."
last_updated: 4/8/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Starting with Release 6.1.1, you have the flexibility to run ThoughtSpot on an Amazon Linux 2 image that your organization manages internally. This enables your organization to manage the OS and perform SysAdmin tasks. ThoughtSpot certifies Amazon Linux 2 on the following platform:
- [Amazon Web Services (AWS) EC2]({{ site.baseurl }}/appliance/aws/configuration-options.html)

Follow these steps to deploy ThoughtSpot through Amazon Linux 2:

| &#10063; | [Complete installation prerequisites]({{ site.baseurl }}/appliance/amazon-linux-2/al2-prerequisites.html) |
| &#10063; | [Get ThoughtSpot artifacts]({{ site.baseurl }}/appliance/amazon-linux-2/al2-ts-artifacts.html)|
| &#10063; | [Install ThoughtSpot in Amazon Linux 2 online clusters]({{ site.baseurl }}/appliance/amazon-linux-2/al2-install-online.html), where the hosts can connect to the public repositories to download the required packages, or<br/>[Install ThoughtSpot in Amazon Linux 2 offline clusters]({{ site.baseurl }}/appliance/amazon-linux-2/al2-install-offline.html), where the hosts cannot connect to the public repositories to download the required packages. |

Additionally, learn how you can:
- [Upgrade ThoughtSpot for Amazon Linux 2 to a new release]({{ site.baseurl }}/appliance/amazon-linux-2/al2-upgrade.html)
- [Add a new node to an existing ThoughtSpot cluster in Amazon Linux 2]({{ site.baseurl }}/appliance/amazon-linux-2/al2-add-node.html)

Finally, to see what additional 3rd-party Yum, python, and R packages your ThoughtSpot installation includes by default, see [Packages installed with ThoughtSpot for Amazon Linux 2]({{ site.baseurl }}/appliance/amazon-linux-2/al2-packages.html).
