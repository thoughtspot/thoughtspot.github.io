---
title: [SpotApps]
last_updated: 3/23/2021
summary: "SpotApps, ThoughtSpot's scriptable applications, allow you to migrate multiple objects to and from clusters."
redirect_from:
- /7.0.0.mar.sw/admin/scriptability/app-templates.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

A SpotApp is a collection of Pinboards, Answers, Worksheets, Views & Tables packaged together as a zip file. SpotApps take advantage of [Scriptability]({{ site.baseurl }}/admin/scriptability/scriptability-overview.html), ThoughtSpot's solution for migrating data models (Worksheets, Tables, and Views) and content (Pinboards and Answers) between different environments, such as development and production. You can optionally edit these ThoughtSpot objects during the migration process.

{: id="export-spotapps"}
## Export SpotApps
You can export your own custom SpotApps from the **SpotApps** page. Alternatively, ThoughtSpot automatically creates SpotApps for you when you export more than one object of the same type at a time, or when you export an object and its dependents.

To export your own custom SpotApps, follow these steps.

1. Navigate to the **SpotApps** page: **Data > SpotApps**.

2. Select **Export SpotApps**.

3. In the **Export** interface, select the Pinboards, Answers, Views, Tables, and Worksheets that you would like to include in your SpotApp. For example, for a Marketing SpotApp, you might choose a Marketing Worksheet, a Campaigns Worksheet, a Pipeline Pinboard, and a few Answers your Chief Marketing Officer created.

4. Click **Export**.

5. The **Choose what to Export** modal appears. Choose whether to export only the selected objects, or the selected objects and their underlying data sources (Worksheets, tables, and Views).

6. Click **Export**.

7. Open the downloaded `TML` zip file. The SpotApp zip file contains a document called the `Manifest` file, which defines the objects you exported, their underlying data sources, and any export errors. If an individual export fails, you can find an error message in the `Manifest` file. The zip file still exports, even if an individual object's export fails.

See [Scriptability]({{ site.baseurl }}/admin/scriptability/scriptability-overview.html) for more information on exporting and importing objects.

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
Once you connect to your data, you can work with your ThoughtSpot contacts to deploy ThoughtSpot's pre-built SpotApps, which provide an easy way for you to start getting value from your data. They leverage your data in Snowflake, Amazon Redshift, Google BigQuery, or Azure Synapse to provide pre-built Pinboards, Answers, Views, Tables, and Worksheets.

ThoughtSpot offers 3 pre-built SpotApps: Salesforce, procurement, and accounts receivable.

For example, if you choose to use the Procurement SpotApp, the **Search** page contains a Worksheet for your users to query on, called "Procurement Analytics Solution."

![Procurement Worksheet Search]({{ site.baseurl }}/images/scriptable-app-procurement-search.png "Procurement Worksheet Search")

Your users may want to understand what Answers and Pinboards are before they start searching, or they may only want to gain insights from pre-built objects. They can view any of the pre-existing objects, such as this Exec Summary Pinboard:

![Exec summary]({{ site.baseurl }}/images/exec-summary-pinboard.png "Exec summary")

When you are ready to move to a production environment, you can migrate these Pinboards, Answers, Views, Tables, and Worksheets to your new environment using [Scriptability]({{ site.baseurl }}/admin/scriptability/scriptability.html), ThoughtSpot's flat-file editing and migration system for ThoughtSpot objects.

To use one of these pre-built SpotApps, work with your ThoughtSpot contacts.

## Limitations
You cannot import manually compressed .zip files. You can only import .zip files that you exported from ThoughtSpot: a custom SpotApp, an object and its associated data sources, or multiple objects of the same type that you exported from the object list page.
