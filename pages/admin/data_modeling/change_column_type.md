---
title: [Change the column type (ATTRIBUTE or MEASURE)]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Columns have a **Column Type** based on the kind of data they store. This is set automatically upon defining the table, but in some cases, you may want to change the type.

There are two types of columns:

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

**Parent topic:** [Data modeling settings](../../admin/data_modeling/data_modeling_settings.html)

## Related information  


[Model the data for searching](semantic_modeling.html#)
