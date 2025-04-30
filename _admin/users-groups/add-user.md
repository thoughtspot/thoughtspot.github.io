---
title: ["Add, edit, or delete a user"]
keywords: "user, delete, add, edit, manage"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You will create a user account for each unique person who will access ThoughtSpot, either manually or through LDAP. If a user has access through LDAP, that user's information is managed via your LDAP installation.  If you create a user manually in ThoughtSpot, you manage that user in ThoughtSpot.

You can edit manually created users through the interface. If a manually-created user forgets their password, you can reset it by editing the user. If you have forgotten the admin password, please call [ThoughtSpot Support.]({{ site.baseurl }}/admin/misc/contact.html#)


## Create a user through the interface

This procedure shows how to creating a user manually. When you create a user, you can assign group memberships. The group's privileges and permissions apply to all of its members. Any user you create will be added to the group **All** automatically.

1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon, on the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3.  In the **Admin** panel, click **User Management** and **Users**.

     ![]({{ site.baseurl }}/images/manage_users_3.2.png "Manage Users")

4. Click the **+ Add User** button on the upper right hand side of the list of groups.

     ![]({{ site.baseurl }}/images/add_user_3.2.png "Add a new User")

5. Enter the details for the new user:

     ![]({{ site.baseurl }}/images/new_user_dialogue.png "Create a user manually")

     <table>
     <colgroup>
     <col width="20%" />
     <col width="80%" />
     </colgroup>
      <tr>
        <th>Field</th>
        <th>Description</th>
      </tr>
      <tr>
        <th>Username</th>
        <td><p>A login name for the user. Usernames must be unique and lowercase.</p>
        <p>If you are using Active Directory to authenticate users, and your LDAP configuration requires users to be created manually (i.e. they are not created automatically in ThoughtSpot upon authentication), the username you specify has to be domain qualified (e.g. <code>username@ldap.thoughtspot.com</code>), and you must enter a dummy password.</p></td>
      </tr>
      <tr>
        <th>Display name</th>
        <td>A unique name for the user (usually their first and last name).</td>
      </tr>
      <tr>
        <th>Sharing visibility</th>
        <td>Indicate whether objects can be shared with this user. When set to <b>SHAREABLE</b>,
        this user is an option in the <b>Share</b> dialog.</td>
      </tr>
      <tr>
        <th>Change password</th>
        <td>A password.</td>
      </tr>
      <tr>
        <th>Confirm password</th>
        <td>Enter the password again.</td>
      </tr>   
      <tr>
        <th>Email address</th>
        <td>The user's email address. This is used for notification when another user shares something with them.</td>
      </tr>         
      <tr>
        <th>Manage groups</th>
        <td><p>Select all the groups the user will belong to. If you add the user to a group that has the privilege <b>Has administration privileges</b>, note that they will be able to see all the data in ThoughtSpot. </p>
        <p>
        When you create a new user, the groups they belong to define the user's:
        <ul>
        <li>Privileges, the actions they are allowed to do, which are defined when you <a href="add-group.html">Add a group and set security privileges</a>.</li>
        <li>Permissions, the data they can access and view, which is defined when you <a href="{{"/admin/data-security/sharing-security-overview.html#" | prepend: site.baseurl }}">Data security</a>.</li>
      </ul>
        </p>
        <p>Administrators can see all data sources, and <a href="{{"/admin/data-security/about-row-security.html#" | prepend: site.baseurl }}">Row level security</a> does not apply to them.</p></td>
      </tr>
     </table>

6. Click **Add** to create the user.



## Edit or delete a user

After a user has been created, you can always go back and change their settings, for example to change their group memberships or change their password. You can also change their name as long as it remains unique

As an administrator, you can edit a user and change the groups the user belongs to. You can also edit a user to reset a user’s password by entering and confirming the new password. This is useful if a user has forgotten their password, or to effectively disable an account.

To edit an existing user:

1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon, on the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3.  In the **Admin** panel, click **User Management** and **Users**.

     ![]({{ site.baseurl }}/images/manage_users_3.2.png "Manage Users")

4. Find the user you want to edit in the list and click its name or the edit icon ![]({{ site.baseurl }}/images/edit_icon.png). If you don't see the name of the user, try searching for it.

    You can also delete a user from this page by clicking the **Delete** icon.

5. Make your changes and click **Save**.
