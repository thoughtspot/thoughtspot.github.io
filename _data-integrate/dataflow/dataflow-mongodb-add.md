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

    <details>
      <summary>See the <strong>Create connection</strong> screen for MongoDB</summary>
        <p>
        <img src="../../images/dataflow-mongodb-create.png" alt="Create MongoDB connection" /></p>
    </details>

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-connection-type)<br/>Choose the MongoDB connection type.<br/>Mandatory field.
    * [Host ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-host-)<br/>Specify the hostname or the IP address of the MongoDB system<br/>Mandatory field.
    * [Port ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-port-)<br/>Specify the port associated to the MongoDB system<br/>Mandatory field.
    * [User ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-user-)<br/>Specify the user id that will be used to connect to the MongoDB system. This user should have necessary privileges to access the data in the databases.<br/>Mandatory field.
    * [Password ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-password-)<br/>Specify the password for the User<br/>Mandatory field.
    * [Database ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-conn-database-)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated<br/>Mandatory field.
    * [Flatten arrays]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#)<br/>The FlattenArrays property can be used to flatten the elements of nested arrays into columns of their own. Set FlattenArrays to the number of elements you want to return from nested arrays.<br/>Optional field.
    * [Row scan depth]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#dataflow-mongodb-sync-row-scan-depth)<br/>The maximum number of rows to scan to look for the columns available in a table. Set this property to gain more control over how the provider applies data types to collections.<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mongodb-reference.html#connection-properties).

5. Click **Create connection**.   
