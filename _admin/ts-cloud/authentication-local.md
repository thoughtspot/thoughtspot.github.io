---
title: [Managing local authentication]
last_updated: 5/28/2020
summary: "ThoughtSpot has robust local authentication, and integrates with SAML."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Local authentication is enabled by default in your ThoughtSpot Cloud environment. This means that any local user you [create]({{ site.baseurl }}/admin/ts-cloud/users.html) can sign into ThoughtSpot with the specific ThoughtSpot credentials you set up for them when creating the user.

If you disable local authentication, no local user can log into ThoughtSpot.

You can enable or disable local authentication from the Admin Console.

Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Local** from the side navigation bar that appears.

![Admin Console - Local]({{ site.baseurl }}/images/admin-portal-local.png "Admin Console - Local")

Click the **Edit** button in the top middle of the screen.

![Edit local authentication]({{ site.baseurl }}/images/admin-portal-local-edit.png "Edit local authentication")

Select **Enable** or **Disable**, and click **OK**.

![Select enable or disable]({{ site.baseurl }}/images/admin-portal-local-enable.png "Select enable or disable")

Note that you cannot disable local authentication until you configure [SAML authentication]({{ site.baseurl }}/admin/ts-cloud/authentication-integration.html).
