---
title: [Add an Amazon Aurora database connection]
last_updated: 7/3/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an Amazon Aurora database using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Amazon Aurora **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#dataflow-amazon-aurora-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#dataflow-amazon-aurora-conn-connection-type)<br/>Choose the Amazon Aurora connection type.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#dataflow-amazon-aurora-conn-host)<br/>Specify the hostname or IP address of the Aurora system.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#dataflow-amazon-aurora-conn-port)<br/>Specify the port associated with Amazon Aurora connections.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#dataflow-amazon-aurora-conn-user)<br/>Specify the user to connect to Amazon Aurora. This user must have data access privileges.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#dataflow-amazon-aurora-conn-password)<br/>Specify the password for the User.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#dataflow-amazon-aurora-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
