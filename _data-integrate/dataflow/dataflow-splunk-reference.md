---
title: [Splunk connection reference]
summary: Learn about the fields used to create a Splunk connection with ThoughtSpot DataFlow.
last_updated: 06/19/2020
redirect_from:
- /7.0.0.mar.sw/data-integrate/dataflow/dataflow-splunk-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields for a Splunk connection in ThoughtSpot DataFlow. You need specific information to establish a seamless and secure connection.

## Connection properties

<dl id="dataflow-splunk-connection-properties">
<dlentry id="dataflow-splunk-conn-connection-name"><dt>Connection name</dt><dd id="connection-name-description">Name your connection.</dd><dd id="connection-name-required">Mandatory field.</dd><dd id="connection-name-example"><strong>Example:</strong><br/>SplunkConnection</dd></dlentry>
<dlentry id="dataflow-splunk-conn-connection-type"><dt>Connection type</dt><dd id="connection-type-description">Choose the Splunk connection type.</dd><dd id="connection-type-required">Mandatory field.</dd><dd id="connection-type-example"><strong>Example:</strong><br/>Splunk</dd></dlentry>
<dlentry id="dataflow-splunk-conn-server-name"><dt>Server name</dt><dd id="server-name-description">Specify the hostname or the IP address of the Splunk system</dd><dd id="server-name-required">Mandatory field.</dd><dd id="server-name-example"><strong>Example:</strong><br/>www.example.com</dd></dlentry>
<dlentry id="dataflow-splunk-conn-port"><dt>Port</dt><dd id="port-description">Specify the port associated to the Splunk system</dd><dd id="port-required">Mandatory field.</dd><dd id="port-example"><strong>Example:</strong><br/>1234</dd></dlentry>
<dlentry id="dataflow-splunk-conn-user"><dt>User</dt><dd id="user-description">Specify the user id that will be used to connect to the Splunk system. This user should have necessary privileges to access the data in the databases.</dd><dd id="user-required">Mandatory field.</dd><dd id="user-example"><strong>Example:</strong><br/>userdi</dd></dlentry>
<dlentry id="dataflow-splunk-conn-password"><dt>Password</dt><dd id="password-description">Specify the password for the User</dd><dd id="password-required">Mandatory field.</dd><dd id="password-example"><strong>Example:</strong><br/>pswrd234%!</dd></dlentry>
<dlentry id="dataflow-splunk-conn-jdbc-options"><dt>JDBC options</dt><dd id="jdbc-options-description">Specify the options associated with the JDBC URL.</dd><dd id="jdbc-options-required">Optional field.</dd><dd id="jdbc-options-example"><strong>Example:</strong><br/><code>jdbc:sqlserver://[serverName[\instanceName][:portNumber]]</code></dd><dd id="jdbc-options-other"><strong>Other notes:</strong><br/>Advanced configuration</dd></dlentry>
</dl>


## Sync properties

<dl id="dataflow-splunk-sync-properties">
<dlentry id="dataflow-splunk-sync-column-delimiter"><dt>Column delimiter</dt><dd id="column-delimiter-description">Specify the column delimiter character.</dd><dd id="column-delimiter-required">Mandatory field.</dd><dd id="column-delimiter-example"><strong>Example:</strong><br/>1</dd><dd id="column-delimiter-valid-values"><strong>Valid Values:</strong><br/>Any printable ASCII character or decimal value for ASCII character</dd><dd id="column-delimiter-default"><strong>Default:</strong><br/>The delimiter specified in sync</dd></dlentry>
<dlentry id="dataflow-splunk-sync-escape-character"><dt>Escape character</dt><dd id="escape-character-description">Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.</dd><dd id="escape-character-required">Optional field.</dd><dd id="escape-character-example"><strong>Example:</strong><br/>"</dd><dd id="escape-character-valid-values"><strong>Valid Values:</strong><br/>Any ASCII character</dd><dd id="escape-character-default"><strong>Default:</strong><br/>"</dd></dlentry>
<dlentry id="dataflow-splunk-sync-enclosing-character"><dt>Enclosing character</dt><dd id="enclosing-character-description">Specify if the text columns in the source data needs to be enclosed in quotes.</dd><dd id="enclosing-character-required">Optional field.</dd><dd id="enclosing-character-example"><strong>Example:</strong><br/>DOUBLE</dd><dd id="enclosing-character-valid-values"><strong>Valid Values:</strong><br/>SINGLE, DOUBLE</dd><dd id="enclosing-character-default"><strong>Default:</strong><br/>DOUBLE</dd><dd id="enclosing-character-other"><strong>Other notes:</strong><br/>This is required if the text data has newline character or delimiter character.</dd></dlentry>
<dlentry id="dataflow-splunk-sync-max-ignored-rows"><dt>Max ignored rows</dt><dd id="max-ignored-rows-description">Abort the transaction after encountering 'n' ignored rows</dd><dd id="max-ignored-rows-required">Optional field.</dd><dd id="max-ignored-rows-default"><strong>Default:</strong><br/>0</dd></dlentry>
"<dlentry id="dataflow-splunk-sync-ts-load-options"><dt>TS load options</dt><dd id="ts-load-options-description">Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code></dd><dd id="ts-load-options-required">Optional field.</dd><dd id="ts-load-options-example"><strong>Example:</strong><br/>--max_ignored_rows 0</dd><dd id="ts-load-options-valid-values"><strong>Valid Values:</strong><br/>--null_value ""
 --escape_character ""
 --max_ignored_rows 0</dd><dd id="ts-load-options-default"><strong>Default:</strong><br/>--max_ignored_rows 0</dd><dd id="reference"><strong>Reference:</strong><br/><a href="{{ site.baseurl }}/reference/data-importer-ref.html">tsload flag reference</a></dd></dlentry>"
</dl>
