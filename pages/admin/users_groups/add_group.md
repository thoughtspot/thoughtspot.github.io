---
title: ["Create, edit, or delete a group"]
tags:
keywords: "group,user,privileges"
last_updated: tbd
summary: "Good planning when creating groups and assigning privileges will pay off in ease of administration and a better search experience."
sidebar: mydoc_sidebar
---
Before adding users, create the groups they will belong to. Each group includes a set of privileges for its users.


## Create a group

To create a group and add privileges for the group:

1. Log into ThoughtSpot from a browser.
2. Click on the **Admin** icon, on the top navigation bar.

    ![](../../shared/conrefs/../../images/admin_icon.png)

3.  In the **Admin** panel, click on **User Management** and **Groups**.

    ![](../../shared/conrefs/../../images/manage_groups_3.2.png "Manage Groups")

4. Click the **+ Add Group** button on the upper right hand side of the list of groups.

     ![](../../images/add_group_3.2.png "Add a new Group")

5. Enter the details for the new group:

     ![](../../images/new_group_dialogue_3.2.png "Enter Group details")

    1. Enter a unique name for the group.
    2. Optionally enter a description.
    3. Check the [privileges](about_privileges.html#) you want to grant to the group.

        If you add the privilege **Has administration privileges** to a group, note that all users in that group will be able to see all the data in ThoughtSpot. Administrators can see all data sources, and [Row level security](../data_security/about_row_security.html#) does not apply to them.

    4. Click the **Manage Groups** tab if you want to add sub-groups. Find the groups you want to add in the list, or search for them by name. Check the box next to each group you want to add to the group.
    5. Click the **Manage Users** tab if you want to add users. Find the users you want to add in the list, or search for them by name. Check the box next to each user you want to add to the group.

6. Click **Create** to create the group.

## Edit or delete a group

After adding a group, you can always go in and change its settings to add or revoke privileges. The new settings will apply to all the group members. To edit or delete an existing group:

1. Log into ThoughtSpot from a browser.
2. Click on the **Admin** icon, on the top navigation bar.
3. In the **Admin** panel, click on **User Management** and **Groups**.

    ![](../../shared/conrefs/../../images/manage_groups_3.2.png "Manage Groups")

4. Find the group you want to edit in the list and click its name, or the edit icon ![](../../images/edit_icon.png).

   If you don't see the name of the group, try searching for it. You can also delete a group from this page by clicking the **Delete** icon. Deleting a group does not delete its users.

5. Make your changes and click **Update**.


## Add multiple users to a group

You can add multiple users to a group using one button. To add multiple users to a group:

1. Log into ThoughtSpot from a browser.
2. Click on the **Admin** icon, on the top navigation bar.
3.  In the **Admin** panel, click on **User Management** and **Users**.

     ![](../../shared/conrefs/../../images/manage_users_3.2.png "Manage Users")

4. Select the users you would like to add to the same group from the list.
5. Click the **Add Users to Groups** button on the top of the list of users.

     ![](../../images/add_multiple_users_to_a_group.png "Add a new User")
