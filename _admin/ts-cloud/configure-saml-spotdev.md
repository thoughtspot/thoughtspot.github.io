---
title: [Configure SAML SSO authentication]
last_updated: 3/3/2021
summary: "ThoughtSpot supports SAML SSO to authenticate federated users"
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

# SAML SSO Authentication

The SAML SSO authentication method enables client applications to allow federated users to access the embedded content with the same login. In the SAML SSO authentication method, users authenticate to the SAML identity provider at your federation to obtain access to the ThoughtSpot content in your application.
The SAML SSO authentication method eliminates the need for displaying a login page when a user requests access to the embedded visualizations or pinboards.

To allow ThoughtSpot to trust login requests from your corporate authentication servers, you must configure SAML settings in the ThoughtSpot application.

## Enable SAML authentication

You need admin privileges to enable SAML SSO authentication.

1.  Configure the ThoughtSpot application instance on your IDP server.

2.  Log in to your ThoughtSpot application instance.

3.  [Configure the SAML attributes]({{ site.baseurl }}/admin/ts-cloud/application-integration.html).


## Allow SAML Redirect Domains

If you have to redirect SAML users to a login URL to a host server in a different domain, make sure you add the SAML redirect domains to the list of allowed domains in ThoughtSpot.

To whitelist a SAML redirect domain, follow these steps:

1.  Log in to your ThoughtSpot application instance.

2.  Click the **SpotDev** tab.

3.  Under **Customizations**, click **Settings**.

4.  In SAML redirect domains, add the domains to whitelist.

    You can add one or several domains as comma-separated values.

5.  Click **Save changes**.
