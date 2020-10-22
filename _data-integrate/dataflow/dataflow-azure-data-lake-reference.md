---
title: [Azure Data Lake connection reference]
summary: Learn about the fields used to create an Azure Data Lake connection with ThoughtSpot DataFlow.
last_updated: 09/14/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields for an Azure Data Lake connection in ThoughtSpot DataFlow. You need specific information to establish a seamless and secure connection.

## Connection properties

<dl id="dataflow-azure-data-lake-connection-properties">
<dlentry id="dataflow-azure-data-lake-conn-connection-name"><dt>Connection name</dt><dd id="connection-name-description">Name your connection.</dd><dd id="connection-name-required">Mandatory field.</dd><dd id="connection-name-example"><strong>Example:</strong><br/>AzureDataLakeConnection</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-conn-connection-type"><dt>Connection type</dt><dd id="connection-type-description">Choose the Azure Data Lake connection type.</dd><dd id="connection-type-required">Mandatory field.</dd><dd id="connection-type-example"><strong>Example:</strong><br/>Azure Data Lake</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-conn-host"><dt>Host</dt><dd id="host-description">Specify the hostname or the IP address of the system.</dd><dd id="host-required">Mandatory field.</dd><dd id="host-example"><strong>Example:</strong><br/>www.example.com</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-conn-port"><dt>Port</dt><dd id="port-description">Specify the port associated with the system.</dd><dd id="port-required">Mandatory field.</dd><dd id="port-example"><strong>Example:</strong><br/>1234</dd><dd id="port-default"><strong>Default:</strong><br/>9042</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-conn-user"><dt>User</dt><dd id="user-description">Specify the user who connects to the system. This user must have data access privileges.</dd><dd id="user-required">Mandatory field.</dd><dd id="user-example"><strong>Example:</strong><br/>userid</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-conn-password"><dt>Password</dt><dd id="password-description">Specify the password for the User.</dd><dd id="password-required">Mandatory field.</dd><dd id="password-example"><strong>Example:</strong><br/>pswrd234%!</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-conn-authentication"><dt>Authentication</dt><dd id="authentication-description">Specifies the type of security protocol to connect to the instance. Based on the type of security, select the authentication type and provide details.</dd><dd id="authentication-required">Mandatory field.</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-conn-row-scan-depth"><dt>Row scan depth</dt><dd id="row-scan-depth-description">The maximum number of rows to scan to look for the columns available in a table. Set this property to gain more control over how the provider applies data types to collections.</dd><dd id="row-scan-depth-required">Optional field.</dd><dd id="row-scan-depth-example"><strong>Example:</strong><br/>-1</dd><dd id="row-scan-depth-default"><strong>Default:</strong><br/>100</dd><dd id="row-scan-depth-other"><strong>Other notes:</strong><br/>Advanced Configuration</dd></dlentry>
</dl>

## Sync properties

<dl id="dataflow-azure-data-lake-sync-properties">
<dlentry id="dataflow-azure-data-lake-sync-column-delimiter"><dt>Column delimiter</dt><dd id="column-delimiter-description">Specify the column delimiter character.</dd><dd id="column-delimiter-required">Mandatory field.</dd><dd id="column-delimiter-example"><strong>Example:</strong><br/>1</dd><dd id="column-delimiter-valid-values"><strong>Valid Values:</strong><br/>Any printable ASCII character or decimal value for ASCII character</dd><dd id="column-delimiter-default"><strong>Default:</strong><br/>1</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-sync-enclosing-character"><dt>Enclosing character</dt><dd id="enclosing-character-description">Specify if the text columns in the source data needs to be enclosed in quotes.</dd><dd id="enclosing-character-required">Optional field.</dd><dd id="enclosing-character-example"><strong>Example:</strong><br/>DOUBLE</dd><dd id="enclosing-character-valid-values"><strong>Valid Values:</strong><br/>SINGLE, DOUBLE</dd><dd id="enclosing-character-default"><strong>Default:</strong><br/>DOUBLE</dd><dd id="enclosing-character-other"><strong>Other notes:</strong><br/>This is required if the text data has newline character or delimiter character.</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-sync-escape-character"><dt>Escape character</dt><dd id="escape-character-description">Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.</dd><dd id="escape-character-required">Optional field.</dd><dd id="escape-character-example"><strong>Example:</strong><br/>\"</dd><dd id="escape-character-valid-values"><strong>Valid Values:</strong><br/>Any ASCII character</dd><dd id="escape-character-default"><strong>Default:</strong><br/>\"</dd></dlentry>
<dlentry id="dataflow-azure-data-lake-sync-ts-load-options"><dt>TS load options</dt><dd id="ts-load-options-description">Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code></dd><dd id="ts-load-options-required">Optional field.</dd><dd id="ts-load-options-example"><strong>Example:</strong><br/><code>--max_ignored_rows 0</code></dd><dd id="ts-load-options-valid-values"><strong>Valid Values:</strong><br/><br/><code> --null_value ""</code><br/><code> --escape_character ""</code><br/><code> --max_ignored_rows 0</code></dd><dd id="ts-load-options-default"><strong>Default:</strong><br/><code> --max_ignored_rows 0</code></dd></dlentry>
</dl>
