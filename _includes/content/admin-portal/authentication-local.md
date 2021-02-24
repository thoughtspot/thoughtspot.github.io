Local authentication is enabled by default in your ThoughtSpot environment. This means that any local user you [create]({{ site.baseurl }}/admin/admin-portal/users.html) can log into ThoughtSpot with the specific ThoughtSpot credentials you set up for them when creating the user.

If you disable local authentication, no local user can log into ThoughtSpot.

You can enable or disable local authentication from the Admin Console.

Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Local** from the side navigation bar that appears.

![Admin Console - Local]({{ site.baseurl }}/images/admin-portal-local.png "Admin Console - Local")

Click the **Edit** button in the top middle of the screen.

Select **Enable** or **Disable**, and click **OK**.

Note that you cannot disable local authentication until you configure [Active Directory]({{ site.baseurl}}/admin/admin-portal/authentication-active-directory.html) or [SAML authentication]({{ site.baseurl }}/admin/admin-portal/authentication-saml.html).
