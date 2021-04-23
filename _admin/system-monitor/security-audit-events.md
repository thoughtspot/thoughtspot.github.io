---
title: ["Security audit events"]
summary: Your security team can collect security audit events based on user activity in ThoughtSpot.
last_updated: 4/23/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You may need to view or collect logs for monitoring or troubleshooting purposes. To access these logs, run [tscli logs collect]({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-logs).

ThoughtSpot collects logs for the following events:

| Event | Description |
| --- | --- |
| Successful login | When a user successfully logs into ThoughtSpot, either as a local user, an IdP user, or an AD user. |
| Failed login | When a login attempt fails / authentication is denied. Either the password of a local user is incorrect, or IdP / AD deny the authentication request. |
| Locked account | When a local user account is locked because the user failed to authenticate a certain number of times in a row. To configure the number of failed attempts before lockout, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html). |
| Account logout | When a user logs out from ThoughtSpot. |
| Profile change | Any change happening to the user profile (whether manual in the Admin Console or over SAML sync). |
| Group creation | Creating a new group in ThoughtSpot, either manually through the Admin Console, or through the internal API. |
| Group deletion | Deleting a group in ThoughtSpot, either manually through the Admin Console, or through the internal API. |
| User group change | Attempt to add users to or remove them from a group. The attempt can be successful or unsuccessful. |
| Group modification | Modifying the properties of a group, either in the Admin Console or through the internal API. These properties include the group name, sharing policy, etc. |
| Privilege change | Adding privileges to or removing them from a group. |
| User account creation | Creating a new user account, either in the Admin Console or through the internal API. |
| User account deletion | Deleting a new user account, either in the Admin Console or through the internal API. |
| Password change | Attempt to change a user's password. The attempt can be successful or unsuccessful. |
| Object creation | Creating a new object (Pinboard, Answer, Worksheet, etc) in ThoughtSpot. |
| Object deletion | Deleting a new object (Pinboard, Answer, Worksheet, etc) in ThoughtSpot.
| Object modification (Pinboard or Answer) | Modifying the properties of an object (Pinboard, Answer, Worksheet, etc). |
| Object sharing | Attempt to share an object with groups or users. The attempt can be successful or unsuccessful. |
