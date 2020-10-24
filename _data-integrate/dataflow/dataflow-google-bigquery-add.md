---
title: [Add a Google BigQuery database connection]
last_updated: 7/1/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Google BigQuery database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the Google BigQuery **Connection type**, the rest of the connection properties appear.

   Depending on your choice of authentication mechanism, you may use different properties.

   <!--<details style="hidden-images">
     <summary>See the <strong>Create connection</strong> screen for Google BigQuery without <em>proxy</em> option</summary>
     <p>
      <img src="../../images/dataflow-google-bigquery-create.png" alt="add a Google BigQuery connection" /></p>
   </details>

   <details>
     <summary>See the <strong>Create connection</strong> screen for Google BigQuery with <em>proxy</em> option</summary>
     <p>
      <img src="../../images/dataflow-google-bigquery-proxy-create.png" alt="add a Google BigQuery connection" /></p>
   </details> -->

   * [Project id]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-project-id)<br/>The identification number given to particular project and its always unique.
   * [Authentication type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-authentication-type)<br/>It can be either Service Account or Access Tokens
   * [Service account key/access Token]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-service-account-key/access-token)<br/>Provide the Service Account key when authentication type is selected as Service account and token when access token is selected as authentication type.
   * [Query priority]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-query-priority)<br/>Specify the time duration to run the query and it can be either Interactive or Batch.
   * [Use proxy]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-use-proxy)<br/>If required, to use a proxy, select the check box Use Proxy and provide the details
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-host)<br/>Specify the hostname or the IP address of the BigQuery system For proxy authentication only.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-port)<br/>Specify the port associated to the BigQuery system For proxy authentication only.
   * [Protocol]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-protocol)<br/>It can be either http or https For proxy authentication only.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
