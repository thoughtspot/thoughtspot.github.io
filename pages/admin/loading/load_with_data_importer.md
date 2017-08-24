---
title: [Load data with ThoughtSpot Loader]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
ThoughtSpot Loader (tsload) is a common way to import data. When using tsload, you can load larger datasets and make the loading process repeatable through scripting.

There are several steps to loading data using ThoughtSpot Loader:

1.   [Generate CSV files with the data to be loaded](generate_flat_file.html#).
2.   [Build the schema](create_schema.html).
3.   [Import CSV files with ThoughtSpot Loader](use_data_importer.html#).

-   **[Import CSV files with ThoughtSpot Loader](../../admin/loading/use_data_importer.html)**  
Use ThoughtSpot Loader (tsload) to load data from a CSV text file into an existing table in ThoughtSpot. tsload accepts flags that enable you to specify column and row separators, date or timestamp formats, null value representations, and similar parameters. Many of these options have defaults that you can override.
-   **[Use a script to load data](../../admin/loading/load_with_script.html)**  
If you need to load data from multiple CSV files, create a script to automate the process. You can also use a similar script to automate recurring data feeds.
-   **[Bulk load files in parallel](../../admin/loading/parallel_tsload.html)**  
If you have a very large data file that takes a long time to load, you can reduce the load time by splitting it up into multiple files and loading them in parallel using multiple invocations of tsload.

**Parent topic:** [Load and manage data](../../admin/loading/loading_intro.html)
