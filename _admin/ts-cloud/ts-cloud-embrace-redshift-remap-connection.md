---
title: [Remap a Redshift connection]
last_updated: 8/11/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Modify the connection parameters by editing the source mapping <code>yaml</code> file that was created when you added the connection. For example, you can remap the existing table or column to a different table or column in an existing database connection. ThoughtSpot recommends that you check the dependencies before and after you remap a table or column in a connection to ensure they display as intended.

To remap a Redshift connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection you want to remap.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Click the More Info icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} and select **Remapping** on the upper-right-hand side of the page.

    ![Remap a connection]({{ site.baseurl }}/images/redshift-remapping.png "Remap a connection")

5. Click **Download** to download the source mapping file.

    !["Download the source mapping file"]({{ site.baseurl }}/images/embrace-remapping-download.png "Download the source mapping file")

6. Edit the file, as required, and save it.
<!-- ![Edit the yaml file]({{ site.baseurl }}/images/redshift-yaml.png "Edit the yaml file") -->

7. Finally, click **Browse your files**, and upload your edited mapping file to update the mapping of your connection.


See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-connection-reference.html) for details of connection parameters.

To remove a table from a connection, delete it from the connection details page. For more information, see:
- [Delete a table]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-delete-table.html)
- [Delete a table with dependent objects]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-delete-table-dependencies.html)
