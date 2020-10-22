---
title: [Add an Azure Databricks connection]
last_updated: 9/14/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the Azure Databricks file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the File **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-connection-type)<br/>Choose the Azure Dtabricks connection type.
   * [Server Hostname ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-server-hostname-)<br/>Specify the hostname of the Databricks server
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-port)<br/>Specify the port associated with the system.
   * [HTTP path]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-http-path)<br/>Specify the HTTP Path.
   * [Protocol]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-protocol)<br/>Specify the remote server connection
   * [Cluster id]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-cluster-id)<br/>Specify the canonical identifier for the cluster
   * [Access token]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-access-token)<br/>Specify the access token to authenticate Databricks API.
   * [DBFS stage location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#dataflow-azure-databricks-conn-dbfs-stage-location)<br/>Specify the mount storage object location

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-databricks-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
