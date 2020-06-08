---
title: [ThoughtSpot artifacts for Amazon Linux 2]
summary: "Get the two primary tarball artifacts for configuring ThoughtSpot using Amazon Linux 2."
toc: false
last_updated: 6/8/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You must have the following artifacts to install or upgrade ThoughtSpot applications that run on Amazon Linux 2:

- The **Ansible tarball** contains a set of scripts for installing OS packages, dependencies, the ThoughtSpot CLI (tscli), and configuring your cluster (preparing the disks). You can obtain this tarball from your ThoughtSpot contact.

- The __Release tarball__ contains the ThoughtSpot software binaries (`tar.gz`) of the release version you are installing or upgrading; for example, ThoughtSpot Release 6.1.1. You can obtain this file from the <a href="https://thoughtspot.egnyte.com/" target="_blank">ThoughtSpot secure file sharing system</a>. We sent this information to you in our Welcome email. Contact ThoughtSpot Support if you experience difficulties accessing these files.

## Next steps
Next, [install ThoughtSpot in Amazon Linux 2 online clusters]({{ site.baseurl }}/appliance/amazon-linux-2/al2-install-online.html), where the hosts can connect to the public repositories to download the required packages, or [install ThoughtSpot in Amazon Linux 2 offline clusters]({{ site.baseurl }}/appliance/amazon-linux-2/al2-install-offline.html), where the hosts cannot connect to the public repositories to download the required packages.
