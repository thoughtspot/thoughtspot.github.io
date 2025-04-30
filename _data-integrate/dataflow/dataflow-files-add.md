---
title: [Add a File database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to flat files, both local and remote, using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the File **Connection type**, the rest of the connection properties appear.

   Depending on your choice of authentication mechanism, you may use different properties.

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-connection-type)<br/>Choose the Files connection type.
   * [File location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-file-location)<br/>Specify the base location of the file on the server.
   * [Files on remote location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-files-on-remote-location)<br/>Specify If the files on remote server.
   * [Protocol]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-protocol)<br/>Select the required remote server connection<br/>Mandatory field. For remote location files only.
   * [Authentication type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-authentication-type)<br/>Specify the authentication type for SFTP Protocol<br/>Mandatory field. For SFTP protocol only
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-host)<br/>Specify the Hostname or the IP address of the remote server<br/>Mandatory field. For remote location files only.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-port)<br/>Specify the Port to connect the remote server<br/>Mandatory field. For remote location files only.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-user)<br/>Specify the user to connect to remote server. This user must have data access privileges. For remote location files only.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-password)<br/>Specify the password. For remote location files only, when using password authentication.
   * [Key file]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-key-file)<br/>Specify the key file and its fully qualified path. For remote location files only, when using key authentication.
   * [Passphrase for key file]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-conn-passphrase-for-key-file)<br/>Specify the passphrase for the key file. For remote location files only, when using key authentication.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
