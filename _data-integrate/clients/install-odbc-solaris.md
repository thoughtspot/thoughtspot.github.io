---
title: [Install the ODBC Driver on Solaris]
keywords: tbd
last_updated: tbd
summary: "Use this procedure to obtain the Solaris ODBC driver and install it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The instructions on this page explain how to configure the ODBC driver on a
Solaris workstation. Make sure you have read the overview material in the [ODBC
driver overview]({{ site.baseurl }}/data-integrate/clients/about-odbc.html#).
This workstation is the same machine where you plan to run your ETL activities.
The Solaris ODBC driver is certified on Solaris Sparc 10.

## Download the driver and update your workstation environment

On your workstation, where you want to connect from, do the following to obtain
the ODBC driver:

1. Navigate to the [**Downloads**]({{ site.baseurl }}/release/downloads.html#) page.
2. Click **ODBC Driver for Solaris** to download the driver.
2. Unzip and untar the file:

    ```
    gunzip ThoughtSpot_solaris_sparc_odbc_<version>.tar.gz

    tar -xvf ThoughtSpot_solaris_sparc_odbc_<version>.tar
    ```

4. Copy the library files from the `Lib` directory to a safe location on your Linux machine.

    For 32-bit users, the library files are located in the directory:

    ```
    /solaris_sparc/Lib/Solaris_sparc_gcc
    ```

    For 64-bit users, the library is located at:

    ```
    /solaris_sparc/Lib/Solaris_sparc64_gcc
    ```


5. Add the location's path to the `LD_LIBRARY_PATH` environment variable.

## Edit the /etc/simbaclient.ini file

When you are ready, do the following to install the driver:

1. Create a file on your Linux workstation called `/etc/simbaclient.ini`.
2. Edit the `/etc/simbaclient.ini` file and add the following text to it:

    ```
    [Driver]
    ErrorMessagesPath=<path_to_error_messages_directory>
    ```
3. Save and close the file.



## Edit the odbc.ini file

1. Open the file `/solaris_sparc/Setup/odbc.ini` in the editor of your choice.
2. Locate the `Description` section for the type of OS you are using (32-bit or 64-bit).
3. Locate the line that begins with `ServerList`.
4. Replace `127.0.0.1` with a comma separated list of the IP addresses of each node on the ThoughtSpot instance.

    The syntax for the `ServerList` is:

    ```
    ServerList = <node1_IP> 12345, <node2_IP> 12345 [, <node3_IP> 12345, ...]
    ```

    If you need to obtain the IP addresses of the ThoughtSpot cluster nodes, run
    the command `tscli node ls` from a Linux shell on a ThoughtSpot appliance.

5. Do not edit the port number, leave it as `12345`.  

    When you are done, your entry will look similar to the following (this
    example is for the 64-bit ODBC driver):

    ```
    [ThoughtSpot_x64]
    Description         = ThoughtSpot 64-bit ODBC Driver
    Driver              = ThoughtSpot(x64)
    **ServerList = 192.168.2.249 12345, 192.168.2.148 12345, 192.168.2.247 12345**
    Locale              = en-US
    UseSsl              = 0
    #SSLCertFile        =   # Set the SSL certificate file path. The certificate fil
    e can be obtained by extracting the SDK tarball
    #LogLevel           = 0 # Set log level to enable debug logging
    #LogPath            =   # Set the debug log files path
    DATABASE            =   # Set the default database to connect to
    SCHEMA              =   # Set the default schema to connect to
    ```

6. Save and close the file.

## Edit the odbcinst.ini file

1. Open the file `/solaris_sparc/Setup/odbcinst.ini` in the editor of your choice.
2. Edit the `Driver`  line so that it contains the path to the file `libSimbaClient.so`

   Use the path where you copied the library files. For example, for the 64-bit ODBC driver:

    ```
    [ThoughtSpot(x64)]
    APILevel            = 1
    ConnectFunctions    = YYY
    Description         = ThoughtSpot 64bit ODBC driver
    **Driver              = /usr/local/scaligent/toolchain/local/simba/odbc/solaris_sparc/Lib/Solaris_sparc64_gcc/libSimbaClient.so
    **DriverODBCVer       = 03.52
    SQLLevel            = 1
    ```

8. Save and close the file.


## Testing your ODBC connection

At this point, you can test your ODBC connection to ThoughSpot.  It is important
to recall that the username/password you use belongs to a ThoughSpot application
user with with administrator permissions.  Before trying the ODBC connection,
make sure you can use this username/password to login into the ThoughSpot
application and confirm the user's privileges.
