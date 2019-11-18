---
title: [Upgrade a cluster]
summary: You can upgrade a cluster to a new release.
last_updated: 11/18/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot is installed or updated from a release tarball which contains the ThoughtSpot application (binaries and configuration), third-party software, and Operating System image. Third party softwares are licensed software components necessary for operation of the ThoughtSpot application. These include Java, Boost C++ libraries, Google protocol buffers, and so on.

ThoughtSpot patches the Operating System at the time of upgrades. The exact same process used during installation is also applied during upgrades. The previous OS image on a node gets replaced by the new image carried in the release tarball.

{% include note.html content="ThoughtSpot Support will contact you to schedule an update when a minor or major upgrade becomes available." %}

<!--## Upgrade using Management Console

{% include note.html content="The Management Console is now available in **beta** for customers with ThoughtSpot 5.3 or later. Please contact ThoughtSpot Support, if you want to try it." %}

ThoughtSpot now comes with a brand new Management Console that allows you to upgrade a cluster. When a new release or a patch is available for update, it appears under the **Update** menu in the Management Console as seen below:
![]({{ site.baseurl }}/images/update-available.png "cluster update")

Upgrading a cluster typically involves three steps:
- **Download release**:This option allows you to download a valid release tarball from an available list.
- **Pre-update checks**: This option enables you to run a series of diagnostic health checks to test the server readiness before the cluster upgrade.
- **Update cluster**: This option allows you to upgrade the cluster once you successfully completed the pre-update checks.

{% include note.html content="Ensure that you perform all pre-update checks well in advance to avoid any unforeseen issues before the scheduled maintenance window." %}

To update a cluster:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Update** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/update1.png)

4. Expand the update you wish to use from the **Available Updates** list. This takes you to three-step process as explained above:

    ![]({{ site.baseurl }}/images/update-steps.png)

    - Click **Download** in the Download release section to download a new release tarball from the ThoughtSpot release server. Wait for the download to complete.
    - Click **Pre-Update** in the Pre-update checks section to run a series of health tests. Wait for the checks to complete.
    - Click **Update** in the Update cluster section to update your cluster to the new release version. Always perform this under a scheduled maintenance period.
-->
