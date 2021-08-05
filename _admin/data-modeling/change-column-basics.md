---
title: ["Set column name, description, and type"]

last_updated: 10/1/2020
summary: "Modeling includes setting basic information for a data column such as its name, description, and type."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

When you model your data, you set basic information for data columns, such as a column's **NAME**, **DESCRIPTION**, and
**TYPE**. All of these can influence how a user experiences your data. For
example, the **DESCRIPTION** appears as a "tip" when a user hovers over a
column. It helps users understand where the data they are searching comes
from.

{% include note.html content="When you change column information such as column names in the UI or in the model file, you do not change this information on the physical table in your database. You only change your metadata. This is why you can have column names with spaces in them in the UI, since physical column names do not support spaces." %}

## Data modeling from the UI
To model your data columns from the ThoughtSpot UI, follow these steps:
1. Navigate to the **Data** tab from the top navigation bar.
2. Click on the data source that you would like to update.
3. Click **Edit Worksheet** in the top right corner of the screen.

    ![Edit worksheet]({{ site.baseurl }}/images/worksheet-edit.png "Edit worksheet")

4. Update your data columns.

## Change the column name

The **Column Name** (UI)/ **ColumnName** (model file) parameter is the name users type to add
a column to their search. Change these column names
in ThoughtSpot to make them more meaningful to users.

The model file contains a row for each column in your data set. It isn't unusual
to have tens of thousand of rows in this file. You can change all or a subset of
rows. You can edit the file to leave the heading rows and only those rows you
want to change. This can make the file more convenient to work with.

The default column name is the name you gave the column when you defined the table in the
database or imported the CSV file from the browser.

To update the column name, follow these steps:

1. Find the column name you want to change, either on the ThoughtSpot application or in the model file.
2. Type in the new column name.
3. Save your changes.

{% include note.html content="If any of your column names or values contain leading or trailing whitespaces, you must remove these spaces before and after column names and values when loading or modeling data. The ThoughtSpot search bar does not accept column names or values with leading or trailing whitespaces. If you must keep these spaces, tell your users to add a delimiter for the search bar to accept them. For example, if you have a column named <code> Sales </code>, with a space before and after the word Sales, you must enter it in the search bar as <code>' Sales '</code>, with single quotes surrounding the name. Otherwise, ThoughtSpot automatically removes the extra spaces and does not recognize the column name." %}

## Change column description

The **Description** (UI)/ **ColumnDescription** (model file) parameter is an optional description
for a column. You can provide a description for a specific
column, to provide additional information for users about the data it contains.
When a user hovers over the column, a tooltip will show this description.

To create a column description:

1. Find the column description you want to change, either on the ThoughtSpot application or in the model file.
2. Enter a new description.
4. Save your changes.

## Change column type

The **Column Type** (UI)/ **ColumnType** (model file) parameter describes the kind of data a
column stores. This is set automatically upon defining the table, but in some
cases, you may want to change the type. There are two types of columns:

- `ATTRIBUTE` contains a characteristic or trait associated with your data, such as `name`, `address`, or `id number`.
- `MEASURE` contains a numeric value that can be compared in a meaningful way using math, such as a count or measurement, like `sales`.

When you create a new table, the default column type is set according to the
**Data Type** defined for each column. By default,
columns with numeric data types (`FLOAT`, `DOUBLE`, `INT`, or `BIGINT`) are
assigned the type `MEASURE`. Columns with `VARCHAR`, `BOOL`, or date/time data
types are assigned the type `ATTRIBUTE`.

Usually the default setting for column type works fine. But occasionally, you must change a `MEASURE` to an `ATTRIBUTE`. Examples of numeric values for
which mathematical operations are not meaningful include:

- ID numbers
- Key values that are primarily used for joining tables
- Product number or SKU
- Sports team member jersey number
- Year, when separate from a date (e.g. 1999, 2000)
- Zipcodes

These values are numbers, but you would not do math on them. For example, it is not meaningful to add two zipcodes together.

To change the column type:

1. Find the column type you want to change, either on the ThoughtSpot application, or in the model file.
2. Change it to either `MEASURE` or `ATTRIBUTE`.
3. Save your changes.

## Related information  

- [Model the data for searching]({{ site.baseurl }}/admin/data-modeling/about-data-modeling-intro.html)
- [Hide column or define a column synonym](change-visibility-synonym.html#)
