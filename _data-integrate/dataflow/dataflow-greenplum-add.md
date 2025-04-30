---
title: [Add a Greenplum database connection]
last_updated: 3/22/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Greenplum database using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Greenplum **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-connection-type)<br/>Choose the Greenplum connection type.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-host)<br/>Specify the hostname or the IP address of the Greenplum system
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-port)<br/>Specify the port associated to the Greenplum system
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-user)<br/>Specify the user id that will be used to connect to the Greenplum system. This user should have necessary privileges to access the data in the databases.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-password)<br/>Specify the password for the User
   * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-database)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated.
   * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-version)<br/>Specify the Greenplum version being connected to
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#dataflow-greenplum-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
