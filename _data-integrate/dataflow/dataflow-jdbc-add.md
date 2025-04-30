---
title: [Add a JDBC connection]
last_updated: 11/25/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
With DataFlow, you can add a connection to any database when you have the appropriate JDBC driver.

To add a new connection through JDBC, follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the JDBC **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-connection-type)<br/>Choose the JDBC connection type.
   * [Driver name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-driver-name)<br/>Specify the JDBC driver class for the database connection.
   * [JDBC URL]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-jdbc-url)<br/>Specify the jdbc url for database connection.
   * [JDBC driver jar]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-jdbc-driver-jar)<br/>Upload the jdbc jar available in local system.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-jdbc-options)<br/>Select if custom JDBC options to be appended to the JDBC extract command
   * [Key]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-key)<br/>Define the key parameter
   * [Value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-value)<br/>Specify the value for key paramter
   * [Encrypt]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-encrypt)<br/>Enrypt the details for secured authentication<br/>Select the check-box to enrypt the details
   * [Schema object name enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#dataflow-jdbc-conn-schema-object-name-enclosing-character)<br/>Specify the schema object name enclosing character.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-jdbc-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
