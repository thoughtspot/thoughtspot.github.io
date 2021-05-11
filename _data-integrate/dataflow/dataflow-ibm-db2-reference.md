---
title: [IBM Db2 connection reference]
summary: Learn about the fields used to create an IBM Db2 connection with ThoughtSpot DataFlow.
last_updated: 07/6/2020
redirect_from:
- /6.3.0/data-integrate/dataflow/dataflow-ibm-db2-reference.html
- /6.3.0.CU1/data-integrate/dataflow/dataflow-ibm-db2-reference.html
- /6.3.1.CU1/data-integrate/dataflow/dataflow-ibm-db2-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields for an IBM Db2 connection in ThoughtSpot DataFlow. You need specific information to establish a seamless and secure connection.

## Connection properties

<dl id="dataflow-ibm-db2-connection-properties">
<dlentry id="dataflow-ibm-db2-conn-connection-name"><dt>Connection name</dt><dd id="connection-name-description">Name your connection.</dd><dd id="connection-name-required">Mandatory field.</dd><dd id="connection-name-example"><strong>Example:</strong><br/>IBMDb2Connection</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-connection-type"><dt>Connection type</dt><dd id="connection-type-description">Choose the IBM Db2 connection type.</dd><dd id="connection-type-required">Mandatory field.</dd><dd id="connection-type-example"><strong>Example:</strong><br/>IBM Db2</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-platform"><dt>Platform</dt><dd id="platform-description">An environment in which a data point is executed. Specify LUW, iSeries, or Mainframe.</dd><dd id="platform-required">Optional field.</dd><dd id="platform-example"><strong>Example:</strong><br/>platform</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-host"><dt>Host</dt><dd id="host-description">Specify the hostname or the IP address of the Db2 system</dd><dd id="host-required">Mandatory field.</dd><dd id="host-example"><strong>Example:</strong><br/>example.plaform.com</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-port"><dt>Port</dt><dd id="port-description">Specify the port associated to the Db2 system.</dd><dd id="port-required">Mandatory field.</dd><dd id="port-example"><strong>Example:</strong><br/>1234</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-user"><dt>User</dt><dd id="user-description">Specify the user to connect to IBM Db2. This user must have data access privileges.</dd><dd id="user-required">Mandatory field.</dd><dd id="user-example"><strong>Example:</strong><br/>userdi</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-password"><dt>Password</dt><dd id="password-description">Specify the password.</dd><dd id="password-required">Mandatory field.</dd><dd id="password-example"><strong>Example:</strong><br/>pswrd234%!</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-database"><dt>Database</dt><dd id="database-description">Collection of information that is organized so that it can be easily accessed, managed and updated.</dd><dd id="database-required">Mandatory field.</dd><dd id="database-example"><strong>Example:</strong><br/>database</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-database-alias"><dt>Database alias</dt><dd id="database-alias-description">Specify database alias for easy identification.</dd><dd id="database-alias-required">Mandatory field.</dd><dd id="database-alias-example"><strong>Example:</strong><br/>database_alias</dd><dd id="database-alias-other"><strong>Other notes:</strong><br/>These are under Advanced configuration</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-version"><dt>Version</dt><dd id="version-description">Specify the Db2 version being connected to</dd><dd id="version-required">Optional field.</dd><dd id="version-example"><strong>Example:</strong><br/>10.x</dd><dd id="version-other"><strong>Other notes:</strong><br/>These are under Advanced configuration</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-code-page"><dt>Code page</dt><dd id="code-page-description">A standardized code in which characters are represented for computer storage and transmission by the numbers 0 through 127. Select either ASCII or EBCDIC.</dd><dd id="code-page-required">Optional field.</dd><dd id="code-page-example"><strong>Example:</strong><br/>ASCII</dd></dlentry>
<dlentry id="dataflow-ibm-db2-conn-jdbc-options"><dt>JDBC options</dt><dd id="jdbc-options-description">Specify the options associated with the JDBC URL.</dd><dd id="jdbc-options-required">Optional field.</dd><dd id="jdbc-options-example"><strong>Example:</strong><br/><code>jdbc:sqlserver://[serverName[\instanceName][:portNumber]]</code></dd><dd id="jdbc-options-other"><strong>Other notes:</strong><br/>Advanced configuration</dd></dlentry>

