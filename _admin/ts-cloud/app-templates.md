---
title: [SpotApps]
last_updated: 11/05/2021
summary: "SpotApps, ThoughtSpot's scriptable applications, are out-of-the-box solution templates built for specific use cases and data sources."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

The new Data tab and the SpotApps feature are both in <span class="label label-beta">Beta</span> in the November release. Starting in the November release, a **SpotApp** refers only to an out-of-the-box solution templates built for specific use cases and data sources, with pre-built worksheets, answers, and Liveboards, **not** to any collection of TML files. If the new Data tab and the SpotApps feature are not on in your environment, your user interface and experience may be different from the experience described in this article.

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

{: id="export-spotapps"}
## Export SpotApps
You can export your own custom SpotApps from the **SpotApps** page. Alternatively, ThoughtSpot automatically creates SpotApps for you when you export more than one object of the same type at a time, or when you export an object and its dependents.

To export your own custom SpotApps, follow these steps.

1. Navigate to the **SpotApps** page: **Data > SpotApps**.

2. Select **Export SpotApps**.

3. In the **Export** interface, select the Liveboards, answers, views, tables, and worksheets that you would like to include in your SpotApp. For example, for a Marketing SpotApp, you might choose a Marketing worksheet, a Campaigns worksheet, a Pipeline Liveboard, and a few answers your Chief Marketing Officer created.

4. Click **Export**.

5. The **Choose what to Export** modal appears. Choose whether to export only the selected objects, or the selected objects and their underlying data sources (worksheets, tables, and views).

6. Click **Export**.

7. Open the downloaded `TML` zip file. The SpotApp zip file contains a document called the `Manifest` file, which defines the objects you exported, their underlying data sources, and any export errors. If an individual export fails, you can find an error message in the `Manifest` file. The zip file still exports, even if an individual object's export fails.

See [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html) for more information on exporting and importing objects.

![SpotApp export gif]({{ site.baseurl }}/images/spotapp-export.gif "SpotApp export gif")

## Import SpotApps
You can import SpotApps from the SpotApps page, under **Data > SpotApps**.

1. From the **SpotApps** page under the **Data** tab, click **Import SpotApps**.

2. In the **Import** interface, click **Select .tml or .zip files to upload**.

6. In your file system, find and select the .zip file for the SpotApp.

8. If you constructed the file correctly, the **Import** interface displays a *Validation successful* message, and shows you which objects are validated. You can now import the objects. The <code>GUID</code> parameter in an object's TML file allows ThoughtSpot to recognize pre-existing GUIDs, and determine if you are updating an existing object, or creating a new one. If you are updating an existing object, the system asks if you would like to create a new object, or update the existing one.

9. You can unselect any files in the `.zip` file you do not want to upload.

10. Click **Import selected files**.

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Done** to return to the main object page.

    ![Go to object]({{ site.baseurl }}/images/scriptability-migrate-answers-created.png "Go to object")

{: id="pre-built-spotapps"}
## Pre-built SpotApps
Once you connect to your data, you can work with your ThoughtSpot contacts to deploy ThoughtSpot's pre-built SpotApps, which provide an easy way for you to start getting value from your data. They leverage your data in your cloud data warehouse to provide pre-built Liveboards, answers, views, tables, and worksheets.

ThoughtSpot offers 1 pre-built SpotApp, for **ServiceNow**. This SpotApp contains a worksheet with your ServiceNow data for your users to query on, as well as several pre-built answers and Liveboards based on your data.

When you are ready to move to a production environment, you can migrate these ThoughtSpot objects to your new environment using [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html), ThoughtSpot's flat-file editing and migration system for ThoughtSpot objects.

To use the ServiceNow pre-built SpotApp, work with your ThoughtSpot contacts.

## Limitations
You cannot import manually compressed .zip files. You can only import .zip files that you exported from ThoughtSpot: a custom SpotApp, an object and its associated data sources, or multiple objects of the same type that you exported from the object list page.
