---
title: [Add an Azure Synapse connection]
last_updated: 7/03/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an Azure Synapse database using ThoughtSpot DataFlow.

To add a new connection to Azure Synapse, follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Azure Synapse **Connection type**, the rest of the connection properties appear.

  <details>
     <summary>See the <strong>Create connection</strong> screen for Azure Synapse</summary>
     <p>
       <img src="../../images/dataflow-azure-synapse-create.png" alt="Create Azure Synapse connection" /></p>
  </details>  

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-connection-type)<br/>Choose the Azure Synapse connection type.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-host)<br/>Specify the name of the server.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-port)<br/>Specify the connection port for Azure Synapse.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-user)<br/>Specify the user who connects to Azure Synapse. This user must have data access privileges.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-password)<br/>Specify the password.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-jdbc-options)<br/>Specify JDBC URL for connecting to Azure Synapse, and the neccessary options.
   * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-database)<br/>Specify Database details like name, alias name, schema.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#connection-properties) for details, defaults, and examples.

5.  Click **Create connection**.   
