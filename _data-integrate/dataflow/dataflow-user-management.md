---
title: [Manage DataFlow users]
last_updated: 06/24/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Learn how to add and manage users in DataFlow.

Note that you must have administrator privileges to perform these actions.

## Create a new user

1. Click **Admin** on the top navigation bar.

2. In the **User management** interface, click **Add user**.

   ![Add users]({{ site.baseurl }}/images/dataflow-user-management-add-user.png "Add users")

3. In the **Add user** interface, specify the following properties:

   ![Add a user to DataFlow]({{ site.baseurl }}/images/dataflow-user-add.png "Add a user to dataflow")   

   <dl id="dataflow-user-properties">
     <dlentry id="dataflow-user-prop-name">
       <dt>Name</dt>
       <dd>Specify the name of the account holder.</dd></dlentry>
     <dlentry id="dataflow-user-prop-thoughtspot-user-id">
       <dt>ThoughtSpot user ID</dt>
       <dd>Specify the user ID, or account. Must match an existing account in ThoughtSpot.</dd></dlentry>
     <dlentry id="dataflow-user-prop-password">
       <dt>Password</dt>
       <dd>Enter a password; does not have to match password in ThoughtSpot.</dd></dlentry>  
     <dlentry>
       <dt>Confirm password</dt>
       <dd>Enter the combination of characters that matches the <a href="#dataflow-user-prop-password">Password</a>.</dd></dlentry>
     <dlentry id="dataflow-user-prop-email">
       <dt>Email</dt>
       <dd>Specify the email of the account holder; must be in whitelisted domain.</dd></dlentry>
     <dlentry id="dataflow-user-prop-admin">
         <dt>Admin user</dt>
         <dd>Specify if this account has administrator privileges.</dd></dlentry>            
   </dl>

4. Click **Add**.

    You can now see the new user in the list of users.   

## Change user properties

Follow these steps to make changes to an existing user account.

1. Click **Admin** on the top navigation bar.

2. In the **User management** interface, select the user you want to change.

   ![Select user to edit]({{ site.baseurl }}/images/dataflow-user-select.png "Select user to edit")

3. In the **Edit user** interface, change any of the properties, and click **Update**.

   - **Change name**: In this example, we changed the **Name** associated with the account.

     ![Edit user in DataFlow]({{ site.baseurl }}/images/dataflow-user-edit.png "Edit user")

   - **Change password**: To change the  password for the account, enter the new password and confirm it.

   - **Make admin**: To promote a regular user to administrator status, select the **Admin user** checkbox. To demote an existing admin user to regular user status, unselect the **Admin user** checkbox.

     ![Promote user to admin in DataFlow]({{ site.baseurl }}/images/dataflow-user-admin.png "Promote user to admin in DataFlow")

   - **Disable user**: To disable a user, turn the toggle on. To enable a user again, turn the toggle off.

     ![Disable user in DataFlow]({{ site.baseurl }}/images/dataflow-user-disable.png "Disable user in DataFlow")

     A disabled user still appears in the list of users, with a **Disabled** tag.

     ![Disabled user in list of DataFlow users]({{ site.baseurl }}/images/dataflow-user-list-disabled.png "Disabled user in list of DataFlow users")
