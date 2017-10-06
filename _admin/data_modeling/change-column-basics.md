---
title: ["Set column name, description, and type"]
tags:
keywords: tbd
last_updated: tbd
summary: "Modeling includes setting basic information for a data column such as its name, description, and type."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Basic information for a data column is its **NAME**, **DESCRIPTION**, and **TYPE**. All of these can influence how a user experiences your data. For example, the **DESCRIPTION** appears as a "tip" when a user hovers over a column. So it is the means for helping users understand where the data comes from.

## Change the column name

You can change the text that is shown for the column names in ThoughtSpot to make the names more meaningful to users. The column name is what they will type to add that column to their search.

**Column Name** is the name that will be displayed to users for that column in ThoughtSpot. The default is the name you gave the column when you defined the table in the database or imported the CSV file from the browser.

1.   Find the **Column Name** for the column whose name you want to change.
2.   Type in the new column name, as you want it to appear in ThoughtSpot.
3.   Save your changes.


## Change column description

You can provide a description for a specific column, to provide additional information for users about the data it contains.

**Description** contains an optional description for the corresponding column. When a user hovers over the column, a tooltip will show this description.

To create a column description:

1.   Find the column you want to add a description for, and select its **Description**.
2.   Type in the column description, as you want it to appear in ThoughtSpot.
3.   Repeat for all columns where you want to add a description.
4.   Save your changes.


## Change column type

Columns have a **Column Type** based on the kind of data they store. This is set automatically upon defining the table, but in some cases, you may want to change the type. There are two types of columns:

-   **ATTRIBUTE** contains a property, like name, address, or id number.
-   **MEASURE** contains a numeric value that can be compared in a meaningful way using math, such as a count or measurement.

When a new table is created, the default column type is set according to the data type defined for each column. By default, columns with the numeric data types (FLOAT, DOUBLE, INT, or BIGINT) are assigned the type **MEASURE**. Columns with VARCHAR, BOOL, or date/time data types are assigned the type **ATTRIBUTE**.

Usually the default setting for column type works fine. But occasionally you'll need to change a **MEASURE** to an **ATTRIBUTE**. Examples of numeric values for which mathematical operations are not meaningful include:

-   ID numbers
-   Key values that are primarily used for joining tables
-   Product number or SKU
-   Sports team member jersey number
-   Year, when separate from a date (e.g. 1999, 2000)

You can change the column type by modifying the **Column Type** setting.

1.   Find the **Column Type** for the column whose type you want to change. If you are editing the model file, use the setting **Type**.
2.   Change it to either **MEASURE** or **ATTRIBUTE**.
3.   Save your changes.



## Related information  

- [Model the data for searching](semantic-modeling.html#)
- [Hide column or define a column synonym](change-visibility-synonym.html#)
