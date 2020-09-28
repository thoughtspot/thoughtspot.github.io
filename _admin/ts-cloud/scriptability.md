---
title: [Scriptability]
last_updated: 9/28/2020
summary: "Use Scriptability to export and import Worksheets, Views, Tables, Pinboards, and Answers in a human-readable format."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot developed its own scriptable approach for exporting, enhancing, and migrating Worksheets, Views, Tables, Pinboards, and Answers.

You can model your data and build out sophisticated dashboards in your test environment, before deploying to all users.

The Scriptability feature supports several scenarios that you may encounter:
- **Migrating from a development environment to a production environment** by downloading files from the development cluster and uploading the same files into the production cluster
- **Implementing metadata changes outside ThoughtSpot UI**, such as replacing the underlying tables for an object, or replacing a single column from one table with a column in another table
- **Making bulk changes**, such as mass renaming of objects defined by Worksheets, and managing duplicates
- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

## How to use Scriptability
Depending on how you want to use Scriptability, there are several workflows you can follow:
1. **Edit and update an existing object in the same cluster**: You can either
- [export](#export-object) the object(s), edit the object(s) by modifying its [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html) (`TSL`) representation, and [import](#update-object) the updated file(s) to modify the existing object *or*
- edit the object(s) using the [in-app `TSL` editor](#edit-tsl) and publish the updated file(s).
2. **Migrate an existing object from one cluster to a new cluster**: [export](#export-object) the object(s) and [import](#migrate-object) the updated file(s) to the new cluster.
3. **Edit and migrate an existing object from one cluster to a new cluster**: You can either
- [export](#export-object) the object(s), edit the object(s) by modifying its [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html) (`TSL`) representation, and [import](#migrate-object) the updated file(s) to the new cluster *or*
- edit the object(s) using the [in-app `TSL` editor](#edit-tsl), publish the updated file(s), [export](#export-object) the object(s), and [import](#migrate-object) the updated file(s) to the new cluster. Note that this workflow changes the object(s) in both clusters.

## Prerequisites

Refer to the following tables for required permissions for importing and exporting Pinboards, Answers, Worksheets, Tables, and Views.

**Import**

| Import a new object without importing its dependents | Import a new object and its dependents | Import and update an existing object without dependents | Import and update an existing object with dependents |
| ---------- | ---- | --- | --- |
| The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. For example, if you import a Pinboard that is built on a Worksheet that is built on a table, you must have **view** permission for the Worksheet. When importing a new Worksheet or View, you must have the **can manage data** permission. | **Can manage data**, if the object or any of its dependents is a Worksheet or View. | **Edit** permission on the existing object. The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. When importing a Worksheet or View, you must have the **can manage data** permission. | **Edit** permission on the existing object(s). **Can manage data**, if the object or any of its dependents is a Worksheet or View. |

**Export**

| Export with dependents | Export without dependents |
| ---- | ---- |
| **View** permission on the object and all dependents. | **View** permission on the object and its first-level dependents. |

{: id="export-object"}
## Export an object
You can export [one object at a time](#export-one), or export [more than one object as a zip file](#export-zip-file), or SpotApp. The SpotApp contains a document called the `Manifest` file, which defines the objects you exported, and their underlying data sources.

{: id="export-one"}
### Export one object
To export one object:

1. Navigate to the Pinboard, Answer, View, Table, or Worksheet you want to export.

2. Click the three-dot icon, and select **Export as TSL**.

    ![Export a Pinboard]({{ site.baseurl }}/images/scriptability-cloud-pinboard-export.png "Export a Pinboard")

{: id="export-zip-file"}
### Export multiple objects
To export multiple objects at a time, follow these steps:

1. Navigate to the **Answers**, **Pinboards**, or **Data** page from the top navigation bar, depending on the objects you want to export.

    ![The top navigation bar]({{ site.baseurl }}/images/nav-bar-no-spotiq.png "The top navigation bar")

2. Hover over the objects you want to export, and click the empty checkboxes that appear.

3. Select the **Export** button.

    ![Export multiple objects]({{ site.baseurl }}/images/scriptability-cloud-export-multiple.png "Export multiple objects")

4. Choose whether to export only the objects, or the objects and their underlying data sources (Worksheets, Tables, and Views). If you export a table, you do not see this modal, since tables do not have any dependents.

    ![Choose what to export]({{ site.baseurl }}/images/scriptability-cloud-select-export.png "Choose what to export")

5. Click **Export**.

    ![Click Export]({{ site.baseurl }}/images/scriptability-cloud-click-export.png "Click Export")

4. Open the downloaded `TSL` zip file:

    ![Zip file]({{ site.baseurl }}/images/scriptability-cloud-zip-file.png "Zip file")

{: id="edit-tsl"}
## Edit the TSL file
You can edit the `TSL` file in one of two ways. You can [export](#export-object) the object(s) and edit the file(s) in any text editor, before you import it. Or, you can use the [in-app `TSL` editor](#tsl-editor) to edit, validate, and publish the object(s). Refer to [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html) for information on syntax in the TSL files.

{: id="tsl-editor"}
## Edit, validate, and publish objects using the TSL editor
You can access the TSL editor from the object list page, or from the object itself. To edit and update multiple objects using the TSL editor, access it from the object list page.

To use the TSL editor, follow these steps:

1. Navigate to the **Answers**, **Pinboards**, or **Data** page from the top navigation bar, depending on the object you want to update.

2. Click the name of the object you want to edit, or select multiple objects by clicking on the checkboxes that appear when you hover over an object name.

3. From the object list page, select the **Edit TSL** button. From the object itself, select the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen, and select **Edit TSL**.

    ![Edit TSL - object list page]({{ site.baseurl }}/images/scriptability-edit-tsl-object-page.png "Edit TSL - object list page")

    ![Edit TSL from object]({{ site.baseurl }}/images/scriptability-edit-tsl-object.png "Edit TSL from object")

4. The TSL editor opens. Edit the TSL file(s), using the syntax specified in [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html).

    The TSL editor has the following functions under the top menu:
    - **File**: Validate, Publish, and Exit editor. You can also validate and publish using the **validate** and **publish** buttons at the top right of the editor. You can also exit the editor using the X button at the top right corner. The system warns you if you try to exit with unsaved changes.
    - **Edit**: Undo, Redo, Cut, Copy, Select all, Fold, Fold all, Unfold, Unfold all, and Go to line. The **Fold** option compresses the lines in the file so you only see the first line of a section. **Go to line** opens a dialog box, where you can type in the number of the line you would like to go to. This is useful for long TSL files.
    - **Find**: Find and Find and replace. This functionality allows you to easily find words or parameters in the TSL file. You can also click on a word or parameter in the TSL editor, and the editor highlights all instances of that word.
    - **View**: Show line numbers and Hide line numbers.
    - **Help**: Documentation. This links to the [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html) documentation.  

5. When you finish editing the TSL file(s), select **Validate** in the top right corner. You must validate each file individually. A blue dot appears next to any file that contains changes.

    ![Validate the file]({{ site.baseurl }}/images/scriptability-tsl-editor-validate.png "Validate the file")

6. If you constructed the file(s) correctly, a green check mark appears next to the name of the file.

7. After validating,  select **Publish** in the top right corner, next to **Validate**. You must publish each file individually.

8. The system displays a **Publish status** dialog box. You can select **Open [object]** to open the object you just published in a new tab, or click **Close** to return to the TSL editor.

    ![Open the object or return to the TSL editor]({{ site.baseurl }}/images/scriptability-tsl-editor-publish-status.png "Open the object or return to the TSL editor")

{: id="update-object"}
## Update an object
You can overwrite an existing Worksheet, View, Table, Answer, or Pinboard, by downloading the `TSL` file, making any necessary changes, and then re-uploading the `TSL` file. To update SpotApps, or collections of objects packaged together as a zip file, refer to [SpotApps]({{ site.baseurl }}/admin/ts-cloud/app-templates.html).

You can also update an object using the [TSL editor](#tsl-editor).

To update an existing object by downloading the TSL file and modifying it, follow these steps. In this case, we are updating a single Worksheet. You can update multiple objects at once by uploading them in .zip file format.

1. [Export the object](#export-object) you want to update, as in steps 1 to 5 of the **Export an Object** section above.

2. Edit the file in a text editor.

1. Navigate to the **Answers**, **Pinboards**, or **Data** page from the top navigation bar, depending on the object you want to update.

2. Click the name of the object you want to edit.

3. Click the ellipsis ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen.

4. Select **Update from TSL**.

   Here, we are uploading the edited *TCPH WS* worksheet.

   ![Start Worksheet update from file]({{ site.baseurl }}/images/scriptability-worksheet-update.png "Start Worksheet update from file")

5. In the **Import** interface, click **Select .tsl or .zip files to upload**.

   ![Find the Worksheet TSL file]({{ site.baseurl }}/images/scriptability-worksheet-update-browse.png "Find the Worksheet TSL file")

6. In your file system, find and select the `TSL` file you edited.

8. If you constructed the file correctly, the **Import** interface displays a *Validation successful* message. You can now import the file.

9. If you uploaded a `.zip` file with multiple objects, you can unselect any files in the `.zip` file you do not want to upload.

10. Click **Import selected files**.

    ![Import selected file]({{ site.baseurl }}/images/scriptability-worksheet-update-success.png "Import selected files")

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Done** to return to the main object page.

    ![Go to object]({{ site.baseurl }}/images/scriptability-import-status.png "Go to object")

{: id="migrate-object"}
## Migrate an object
To migrate an Answer, Pinboard, View, or Worksheet from one cluster to another, follow these steps. To migrate SpotApps, or collections of objects packaged together as a zip file, refer to [SpotApps]({{ site.baseurl }}/admin/ts-cloud/app-templates.html). Note that you cannot create a new Table using Scriptability. You can only update existing Tables.  

1. [Export the object](#export-object) you want to move, as in steps 1 to 5 of the **Export an Object** section above.

    The object remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the object to.

3. Click **Answers**, **Pinboards**, or **Data** on the top navigation bar, depending on the objects you want to migrate.

4. To upload a Worksheet or View, click the More icon ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} in the upper-right side of the screen. Then, select **Import TSL**.

    ![Import Worksheet or View TSL]({{ site.baseurl }}/images/scriptability-cloud-worksheet-view-import.png "Import Worksheet or View TSL")

5. To upload a Pinboard or Answer, click the **Import TSL** button in the upper-right side of the screen.   

    ![Import a Pinboard or Answer]({{ site.baseurl }}/images/scriptability-cloud-import.png "Import a Pinboard or Answer")

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

## Related information

- [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/ts-cloud/tsl.html)   
