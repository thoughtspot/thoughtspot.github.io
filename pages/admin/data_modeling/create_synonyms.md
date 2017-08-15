---
title: [Create synonyms for a column]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
If you want to allow searching using more than one name for a column, you can create synonyms for it. This is helpful when different departments refer to the data using different terminology, for example.

When users search a data source, they might try typing different words to try to retrieve a particular column. This could be due to different groups in your organization using different terms for the same data. Or maybe your users just intuitively use different words when searching for that item. Using synonyms allows them to access the data even if the term they choose isn't the same as the actual column name.

You can set column synonyms for columns in tables, user imported data, and worksheets. Note that the returned table or chart uses the actual column name, but the search bar will still reflect the term the user typed in (the synonym).

To create a column description:

1.   Find the column for which you want to add synonyms, and select its **Synonyms**.
2.   Type in a comma separated list of the synonyms you want to add. If a synonym is more than one word, it must be enclosed in double quotes. If you are using the Web interface, you would type:

    ```
    profit,"gross profit"
    ```

    If you are using the model file, the list of synonyms must be enclosed in square brackets. For example:

    ```
    [profit, "gross profit"]
    ```

3.   Save your changes.

**Parent topic:** [Data modeling settings](../../admin/data_modeling/data_modeling_settings.html)

**Related information**  


[Model the data for searching](semantic_modeling.html#)
