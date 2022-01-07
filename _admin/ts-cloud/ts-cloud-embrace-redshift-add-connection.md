---
title: [Add an Amazon RedShift connection]
last_updated: 1/7/2022
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Before you begin

If you are going to use SSL or OAuth, you must configure them before you can add a Redshift connection.

### Enabling SSL in Amazon Redshift

If you need to create a secure connection to Amazon Redshift, you must edit the "parameter group" assigned to your Redshift cluster and enable the *require_SSL* flag.

To enable **FIPS-compliant SSL** mode, set both the *use_fips_ssl* parameter and the *require_SSL* parameter to **true** in the parameter group that is associated with your Redshift cluster.

For more information, see [Connect using SSL](https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-ssl-support.html){:target="_blank"} in Amazon's Redshift documentation.

### Configuring OAuth

If you need to use OAuth with Redshift, you must configure an OpenID Connect (OIDC) provider in AWS IAM. For details, see [Configure OAuth for a Redshift connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-oauth.html)

## Adding a Redshift connection

To connect to Amazon Redshift:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

3. Create a name for your connection, a description (optional), then select the Redshift connection type, and click **Continue**.

    ![Choose connection type]({{ site.baseurl }}/images/embrace-redshift-connection-type-ts-cloud.png "Choose connection type")

4. Enter the connection details for your Redshift data source using Service Account, IAM or OAuth.

    ![Enter connection details]({{ site.baseurl }}/images/redshift-connectiondetails.png "Enter connection details")

   For Service Account authentication, do the following:
   - Enter Host, Port, User, Password, and Database.

   For IAM authentication, do the following:
   - Enter Host, Port, Database, Db User, Access Key, and Secret Key.

   For OAuth authentication, do the following:
   - Enter Host, Port, Database, OAuth Client ID, OAuth Client Secret, Auth Url, Access token Url, Role ARN, and DbGroups.       

     Refer to the [Redshift connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-connection-reference.html) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) If you enabled SSL in your Redshift cluster, you must do the following:
    1. Click the **Advanced Config** menu to reveal the **Key** and **Value** fields.
    2. For Key, enter **SSL**.
    3. For Value, enter **True**.

    To add more keys and values, click the plus sign (+), and enter them.   

    {% include note.html content="Any key-value pairs that you enter must be defined in your Redshift data source. Key-value pairs are case-sensitive." %}

6. Click **Continue**.   

7. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.

     ![Select tables and columns]({{ site.baseurl }}/images/snowflake-selecttables.png "Select tables and columns")

   Once the connection is added, you can search your Redshift database right away by clicking **Search now**.

   ![The "connection created" screen]({{ site.baseurl }}/images/redshift-connectioncreated.png "The 'connection created' screen")

   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly.

You can modify a Redshift connection in the following ways:
- [Edit an Amazon Redshift connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-edit-connection.html)
- [Remap an Amazon Redshift connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-remap-connection.html)
- [Delete a table from an Amazon Redshift connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-delete-table.html)
- [Delete a table with dependent objects]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-delete-table-dependencies.html)

You can also [Delete a connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-delete-connection.html).

See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-connection-reference.html) for details of connection parameters.
