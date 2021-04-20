---
title: [Add a Snowflake connection]
last_updated: 12/21/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Once ThoughtSpot Embrace is enabled, you can add a connection to a Snowflake database. This allows you to perform a live query of the external database to create answers and pinboards, without having to bring the data into ThoughtSpot.

To add a new connection to Snowflake:

1. Click **Data** in the top navigation bar.

2. Click the **Embrace** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

     <!-- ![]({{ site.baseurl }}/images/new-connection.png "New db connect") -->

3. Create a name for your connection, a description (optional), then select the Snowflake connection type, and click **Continue**.
     ![Add a Snowflake connection]({{ site.baseurl }}/images/embrace-snowflake-connection-type-ts-cloud.png "Add a Snowflake connection")

4. Enter the connection details for your Snowflake data source using either OAuth or service account authentication:

   ThoughtSpot supports <a href="https://docs.snowflake.com/en/user-guide/oauth-partner.html">Snowflake OAuth authentication</a>, but not External OAuth.

   For OAuth authentication, do the following:
    1. Enter Account name, OAuth Client ID, OAuth Client Secret, and (optional) Database.
    ![Enter connection details]({{ site.baseurl }}/images/snowflake-connectiondetails-oauth.png "Enter connection details")
    <!--  ![Enter connection details]({{ site.baseurl }}/images/gbq-connectiondetails.png "Enter connection details") -->
    2. If you wish to provide the optional additional key-value pairs for your Snowflake connection, complete the procedure in step 5, and then click **Continue**. If not, click **Continue**.
    3. When the Snowflake login screen appears, enter your Snowflake User Name and Password and click **Log In**, or use the Single-Sign-On option.
    4. In the next Snowflake screen, allow ThoughtSpot to access your Snowflake account by clicking **Allow**, and then go to step 7 to select tables for your connection.

        Using security passthrough may have implications for your Row Level Security. See [About row level security (RLS)]({{ site.baseurl }}/admin/data-security/about-row-security.html) for more information.

   For service account authentication, do the following:
   - Enter Account name, User, Password, Role, Warehouse, and (optional) Database.
     ![Enter connection details]({{ site.baseurl }}/images/snowflake-connectiondetails-serv-acct.png "Enter connection details")

    Refer to the [Snowflake connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-connection-reference.html) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that are required to set up your connection to Snowflake, by doing the following:

   - Click the **Advanced Config** menu to reveal the **Key** and **Value** fields.
   - Enter your key and value information.
   - To add more keys and values, click the plus sign (+), and enter them.

     {% include note.html content="Any key-value pairs that you enter must be defined in your Snowflake data source. Key-value pairs are case-sensitive." %}

6. Click **Continue**.   

7. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.

   ![Select tables and columns for your connection]({{ site.baseurl }}/images/snowflake-selecttables.png "Select tables and columns for your connection")

    A message appears indicating the number of tables and columns that will be added to your connection.

8. Click **Confirm**.

   Once the connection is added, you can search your Snowflake database right away by clicking **Search now**.

   ![The "Connection created" screen]({{ site.baseurl }}/images/snowflake-connectioncreated.png "The "Connection created" screen")


   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database.

## Related information
- [Modify a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-modify.html)
- [Snowflake connection reference]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-reference.html)
- [Load and manage data]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data and object security]({{ site.baseurl }}/admin/architecture/security.html)
