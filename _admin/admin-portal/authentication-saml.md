---
title: [Authentication through SAML integration]
last_updated: 3/1/2021
summary: ThoughtSpot integrates with SAML for authentication.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can use ThoughtSpot's integration with SAML for user authentication. By default, [local authentication]({{ site.baseurl }}/admin/admin-portal/authentication-local.html) is enabled. You can also configure a SAML integration with an external Identity Provider (IdP), allowing your ThoughtSpot users to log in using one of the supported Identity Providers.

Popular Identity Providers that ThoughtSpot supports include [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/overview/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, and [Onelogin](https://developers.onelogin.com/quickstart/saml){: target="_blank"}. This is not an exhaustive list. To determine if ThoughtSpot supports your preferred IdP, talk to your ThoughtSpot contact.

After you complete the SAML configuration in ThoughtSpot that this article describes, refer to your Identity Provider’s SAML documentation for specific information on setting up SAML with that IdP.

{% include content/admin-portal/authentication-saml.md %}
