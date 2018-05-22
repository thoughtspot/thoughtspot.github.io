---
title: [Install the ODBC driver on Windows]
keywords: tbd
last_updated: tbd
summary: "Use this procedure to obtain the Microsoft Windows ODBC driver and install it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughSpot's ODBC connection relies on the <a
href="https://www.simba.com/products/SEN/doc/Client-Server_user_guide/content/clientserver/configuringsimbaclientodbc/simbaclientodbcunix.htm">SimbaEngine
X SDK</a> to connect via ODBC or JDBC to ThoughtSpot's remote data stores. The
instructions on this page explain how to configure the Simba ODBC driver on a
Windows workstation.

Make sure you have read the overview material in the [ODBC driver overview]({{
site.baseurl }}/data-integrate/clients/about-odbc.html#). This workstation is
the same machine where you plan to run your ETL activities.

## Prerequisites

These instructions include directions to use the `ssh` command. Make sure your
Windows workstation is equipped with a tool <a href="https://www.putty.org/">such as Putty</a> for making `ssh`
connections to your ThoughSpot server.


The ODBC driver for Windows requires Visual C++ Redistributable for Visual
Studio 2013. You are prompted to install it during installation of the driver if
it isn't already installed.  

![]({{ site.baseurl }}/images/windows-odbc-cplusplus.png "C++ requirement")

Make sure you <a href="https://www.microsoft.com/en-us/download/details.aspx?id=40784">download and install it</a> before continuing.


## Check the ThoughSpot IP and the simba_server status

Before you begin, you need to know the IP address or DNS name of the server you
intend to connect your server to.

1. Using Putty or similar, SSH as `admin` or the `thoughtspot` user to your ThoughSpot node.
2. Verify the node IP(s).

   ![]({{ site.baseurl }}/images/putty-ssh.png "SSH with putty")

3. Make a note of each IP; there may be more than one.
4. Verify that the `simba_server` is running, if it isn't, work with ThoughSpot Support to start it.
5. Exit or close the shell.

## Download the driver

On the workstation where you want to connect from, do the following:

1. Navigate to the [**Downloads**]({{ site.baseurl }}/release/downloads.html#) page.
2. Download the **ODBC Driver for Windows**  driver.
3. Unzip the file you downloaded at a convenient location on your workstation.

   ![]({{ site.baseurl }}/images/odbc-windows-extract.png)

8. Take a moment to examine the contents of the new directory.

    There are two different Windows ODBC installers included in the file you downloaded.
     -   ThoughtSpotODBC (x86).msi for Windows 32-bit
     -   ThoughtSpotODBC (x64).msi for Windows 64-bit

## Install the driver

1. Launch the installer for your version of Windows.
2. Click **Next** to continue.

   ![]({{ site.baseurl }}/images/odbc_install_1.png "The ODBC Installer")

3. Accept the End User License Agreement (EULA), and click **Next**.
4. Specify the destination folder where the driver will be installed.

   ![]({{ site.baseurl }}/images/odbc_install_3.png "Enter the destination folder")

5. Enter the ThoughtSpot server details, and click **Next**.

   ![]({{ site.baseurl }}/images/odbc_install_4.png "Enter server and database for ODBC")

    - For **Server(s)**, provide a comma separated list of the IP addresses of each node on the ThoughtSpot instance.

    - For **Database**, optionally specify the database to use. If you skip this entry, you'll need to provide the database each time you connect using ODBC.

6. Confirm that the install can begin by clicking **Install**.

7. You may see a security warning.

    ![]({{ site.baseurl }}/images/windows_ODBC_install.png "Allow the ODBC Installer to run")

8. Select `YES` to continue.

    A confirmation message appears when the installation is complete.

    ![]({{ site.baseurl }}/images/odbc_install_6_install_completed.png "Installation was successful")

9.  Click **Finish**.

If you need to make changes to the ODBC configuration later, you can [Change the
ODBC Configuration on Windows]({{ site.baseurl
}}/data-integrate/clients/change-odbc-windows.html#). For example, you may want
to add a default schema or change the server IP address or the default database.
You can also [add a new ODBC data source]({{ site.baseurl
}}/data-integrate/clients/add-new-ODBC-source-windows.html). This capability
supports connecting to multiple ThoughtSpot instances.


## Test your ODBC connection

At this point, you can test your ODBC connection to ThoughSpot.  It is important
to recall that the username/password you use belongs to a ThoughSpot application
user. Typically, this user is a user with data management or administrative
privileges on the application.

1. Before trying the ODBC connection, confirm a username/password that can login into the ThoughSpot applications.
2. Confirm the user's privileges by going to the **Data** tab.
3. Return to your workstation.
4. Locate the **ODBC Data Source Administrator (64-bit)** application.

   ![]({{ site.baseurl }}/images/odbc-windows-search.png "System DSN")

5. Open the **ODBC Data Source Administrator (64-bit)** application.

   This software may be called **ODBC Data Sources** depending on your version
   of Windows.

6. Choose the **System DSN** tab.

   ![]({{ site.baseurl }}/images/odbc-system-dsn.png "System DSN")

7. Select **ThoughtSpot** and press **Configure**.

   ![]({{ site.baseurl }}/images/odbc-configure-dialog.png "Configure")

8. Choose **Options**.

    The system displays the **Options** dialog.

9. Ensure you have the following **Custom Property** values set:

    | Custom Property   | Value                                                  |
    |-------------------|--------------------------------------------------------|
    | `SCHEMA`          | falcon_default_schema                                  |
    | `UID`             | The username of a user with data management privilege. |
    | `PWD`             | The password for the username you specify.             |

    When you are done, your options should look similar to the following:

    ![]({{ site.baseurl }}/images/windows-odbc-options.png "Options")

10. When you are done, press **OK** to save your new properties.
11. Press **Test Connection** to test your database connection.

    ![]({{ site.baseurl }}/images/windows-odbc-success.png "Success")

12. Press **Cancel** to close the **DSN Configuration** dialog.
13. Press **OK** to close the **Client Configuration Dialog** the dialog.
14. Press **OK** to close the **ODBC Data Source Administrator (64-bit)** application

Now, you are ready to begin using the connection you've configured.
