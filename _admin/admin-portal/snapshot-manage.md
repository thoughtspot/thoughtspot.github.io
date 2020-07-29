---
title: [Manage and create snapshots]
last_updated: 7/28/2020
summary: A snapshot is a point-in-time image of your running cluster. You can use a snapshot to restore the cluster to a specific point in time. Create and manage snapshots from the Administration Portal.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="manual-snapshot"}
## About manual snapshots

You must [create a snapshot](#admin-portal-create) before making any changes to your cluster's environment, loading a large amount of data, or changing the structure of a table. ThoughtSpot supports up to 20 manual snapshots. You must clear them to create new snapshots. You can delete a snapshot [from the Administration Portal](#admin-portal-delete).

ThughtSpot generates a snapshot in approximately 20 seconds, depending on the size of the cluster. To restore from a snapshot, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

{% include note.html content="During an upgrade, all snapshots from the previous version of ThoughtSpot become manual snapshots." %}

{% include content/admin-portal/snapshot-manage.md %}
