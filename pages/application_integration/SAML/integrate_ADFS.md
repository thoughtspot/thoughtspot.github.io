---
title: [elephant]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Configure Active Directory Federated Services

You can configure Active Directory Federated Services \(AD FS\) to work with ThoughtSpot. This procedure outlines the basic prerequisites and steps to set up AD FS.

-   [Configure SAML in ThoughtSpot](ts_as_sp.html#).
-   Install AD FS 2.0.
-   Make sure you can run AD FS 2.0 Federation Server Configuration Wizard from the AD FS 2.0 Management Console.
-   Make sure that DNS name of your Windows Server is available at your service provider \(SP\) and vice versa. You can do this by running the command `nslookup` on both machines, supplying the DNS of the other server.

AD FS 2.0 supports SAML 2.0 in IdP \(Identity Provider\) mode and can be easily integrated with the SAML Extension for both SSO \(Single Sign-On\) and SLO \(Single Log Out\).

After completing the prerequisites, use these procedures to configure AD FS for use with ThoughtSpot.

1. [Initialize IdP metadata.](initialize_IDP.html) 
2. [Initialize the Service Provider metadata.](initialize_SP.html) 
3. [Test your ADFS integration.](test_ADFS.html) 

-   **[Initialize the Identity Provider Metadata](../../application_integration/SAML/initialize_IDP.html)**  
This procedure shows how to initialize the Identity Provider \(IdP\) metadata for AD FS.
-   **[Initialize the Service Provider Metadata](../../application_integration/SAML/initialize_SP.html)**  
This procedure shows how to initialize the Service Provider \(SP\) metadata for AD FS.
-   **[Test the ADFS Integration](../../application_integration/SAML/test_ADFS.html)**  
After setting up the AD FS integration, test to make sure it is working properly.

**Parent topic:** [About SAML](../../application_integration/SAML/about_SAML_integrations.html)

