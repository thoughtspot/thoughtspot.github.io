---
title: [MongoDB connection reference]
summary: Learn about the fields used to create a MongoDB connection with ThoughtSpot DataFlow.
last_updated: 07/6/2020
redirect_from:
- /7.0.0.mar.sw/data-integrate/dataflow/dataflow-mongodb-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields for a MongoDB connection in ThoughtSpot DataFlow. You need specific information to establish a seamless and secure connection.

## Connection properties

<dl id="dataflow-mongodb-connection-properties">
<dlentry id="dataflow-mongodb-conn-connection-name"><dt>Connection name</dt><dd id="connection-name-description">Name your connection.</dd><dd id="connection-name-required">Mandatory field.</dd><dd id="connection-name-example"><strong>Example:</strong><br/>MongoDBConnection</dd></dlentry>
<dlentry id="dataflow-mongodb-conn-connection-type"><dt>Connection type</dt><dd id="connection-type-description">Choose the MongoDB connection type.</dd><dd id="connection-type-required">Mandatory field.</dd><dd id="connection-type-example"><strong>Example:</strong><br/>MongoDB</dd></dlentry>
<dlentry id="dataflow-mongodb-conn-host-"><dt>Host </dt><dd id="host--description">Specify the hostname or the IP address of the MongoDB system</dd><dd id="host--required">Mandatory field.</dd><dd id="host--example"><strong>Example:</strong><br/>www.example.com</dd></dlentry>
<dlentry id="dataflow-mongodb-conn-port-"><dt>Port </dt><dd id="port--description">Specify the port associated to the MongoDB system</dd><dd id="port--required">Mandatory field.</dd><dd id="port--example"><strong>Example:</strong><br/>1234</dd></dlentry>
<dlentry id="dataflow-mongodb-conn-user-"><dt>User </dt><dd id="user--description">Specify the user id that will be used to connect to the MongoDB system. This user should have necessary privileges to access the data in the databases.</dd><dd id="user--required">Mandatory field.</dd><dd id="user--example"><strong>Example:</strong><br/>userdi</dd></dlentry>
<dlentry id="dataflow-mongodb-conn-password-"><dt>Password </dt><dd id="password--description">Specify the password for the User</dd><dd id="password--required">Mandatory field.</dd><dd id="password--example"><strong>Example:</strong><br/>pswrd234%!</dd></dlentry>
<dlentry id="dataflow-mongodb-conn-database-"><dt>Database </dt><dd id="database--description">Collection of information that is organized so that it can be easily accessed, managed and updated</dd><dd id="database--required">Mandatory field.</dd><dd id="database--example"><strong>Example:</strong><br/>Test</dd></dlentry>
<dlentry id="dataflow-mongodb-sync-flatten-arrays"><dt>Flatten arrays</dt><dd id="flatten-arrays-description">The FlattenArrays property can be used to flatten the elements of nested arrays into columns of their own. Set FlattenArrays to the number of elements you want to return from nested arrays.</dd><dd id="flatten-arrays-required">Optional field.</dd><dd id="flatten-arrays-example"><strong>Example:</strong><br/>0</dd><dd id="flatten-arrays-other"><strong>Other notes:</strong><br/>Advanced configuration</dd></dlentry>
<dlentry id="dataflow-mongodb-sync-row-scan-depth"><dt>Row scan depth</dt><dd id="row-scan-depth-description">The maximum number of rows to scan to look for the columns available in a table. Set this property to gain more control over how the provider applies data types to collections.</dd><dd id="row-scan-depth-required">Optional field.</dd><dd id="row-scan-depth-example"><strong>Example:</strong><br/>-1</dd><dd id="row-scan-depth-other"><strong>Other notes:</strong><br/>Advanced configuration</dd></dlentry>
<dlentry id="dataflow-mongodb-conn-jdbc-options"><dt>JDBC options</dt><dd id="jdbc-options-description">Specify the options associated with the JDBC URL.</dd><dd id="jdbc-options-required">Optional field.</dd><dd id="jdbc-options-example"><strong>Example:</strong><br/><code>jdbc:sqlserver://[serverName[\instanceName][:portNumber]]</code></dd><dd id="jdbc-options-other"><strong>Other notes:</strong><br/>Advanced configuration</dd></dlentry>
</dl>

## Sync properties

<dl id="dataflow-mongodb-sync-properties">
<dlentry id="dataflow-mongodb-sync-column-delimiter"><dt>Column delimiter</dt><dd id="column-delimiter-description">Specify the column delimiter character.</dd><dd id="column-delimiter-required">Mandatory field.</dd><dd id="column-delimiter-example"><strong>Example:</strong><br/>1</dd><dd id="column-delimiter-valid-values"><strong>Valid Values:</strong><br/>Any printable ASCII character or decimal value for ASCII character</dd><dd id="column-delimiter-default"><strong>Default:</strong><br/>1</dd></dlentry>
<dlentry id="dataflow-mongodb-sync-enclosing-character"><dt>Enclosing character</dt><dd id="enclosing-character-description">Specify if the text columns in the source data needs to be enclosed in quotes.</dd><dd id="enclosing-character-required">Optional field.</dd><dd id="enclosing-character-example"><strong>Example:</strong><br/>DOUBLE</dd><dd id="enclosing-character-valid-values"><strong>Valid Values:</strong><br/>SINGLE, DOUBLE</dd><dd id="enclosing-character-default"><strong>Default:</strong><br/>DOUBLE</dd><dd id="enclosing-character-other"><strong>Other notes:</strong><br/>This is required if the text data has newline character or delimiter character.</dd></dlentry>
<dlentry id="dataflow-mongodb-sync-escape-character"><dt>Escape character</dt><dd id="escape-character-description">Specify the escape character if using a text qualifier in the source data.</dd><dd id="escape-character-required">Optional field.</dd><dd id="escape-character-example"><strong>Example:</strong><br/>\"</dd><dd id="escape-character-valid-values"><strong>Valid Values:</strong><br/>Any ASCII character</dd><dd id="escape-character-default"><strong>Default:</strong><br/>\"</dd></dlentry>
<dlentry id="dataflow-mongodb-sync-ts-load-options"><dt>TS load options</dt><dd id="ts-load-options-description">Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code></dd><dd id="ts-load-options-required">Optional field.</dd><dd id="ts-load-options-example"><strong>Example:</strong><br/>--max_ignored_rows 0</dd><dd id="ts-load-options-valid-values"><strong>Valid Values:</strong><br/>--user "dbuser" --password "$DIWD" --target_database "ditest" --target_schema "falcon_schema"</dd><dd id="ts-load-options-default"><strong>Default:</strong><br/>--max_ignored_rows 0</dd><dd id="reference"><strong>Reference:</strong><br/><a href="{{ site.baseurl }}/reference/data-importer-ref.html">tsload flag reference</a></dd></dlentry></dl>

## Related Information

[Dataflow tips]({{ site.baseurl }}/data-integrate/data-flow-tips.html)
