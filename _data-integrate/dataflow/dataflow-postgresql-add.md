---
title: [Add a PostgreSQL database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a PostgreSQL database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the PostgreSQL **Connection type**, the rest of the connection properties appear.

    <details>
      <summary>See the <strong>Create connection</strong> screen for PostgreSQL</summary>
        <p>
        <img src="../../images/dataflow-postgresql-create.png" alt="Create PostgreSQL connection" /></p>
    </details>

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-connection-type)<br/>Choose the PostgreSQL connection type.<br/>Mandatory field.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-host)<br/>Specify the hostname or the IP address of the PostgreSQL system<br/>Mandatory field.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-port)<br/>Specify the port associated to the PostgreSQL system<br/>Mandatory field.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-user)<br/>Specify the user id that will be used to connect to the PostgreSQL system. This user should have necessary privileges to access the data in the databases.<br/>Mandatory field.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-password)<br/>Specify the password for the User<br/>Mandatory field.
    * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-database)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated.<br/>Mandatory field.
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-conn-version)<br/>Specify the PostgreSQL version being connected to<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#connection-properties).

5. Click **Create connection**.   
