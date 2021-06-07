---
title: [Connect to data]
last_updated: 06/07/2020
summary: "ThoughtSpot Cloud connects to your data through Embrace."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Connect to your data through Embrace

If your company stores source data externally in data warehouses, you can connect to that data through ThoughtSpot Embrace, and then directly query it when using ThoughtSpot’s analysis and visualization features.

On ThoughtSpot Cloud, you can connect to the following external databases:
- [Snowflake]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake.html)
- [Amazon Redshift]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift.html)
- [Google BigQuery]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq.html)
- [Azure Synapse]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-synapse.html)
- [Oracle ADW]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw.html)
- [Starburst]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-starburst.html)
- [Databricks]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-databricks.html)


## How to connect to data

- [Create a connection](#set-up-connection) to the external database.
- Choose from each table the columns that you want to explore in your live query.
- Primary key and foreign key relationships are imported along with the primary and foreign key tables.
- If there are any joins in the tables of your connection, Embrace imports these joins.
- After your connection is complete, it becomes a **linked** data source in ThoughtSpot, so you can query the external database directly.
- It’s also easy to apply transformations, and filter the data.

## Key benefits of connecting to live data
- Set up and deploy ThoughtSpot faster by connecting directly to the external database.
- Eliminate the need to move data into ThoughtSpot for analysis.
- Centralize data management and governance in the external database.
- Save significant time and money by avoiding ETL pipelines.
- Connect to multiple external databases.
- Custom calendar available with Snowflake, Amazon Redshift, Google BigQuery, and Azure Synapse

## Limitations of data connections

{% include important.html content="Embrace does not support joins across connections." %}

{: id="set-up-connection"}
## Set up your connection

-   **[Add a Snowflake connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Snowflake database.
-   **[Add a Redshift connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Amazon RedShift database.
-   **[Add a Google BigQuery connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Google BigQuery database.
-   **[Add an Azure Synapse connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-synapse-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Azure Synapse database.
-   **[Add an Oracle Autonomous Data Warehouse connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Oracle Autonomous Data Warehouse database.
- **[Add a Databricks connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-databricks-add-connection.html)**
Create the connection between ThoughtSpot and tables in an external Databricks database.

### Next steps
There are two options to continue setup:
- If you completed onboarding, proceed to [join tables]({{ site.baseurl }}/admin/ts-cloud/tables-join.html).
- To continue onboarding, [create a worksheet]({{ site.baseurl }}/admin/ts-cloud/worksheet-create-setup.html).

<!--
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
-->
