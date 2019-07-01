---
title: [Import CSV files with tsload]
keywords: tbd
last_updated: tbd
summary: "The tsload command is a common way to import data from a CSV file."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Use ThoughtSpot Loader (`tsload`) to load data from a CSV text file into an existing table in ThoughtSpot. ThoughtSpot Loader (`tsload`) is a common way to import data. When using `tsload`, you can load larger datasets and make the loading process repeatable through scripting.
The `tsload` command accepts flags that enable you to specify column and row separators, date or timestamp formats, null value representations, and similar parameters. Many of these options have defaults that you can override.

Before importing data, you need to [Build the schema](create-schema.html#).

To use ThoughtSpot Loader, type the command `tsload` followed by the appropriate flags. You can see the list of the flags it accepts in the [ThoughtSpot Loader flag reference]({{ site.baseurl }}/reference/data-importer-ref.html#) or by issuing `tsload -help`.

tsload supports both full and incremental data loads. For incremental loads, an upsert (insert or update) is performed. If an incoming row has the same primary key as an existing row, it updates the existing row with the new values.

You can integrate tsload into your ETL environment for more automated data loads. Most ETL tools provide the ability to write target data into files and support scripted post-transformation actions that can include loading data into ThoughtSpot. This procedure describes manually loading data, but the tsload commands could be saved as a script:

1.  Log in to the Linux shell using SSH.
2.  Change to the directory where your CSV files are staged.
3.  Use the following syntax to invoke `tsload`, specifying the appropriate flags and your data source file:

    ```
    $ tsload --target_database=my_database
           --target_table=my_table --alsologtostderr
           --empty_target --source_file=my_file.csv --v 1
           --field_separator="separator_char"
    ```
    This example imports the CSV file `ssbm_customer.csv` into the table CUSTOMER:

    ```
    $ tsload --target_database=SAMPLE_DB
           --target_table=CUSTOMER --alsologtostderr
           --empty_target --source_file=ssbm_customer.csv
           --v 1 --field_separator "|"
    ```
4. Once the processing begins, you'll see messages to indicate the progress and then two summary messages after the load is complete.

    ```
    Started processing data row
    Source has 32 data rows, ignored row count 0
    Waiting for rows to commit...(please wait)

    Source summary
    --------------
    Data source:                     ssbm_customer.csv
    Source data format:              csv
    Header row?:                     no
    Tokenizer Options:               escape_char: "" field_separator: "|" enclosing_char: "\""
    Date format:                     %Y%m%d
    Date time format:                %Y%m%d %H:%M:%S
    Flexible mode?:                  no

    Load summary
    ------------
    Target table:                    CUSTOMER
    Should empty target?:            yes
    Status:                          Successful
    Rows total:                      32
    Rows successfully loaded:        30
    Rows failed to load:             0
    Rows duplicate/omitted:          2
    % of Rows successfully loaded:   93.75 %
    Load Rate (MB/s):                0.00 MB/s
    Load Rate (Rows/s):              3.53 Rows/s
    Start time (Wallclock):          Tue Jan 29 09:09:07
    End time (Wallclock):            Tue Jan 29 09:09:08
    Total load time = 1.13 seconds = 0.02 minutes = 0.00 hours
    Data size = 50 bytes = 0.06 KB = 0.00 MB
    ```
5. In the load summary, be sure to check the **Rows duplicate/omitted** number. This indicates the number of rows (if any) that were omitted from loading because they did not satisfy the table constraints. A common cause of this would be a duplicate primary key. If any rows were omitted, review your CSV file, make the required adjustments, and then load it again.

6. Once your file has been loaded properly, repeat this process to load data from any additional CSV files.

## Loading data from an AWS S3 bucket

If you have data in .csv format stored in an AWS bucket, you can load it directly to ThoughtSpot.

1.  Log in to the Linux shell using SSH.

2.  Use the following syntax to invoke `tsload`, specifying the appropriate flags and your data source file:

    ```
    $ tsload --source_file "/aws/default/<my_file_in_aws>"
           --target_database "<my_database_in_ThoughtSpot>" --target_table "<my_table_in_the_database_in_ThoughtSpot>"
    ```       
    This example imports the CSV file `teams.csv` into the table `teams` in the database `temp`:

    ```
    $ tsload --source_file "/aws/default/teams.csv"
           --target_database "temp" --target_table "teams"
    ```       
3. After running the `tsload` command, you are prompted to enter additional AWS S3 information:

    * AWS S3 bucket name

    * AWS S3 region

      **Note:** You must use your Amazon S3 **Region** rather than **Region Name**. For example, if your Region Name is **US West (N. California)** you would use the Region: **us-west-1**. For a list of AWS S3 regions, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">AWS Regions and Endpoints.</a>

    * AWS S3 credentials (accesskey;secret_key)

    * AWS S3 root (prefix for S3 object search path)

    Optionally, these four pieces of information can be inserted at the beginning of the command (in step 2), using the following flags: <br>
    * `--aws_s3_bucket "<bucket name>"` <br>
    * `--aws_s3_region_name "<region name>"` <br>
    * `--aws_s3_credentials "<credentials>"` <br>
    * `--aws_s3_root "<search path>"`

4.  Once the processing begins, you'll see messages to indicate the progress and then source and load summary messages after the load is complete.    
