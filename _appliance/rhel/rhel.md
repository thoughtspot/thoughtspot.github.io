---
title: [RHEL and OEL Deployment Overview]
summary: "Run ThoughtSpot on your own internally managed RedHat Enterprise Linux (RHEL) 7.8 or 7.9 image, or on an Oracle Enterprise Linux (OEL) 7.9 image."
last_updated: 4/8/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You have the flexibility to run ThoughtSpot on an RHEL 7.8 or 7.9 image or an OEL 7.9 image that your organization manages internally. This enables your organization to manage the OS and perform SysAdmin tasks.

ThoughtSpot certifies RHEL 7.8 and 7.9 on the following platforms:

- Bare metal deployments on the two ThoughtSpot-certified hardware appliances: [DELL]({{ site.baseurl }}/appliance/hardware/installing-dell.html) and [SMC]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html)
- Cloud deployments: [Amazon Web Services (AWS) EC2]({{ site.baseurl }}/appliance/aws/configuration-options.html), [Microsoft Azure]({{ site.baseurl }}/appliance/azure/configuration-options.html), and [Google Cloud Platform (GCP)]({{ site.baseurl }}/appliance/gcp/configuration-options.html)
- [VMware]({{ site.baseurl }}/appliance/vmware/vmware-intro.html)

ThoughtSpot certifies OEL 7.9 on the following platforms:
- Cloud deployments: [Amazon Web Services (AWS) EC2]({{ site.baseurl }}/appliance/aws/configuration-options.html) and [Google Cloud Platform (GCP)]({{ site.baseurl }}/appliance/gcp/configuration-options.html)
- [VMware]({{ site.baseurl }}/appliance/vmware/vmware-intro.html)

{% include note.html content="ThoughtSpot does <strong><em>not</em></strong> certify OEL on Microsoft Azure, SMC, or Dell." %}

Follow these steps to deploy ThoughtSpot through RHEL or OEL:

| &#10063; | [Complete installation prerequisites]({{ site.baseurl }}/appliance/rhel/rhel-prerequisites.html) |
| &#10063; | [Get ThoughtSpot artifacts]({{ site.baseurl }}/appliance/rhel/rhel-ts-artifacts.html)|
| &#10063; | [Install ThoughtSpot in RHEL or OEL online clusters]({{ site.baseurl }}/appliance/rhel/rhel-install-online.html), or<br/>[Install ThoughtSpot in RHEL or OEL offline clusters]({{ site.baseurl }}/appliance/rhel/rhel-install-offline.html) |

Additionally, learn how you can:
- [Upgrade ThoughtSpot for RHEL or OEL to a new release]({{ site.baseurl }}/appliance/rhel/rhel-upgrade.html)
- [Add a new node to an existing ThoughtSpot cluster in RHEL or OEL]({{ site.baseurl }}/appliance/rhel/rhel-add-node.html)

Finally, to see what additional 3rd-party Yum, Python, and R packages your ThoughtSpot installation includes by default, see [Packages installed with ThoughtSpot for RHEL or OEL]({{ site.baseurl }}/appliance/rhel/rhel-packages.html).
