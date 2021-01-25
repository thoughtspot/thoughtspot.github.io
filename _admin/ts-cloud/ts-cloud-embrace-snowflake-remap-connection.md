---
title: [Remap a Snowflake connection]
last_updated: 8/11/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Modify the connection parameters by editing the source mapping <code>yaml</code> file that was created when you added the connection. For example, you can remap the existing table or column to a different table or column in an existing database connection. ThoughtSpot recommends that you check the dependencies before and after you remap a table or column in a connection to ensure they display as intended.

To remap a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection you want to remap.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Click the More Info icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} and select **Remapping** on the upper-right-hand side of the page.

    ![Remap a connection]({{ site.baseurl }}/images/snowflake-remapping.png "Remap a connection")

5. Click **Download** to download the source mapping file.

    !["Download the source mapping file"]({{ site.baseurl }}/images/snowflake-downloadyaml.png "Download the source mapping file")

6. Edit the file, as required, and save it.
<!--    ![]({{ site.baseurl }}/images/embrace-yaml.png "Edit yaml") -->

7. Finally, click **Browse your files**, and upload your edited mapping file to update the mapping of your connection.


To remove a table from a connection, delete it from the connection details page. For more information, see: [Delete a Snowflake connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-delete-connection.html).

See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-connection-reference.html) for details of connection parameters.

We also recommend that you review [Best Practices for Snowflake connections]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-best-practices.html)
