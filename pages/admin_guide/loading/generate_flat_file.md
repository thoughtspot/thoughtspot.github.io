---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Generate CSV files with the data to be loaded

The first step in loading data is to obtain or create one or more flat files that contain the data to be loaded into ThoughtSpot.

Your data should be in a CSV \(comma separated values\) or delimited flat file before you load it. A CSV file is a text file made up of data fields separated by a delimiter and optionally enclosed with an enclosing character. If your data contains multiple tables, you'll have a separate CSV for each table.

A CSV file contains:

-   A delimiter that marks the separation between fields in the data. The delimiter is usually comma, but it can be any character.
-   Fields optionally enclosed with double quotes.

Use these guidelines when creating the CSV file:

-   Columns in the CSV file must be in the same order as defined in the target table.
-   If the CSV contains column headers, they must match the column names in the database exactly.
-   Often a | \(pipe\) or tab is used as the delimiter, because it may be less likely to occur within the data values.
-   When a field contains a double quote, it must be escaped with the character specified in the escape character argument in tsload.
-   When a field contains the delimiter, the field must be enclosed in double quotes.

    For more information about CSV files and the rules for creating them, check [http://en.wikipedia.org/wiki/Comma-separated\_values](http://en.wikipedia.org/wiki/Comma-separated_values).


1.   If your source is another database: 
    1.   Connect to the source database. 
    2.   Export each of the tables you wish to import into ThoughtSpot as a CSV file, specifying a delimiter of comma, | \(pipe\) or tab. 
2.   If your source is an Excel spreadsheet, save it as a CSV file. 

