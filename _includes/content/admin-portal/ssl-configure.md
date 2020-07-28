## Configure SSL through the Administration Portal
To configure SSL, navigate to the Administration Portal by clicking on the **Admin** tab from the top navigation bar. Select **SSL** from the side navigation bar that appears.

![Admin Portal - SSL]({{ site.baseurl }}/images/admin-portal-ssl.png "Admin Portal - SSL")

Click **Configure**.

Fill out the following parameters:

![Configure WebServer SSL]({{ site.baseurl }}/images/admin-portal-ssl-config.png "Configure WebServer SSL")

| **1** | Select **Enable**. |
| **2** | ThoughtSpot supports either 2048 or 4096. |
| **3** | Choose TLS 1.2 as a best practice. ThoughtSpot also supports TLS 1.1 and 1.0; set the minimum supported version to 1.1 or 1.0 to use these versions. |
| **4** | Attach your private key file. |
| **5** | Attach your SSL certificate bundle file. |

Click **OK**.
