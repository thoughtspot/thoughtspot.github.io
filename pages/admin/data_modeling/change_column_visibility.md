---
title: [Hide a column]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can hide columns from users in ThoughtSpot without dropping them from the database. This is common when the data contains identifier columns that are used to join tables, but which do not have any meaning to users.

By default, all columns in a data source will be shown in ThoughtSpot. To hide the column names, change the **Hidden** setting.

As the number of columns in the dataset increases, the search experience requires more effort. Users have to navigate through larger numbers of columns to choose the correct one. There might also be some columns in the dataset that you don’t want to expose to the users. To hide these columns, you can set the value of the **Hidden** column to **YES**.

1.   Find the **Hidden** setting for the column you want to hide, and set its value to **YES**. If you are editing the model file, use the **Hide** setting, and set it to **TRUE**.
2.   Save your changes.

**Parent topic:** [Data modeling settings](../../admin/data_modeling/data_modeling_settings.html)

## Related information  


[Model the data for searching](semantic_modeling.html#)
