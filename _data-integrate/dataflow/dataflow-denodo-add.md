---
title: [Add a Denodo connection]
last_updated: 10/22/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the Azure Data Lake file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the File **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#dataflow-denodo-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#dataflow-denodo-conn-connection-type)<br/>Choose the Denodo connection type.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#dataflow-denodo-conn-host)<br/>Specify the hostname or the IP address of the system.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#dataflow-denodo-conn-port)<br/>Specify the port associated with the system.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#dataflow-denodo-conn-user)<br/>Specify the user who connects to the system. This user must have data access privileges.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#dataflow-denodo-conn-password)<br/>Specify the password for the User.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#dataflow-denodo-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-denodo-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
