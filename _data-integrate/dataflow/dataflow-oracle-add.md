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

    <details>
      <summary>See the <strong>Create connection</strong> screen for Oracle</summary>
        <p>
        <img src="../../images/dataflow-oracle-create.png" alt="Create Oracle connection" /></p>
    </details>

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-connection-type)<br/>Choose the Oracle connection type.<br/>Mandatory field.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-host)<br/>Specify the hostname or the IP address of the Oracle system<br/>Mandatory field.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-port)<br/>Specify the port associated to the Oracle system<br/>Mandatory field.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-user)<br/>Specify the user id that will be used to connect to the Oracle system. This user should have necessary privileges to access the data in the databases.<br/>Mandatory field.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-password)<br/>Specify the password for the User<br/>Mandatory field.
    * [Service name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#dataflow-oracle-conn-service-name)<br/>This is the TNS alias that you give when you remotely connect to your database. You can find it in the Tnsnames.ora file. It can be the same as the SID. You can also give it any other name you want<br/>Mandatory field.
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#)<br/>Specify the Oracle version being connected to<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-reference.html#connection-properties).

5. Click **Create connection**.   
