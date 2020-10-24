---
title: [Add an Apache Parquet connection]
last_updated: 9/14/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the Apache Parquet file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the File **Connection type**, the rest of the connection properties appear.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-connection-type)<br/>Choose the Apache Parquet connection type.
   * [File location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-file-location)<br/>Specify the base location of the file on the server.
   * [Files on remote location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-files-on-remote-location)<br/>Specify if the files on remote server.
   * [Protocol]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-protocol)<br/>Select the required remote server connection<br/>For remote location files only.
   * [Authentication type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-authentication-type)<br/>Specify the authentication type for SFTP Protocol<br/>For SFTP protocol only
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-host)<br/>Specify the Hostname or the IP address of the remote server<br/>For remote location files only.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-port)<br/>Specify the Port to connect the remote server<br/>For remote location files only.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-user)<br/>Specify the user to connect to remote server. This user must have data access privileges.<br/>For remote location files only.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-password)<br/>Specify the password.<br/>For remote location files only, when using password authentication.
   * [Key file]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-key-file)<br/>Specify the key file and its fully qualified path.<br/>For remote location files only, when using key authentication.
   * [Passphrase for key]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-conn-passphrase-for-key)<br/>Specify the passphrase for the key file.<br/>For remote location files only, when using key authentication.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
