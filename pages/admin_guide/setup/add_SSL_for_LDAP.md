---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Add the SSL certificate for LDAP

When you set up LDAP, you specified whether or not to use SSL for LDAP \(LDAPS\). If using SSL, you must install the LDAP SSL certificate.

Before you can add the SSL certificate, you must LDAP using one of these procedures:

-   [Configure OpenLDAP](LDAP_config_openLDAP.html#)
-   [Configure LDAP for Active Directory](LDAP_config_AD.html#)

You must have the SSL certificate before you start. For more information on obtaining an SSL certificate, see [About SSL \(secure socket layers\)](about_SSL.html#).

To add the SSL certificate for LDAP:

1.   Follow the instructions from your certifying authority to obtain the certificate. This is usually sent via email or available by download. 
2.   Copy the certificate to ThoughtSpot: 

    ```
    $ scp <certificate> admin@<IP\_address>:<path>
    ```

3.   [Log in to the Linux shell using SSH](login_console.html#). 
4.   Change directories to where you copied the certificate: 

    ```
    $ cd <path>
    ```

5.   Run the command to configure SSL for LDAP, designating an alias for this certificate using the `<name>` parameter: 

    ```
    $ tscli ldap add-cert <name> <certificate>
    ```


