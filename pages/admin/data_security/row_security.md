---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Define Legacy Row Level Security

Edit the security file to add row level security to tables.

Before you can add row level security:

-   [Download the model file](../data_modeling/get_model_file.html#).
-   [Obtain the security file](get_security_file.html#).
-   Create the appropriate groups within ThoughtSpot, if they don't already exist. You can create groups and add users to them by following the procedures in [Manage users, groups, and privileges](../users_groups/about_users_groups.html#).

You can edit the security file using Microsoft Excel or a compatible tool. You will need to copy and paste some of the required information from the model file.

1.   In the model file, find the table for which you want to add row level security. Then find the entry for the column you will use to define visibility criteria. You will copy some of the values from this entry into the security file. 
2.   Enter the appropriate values into the security file in the first empty row. 

    |Value|Security file heading|Details|
    |-----|---------------------|-------|
    |Group|GroupName|Group of users for which to apply this setting.|
    |Table|LogicalTableName|TableName from the model file.|
    |Table identifier|LogicalTableGUID|TableGUID from the model file.|
    |Column|ColumnName|ColumnName from the model file.|
    |Column identifier|ColumnGUID|ColumnGUID from the model file.|
    |Operation|Operation|Supply one of these operators:    -   BEGINS\_WITH
    -   ENDS\_WITH
    -   CONTAINS
    -   EQ \(equals\)
    -   NE \(not equals\)
    -   GE \(greater than or equal to\)
    -   GT \(greater than\)
    -   LE \(less than or equal to\)
    -   LT \(less than\)
    -   BW \(between\)
    -   BW\_INC \(between with both boundaries included\)
    -   BW\_INC\_MIN \(between with the lower boundary included\)
    -   BW\_INC\_MAX \(between with upper boundary included\)
|
    |Column value\(s\)|Value|Column value\(s\) to apply the operator to. If multiple values are used, as with the between operators, they are separated by a pipe \(|\) character.|

    If the condition made up of the column, operator, and value combination for a particular row is true, that row will be visible to the members of the designated group.

3.   Repeat this for each group, column, and condition you want to define. 
4.   Save the security file in the same format as it was when you downloaded it \(as a Microsoft Excel file with the name security.xls\). You will see a warning when attempting to save the file. Click "Yes" and save the file. 

    ![](../../images/warning_save_security_excel.png)


**Parent topic:** [About Legacy Row Level Security](../../admin/data_security/about_legacy_row_security.html)

