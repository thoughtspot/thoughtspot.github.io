---
title: [Configure SSL]
last_updated: 10/11/2019
summary: "Secure socket layers (SSL) provide authentication and data security when sending data to and from ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use your own SSL certificate to secure ThoughtSpot HTTP(S) traffic.

{: id="ssl-about"}
## About SSL
To enable SSL for the ThoughtSpot web service, you must provide your organization's SSL certificate for the ThoughtSpot service URL.  If you do not have this certificate, you have the following options:

-   Check with your IT department if they have an SSL certificate you can use.
-   Obtain the certificate from an issuing authority.
-   Use the default SSL certificate on the ThoughtSpot nodes.
-   Disable SSL using the `tscli ssl off` command.

ThoughtSpot supports a wide variety of SSL types.

{: id="ssl-ports"}
## Required ports

To use ThoughtSpot webservice securely, make sure to allow incoming connections to Thoughtspot nodes/cluster on TCP port 443.

{: id="ssl-configure"}
## Configure SSL for web traffic
To add SSL and enable HTTPS in ThoughtSpot, obtain the [SSL certificate chain](#ssl-certificate-chain) and the [private key](#key). The steps below are suitable for installing a fresh SSL certificate/key pair and for all subsequent operations, including reinstalling & updating/replacing these.

{: id="ssl-certificate-chain"}
### SSL certificate chain
The SSL certificate chain must be in PEM format. This is an `X.509v3` file that contains ASCII (Base64) armored data, packed between `BEGIN` and `END` directives. The chain can contain a series of certificates with root certificate at the bottom and user-facing, ThoughtSpot-specific SSL certificate at the top.

{: id="key"}
### Private key
The private key must also be in compatible PEM format. It cannot be password or passphrase protected. {% include note.html content="Do not use a passphrase when creating certificates.<br>To verify if you're prompted to specify a passphrase, invoke the command `openssl rsa -check -in pk.key`. If the answer is 'yes', you'll need to first remove the passphrase to use the private key with ThoughtSpot." %}

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

6. To test that the certificate is correctly installed, sign into the ThoughtSpot application (https://docs.thoughtspot.com/6.0/admin/setup/logins.html#sign-in-to-the-thoughtspot-application).

     You should see that the application's URL begins with `https://`.

{: id="set-tls-version"}
### Set the recommended TLS version
ThoughtSpot supports SSL v3, TLS v1.2 by default. Support for TLS v1.0 and v1.1 is included for backwards compatibility. To ensure support for TLS version 1.2:

1.  Enable your web browser to support TLS v1.2. This can be done in your browser's advanced settings.
2.  Log in to the Linux shell using SSH and run command:

    ```
    tscli ssl tls-status
    ```

    It should respond with 
    ```
    Minimum TLS version supported: 1.2
    ```

    This will block all usage of older versions.
 3. To change this, run `tls ssl set-min-tls-version 1.1` or `tls ssl set-min-tls-version 1.0` as desired for backward compatibility.

{: id="config-load-balancer"}
### Configuration string for load balancers

When enabling SSL support on a load balancer’s server-side SSL client profile, make sure to add support for the following ciphers to ensure compatibility between the load balancer and ThoughtSpot.

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

The cipher string would be as follows:-

```
EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH
```

You can retrieve these from the ThoughtSpot web server (not against the load balancer) by running the following command on any ThoughtSpot node:
    ```
    nmap --script ssl-enum-ciphers -p 443 <ThoughtSpot_node_IP_address>
    ```
You must ensure that your load balancer supports these ciphers.

## Testing the SSL certificate

To test if the certificate is installed correctly, see [Sign in to the ThoughtSpot application]({{ site.baseurl
}}//admin/setup/logins.html#sign-in-to-the-thoughtspot-application).
