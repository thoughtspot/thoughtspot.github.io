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

    <details>
      <summary>See the <strong>Create connection</strong> screen for SQL Server</summary>
        <p>
        <img src="../../images/dataflow-sql-server-create.png" alt="Create SQL Server connection" /></p>
    </details>

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-connection-type)<br/>Choose the SQL Server connection type.<br/>Mandatory field.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-host)<br/>Specify the hostname or the IP address of the SQL Server system<br/>Mandatory field.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-port)<br/>Specify the port associated with the SQL Server system<br/>Mandatory field.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-user)<br/>Specify the user id that will be used to connect to the SQL Server system. This user should have necessary privileges to access the data in the databases.<br/>Mandatory field.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-password)<br/>Specify the password for the User<br/>Mandatory field.
    * [Instance]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-instance)<br/>Specify an instance with all SQL Server databases run by a single SQL Server service<br/>Optional field.
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-conn-version)<br/>Specify the SQL Server version being connected to<br/>Optional field.
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#dataflow-sql-server-sync-jdbc-options)<br/>Specify the options associated with the JDBC URL.<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-reference.html#connection-properties).

5. Click **Create connection**.   
