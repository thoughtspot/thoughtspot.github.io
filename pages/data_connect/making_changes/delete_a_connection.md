---
title: [Delete a connection]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
---
A connection is not tied to a task, and can therefore be called in multiple data sources. So in order to delete a connection, you must first delete all of the sources and tasks that use that connection. Once the connection is not used in any data source, you will be able to delete it.

To delete a connection:

1. Log in to ThoughtSpot from a browser.
2. Click on **DATA**, on the top navigation bar.

     ![](/pages/images/data_icon.png "Data")

3.  Click the **Data Sources** tab at the top of the screen.

    ![](/pages/images/data_sources_tab_created.png "Data Sources tab")

4. Delete any dependent data sources. To delete a data source, see [Delete a data source](delete_data_source.html#).
5. Select **+ New data source** on the upper right hand side of the panel.

     ![](/pages/images/new_data_source_created.png "New data source")

6. Select the connection type of interest and click **Next**.

     ![](/pages/images/lightweight_etl_select_connection.png "Select a connection type")

7. In the **Select Tables** step, click the **Select a connection** dropdown and browse the list for the connection you wish to delete.

8. Click the **x** on the right of your selected connection to delete it.
     ![](/pages/images/delete_a_connection.png "Delete a connection")
