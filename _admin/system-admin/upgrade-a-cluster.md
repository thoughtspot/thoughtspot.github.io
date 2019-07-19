---
title: [Upgrade a cluster]
keywords: tbd
last_updated: tbd
summary: "ThoughtSpot is installed or updated from a release tarball which contains the ThoughtSpot application, third-party software, and Operating System image."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot is installed or updated from a release tarball which contains the ThoughtSpot application (binaries and configuration), third-party software, and Operating System image. Third party softwares are licensed software components necessary for operation of the ThoughtSpot application. These include Java, Boost C++ libraries, Google protocol buffers, and so on.

ThoughtSpot patches the Operating System at the time of upgrades. The exact same process used during installation is also applied during upgrades. The previous OS image on a node gets replaced by the new image carried in the release tarball.

{% include note.html content="ThoughtSpot Support performs any minor or major upgrade of ThoughtSpot cluster. ThoughtSpot Support will contact you to schedule an update when one becomes available." %}


## Upgrade using Management Console


{% include note.html content="The upgrade feature is now available in beta for customers with ThoughtSpot 5.3 or later. Please contact ThoughtSpot Support, if you want to try it." %}

ThoughtSpot now comes with a brand new Management Console that allows you to upgrade a cluster. When a new release or a patch is available for update, it appears under the **Update** menu in the Management Console as seen below:
![]({{ site.baseurl }}/images/update.png "cluster update")

Upgrading a cluster typically involves three steps:
- **Download release**:need information
- **Pre-update checks**: need information
- **Update cluster**: need information

To update a cluster:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Update** icon on the top navigation bar.

   **image**

4. Expand the update you wish to use from the **Available Updates** list. This takes you to three-step process as expalined above:
    - Click **Download** to download new update tarball from the ThoughtSpot release server in the Download release section. Wait for the download to complete.
    - Click **Pre-Update** to run a series of diagnostic tests to ensure the server readiness before the update. Wait for the checks to complete.
    - Click **Update** to update your cluster to the new release version. Always perform this under a scheduled maintenance period.
