---
title: [Migrate multiple TML files]
last_updated: 11/05/2021
summary: "You can migrate multiple objects to and from clusters using TML, ThoughtSpot's modeling language."
redirect_from:
- /admin/scriptability/app-templates.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

You can migrate collections of Liveboards, answers, worksheets, views & tables packaged together as a zip file. You can do this with [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html), ThoughtSpot's solution for migrating data models (worksheets, tables, and views) and content (Liveboards and answers) between different environments, such as development and production. You can optionally edit these ThoughtSpot objects during the migration process.

{: id="export-multiple"}
## Export related TML files
You can export your own custom zip file of related TML files from the **SpotApps** page. Additionally, when you export more than one object of the same type at a time, or when you export an object and its dependents, ThoughtSpot exports it as a zip file.

To export your own custom TML file collections, follow these steps.

1. Navigate to the **SpotApps** page: **Data > SpotApps**.

2. Select **Export SpotApps**.

3. In the **Export** interface, select the Liveboards, answers, views, tables, and worksheets that you would like to include in your zip file of related  TML files. For example, for a Marketing zip file, you might choose a Marketing worksheet, a Campaigns worksheet, a Pipeline Liveboard, and a few answers your Chief Marketing Officer created.

4. Click **Export**.

5. The **Choose what to Export** modal appears. Choose whether to export only the selected objects, or the selected objects and their underlying data sources (worksheets, tables, and views).

6. Click **Export**.

7. Open the downloaded `TML` zip file. The zip file contains a document called the `Manifest` file, which defines the objects you exported, their underlying data sources, and any export errors. If an individual export fails, you can find an error message in the `Manifest` file. The zip file still exports, even if an individual object's export fails.

See [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html) for more information on exporting and importing objects.

## Import related TML files
You can import your own custom zip file of related TML files from the **SpotApps** page.

1. From the **SpotApps** page under the **Data** tab, click **Import SpotApps**.

2. In the **Import** interface, click **Select .tml or .zip files to upload**.

6. In your file system, find and select the .zip file.

8. If you constructed the file correctly, the **Import** interface displays a *Ready for import* message for each TML file, and shows you which objects are validated. You can view and correct errors for files with a *Cannot import* message. When all your files are ready for import, you can now determine how to import the objects. The <code>GUID</code> parameter in an object's TML file allows ThoughtSpot to recognize pre-existing GUIDs, and determine if you are updating an existing object, or creating a new one. If you are updating an existing object, the system asks if you would like to create a new object, or update the existing one.

9. You can unselect any files in the `.zip` file you do not want to upload.

10. Click **Import &lt;number of files&gt; selected**.

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Exit** to return to the main object page.

## Limitations
You cannot import manually compressed .zip files. You can only import .zip files that you exported from ThoughtSpot: a custom set of TML files, an object and its associated data sources, or multiple objects of the same type that you exported from the object list page.
