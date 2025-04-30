---
title: [Configure Active Directory Federated Services]
keywords: SAML,security,"active directory",authenticate,Federated
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can configure Active Directory Federated Services (AD FS) to work with ThoughtSpot. This procedure outlines the basic prerequisites and steps to set up AD FS.

-   [Configure SAML in ThoughtSpot](ts-as-sp.html#).
-   Install AD FS 2.0.
-   Make sure you can run AD FS 2.0 Federation Server Configuration Wizard from the AD FS 2.0 Management Console.
-   Make sure that DNS name of your Windows Server is available at your service provider (SP) and vice versa. You can do this by running the command `nslookup` on both machines, supplying the DNS of the other server.

AD FS 2.0 supports SAML 2.0 in IdP (Identity Provider) mode and can be easily integrated with the SAML Extension for both SSO (Single Sign-On) and SLO (Single Log Out).

After completing the prerequisites, use these procedures to configure AD FS for use with ThoughtSpot.

1. [Initialize IdP metadata.](initialize-IDP.html)
2. [Initialize the Service Provider metadata.](initialize-SP.html)
3. [Test your ADFS integration.](test-ADFS.html)
