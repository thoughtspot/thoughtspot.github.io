---
title: ["Add, edit, or delete a user"]
keywords: "user, delete, add, edit, manage"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

For each unique person who accesses ThoughtSpot, you must create a user account.

You can create users directly in ThoughtSpot, or import users and user groups through LDAP or similar protocols.

When you create a user manually in ThoughtSpot, you continue to manage that user in ThoughtSpot. For example, you can reset the user's password, change their email, and so on. If forgot the admin password, please call [ThoughtSpot Support.]({{ site.baseurl }}/admin/misc/contact.html#)

For users who have access through LDAP, the LDAP installation manages all  user information.

## [Create a user through the interface](#create-user-ui)

This procedure demonstrates how to create a user manually. When you create a user, you can assign group memberships. The group's privileges and permissions apply to all of its members. Also, note that all users automatically belong to the group **All**.

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
     <col width="10%" />
     <col width="70%" />
     </colgroup>
      <tr>
        <th>Field</th>
        <th>Required?</th>
        <th><p>Description</p></th>
      </tr>
      <tr>
        <th>Username</th>
        <td>Yes</td>
        <td><p><em>Mandatory</em> A login name for the user. Usernames must be unique and lowercase.
        <p>If you are using Active Directory to authenticate users, and your LDAP configuration requires users to be created manually (i.e. they are not created automatically in ThoughtSpot upon authentication), the username you specify has to be domain qualified (e.g. <code>username@ldap.thoughtspot.com</code>), and you must enter a dummy password.</p></td>
      </tr>
      <tr>
        <th>Display name</th>
        <td>Yes</td>
        <td>A unique name for the user (usually their first and last name).</td>
      </tr>
      <tr>
        <th>Sharing visibility</th>
        <td>Yes</td>
        <td>Indicate whether objects can be shared with this user. When set to <b>SHAREABLE</b>,
        this user is an option in the <b>Share</b> dialog.</td>
      </tr>
      <tr>
        <th>Change password</th>
        <td>Yes</td>
        <td>A password.</td>
      </tr>
      <tr>
        <th>Confirm password</th>
        <td>Yes</td>
        <td>Enter the password again.</td>
      </tr>   
      <tr>
        <th>Email</th>
        <td>Yes</td>
        <td><p>The user's email address. ThoughtSpot uses this for  notification when another user shares something with them, for onboarding, for the <strong>Ask an Export</strong> feature, and others.</p>
        <p>Note that during cluster configuration, the domain is specified. ThoughtSpot does not accept emails outside this domain.</p></td>
      </tr>    
      <tr>     
        <th>Send a welcome email</th>
        <td>No</td>
        <td>When checked, this option ensures that the new user receives a welcome email.</td>
      </tr>
      <tr>     
        <th>Email message text</th>
        <td>No</td>
        <td>This enter text of the optional welcome email here.</td>
      </tr>
      <tr>
        <th>Manage groups</th>
        <td>No</td>
        <td><p>Select all the groups the user belongs to.</p>
        <p>Note that if you add the user to a group that has the privilege <b>Has administration privileges</b>, they can see all the data in ThoughtSpot. </p>
        <p>When you create a new user, the groups they belong to define the following attributes for the user:</p>
        <ul>
        <li><strong>Privileges</strong>: the actions they can perform, defined when you <a href="add-group.html">Add a group and set security privileges</a>.</li>
        <li><strong>Permissions</strong>: the data they can access and view, defined when you consider <a href="{{"/admin/data-security/sharing-security-overview.html#" | prepend: site.baseurl }}">Data security</a>.</li>
      </ul>
        <p>Administrators can see all data sources, and <a href="{{"/admin/data-security/about-row-security.html#" | prepend: site.baseurl }}">Row level security</a> does not apply to them.</p></td>
      </tr>
     </table>

6. Click **Add** to create the user.

Note that this process of identifying the user's needs helps setup a robust onboarding process. See [Onboarding users]({{ site.baseurl }}/end-user/onboarding/intro-onboarding.html#)


## Edit or delete a user ##

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
