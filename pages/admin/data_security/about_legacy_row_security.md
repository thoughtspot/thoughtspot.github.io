---
title: [About Legacy Row Level Security]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Legacy Row Level Security is no longer used. This documentation is retained to support implementations that are already using this method.

If you're setting up row level security for the first time, see [About Rule-Based Row Level Security](new_row_level_security.html). That is the preferred method. It supports thousands of groups, and is easier to set up and maintain then Legacy Row Level Security.

This legacy version of row level security allowed you to define which groups could see individual rows in a table, based on the values in a column.

## Legacy Row Level Security settings

You define the rules for row level security by editing the security file in Excel. Each row in the file is a rule, consisting of:

|Value|Security file heading|Details|
|-----|---------------------|-------|
|Group|GroupName|Group of users for which to apply this setting.|
|Table|LogicalTableName|TableName from the model file.|
|Table identifier|LogicalTableGUID|TableGUID from the model file.|
|Column|ColumnName|ColumnName from the model file.|
|Column identifier|ColumnGUID|ColumnGUID from the model file.|
|Operation|Operation|Supply one of these operators:-   BEGINS_WITH
-   ENDS_WITH
-   CONTAINS
-   EQ (equals)
-   NE (not equals)
-   GE (greater than or equal to)
-   GT (greater than)
-   LE (less than or equal to)
-   LT (less than)
-   BW (between)
-   BW_INC (between with both boundaries included)
-   BW_INC_MIN (between with the lower boundary included)
-   BW_INC_MAX (between with upper boundary included)

|
|Column value(s)|Value|Column value(s) to apply the operator to. If multiple values are used, as with the between operators, they are separated by a pipe (|) character.|

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

 ![](../../images/row_level_security_example_one.png "Multiple equality conditions in security file")

In this example, a user is a member of two groups: Analysts and Sales. The security file lists different permissions for each group based on the column Category. Analysts can see rows where Category is equal to Consumer and Sales can see rows where Category is equal to Enterprise. So the user who is a member of both groups will be able to see all the rows where the Category is equal to either Consumer or Enterprise.

 ![](../../images/row_level_security_example_two.png "Multiple group membership in security file")

It works the same way with ranges and between operators as with equality. The user will be able to see any row that fulfills any of the conditions.

## Workflow for setting Legacy Row Level Security

Setting row level security is a three steps process:

1.  [Obtain the security file](get_security_file.html#).
2.  [Define Legacy Row Level Security](row_security.html#).
3.  [Upload the edited security file](upload_security_file.html#).

-   **[Obtain the security file](../../admin/data_security/get_security_file.html)**  
Before you can make changes to the security file, you need to download it using the ThoughtSpot Web interface to access ThoughtSpot. Then you will be able to edit it using Microsoft Excel or a similar spreadsheet editing tool.
-   **[Define Legacy Row Level Security](../../admin/data_security/row_security.html)**  
Edit the security file to add row level security to tables.
-   **[Upload the edited security file](../../admin/data_security/upload_security_file.html)**  
After you have made changes to the security file, you must upload it back to ThoughtSpot before the changes will take effect.

**Parent topic:** [Row level security](../../admin/data_security/about_row_security.html)
