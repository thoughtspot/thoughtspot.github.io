---
title: [Migrate or restore Pinboards]
last_updated: 7/20/2020
summary: "You can export an entire ThoughtSpot Pinboard in a flat-file format. After optional modification, you can migrate it to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Scriptability for Answers and Pinboards is in <span class="label label-beta">Beta</span>. To enable Scriptable Answers and Pinboards, contact ThoughtSpot Support.

In ThoughtSpot, you can download Pinboards to a flat file in `TSL`, [ThoughtSpot's Scripting Language]({{ site.baseurl }}/admin/scriptability/tsl-pinboard.html), modify the file, and subsequently upload this file either to the same cluster, or to a different cluster.

This mechanism supports several scenarios that you may encounter:

- <strong>Migrating from a development environment to a production environment</strong> by downloading the file from the development cluster and uploading the same file to the production cluster
- <strong>Implementing metadata changes outside ThoughtSpot UI</strong>, such as replacing the underlying data source for the entire Pinboard, or replacing a single column from one data source with a column in another data source
- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

{% include content/tml-note.md %}

## Prerequisites

| Export with dependents | Export without dependents | Import with dependents | Import without dependents |
| --- | --- | --- | --- |
| **View** permission for the Pinboard. **View** permission on all underlying tables and Worksheets. For example, if a Pinboard is built on top of a Worksheet that is built on top of a View, you must have **view** permission for all of these objects. | **View** permission for the Pinboard. | If you are not overwriting the existing dependents, you must have the **can manage data** permission. If you are overwriting the existing dependents, you must have the **can manage data** permission, and **edit** permission on the dependents. | You must have **view** permission for the dependents that the Pinboard directly depends on. For example, if a Pinboard is built on top of a Worksheet that is built on top of a View, you must have view permission for the Worksheet, not the View. |

{: id="pinboard-export"}
## Export Pinboard
You can export [one Pinboard at a time](#export-one), or export [more than one Pinboard as a zip file](#export-zip-file). The zip file contains a document called the `Manifest` file, which defines the objects you exported, and their underlying data sources.

{: id="export-one"}
To export one Pinboard:

1. Navigate to the Pinboard you want to export.

2. Click the three-dot icon, and select **Export as .tsl**.

    ![Export a Pinboard]({{ site.baseurl }}/images/scriptability-cloud-pinboard-export.png "Export a Pinboard")

{: id="export-zip-file"}
To export multiple Pinboards at a time, follow these steps:

1. Navigate to the **Pinboards** page from the top navigation bar.

    ![The top navigation bar]({{ site.baseurl }}/images/scriptability-cloud-nav.png "The top navigation bar")

2. Hover over the Pinboards you want to export, and click the empty checkboxes that appear.

3. Select the **Export** button.

    ![Export multiple Pinboards]({{ site.baseurl }}/images/scriptability-pinboard-export.png "Export multiple Pinboards")

4. Choose whether to export only the Pinboards, or the Pinboards and their underlying data sources:

    ![Choose what to export]({{ site.baseurl }}/images/scriptability-choose-export.png "Choose what to export")

5. Click **Export**.

    ![Click Export]({{ site.baseurl }}/images/scriptability-click-export.png "Click Export")

4. Open the downloaded `.tsl` zip file:

    ![Zip file]({{ site.baseurl }}/images/scriptability-pinboard-zip-file.png "Zip file")

## Edit the Pinboard `.tsl` file
You can edit the Pinboard `.tsl` file before you import it. Refer to [Pinboard TSL specification]({{ site.baseurl }}/admin/scriptability/tsl-pinboard.html) for the full syntax of the TSL file.

{: id="pinboard-update"}
## Update a Pinboard
To update an existing Pinboard, you must export the `.tsl` file, make any necessary changes, and then upload it as a new Pinboard. You cannot overwrite an existing Pinboard. Instead, you must create a new Pinboard.

{: id="pinboard-migrate"}
## Migrate a Pinboard
To migrate a Pinboard from one cluster to another, follow these steps:

1. [Export the Pinboard](#pinboard-export) you want to move, as in steps 1 to 5 of the **Export Pinboard** section above.

    The Pinboard remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the Pinboard to.

3. Select **Pinboards** on the top navigation bar.

4. Select the **Import** button in the upper-right side of the screen.   

    ![Import a Pinboard]({{ site.baseurl }}/images/scriptability-cloud-import.png "Import a Pinboard")

6. In the **Import** interface, click **Select .tsl file to upload**.

    ![Select a file]({{ site.baseurl }}/images/scriptability-pinboard-import.png "Select a file")

6. In your file system, find and select the `.tsl` file. The file uploads automatically.

8. If you constructed the file correctly, the **Import** interface displays an *Upload successful* message.

9. To examine the new Pinboard, click **Done**.

   ![Upload successful]({{ site.baseurl }}/images/scriptability-pinboard-successful.png "Upload successful")

## Related Information
- [Pinboard TSL specification]({{ site.baseurl }}/admin/scriptability/tsl-pinboard.html)
