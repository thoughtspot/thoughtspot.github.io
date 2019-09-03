---
title: [Add the SSL certificate for LDAP]
tags: [SAML_LDAP_AD, tscli]
keywords: SAML,security,"active directory",authenticate,certificate
last_updated: tbd
summary: "Install the certificate to support LDAPS"
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you set up LDAP, you specified whether or not to use SSL for LDAP (LDAPS). If using SSL, you must install the LDAP SSL certificate. Before you can add the SSL certificate, you must [Configure LDAP for Active Directory](LDAP-config-AD.html#).

You must have the SSL certificate before you start. For more information on obtaining an SSL certificate, see [Configure SSL (secure socket layers)](SSL-config.html#).

As of the current ThoughtSpot software version:-
1. You should configure only one SSL certificate in ThoughtSpot for Active Directory.
2. The Common Name (CN) in the SSL certificate should match the one provided to `tscli ldap configure` earlier.
3. Only top-level SSL certificate is necessary. Root certificate or any intermediate certificates are not needed.

To add the SSL certificate for LDAP:

1. Follow the instructions from your certifying authority to obtain the certificate. This is usually sent via email or available by download.
2. Copy the certificate to ThoughtSpot:

    ```
    $ scp <certificate> admin@<IP_address>:<path>
    ```

3. Log in to the Linux shell using SSH.
4. Change directories to where you copied the certificate:

    ```
    $ cd <path>
    ```

5. Run the command to configure SSL for LDAP, designating an alias for this certificate using the `<name>` parameter:

    ```
    $ tscli ldap add-cert <name> <certificate>
    ```
