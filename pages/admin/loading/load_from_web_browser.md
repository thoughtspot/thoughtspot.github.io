---
title: [Load data through the Web browser]
tags: [Data_Integ_User_Upload,Data_Integ_tsload]
keywords: "csv,data load"
last_updated: tbd
summary: "The simplest way to load data is to upload a CSV or Excel file from the ThoughtSpot Web interface. "
sidebar: mydoc_sidebar
---
Loading data through the Web browser is recommended for smaller tables (under 50MB) with simple relationships between them.  This method is recommended for small, one time data loads. Using this method, the data schema is created for you automatically.

Your data should be in a CSV (comma separated values) or delimited flat file before you load it. A CSV file is a text file made up of data fields separated by a delimiter and optionally enclosed with an enclosing character. If your data contains multiple tables, you'll have a separate CSV for each table.

## Create a CSV file

The first step in loading data is to obtain or create one or more flat files that contain the data to be loaded into ThoughtSpot.
CSV is a common format for transferring data between databases. Your CSV file may be in another database.  Your ETL (extract, transform, load) process will typically generate CSV files.  Some applications such as Microsoft Excel or Google Sheets can output CSV formatted files.

If your source is another database:

1.   Connect to the source database.
2.   Export each of the tables you wish to import into ThoughtSpot as a CSV file, specifying a delimiter of comma, `|` (pipe) or tab.

If your source is an Excel spreadsheet or Google Sheet, save or download it as a CSV file.

## Formatting the CSV

A CSV file contains a delimiter that marks the separation between fields in the data. The delimiter is usually comma, but it can be any character.
The file also contains fields optionally enclosed with double quotes. Use these guidelines when creating the CSV file:

-   Columns in the CSV file must be in the same order as defined in the target table.
-   If the CSV contains column headers, they must match the column names in the database exactly.
-   Often a `|` (pipe) or tab is used as the delimiter, because it may be less likely to occur within the data values.
-   When a field contains a double quote, it must be escaped with the character specified in the escape character argument in `tsload`.
-   When a field contains the delimiter, the field must be enclosed in double quotes.

ThoughtSpot supports a wide range of [date and timestamp formats](../../reference/date_formats_for_loading.html#) in the CSV file.

If you are loading a fact table that joins to dimension tables, you must load the fact table first, and then the dimension tables. The joining key must be a single column of unique values in the dimension table. NULL values in the fact table will not be able to be joined.

Blank values in user uploaded CSV files are interpreted as NULL values. These include the values (case insensitive):

-   `NULL`
-   `\N`
-   `NA`
-   `N/A`
-   [space]


## Load the CSV File

Any user who belongs to a group that has the privilege **Has administration privileges** or **Can upload user data** can upload their own data from the browser.

To load the CSV or Excel file into ThoughtSpot:

1.   [Log in to ThoughtSpot from a browser](../setup/accessing.html#).
2.   Click on **Data**, on the top navigation bar.

     ![](../../shared/conrefs/../../images/data_icon.png "Data")

3.   Click the **Actions** button in the upper right corner, and select **Upload Data**.

     ![](../../images/new_imported_data.png "Upload data")

4.   Upload the CSV or Excel file by doing one of these options:
    -   Click on **Browse your files** and select the file.
    -   Drag and drop the file into the drop area.
5. Answer the question **Are the column names already defined in the file header?**
6. Answer the question **Are the fields separated by?** Click **Next**.
7. Click on the column header names to change them to more useful names, if you'd like. Click **Next**.
8. Review the automatically generated data types for each column, and make any changes you want.
  There are four data types: Text, Integer, Decimal, and Date.
9. Click **Import**.
10. Click **Link to Existing Data** if you want to link the data you uploaded to the data in another table or worksheet.
    Or click **Search** if you want to begin a new search.

## Related information

For more information about CSV files and the rules for creating them, see the [Comma-separated_values](http://en.wikipedia.org/wiki/Comma-separated_values) on Wikipedia.
