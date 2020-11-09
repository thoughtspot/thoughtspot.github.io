---
title: [Add an SQL Server database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an SQL Server database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the SQL Server **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-connection-type)<br/>Choose the SQL Server connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-host)<br/>Specify the hostname or the IP address of the SQL Server system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-port)<br/>Specify the port associated with the SQL Server system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-user)<br/>Specify the user id that will be used to connect to the SQL Server system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-password)<br/>Specify the password for the User.
    * [Instance]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-instance)<br/>Specify an instance with all SQL Server databases run by a single SQL Server service
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-version)<br/>Specify the SQL Server version.
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-sync-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
