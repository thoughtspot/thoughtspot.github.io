You can configure the SAML integration through the Admin Console.

{% include note.html content="If you configure authentication through SAML, you cannot also configure authentication through Active Directory." %}

Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **SAML** from the side navigation bar that appears.

![Admin Console - SAML]({{ site.baseurl }}/images/admin-portal-saml.png "Admin Console - SAML")

Click the **Configure** button in the middle of the screen.

![Configure SAML]({{ site.baseurl }}/images/admin-portal-saml-configure.png "Configure SAML")

Fill in the following parameters:

1. **ThoughtSpot Service Address**: A fully qualified and resolvable domain name for the ThoughtSpot service. For example, *thoughtspot.thoughtspot-customer.com*.
2. **Port**: Enter `443` in this box. This is the port of the server where your ThoughtSpot instance is running.
3. **Unique Service Name**: The unique key used by your Identity Provider to identify the client. For example, *urn:thoughtspot:callosum:saml*.
4. **Skew Time in Seconds**: The allowed skew time, after which the authentication response is rejected and sent back from the IDP. *86400* is a popular choice. The default is *3600*.
5. **Protocol**: The authentication mechanism for ThoughtSpot. For example, `http` or `https`.
6. **IdP Metadata XML File**: The absolute path to your Identity Provider’s metadata file. This file is provided by your IdP.  You need this file so that the configuration persists over upgrades. It is a best practice to set it up on persistent/HA storage (NAS volumes) or in the same absolute path on all nodes in the cluster. For example, *idp-meta.xml*.

    {% include note.html content="If your IdP does not allow you to import the IdP metadata XML file, you must map values manually. For the ThoughtSpot system to pick up certain attributes, you must map them to specific fields. Map the username you would like to use to <code>NameId</code>, and map the email id of the user to <code>mail</code>." %}

7. **Automatically add SAML users to ThoughtSpot upon first authentication**: Choose whether or not to add SAML users to ThoughtSpot when they first authenticate. If you choose 'yes', then new users will be automatically created in ThoughtSpot upon first successful SSO login.
If you choose 'no', then SAML users will not be added in ThoughtSpot upon first successful SSO login. Instead, you must [add users manually]({{ site.baseurl }}/admin/admin-portal/users.html).

After you fill in all parameters, click **OK**.

{% include note.html content="ThoughtSpot adds external users, or users that authenticate through SAML or Active Directory, to the <strong>all</strong> group by default. This group has no privileges. You must manually assign users to ThoughtSpot groups to give them privileges, such as <strong>can upload user data</strong>, or <strong>can manage data</strong>." %}

## Additional resources
As you develop your expertise in authentication and security, we recommend the following ThoughtSpot U course:
* [Single Sign On (SSO)](https://training.thoughtspot.com/authentication-security/621450){:target="_blank"}

See other training resources at <br/>
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
