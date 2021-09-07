---
title: [Managing authentication with SAML]
last_updated: 5/6/2021
redirect_from:
- /admin/setup/configure-saml-with-tscli.html
summary: "ThoughtSpot integrates with SAML for authentication."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## SAML SSO authentication
ThoughtSpot supports the Single Sign-On (SSO) authentication method with the Security Assertion Markup Language (SAML) authentication and authorization framework. With SAML SSO, users can authenticate to the SAML identity provider (IdP) at your federation to access the ThoughtSpot application, or the embedded ThoughtSpot content in an external web application. It also allows them to navigate seamlessly between different application interfaces with their existing credentials.

By default, [local authentication]({{ site.baseurl }}/admin/ts-cloud/authentication-local.html) is enabled. Use this article to learn how to configure a SAML integration with an external IdP. To configure SAML in an embedded environment, refer to [SAML SSO authentication](https://developers.thoughtspot.com/docs/?pageid=saml-sso){: target="_blank"}.

## About SAML authentication
The SAML SSO authentication involves several entities and components.

### SAML entities
SAML is an XML standard that allows secure exchange of user authentication and authorization data between trusted partners. It enables the following entities to exchange identity, authentication, and authorization information:

- **Identity Provider (IdP)**

    The Identity Management system that maintains the user identity information. IdP acts as a SAML authority and authenticates SSO users. ThoughtSpot supports SAML authentication framework with popular Identity Providers such as [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/before-you-begin/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, and [Onelogin](https://developers.onelogin.com/saml){: target="_blank"}. This is not an exhaustive list. To determine if ThoughtSpot supports your preferred IdP, talk to your ThoughtSpot contact.

    After you complete the SAML configuration in ThoughtSpot that this article describes, refer to your Identity Provider’s SAML documentation for specific information on setting up SAML with that IdP.

- **Service Provider (SP)**

    The provider of a business function or application service; for example ThoughtSpot. The SP relies on the IdP to authenticate users before allowing access to its services.

- **Federated user**

    A user whose identity information is managed by the IdP. The federated users have SSO credentials and authenticate to IdP to access various application services.

### SAML assertion and attributes
Both SP-initiated and IdP-initiated authentication workflows rely upon assertions that are exchanged between the SAML endpoints through a web browser.

Some of the most commonly used elements are:

- **SAML assertion**

    The user authentication and authorization information issued by the IdP. SAML assertions contain all the information necessary for a service provider to confirm if the user identity is valid.

- **Metadata**

    Data in the XML format to establish interoperability between the IdP and SP. It contains the URLs of the endpoints, entity ID, and so on.

- **Assertion Services Consumer (ACS) URL**

    The endpoint URL to which the user’s browser sends the SAML response received from the IdP after authenticating a user.

- **Entity ID**

    A unique service name to identify the client application from which the SSO login request originates.

- **SAML attributes**

    The attributes associated with the user; for example, username and email address.

## Enable SAML authentication
You need admin privileges to enable SAML SSO authentication.

1. Configure the ThoughtSpot application instance on your IDP server.

2. Log into your ThoughtSpot application instance.

3. From the top navigation bar, select the **Admin** tab.

4. Select **SAML** from the side navigation bar that appears.

5. Click the **Configure** button in the middle of the screen.

6. Fill in the following parameters:

    ![Configure SAML]({{ site.baseurl }}/images/admin-portal-saml-configure.png "Configure SAML")

    <dl>
    <dlentry><dt>ThoughtSpot Service Address</dt><dd>A fully qualified and resolvable domain name for the ThoughtSpot service. This must be in the format <em>&lt;cluster-name&gt;.thoughtspot.com</em>.</dd></dlentry>
    <dlentry><dt>Port</dt><dd>Enter <code>443</code> in this box. This is the port of the server where your ThoughtSpot instance is running.</dd></dlentry>
    <dlentry><dt>Unique Service Name</dt><dd>The unique key used by your Identity Provider to identify the client. For example, <em>urn:thoughtspot:callosum:saml</em>. You may know this as the <em>Entity ID</em>.</dd></dlentry>
    <dlentry><dt>Skew Time in Seconds</dt><dd>The allowed skew time, after which the authentication response is rejected and sent back from the IDP. <em>86400</em> is a popular choice. The default is <em>3600</em>.</dd></dlentry>
    <dlentry><dt>Protocol</dt><dd>The connection protocol for ThoughtSpot. Use <code>https</code>.</dd></dlentry>
    <dlentry><dt>IDP Metadata XML File</dt><dd><p>The absolute path to your Identity Provider’s metadata file. This file is provided by your IDP. You need this file so that the configuration persists over upgrades. It is a best practice to set it up on persistent/HA storage (NAS volumes) or in the same absolute path on all nodes in the cluster. For example, <em>idp-meta.xml</em>. If your IDP needs an Assertion Consumer Service URL to create the metadata file, use <code>https://&lt;hostname_or_IP&gt;:443/callosum/v1/saml/SSO</code>. Note that this URL is case-sensitive.</p><p>If your IdP does not allow you to import the IdP metadata XML file, you must map values between ThoughtSpot and your IDP manually. This allows the ThoughtSpot system to automatically pick up certain attributes, such as a user's email address, display name, and username. Map the username value in your IDP (<code>userPrincipalName</code> in Okta, for example) to <code>NameId</code>, map the email value to <code>mail</code>, and map the display name value to <code>displayName</code>. It is <strong>mandatory</strong> to fill out the mail field. If your company cannot meet this requirement, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p><p>For additional support with the attribute statements, refer to your IDP's SAML documentation. ThoughtSpot supports SAML authentication framework with popular Identity Providers such as <a href="https://developer.okta.com/docs/guides/build-sso-integration/saml2/before-you-begin/" target="_blank">Okta</a>, <a href="https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad" target="_blank">Azure Active Directory</a>, <a href="https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html" target="_blank">PingFederate</a>, <a href="https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings" target="_blank">Microsoft AD FS</a>, and <a href="https://developers.onelogin.com/saml" target="_blank">Onelogin</a>. This is not an exhaustive list. To determine if ThoughtSpot supports your preferred IdP, talk to your ThoughtSpot contact.</p></dd></dlentry>
    <dlentry><dt>Automatically add SAML users to ThoughtSpot upon first authentication</dt><dd>Choose whether or not to add SAML users to ThoughtSpot when they first authenticate. If you choose 'yes', then new users will be automatically created in ThoughtSpot upon first successful SSO login. If you choose 'no', then SAML users will not be added in ThoughtSpot upon first successful SSO login. Instead, you must <a href="{{ site.baseurl }}/admin/ts-cloud/users.html">add users manually</a>.</dd></dlentry></dl>

7. After you fill in all parameters, click **OK**.

8. When the configuration is complete, download ThoughtSpot’s metadata file, `spring_saml_metadata.xml`. This file contains the public key you need if you want to encrypt your SAML assertions. To download this file, navigate to `https://<hostname-or-IP>/callosum/v1/saml/metadata/`. The file automatically downloads.

### Configure the IdP
To enable the IdP to recognize your host application and ThoughtSpot as a valid service provider, you must configure the IdP with required attributes and metadata.

ThoughtSpot supports SAML authentication with several identity and access management providers, such as [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/before-you-begin/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, [Onelogin](https://developers.onelogin.com/saml){: target="_blank"} and so on. If you want to use one of these providers as your IdP, make sure you read the SAML configuration steps described in the Identity provider’s documentation site.

To determine if ThoughtSpot supports your preferred IdP, [contact ThoughtSpot support]({{ site.baseurl }}/admin/misc/contact.html).

Complete your configuration of the IdP using the IdP’s SAML documentation. Upload or copy the contents of the `spring_saml_metadata.xml` to your IdP server. This file contains the public key you need if you want to encrypt your SAML assertions. If you did not download the `spring_saml_metadata.xml` file, navigate to `https://<your_ThoughtSpot_hostname-or-IP>/callosum/v1/saml/metadata/`. The file automatically downloads.

{% include note.html content="This allows the ThoughtSpot system to automatically pick up certain attributes, such as a user's email address, display name, and username. Map the username value in your IDP (<code>userPrincipalName</code> in Okta, for example) to <code>NameId</code>, map the email value to <code>mail</code>, and map the display name value to <code>displayName</code>. It is <strong>mandatory</strong> to fill out the mail field. If your company cannot meet this requirement, contact ThoughtSpot Support. If your IdP does not allow you to import the IdP metadata XML file, you must map these values manually." %}
