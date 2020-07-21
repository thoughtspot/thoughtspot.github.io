---
title: [Scriptability]
last_updated: 6/29/2020
summary: "Use SpotApps to export Worksheets, Pinboards, and Answers in a human-readable format."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot developed its own scriptable approach for exporting, enhancing, and migrating Worksheets, Pinboards, and Answers.

You can model your data and build out sophisticated dashboards in your test environment, before deploying to all users.

The Scriptability feature supports several scenarios that you may encounter:
- **Migrating from a development environment to a production environment** by downloading files from the development cluster and uploading the same files into the production cluster
- **Implementing metadata changes outside ThoughtSpot UI**, such as replacing the underlying tables for an object, or replacing a single column from one table with a column in another table
- **Making bulk changes**, such as mass renaming of objects defined by Worksheets, and managing duplicates

You can download these objects in the form of a scriptable file in the [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html), or `TSL`.

## Prerequisites

**Pinboards and Answers**

| Export with dependents | Export without dependents | Import with dependents | Import without dependents |
| ---------- | ---- | --- |
| **View** permission for the Pinboard or Answer. **View** permission on all underlying tables and Worksheets. For example, if a Pinboard or Answer is built on top of a Worksheet that is built on top of a View, you must have **view** permission for all of these objects. | **View** permission for the Pinboard or Answer. | If you are not overwriting the existing dependents, you must have the **can manage data** permission. If you are overwriting the existing dependents, you must have the **can manage data** permission, and **edit** permission on the dependents. | You must have **view** permission for the dependents that the Pinboard or Answer visualizations directly depend on. For example, if a Pinboard or Answer is built on top of a Worksheet that is built on top of a View, you must have **view** permission for the Worksheet, not the View. |

**Worksheets**

| Export | Import |
| --- | --- |
| **Can view** permission on the Worksheet and all underlying tables. | When not overwriting an existing Worksheet, you must have the **can manage data** permission. If updating a previously existing Worksheet, you must have the **can manage data** permission and **can edit** permission for the Worksheet. |

{: id="export-object"}
## Export an object
You can export [one object at a time](#export-one), or export [more than one object as a zip file](#export-zip-file). The zip file contains a document called the `Manifest` file, which defines the objects you exported, and their underlying data sources.

{: id="export-one"}
To export one object:

1. Navigate to the Pinboard, Answer, or Worksheet you want to export.

2. Click the three-dot icon, and select **Export as .tsl**.

    ![Export a Pinboard]({{ site.baseurl }}/images/scriptability-cloud-pinboard-export.png "Export a Pinboard")

{: id="export-zip-file"}
To export multiple objects at a time, follow these steps:

1. Navigate to the **Answers**, **Pinboards**, or **Data** page from the top navigation bar, depending on the objects you want to export.

    ![The top navigation bar]({{ site.baseurl }}/images/scriptability-cloud-nav.png "The top navigation bar")

2. Hover over the objects you want to export, and click the empty checkboxes that appear.

3. Select the **Export** button.

    ![Export multiple objects]({{ site.baseurl }}/images/scriptability-cloud-export-multiple.png "Export multiple objects")

4. Choose whether to export only the objects, or the objects and their underlying data sources:

    ![Choose what to export]({{ site.baseurl }}/images/scriptability-cloud-select-export.png "Choose what to export")

5. Click **Export**.

    ![Click Export]({{ site.baseurl }}/images/scriptability-cloud-click-export.png "Click Export")

4. Open the downloaded `.tsl` zip file:

    ![Zip file]({{ site.baseurl }}/images/scriptability-cloud-zip-file.png "Zip file")

## Edit the `.tsl` file
You can edit the `.tsl` file before you import it. Refer to [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html).

## Update an object
You can overwrite an existing Worksheet by downloading the `.tsl` file, making any necessary changes, and then reuploading the `.tsl` file. To update an Answer or Pinboard, you must export the `.tsl` file, make any necessary changes, and then upload it as a new object. You cannot overwrite an existing Answer or Pinboard. Instead, you must create a new object.

To update an existing worksheet, follow these steps:

1. Click **Data** on the top navigation bar.

2. Click the name of the worksheet you want to edit.

3. Click the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen.

4. From the menu, select **Update Worksheet from file**.

   Here, we are uploading the edited *Sales* worksheet.

   ![Start Worksheet update from file]({{ site.baseurl }}/images/worksheet-update-from-file.png "Start Worksheet update from file")

5. In the upload interface, click **Browse your files**.

   ![Find the Worksheet TSL file]({{ site.baseurl }}/images/worksheet-update-browse.png "Find the Worksheet TSL file")

6. In your file system, find and select the `.tsl` file.

7. In the **Update worksheet** interface, click **Upload**.

   ![Upload the Worksheet]({{ site.baseurl }}/images/worksheet-update-upload.png "Upload the Worksheet")

8. If you constructed the Worksheet file correctly, the **Upload Worksheet** interface displays an *Upload successful* message.

9. To examine the updated Worksheet, click **Go to Worksheet**.

   ![Go to updated Worksheet]({{ site.baseurl }}/images/worksheet-update-success.png "Go to updated Worksheet")

## Migrate an object
To migrate an Answer, Pinboard, or Worksheet from one cluster to another, follow these steps:

1. [Export the object](#export-object) you want to move, as in steps 1 to 5 of the **Export an Object** section above.

    The object remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the object to.

3. Click **Answers**, **Pinboards**, or **Data** on the top navigation bar, depending on the objects you want to export.

4. To upload a Worksheet, click the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen. Then, select **Create worksheet from file**.

    ![Create worksheet from file]({{ site.baseurl }}/images/worksheet-create-from-file.png "Create worksheet from file")

5. To upload a Pinboard or Answer, click the **Import** button in the upper-right side of the screen.   

    ![Import a Pinboard or Answer]({{ site.baseurl }}/images/scriptability-cloud-import.png "Import a Pinboard or Answer")

6. In the **Import** interface, click **Select .tsl file to upload**.

    ![Select a file]({{ site.baseurl }}/images/scriptability-cloud-import-page.png "Select a file")

6. In your file system, find and select the `.tsl` file. The file uploads automatically.

8. If you constructed the file correctly, the **Import** interface displays an *Upload successful* message.

9. To examine the new object, click **Done**.

   ![Upload successful]({{ site.baseurl }}/images/scriptability-cloud-successful-import.png "Upload successful")

## Related information

- [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html)   
