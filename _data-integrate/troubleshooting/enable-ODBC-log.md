---
title: [Enable ODBC Logs]
keywords: tbd
tags: [logs]
summary: "Learn how to troubleshoot ODBC connections."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If you need more information in order to troubleshoot ODBC connections, you can
enable logging for ODBC on the workstation you use for connecting to ThoughSpot.

## On windows

To enable ODBC logs on Windows:

1. Open the ODBC Data Source Administrator and select the **System DSN** tab.
2. Select your ThoughtSpot data source and click **Configure**.

     ![]({{ site.baseurl }}/images/odbc_logs_1.png "Configure ODBC data source")

3. In the Client Configuration Dialog, click **Logging**.

     ![]({{ site.baseurl }}/images/odbc_logs_2.png "Configure ODBC Logging")

4. Choose a **Log Level**, depending on what level of verbosity you want to show in the logs.

     ![]({{ site.baseurl }}/images/odbc_logs_3.png "Windows ODBC Logging Setup")

5. For **Log Directory:**, type in the fully qualified path where you want the logs to be saved.

     ![]({{ site.baseurl }}/images/odbc_logs_4.png "Windows ODBC Logging Setup")

6. Click **OK** to save your settings, and **OK** again, to dismiss the ODBC Data Source Administrator.
7. Run the ODBC load.
8. Locate the log file that was generated, and send it to ThoughtSpot Support with a description of the problem.


## On Linux or solaris

To do this on Linux or Solaris, follow these
instructions.

To enable ODBC logs:

1. Navigate to the directory where you installed ODBC.
2. Open the `odbc.ini` file in a text editor.

   This file is the registry and configuration file for ODBC.

3. Locate the `LogLevel` and `LogPath` properties.
4. Uncomment the properties.
5. Enter a value for  the `LogLevel` the.

   Acceptable values are from 1 to 6 with 6 being the most verbose.

7. Enter the fully qualified path for the  `LogPath` values.

   The log will be written here.  Your file will look similar to the following:
   Example for Linux 64-bit:

   ```
   [ThoughtSpot]
   Description = ThoughtSpot 64-bit ODBC Driver
   Driver = ThoughtSpot
   ServerList =  172.18.231.17 12345
   Locale = en-US
   ErrorMessagesPath = /home/admin/linux/ErrorMessages
   UseSsl = 0
   #SSLCertFile = # Set the SSL certificate file path. The certificate file can be obtained by extracting the SDK tarball
   LogLevel = 3 # Set log level to enable debug logging
   LogPath = /home/admin/odbc-logs # Set the debug log files path
   DATABASE = # Set the default database to connect to
   SCHEMA = # Set the default schema to connect to
   ```

8. Save and close the file.
9. To test the configuration, run the ODBC load and review the log files.
