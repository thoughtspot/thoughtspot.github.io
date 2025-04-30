---
title: [Add an Azure Blob Storage connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the Azure Blob Storage file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-conn-connection-type)<br/>Choose the Azure Blob Storage connection type.
   * [Storage type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-conn-storage-type)<br/>Choose the Storage type: *Azure Blob Storage* (default) or *Data Lake GEN2 Storage*.
   * [Account]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-conn-account)<br/>Azure Storage has an address that includes our unique account name which is a combination of the account name and the Azure Storage blob endpoint forms the base address for the objects in your storage account.
   * [Authentication type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-conn-authentication-type)<br/>This supports two types of authentication methods: Azure account key: Choose to authenticate based on access keys and other parameters to produce an encrypted signature stringthat is passed on the request in the Authorization header.Shared access signatures (SAS): Choose to grant fine-grained access to resources in your storage account with specified permissions and over a specified time interval.
   * [Key]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-conn-key)<br/>The 512-bit access key generated while creating storage account.
   * [Container]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-conn-container)<br/>Give container details that organizes a set of blobs, like a directory in a file system.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
