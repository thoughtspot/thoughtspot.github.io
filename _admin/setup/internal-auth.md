---
title: [Configure internal authentication]
tags: [Security_SSL]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Many organizations don't use LDAP or active directory for user authentication. In other scenario, some users are not in LDAP and are created only in ThoughtSpot. In such cases, you can choose to authenticate users against ThoughtSpot internal authentication.

**_NOTE:_** Before you log in to ThoughtSpot, the user has to exist in ThoughtSpot independent of whether that user is authenticated against ThoughtSpot's internal authentication or against LDAP.

If you have been using ThoughtSpot with users you created manually, and you now want to transition to LDAP, please [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#). They can assist you in migrating existing users to their LDAP equivalents.

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
