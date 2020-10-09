## Configure SMTP through the Admin Console

You can set up the relay host for SMTP from the Admin Console.

{% include note.html content="If you would like to use a custom port, rather than the default, port 25, you must configure SMTP using <code>tscli</code>, by running <code>tscli smtp set-relayhost &lt;IP_address&gt;:&lt;custom_port&gt;</code>." %}

### Set up relay host
Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **SMTP** from the side navigation bar that appears.

![Admin Console - SMTP]({{ site.baseurl }}/images/admin-portal-smtp.png "Admin Console - SMTP")

Select **Configure**.

Specify the following parameters:

![Configure SMTP]({{ site.baseurl }}/images/admin-portal-smtp-configure.png "Configure SMTP")

| **1** | Specify the relay host. |
| **2** | Specify the domain of the email address you would like emails to come from. In *example@company.com*, it is *company*. |
| **3** |Specify the name of the email address you would like emails to come from. In *example@company.com*, it is *example*. |
| **4** | If SMTP authentication is required, you must add a username and password. If you select **no**, you do not see the step to add a username and password. |
| **5** | Specify the username. |
| **5** | Specify the password. |

Click **OK**.
