---
title: [SpotApps]
last_updated: 11/04/2021
summary: "SpotApps, ThoughtSpot's scriptable applications, allow you to migrate multiple objects to and from clusters."
redirect_from:
- /admin/scriptability/app-templates.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

A SpotApp is a collection of Liveboards, answers, worksheets, views & tables packaged together as a zip file. SpotApps take advantage of [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html), ThoughtSpot's solution for migrating data models (worksheets, tables, and views) and content (Liveboards and answers) between different environments, such as development and production. You can optionally edit these ThoughtSpot objects during the migration process.

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
