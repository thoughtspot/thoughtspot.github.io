---
title: [About privileges]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can assign privileges at the group level. Then you create users and assign them to groups. This is how you grant users access to different capabilities in ThoughtSpot.

Each group includes a set of privileges for its users. Good planning when creating groups and assigning privileges will pay off in ease of administration and a better search experience. The privileges a group has determine the actions that its members are allowed to do. If a user belongs to more than one group, they will have the highest level of the privileges from all the groups they belong to.

Here are the different privileges, and the capabilities they enable:

|Privilege|Description|
|---------|-----------|
|**Has administration privileges**|Can manage Users and Groups and has view and edit access to all data.|
|**Can upload user data**|Can upload their own data from the browser using **Import Data**.|
|**Can download data**|Can download data from search results and pinboards.|
|**Can share with all users**|Can see the names of and share with users outside of the groups the user belongs to.|
|**Can manage data**|Can create a worksheet. Can also create an aggregated worksheet from the results of a search by selecting **Save as worksheet**. Can also use ThoughtSpot Data Connect, if it is enabled on your cluster.|
|**Can schedule pinboards**|Can create pinboard schedules and edit their own scheduled jobs.|

Privileges are additive, meaning that if a user belongs to more than one group, they will have the highest level of privileges from among the groups they are a member of. They are also inherited from the parent, so that a sub-group gets all the same privileges of its parent, all the way up the group hierarchy.

If you add the privilege **Has administration privileges** to a group, note that all users in that group will be able to see all the data in ThoughtSpot. Administrators can see all data sources, and [Row level security](../data_security/about_row_security.html#) does not apply to them.

There is a default group called **All**, which includes every user in ThoughtSpot. When you create a new user, they will be added to the **All** group automatically. You cannot delete the **All** group or remove members from it. If you have a common set of privileges you want every user to have (typically **Can upload user data** and/or **Can download data**), add those privileges to the **All** group.

Permissions to see and edit tables, worksheets, and pinboards are set when you share them with users and groups, as described in the topic [Data security](../data_security/sharing_security_overview.html#).

**Parent topic:** [Manage users, groups, and privileges](../../admin/users_groups/about_users_groups.html)
