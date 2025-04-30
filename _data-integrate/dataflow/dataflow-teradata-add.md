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

    <details>
      <summary>See the <strong>Create connection</strong> screen for Teradata</summary>
        <p>
        <img src="../../images/dataflow-teradata.png" alt="Create Teradata connection" /></p>
    </details>

    * [Connection Properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-connection-properties)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-connection-type)<br/>Choose the Teradata connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-host)<br/>Specify the hostname or the IP address of the Teradata system<br/>Mandatory field.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-port)<br/>Specify the port associated to the Teradata system<br/>Mandatory field.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-user)<br/>Specify the user id that will be used to connect to the Teradata system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-password)<br/>Specify the password for the User<br/>Mandatory field.
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#dataflow-teradata-conn-version)<br/>Specify the version of Teradata you are using<br/>Optional field.
    
   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
