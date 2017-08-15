---
title: [Append data from a web browser]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can append data to your existing system tables through the ThoughtSpot application, even if the tables were initially loaded using Data Connect or tsload.

Loading data from a Web browser requires your data to be in a CSV (comma separated values) or a native Excel file. The file must have the same structure as the table it is being loaded into, including number and type of columns, in the same order as the target table.

Any user who belongs to a group that has the privilege **Has administration privileges** or **Can upload user data** will be able to upload their own data from the browser.

CSV is a common format for transferring data between databases. Your ETL (extract, transform, load) process will typically generate CSV files. You can also create a CSV file from a Microsoft Excel spreadsheet by opening the spreadsheet in Excel, choosing **Save As** and selecting CSV.

ThoughtSpot supports a wide range of [date and timestamp formats](../reference/date_formats_for_loading.html#) in the CSV file.

Loading data through the Web browser is recommended for smaller tables (under 50MB) with simple relationships between them. If you are loading a fact table that joins to dimension tables, you must load the fact table first, and then the dimension tables. The joining key must be a single column of unique values in the dimension table. NULL values in the fact table will not be able to be joined.

Blank values in user uploaded CSV files are interpreted as NULL values. These include the values (case insensitive):

-   NULL
-   \\N
-   NA
-   N/A
-   \[space\]

To append data into ThoughtSpot:

1.   [Log in to ThoughtSpot from a browser](../setup/accessing.html#).
2.   Click on **Data**, on the top navigation bar.

     ![](../../shared/conrefs/../../images/data_icon.png "Data")

3.   Click the on the table you would like to append data to.
4.   Click the **Load data** button.

     ![](../../images/load_data_icon.png "Load data")

5.   Upload the CSV or Excel file by doing one of these options:
    -   Click on **Browse your files** and select the file.
    -   Drag and drop the file into the drop area.
6.   Answer the question **Are the column names already defined in the file header?**
7.   Answer the question **Do you want to append to the existing data or overwrite it?**
8.   Answer the question **Are the fields separated by?** Click **Next**.
9.   Click on the column header names to change them to more useful names, if you'd like. Click **Next**.
10.  Review the automatically generated data types for each column, and make any changes you want. There are four data types: Text, Integer, Decimal, and Date.
11.  Click **Import**.
12.  Click **Link to Existing Data** if you want to link the data you uploaded to the data in another table or worksheet. Or click **Search** if you want to begin a new search.

**Parent topic:** [Load and manage data](../../admin/loading/loading_intro.html)
