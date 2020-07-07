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

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-connection-type)<br/>Choose the Azure Synapse connection type.<br/>Mandatory field.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-host)<br/>Specify the name of the server.<br/>Mandatory field.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-port)<br/>Specify the connection port for Azure Synapse.<br/>Mandatory field.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-user)<br/>Specify the user who connects to Azure Synapse. This user must have data access privileges.<br/>Mandatory field.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-password)<br/>Specify the password.<br/>Mandatory field.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-jdbc-options)<br/>Specify JDBC URL for connecting to Azure Synapse, and the neccessary options.<br/>Optional field.
   * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-conn-database)<br/>Specify Database details like name, alias name, schema.<br/>Mandatory field.


   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#connection-properties).

5.  Click **Create connection**.   
