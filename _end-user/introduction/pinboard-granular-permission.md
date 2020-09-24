---
title: [Granular access to Pinboards]
last_updated: 09/22/2020
summary: "For embedded uses of ThoughtSpot, we added greater granularity to Pinboard access. With new `Read only` access to Pinboards, users only have limited access to curated Pinboards that are explicitly shared with them."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot has a user privilege that prevents certain users from creating or modifying Pinboards.

To ensure that users have 'Read only' access, edit the user group permission and check only the **[Cannot create or update Pinboards]({{ site.baseurl }}/end-user/introduction/about-privileges-end-user.html#read-only)** privilege.

When a user has 'Read only' access, they are limited to viewing and **Exploring** curated Pinboards. They can also **Replay search** with new data, and **Present** the Pinboard.

These users *cannot* perform the following actions that are otherwise available on the Pinboard to most users:
  - Share
  - Pin
  - Download
  - Edit
  - Copy and edit
  - Copy embed link

To demonstrate this, compare the privileges of the users who are members of the **Sales** user group, and users who are in the **Sales Management** group.

![Privileges for two different user groups]({{ site.baseurl }}/images/privilege-cannot-create-update-pinboards.png "Privileges for two different user groups")

Members of the **Sales** user group can only see and explore the curated Pinboards and their component Answers. Notice that members in the "Sales Management" user group can see and explore curated Pinboards, copy these Pinboards and perhaps modify them, create their own Pinboards, share Pinboards with other users, and download the chart as an image.

![Available actions for the two user groups]({{ site.baseurl }}/images/privilege-cannot-create-update-pinboards-available-actions.png "Available actions for the two user groups")

When initially inviting both sets of users to view curated Pinboards, the Administrator has to **Share** the Pinboards.

![Available actions for the two user groups]({{ site.baseurl }}/images/privilege-cannot-create-update-pinboards-share.png "Available actions for the two user groups")

- We recommend that you select the option to **Give view access to underlying data sources**, as it enables the users to explore the data they can see.

- Set the sharing level for the 'Read only' to **Can View**. For users with greater access privileges, you may do the same, or choose to set their sharing to **Can Edit**, depending on the needs of your organization.
