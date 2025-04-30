---
title: [Granular access to Pinboards]
last_updated: 10/15/2020
summary: "ThoughtSpot now supports limiting some users to <strong>Read only</strong> access on curated Pinboards. These users can view and explore; however, they cannot copy, alter, download, or share the Pinboards."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Starting with release 6.2.1, ThoughtSpot has a user privilege that prevents certain users from creating or modifying Pinboards.

To ensure that users have <strong>Read only</strong> access, edit the user group permission and select the **[Cannot create or update Pinboards]({{ site.baseurl }}/end-user/introduction/about-privileges-end-user.html#read-only)** privilege.

When a user has <strong>Read only</strong> access, they are limited to viewing, **Exploring**, and **Presenting** the curated Pinboard. Users can also **Replay search** for Answers, unless they are in embedded mode.

These users *cannot* perform the following actions that are otherwise available on the Pinboard to most users:
  - Share
  - Pin
  - Download
  - Edit
  - Copy and edit
  - Copy embed link

## How to limit access to Pinboards

Follow these steps to limit access to Pinboards:

1. Ensure that you are on ThoughtSpot version 6.2.1 or later.
1. [Contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to enable the feature.
2. Identify users for limited access to curated Pinboards, and assign them to the same User Group.
3. Assign the **[Cannot create or update Pinboards]({{ site.baseurl }}/end-user/introduction/about-privileges-end-user.html#read-only)** privilege to the User Group.
4. Select and Share the curated Pinboards with the User Group.

## Example of two User Groups with different access to Pinboards

To demonstrate this, compare the privileges of the users who are members of the **Sales** user group, and users who are in the **Sales Management** group.

![Privileges for two different user groups]({{ site.baseurl }}/images/privilege-cannot-create-update-pinboards.png "Privileges for two different user groups")

Members of the **Sales** User Group can only see and explore the curated Pinboards and their component Answers. Notice that members in the **Sales Management** User Group can also see and explore curated Pinboards, and also copy these Pinboards and perhaps modify them, create their own Pinboards, share Pinboards with other users, and download the chart as an image.

![Available actions for the two user groups]({{ site.baseurl }}/images/privilege-cannot-create-update-pinboards-available-actions.png "Available actions for the two user groups")

When initially inviting both sets of users to view curated Pinboards, the Administrator has to **Share** the Pinboards.

![Available actions for the two user groups]({{ site.baseurl }}/images/privilege-cannot-create-update-pinboards-share.png "Available actions for the two user groups")

- We recommend that you select the option to **Give view access to underlying data sources**, as it enables the users to explore the data they can see.

- Set the sharing level for the 'Read only' to **Can View**. For users with greater access privileges, you may do the same, or choose to set their sharing to **Can Edit**, depending on the needs of your organization.
