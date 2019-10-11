---
title: [Configure SSL]
last_updated: 10/11/2019
summary: "Secure socket layers (SSL) provide authentication and data security when sending data to and from ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use SSL to enable both HTTP and LDAP data security.

{: id="ssl-about"}
## About SSL
Companies usually secure applications that access data. To use SSL with ThoughtSpot, you must use your company's own SSL certificate. The certificate is issued for each domain or service. If you plan to use SSL for both HTTP(S) and LDAP(S), you must have two separate certificates.

If you do not have an SSL certificate, there are options:

-   Check with your IT department if they have an SSL certificate you can use.
-   Obtain the certificate from an issuing authority.
-   Disable SSL and loose the security it provides. Use the following command:
    ```
    tscli ssl off
    ```
ThoughtSpot works with a wide variety of SSL types, from a wide variety of vendors.

{: id="ssl-configure"}
## Configure SSL for web traffic

{% include note.html content="Do not use a passphrase when creating certificates.<br>To verify if you're prompted to specify a passphrase, invoke the command `openssl rsa -check -in pk.key`. If the answer is 'yes', remove the passphrase to use the key." %}

To add SSL and enable HTTPS in ThoughtSpot, obtain the [SSL certificate chain](#ssl-certificate-chain) and the [private key](#key).

{: id="ssl-certificate-chain"}
### SSL certificate chain
The SSL certificate chain must be in `.PEM` format. This is an `X.509v3` file that contains ASCII (Base64) armored data, packed between `BEGIN` and `END` directives. It can be a bundle of certificates.

{: id="key"}
### Private key
The private key must be in compatible `.PEM` format. It cannot be password or passphrase protected.

<!--### Using Management Console

{% include note.html content="The Management Console is now available in beta for customers with ThoughtSpot 5.3 or later. Please contact ThoughtSpot Support, if you want to try it." %}

To install and configure the SSL certificate using the admin UI:

1. Log into ThoughtSpot from a browser.
2. Click the **Admin** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/settings.png)

4. In the Settings panel, click **SSL** and then  **Configure** option.

   ![]({{ site.baseurl }}/images/ssl.png)  

5. Enter the SSL details:

   ![]({{ site.baseurl }}/images/ssl-configure.png)

   <table>
   <colgroup>
   <col width="20%" />
   <col width="80%" />
   </colgroup>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
    <tr>
      <th>SSL Status</th>
      <td>Enable the SSL. If you want to disable the LDAP configuration, select Disable and then click Save to exit the setup.</td>
    </tr>
    <tr>
      <th>Algorithm</th>
      <td>Choose the algorithm as RSA.</td>
    </tr>
    <tr>
      <th>Minimum TLS Version</th>
      <td>Set the recommended TLS version as TLS v1.2. <p><b>Note</b>: Choose SSL v3, TLS v1.0, and TLS v1.1 for backwards compatibility.</p></td>
    </tr>
    <tr>
      <th>Private Key</th>
      <td>Browse and copy the private key to ThoughtSpot.</td>
    </tr>
    <tr>
      <th>Public Certificate</th>
      <td>Browse and copy the public cert to ThoughtSpot.</td>
    </tr>
   </table>

6. Click **Save** to configure the SSL.

You can now test the SSL setup by log in to the ThoughtSpot application. You should see the application URL begins with `https://`.


-->
{: id="ssl-configure-tscli"}
## Configure SSL using tscli

Follow these instructions to install the SSL certificate using tscli:

1. Use the instructions from the certifying authority where you obtained the certificate.

   This is usually sent to you by email, or available for download.

2. Copy the certificate and key files to ThoughtSpot:

      ```
      $ scp <key> <certificate> admin@<IP_address>:<certificate-path>
      ```

3. Log into the Linux shell using SSH.

4. Change to the directory where you copied the files:

    ```
    $ cd <certificate-path>
    ```

5. To install the certificate, issue the `tscli` command:

    ```
    $ tscli ssl add-cert <key> <certificate>
    ```

6. To test that the certificate is correctly installed, [log into the ThoughtSpot application](logins.html#log-in-to-the-thoughtspot-application).

     You should see that the application's URL begins with `https://`.

{: id="set-tls-version"}
### Set the recommended TLS version

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

{: id="config-load-balancer"}
### Configuration string for load balancers

When enabling SSL support on a load balancer’s server-side SSL client profile, use the following list of ciphers to ensure compatibility between the load balancer and ThoughtSpot.

```
EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH
```

The following ciphers are currently supported:

```
|   TLSv1.2:
|     ciphers:
|       TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 - strong
|       TLS_DHE_RSA_WITH_AES_256_CBC_SHA - strong
|       TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 - strong
|       TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 - strong
|       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 - strong
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA - strong
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 - strong
|       TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 - strong
|     compressors:
|       NULL
|_  least strength: strong
```

You can retrieve these from the ThoughtSpot web server (not against the load balancer) by running the following command on any ThoughtSpot node:
    ```
    nmap --script ssl-enum-ciphers -p 443 <ThoughtSpot_node_IP_address>
    ```
You must ensure that your load balancer supports these ciphers.
