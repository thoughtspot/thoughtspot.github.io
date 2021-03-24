---
title: [Add an Exadata database connection]
last_updated: 3/22/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an Exadata database using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Exadata **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-connection-type)<br/>Choose the Exadata connection type.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-host)<br/>Specify the hostname or the IP address of the Exadata system
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-port)<br/>Specify the port associated to the Exadata system
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-user)<br/>Specify the user id that will be used to connect to the Exadata system. This user should have necessary privileges to access the data in the databases.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-password)<br/>Specify the password for the User
   * [Service name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-service-name)<br/>Service name is the TNS alias that you give when you remotely connect to your database and this Service name is recorded in Tnsnames.ora file on your clients and it can be the same as SID and you can also give it any other name you want
   * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-version)<br/>Specify the Exadata version being connected to
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.
   
   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
