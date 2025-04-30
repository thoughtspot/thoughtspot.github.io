---
title: [Upgrade a cluster]
summary: You can upgrade a cluster to a new release.
last_updated: 11/18/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot is installed or updated from a release tarball that contains the ThoughtSpot application (binaries and configuration), third-party software, and Operating System image. Third party softwares are licensed software components necessary for operation of the ThoughtSpot application. These include Java, Boost C++ libraries, Google protocol buffers, and so on.

ThoughtSpot patches the Operating System at the time of upgrades. Installation and upgrade use the same process, replacing the older OS image on a node by the new image delivered in the release tarball.

{% include tip.html content="ThoughtSpot Support may contact you to schedule an update, or you can ask us to help you upgrade your cluster at an operationally convenient time. We encourage you to work with your ThoughtSpot support team to schedule your upgrade in advance, so we can confirm that the cluster is in a good state before upgrading." %}
