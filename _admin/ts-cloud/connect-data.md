---
title: [Connect to data]
last_updated: 5/22/2020
summary: "ThoughtSpot Cloud connects to your data through Embrace."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Connect to your data through Embrace.

This release of ThoughtSpot Cloud supports Snowflake and RedShift databases on AWS. Learn how to connect to your [Snowflake](#snowflake) or [Amazon Redshift](#redshift) data in ThoughtSpot.

{: id="snowflake"}
## Connect to a Snowflake database

![Connect to your data]({{ site.baseurl }}/images/connect-data-snowflake.gif "Connect to your data")

Follow these steps to create a new Snowflake connection:

1. Click **Create Connection**.

2. On the **Choose connection type** interface, add the following information:

   - **Connection Name**
   - **Connection description** (optional)
   - Select connection type; here, choose **Snowflake**

3. Click **Continue**.

4. On the **Snowflake connection details** interface, enter the information for your Snowflake data source.

    See [Connect to Snowflake from ThoughtSpot Cloud]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake.html#connection-properties) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that you must have to set up your connection to Snowflake:

   - Click **Advanced Config** menu
   - Enter your key and value information in the **Key** and **Value** fields.
   - To add more keys and values, click the plus sign (+).

    Note that the key-value pairs you enter must be defined in your Snowflake data source. Key-value pairs are case-sensitive.

6. Click **Continue**.   

7. On the **Select tables** interface, expand each table available in the connection, and select the columns you plan to use.

8. When you complete your selection, click **Create connection**.

**Congratulations!** You now have a connection to your Snowflake database.

{: id="redshift"}
## Connect to a Redshift database

![Connect to your data]({{ site.baseurl }}/images/connect-data-redshift.gif "Connect to your data")

Follow these steps to create a new Redshift connection:

1. Click **Create Connection**.

2. On the **Choose connection type** interface, add the following information:

   - **Connection Name**
   - **Connection description** (optional)
   - Select connection type; here, choose **Amazon Redshift**

3. Click **Continue**.

4. On the **Amazon Redshift connection details** interface, enter the information for your Redshift data source.

    See [Connect to Amazon Redshift from ThoughtSpot Cloud]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift.html#connection-properties) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that you must have to set up your connection to Redshift:

   - Click **Advanced Config** menu
   - Enter your key and value information in the **Key** and **Value** fields.
   - To add more keys and values, click the plus sign (+).

    Note that the key-value pairs you enter must be defined in your Redshift data source. Key-value pairs are case-sensitive.

6. Click **Continue**.   

7. On the **Select tables** interface, expand each table available in the connection, and select the columns you plan to use.

8. When you complete your selection, click **Create connection**.

**Congratulations!** You now have a connection to your Redshift database.

## Next steps
Next, [join tables]({{ site.baseurl }}/admin/ts-cloud/tables-join.html).
