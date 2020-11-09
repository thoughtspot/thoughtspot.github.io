---
title: [Add an Oracle database connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an Oracle database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the Oracle **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-connection-type)<br/>Choose the Oracle connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-host)<br/>Specify the hostname or the IP address of the Oracle system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-port)<br/>Specify the port associated to the Oracle system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-user)<br/>Specify the user id that will be used to connect to the Oracle system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-password)<br/>Specify the password for the User
    * [Service name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-service-name)<br/>This is the TNS alias that you give when you remotely connect to your database. You can find it in the Tnsnames.ora file. It can be the same as the SID. You can also give it any other name you want
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-version)<br/>Specify the Oracle version being connected to
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
