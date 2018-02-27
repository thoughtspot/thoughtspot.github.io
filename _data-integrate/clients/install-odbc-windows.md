---
title: [Install the ODBC Driver on Windows]
keywords: tbd
last_updated: tbd
summary: "Use this procedure to obtain the Microsoft Windows ODBC driver and install it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The ODBC driver for Windows requires Visual C++ Redistributable for Visual
Studio 2013. You will be prompted to install it during installation of the
driver if it isn't already installed.  

## Download the driver

On your workstation, where you want to connect from, do the following:

1. Navigate to the [**Downloads**]({{ site.baseurl }}/release/downloads.html#) page.
2. Click **ODBC Driver for Windows** to download the driver.
3. Unzip the file you downloaded at a convenient location on your workstation.
4. Choose the installer for your version of Windows.
   There are two different Windows ODBC installers included in the file you downloaded.
    -   ThoughtSpotODBC (x86).msi for Windows 32-bit
    -   ThoughtSpotODBC (x64).msi for Windows 64-bit

## Install the driver

1. Double click the `.msi` file you downloaded to start the installation.
   You will see a security warning.
2. Select `YES` to continue.

     ![]({{ site.baseurl }}/images/windows_ODBC_install.png "Allow the ODBC Installer to run")

3. Click **Next** to continue.

     ![]({{ site.baseurl }}/images/odbc_install_1.png "The ODBC Installer")

4. Accept the End User License Agreement (EULA), and click **Next**.
5. Specify the destination folder where the driver will be installed.

     ![]({{ site.baseurl }}/images/odbc_install_3.png "Enter the destination folder")

6. Enter the ThoughtSpot server details, and click **Next**.

    - For **Server(s)**, provide a comma separated list of the IP addresses of each node on the ThoughtSpot instance.

      If you need to obtain the IP addresses of the nodes in the cluster, you can run the command `tscli node ls` from the Linux shell on the ThoughtSpot instance.

    - For **Database**, optionally specify the database to use. If you skip this entry, you'll need to provide the database each time you connect using ODBC.

      ![]({{ site.baseurl }}/images/odbc_install_4.png "Enter server and database for ODBC")

7.  Confirm that the install can begin by clicking **Install**.

    You will see a confirmation message when the installation has finished.

8.  Click **Finish**.

     ![]({{ site.baseurl }}/images/odbc_install_6_install_completed.png "Installation was successful")

If you need to make changes to the ODBC configuration later, you can [Change the
ODBC Configuration on Windows]({{ site.baseurl
}}/data-integrate/clients/change-odbc-windows.html#). For example, you may want
to add a default schema or change the server IP address or the default database.
You can also [add a new ODBC data source]({{ site.baseurl
}}/data-integrate/clients/add-new-ODBC-source-windows.html). This capability
supports connecting to multiple ThoughtSpot instances.


## Testing your ODBC connection

At this point, you can test your ODBC connection to ThoughSpot.  It is important
to recall that the username/password you use belongs to a ThoughSpot application
user. Typically, this user is a user with data management or administrative
privileges on the application. Before trying the ODBC connection, make sure
you can use this username/password to login into the ThoughSpot application and
confirm the user's privileges.
