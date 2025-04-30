---
title: [Configure SAML]


last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot enables you to use the Security Assertion Markup Language (SAML) to authenticate user. You can set up SAML using the management console or through the shell on ThoughtSpot using a `tscli`-based configurator. It is configured to work using service provided by an Identity Provider (IDP).

## Before you begin

Before you configure SAML, you need the following information:

1. ThoughtSpot Service address: DNS name of the load balancer front-end (For multi-node ThoughtSpot clusters) or of ThoughtSpot server (For single-node ThoughtSpot cluster).
2. Service port: Service port for ThoughtSpot instance (Typically TCP/443).
3. Unique service name: The unique key used in ThoughtSpot as an identifier for IDP service. It will be set by ThoughtSpot Support Team. It can be set to anything in the format  `urn:thoughtspot:callosum:saml`.
4. Skew Time in Seconds: Allowed skew time for authentication (Duration after authentication response is rejected and sent back from the IDP). Usually set to `3600` seconds.
5. IDP Metadata XML File: This file is provided by the IDP. The absolute path to the `idp-meta.xml` file is needed for one-time configuration.
6. Decide whether to `Automatically add SAML users to Thoughtspot: (yes/no)`: If you choose 'yes', then new users will be automatically created in ThoughtSpot. If 'no', then SAML users will be added in ThoughtSpot upon first successful SSO login.
7. Decide whether to `Also use ThoughtSpot internal authentication (y/n)`: If 'y' then ThoughtSpot local/internal users (including local administrative users) will still be authenticated outside the scope of SSO.


## Configure using tscli

To set up SAML on ThoughtSpot for user authentication:

**_NOTE:_** This configuration persists across software updates, so you do not have to reapply it if you update to a newer release of ThoughtSpot.

1. Log in to the Linux shell using SSH.
2. Execute the command to launch the interactive SAML configuration:

    ```
    tscli saml configure
    ```

3. Complete the configurator prompts with the information you gathered above in **Before you begin section**.
4. When the configuration is complete, open a browser and go to the ThoughtSpot login page.
   It should now show the SSO option.
