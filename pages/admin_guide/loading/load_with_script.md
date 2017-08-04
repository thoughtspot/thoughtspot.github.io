---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Use a script to load data

If you need to load data from multiple CSV files, create a script to automate the process. You can also use a similar script to automate recurring data feeds.

The data loading script is a text file that contains all the calls to tsload for loading the data from your CSV files.

The example script shown here uses the `cat` command to read the data file, and pipes it to tsload. When creating and testing your script, you may wish to replace each `cat` with `cat -10`, to load only the first ten lines of each file. This allows you to quickly run a test of your script. When the test succeeds for all the data files, you can then remove each `-10`, so the complete files will load when you run the script again.

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#). 
2.   Navigate to the directory that contains your CSV files and open a new file in a text editor. 
3.   Type in the commands to load the data. This example shows commands to load three files: 

    ```
    cat Players.csv | tsload 
       --target_database baseball --target_table "players" 
       --empty_target --field_separator "," 
       --max_ignored_rows 10 --bad_records_file bad_records.txt
       --has_header_row --alsologtostderr --null_value ""
    
    cat AllstarFull.csv | tsload 
       --target_database baseball --target_table "allstarfull" 
       --empty_target --field_separator "," 
       --max_ignored_rows 10 --bad_records_file bad_records.txt 
       --has_header_row --alsologtostderr --null_value ""
    
    cat Appearances.csv | tsload 
       --target_database baseball --target_table "appearances" 
       --empty_target --field_separator "," 
       --max_ignored_rows 10 --bad_records_file bad_records.txt 
       --has_header_row --alsologtostderr --null_value ""
    ```

4.   Save the file. 
5.   Run the script: 

    ```
    $ ./load_baseball_data.sh
    ```


**Related information**  


[ThoughtSpot Loader flag reference](../reference/data_importer_ref.html#)

