---
title: [JDBC connection reference]
summary: Learn about the fields used to create a JDBC connection with ThoughtSpot DataFlow.
last_updated: 11/25/2020
redirect_from:
- /7.0.0.mar.sw/data-integrate/dataflow/dataflow-jdbc-reference.html
- /7.0.1.jun.sw/data-integrate/dataflow/dataflow-jdbc-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields for a jdbc connection in ThoughtSpot DataFlow. You need specific information to establish a seamless and secure connection.

## Connection properties

<dl id="dataflow-jdbc-connection-properties">
<dlentry id="dataflow-jdbc-conn-connection-name"><dt>Connection name</dt><dd id="connection-name-description">Name your connection.</dd><dd id="connection-name-required">Mandatory field.</dd><dd id="connection-name-example"><strong>Example:</strong><br/>JDBCConnection</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-connection-type"><dt>Connection type</dt><dd id="connection-type-description">Choose the JDBC connection type.</dd><dd id="connection-type-required">Mandatory field.</dd><dd id="connection-type-example"><strong>Example:</strong><br/>JDBC</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-driver-name"><dt>Driver name</dt><dd id="driver-name-description">Specify the JDBC driver class for the database connection.</dd><dd id="driver-name-required">Mandatory field.</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-jdbc-url"><dt>JDBC URL</dt><dd id="jdbc-url-description">Specify the jdbc url for database connection.</dd><dd id="jdbc-url-required">Mandatory field.</dd><dd id="jdbc-url-example"><strong>Example:</strong><br/>jdbc:sqlserver://localhost:1234;databaseName=PUBS</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-jdbc-driver-jar"><dt>JDBC driver jar</dt><dd id="jdbc-driver-jar-description">Upload the jdbc jar available in local system.</dd><dd id="jdbc-driver-jar-required">Mandatory field.</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-jdbc-options"><dt>JDBC options</dt><dd id="jdbc-options-description">Select if custom JDBC options to be appended to the JDBC extract command</dd><dd id="jdbc-options-required">Optional field.</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-key"><dt>Key</dt><dd id="key-description">Define the key parameter</dd><dd id="key-required">Mandatory field.</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-value"><dt>Value</dt><dd id="value-description">Specify the value for key paramter</dd><dd id="value-required">Mandatory field.</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-encrypt"><dt>Encrypt</dt><dd id="encrypt-description">Enrypt the details for secured authentication</dd><dd id="encrypt-required">Optional field.<br/>Select the check-box to enrypt the details</dd></dlentry>
<dlentry id="dataflow-jdbc-conn-schema-object-name-enclosing-character"><dt>Schema object name enclosing character</dt><dd id="schema-object-name-enclosing-character-description">Specify the schema object name enclosing character.</dd><dd id="schema-object-name-enclosing-character-required">Optional field.</dd><dd id="schema-object-name-enclosing-character-default"><strong>Default:</strong><br/>"</dd><dd id="schema-object-name-enclosing-character-other"><strong>Other notes:</strong><br/>Advanced configuration</dd></dlentry>
</dl>


## Sync properties

<dl id="dataflow-jdbc-sync-properties">
<dlentry id="dataflow-jdbc-sync-column-delimiter"><dt>Column delimiter</dt><dd id="column-delimiter-description">Specify the column delimiter character.</dd><dd id="column-delimiter-required">Mandatory field.</dd><dd id="column-delimiter-example"><strong>Example:</strong><br/>1</dd><dd id="column-delimiter-valid-values"><strong>Valid Values:</strong><br/>Any printable ASCII character or decimal value for ASCII character</dd><dd id="column-delimiter-default"><strong>Default:</strong><br/>1</dd></dlentry>
<dlentry id="dataflow-jdbc-sync-enclosing-character"><dt>Enclosing character</dt><dd id="enclosing-character-description">Specify if the text columns in the source data needs to be enclosed in quotes.</dd><dd id="enclosing-character-required">Optional field.</dd><dd id="enclosing-character-example"><strong>Example:</strong><br/>DOUBLE</dd><dd id="enclosing-character-valid-values"><strong>Valid Values:</strong><br/>SINGLE, DOUBLE</dd><dd id="enclosing-character-default"><strong>Default:</strong><br/>DOUBLE</dd><dd id="enclosing-character-other"><strong>Other notes:</strong><br/>This is required if the text data has newline character or delimiter character.</dd></dlentry>
<dlentry id="dataflow-jdbc-sync-escape-character"><dt>Escape character</dt><dd id="escape-character-description">Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.</dd><dd id="escape-character-required">Optional field.</dd><dd id="escape-character-example"><strong>Example:</strong><br/>\"</dd><dd id="escape-character-valid-values"><strong>Valid Values:</strong><br/>Any ASCII character</dd><dd id="escape-character-default"><strong>Default:</strong><br/>\"</dd></dlentry>
<dlentry id="dataflow-jdbc-sync-ts-load-options"><dt>TS load options</dt><dd id="ts-load-options-description">Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code></dd><dd id="ts-load-options-required">Optional field.</dd><dd id="ts-load-options-example"><strong>Example:</strong><br/><code>--max_ignored_rows 0</code></dd><dd id="ts-load-options-valid-values"><strong>Valid Values:</strong><br/><br/><code> --null_value ""</code><br/><code> --escape_character ""</code><br/><code> --max_ignored_rows 0</code></dd><dd id="ts-load-options-default"><strong>Default:</strong><br/><code> --max_ignored_rows 0</code></dd><dd id="reference"><strong>Reference:</strong><br/><a href="{{ site.baseurl }}/reference/data-importer-ref.html">tsload flag reference</a></dd></dlentry>
</dl>

## Related Information

[Dataflow tips]({{ site.baseurl }}/data-integrate/data-flow-tips.html)
