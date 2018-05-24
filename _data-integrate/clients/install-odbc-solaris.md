---
title: [Install the ODBC Driver on Solaris]
keywords: tbd
last_updated: tbd
summary: "Use this procedure to obtain the Solaris ODBC driver and install it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughSpot's ODBC connection relies on the <a
href="https://www.simba.com/products/SEN/doc/Client-Server_user_guide/content/clientserver/configuringsimbaclientodbc/simbaclientodbcunix.htm">SimbaEngine
X SDK</a> to connect via ODBC or JDBC to ThoughtSpot's remote data stores. The
instructions on this page explain how to configure the Simba ODBC driver on a
Solaris workstation.

Make sure you have read the overview material in the [ODBC driver overview]({{
site.baseurl }}/data-integrate/clients/about-odbc.html#). This workstation is
the same machine where you plan to run your ETL activities. The Solaris ODBC
driver is certified on Solaris Sparc 10.


## Check the ThoughSpot IP and the simba_server status

Before you begin, you need to know the IP address or DNS name of the server you
intend to connect your server to.

1. SSH as `admin` or the `thoughtspot` user to your ThoughSpot node.
2. Verify the node IP(s).

   ```bash
   $ tscli node ls
   172.18.231.17
   ```

3. Make a note of each IP; there may be more than one.
4. Verify that the `simba_server` is running, if it isn't, work with ThoughSpot Support to start it.
5. Exit or close the shell.


## Install the Simba client

On your workstation, where you want to connect from, do the following to get the
ODBC driver:

1. Open a browser on your workstation.
2. Navigate to the [**Downloads**]({{ site.baseurl }}/release/downloads.html#) page.
3. Click **ODBC Driver for Solaris** to download the driver.
4. Open a terminal on your workstation.
5. Change directory to the location where you downloaded the file.
6. Optionally, move the file to a permanent location on your machine.

   When you expand the downloaded file it will create a directory in the
   location.

6. Unzip the zip file:

    ```
    gunzip ThoughtSpot_Solaris_odbc_<version>.tar.gz
    ```

7. Extract the contents of the `tar` file.

    ```
    tar -xvf ThoughtSpot_Solaris_odbc_<version>.tar
    ```

    This extracts a subdirectory called `Solaris` into the current directory.

8. Take a moment to examine the contents of the new `solaris_sparc` directory.

    The structure contains a version for GNU Compiler Collection (gcc) and no GCC. Beneath these two subdirectories have identical subdirectories that suppor 32 or 64 bit Sparc. The subdirectories include a Simba client library, supporting libraries, error messages, and
    setup files.

    ```
    /gcc:
        /Bin:
           /Solaris_sparc64_gcc:
              libSimbaClient.so
           /Solaris_sparc_gcc:
            libSimbaClient.so
        /ErrorMessages:
          de-DE
            CSCommonMessages.xml
            ClientMessages.xml
            ODBCMessages.xml
            SQLEngineMessages.xml
            ServerMessages.xml
          en-US
          es-ES
          fr-FR
          it-IT
          ja-JP
        /Lib/Solaris_sparc64_gcc:
          libcrypto.so
          libcrypto.so.1.0.0
          ...
        /Lib/Solaris_sparc_gcc:
          libcrypto.so
          libcrypto.so.1.0.0
          ..
        /Setup:
          odbc.ini
          odbcinst.ini
          simbaclient.ini
    /no_gcc/
      ...  same as gcc structure ...
    ```

    The `Solaris/Setup` directory contains the key ODBC configuration files and
    sample Simba client configurations you'll use later in this procedure.


9. You need to know your workstation architecture to continue, confirm  your workstation's architecture.

   You can use the `arch` or the `uname` command or both.

    ```bash
    $ isainfo
    amd64 i386
    ```

    In the above examples, the workstation is a 64 bit workstation. Your
    own workstation may be 32-bit. You'll use this architecture information in the
    procedures that follow.


## (Optional) Install unixODBC tools for testing

The procedures on this page rely on the unixODBC tools to test your
configuration and connection.  If you are experienced with ODBC and want to skip
this, you can. Simply substitute your preferred mechanism in the subsequent
procedures where references are made to the unixODBC tools.

{% include warning.html content="Your ThoughtSpot installation contains a version of the unixODBC tools.  These tools are incompatible with CentOS. Do not use these tools if you are performing this procedure on your ThoughSpot server." %}

1. Search for the unixODBC tools on your system.

   The [`pkgadd` package manager](https://www.opencsw.org/package/unixodbc/)
   searches for software already installed or available on your system or from
   the configured repositories.

    ```
    pkgadd -d http://get.opencsw.org/now
    /opt/csw/bin/pkgutil -U
     ```

   Make note of the correct package to install for your architecture.

2. Install the appropriate package for your architecture.

   In this case the command installs the tools for a 64-bit architecture. A 32-bit package needs the  `unixODBC.i686` package.

    ```bash
    /opt/csw/bin/pkgutil -y -i unixodbc
    ```

3. Verify the files were installed.

    ```bash
    /usr/sbin/pkgchk -L CSWunixodbc
    ```

## Set up your environment

In this section, you set parameters in your workstation to support your ODBC connection.

1. Copy the library for your architecture from the `Lib` directory on your Solaris machine.

    | Library                                      | Architecture |
    |----------------------------------------------|--------------|
    | `/solaris_sparc/gcc/Lib/Solaris_sparc/`      | 32-bit       |
    | `/solaris_sparc/gcc/Lib/Solaris_sparc64/`    | 64-bit       |
    | `/solaris_sparc/no_gcc/Lib/Solaris_sparc/`   | 32-bit       |
    | `/solaris_sparc/no_gcc/Lib/Solaris_sparc64/` | 64-bit       |


2. Add the location's path to the `LD_LIBRARY_PATH` environment variable.

   For example if your architecture is 64-bit and you keep the library in your `home` directory:

   ```
   LD_LIBRARY_PATH=~/solaris_sparc/no_gcc/Lib/Solaris_sparc64/
   export LD_LIBRARY_PATH
   ```

3. Use the `echo` command to verify the path was added correctly.

   ```
   echo $LD_LIBRARY_PATH
   ```

4. Copy the `odbc.ini` file to the `/etc` directory.

   ```
   $ cp ~/solaris_sparc/no_gcc/Setup/odbc.ini  /etc
   ```

   If you have trouble making the copy, use the `sudo` command to make the move.

5. Copy the `odbcinst.ini` file to the `/etc` directory.

    ```
    $ cp ~/solaris_sparc/no_gcc/Setupodbcinst.ini  /etc
    ```

6. Copy the hidden `.simba.quickstart.ini ` file to the `/etc` directory, renaming it in the process to `simbaclient.ini`.

    ```
    $ cp ~/solaris_sparc/no_gcc/Setup/simbaclient.ini  /etc/simbaclient.ini
    ```

7. Update your environment with the `ODBCSYSINI` and `ODBCINI` variables.

    ```
    $ ODBCSYSINI=/etc/
    $ export ODBCSYSINI
    $ ODBCINI=/etc/odbc.ini
    $ export ODBCINI
    ```
8. Use the `/usr/bin/odbcinst` command to confirm your settings:

    ```
    $ /opt/csw/bin/odbcinst -j
    unixODBC 2.3.1
    DRIVERS............: /etc/opt/csw/odbcinst.ini
    SYSTEM DATA SOURCES: /etc/opt/csw/odbc.ini
    FILE DATA SOURCES..: /etc/opt/csw/ODBCDataSources
    USER DATA SOURCES..: //.odbc.ini
    SQLULEN Size.......: 4
    SQLLEN Size........: 4
    SQLSETPOSIROW Size.: 2
    ```

## Edit the /etc/simbaclient.ini file

When you are ready, follow this procedure to configure the driver.  

1. Edit the `/etc/simbaclient.ini` file with your favorite editor.
2. Change the `ErrorMessagesPath` property to point to the location where you unzipped the client.

    ```
    [Driver]
    ErrorMessagesPath=<path_to_error_messages_directory>
    ```

3. Save and close the `/etc/simbaclient.ini` file.

## Edit the odbcinst.ini file

The `odbcinst.ini` file is a registry and configuration file for ODBC drivers.
Depending on your workstation architecture, you configure the 32-bit or 64-bit
driver.

1. Open the file `/etc/odbcinst.ini` in your favorite editor.
2. Comment out the driver that you don't need.

    For example, if you are using 64-bit, comment out 32-bit.

3. Edit the `Driver`  line so that it contains the path to the file `libSimbaClient.so`

    Use the path where you copied the library files. For example, for the 64-bit ODBC driver:

    ```
    [ThoughtSpot(x64)]
    APILevel            = 1
    ConnectFunctions    = YYY
    Description         = ThoughtSpot 64bit ODBC driver
    Driver              = /home/admin/solaris_sparc/no_gcc/Lib/Solaris_sparc64/libSimbaClient.so
    DriverODBCVer       = 03.52
    SQLLevel            = 1
    ```

4. Make sure the remaining driver is named `ThoughtSpot` without any special characters.

    When you are done, you should see something similar to the following:

    ```
    #[ThoughtSpot]
    #APILevel            = 1
    #ConnectFunctions    = YYY
    #Description         = ThoughtSpot 32bit ODBC driver
    #Driver              = /home/admin/solaris_sparc/no_gcc/Bin/Solaris_sparc/libSimbaClient.so
    #DriverODBCVer       = 03.80
    #SQLLevel            = 1

    [ThoughtSpot]
    APILevel            = 1
    ConnectFunctions    = YYY
    Description         = ThoughtSpot 64bit ODBC driver
    Driver              = /home/admin/solaris_sparc/no_gcc/Bin/Solaris_sparc64/libSimbaClient.so
    DriverODBCVer       = 03.80
    SQLLevel            = 1
    ```

5. Save and close the `/etc/odbcinst.ini` file.

## Edit the odbc.ini file

 The `odbc.ini` file is a registry and configuration file for ODBC DSNs (Data
 Source Names). This file relies on the drivers registered in the
 `/etc/odbcinst.ini` file. Depending on your workstation architecture, you
 configure the 32-bit or 64-bit driver.

1. Open the file `/etc/odbc.ini` in the editor of your choice.
2. Comment out the configuration that you don't need.

    For example, if you are using 64-bit, comment out 32-bit.

2. Locate the `Description` section for the type of Solaris you are using (32-bit or 64-bit).
3. Locate the line that begins with `ServerList`.
4. Replace `127.0.0.1` with a comma separated list of the IP addresses of each node on the ThoughtSpot instance.

    The syntax for the `ServerList` is:

    ```
    ServerList = <node1_IP> 12345, <node2_IP> 12345 [, <node3_IP> 12345, ...]
    ```

    If you need to obtain the IP addresses of the ThoughtSpot cluster nodes, run
    the command `tscli node ls` from a Solaris shell on a ThoughtSpot appliance.

5. Do not edit the port number, leave it as `12345`.  

    When you are done, your entry will look similar to the following (this
    example is for the 64-bit ODBC driver):

    ```
    [ThoughtSpot]
    Description = ThoughtSpot 64-bit ODBC Driver
    Driver = ThoughtSpot
    ServerList =  172.18.231.17 12345
    Locale = en-US
    ErrorMessagesPath = /home/admin/solaris_sparc/no_gcc/ErrorMessages
    UseSsl = 0
    #SSLCertFile = # Set the SSL certificate file path. The certificate file can be obtained by extracting the SDK tarball
    #LogLevel = 0 # Set log level to enable debug logging
    #LogPath = # Set the debug log files path
    DATABASE = # Set the default database to connect to
    SCHEMA = # Set the default schema to connect to
    ```
6. Save and close the `odbc.ini` file.



## Test your ODBC connection

At this point, you can test your ODBC connection to ThoughSpot.  It is important
to recall that the username/password you use belongs to a ThoughSpot application
user. Typically, this user is a user with data management or administrative
privileges on the application.

1. Before trying the ODBC connection, make sure you can use this username/password
to login into the ThoughSpot application.
2. Confirm the user's privileges by going to the **Data** tab.
3. Go back to your workstation's terminal shell.
4. Use the `/opt/csw/bin` and confirm you can connect.

   Specify the `ThoughSpot` DSN:

    ```
    /opt/csw/bin/isql -v ThoughtSpot tsadmin adminpwd
    +---------------------------------------+
    | Connected!                            |
    |                                       |
    | sql-statement                         |
    | help [tablename]                      |
    | quit                                  |
    |                                       |
    +---------------------------------------+
    SQL>
    ```

Now, you are ready to begin using the connection you've configured.
