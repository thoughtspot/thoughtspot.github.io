---
title: [Authentication and security]
last_updated: 8/18/2021
summary: "You can configure security settings and authentication methods for an embedded ThoughtSpot instance."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To allow your application users to access the embedded ThoughtSpot content, make sure you configure security settings for Cross-Origin Resource Sharing (CORS) and Content Security Policy (CSP).

To authenticate and authorize embed users, you must also configure an authentication method in ThoughtSpot.

## User authentication

- **Developer access**                                                               
  To enable access to the Developer Portal, you must create a user group with the Developer privilege and assign developer users to this group. Users with Developer privilege can access the **Develop** tab in the ThoughtSpot UI. For more information, see [Developer access](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=developer-access){:target="_blank"}.

- **SAML SSO authentication**                                                       
  If you plan to use an external directory service for authenticating your application users, you need to [enable SAML authentication on ThoughtSpot and add SAML redirect domains to the allowed list](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=saml-sso){:target="_blank"}.

- **Trusted authentication**  
  If you plan to use a token-based authentication service to authenticate user sessions, [enable trusted authentication](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=trusted-auth){:target="_blank"} for ThoughtSpot.

## Application security and browser support

- **Security settings**                                                             
  To allow your application users to access the embedded content from web browsers, you must set your application as a trusted host by [adding your application domain and the URL endpoints to the CORS and CSP allowed list](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=security-settings){:target="_blank"}.

- **Custom domain configuration**                                                  
  To host your ThoughtSpot instance on a custom domain or to use a custom domain name in system-generated emails, contact ThoughtSpot Support. For more information, see [Custom domain configuration](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=custom-domain-config){:target="_blank"}.


## Access control and data security

To control user access to ThoughtSpot application workflows and data, you can use  ThoughtSpot features such as group privileges, object sharing, Row-level security (RLS), Column-level security (CLS), and disabling or hiding menu actions with Visual Embed SDK.  
For more information, see [Access control and data security](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=embed-object-access){:target="_blank"}.
