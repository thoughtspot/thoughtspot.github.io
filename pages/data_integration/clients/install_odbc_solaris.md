---
title: [Install the ODBC Driver on Solaris]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "Use this procedure to obtain the Solaris ODBC driver and install it."
sidebar: mydoc_sidebar
---
# Install the ODBC Driver on Solaris

It is important to note the following about the ODBC login information:

-   Database username: This is the name of a ThoughtSpot user with administrator permissions.

    **Attention:** This is not the machine login username.

-   Database password: This is the ThoughtSpot user password.

    **Attention:** This is not the machine login password.


The Solaris ODBC driver is certified on Solaris Sparc 10.

1.   Create a file on your Solaris workstation called /etc/simbaclient.ini and add the following text to it:

    ```
    [Driver]
    ErrorMessagesPath=<path_to_error_messages_directory>
    ```

2.   Obtain the ODBC driver:
    1.   Navigate to the Downloads page in the Help Center to download the ODBC driver.
    2.   Click **ODBC Driver for Solaris** to download the file `ThoughtSpot_solaris_sparc_odbc_<version>.tar.gz`.
    3.   Unzip and untar the file:

        ```
        gunzip ThoughtSpot_solaris_sparc_odbc_<version>.tar.gz

        tar -xvf ThoughtSpot_solaris_sparc_odbc_<version>.tar
        ```

3.   Copy the library files from the Lib directory to a safe location on your Solaris machine. Add the corresponding path to the LD\_LIBRARY\_PATH environment variable. For 32-bit users, the library files are located in the directory:

    ```
    /solaris_sparc/Lib/Solaris_sparc_gcc
    ```

    For 64-bit users, the library is located at:

    ```
    /solaris_sparc/Lib/Solaris_sparc64_gcc
    ```

4.   Open the file `/solaris_sparc/Setup/odbc.ini` in the editor of your choice.
5.   Find the section for the type of Linux you are using (32-bit or 64-bit), by looking at the `Description`. Then find the line below it that begins with `ServerList`, and replace 127.0.0.1 with a comma separated list of the IP addresses of each node on the ThoughtSpot instance. Leave the port number as 12345. The syntax for `ServerList` is:

    ```
    ServerList = <node1\_IP> 12345, <node2\_IP> 12345 [, <node3\_IP> 12345, ...]
    ```

    For example, for the 64-bit ODBC driver:

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

    If you need to obtain the IP addresses of the nodes in the cluster, you can run the command `tscli node ls` from the Linux shell on the ThoughtSpot instance.

6.   Open the file `/solaris_sparc/Setup/odbcinst.ini` in the editor of your choice.
7.   Update the the line that starts with `Driver` to have the path to the file `libSimbaClient.so` (Use the path where you copied the library files). For example, for the 64-bit ODBC driver:

    ```
    [ThoughtSpot(x64)]
    APILevel            = 1
    ConnectFunctions    = YYY
    Description         = ThoughtSpot 64bit ODBC driver
    **Driver              = /usr/local/scaligent/toolchain/local/simba/odbc/solaris\_sparc/Lib/Solaris\_sparc64\_gcc/libSimbaClient.so
    **DriverODBCVer       = 03.52
    SQLLevel            = 1
    ```

8.   Save the file. Now you can test your ODBC connection.

**Parent topic:** [About the ODBC Driver](../../data_integration/clients/about_odbc.html)
