---
title: [Add a Splunk connection]
last_updated: 3/22/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Splunk file system using ThoughtSpot DataFlow.

To add a new connection to Splunk, follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Splunk **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-conn-connection-type)<br/>Choose the Splunk connection type.
   * [Server name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-conn-server-name)<br/>Specify the hostname or the IP address of the Splunk system
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-conn-port)<br/>Specify the port associated to the Splunk system
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-conn-user)<br/>Specify the user id that will be used to connect to the Splunk system. This user should have necessary privileges to access the data in the databases.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-conn-password)<br/>Specify the password for the User
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#connection-properties) for details, defaults, and examples.

5.  Click **Create connection**.   
