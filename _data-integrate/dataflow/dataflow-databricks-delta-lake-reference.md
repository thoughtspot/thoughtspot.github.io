---
title: [Databricks Delta Lake connection reference]
summary: Learn about the fields used to create Databricks Delta Lake connection with ThoughtSpot DataFlow.
last_updated: 09/14/2020
redirect_from:
- /7.0.0.mar.sw/data-integrate/dataflow/dataflow-databricks-delta-lake-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields for an Databricks Delta Lake connection in ThoughtSpot DataFlow. You need specific information to establish a seamless and secure connection.

## Connection properties

<dl id="dataflow-databricks-delta-lake-connection-properties">
<dlentry id="dataflow-databricks-delta-lake-conn-connection-name"><dt>Connection name</dt><dd id="connection-name-description">Name your connection.</dd><dd id="connection-name-required">Mandatory field.</dd><dd id="connection-name-example"><strong>Example:</strong><br/>AzureDatabricksConnection</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-connection-type"><dt>Connection type</dt><dd id="connection-type-description">Choose the Azure Dtabricks connection type.</dd><dd id="connection-type-required">Mandatory field.</dd><dd id="connection-type-example"><strong>Example:</strong><br/>Azure Databricks</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-server-hostname-"><dt>Server Hostname </dt><dd id="server-hostname--description">Specify the hostname of the Databricks server</dd><dd id="server-hostname--required">Mandatory field.</dd><dd id="server-hostname--example"><strong>Example:</strong><br/>www.example.com</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-port"><dt>Port</dt><dd id="port-description">Specify the port associated with the system.</dd><dd id="port-required">Mandatory field.</dd><dd id="port-example"><strong>Example:</strong><br/>1234</dd><dd id="port-default"><strong>Default:</strong><br/>443</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-http-path"><dt>HTTP path</dt><dd id="http-path-description">Specify the HTTP Path.</dd><dd id="http-path-required">Mandatory field.</dd><dd id="http-path-example"><strong>Example:</strong><br/>abcservice</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-protocol"><dt>Protocol</dt><dd id="protocol-description">Specify the remote server connection</dd><dd id="protocol-required">Mandatory field.</dd><dd id="protocol-example"><strong>Example:</strong><br/>https</dd><dd id="protocol-valid-values"><strong>Valid Values:</strong><br/>https, http</dd><dd id="protocol-default"><strong>Default:</strong><br/>https</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-cluster-id"><dt>Cluster id</dt><dd id="cluster-id-description">Specify the canonical identifier for the cluster</dd><dd id="cluster-id-required">Mandatory field.</dd><dd id="cluster-id-example"><strong>Example:</strong><br/>1234</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-access-token"><dt>Access token</dt><dd id="access-token-description">Specify the access token to authenticate Databricks API.</dd><dd id="access-token-required">Mandatory field.</dd><dd id="access-token-example"><strong>Example:</strong><br/>ABCDEFGH245HIJK</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-conn-dbfs-stage-location"><dt>DBFS stage location</dt><dd id="dbfs-stage-location-description">Specify the mount storage object location</dd><dd id="dbfs-stage-location-required">Mandatory field.</dd><dd id="dbfs-stage-location-default"><strong>Default:</strong><br/>/dataflow/stage</dd></dlentry>
</dl>

## Sync properties

<dl id="dataflow-databricks-delta-lake-sync-properties">
<dlentry id="dataflow-databricks-delta-lake-sync-column-delimiter"><dt>Column delimiter</dt><dd id="column-delimiter-description">Specify the column delimiter character.</dd><dd id="column-delimiter-required">Mandatory field.</dd><dd id="column-delimiter-example"><strong>Example:</strong><br/>1</dd><dd id="column-delimiter-valid-values"><strong>Valid Values:</strong><br/>Any printable ASCII character or decimal value for ASCII character</dd><dd id="column-delimiter-default"><strong>Default:</strong><br/>1</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-sync-enclosing-character"><dt>Enclosing character</dt><dd id="enclosing-character-description">Specify if the text columns in the source data needs to be enclosed in quotes.</dd><dd id="enclosing-character-required">Optional field.</dd><dd id="enclosing-character-example"><strong>Example:</strong><br/>DOUBLE</dd><dd id="enclosing-character-valid-values"><strong>Valid Values:</strong><br/>SINGLE, DOUBLE</dd><dd id="enclosing-character-default"><strong>Default:</strong><br/>DOUBLE</dd><dd id="enclosing-character-other"><strong>Other notes:</strong><br/>This is required if the text data has newline character or delimiter character.</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-sync-escape-character"><dt>Escape character</dt><dd id="escape-character-description">Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.</dd><dd id="escape-character-required">Optional field.</dd><dd id="escape-character-example"><strong>Example:</strong><br/>\"</dd><dd id="escape-character-valid-values"><strong>Valid Values:</strong><br/>Any ASCII character</dd><dd id="escape-character-default"><strong>Default:</strong><br/>\"</dd></dlentry>
<dlentry id="dataflow-databricks-delta-lake-sync-ts-load-options"><dt>TS load options</dt><dd id="ts-load-options-description">Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code></dd><dd id="ts-load-options-required">Optional field.</dd><dd id="ts-load-options-example"><strong>Example:</strong><br/><code>--max_ignored_rows 0</code></dd><dd id="ts-load-options-valid-values"><strong>Valid Values:</strong><br/><br/><code> --null_value ""</code><br/><code> --escape_character ""</code><br/><code> --max_ignored_rows 0</code></dd><dd id="ts-load-options-default"><strong>Default:</strong><br/><code> --max_ignored_rows 0</code></dd><dd id="reference"><strong>Reference:</strong><br/><a href="{{ site.baseurl }}/reference/data-importer-ref.html">tsload flag reference</a></dd></dlentry>
</dl>

## Related Information

[Dataflow tips]({{ site.baseurl }}/data-integrate/data-flow-tips.html)
