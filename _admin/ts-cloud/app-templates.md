---
title: [SpotApps]
last_updated: 11/05/2021
summary: "SpotApps, ThoughtSpot's scriptable applications, are out-of-the-box solution templates built for specific use cases and data sources."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

The new Data tab and the SpotApps feature are both in <span class="label label-beta">Beta</span> in the November release. Starting in the November release, a **SpotApp** refers only to out-of-the-box solution templates built for specific use cases and data sources, **not** to any collection of TML files. SpotApps are composed of configurable ThoughtSpot Blocks and powered by [TML]({{ site.baseurl }}/admin/ts-cloud/tml.html) (ThoughtSpot Modeling Language). If the new Data tab and the SpotApps feature are not on in your environment, your user interface and experience may be different from the experience described in this article.

SpotApps use [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html), ThoughtSpot's solution for migrating data models (worksheets, tables, and views) and content (Liveboards and answers) between different environments, such as development and production. You can optionally edit these ThoughtSpot objects during the migration process.

## Available SpotApps and Blocks
The November release introduces the ServiceNow SpotApp and Analytics Blocks. Analytics Blocks include pre-built Worksheet, Answer, and Liveboard Blocks.

The ServiceNow SpotApp mimics the ServiceNow data model. After you connect to your ServiceNow data in your cloud data warehouse, ThoughtSpot maps that data to SpotApp columns, and creates pre-built but still customizable worksheets, answers, and Liveboards, based on your ServiceNow data.

{: id="prerequisites"}
## Prerequisites to deploy the ServiceNow SpotApp
To deploy any SpotApp, you must:

1. Enable the new Data tab and SpotApps feature. To enable these features, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

2. Obtain credentials to connect to your cloud data warehouse. Refer to the connection reference for your cloud data warehouse for information about required credentials:

    - [Amazon Redshift]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-connection-reference.html)
    - [Azure Synapse]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-synapse-connection-reference.html)
    - [Databricks]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-databricks-connection-reference.html)
    - [Google BigQuery]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-connection-reference.html)
    - [Oracle Autonomous Data Warehouse]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-connection-reference.html)
    - [SAP HANA]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-hana-connection-reference.html)
    - [Snowflake]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-connection-reference.html)
    - [Starburst]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-starburst-connection-reference.html)
    - [Teradata]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-teradata-connection-reference.html)

## Deploy the ServiceNow SpotApp
After you complete the [prerequisites](#prerequisites) to connect to your cloud data warehouse, you are ready to deploy the ServiceNow SpotApp and begin leveraging its pre-built content.

To deploy the SpotApp, follow these steps:

1. Navigate to **Data > SpotApps**.

2. Select the **ServiceNow ITIL Management Board**.

3. Select **Configure** to set up your Analytics Block.

4. Set up a connection to your data warehouse. For more information, refer to [Connections]({{ site.baseurl }}/admin/ts-cloud/embrace.html) and the connection credentials that you collected in the [prerequisites](#prerequisites).

    Note that you do not have to select any tables or columns while setting up the connection. You can select them later by editing the connection.

5. After you create the connection, ThoughtSpot auto-maps tables from your cloud data warehouse to table names in the SpotApp. If ThoughtSpot cannot map some of the SpotApp tables, a warning symbol appears next to the unmapped user table(s). To choose a table in your cloud data warehouse that matches the name of the table in the SpotApp, use the dropdown in the **User table** column.

    For example, you might call your **problem** table something else, like **issues**.

    Tables with asterisks next to their names are required. Other tables are optional.

    Select **Next**.

6. Next, ThoughtSpot auto-maps columns from your cloud data warehouse to column names in the SpotApp. If ThoughtSpot cannot map some of the SpotApp columns, a warning symbol appears next to the unmapped user column(s). To choose a column in your cloud data warehouse that matches the name of the column in the SpotApp, use the dropdown in the **User column** column.

    Columns with asterisks next to their names are required. Other columns are optional.

    Select **Finish**.

7. ThoughtSpot generates the objects in your SpotApp. This may take a few moments. When the generation is complete, a message appears at the bottom of your screen: `Analytics block for the SpotApp installed successfully`.

8. After you configure the Analytics Block, ThoughtSpot returns you to the main **Analytics Block** page, where you can see a list of the objects ThoughtSpot created for your SpotApp. You can also see them in the list on the **Data** home page, and on the **Liveboards** page.
