---
title: [Add a New Data Source to ODBC on Windows]
tags: 
keywords: tbd
last_updated: tbd
summary: "You can add multiple ODBC data sources."
sidebar: mydoc_sidebar
---
# Add a New Data Source to ODBC on Windows

You can add multiple ThoughtSpot data sources to your ODBC configuration. This capability supports connecting to multiple ThoughtSpot instances.

ODBC for Windows needs to have been [installed successfully](install_odbc_windows.html#) before you can add another ODBC data source.

The main reason for needing to set up multiple ThoughtSpot ODBC data sources is that you have a production cluster and a test or development cluster. The installation procedure for ODBC walks you through the setup of a single data source. Use this procedure if you want to add an additional data source after the installation is successful.

1.  Launch the **ODBC Administrator**. You can find it in your programs under **ThoughtSpot ODBC Driver**.

     ![](../../shared/conrefs/../../images/odbc_install_8.png "Launch the ODBC Administrator")

2.   Click the **System DSN** tab.
3.   Select **Add**.

     ![](../../images/ODBC_add_data_source.png "Select Add from the System
                                    DSN tab")

4.   Select ThoughtSpot ODBC Driver as the driver to use, and click **Finish**.

     ![](../../images/ODBC_choose_new_data_source_to_add.png "Select the driver for your new data source")

5.   In the **Client Configuration Dialog**, enter the details about your data source.

    -   **Data Source Name**: The name you want to call the data source.
    -   **Description**: A description of the data source.
    -   **Server IP**: A list of the IP addresses for each node, separated by commas.
    -   **Server Port**: 12345
    -   **Idle Timeout**: Time in seconds after which an idle ODBC connection times out.
    -   **Login Timeout**: Time in seconds after which a login request times out.
    -   **Query Timeout**: Time in seconds after which a query times out.
     ![](../../images/ODBC_config_dev_source_connect.png "Enter the data source details")

6.   To configure custom properties, click **Options**.
7.   Click **Add**, to add a new custom property.

     ![](../../images/ODBC_add_custom_property.png "Add a custom property")

8.   Add these properties using the key value pairs shown, clicking **OK** after each entry to save it. Note that the key must be defined exactly as it appear here, using all capital letters. You can find other supported properties in [ODBC and JDBC configuration properties](../reference/simba_settings.html#).

    -   **DATABASE**: The default database to connect to.
    -   **SCHEMA**: Optional. The default schema to connect to.
    -   **CONNECTIONTIMEOUT**: Optional. Seconds before an idle connection times out.
     ![](../../images/ODBC_add_custom_property_new_data_source.png "Enter the custom property key and value")

9.   When all the setting have been made, click **Test Connection**.
10.  If everything is working, click **OK**, to save your settings. If not, you may want to [enable ODBC logging](../troubleshooting/troubleshooting_ODBC.html#).

**Parent topic:** [Install the ODBC Driver on Windows](../../data_integration/clients/install_odbc_windows.html)
