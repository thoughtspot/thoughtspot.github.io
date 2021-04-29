---
title: [Managing authentication with SAML]
last_updated: 3/2/2021
redirect_from:
- /admin/setup/configure-saml-with-tscli.html
summary: "ThoughtSpot integrates with SAML for authentication."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use ThoughtSpot's integration with SAML for user authentication. By default, [local authentication]({{ site.baseurl }}/admin/ts-cloud/authentication-local.html) is enabled. You can also configure a SAML integration with an external Identity Provider (IdP), allowing your ThoughtSpot users to log in using one of the supported Identity Providers.

Popular Identity Providers that ThoughtSpot supports include [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/overview/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, and [Onelogin](https://developers.onelogin.com/quickstart/saml){: target="_blank"}. This is not an exhaustive list. To determine if ThoughtSpot supports your preferred IdP, talk to your ThoughtSpot contact.

After you complete the SAML configuration in ThoughtSpot that this article describes, refer to your Identity Provider’s SAML documentation for specific information on setting up SAML with that IdP.

You can configure the SAML integration through the Admin Console.

Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **SAML integration** from the side navigation bar that appears.

![Admin Console - SAML]({{ site.baseurl }}/images/admin-portal-saml.png "Admin Console - SAML")

Click the **Configure** button in the middle of the screen.

![Configure SAML]({{ site.baseurl }}/images/admin-portal-saml-configure.png "Configure SAML")

Fill in the following parameters:

1. **ThoughtSpot Service Address**: A fully qualified and resolvable domain name for the ThoughtSpot service. For example, *thoughtspot.thoughtspot-customer.com*.
2. **Port**: Enter `443` in this box. This is the port of the server where your ThoughtSpot instance is running.
3. **Unique Service Name**: The unique key used by your Identity Provider to identify the client. For example, *urn:thoughtspot:callosum:saml*. You may know this as the *Entity ID*.
4. **Skew Time in Seconds**: The allowed skew time, after which the authentication response is rejected and sent back from the IDP. *86400* is a popular choice. The default is *3600*.
5. **Protocol**: The authentication mechanism for ThoughtSpot. For example, `http` or `https`.
6. **IDP Metadata XML File**: The absolute path to your Identity Provider’s metadata file. This file is provided by your IDP.  You need this file so that the configuration persists over upgrades. It is a best practice to set it up on persistent/HA storage (NAS volumes) or in the same absolute path on all nodes in the cluster. For example, *idp-meta.xml*. If your IDP needs an Assertion Consumer Service URL to create the metadata file, use `https://<hostname_or_IP>/callosum/v1/saml/SSO`.

    {% include note.html content="If your IdP does not allow you to import the IdP metadata XML file, you must map values manually. For the ThoughtSpot system to pick up certain attributes, you must map them to specific fields. Map the username you would like to use to <code>NameId</code>, and map the email id of the user to <code>mail</code>." %}

7. **Automatically add SAML users to ThoughtSpot upon first authentication**: Choose whether or not to add SAML users to ThoughtSpot when they first authenticate. If you choose 'yes', then new users will be automatically created in ThoughtSpot upon first successful SSO login.
If you choose 'no', then SAML users will not be added in ThoughtSpot upon first successful SSO login. Instead, you must [add users manually]({{ site.baseurl }}/admin/ts-cloud/users.html).

After you fill in all parameters, click **OK**.
