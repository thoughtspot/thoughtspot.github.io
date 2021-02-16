---
title: [ThoughtSpot deployment artifacts for RHEL]
summary: "Get the two primary tarball artifacts for configuring ThoughtSpot using RHEL."
last_updated: 2/16/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You must have the following artifacts to install or upgrade ThoughtSpot applications that run on RHEL:

- The **Ansible tarball**, the **Terraform template**, the **Chef template**, and the **Puppet** template each contain a set of scripts for installing OS packages, dependencies, the ThoughtSpot CLI (tscli), and configuring your cluster (preparing the disks). Choose ***one*** of these four templates, depending on which tool you have in your organization. You can obtain these by requesting them from <a href="https://community.thoughtspot.com/customers/s/contactsupport" target="_blank">ThoughtSpot Support</a>.

- The **Release tarball** contains the ThoughtSpot software binaries (`tar.gz`) of the release version you are installing or upgrading; for example, ThoughtSpot Release 6.0.4. You can obtain this file from the <a href="https://thoughtspot.egnyte.com/" target="_blank">ThoughtSpot secure file sharing system</a>. We sent this information to you in our Welcome email. Contact ThoughtSpot Support if you experience difficulties accessing these files.
