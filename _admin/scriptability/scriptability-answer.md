---
title: [Migrate or restore Answers]
last_updated: 7/20/2020
summary: "You can export an entire ThoughtSpot Answer in a flat-file format. After optional modification, you can migrate it to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Scriptability for Answers and Pinboards is in <span class="label label-beta">Beta</span>. To enable Scriptable Answers and Pinboards, contact ThoughtSpot Support.

In ThoughtSpot, you can download Answers to a flat file in `TSL`, [ThoughtSpot's Scripting Language]({{ site.baseurl }}/admin/scriptability/tsl-answer.html), modify the file, and subsequently upload this file either to the same cluster, or to a different cluster.

This mechanism supports several scenarios that you may encounter:

- <strong>Migrating from a development environment to a production environment</strong> by downloading the file from the development cluster and uploading the same file to the production cluster
- <strong>Implementing metadata changes outside ThoughtSpot UI</strong>, such as replacing the underlying data source for the entire Answer, or replacing a single column from one data source with a column in another data source
- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

{% include content/tml-note.md %}

## Prerequisites

| Export with dependents | Export without dependents | Import with dependents | Import without dependents |
| --- | --- | --- | --- |
| **View** permission for the Answer. **View** permission on all underlying tables and Worksheets. For example, if an Answer is built on top of a Worksheet that is built on top of a View, you must have **view** permission for all of these objects. | **View** permission for the Answer. | If you are not overwriting the existing dependents, you must have the **can manage data** permission. If you are overwriting the existing dependents, you must have the **can manage data** permission, and **edit** permission on the dependents. | You must have **view** permission for the dependents that the Answer directly depends on. For example, if an Answer is built on top of a Worksheet that is built on top of a View, you must have view permission for the Worksheet, not the View. |

{: id="answer-export"}
## Export Answer
You can export [one Answer at a time](#export-one), or export [more than one Answer as a zip file](#export-zip-file). The zip file contains a document called the `Manifest` file, which defines the objects you exported, and their underlying data sources.

{: id="export-one"}
To export one Answer:

1. Navigate to the Answer you want to export.

2. Click the three-dot icon, and select **Export as .tsl**.

    ![Export an Answer]({{ site.baseurl }}/images/scriptability-answer-export.png "Export an Answer")

{: id="export-zip-file"}
To export multiple Answers at a time, follow these steps:

1. Navigate to the **Answers** page from the top navigation bar.

    ![The top navigation bar]({{ site.baseurl }}/images/scriptability-cloud-nav.png "The top navigation bar")

2. Hover over the Answers you want to export, and click the empty checkboxes that appear.

3. Select the **Export** button.

    ![Export multiple objects]({{ site.baseurl }}/images/scriptability-cloud-export-multiple.png "Export multiple objects")

4. Choose whether to export only the Answers, or the Answers and their underlying data sources:

    ![Choose what to export]({{ site.baseurl }}/images/scriptability-cloud-select-export.png "Choose what to export")

5. Click **Export**.

    ![Click Export]({{ site.baseurl }}/images/scriptability-cloud-click-export.png "Click Export")

4. Open the downloaded `.tsl` zip file:

    ![Zip file]({{ site.baseurl }}/images/scriptability-cloud-zip-file.png "Zip file")

## Edit the Answer `.tsl` file
You can edit the Answer `.tsl` file before you import it. Refer to [Answer TSL specification]({{ site.baseurl }}/admin/scriptability/tsl-answer.html) for the full syntax of the TSL file.

{: id="answer-update"}
## Update an Answer
To update an existing Answer, you must export the `.tsl` file, make any necessary changes, and then upload it as a new object. You cannot overwrite an existing Answer. Instead, you must create a new object.

{: id="answer-migrate"}
## Migrate an Answer
To migrate an Answer from one cluster to another, follow these steps:

1. [Export the Answer](#answer-export) you want to move, as in steps 1 to 5 of the **Export Answer** section above.

    The Answer remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the Answer to.

3. Select **Answers** on the top navigation bar.

4. Select the **Import** button in the upper-right side of the screen.   

    ![Import an Answer]({{ site.baseurl }}/images/scriptability-answer-import.png "Import an Answer")

6. In the **Import** interface, click **Select .tsl file to upload**.

    ![Select a file]({{ site.baseurl }}/images/scriptability-cloud-import-page.png "Select a file")

6. In your file system, find and select the `.tsl` file. The file uploads automatically.

8. If you constructed the file correctly, the **Import** interface displays an *Upload successful* message.

9. To examine the new Answer, click **Done**.

   ![Upload successful]({{ site.baseurl }}/images/scriptability-cloud-successful-import.png "Upload successful")

## Related Information
- [Answer TSL specification]({{ site.baseurl }}/admin/scriptability/tsl-answer.html)
