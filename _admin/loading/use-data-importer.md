---
title: [Import CSV files with tsload]

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
4. After the processing begins, you can see messages that indicate the progress, and then two summary messages after the load is complete.

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

6. After correctly loading your file, repeat this process to load data from any additional CSV files.

## Loading data from an AWS S3 bucket

If you have data in .csv format stored in an AWS bucket, you can load it directly to ThoughtSpot.

### (5.3.1 and later) Assigning S3 read-only role to your EC2 instance
If your cluster is running 5.3.1 or later, you can assign an S3 read-only role to your ThoughtSpot EC2 instance(s) so the instance(s) can access the S3 bucket from which you want to load the data. This eliminates the need to enter the AWS S3 credentials when loading your data. For details, see: [Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html){:target="_blank"} in Amazon's AWS documentation.

{% include note.html content="If you are using S3 for persistent storage, and assigned the *ec2rolewithfulls3access* IAM role to your instance, you do not need to complete this step." %}

To load data from an AWS S3 bucket, do the following:

1.  Log in to the Linux shell of your AWS instance using SSH.

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

    * AWS S3 credentials (accesskey;secret_key)__*__

    * AWS S3 root (prefix for S3 object search path)

    Optionally, these four pieces of information can be inserted at the beginning of the command (in step 2), using the following flags: <br>
    * `--aws_s3_bucket_name "<bucket name>"` <br>
    * `--aws_s3_region_name "<region name>"` <br>
    * `--aws_s3_credentials "<credentials>"`__*__ <br>
    * `--aws_s3_root "<search path>"`

    {% include note.html content="<b>*<b>AWS S3 credentials is not used in the 5.3.1 release, if an S3 read-only role is assigned to your instance." %}

4.  After the processing begins, progress messages appear, and then source and load summary messages after the load is complete.

## Loading data from a GCP GCS bucket

If you have data in .csv format stored in a GCS bucket, you can load it directly to ThoughtSpot.

### Assigning GCS read-only role to your GCP instance
You can assign a read-only role to your ThoughtSpot GCP instance(s) so the instance(s) can access the GCS bucket from which you want to load the data. This eliminates the need to enter the GCP GCS credentials when loading your data. For details, refer to the storage setting detailed in the GCP [Create an instance]({{ site.baseurl }}/appliance/gcp/launch-an-instance.html#create-an-instance) section.

{% include note.html content="If you are using GCS for persistent storage, you already assigned the *Set access for each API* scope to your instance, and specified *Full* storage access, so you do not need to complete this step." %}

### Create the database and table

1. Log in to the Linux shell of your GCP instance using SSH.
2. Invoke TQL:

    ```
    $ tql

    TQL>
    ```
3. Create the database:

    ```
    TQL> CREATE DATABASE temp;
    ```    
4. Connect to the database:

    ```
    TQL> USE temp;
    ```
5. Create the table

    ```
    TQL> create table teams (id int, name VARCHAR(255));
    TQL> exit;
    ```

To load data from an GCP GCS bucket, do the following:

- Use the following syntax to invoke `tsload`, specifying the appropriate flags and your data source file:

   ```
   $ tsload --source_file /gs/default/team.csv
           --target_database temp
           --target_table teams
           --gs_bucket_name "my_gcs_bucket"
           --has_header_row 2>/dev/null

   $ Header row read successfully
     Source has 2 data rows, has header row, ignored row count 0
     Waiting for rows to commit...(please wait)
     Source summary
     --------------
     Data source:                 /gs/default/team.csv
     Source data format           csv
     Header row?                  yes
     Tokenizer Options:           escape_char: "" field_separator: "," enclosing_char: "\"" null_value: "(null)" trailing_field_separator: false
     Date format:                 %Y%m%d
     Date time format:            %Y%m%d %H:%M:%S
     Flexible mode?               no
     Load summary
     ------------
     Target table:                teams
     Should empty target?         no
     Status:                      Successful
     Rows total:                  2
     Rows successfully loaded:    2
     Rows failed to load:         0
     % of Rows successfully loaded: 100.00 %
     Load Rate (MB/s):             0.00 MB/s
     Load Rate (Rows/s):           1.13 Rows/s
     Start time (Wallclock):       Wed Oct 30 23:30:11
     End time (Wallclock):         Wed Oct 30 23:30:13
     Total load time = 1.78 seconds = 0.03 minutes = 0.00 hours
     Data size = 19 bytes = 0.02 KB = 0.00 MB
     ```

### Verify the table contents

1. Invoke TQL:

    ```
    $ tql

    TQL>
    ```
2. Connect to the database:

    ```
    TQL> USE temp;
    ```        
3. Show the table data:

   ```
   TQL> select * from teams;
   ```
   Table contents are displayed:

   ```
   id|name
   -------
   1|sameer
   2|sandeep
   ```
