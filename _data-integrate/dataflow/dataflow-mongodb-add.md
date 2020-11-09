---
title: [Add a MongoDB database connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a MongoDB database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the MongoDB **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-connection-type)<br/>Choose the MongoDB connection type.
    * [Host ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-host-)<br/>Specify the hostname or the IP address of the MongoDB system
    * [Port ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-port-)<br/>Specify the port associated to the MongoDB system
    * [User ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-user-)<br/>Specify the user id that will be used to connect to the MongoDB system. This user should have necessary privileges to access the data in the databases.
    * [Password ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-password-)<br/>Specify the password for the User
    * [Database ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-database-)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated
    * [Flatten arrays]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-sync-flatten-arrays)<br/>The FlattenArrays property can be used to flatten the elements of nested arrays into columns of their own. Set FlattenArrays to the number of elements you want to return from nested arrays.
    * [Row scan depth]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-sync-row-scan-depth)<br/>The maximum number of rows to scan to look for the columns available in a table. Set this property to gain more control over how the provider applies data types to collections.
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
