---
title: [Import CSV files with tsload]
tags:
keywords: tbd
last_updated: tbd
summary: "The tsload command is a common way to import data from a CSV file."
sidebar: mydoc_sidebar
---
Use ThoughtSpot Loader (`tsload`) to load data from a CSV text file into an existing table in ThoughtSpot. ThoughtSpot Loader (`tsload`) is a common way to import data. When using `tsload`, you can load larger datasets and make the loading process repeatable through scripting.
The `tsload` command accepts flags that enable you to specify column and row separators, date or timestamp formats, null value representations, and similar parameters. Many of these options have defaults that you can override.

Before importing data, you need to [Build the schema](create_schema.html#).

To use ThoughtSpot Loader, type the command `tsload` followed by the appropriate flags. You can see the list of the flags it accepts in the [ThoughtSpot Loader flag reference](../reference/data_importer_ref.html#) or by issuing `tsload -help`.

tsload supports both full and incremental data loads. For incremental loads, an upsert (insert or update) is performed. If an incoming row has the same primary key as an existing row, it updates the existing row with the new values.

You can integrate tsload into your ETL environment for more automated data loads. Most ETL tools provide the ability to write target data into files and support scripted post-transformation actions that can include loading data into ThoughtSpot. This procedure describes manually loading data, but the tsload commands could be saved as a script:

1.  [Log in to the Linux shell using SSH](../setup/login_console.html#).
2.  Change to the directory where your CSV files are staged.
3.  Invoke tsload, specifying the appropriate flags and your data source file:

    ```
    $ tsload --target_database my_database
           --target_table my_table --alsologtostderr
           --empty_target --source_file my_file.csv --v 1
           --field_separator "separator_char"
    ```

4. Repeat the data load for each of your CSV files.

    This example imports the CSV file "ssbm_customer.csv" into the table CUSTOMER:

    ```
    $ tsload --target_database SAMPLE_DB
           --target_table CUSTOMER --alsologtostderr
           --empty_target --source_file ssbm_customer.csv
           --v 1 --field_separator "|"
    ```
