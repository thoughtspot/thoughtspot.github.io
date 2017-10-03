---
title: [Enabling ODBC Logs on Windows]
tags:
keywords: tbd
last_updated: tbd
summary: "Using logs to aid in troulbeshooting."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If you need more information in order to troubleshoot ODBC connections, you can enable logging for ODBC. To do this on Windows, follow these instructions.

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
