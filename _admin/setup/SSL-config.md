---
title: [Configure SSL]
tags: [Security_SSL]
keywords: tbd
last_updated: tbd
summary: "SSL provides authentication and data security"
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You should use SSL (secure socket layers) for sending data to and from ThoughtSpot. SSL provides authentication and data security. This section applies to both SSL to enable secure HTTP and secure LDAP.

## About SSL
Many IT departments require SSL for their applications that access data. To use SSL with ThoughtSpot, you'll need your company's own SSL certificate. The certificate is issued per domain (service), so if you want to use SSL for both HTTP(S) and LDAP(S), you will need two separate certificates - one for the HTTPS domain and one for the LDAPS domain.

If you do not have an SSL certificate:

-   Check with your IT department to see if they already have an SSL certificate you can use.
-   If not, you will need to obtain the certificate from an issuing authority.
-   Alternatively, you may disable SSL if you don't want the security it provides by using the command `tscli ssl off`.

There are many SSL vendors to choose from. Check with your existing Web hosting provider first, to see if they can provide the certificate for you.

When you apply for the SSL certificate, you may specify a SAN, wildcard, or single domain certificate. Any of these can work with ThoughtSpot.

## Configure SSL for web traffic

This procedure shows how to add SSL (secure socket layers) to enable secure HTTP (HTTPS) in ThoughtSpot. To set up SSL, you will need:

-   The SSL certificate chain in .PEM format. This format has X.509v3 file containing ASCII (Base64) armored data packed between a “BEGIN" and "END" directive. It can be a bundle of certificates.
-   The private key in compatible .PEM format. It should not be password/passphrase protected.


**_NOTE:_** Do not use a passphrase while creating the cert. Invoke the command, `openssl rsa -check -in pk.key` to verify if you're prompted to specify a passphrase. If yes, then you need to remove the passphrase to use the key.

To install the SSL certificate:

1. Follow the instructions from your certifying authority to obtain the certificate. This is usually sent via email or available by download.
2. Copy the certificate and key files to ThoughtSpot:

      ```
      $ scp <key> <certificate> admin@<IP_address>:<path>
      ```

3. Log in to the Linux shell using SSH.
4. Change directories to where you copied the certificate:

    ```
    $ cd <path>
    ```

5. Issue the `tscli` command to install the certificate:

    ```
    $ tscli ssl add-cert <key> <certificate>
    ```

6. To test that the certificate was installed correctly, [Log in to the ThoughtSpot application](logins.html#log-in-to-the-thoughtspot-application).

     You should see that the application's URL begins with `https://`.

## Set the recommended TLS version

There are a couple of security vulnerabilities due to SSL certificates supporting older versions of TLS (Transport Layer Security). This procedure shows you how to set the recommended TLS version to avoid these vulnerabilities.

The PCI (Payment Card Industry) Data Security Standard and the FIPS 140-2 Standard require a minimum of TLS v1.1 and recommends TLS v1.2.

ThoughtSpot supports SSL v3, TLS v1.0, and TLS v1.1 for backwards compatibility. However, the recommended version is TLS v1.2. Therefore, to set the recommended TLS version:

1.  Enable your web browser to support TLS v1.2. This can be done in your browser's advanced settings.
2.  Log in to the Linux shell using SSH..
3.  Issue the following command:

    ```
    tscli ssl set-min-version 1.2
    ```

    This will block all usage of older versions.
