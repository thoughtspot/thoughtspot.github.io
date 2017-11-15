---
title: [Change the index type]
keywords: tbd
last_updated: tbd
summary: "ThoughtSpot indexes column names and unique column values. The indexes are used to dynamically generate suggestions in the search bar when typing a search."
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---
A column's index influences the suggestions that appear for that column in
search. You can modify a specific column's **INDEX TYPE** in the **DATA > Tables >
Columns** page or to set a system-wide **Index** value in the modeling file.

{% include warning.html content="If a column has a very large free text values, ThoughtSpot does not recommended
to changing the column indexing. These should not to be indexed, because
indexing on these values is not useful and may generate confusing suggestions." %}

## Default indexing

The default behavior of indexing is as follows:

-   All column names are indexed using their **ColumnName** value.
-   Values for columns with the column type of `MEASURE` are not indexed.
-   Values for columns with the data type of **DATE** are not indexed.
-   Columns that contain a large amount of free-form text (i.e. the number of characters in more than a few of the fields is more than 50) are indexed as `PREFIX_ONLY` by default.
-   Short strings (like a `firstname` column) are indexed using `PREFIX_AND_SUBSTRING` by default, which indexes both prefix and substrings.

You can override the default behavior by editing the modeling file to change the
**Index** value for any columns that should be indexed differently. There are
several different supported index types:

|Index type|Description|
|----------|-----------|
|`DEFAULT`|This is the default value. The default indexing behavior will apply to the column values, depending on their type. `PREFIX_AND_SUBSTRING` for short values and `PREFIX_ONLY` for long values and free-form text.|
|`DONT_INDEX`|Prevents indexing on the column values.|
|`PREFIX_AND_SUBSTRING`|Allows full indexing such that prefix and sub-string search both work for the column values.|
|`PREFIX_ONLY`|Allows indexing such that only prefix search works for the column values.|
|`PREFIX_AND_WORD_SUBSTRING`|Allows indexing such that only prefix search works for each word of a multi-word string, for the column values.|


## Make a change

1. Find the column whose index type you want to modify
2. Set its **Index Type**.

   If you are using the model file, double click in the **Index** cell, and type
   in the index type you want to use.  Consider a column in which there are four
   values 'ThoughtSpot', 'Thought', 'Spot' and 'Thought Spot'. If you search for
   'sp', depending on the setting for indexing, the column value search result
   suggestions will vary:

   |Index field value|Search bar suggestions|
   |---------------------|----------------------|
   |`DEFAULT`|'ThoughtSpot', 'Spot' and 'Thought Spot'|
   |`DONT_INDEX`|No suggestions.|
   |`PREFIX_AND_SUBSTRING`|'ThoughtSpot', 'Spot' and 'Thought Spot'|
   |`PREFIX_ONLY`|'Spot'|
   |`PREFIX_AND_WORD_SUBSTRING`|'Spot' and 'Thought Spot'|

3. Save your changes.


## Related information  

[Model the data for searching](semantic-modeling.html#)
