---
title: [Add a Teradata database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Teradata database using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Teradata **Connection type**, the rest of the connection properties appear.

    * [Connection Properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-connection-properties)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-connection-type)<br/>Choose the Teradata connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-host)<br/>Specify the hostname or the IP address of the Teradata system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-port)<br/>Specify the port associated to the Teradata system.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-user)<br/>Specify the user id that will be used to connect to the Teradata system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-password)<br/>Specify the password for the User.
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-version)<br/>Specify the version of Teradata.
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
