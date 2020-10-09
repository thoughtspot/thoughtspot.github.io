Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Active Directory** from the side navigation bar that appears.

![Admin Console - Active Directory]({{ site.baseurl }}/images/admin-portal-active-directory.png "Admin Console - Active Directory")

Click the **Configure** button in the middle of the screen, and add your information based on the information you collected in the [prerequisites](#prerequisites).

{% include note.html content="If you configure authentication through Active Directory, you cannot also configure authentication through SAML." %}

![Configure Active Directory]({{ site.baseurl }}/images/admin-portal-active-directory-configure.png "Configure Active Directory")

If you select **yes** for **SSL required**, ThoughtSpot prompts you to enter the SSL certificate and certificate alias:

![SSL required - yes]({{ site.baseurl }}/images/admin-portal-active-directory-ssl.png "SSL required - yes")

After you add all your information, click **OK**.

{% include note.html content="ThoughtSpot adds external users, or users that authenticate through SAML or Active Directory, to the <strong>all</strong> group by default. This group has no privileges. You must manually assign users to ThoughtSpot groups to give them privileges, such as <strong>can upload user data</strong>, or <strong>can manage data</strong>." %}
