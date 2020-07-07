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

   <details style="hidden-images">
     <summary>See the <strong>Create connection</strong> screen for Google BigQuery without <em>proxy</em> option</summary>
     <p>
      <img src="../../images/dataflow-google-bigquery-create.png" alt="add a Google BigQuery connection" /></p>
   </details>

   <details>
     <summary>See the <strong>Create connection</strong> screen for Google BigQuery with <em>proxy</em> option</summary>
     <p>
      <img src="../../images/dataflow-google-bigquery-proxy-create.png" alt="add a Google BigQuery connection" /></p>
   </details>

   * [Project id]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-project-id)<br/>The identification number given to particular project and its always unique.<br/>Mandatory field.
   * [Authentication type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-authentication-type)<br/>It can be either Service Account or Access Tokens<br/>Mandatory field.
   * [Service account key/access Token]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-service-account-key/access-token)<br/>Provide the Service Account key when authentication type is selected as Service account and token when access token is selected as authentication type.<br/>Mandatory field.
   * [Query priority]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-query-priority)<br/>Specify the time duration to run the query and it can be either Interactive or Batch.<br/>Optional field.
   * [Use proxy]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-use-proxy)<br/>If required, to use a proxy, select the check box Use Proxy and provide the details<br/>Optional field.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-host)<br/>Specify the hostname or the IP address of the BigQuery system<br/>Optional field. For proxy authentication only.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-port)<br/>Specify the port associated to the BigQuery system<br/>Optional field. For proxy authentication only.
   * [Protocol]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-conn-protocol)<br/>It can be either http or https<br/>Optional field. For proxy authentication only.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#connection-properties).

5. Click **Create connection**.   
