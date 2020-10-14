---
title: [Migrate or restore Views]
last_updated: 10/14/2020
summary: "You can export an entire ThoughtSpot View in a flat-file format. After optional modification, you can migrate it to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
In ThoughtSpot, you can download Views to a flat file in `TSL`, [ThoughtSpot's Scripting Language]({{ site.baseurl }}/admin/worksheets/tsl-view.html), modify the file, and subsequently upload this file either to the same cluster, or to a different cluster.

This mechanism supports several scenarios that you may encounter:

- <strong>Migrating from a development environment to a production environment</strong> by downloading the file from the development cluster and uploading the same file to the production cluster
- <strong>Implementing metadata changes outside ThoughtSpot UI</strong>, such as replacing the underlying data source for the entire Pinboard, or replacing a single column from one data source with a column in another data source
- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.


## Prerequisites

**Import**

| Import and create a new View without importing its dependents | Import and create a new View and its dependents | Import and update an existing View without dependents | Import and update an existing View with dependents |
| ---------- | ---- | --- | --- |
| The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. For example, if you import a View that is built on a Worksheet that is built on a table, you must have **view** permission for the Worksheet. You must have the **can manage data** permission. | **Can manage data** | **Edit** permission on the existing View. The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. You must have the **can manage data** permission. | **Edit** permission on the existing View(s). **Can manage data**. |

**Export**

| Export with dependents | Export without dependents |
| ---- | ---- |
| **View** permission on the View and all dependents. | **View** permission on the View and its first-level dependents. |

{% include note.html content="If you have a permissions issue with a particular object when you export multiple objects, or an object and its dependents, the complete export does not fail. The individual object does not export, and you receive an error message about this failure in the <code>Manifest</code> file in the zip file." %}

{: id="view-export"}
## Export View
You can export [one View at a time](#export-one), or export [more than one object as a zip file](#export-zip-file), or SpotApp. The SpotApp contains a document called the `Manifest` file, which defines the objects you exported, and their underlying data sources.

{: id="export-one"}
To export one View:

1. Navigate to the View you want to export.

2. Click the three-dot icon, and select **Export as .tsl**.

    ![Export a View]({{ site.baseurl }}/images/scriptability-cloud-pinboard-export.png "Export a View")

{: id="export-zip-file"}
To export multiple Views at a time, follow these steps:

1. Navigate to the **Data** page from the top navigation bar.

    ![The top navigation bar]({{ site.baseurl }}/images/scriptability-cloud-nav.png "The top navigation bar")

2. Hover over the Views you want to export, and click the empty checkboxes that appear.

3. Select the **Export** button.

    ![Export multiple Views]({{ site.baseurl }}/images/scriptability-pinboard-export.png "Export multiple Views")

4. Choose whether to export only the Views, or the Views and their underlying data sources(Worksheets, Tables, and Views):

    ![Choose what to export]({{ site.baseurl }}/images/scriptability-choose-export.png "Choose what to export")

5. Click **Export**.

    ![Click Export]({{ site.baseurl }}/images/scriptability-click-export.png "Click Export")

4. Open the downloaded `TSL` zip file. The SpotApp zip file contains a document called the `Manifest` file, which defines the objects you exported, their underlying data sources, and any export errors. If an individual export fails, you can find an error message in the `Manifest` file. The zip file still exports, even if an individual object's export fails.

    ![Zip file]({{ site.baseurl }}/images/scriptability-pinboard-zip-file.png "Zip file")

{: id="edit-tsl"}
## Edit the View TSL file
You can edit the `TSL` file in one of two ways. You can [export](#export-object) the View(s) and edit the file(s) in any text editor, before you import it. Or, you can use the [in-app `TSL` editor](#tsl-editor) to edit, validate, and publish the View(s). Refer to [View TSL specification]({{ site.baseurl }}/admin/scriptability/tsl-view.html) for information on syntax in the TSL files.

{: id="tsl-editor"}
## Edit, validate, and publish Views using the TSL editor
You can access the TSL editor from the View list page, or from the View itself. To edit and update multiple objects using the TSL editor, access it from the object list page.

To use the TSL editor, follow these steps:

1. Navigate to the **Data** page from the top navigation bar.

2. Click the name of the View you want to edit, or select multiple Views by clicking on the checkboxes that appear when you hover over a View name.

3. From the View list page, select the **Edit TSL** button. From the View itself, select the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen, and select **Edit TSL**.

    ![Edit TSL - View list page]({{ site.baseurl }}/images/scriptability-edit-tsl-object-page.png "Edit TSL - View list page")

    ![Edit TSL from View]({{ site.baseurl }}/images/scriptability-edit-tsl-object.png "Edit TSL from View")

4. The TSL editor opens. Edit the TSL file(s), using the syntax specified in [View TSL specification]({{ site.baseurl }}/admin/scriptability/tsl-view.html).

    The TSL editor has the following functions under the top menu:
    - **File**: Validate, Publish, and Exit editor. You can also validate and publish using the **validate** and **publish** buttons at the top right of the editor. You can also exit the editor using the X button at the top right corner. The system warns you if you try to exit with unsaved changes.
    - **Edit**: Undo, Redo, Cut, Copy, Select all, Fold, Fold all, Unfold, Unfold all, and Go to line. The **Fold** option compresses the lines in the file so you only see the first line of a section. **Go to line** opens a dialog box, where you can type in the number of the line you would like to go to. This is useful for long TSL files.
    - **Find**: Find and Find and replace. This functionality allows you to easily find words or parameters in the TSL file. You can also click on a word or parameter in the TSL editor, and the editor highlights all instances of that word.
    - **View**: Show/Hide errors, Show line numbers, and Hide line numbers. **Show/Hide errors** toggles the **Errors** sidebar on and off. The **Errors** sidebar does not appear until after you Validate a file, if there are errors in it.
    - **Help**: Documentation. This links to the [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html) documentation.  

5. When you finish editing the TSL file(s), select **Validate** in the top right corner. You must validate each file individually. A blue dot appears next to any file that contains changes.

    ![Validate the file]({{ site.baseurl }}/images/scriptability-tsl-editor-validate.png "Validate the file")

6. If you constructed the file(s) correctly, a green check mark appears next to the name of the file. If you did not construct the file(s) correctly, a red bar appears near the top of the screen, telling you that ThoughtSpot found errors in one or more files. Click **Show errors** to see the errors listed in the **Errors** sidebar.

    ![Review errors]({{ site.baseurl }}/images/scriptability-tsl-editor-errors.png "Review errors")

7. After validating,  select **Publish** in the top right corner, next to **Validate**. You must publish each file individually.

8. The system displays a **Publish status** dialog box. You can select **Open View** to open the View you just published in a new tab, or click **Close** to return to the TSL editor.

    ![Open the View or return to the TSL editor]({{ site.baseurl }}/images/scriptability-tsl-editor-publish-status.png "Open the Viewor return to the TSL editor")

{: id="view-update"}
## Update a View
You can overwrite an existing View by downloading the `TSL` file, making any necessary changes, and then re-uploading the `TSL` file.

You can also update an object using the [TSL editor](#tsl-editor).

To update an existing View by downloading the TSL file and modifying it, follow these steps. In this case, we are updating a single View. You can update multiple objects at once by uploading them in .zip file format.

1. [Export the View](#view-export) you want to update, as in steps 1 to 5 of the **Export View** section above.

2. Edit the file in a text editor.

1. Navigate to the **Data** page from the top navigation bar.

2. Click the name of the object you want to edit.

3. Click the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen.

4. Select **Update from TSL**.

   Here, we are uploading the edited *TCPH WS* View.

   ![Start Worksheet update from file]({{ site.baseurl }}/images/scriptability-worksheet-update.png "Start Worksheet update from file")

5. In the **Import** interface, click **Select .tsl or .zip files to upload**.

   ![Find the Worksheet TSL file]({{ site.baseurl }}/images/scriptability-worksheet-update-browse.png "Find the Worksheet TSL file")

6. In your file system, find and select the `TSL` file you edited.

8. If you constructed the file correctly, the **Import** interface displays a *Validation successful* message. You can now import the file.

9. If you uploaded a `.zip` file with multiple Views, you can unselect any files in the `.zip` file you do not want to upload.

10. Click **Import selected files**.

    ![Import selected file]({{ site.baseurl }}/images/scriptability-worksheet-update-success.png "Import selected files")

11. The **Import Status** screen displays the status of the Views you imported. You can open the View(s) that you imported, or click **Done** to return to the main object page.

    ![Go to object]({{ site.baseurl }}/images/scriptability-import-status.png "Go to object")

{: id="view-migrate"}
## Migrate a View
To migrate a View from one cluster to another, follow these steps.

1. [Export the View](#view-export) you want to move, as in steps 1 to 5 of the **Export View** section above.

    The View remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the object to.

3. Click **Data** on the top navigation bar.

4. Click the More icon ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} in the upper-right side of the screen. Then, select **Import TSL**.

    ![Import View TSL]({{ site.baseurl }}/images/scriptability-cloud-worksheet-view-import.png "Import View TSL")

6. In the **Import** interface, click **Select .tsl or .zip files to upload**.

    ![Select a file]({{ site.baseurl }}/images/scriptability-cloud-import-page.png "Select a file")

6. In your file system, find and select the `TSL` file. The file uploads automatically.

8. If you constructed the file correctly, the **Import** interface displays a *Validation successful* message. You can now import the file.

9. If you uploaded a `.zip` file with multiple objects, you can unselect any files in the `.zip` file you do not want to upload. Here, we only want to import **Brand Revenue** and **Average Revenue by Part**, not **Basic Answer 1**.

10. Click **Import selected files**.

    ![Import selected file]({{ site.baseurl }}/images/scriptability-migrate-import-selected.png "Import selected files")

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Done** to return to the main object page.

    ![Go to object]({{ site.baseurl }}/images/scriptability-migrate-answers-created.png "Go to object")

## Limitations of working with TSL files
There are certain limitations to the changes you can apply by editing a Worksheet, Answer, Table, View, or Pinboard through TSL.

* Formulas and columns can either have a new name, or a new expression. You cannot change both, unless migrating or updating the worksheet two times.

* It is not possible to reverse the join direction in the TSL script.

* You cannot create new tables using Scriptability. You can only update existing tables.

* You can only change logical tables using Scriptability. You cannot change the physical version of the table that exists in a database. When you change the `column_name`, for example, the name changes in the application, but not in the physical table in the database.

* You cannot import manually compressed .zip files. You can only import .zip files that you exported from ThoughtSpot: either an object and its associated data sources, or multiple objects of the same type that you exported from the object list page.

## Related Information
- [View TSL specification]({{ site.baseurl }}/admin/worksheets/tsl-view.html)
