---
title: [Amazon Redshift connection reference]
summary: Learn about the fields used to create an Amazon Redshift connection with ThoughtSpot DataFlow.
last_updated: 06/19/2020
redirect_from:
- /7.0.0.mar.sw/data-integrate/dataflow/dataflow-amazon-redshift-reference.html
- /7.0.1.jun.sw/data-integrate/dataflow/dataflow-amazon-redshift-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields for an Amazon Redshift connection in ThoughtSpot DataFlow. You need specific information to establish a seamless and secure connection.

## Connection properties

<dl id="dataflow-amazon-redshift-connection-properties">
<dlentry id="dataflow-amazon-redshift-conn-connection-name"><dt>Connection name</dt><dd id="connection-name-description">Name your connection.</dd><dd id="connection-name-required">Mandatory field.</dd><dd id="connection-name-example"><strong>Example:</strong><br/>AmazonRedshiftConnection</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-conn-connection-type"><dt>Connection type</dt><dd id="connection-type-description">Choose the Amazon Redshsift connection type.</dd><dd id="connection-type-required">Mandatory field.</dd><dd id="connection-type-example"><strong>Example:</strong><br/>Amazon Redshift</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-conn-host"><dt>Host</dt><dd id="host-description">Specify the hostname or the IP address of the Redshift system</dd><dd id="host-required">Mandatory field.</dd><dd id="host-example"><strong>Example:</strong><br/>example.com</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-conn-port"><dt>Port</dt><dd id="port-description">Specify the port associated to the Redshift system</dd><dd id="port-required">Mandatory field.</dd><dd id="port-example"><strong>Example:</strong><br/>1234</dd><dd id="port-default"><strong>Default:</strong><br/>5439</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-conn-user"><dt>User</dt><dd id="user-description">Specify the user to connect to Amazon Redshift. This user must have data access privileges.</dd><dd id="user-required">Mandatory field.</dd><dd id="user-example"><strong>Example:</strong><br/>userdi</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-conn-password"><dt>Password</dt><dd id="password-description">Specify the password for the User.</dd><dd id="password-required">Mandatory field.</dd><dd id="password-example"><strong>Example:</strong><br/>pswrd234%!</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-conn-database"><dt>Database</dt><dd id="database-description">Collection of information that is organized so that it can be easily accessed, managed and updated.</dd><dd id="database-required">Mandatory field.</dd><dd id="database-example"><strong>Example:</strong><br/>database</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-conn-jdbc-options"><dt>JDBC options</dt><dd id="jdbc-options-description">Specify the options associated with the JDBC URL.</dd><dd id="jdbc-options-required">Optional field.</dd><dd id="jdbc-options-example"><strong>Example:</strong><br/><code>jdbc:sqlserver://[serverName[\instanceName][:portNumber]]</code></dd><dd id="jdbc-options-other"><strong>Other notes:</strong><br/>Advanced configuration</dd></dlentry>
</dl>


## Sync properties

<dl id="dataflow-amazon-redshift-sync-properties">
<dlentry id="dataflow-amazon-redshift-sync-column-delimiter"><dt>Column delimiter</dt><dd id="column-delimiter-description">Specify the column delimiter character.</dd><dd id="column-delimiter-required">Mandatory field.</dd><dd id="column-delimiter-example"><strong>Example:</strong><br/>1</dd><dd id="column-delimiter-valid-values"><strong>Valid Values:</strong><br/>Any printable ASCII character or decimal value for ASCII character</dd><dd id="column-delimiter-default"><strong>Default:</strong><br/>1</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-sync-enclosing-character"><dt>Enclosing character</dt><dd id="enclosing-character-description">Specify if the text columns in the source data needs to be enclosed in quotes.</dd><dd id="enclosing-character-required">Optional field.</dd><dd id="enclosing-character-example"><strong>Example:</strong><br/>DOUBLE</dd><dd id="enclosing-character-valid-values"><strong>Valid Values:</strong><br/>SINGLE, DOUBLE</dd><dd id="enclosing-character-default"><strong>Default:</strong><br/>DOUBLE</dd><dd id="enclosing-character-other"><strong>Other notes:</strong><br/>This is required if the text data has newline character or delimiter character.</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-sync-escape-character"><dt>Escape character</dt><dd id="escape-character-description">Specify the escape character if using a text qualifier in the source data.</dd><dd id="escape-character-required">Optional field.</dd><dd id="escape-character-example"><strong>Example:</strong><br/>\"</dd><dd id="escape-character-valid-values"><strong>Valid Values:</strong><br/>Any ASCII character</dd><dd id="escape-character-default"><strong>Default:</strong><br/>\"</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-sync-fetch-size"><dt>Fetch size</dt><dd id="fetch-size-description">Specify the number of rows to be fetched at a time and processed in memory. If the value specified is zero then, all rows are extracted at once.</dd><dd id="fetch-size-required">Mandatory field.</dd><dd id="fetch-size-example"><strong>Example:</strong><br/>1000</dd><dd id="fetch-size-valid-values"><strong>Valid Values:</strong><br/>Any numeric value</dd><dd id="fetch-size-default"><strong>Default:</strong><br/>1000</dd></dlentry>
<dlentry id="dataflow-amazon-redshift-sync-ts-load-options"><dt>TS load options</dt><dd id="ts-load-options-description">Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code></dd><dd id="ts-load-options-required">Optional field.</dd><dd id="ts-load-options-example"><strong>Example:</strong><br/>--max_ignored_rows 0</dd><dd id="ts-load-options-valid-values"><strong>Valid Values:</strong><br/>--user "dbuser" --password "$DIWD" --target_database "ditest" --target_schema "falcon_schema"</dd><dd id="ts-load-options-default"><strong>Default:</strong><br/>--max_ignored_rows 0</dd><dd id="reference"><strong>Reference:</strong><br/><a href="{{ site.baseurl }}/reference/data-importer-ref.html">tsload flag reference</a></dd></dlentry>
</dl>

## Related Information

[Dataflow tips]({{ site.baseurl }}/data-integrate/data-flow-tips.html)
