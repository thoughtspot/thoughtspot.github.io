---
title: [Add a MariaDB database connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a MariaDB database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the MariaDB **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-connection-type)<br/>Choose the MariaDB connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-host)<br/>Specify the hostname or the IP address of the MariaDB system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-port)<br/>Specify the port associated to the MariaDB system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-user)<br/>Specify the user id that will be used to connect to the MariaDB system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-password)<br/>Specify the password for the User
    * [Database version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-database-version)<br/>Specify the MariaDB version being connected to.
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
