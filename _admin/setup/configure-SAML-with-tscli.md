---
title: [Configure SAML]
last_updated: 5/7/2021
summary: "You can use the Security Assertion Markup Language (SAML) to authenticate users."
redirect_from:
- /7.0.0.mar.sw/app-integrate/SAML/configure-SAML-with-tscli.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{% include content/admin-portal/saml-intro.md %}

## Enable SAML authentication
You need admin privileges to enable SAML SSO authentication. You can set up SAML through the shell on ThoughtSpot [using a `tscli`-based configurator](#saml-configure-tscli), or [through the Admin Console](#admin-portal).

{% include content/admin-portal/saml-prerequisites.md %}

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

4. When the configuration is complete, download ThoughtSpot's metadata file, `spring_saml_metadata.xml`. This file contains the public key you need if you want to encrypt your SAML assertions. To download this file, navigate to `https://<hostname-or-IP>/callosum/v1/saml/metadata/`. The file automatically downloads.

### Configure the IdP
To enable the IdP to recognize your host application and ThoughtSpot as a valid service provider, you must configure the IdP with required attributes and metadata. This includes the `spring_saml_metadata.xml` file that you downloaded in step 4 of [Configure SAML using tscli](#saml-configure-tscli).

ThoughtSpot supports SAML authentication with several identity and access management providers, such as [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/before-you-begin/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, [Onelogin](https://developers.onelogin.com/saml){: target="_blank"} and so on. If you want to use one of these providers as your IdP, make sure you read the SAML configuration steps described in the Identity provider’s documentation site.

To determine if ThoughtSpot supports your preferred IdP, [contact ThoughtSpot support]({{ site.baseurl }}/admin/misc/contact.html).

Complete your configuration of the IdP using the IdP's SAML documentation. Upload or copy the contents of the `spring_saml_metadata.xml` to your IdP server. This file contains the public key you need if you want to encrypt your SAML assertions. If you did not download the `spring_saml_metadata.xml` file, navigate to `https://<your_ThoughtSpot_hostname-or-IP>/callosum/v1/saml/metadata/`. The file automatically downloads.

{% include note.html content="When configuring SAML 2.0, make sure you map the SAML user attributes to appropriate fields. For example, you must map SAML user’s username to the NameId attribute in OneLogin. Similarly, in Okta, you must map the username to userPrincipalName. You must also ensure that the email address of the user is mapped to the mail attribute. If your IdP does not allow you to import the IdP metadata XML file, you must map these values manually." %}

After you configure the IdP, open a Web browser and go to the ThoughtSpot login page. It should now show the Single Sign On option.

{% include content/admin-portal/authentication-saml.md %}
