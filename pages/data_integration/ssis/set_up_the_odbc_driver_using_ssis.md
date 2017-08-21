---
title: [Set up the ODBC Driver for SSIS]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "Use SSIS to set up the ODBC Driver."
sidebar: mydoc_sidebar
---
# Set up the ODBC Driver for SSIS

Use SSIS to set up the ODBC Driver by creating a connection manager. This manager is used to create a connection between your OLE DB Source and the ODBC Destination.

On Windows 64-bit, you have to install both the 32-bit and 64-bit ThoughtSpot ODBC drivers. In addition, they must be named the same, such as ThoughtSpot. By default they are named ThoughtSpot-32 and ThoughtSpot-64. This is required because the 64-bit SSIS shows a list of 32-bit ODBC drivers when you configure an ODBC target. However, it executes the 64-bit driver. If the drivers aren't named the same, then you'll get an error saying the driver doesn't exist.

To set up the ODBC driver using SSIS:

1.   Open your SQL Server visual development tool that is based on Microsoft Visual Studio.
2.   Select **OLE DB Source**, and click **New**.
3.   Here you must add the server by name from the machine accessible list. Enter the authentication information: db name, user name, password, and test connection.

    **Note:** You can add the UID and password by clicking on **Options**.

4.   Click **File** and select **New**, then **Project**.
5.   Select the **Integration Services** tab under Installed \> Templates \> Business Intelligence. Enter a name in the **Name** field and click **OK**.

     ![](../../images/ssis_integration_services.png "New Project: Integration Services")

6.   Select the **SSIS Toolbox** tab on the left hand side of the platform, and drag and drop **Data Flow Task** to the main window.

     ![](../../images/ssis_data_flow_task.png "Drag and drop Data Flow Task")

7.   Double click the **Data Flow Task** icon when it appears in the center of the page.

     ![](../../images/ssis_data_flow_task_icon.png "Data Flow Task icon")

8.   Navigate back to the **SSIS Toolbox** tab. You now want to create sources and destinations. Under **Other Sources**, find **OLE DB Source** and drag and drop it to the main window.
9.   Double click the **OLE DB Source** icon when it appears in the center of the page to open the OLE DB Source Editor.
10.  Select a new OLE DB connection manager by clicking **New**. In the Configure OLE DB Connection Manager window, select your **Data connection** and click **OK**.

     ![](../../images/ssis_ole_db_connection_manager.png "Configure OLE DB Connection Manager")

    **Note:** If you do not see your data connection, you will have to create a new one in the Connection Manager by clicking **New**.

11.  Back in the OLE DB Source Editor, select the **Name of the table or the view**, and click **OK**.

     ![](../../images/ssis_name_of_table.png "OLE DB Source Editor table name")

12.  Select the table, and see what columns are in it. In this example, a single column, c1, is selected.

     ![](../../images/ssis_table_column.png "OLE DB Table column")

13.  The ODBC Data Source Administrator has to be set up to connect to ThoughtSpot and bring the table in. To do so, search for and open your **ODBC Data Sources (32-bit)** program. Click the **System DSN** tab and select **ThoughtSpot\_32**. Then click **Configure**.

     ![](../../images/ssis_system_dsn.png "ODBC Data Source Administrator: Configure")

14.  In the Client Configuration Dialog, enter the **Server IP** and **Server Port**. Any node IP that has Simba server running on it should work. You can provide multiple IPs (using the **Secondary Servers** dialog) so that it will find the one that the Simba server is running on. Click **OK** twice to close the Client Configuration Dialog and the ODBC Data Source Administrator.

     ![](../../images/ssis_client_configuration_dialog.png "ODBC Data Source Administrator: Client Configuration Dialog")

15.  Now that you have set up your source, create the empty table in ThoughtSpot to take this feed.

    **Note:** SSIS does not allow you to create the table in ThoughtSpot. You have to do this first in TQL. In Pentaho, it will create the table in ThoughtSpot, but not in SSIS.

16.  Create the ODBC Destination. Use the one you created and named in the ODBC Data Source Administrator. In the **SSIS Toolbox** tab, under **Other Destinations**, drag and drop **ODBC Destination** to the main window.
17.  Drag the **blue arrow** to connect the OLE DB Source icon to the ODBC Destination icon. Then, double click the **ODBC Destination** icon.

     ![](../../images/ssis_drag_connector.png "Creating the OLE DB Source and ODBC Destination connection")

18.  Use ODBC Destination to set the **Batch size** for the connection in the Connection Manager tab. You can set the size to be up to 10,000.

     ![](../../images/ssis_batch_size.png "ODBC Destination: Batch size")

    If the load fails, the entire batch will be lost, and you will have to start that load over again.

19.  Set the **Transaction Size** to match the total number of rows that are expected to be loaded in the load cycle.

    **Note:** Your transaction size can be quite large—even spanning a million rows. However, too many small batches can leave the cluster in a rough state. This is because each batch acts as a separate transaction and creates a separate commit. Too many of these will slow down our system since each transaction creates a “data version” in our system. In Pentaho, the transaction size setting is called Commit Size.

20.  Set the **Transaction Option** attribute of the Data Flow Task to **Supported**.
21.  In the Mappings tab, validate the mapping or change it. You can have different column names in each database if you map them. Of course, they must be of the same or compatible datatype.

     ![](../../images/ssis_mappings.png "ODBC Destination: Mappings")

22.  Start the import job by clicking the **Start** button. You should see an animation indicating that the data is transferring over. When the import is complete, the number of successfully transferred rows is displayed.

     ![](../../images/ssis_start.png "Start import job")

     ![](../../images/ssis_success.png "Successful import job")

23.  You can validate in TQL or in the Data screen.

**Parent topic:** [About Microsoft SSIS](../../data_integration/ssis/about_ssis.html)
