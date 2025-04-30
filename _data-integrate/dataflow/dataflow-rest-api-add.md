---
title: [Add a REST API connection]
last_updated: 11/25/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an application through REST API using ThoughtSpot DataFlow.

To add a new connection to Salesforce, follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the REST API **Connection type**, the rest of the connection properties appear.

   * [Authentication type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-authentication-type)<br/>Specify the type of authentication that is required to connect to the REST API service.                            
   * [REST API base URL]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-rest-api-base-url)<br/>Specify the end point URL to access REST API web-service.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-user)<br/>Specify the user who connects to the Rest web service. This user must have data access privileges.<br/>For BASIC authentication type only.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-password)<br/>Specify the password for the User.<br/>For BASIC authentication type only.
   * [Obtain access token]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-obtain-access-token)<br/>Select this option to use access key/token to connect to the REST API web-service<br/>For OAuth 2.0 authentication type only.
   * [Access token]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-access-token)<br/>Specify the access token to authenticate REST API.<br/>For OAuth 2.0 authentication type only.
   * [Refresh token]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-refresh-token)<br/>Specify the refresh token to authenticate REST API.<br/>For OAuth 2.0 authentication type only.
   * [OAuth client ID]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-oauth-client-id)<br/>Specify the OAuth client ID<br/>Displayed only when "obtain access token" check-box is selected
   * [Mask client secret]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-mask-client-secret)<br/>Specify the OAuth client secret<br/>Displayed only when "obtain access token" check-box is selected
   * [OAuth authorization URL]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-oauth-authorization-url)<br/>Specify the OAuth authorization URL <br/>Displayed only when "obtain access token" check-box is selected
   * [OAuth accesstoken URL]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-oauth-accesstoken-url)<br/>Specify the OAuth accesstoken URL <br/>Displayed only when "obtain access token" check-box is selected
   * [Scope]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-scope)<br/>Specify the number of users to access the account<br/>Displayed only when "obtain access token" check-box is selected
   * [Callback URL]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-callback-url)<br/>Secured domain URL of the repo which is used to register in REST API<br/>Displayed only when "obtain access token" check-box is selected
   * [REST API parameters]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#dataflow-rest-api-conn-rest-api-parameters)<br/>When adding REST API parameters, click <strong>Add</strong>, and then specify the <code>Parameter name</code>, <code>Value</code>, and if the parameter is a <code>Header</code>.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-rest-api-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
