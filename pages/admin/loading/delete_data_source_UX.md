---
title: [Delete a data source from the browser]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can delete data sources from the browser, as long as they were not created by an administrator through tsload or Data Connect.

You can delete data sources from the browser if they were created from the browser. These types of data sources include:

-   Data imported from the browser.
-   Worksheets.

ThoughtSpot checks for dependencies whenever you try to delete a table or worksheet.

1.   Click on **Data**, on the top navigation bar.

     ![](../../shared/conrefs/../../images/data_icon.png "Data")

2.   Check the box next to the name of the data source you want to delete.
3.   Click the delete icon.

     ![](../../images/delete_data_worksheet.png "Delete a data source")

4.   If you attempt to delete a data source with dependent objects, the operation will be blocked. You will see a list of dependent objects with links.

     ![](../../images/dependency_warning_with_links.png "Warning message when trying to delete an object with
                                dependencies")

5.   Click on a dependent object to modify or delete it. If you want to remove the dependency by modifying the dependent object, you'll need to remove all search terms or columns that refer back to the data source you are trying to delete.
6.   When all dependencies have been removed, you will be able to go back and delete the data source.

-   **[Check dependencies in the browser](../../admin/loading/check_dependency_ux.html)**  
You can see all of the dependencies for any data source \(worksheet or table\) on the **Manage Data** page.

**Parent topic:** [Delete a data source](../../admin/loading/about_dependencies.html)
