---
title: [Add an SAP SQL Anywhere database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an SAP SQL Anywhere database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the SAP SQL Anywhere **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-connection-type)<br/>Choose the SAP SQL Anywhere connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-host)<br/>Specify the hostname or the IP address of the Sybase system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-port)<br/>Specify the port associated to the Sybase system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-user)<br/>Specify the user id that will be used to connect to the Sybase system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-password)<br/>Specify the password for the User
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-version)<br/>Specify the version of Sybase.
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#dataflow-sap-sql-anywhere-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-sql-anywhere-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
