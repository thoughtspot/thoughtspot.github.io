---
title: [Add an SAP HANA connection]
last_updated: 12/21/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Once ThoughtSpot Embrace is enabled, you can add a connection to an SAP HANA database. This allows you to perform a live query of the external database to create answers and pinboards, without having to bring the data into ThoughtSpot.

To add a connection to SAP HANA:

1. Click **Data** in the top navigation bar.

2. Click the **Embrace** tab, and click **+ Add connection** at the upper-right-hand side of the page.

    ![Click "+ Add connection"]({{ site.baseurl }}/images/redshift-addconnection.png "Click "+ add connection"")
    <!-- ![]({{ site.baseurl }}/images/new-connection.png "New db connect") -->

3. Create a name for your connection, a description (optional), then select the SAP HANA connection type, and click **Continue**.
    ![Add a HANA connection]({{ site.baseurl }}/images/HANA-connectiontype.png "Add a Google SAP HANA connection")
    <!--  ![Add a SAP HANA connection]({{ site.baseurl }}/images/HANA-connectiontype.png "Add a SAP HANA connection") -->

4. Enter the connection details for your SAP HANA data source.
    ![Enter connection details]({{ site.baseurl }}/images/HANA-connectiondetails.png "Enter connection details")
    <!--  ![Enter connection details]({{ site.baseurl }}/images/HANA-connectiondetails.png "Enter connection details") -->

    Refer to the [SAP HANA connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-hana-connection-reference.html#) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that you need to set up your connection to SAP HANA, by doing the following:
    1. Click the **Advanced Config** menu to reveal the **Key** and **Value** fields.
    2. Enter your key and value information.
    3. To add more keys and values, click the plus sign (+), and enter them.

    {% include note.html content="Any key-value pairs that you enter must be defined in your Hana data source. Key-value pairs are case-sensitive." %}

    For more information about the advanced properties for SAP HANA, see: [SAP HANA Client Interface Programming Reference](https://help.sap.com/viewer/0eec0d68141541d1b07893a39944924e/2.0.03/en-US/109397c2206a4ab2a5386d494f4cf75e.html){:target="_blank"}, in the SAP's documentation.

6. Click **Continue**.       

7. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.
    ![Select tables and columns for your connection]({{ site.baseurl }}/images/teradata-selecttables.png "Select tables and columns for your connection")
  <!--  ![Select tables and columns for your connection]({{ site.baseurl }}/images/HANA-selecttables.png "Select tables and columns for your connection") -->

   Once the connection is added, you can search your BiqQuery database right away by clicking **Search now**.
  ![The "Connection created" screen]({{ site.baseurl }}/images/HANA-connectioncreated.png "The "Connection created" screen")

   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database.

## Related information
- [Edit an SAP HANA connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-hana-edit-connection.html)
- [SAP HANA connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-hana-connection-reference.html)
- [Load and manage data]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data and object security]({{ site.baseurl }}/admin/architecture/security.html)
