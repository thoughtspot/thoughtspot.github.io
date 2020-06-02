---
title: [Connect to data]
last_updated: 5/22/2020
summary: "ThoughtSpot Cloud connects to your data through Embrace."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Connect to your data through Embrace.

This release of ThoghtSpot Cloud supports Snowflake and RedShift databases on AWS. The following instructions are for Snowflake connections.

## Connect to a Snowflake database

![Connect to your data]({{ site.baseurl }}/images/connect-data-snowflake.gif "Connect to your data")

Follow these steps to create a new Snowflake connection:

1. Click **Create Connection**.

2. On the **Choose connection type** interface, add the following information:

   - **Connection Name**
   - **Connection description** (optional)
   - Select connection type; here, choose **Snowflake**

3. Click **Continiue**.

4. On the **Snowflake connection details** interface, enter the information for your Snowflake data source.

    Refer to the [Snowflake connection reference]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-reference.html#) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that you must have to set up your connection to Snowflake:

   - Click **Advanced Config** menu
   - Enter your key and value information in the **Key** and **Value** fields.
   - To add more keys and values, click the plus sign (+).

    Note that the key-value pairs you enter must be defined in your Snowflake data source. Key-value pairs are case-sensitive.

6. Click **Continue**.   

7. On the **Select tables** interface, expand each table available in the connection, and select the columns you plan to use.

8. When you completed your selection, click **Create connection**.


**Congratulations!** You now have a connection to you Snowflake database.

## Next steps
Next, [join tables]({{ site.baseurl }}/admin/ts-cloud/tables-join.html).
