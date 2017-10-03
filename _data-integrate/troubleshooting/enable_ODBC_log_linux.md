---
title: [Enabling ODBC Logs on Linux or Solaris]
tags:
keywords: tbd
last_updated: tbd
summary: "Learn how to troubleshoot ODBC connections."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If you need more information in order to troubleshoot ODBC connections, you can enable logging for ODBC. To do this on Linux or Solaris, follow these instructions.

To enable ODBC logs:

1. Navigate to the directory where you installed ODBC.
2. Open the file `odbc.ini` in a text editor.
3. Find the settings `LogLevel` and `LogPath` in the file, and uncomment them by removing the "\#" at the beginning of each line.
4. Edit the value for each of the logging properties:

    Example for Linux 64-bit:

    ```
    [ThoughtSpot_x64]
    Description         = ThoughtSpot 64-bit ODBC Driver
    Driver              = ThoughtSpot(x64)
    ServerList          = 127.0.0.1 12345
    Locale              = en-US
    ErrorMessagesPath   = /usr/local/scaligent/toolchain/local/simba/odbc/linux/ErrorMessages
    UseSsl              = 0
    #SSLCertFile        =   # Set the SSL certificate file path. The certificate file can be obtained by extracting the SDK tarball
    **\#LogLevel           = 3 \# Set log level to enable debug logging
    \#LogPath            = /usr/local/scaligent/toolchain/local/simba/odbc/linux/Logs  \# Set the debug log files path**
    ```

    For `LogLevel`, enter a number from 1 to 6 (with 6 being the most verbose). For `LogPath`, enter the fully qualified path where you want the log to be written.

5. Run the ODBC load, and send the log file to ThoughtSpot Support.
