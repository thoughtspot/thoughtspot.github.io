---
title: [Add a Splice Machine database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Splice Machine database using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Splice Machine **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-connection-type)<br/>Choose the Splice Machine connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-host)<br/>Specify the hostname or the IP address of the Splice Machine system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-port)<br/>Specify the port associated with the Splice Machine system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-user)<br/>Specify the user id that will be used to connect to the Splice Machine system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-password)<br/>Specify the password for the User
    * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-database)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated.
    * [Hadoop version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-hadoop-version)<br/>Specify the version of Hadoop you are using
    * [HDFS host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-hdfs-host)<br/>Specify the hostname or the IP address of the HDFS
    * [HDFS port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-hdfs-port)<br/>Specify the port associated to the HDFS
    * [HDFS temp location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-hdfs-temp-location)<br/>Specify the HDFS location for creating temp directory
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
