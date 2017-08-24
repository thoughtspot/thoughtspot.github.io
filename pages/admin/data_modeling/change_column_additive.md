---
title: [Change the additive setting for a column]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Your data may contain a column with a numeric data type that you have defined as an **ATTRIBUTE** rather than a **MEASURE** (such as age). You can allow aggregations on the values by changing the value of the **Additive** setting.

The setting **Additive** only applies to columns that have both:

-   A numeric data type (FLOAT, DOUBLE or INTEGER) or a date data type (DATE, DATETIME, TIMESTAMP, or TIME).
-   The type **ATTRIBUTE** in the modeling file.

When an result is returned from a search, you also get a list of options for each column on the left side of the screen. For numeric columns with the **Additive** setting of **NO**, the count listing includes:

-   **UNIQUE COUNT OF**
-   **TOTAL COUNT OF**

![](../../images/model_additive_model_false_options.png)

If you want aggregates to be added to the options for these columns, you need to change the **Additive** setting to **YES**. After you make this change, these options will be offered:

-   **TOTAL OF**
-   **AVG OF**
-   **STD DEVIATION OF**
-   **VARIANCE OF**
-   **TOTAL COUNT OF**
-   **UNIQUE COUNT OF**
-   **MIN OF**
-   **MAX OF**

![](../../images/model_additive_model_true_options.png)

To change the **Additive** setting:

1.   Find the column whose additive setting you want to change and select its **Additive** value.
2.   Change the value to one of these:
    -   **YES** or **NO**, if using the Web interface.
    -   **TRUE** or **FALSE**, if using the model file.
3.   Save your changes.

**Parent topic:** [Data modeling settings](../../admin/data_modeling/data_modeling_settings.html)

**Related information**  


[Model the data for searching](semantic_modeling.html#)
