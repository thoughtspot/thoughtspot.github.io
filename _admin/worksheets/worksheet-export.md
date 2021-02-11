---
title: [Migrate or restore Worksheets]
last_updated: 7/7/2020
summary: "You can export an entire ThoughtSpot worksheet in a flat-file format. After optional modification, you can migrate it to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

In ThoughtSpot, you can download Worksheets to a flat file in `TSL`, [ThoughtSpot's Scripting Language]({{ site.baseurl }}/admin/worksheets/yaml-worksheet.html), modify the file, and subsequently upload this file either to the same cluster, or to a different cluster.

Starting in release 6.2, you can use this feature to export and import Worksheets with filters.

This mechanism supports several scenarios that you may encounter:

- <strong>Migrating from a development environment to a production environment</strong> by downloading the file from the development cluster and uploading the same file into the production cluster
- <strong>Implementing metadata changes outside ThoughtSpot UI</strong>, such as replacing the underlying tables for the entire table, or replacing a single column from one table with a column in another table
- <strong>Making bulk changes</strong>, such as mass renaming of objects defined by the worksheets, and managing duplicates
- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

{% include content/tml-note.md %}

## Prerequisites

| Export | Import |
| --- | --- |
| **Can view** permission on the Worksheet and all underlying tables. | When not overwriting an existing Worksheet, you must have the **can manage data** permission. If updating a previously existing Worksheet, you must have the **can manage data** permission and **can edit** permission for the Worksheet. |

{: id="worksheet-export"}
## Export Worksheet

To export a worksheet, follow these steps:

1. Click **Data** on the top navigation bar.

2. Click the name of the worksheet you want to edit.

3. Click the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen.

4. From the menu, select **Export Worksheet**.

   Here, we are downloading the *Sales* worksheet.

   ![Export Worksheet]({{ site.baseurl }}/images/worksheet-export.png "Export Worksheet")

5. The worksheet downloads into your default directory.

   You can access the downloaded `*.tsl` file, named for your worksheet either through the file system manager, or by clicking on the name of the downloaded file in the left bottom corner of your Internet browser.

    ![Open downloaded worksheet file]({{ site.baseurl }}/images/worksheet-export-complete.png "Open downloaded worksheet file")

{: id="worksheet-change"}
## Working with the Worksheet TSL file

You can change the TSL file that represents the Worksheet by editing its content. See [TSL Worksheet specification]({{ site.baseurl }}/admin/worksheets/yaml-worksheet.html) for the full syntax of the TSL file.

{: id="worksheet-update"}
## Update a Worksheet

To update an existing worksheet, follow these steps:

1. Click **Data** on the top navigation bar.

2. Click the name of the worksheet you want to edit.

3. Click the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen.

4. From the menu, select **Update Worksheet from file**.

   Here, we are uploading the edited *Sales* worksheet.

   ![Start Worksheet update from file]({{ site.baseurl }}/images/worksheet-update-from-file.png "Start Worksheet update from file")

5. In the upload interface, click **Browse your files**.

   ![Find the Worksheet TSL file]({{ site.baseurl }}/images/worksheet-update-browse.png "Find the Worksheet TSL file")

6. In your file system, find and select the TSL file.

7. In the **Update worksheet** interface, click **Upload**.

   ![Upload the Worksheet]({{ site.baseurl }}/images/worksheet-update-upload.png "Upload the Worksheet")

8. If you constructed the Worksheet file correctly, the **Upload Worksheet** interface displays an *Upload successful* message.

9. To examine the updated Worksheet, click **Go to Worksheet**.

   ![Go to updated Worksheet]({{ site.baseurl }}/images/worksheet-update-success.png "Go to updated Worksheet")

{: id="worksheet-migrate"}
## Migrate a Worksheet
To migrate a Worksheet from one cluster to another, follow these steps:

1. [Export the Worksheet](#worksheet-export) you want to move, as in steps 1 to 5 of the **Export Worksheet** section above.

    The Worksheet remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the worksheet to.

3. Click **Data** on the top navigation bar.

4. Click the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen.

5. Select **Create worksheet from file**.

    ![Create worksheet from file]({{ site.baseurl }}/images/worksheet-create-from-file.png "Create worksheet from file")

6. In the **Create Worksheet** interface, click **Browse your files.**

    ![Browse your files]({{ site.baseurl }}/images/worksheet-create-browse-files.png "Browse your files")

6. In your file system, find and select the TSL file.

7. Click **Upload**.

   ![Upload the Worksheet]({{ site.baseurl }}/images/worksheet-create-upload.png "Upload the Worksheet")

8. If you constructed the Worksheet file correctly, the **Create Worksheet** interface displays an *Upload successful* message.

9. To examine the new Worksheet, click **Go to Worksheet**.

   ![Go to new Worksheet]({{ site.baseurl }}/images/worksheet-create-go-to-worksheet.png "Go to new Worksheet")

## Related Information
- [Worksheet TSL specification]({{ site.baseurl }}/admin/worksheets/yaml-worksheet.html)
