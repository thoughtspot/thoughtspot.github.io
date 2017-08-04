---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Share tables and columns

Administrators and owners can share **Can View** or **Can Edit** privileges on tables with other users, who can further share them with others.

By default, when data is loaded using the ThoughtSpot Loader, ODBC, or JDBC, it is only visible to administrators. Data imported from a Web browser is visible to administrators and the user who uploaded it. You can share an entire table, or only some of its columns.

Use caution when sharing tables, because any objects created from them will have dependencies on the tables and their underlying structure. Objects created from tables can include worksheets, answers, and pinboards. This means that if a user wants to drop or modify a table, any object that depends upon it must be edited or removed first, to remove the dependency. For this reason, it is a best practice to only grant the **Edit** permission on tables to a small number of users.

Share a table or imported data by following these steps:

1.   Click on the **Manage Data** icon in the top navigation bar. 
2.   Click on **Tables**. 

    ![](../../images/data_icon_and_tables.png)

3.   Select one or more tables to share, and click the **Share** icon. 

    ![](../../images/share_tables.png)

4.   Select **Entire Table** or **Specific Columns**. 

    ![](../../images/share_table.png)

5.   If you selected **Specific Columns**, select the column to share. 
6.   Click **+** and select the users and groups that you want to share with. 
7.   Configure the level of access by selecting from the dropdown list. You can select: 
    -   **Can View** to provide read-only access. This enables viewing the table data and defining worksheets on the table.
    -   **Can Edit** to allow modification. This enables renaming, modifying, or deleting the entire table and adding or removing its columns.
8.   Click **Add and Save**. 
9.   Click **Done**. 

