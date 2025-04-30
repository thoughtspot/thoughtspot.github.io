---
title: [Configure internal authentication]
last_updated: 10/09/2019
summary: "Many organizations don’t use LDAP or active directory for user authentication. In other scenarios, some users are not in LDAP and are created only in ThoughtSpot. In such cases, you can choose to authenticate users against ThoughtSpot internal authentication."
sidebar: mydoc_sidebar
toc: true
permalink: /:collection/:path.html
---

Many organizations don't use LDAP or active directory for user authentication. In other scenarios, some users are not in LDAP and are created only in ThoughtSpot. In such cases, you can choose to authenticate users against ThoughtSpot internal authentication.

{% include note.html content="Before the user logs into ThoughtSpot, the user must exist in ThoughtSpot. This is independent of the authentication mechanism." %}

If you have been using ThoughtSpot with users you created manually, and you now want to transition to LDAP, please [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#). They can assist you in migrating existing users to their LDAP equivalents.
<!--
## Configure internal authentication
To authenticate users using ThoughtSpot internal who are not available in the LDAP or AD system:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/settings.png)

4. In the Settings panel, click **Authentication: Internal** and then  **Configure** option.

   ![]({{ site.baseurl }}/images/internal-auth.png)  

5. Choose **Enable** under Authentication: Internal option. If you want to disable the internal authentication, configure AD or LDAP first, and then select **Disable** and save  the  configuration.

   ![]({{ site.baseurl }}/images/internal-auth-configure.png)

6. Click **Save** to configure the internal authentication.
-->
