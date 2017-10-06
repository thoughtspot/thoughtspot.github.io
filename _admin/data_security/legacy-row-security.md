---
title: [How to use legacy RLS]
tags:
keywords: tbd
last_updated: tbd
summary: "Legacy Row Level Security is deprecated and no longer used. This documentation is retained to support implementations that are already using this method."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If you're setting up row level security for the first time, see [About Rule-Based Row Level Security](about-row-security.html). That is the preferred method. It supports thousands of groups, and is easier to set up and maintain then Legacy Row Level Security.

This legacy version of row level security allowed you to define which groups could see individual rows in a table, based on the values in a column. Setting row level security is a three steps process:

1.  Obtain the security file
2.  Define Legacy Row Level Security
3.  Upload the edited security file


## Legacy Row Level Security settings

You define the rules for row level security by editing the security file in Excel. Each row in the file is a rule, consisting of:

|Value|Security file heading|Details|
|-----|---------------------|-------|
|Group|GroupName|Group of users for which to apply this setting.|
|Table|LogicalTableName|TableName from the model file.|
|Table identifier|LogicalTableGUID|TableGUID from the model file.|
|Column|ColumnName|ColumnName from the model file.|
|Column identifier|ColumnGUID|ColumnGUID from the model file.|
|Operation|Operation|Supply a valid operator.|
|Column value(s)|Value|Column value(s) to apply the operator to. If multiple values are used, as with the between operators, they are separated by a pipe (|) character.|

Valid operators for `Operation` values are:

-   `BEGINS_WITH`
-   `ENDS_WITH`
-   `CONTAINS`
-   `EQ` (equals)
-   `NE` (not equals)
-   `GE` (greater than or equal to)
-   `GT` (greater than)
-   `LE` (less than or equal to)
-   `LT` (less than)
-   `BW` (between)
-   `BW_INC` (between with both boundaries included)
-   `BW_INC_MIN` (between with the lower boundary included)
-   `BW_INC_MAX` (between with upper boundary included)


## Best practices for using Legacy Row Level Security

Use these best practices when using Legacy Row Level Security:

1.  Give users access to worksheets instead of tables.

    For each table that uses row level security, you should create a worksheet and share it, so that users can search it instead of the underlying table. The worksheet must include the column(s) where the security rule(s) are defined. Then remove access to the table where you applied the row level security. This is the safest way to ensure that users never see any data from rows they shouldn't see.

    Row level security only applies in searches that include the column on which the security rule is defined. So if a user has access to the tables directly, they could do a search that omits the column that has the security rules applied, and then see the data in the other columns. But a worksheet that includes the column with the row level security definition will always hide all values from rows that don't satisfy the row level security condition.

    Because of this, it is a best practice to always use worksheets with row level security, and remove access to the underlying tables. This will ensure that groups can only see the data that is defined as visible to them.

2.  Explicitly grant access for users that should see all rows.

    As soon as you create a row level security definition on a table for one group, all other groups are then blocked from seeing any rows in the table. You have to specifically grant other groups access in order for them to see any rows.

    If you want to ensure that a group can always see all rows in a table, grant them NE (not equals) privileges on a dummy value that does not appear in that row. For example, these settings would enable users in the group Managers to see all rows in the Sales table:

    -   Managers Sales Region NE xxx
3.  The operations GE (greater than or equal to), GT (greater than), LE (less than or equal to), and LT (less than) are meant to be used with measures (numeric values) and not with attributes. Though they technically can be used with attributes, they would be applied based on alphabetical order, which could return confusing results.

## Row level security with multiple conditions

When multiple row level security rules apply, the permissions are additive. That is, when there are multiple row level security conditions specified on a table, they are applied using an OR operator. These examples will help you understand how this works in practice:

In this example, the group Analysts has two separate security entries for the Region column in the Customer table. One entry allows Analysts to see rows where the Region is equal to West. The other allows them to see rows where the Region is equal to East. So users in the Analysts group will be able to see all the rows in either Region.

 ![]({{ site.baseurl }}/images/row-level-security_example_one.png "Multiple equality conditions in security file")

