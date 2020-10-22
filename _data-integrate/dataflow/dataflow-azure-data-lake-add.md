---
title: [Add an Azure Data Lake connection]
last_updated: 9/14/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the Azure Data Lake file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the File **Connection type**, the rest of the connection properties appear.


   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-connection-type)<br/>Choose the Azure Data Lake connection type.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-host)<br/>Specify the hostname or the IP address of the system.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-port)<br/>Specify the port associated with the system.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-user)<br/>Specify the user who connects to the system. This user must have data access privileges.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-password)<br/>Specify the password for the User.
   * [Authentication]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-authentication)<br/>Specifies the type of security protocol to connect to the instance. Based on the type of security, select the authentication type and provide details.                   
   * [Row scan depth]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#dataflow-azure-data-lake-conn-row-scan-depth)<br/>The maximum number of rows to scan to look for the columns available in a table. Set this property to gain more control over how the provider applies data types to collections.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-data-lake-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
