---
title: [Supported SQL commands]
keywords: odbc,jdbc
summary: "The ThoughtSpot connection drivers support a limited set of SQL commands."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ODBC and JDBC drivers support a limited set of SQL commands. When developing
software that uses a ThoughtSpot ODBC driver, use this reference of supported
commands. This reference is intended for developers using other tools (ETL,
etc.) to connect to ThoughtSpot through the ODBC or JDBC driver.

{% include note.html content="ThoughtSpot displays `VARCHAR` fields using lower case, regardless of what the original casing of your loaded data is." %}

## ODBC

These SQL commands are supported for ODBC:

* `CREATE TABLE`

    Creates a table with the specified column definitions and constraints. The table is replicated on each node.

     ```
    CREATE TABLE country_dim (id_number int, country varchar, CONSTRAINT PRIMARY KEY (id_number));
    ```

* `INSERT`

    Creates placeholders in the table to receive the data.

    ```
    INSERT INTO TABLE country_dim (?, ?);
    ```

* `DELETE FROM <table>`

    Deletes `ALL` rows from the specified table. Use the `WHERE` clause to specify only certain rows to be deleted. Example: You could remove all data for sales before a certain date to free up space in ThoughtSpot.

    ```
    DELETE FROM country_dim;
    ```
* `SELECT <cols_or_expression> FROM <table_list> [WHERE <predicates>] [GROUP BY <expressions>]``[ORDER BY <expressions>]`

    Fetches the specified set of table data.

    ```
    SELECT id_number, country FROM country_dim WHERE id_number > 200;
    ```

## JDBC

`TRUNCATE` is not supported. Instead, use `DELETE FROM TABLE` which is
functionally equivalent to “truncate table” in terms of table compression and so
forth.
