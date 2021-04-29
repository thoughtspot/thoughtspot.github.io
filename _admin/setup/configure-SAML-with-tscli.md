---
title: [Configure SAML]
last_updated: 3/1/2021
summary: "You can use the Security Assertion Markup Language (SAML) to authenticate users."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot enables you to use the Security Assertion Markup Language (SAML) to authenticate users. You can set up SAML through the shell on ThoughtSpot [using a `tscli`-based configurator](#saml-configure-tscli), or [through the Admin Console](#admin-portal). It is configured to work using service provided by an Identity Provider (IdP).

Popular Identity Providers that ThoughtSpot supports include [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/overview/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, and [Onelogin](https://developers.onelogin.com/quickstart/saml){: target="_blank"}. This is not an exhaustive list. To determine if ThoughtSpot supports your preferred IdP, talk to your ThoughtSpot contact.

After you complete the SAML configuration in ThoughtSpot that this article describes, refer to your Identity Provider’s SAML documentation for specific information on setting up SAML with that IdP.

{: id="prerequisites"}
## Configuration prerequisites

Before you configure SAML, collect the following information:

| &#10063; | [ThoughtSpot service address](#ts-service-address) |
| &#10063; | [Service port](#ts-service-port) |
| &#10063; | [Unique service name](#ts-service-name) |
| &#10063; | [Skew time in seconds](#skew-time) |
| &#10063; | [IDP Metadata XML File](#metadata-xml-file) |
| &#10063; | [Automatically add SAML users to Thoughtspot](#auto-add) |
| &#10063; | [Also use ThoughtSpot internal authentication](#ts-auth) |

{: id="ts-service-address" }
### ThoughtSpot service address
DNS name of the load balancer _front-end_ for multi-node ThoughtSpot clusters, or of the ThoughtSpot _server_ for a single-node ThoughtSpot cluster. If you do not have the DNS name, you can use the front-end IP address. Using the DNS name instead of the IP address is a best practice.

{: id="ts-service-port" }
### Service port
Service port for ThoughtSpot instance. This port is TCP/443.

{: id="ts-service-name" }
### Unique service name
The unique key ThoughtSpot uses to identify IDP service. Set by the ThoughtSpot Support Team. You may know this as the *Entity ID*.

The key has the following format: `urn:thoughtspot:callosum:saml`.

{: id="skew-time" }
### Skew time in seconds
Allowed skew time for authentication, or the duration after authentication response is rejected and sent back from the IDP.

Usually set to `3600` seconds.

{: id="metadata-xml-file" }
### IDP Metadata XML File
This file is provided by the IdP. The absolute path to the `idp-meta.xml` file is needed for one-time configuration. If your IDP needs an Assertion Consumer Service URL to create the metadata file, use `https://<hostname_or_IP>/callosum/v1/saml/SSO`.

{% include note.html content="If your IdP does not allow you to import the IdP metadata XML file, you must map values manually. For the ThoughtSpot system to pick up certain attributes, you must map them to specific fields. Map the username you would like to use to <code>NameId</code>, and map the email id of the user to <code>mail</code>." %}

{: id="auto-add" }
### Automatically add SAML users to Thoughtspot: (yes/no)
If you choose 'yes', then new users will be automatically created in ThoughtSpot upon first successful SSO login.

If you choose 'no', then SAML users will not be added in ThoughtSpot upon first successful SSO login. Instead, you must [add users manually]({{ site.baseurl }}/admin/users-groups/add-user.html#add-user) or through [Active Directory]({{ site.baseurl }}/admin/setup/LDAP-config-AD.html).

{: id="ts-auth" }
### Also use ThoughtSpot internal authentication: (y/n)

If 'y', then ThoughtSpot local/internal users (including local administrative users) will still be authenticated outside the scope of SSO.

{: id="saml-configure-tscli" }
## Configure SAML using tscli

{% include note.html content="The configuration persists across updates to newer releases of ThoughtSpot." %}

To set up SAML on ThoughtSpot for user authentication, follow these steps:

1. Log in to the Linux shell using SSH.

2. Run the `saml configure` command to launch the interactive SAML configuration:

    ```
    tscli saml configure
    ```

3. Complete the configurator prompts with the information you collected in [Configuration prerequisites](#prerequisites).

4. When the configuration completes, open a browser and navigate to the ThoughtSpot login page. It should show the SSO option.

{: id="admin-portal"}
## Configure SAML using the Admin Console

{% include content/admin-portal/authentication-saml.md %}
