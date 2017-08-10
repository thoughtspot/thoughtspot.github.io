# About TQL, the SQL command line interface

ThoughtSpot provides the ThoughtSpot SQL Command Line \(TQL\) for creating, viewing, and managing a schema using SQL. You can run TQL in interactive command line mode, or you can write a script and use TQL to run it.

## TQL basics

The SQL syntax in ThoughtSpot is called TQL for ThoughtSpot SQL. The ThoughtSpot SQL Command Line \(TQL\) runs in an interactive mode. To invoke TQL [Log in to the Linux shell using SSH](../setup/login_console.html#) and type `tql`. At the prompt, type `h` or `help` to see a list of supported commands.

Type your SQL commands on the command line, terminating each command with a semicolon \(`;`\). Commands can span multiple lines. ThoughtSpot supports a limited number of SQL commands, plus some custom SQL extensions. For example, you can specify the number of shards and the distribution key as part of the CREATE TABLE syntax. A full list of supported SQL in TQL is available in the [TQL reference](../reference/sql_cli_commands.html#).

You can also [Write a SQL script to create the schema](create_schema_with_script.html#) in TQL.

**Parent topic:** [Build the schema](../../admin/loading/create_schema.html)

