---
title: [Add a Netezza database connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Netezza database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the Netezza **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-connection-type)<br/>Choose the Netezza connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-host)<br/>Specify the hostname or the IP address of the Netezza system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-port)<br/>Specify the port associated to the Netezza system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-user)<br/>Specify the user id that will be used to connect to the Netezza system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-password)<br/>Specify the password for the User
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-version)<br/>Specify the Netezza version being connected to
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
