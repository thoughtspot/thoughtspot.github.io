---
title: [Import a schema (use the SQL editor)]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can run a SQL script to create your database schema through the browser, without having to log in to the shell on the ThoughtSpot instance. You can edit the script and run it directly in the browser to create the schema.

Importing a schema through the Web browser makes it possible to run your SQL script without needing to have a Linux login. You can use this capability in any of these ways:

-   [Create the SQL script ahead of time](create_schema_with_script.html#), and use the browser to run it.
-   Use the editor to type your SQL directly into the browser.
-   Use the browser SQL interface as an interactive SQL editor, for example to test an existing script or make changes to an existing schema.

1.   [Log in to ThoughtSpot from a browser](../setup/accessing.html#).
2.   Click on **Data**, on the top navigation bar.

     ![](../../shared/conrefs/../../images/data_icon.png "Data")

3.   Click **Actions** and select **Upload schema**.

     ![](../../images/import_schema.png "Upload schema")

4.   Drag and drop your SQL file into the browser, or choose **Browse Your Files** to locate it.
5. You're now in the SQL editor. Use it to view your script and make any changes.

     ![](../../images/SQL_editor.png "Import schema")

6.   When ready, run your script by clicking the **Execute** button.
7. If there are any errors, correct them and run the script again.

**Parent topic:** [Build the schema](../../admin/loading/create_schema.html)
