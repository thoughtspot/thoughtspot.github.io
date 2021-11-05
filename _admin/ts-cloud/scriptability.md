---
title: [Scriptability]
last_updated: 11/05/2021
summary: "Use Scriptability to export and import worksheets, views, tables, Liveboards, and answers in a human-readable format."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

ThoughtSpot developed its own scriptable approach for exporting, enhancing, and migrating worksheets, views, tables, Liveboards, and answers.

You can model your data and build out sophisticated dashboards in your test environment, before deploying to all users.

The Scriptability feature supports several scenarios that you may encounter:
- **Migrating from a development environment to a production environment** by downloading files from the development cluster and uploading the same files into the production cluster
- **Implementing metadata changes outside ThoughtSpot UI**, such as replacing the underlying tables for an object, or replacing a single column from one table with a column in another table
- **Making bulk changes**, such as mass renaming of objects defined by Worksheets, and managing duplicates
- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

## How to use Scriptability
Depending on how you want to use Scriptability, there are several workflows you can follow:
1. **Edit and update an existing object in the same cluster**: You can either
- [export](#export-object) the object(s), edit the object(s) by modifying its [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/ts-cloud/tml.html) (`TML`) representation, and [import](#update-object) the updated file(s) to modify the existing object *or*
- edit the object(s) using the [in-app `TML` editor](#edit-tml) and publish the updated file(s).
2. **Migrate an existing object from one cluster to a new cluster**: [export](#export-object) the object(s) and [import](#migrate-object) the updated file(s) to the new cluster.
3. **Edit and migrate an existing object from one cluster to a new cluster**: You can either
- [export](#export-object) the object(s), edit the object(s) by modifying its [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/ts-cloud/tml.html) (`TML`) representation, and [import](#migrate-object) the updated file(s) to the new cluster *or*
- edit the object(s) using the [in-app `TML` editor](#edit-tml), publish the updated file(s), [export](#export-object) the object(s), and [import](#migrate-object) the updated file(s) to the new cluster. Note that this workflow changes the object(s) in both clusters.

## Prerequisites

Refer to the following tables for required permissions for importing and exporting Liveboards, answers, worksheets, tables, and views.

**Import**

| Import and create a new object without importing its dependents | Import and create a new object and its dependents | Import and update an existing object without dependents | Import and update an existing object with dependents |
| ---------- | ---- | --- | --- |
| The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. For example, if you import a Liveboard that is built on a worksheet that is built on a table, you must have **view** permission for the worksheet. When importing a new worksheet or view, you must have the **can manage data** permission. | **Can manage data**, if the object or any of its dependents is a worksheet or view. | **Edit** permission on the existing object. The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. When importing a worksheet or view, you must have the **can manage data** permission. | **Edit** permission on the existing object(s). **Can manage data**, if the object or any of its dependents is a worksheet or view. |

**Export**

| Export with dependents | Export without dependents |
| ---- | ---- |
| **View** permission on the object and all dependents. | **View** permission on the object and its first-level dependents. |

{% include note.html content="If you have a permissions issue with a particular object when you export multiple objects, or an object and its dependents, the complete export does not fail. The individual object does not export, and you receive an error message about this failure in the <code>Manifest</code> file in the zip file." %}

{: id="export-object"}
## Export an object
You can export one object at a time, export more than one object as a zip file, or export custom SpotApps. The SpotApp contains a document called the `Manifest` file, which defines the objects you exported, and their underlying data sources. To export custom SpotApps, refer to [SpotApps]({{ site.baseurl }}/admin/ts-cloud/app-templates.html#export-spotapps).

<!--
{: id="export-one"}
### Export one object
To export one object:

1. Navigate to the Liveboard, Answer, View, table, or Worksheet you want to export.

2. Click the three-dot icon, and select **Export TML**.

    ![Export a Liveboard]({{ site.baseurl }}/images/scriptability-cloud-pinboard-export.png "Export a Liveboard") -->

{: id="export-zip-file"}
### How to export objects
To export objects, follow these steps. To export custom SpotApps, refer to [SpotApps]({{ site.baseurl }}/admin/ts-cloud/app-templates.html#export-spotapps).

1. Navigate to the **Answers**, **Liveboards**, or **Data** page from the top navigation bar, depending on the object(s) you want to export.

    ![The top navigation bar]({{ site.baseurl }}/images/nav-bar-no-spotiq.png "The top navigation bar")

2. Hover over the object(s) you want to export, and click the empty checkboxes that appear.

3. Select the **Export TML** button.

    ![Export multiple objects]({{ site.baseurl }}/images/scriptability-cloud-export-multiple.png "Export multiple objects")

4. Choose whether to export only the objects, or the objects and their underlying data sources (worksheets, tables, and views). If you export a table, you do not see this modal, since tables do not have any dependents. When exporting multiple objects, the zip file contains the `Manifest` file, even if you export the objects without their dependents.

    ![Choose what to export]({{ site.baseurl }}/images/scriptability-cloud-select-export.png "Choose what to export")

5. Click **Export**.

    ![Click Export]({{ site.baseurl }}/images/scriptability-cloud-click-export.png "Click Export")

4. Open the downloaded `TML` zip file. The SpotApp zip file contains a document called the `Manifest` file, which defines the objects you exported, their underlying data sources, and any export errors. If an individual export fails, you can find an error message in the `Manifest` file. The zip file still exports, even if an individual object's export fails.

{: id="edit-tml"}
## Edit the TML file
You can edit the `TML` file in one of two ways. You can [export](#export-object) the object(s) and edit the file(s) in any text editor, before you import it. Or, you can use the [in-app `TML` editor](#tml-editor) to edit, validate, and publish the object(s). Refer to [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/ts-cloud/tml.html) for information on syntax in the TML files.

{: id="tml-editor"}
## Edit, validate, and publish objects using the TML editor
You can access the TML editor from the object list page<!--, or from the object itself. To edit and update multiple objects using the TML editor, access it from the object list page-->. It also appears when there is an error when you import TML objects, if you click **Edit**.

To use the TML editor, follow these steps:

1. Navigate to the **Answers**, **Liveboards**, or **Data** page from the top navigation bar, depending on the object you want to update.

2. <!-- Click the name of the object you want to edit, or --> Select one or more objects by clicking on the checkboxes that appear when you hover over an object name.

3. From the object list page, select the **Edit TML** button. <!-- From the object itself, select the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen, and select **Edit TML**. -->

    ![Edit TML - object list page]({{ site.baseurl }}/images/scriptability-edit-tml-object-page.png "Edit TML - object list page")

    <!-- ![Edit TML from object]({{ site.baseurl }}/images/scriptability-edit-tml-object.png "Edit TML from object") -->

4. The TML editor opens. Edit the TML file(s), using the syntax specified in [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/ts-cloud/tml.html).

    The TML editor has the following functions under the top menu:
    - **File**: Validate, Publish, and Exit editor. You can also validate and publish using the **validate** and **publish** buttons at the top right of the editor. You can also exit the editor using the X button at the top right corner. The system warns you if you try to exit with unsaved changes.
    - **Edit**: Undo, Redo, Cut, Copy, Select all, Fold, Fold all, Unfold, Unfold all, and Go to line. The **Fold** option compresses the lines in the file so you only see the first line of a section. **Go to line** opens a dialog box, where you can type in the number of the line you would like to go to. This is useful for long TML files.
    - **Find**: Find and Find and replace. This functionality allows you to easily find words or parameters in the TML file. You can also click on a word or parameter in the TML editor, and the editor highlights all instances of that word.
    - **View**: Show/Hide errors, Show line numbers, and Hide line numbers. **Show/Hide errors** toggles the **Errors** sidebar on and off. The **Errors** sidebar does not appear until after you Validate a file, if there are errors in it.
    - **Help**: Documentation. This links to the [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/ts-cloud/tml.html) documentation.  

5. When you finish editing the TML file(s), select **Validate** in the top right corner. You must validate each file individually. A blue dot appears next to any file that contains changes.

    ![Validate the file]({{ site.baseurl }}/images/scriptability-tml-editor-validate.png "Validate the file")

6. If you constructed the file(s) correctly, a green check mark appears next to the name of the file. If you did not construct the file correctly, a red bar appears near the top of the screen, telling you that ThoughtSpot found errors in one or more files. Click **Show errors** to see the errors listed in the **Errors** sidebar.

    ![Review errors]({{ site.baseurl }}/images/scriptability-tml-editor-errors.png "Review errors")

7. After validating,  select **Publish** in the top right corner, next to **Validate**. You must publish each file individually.

8. The system displays a **Publish status** dialog box. You can select **Open [object]** to open the object you just published in a new tab, or click **Close** to return to the TML editor.

    ![Open the object or return to the TML editor]({{ site.baseurl }}/images/scriptability-tsl-editor-publish-status.png "Open the object or return to the TML editor")

{: id="update-object"}
## Update an object
You can overwrite an existing worksheet, view, table, answer, or Liveboard, by downloading the `TML` file, making any necessary changes, and then re-uploading the `TML` file. To update SpotApps, or collections of objects packaged together as a zip file, refer to [SpotApps]({{ site.baseurl }}/admin/ts-cloud/app-templates.html).

You can also update an object using the [TML editor](#tml-editor).

To update an existing object by downloading the TML file and modifying it, follow these steps. In this case, we are updating a single Worksheet. You can update multiple objects at once by uploading them in .zip file format.

1. [Export the object](#export-object) you want to update, as in steps 1 to 5 of the **Export an Object** section above.

2. Edit the file in a text editor.

1. Navigate to the **Answers**, **Liveboards**, or **Data** page from the top navigation bar, depending on the object you want to update.

4. Select **Import TML**.

   <!--Here, we are uploading the edited *TCPH WS* worksheet.

   ![Start Worksheet update from file]({{ site.baseurl }}/images/scriptability-worksheet-update.png "Start Worksheet update from file")-->

5. In the **Import** interface, click **Select .tml or .zip files to upload**.

   ![Find the Worksheet TML file]({{ site.baseurl }}/images/scriptability-worksheet-update-browse.png "Find the Worksheet TML file")

6. In your file system, find and select the `TML` file you edited.

9. If you uploaded a `.zip` file with multiple objects, you can unselect any files in the `.zip` file you do not want to upload.

8. The **Import** interface recognizes that an object with this GUID already exists in the system, and asks if you would like to create a new object, or update the existing one. Select **Update existing [object]**.

9. If there are errors in any of the objects you are importing, the **Status** column says **Cannot import** for that object. Next to **Cannot import**, you can **View Errors** to see the errors, and a suggested resolution.

10. Resolve any errors by selecting the **Edit** button for the object with errors. This opens the [TML editor](#tml-editor). Within the editor, resolve the errors using the method suggested under **View Errors** in the Import workflow.

11. After you resolve the errors, click **Validate**, and then **Save**. Exit the TML editor.

10. Select the objects you want to import. ThoughtSpot automatically selects objects with no errors, but does not select objects with errors, even after you resolve them. You must select the objects yourself.

10. Click **Import selected**.

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Exit to SpotApps** to return to the main object page.

{: id="migrate-object"}
## Migrate an object
To migrate an answer, Liveboard, view, or worksheet from one cluster to another, follow these steps. To migrate SpotApps, or collections of objects packaged together as a zip file, refer to [SpotApps]({{ site.baseurl }}/admin/ts-cloud/app-templates.html). Note that you cannot create a new table using Scriptability. You can only update existing tables.  

1. [Export the object](#export-object) you want to move, as in steps 1 to 5 of the **Export an Object** section above.

    The object remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the object to.

3. Click **Answers**, **Liveboards**, or **Data** on the top navigation bar, depending on the objects you want to migrate.

4. To upload a Worksheet or View, click the More icon ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} in the upper-right side of the screen. Then, select **Import TML**.

    ![Import Worksheet or View TML]({{ site.baseurl }}/images/scriptability-cloud-worksheet-view-import.png "Import Worksheet or View TML")

5. To upload a Liveboard or answer, click the **Import TML** button in the upper-right side of the screen.   

    ![Import a Liveboard or answer]({{ site.baseurl }}/images/scriptability-cloud-import.png "Import a Liveboard or answer")  

6. In the **Import** interface, click **Select .tml or .zip files to upload**.

6. In your file system, find and select the `TML` file. The file uploads automatically.

8. If you constructed the file correctly, the **Import** interface displays a *Validation successful* message. You can now import the file.

9. If you uploaded a `.zip` file with multiple objects, you can unselect any files in the `.zip` file you do not want to upload.

9. If there are errors in any of the objects you are importing, the **Status** column says **Cannot import** for that object. Next to **Cannot import**, you can **View Errors** to see the errors, and a suggested resolution.

10. Resolve any errors by selecting the **Edit** button for the object with errors. This opens the [TML editor](#tml-editor). Within the editor, resolve the errors using the method suggested under **View Errors** in the Import workflow.

11. After you resolve the errors, click **Validate**, and then **Save**. Exit the TML editor.

10. Select the objects you want to import. ThoughtSpot automatically selects objects with no errors, but does not select objects with errors, even after you resolve them. You must select the objects yourself.

10. Click **Import selected**.

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Exit to SpotApps** to return to the main object page.

## Limitations of working with TML files
There are certain limitations to the changes you can apply by editing a worksheet, answer, table, view, or Liveboard through TML.

{% include content/scriptability-limitations.md %}

## Related information

- [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/ts-cloud/tml.html)   
