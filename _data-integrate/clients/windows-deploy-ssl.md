---
title: [Deploy SSL with ODBC on Windows]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can configure a secure ODBC connection between your ThoughtSpot cluster and
a remote Windows Machine.  This article explains the SSL resources and ODBC
configuration options you need to enable SSL for an ODBC connection.

## Prerequisites

Before configuring SSL over the ThoughtSpot ODBC connection, make sure that
your system administrator has created and configured your network's Certificate
Authority. Additionally, the system administrator should have available both
the proper Private Key and Server Certificate.

## Configure the ThoughtSpot cluster nodes

{% include important.html content="Portions of this procedure require that you work
with your ThoughtSpot Customer Service or Support Engineer." %}

The [SimbaServer Configuration Properties reference](https://www.simba.com/products/SEN/doc/Client-Server_user_guide/content/clientserver/configuringsimbaserver/configurationoptions.htm) includes full details on [SSL Configuration Properties](https://www.simba.com/products/SEN/doc/Client-Server_user_guide/content/clientserver/configuringsimbaserver/configurationoptions.htm#SSL_Server).

Before you change your ODBC configuration, decide on a path where you will store
the Private Key and Server Certificate, for example, you could decide to use
`/home/admin/Simba_SSL/` as the path.

Then, do the following on *every ThoughtSpot node* in your cluster.

1. Create the path on the node.
2. Copy the SSL certificate and private key to this path.
3. Edit the node's `/etc/thoughtspot/simba.ini` file (Simba server configuration) with your favorite editor.
4. Add the following lines:

    ```
    SslCertfile=/home/admin/Simba_SSL/Server-Certificate.pem
    SslKeyfile=/home/admin/Simba_SSL/Private-Key.pem
    UseSsl=Required
    ```
5. Restart the Simba service.

   You need to work with your ThoughtSpot Customer Success or Support Engineer to do this.

## Deploy the certificate on your windows workstation

Please note that the SSL settings on the server and client are interdependent.

The [SimbaClient for ODBC Configuration Properties](https://www.simba.com/products/SEN/doc/Client-Server_user_guide/content/clientserver/configuringsimbaclientodbc/simbaclientodbcconfigurationoptions.htm) reference describes how to set parameters on the client to use SSL (scroll down to useSsl section at the end).   

The Simba documentation also provides a chart showing [configuration properties for SSL](https://www.simba.com/products/SEN/doc/Client-Server_user_guide/content/clientserver/configuringssl/configcombinations.htm) where you can see how different combinations of SSL settings on client and server will behave. For example:

* Setting both server and client to `UseSsl=Enabled` provides the ability for clients to connect with or without SSL.

* Setting both server and client to `UseSsl=Required` requires that all clients use SSL.

On the workstation you use for your ODBC connection, we recommend that you set `UseSSL` to the more restrictive `Required` per the following procedure.

1. Save CA certificate to a secure location on the workstation disk.

   Choose a location where the certificate is unlikely to be deleted by mistake,
   for example, `C:\ODBC-SSL\CA.pem` is an example of a full path to such a location.

2. Open your ThoughtSpot ODBC connection configuration dialog.
3. Click **Options**.
4. Check the **Require SSL** option and/or add SSL as a custom property.

    {% include note.html content="Some customers have reported that setting the SSL parameter with this option doesn't always work. Alternatively or in addition, you can add SSL as a custom property: `UseSSL = Required`, as shown below." %}

    ![]({{ site.baseurl }}/images/windows-odbc-ssl-options.png "client settings")
    ![]({{ site.baseurl }}/images/windows-odbc-custom-SSL-property.png "client settings")
    ![]({{ site.baseurl }}/images/windows-odbc-custom-SSL-added.png "client settings")

5. Enter the location of the CA certificate in the **SSL Certificate File** field.

    ![]({{ site.baseurl }}/images/windows-odbc-cert-and-SSL.png "client settings")

6. When you are done, press **OK** to save your new properties.
7. Click **Test Connection** to test your database connection.

    ![]({{ site.baseurl }}/images/windows-odbc-success.png "Success")

8. Click **Cancel** to close the configuration dialog.
9. Click **OK** to close the **Client Configuration Dialog** the dialog.
10. Click **OK** to close the **ODBC Data Source Administrator (64-bit)** application.
