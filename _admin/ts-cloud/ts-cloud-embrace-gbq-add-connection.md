---
title: [Add a BigQuery connection]
last_updated: 9/21/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To connect to BigQuery:

1. Click **Data** in the top navigation bar.

2. Click the **Embrace** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

    <!-- ![Click "+ Add connection"]({{ site.baseurl }}/images/redshift-addconnection.png "Click "+ add connection"") -->
    <!-- ![]({{ site.baseurl }}/images/new-connection.png "New db connect") -->

3. Create a name for your connection, a description (optional), then select the BigQuery connection type, and click **Continue**.
    ![Add a GBQ connection]({{ site.baseurl }}/images/gbq-connectiontype.png "Add a Google BigQuery connection")
    <!--  ![Add a BigQuery connection]({{ site.baseurl }}/images/gbq-connectiontype.png "Add a BigQuery connection") -->

4. Enter the connection details for your BigQuery data source using either OAuth or service account authentication.

 For OAuth authentication, do the following:
    1. Enter Project id, OAuth Client ID, OAuth Client Secret, Database (optional).
   ![Enter connection details]({{ site.baseurl }}/images/gbq-connectiondetails-oauth.png "Enter connection details")
    <!--  ![Enter connection details]({{ site.baseurl }}/images/gbq-connectiondetails.png "Enter connection details") -->
    2. If you wish to provide the optional additional key-value pairs for your BigQuery connection, complete the procedure in step 5, and then click **Continue**. If not, click **Continue**.
    3. At the Google account sign-in screen, select your Google account.
    4. Allow thougtspot.com access to your Google account by clicking **Allow**, and then go to step 7 to select tables for your connection.

 For service account authentication, do the following:
 - Enter Project id, and Service account.
     ![Enter connection details]({{ site.baseurl }}/images/gbq-connectiondetails-serv-acct.png "Enter connection details")
     <!--  ![Enter connection details]({{ site.baseurl }}/images/gbq-connectiondetails.png "Enter connection details") -->  

    Refer to the [BigQuery connection reference]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-reference.html#) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that you need to set up your connection to BigQuery, by doing the following:
- Click the **Advanced Config** menu to reveal the **Key** and **Value** fields.
- Enter your key and value information.
- To add more keys and values, click the plus sign (+), and enter them.

    {% include note.html content="Any key-value pairs that you enter must be defined in your BigQuery data source. Key-value pairs are case-sensitive." %}

6. Click **Continue**.       

7. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.
    ![Select tables and columns for your connection]({{ site.baseurl }}/images/snowflake-selecttables.png "Select tables and columns for your connection")
  <!--  ![Select tables and columns for your connection]({{ site.baseurl }}/images/gbq-selecttables.png "Select tables and columns for your connection") -->

    A message appears indicating the number of tables and columns that will be added to your connection.

8. Click **Confirm**.  

   Once the connection is added, you can search your BiqQuery database right away by clicking **Search now**.

   ![The "Connection created" screen]({{ site.baseurl }}/images/gbq-connectioncreated.png "The "Connection created" screen")

   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database.

You can modify an Embrace BigQuery connection in the following ways:

- [Edit a BigQuery connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-edit-connection.html)
- [Remap a BigQuery connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-remap-connection.html)
- [Delete a table from a BigQuery connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-delete-table.html)
- [Delete a table with dependent objects]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-delete-table-dependencies.html)

You can also [Delete a BigQuery connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-delete-connection.html).

See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-connection-reference.html) for details of connection parameters.