</dl>


## Sync properties

<dl id="dataflow-ibm-db2-sync-properties">
<dlentry id="dataflow-ibm-db2-sync-data-extraction-mode"><dt>Data extraction mode</dt><dd id="data-extraction-mode-description">Specify the extraction type.</dd><dd id="data-extraction-mode-required">Mandatory field.</dd><dd id="data-extraction-mode-example"><strong>Example:</strong><br/>Db2 EXPORT</dd><dd id="data-extraction-mode-valid-values"><strong>Valid Values:</strong><br/>JDBC,Db2 EXPORT</dd><dd id="data-extraction-mode-default"><strong>Default:</strong><br/>JDBC</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-column-delimiter"><dt>Column delimiter</dt><dd id="column-delimiter-description">Specify the column delimiter character.</dd><dd id="column-delimiter-required">Mandatory field.</dd><dd id="column-delimiter-example"><strong>Example:</strong><br/>1</dd><dd id="column-delimiter-valid-values"><strong>Valid Values:</strong><br/>Any printable ASCII character or decimal value for ASCII character</dd><dd id="column-delimiter-default"><strong>Default:</strong><br/>The delimiter specified in sync</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-null-value"><dt>Null value</dt><dd id="null-value-description">Specifies the string literal that should indicate the null value in the extracted data. During the data load the column value matching this string will be loaded as null in the target.</dd><dd id="null-value-required">Optional field.</dd><dd id="null-value-example"><strong>Example:</strong><br/>NULL</dd><dd id="null-value-valid-values"><strong>Valid Values:</strong><br/>Any string literal</dd><dd id="null-value-default"><strong>Default:</strong><br/>NULL</dd><dd id="null-value-other"><strong>Other notes:</strong><br/>Specific only to Db2 EXPORT Utility</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-enclosing-character"><dt>Enclosing character</dt><dd id="enclosing-character-description">Specify if the text columns in the source data needs to be enclosed in quotes.</dd><dd id="enclosing-character-required">Optional field.</dd><dd id="enclosing-character-example"><strong>Example:</strong><br/>DOUBLE</dd><dd id="enclosing-character-valid-values"><strong>Valid Values:</strong><br/>Single, Double</dd><dd id="enclosing-character-default"><strong>Default:</strong><br/>DOUBLE</dd><dd id="enclosing-character-other"><strong>Other notes:</strong><br/>This is required if the text data has newline character or delimiter character.</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-escape-character"><dt>Escape character</dt><dd id="escape-character-description">Specify the escape character if using a text qualifier in the source data.</dd><dd id="escape-character-required">Optional field.</dd><dd id="escape-character-example"><strong>Example:</strong><br/>\"</dd><dd id="escape-character-valid-values"><strong>Valid Values:</strong><br/>Any ASCII character</dd><dd id="escape-character-default"><strong>Default:</strong><br/>\"</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-fetch-size"><dt>Fetch size</dt><dd id="fetch-size-description">Specify the number of rows to be fetched at a time and processed in memory. If the value specified is zero then, all rows are extracted at once.</dd><dd id="fetch-size-required">Mandatory field.</dd><dd id="fetch-size-example"><strong>Example:</strong><br/>1000</dd><dd id="fetch-size-valid-values"><strong>Valid Values:</strong><br/>Any numeric value</dd><dd id="fetch-size-default"><strong>Default:</strong><br/>1000</dd></dlentry>
<dlentry id="dataflow-ibm-db2-sync-ts-load-options"><dt>TS load options</dt><dd id="ts-load-options-description">Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code></dd><dd id="ts-load-options-required">Optional field.</dd><dd id="ts-load-options-example"><strong>Example:</strong><br/>--max_ignored_rows 0</dd><dd id="ts-load-options-valid-values"><strong>Valid Values:</strong><br/>--null_value ""
 --escape_character ""
--max_ignored_rows 0</dd><dd id="ts-load-options-default"><strong>Default:</strong><br/>--max_ignored_rows 0</dd></dlentry>
</dl>
