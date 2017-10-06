---
title: [Hide a column or define a synonym]
tags:
keywords: "data,synonym,hide"
last_updated: tbd
summary: "Hide a column from users or make it easier to find by assigning a synonym."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can hide columns from users in ThoughtSpot without dropping them from the database. This is common when the data contains identifier columns that are used to join tables, but which do not have any meaning to users. Alternatively, you can allow searching using more than one name for a column by creating synonyms for it. This is helpful, for example, when different departments refer to the data using different terminology.

## Hide a column

By default, all columns in a data source ware shown in ThoughtSpot. To hide the column names, change the **HIDDEN** setting.

As the number of columns in the dataset increases, the search experience requires more effort. Users have to navigate through larger numbers of columns to choose the correct one. There might also be some columns in the dataset that you don’t want to expose to the users. To hide these columns, you can set the value of the **HIDDEN** column to **YES**.

1. Find the **HIDDEN** setting for the column you want to hide.
2. Set its value to **YES**.
   If you are editing the model file, use the **Hide** setting, and set it to **TRUE**.
3. Save your changes.

## Create synonyms for a column

When users search a data source, they might try typing different words to try to retrieve a particular column. This could be due to different groups in your organization using different terms for the same data. Or maybe your users just intuitively use different words when searching for that item. Using synonyms allows them to access the data even if the term they choose isn't the same as the actual column name.

You can set column synonyms for columns in tables, user imported data, and worksheets. Note that the returned table or chart uses the actual column name, but the search bar will still reflect the term the user typed in (the synonym).

To create a column description:

1. Find the column for which you want to add synonyms.
2. Select its **Synonyms**.
3. Type in a comma separated list of the synonyms you want to add.
   If a synonym is more than one word, it must be enclosed in double quotes. If you are using the Web interface, you would type:

    ```
    profit,"gross profit"
    ```

    If you are using the model file, the list of synonyms must be enclosed in square brackets. For example:

    ```
    [profit, "gross profit"]
    ```

4. Save your changes.


## Related information  

[Model the data for searching](semantic-modeling.html#)
