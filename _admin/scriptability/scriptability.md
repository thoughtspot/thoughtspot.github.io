---
title: [Scriptability]
last_updated: 12/17/2020
summary: "Use Scriptability to export and import Worksheets, Views, Tables, Pinboards, SpotIQ results, and Answers in a human-readable format."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot developed its own scriptable approach for exporting, enhancing, and migrating Worksheets, Views, Tables, Pinboards, SpotIQ results, and Answers.

You can model your data and build out sophisticated dashboards in your test environment, before deploying to all users.

The Scriptability feature supports several scenarios that you may encounter:
- **Migrating from a development environment to a production environment** by downloading files from the development cluster and uploading the same files into the production cluster
- **Implementing metadata changes outside ThoughtSpot UI**, such as replacing the underlying tables for an object, or replacing a single column from one table with a column in another table
- **Making bulk changes**, such as mass renaming of objects defined by Worksheets, and managing duplicates
- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

## How to use Scriptability
Depending on how you want to use Scriptability, there are several workflows you can follow:
1. **Edit and update an existing object in the same cluster**: You can either
- [export](#export-object) the object(s), edit the object(s) by modifying its [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/scriptability/tml.html) (`TML`) representation, and [import](#update-object) the updated file(s) to modify the existing object *or*
- edit the object(s) using the [in-app `TML` editor](#edit-tml) and publish the updated file(s).
2. **Migrate an existing object from one cluster to a new cluster**: [export](#export-object) the object(s) and [import](#migrate-object) the updated file(s) to the new cluster.
3. **Edit and migrate an existing object from one cluster to a new cluster**: You can either
- [export](#export-object) the object(s), edit the object(s) by modifying its [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/scriptability/tml.html) (`TML`) representation, and [import](#migrate-object) the updated file(s) to the new cluster *or*
- edit the object(s) using the [in-app `TML` editor](#edit-tml), publish the updated file(s), [export](#export-object) the object(s), and [import](#migrate-object) the updated file(s) to the new cluster. Note that this workflow changes the object(s) in both clusters.

## Prerequisites

Refer to the following tables for required permissions for importing and exporting Pinboards, SpotIQ results, Answers, Worksheets, Tables, and Views.

**Import**

| Import and create a new object without importing its dependents | Import and create a new object and its dependents | Import and update an existing object without dependents | Import and update an existing object with dependents |
| ---------- | ---- | --- | --- |
| The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. For example, if you import a Pinboard that is built on a Worksheet that is built on a table, you must have **view** permission for the Worksheet. When importing a new Worksheet or View, you must have the **can manage data** permission. | **Can manage data**, if the object or any of its dependents is a Worksheet or View. | **Edit** permission on the existing object. The dependents must already exist in the cluster. You must have **view** permissions for the first-level dependent. When importing a Worksheet or View, you must have the **can manage data** permission. | **Edit** permission on the existing object(s). **Can manage data**, if the object or any of its dependents is a Worksheet or View. |

**Export**

| Export with dependents | Export without dependents |
| ---- | ---- |
| **View** permission on the object and all dependents. | **View** permission on the object and its first-level dependents. |

{% include note.html content="If you have a permissions issue with a particular object when you export multiple objects, or an object and its dependents, the complete export does not fail. The individual object does not export, and you receive an error message about this failure in the <code>Manifest</code> file in the zip file." %}

{: id="export-object"}
## Export an object
You can export [one object at a time](#export-one), or export [more than one object as a zip file](#export-zip-file), or SpotApp. The SpotApp contains a document called the `Manifest` file, which defines the objects you exported, and their underlying data sources.

{: id="export-one"}
### Export one object
To export one object:

1. Navigate to the Pinboard, SpotIQ result, Answer, View, Table, or Worksheet you want to export. Note that SpotIQ results are in the form of Pinboards, but you can only find them in the **SpotIQ** tab.

2. Click the **More** menu icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select **Export as TML**.

    ![Export a Pinboard]({{ site.baseurl }}/images/scriptability-cloud-pinboard-export.png "Export a Pinboard")

{: id="export-zip-file"}
### Export multiple objects
To export multiple objects at a time, follow these steps:

1. Navigate to the **Answers**, **Pinboards**, **SpotIQ**, or **Data** page from the top navigation bar, depending on the objects you want to export.

2. Hover over the objects you want to export, and click the empty checkboxes that appear.

3. Select the **Export** button.

    ![Export multiple objects]({{ site.baseurl }}/images/scriptability-cloud-export-multiple.png "Export multiple objects")

4. Choose whether to export only the objects, or the objects and their underlying data sources (Worksheets, Tables, and Views). If you export a table, you do not see this modal, since tables do not have any dependents.

    ![Choose what to export]({{ site.baseurl }}/images/scriptability-cloud-select-export.png "Choose what to export")

5. Click **Export**.

4. Open the downloaded `TML` zip file. The SpotApp zip file contains a document called the `Manifest` file, which defines the objects you exported, their underlying data sources, and any export errors. If an individual export fails, you can find an error message in the `Manifest` file. The zip file still exports, even if an individual object's export fails.

{: id="edit-tml"}
## Edit the TML file
You can edit the `TML` file in one of two ways. You can [export](#export-object) the object(s) and edit the file(s) in any text editor, before you import it. Or, you can use the [in-app `TML` editor](#itself-editor) to edit, validate, and publish the object(s). Refer to [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/scriptability/tml.html) for information on syntax in the TML files.

{: id="tml-editor"}
## Edit, validate, and publish objects using the TML editor
You can access the TML editor from the object list page, or from the object itself. To edit and update multiple objects using the TML editor, access it from the object list page.

To use the TML editor, follow these steps:

1. Navigate to the **Answers**, **Pinboards**, **SpotIQ**, or **Data** page from the top navigation bar, depending on the object you want to update.

2. Click the name of the object you want to edit, or select multiple objects by clicking on the checkboxes that appear when you hover over an object name.

3. From the object list page, select the **Edit TML** button. From the object itself, select the **More** menu icon ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} in the upper-right side of the screen, and select **Edit TML**.

    ![Edit TML - object list page]({{ site.baseurl }}/images/scriptability-edit-tml-object-page.png "Edit TML - object list page")

    ![Edit TML from object]({{ site.baseurl }}/images/scriptability-edit-tml-object.png "Edit TML from object")

4. The TML editor opens. Edit the TML file(s), using the syntax specified in [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/scriptability/tml.html). Note that SpotIQ results are in the form of Pinboards. Refer to [Pinboard TML]({{ site.baseurl }}/admin/scriptability/tml.html#syntax-pinboards) to edit a SpotIQ TML file.

    The TML editor has the following functions under the top menu:
    - **File**: Validate, Publish, and Exit editor. You can also validate and publish using the **validate** and **publish** buttons at the top right of the editor. You can also exit the editor using the X button at the top right corner. The system warns you if you try to exit with unsaved changes.
    - **Edit**: Undo, Redo, Cut, Copy, Select all, Fold, Fold all, Unfold, Unfold all, and Go to line. The **Fold** option compresses the lines in the file so you only see the first line of a section. **Go to line** opens a dialog box, where you can type in the number of the line you would like to go to. This is useful for long TML files.
    - **Find**: Find and Find and replace. This functionality allows you to easily find words or parameters in the TML file. You can also click on a word or parameter in the TML editor, and the editor highlights all instances of that word.
    - **View**: Show/Hide errors, Show line numbers, and Hide line numbers. **Show/Hide errors** toggles the **Errors** sidebar on and off. The **Errors** sidebar does not appear until after you Validate a file, if there are errors in it.
    - **Help**: Documentation. This links to the [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/scriptability/tml.html) documentation.  

5. When you finish editing the TML file(s), select **Validate** in the top right corner. You must validate each file individually. A blue dot appears next to any file that contains changes.

    ![Validate the file]({{ site.baseurl }}/images/scriptability-tml-editor-validate.png "Validate the file")

6. If you constructed the file(s) correctly, a green check mark appears next to the name of the file. If you did not construct the file correctly, a red bar appears near the top of the screen, telling you that ThoughtSpot found errors in one or more files. Click **Show errors** to see the errors listed in the **Errors** sidebar.

    ![Review errors]({{ site.baseurl }}/images/scriptability-tml-editor-errors.png "Review errors")

7. After validating,  select **Publish** in the top right corner, next to **Validate**. You must publish each file individually.

8. The system displays a **Publish status** dialog box. You can select **Open [object]** to open the object you just published in a new tab, or click **Close** to return to the TML editor.

    ![Open the object or return to the TML editor]({{ site.baseurl }}/images/scriptability-tsl-editor-publish-status.png "Open the object or return to the TML editor")

{: id="update-object"}
## Update an object
You can overwrite an existing Worksheet, View, Table, Answer, Pinboard, or SpotIQ result, by downloading the `TML` file, making any necessary changes, and then re-uploading the `TML` file. To update SpotApps, or collections of objects packaged together as a zip file, refer to [SpotApps]({{ site.baseurl }}/admin/scriptability/app-templates.html).

You can also update an object using the [TML editor](#tml-editor).

To update an existing object by downloading the TML file and modifying it, follow these steps. In this case, we are updating a single Worksheet. You can update multiple objects at once by uploading them in .zip file format.

1. [Export the object](#export-object) you want to update, as in steps 1 to 5 of the **Export an Object** section above.

2. Edit the file in a text editor.

1. Navigate to the **Answers**, **Pinboards**, **SpotIQ**, or **Data** page from the top navigation bar, depending on the object you want to update.

2. Click the name of the object you want to edit.

3. Click the **More** menu icon ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} in the upper-right side of the screen.

4. Select **Update from TML**.

   Here, we are uploading the edited *TCPH WS* worksheet.

   ![Start Worksheet update from file]({{ site.baseurl }}/images/scriptability-worksheet-update.png "Start Worksheet update from file")

5. In the **Import** interface, click **Select .TML or .zip files to upload**.

   ![Find the Worksheet TML file]({{ site.baseurl }}/images/scriptability-worksheet-update-browse.png "Find the Worksheet TML file")

6. In your file system, find and select the `TML` file you edited.

8. If you constructed the file correctly, the **Import** interface displays a *Validation successful* message. You can now import the file.

9. If you uploaded a `.zip` file with multiple objects, you can unselect any files in the `.zip` file you do not want to upload.

10. Click **Import selected files**.

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Done** to return to the main object page.

{: id="migrate-object"}
## Migrate an object
To migrate an Answer, Pinboard, SpotIQ result, View, or Worksheet from one cluster to another, follow these steps. To migrate SpotApps, or collections of objects packaged together as a zip file, refer to [SpotApps]({{ site.baseurl }}/admin/scriptability/app-templates.html). Note that you cannot create a new Table using Scriptability. You can only update existing Tables.  

1. [Export the object](#export-object) you want to move, as in steps 1 to 5 of the **Export an Object** section above.

    The object remains on the original cluster as well, unless you delete it.

2. Navigate to the cluster you want to add the object to.

3. Click **Answers**, **Pinboards**, **SpotIQ**, or **Data** on the top navigation bar, depending on the objects you want to migrate.

4. To upload a Worksheet or View, click the More icon ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} in the upper-right side of the screen. Then, select **Import TML**.

    ![Import Worksheet or View TML]({{ site.baseurl }}/images/scriptability-data-import.png "Import Worksheet or View TML")

5. To upload a Pinboard or Answer, click the **Import TML** button in the upper-right side of the screen.   

    ![Import a Pinboard or Answer]({{ site.baseurl }}/images/scriptability-cloud-import.png "Import a Pinboard or Answer")

6. In the **Import** interface, click **Select .TML or .zip files to upload**.

    ![Select a file]({{ site.baseurl }}/images/scriptability-worksheet-update-browse.png "Select a file")

6. In your file system, find and select the `TML` file. The file uploads automatically.

8. If you constructed the file correctly, the **Import** interface displays a *Validation successful* message. You can now import the file.

9. If you uploaded a `.zip` file with multiple objects, you can unselect any files in the `.zip` file you do not want to upload. Here, we only want to import **Brand Revenue** and **Average Revenue by Part**, not **Basic Answer 1**.

10. Click **Import selected files**.

11. The **Import Status** screen displays the status of the objects you imported. You can open the object(s) that you imported, or click **Done** to return to the main object page.

## Limitations of working with TML files
There are certain limitations to the changes you can apply by editing a Worksheet, Answer, Table, View, Pinboard, or SpotIQ result through TML.

* Formulas and columns can either have a new name, or a new expression. You cannot change both, unless migrating or updating the worksheet two times.

* It is not possible to reverse the join direction in the TML script.

* You cannot create new tables using Scriptability. You can only update existing tables.

* You can only change logical tables using Scriptability. You cannot change the physical version of the table that exists in a database. When you change the `column_name`, for example, the name changes in the application, but not in the physical table in the database.

* You cannot import manually compressed .zip files. You can only import .zip files that you exported from ThoughtSpot: either an object and its associated data sources, or multiple objects of the same type that you exported from the object list page.

* You cannot create Scriptable representations of R- or Python-powered visualizations.

## Related information

- [ThoughtSpot Modeling Language]({{ site.baseurl }}/admin/scriptability/tml.html)   
