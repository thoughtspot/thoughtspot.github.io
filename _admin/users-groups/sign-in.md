---
title: ["Managing user logins and sessions"]
summary: Learn how to manage user logins and sessions.
last_updated: 11/10/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## User login

Users can log into ThoughtSpot in several ways: as users with [local ThoughtSpot accounts]({{ site.baseurl }}/admin/ts-cloud/authentication-local.html) and by using [SAML]({{ site.baseurl }}/admin/ts-cloud/authentication-integration.html). Refer to [Authentication]({{ site.baseurl }}/admin/architecture/authentication.html) for more information about ThoughtSpot's authentication options. Administrators can configure their preferred authentication method from the **Admin Console**.

## User sessions
Depending on which version of ThoughtSpot Cloud you first deployed your cluster on, your users' experience with maximum session validity and idle session timeouts may differ.

### Clusters deployed on November Cloud 2021 and later

When a user clicks **Remember me** on the login screen:

* **Idle session timeout**: If a user is not active for 14 days, ThoughtSpot logs the user out, and the user must enter their login credentials again.
* **Maximum session validity**: ThoughtSpot forces the user's session to expire after 14 days, even if they are active throughout that period.

When a user does not click **Remember me**:

* **Idle session timeout**: If a user is not active for 30 minutes, ThoughtSpot logs the user out, and the user must enter their login credentials again.
* **Maximum session validity**: No maximum session validity.

### Clusters deployed on October Cloud 2021 and earlier

When a user clicks **Remember me** on the login screen:

* **Idle session timeout**: If a user is not active for 60 minutes, ThoughtSpot logs the user out, and the user must enter their login credentials again.
* **Maximum session validity**: ThoughtSpot forces the user's session to expire after 7 days, even if they are active throughout that period.

When a user does not click **Remember me**:

* **Idle session timeout**: If a user is not active for 30 minutes, ThoughtSpot logs the user out, and the user must enter their login credentials again.
* **Maximum session validity**: No maximum session validity.

To increase idle session timeouts or maximum session validity, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).
