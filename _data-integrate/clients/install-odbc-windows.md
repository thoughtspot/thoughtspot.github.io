---
title: [Install the ODBC Driver on Windows]
tags:
keywords: tbd
last_updated: tbd
summary: "Use this procedure to obtain the Microsoft Windows ODBC driver and install it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The ODBC driver for Windows requires Visual C++ Redistributable for Visual Studio 2013. You will be prompted to install it during installation of the driver if it isn't already installed. It is important to note the following about the ODBC login information:

-   Database `username`: This is not the machine login username. This is the name of a ThoughtSpot user with administrator permissions.
-   Database `password`: This is not the machine login username. This is the ThoughtSpot user password.

To obtain and install the ODBC driver for Windows:

1. Navigate to the Downloads page in the Help Center to download the ODBC driver onto your Windows workstation.
2. Unzip the file you downloaded.
3. Choose the installer for your version of Windows.
   There are two different Windows ODBC installers included in the file you downloaded.
    -   ThoughtSpotODBC (x86).msi for Windows 32-bit
    -   ThoughtSpotODBC (x64).msi for Windows 64-bit
4. Double click the `.msi` file you downloaded to start the installation.
   You will see a security warning.
5. Select **Yes** to continue.

     ![]({{ site.baseurl }}/images/windows_ODBC_install.png "Allow the ODBC Installer to run")

6. Click **Next** to continue.

     ![]({{ site.baseurl }}/images/odbc_install_1.png "The ODBC Installer")

7. Accept the End User License Agreement (EULA), and click **Next**.
8. Specify the destination folder where the driver will be installed.

     ![]({{ site.baseurl }}/images/odbc_install_3.png "Enter the destination folder")

9. Enter the ThoughtSpot server details, and click **Next**.

    - For **Server(s)**, provide a comma separated list of the IP addresses of each node on the ThoughtSpot instance.

      If you need to obtain the IP addresses of the nodes in the cluster, you can run the command `tscli node ls` from the Linux shell on the ThoughtSpot instance.

    - For **Database**, optionally specify the database to use. If you skip this entry, you'll need to provide the database each time you connect using ODBC.

      ![]({{ site.baseurl }}/images/odbc_install_4.png "Enter server and database for ODBC")

10.  Confirm that the install can begin by clicking **Install**.
11.  You will see a confirmation message when the installation has finished. Click **Finish**.

     ![]({{ site.baseurl }}/images/odbc_install_6_install_completed.png "Installation was successful")

If you need to make changes to the ODBC configuration later, you can [Change the ODBC Configuration on Windows](change-odbc-windows.html#). For example, you may want to add a default schema or change the server IP address or the default database. You can also [add a new ODBC data source](../../data_integration/clients/add-new-ODBC-source-windows.html). This capability supports connecting to multiple ThoughtSpot instances.
