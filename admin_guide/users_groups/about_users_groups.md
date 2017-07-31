# Manage users, groups, and privileges

Before people can log in and use ThoughtSpot, you need to create a username, a password, and a membership in one or more groups for them. Creating groups and assigning users to them makes privilege management easier.

## Ways of managing users and groups

This section describes manual creation of users, groups, and privileges, but you can also manage users through [LDAP](../setup/about_LDAP.html#) or SAML. For information on setting up SAML authentication, see the ThoughtSpot Application Integration Guide.

## The "All" group

There is a default group called **All**, which includes every user in ThoughtSpot. When you create a new user, they will be added to the **All** group automatically. You cannot delete the **All** group or remove members from it.

## Privileges

Privileges determine what kinds of actions users are allowed to do. Plan your groups so that you can use them to assign a common set of privileges to multiple users. Privileges are set at the group level. For more information on the privileges you can assign and how to assign them, see [About privileges](about_privileges.html#).

## Nested groups \(groups within groups\)

You can also have a hierarchy of groups. That is, groups can belong to \(i.e. be children of\) other groups. When using group hierarchies, permissions are inherited from the parent group. So if you're a member of a sub-group, you would automatically have the privileges of the parent group.

