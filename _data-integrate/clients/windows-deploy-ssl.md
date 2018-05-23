---
title: [Deploy SSL with ODBC on Windows]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can configure a secure ODBC connection between your Thoughtspot cluster and
a remote Windows Machine.  This article explains the SSL resources you need and
the ODBC configuration options you need to enable SSL for an ODBC connection.

## Prerequisites

Your system administration should have created and configured your network's
Certificate Authority before configuring SSL over the ThoughSpot ODBC
connection. Additionally, the system administrator should have available both
the proper Private Key and Server Certificate.

## Configure the ThoughSpot cluster nodes

{% include important.html content="Portions of this procedure require that you work
with your ThoughSpot Customer Service or Support Engineer." %}

Before you change your ODBC configuration, decide on a path where you will store
the Private Key and Server Certificate, for example, you could decide to use
`/home/admin/Simba_SSL/` as the path.

Then, do the following on *every ThoughSpot node* in your cluster.

1. Create the path on the node.
2. Copy the SSL certificate and private key to this path.
3. Edit the node's `/etc/thoughtspot/simba.ini` file (Simba server configuration) with your favorite editor.
4. Add the following lines:

    ```
    SslCertfile=/home/admin/Simba_SSL/Server-Certificate.pem
    SslKeyfile=/home/admin/Simba_SSL/Private-Key.pem
    UseSsl=Enabled
    ```
5. Restart the Simba service.

   You need to work with your ThoughSpot Customer Success or Support Engineer to do this.

## Deploy the certificate on your windows workstation

Do the following procedure on the workstation you use for your ODBC connection.

1. Save CA certificate to a secure location on the workstation disk.

   Choose a location where the certificate is unlikely to be deleted by mistake,
   for example, `C:\ODBC-SSL\CA.pem` is an example of a location.

2. Open your ThoughtSpot ODBC connection configuration dialog.
3. Click **Options**.
4. Check the **Require SSL** option.
5. Enter the location of the CA certificate in the **SSL Certificate File** field.

    ![]({{ site.baseurl }}/images/windows-odbc-cplusplus.png "Certificate location")

6. When you are done, press **OK** to save your new properties.
7. Press **Test Connection** to test your database connection.

    ![]({{ site.baseurl }}/images/windows-odbc-success.png "Success")

8. Press **Cancel** to close the configuration dialog.
9. Press **OK** to close the **Client Configuration Dialog** the dialog.
10. Press **OK** to close the **ODBC Data Source Administrator (64-bit)** application
