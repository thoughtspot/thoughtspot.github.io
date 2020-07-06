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

    <details>
      <summary>See the <strong>Create connection</strong> screen for MariaDB</summary>
        <p>
        <img src="../../images/dataflow-mariadb-create.png" alt="Create MariaDB connection" /></p>
    </details>

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-connection-type)<br/>Choose the MariaDB connection type.<br/>Mandatory field.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-host)<br/>Specify the hostname or the IP address of the MariaDB system<br/>Mandatory field.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-port)<br/>Specify the port associated to the MariaDB system<br/>Mandatory field.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-user)<br/>Specify the user id that will be used to connect to the MariaDB system. This user should have necessary privileges to access the data in the databases.<br/>Mandatory field.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-password)<br/>Specify the password for the User<br/>Mandatory field.
    * [Database version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#dataflow-mariadb-conn-database-version)<br/>Specify the MariaDB version being connected to.<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mariadb-reference.html#connection-properties).

5. Click **Create connection**.   