In this example, a user is a member of two groups: Analysts and Sales. The security file lists different permissions for each group based on the column Category. Analysts can see rows where Category is equal to Consumer and Sales can see rows where Category is equal to Enterprise. So the user who is a member of both groups will be able to see all the rows where the Category is equal to either Consumer or Enterprise.

 ![]({{ site.baseurl }}/images/row-level-security_example_two.png "Multiple group membership in security file")

It works the same way with ranges and between operators as with equality. The user will be able to see any row that fulfills any of the conditions.


## Get the security filters

Before you can make changes to the security file, you need to download it using the ThoughtSpot Web interface to access ThoughtSpot. Then you will be able to edit it using Microsoft Excel or a similar spreadsheet editing tool.

To obtain the security file:

1. Log in to ThoughtSpot from a browser as the admin user.
2. Click on the **Admin** icon, on the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3. Click on **Data Security**.
4. Click **Download security.xls**.

    ![]({{ site.baseurl }}/images/download_security_file.png)

5. Save it to your machine.
6. Open the security file in Excel or a text editor.
    -   If you are using Excel, you may see a warning message. Click "Yes" to proceed.

         ![]({{ site.baseurl }}/images/warning_open_security_excel.png)

    -   If your security file includes multi-byte characters, edit the file using vi or vim. This is because security files containing multi-byte characters must be saved as UTF-8 encoded. Otherwise you won't be able to upload them after making your edits.

## Define RLS Security

Edit the security file to add row level security to tables.

Before you can add row level securit, create the appropriate groups within ThoughtSpot, if they don't already exist. You can create groups and add users to them by following the procedures in [Manage users, groups, and privileges](../users_groups/about-users-groups.html#).

You can edit the security file using Microsoft Excel or a compatible tool. You will need to copy and paste some of the required information from the model file.

1. In the model file, find the table for which you want to add row level security. Then find the entry for the column you will use to define visibility criteria. You will copy some of the values from this entry into the security file.
2. Enter the appropriate values into the security file in the first empty row.

    |Value|Security file heading|Details|
    |-----|---------------------|-------|
    |Group|`GroupName`|Group of users for which to apply this setting.|
    |Table|`LogicalTableName`|TableName from the model file.|
    |Table identifier|`LogicalTableGUID`|TableGUID from the model file.|
    |Column|`ColumnName`|ColumnName from the model file.|
    |Column identifier|`ColumnGUID`|ColumnGUID from the model file.|
    |Operation|`Operation`|Supply a valid operators.|
    |Column value(s)|`Value`|Column value(s) to apply the operator to. If multiple values are used, as with the between operators, they are separated by a pipe (|) character.|

    Valid operators are:

    -   `BEGINS_WITH`
    -   `ENDS_WITH`
    -   `CONTAINS`
    -   `EQ` (equals)
    -   `NE` (not equals)
    -   `GE` (greater than or equal to)
    -   `GT` (greater than)
    -   `LE` (less than or equal to)
    -   `LT` (less than)
    -   `BW` (between)
    -   `BW_INC` (between with both boundaries included)
    -   `BW_INC_MIN` (between with the lower boundary included)
    -   `BW_INC_MAX` (between with upper boundary included)

    If the condition made up of the column, operator, and value combination for a particular row is true, that row will be visible to the members of the designated group.

3. Repeat this for each group, column, and condition you want to define.
4. Save the security file in the same format as it was when you downloaded it (as a Microsoft Excel file with the name security.xls). You will see a warning when attempting to save the file. Click "Yes" and save the file.

    ![]({{ site.baseurl }}/images/warning_save_security_excel.png)


## Upload the edited security filters

After you have made changes to the security file, you must upload it back to ThoughtSpot before the changes will take effect.

To upload the security file:

1. Log in to ThoughtSpot from a browser as the admin user.
2. Click on the **Admin** icon, on the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3. Click on **Data Security**.
4. Click **BROWSE YOUR FILES** to upload the security.xls file, or drag and drop it in the zone.

    ![]({{ site.baseurl }}/images/security_fie_upload.png)

    If you receive an error message upon uploading the file, check that it does not include any multi-byte characters (i.e. Japanese or other multi-byte language characters). If it does, you'll need to download the file again and make your edits using vi or vim.

    After the file is uploaded, ThoughtSpot is updated and the row level security changes are applied.
