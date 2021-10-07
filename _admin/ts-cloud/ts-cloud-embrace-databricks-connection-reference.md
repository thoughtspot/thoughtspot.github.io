---
title: [Connection reference for Databricks]
last_updated: 6/7/2022
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You need specific information to establish a seamless and secure connection. The following fields are required, except where noted.

If your Databricks is hosted on Microsoft Azure, see [Databricks on Microsoft Azure connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-databricks-connection-reference.html#databricks-azure).

<dl>
  <dlentry id="connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new Databricks connection name.</dd></dlentry>
  <dlentry id="connection-description">
      <dt>Connection description</dt>
      <dd>Provide a short description of the connection.<i> (Optional)</i></dd></dlentry>
    <dlentry id="host">
      <dt>Host</dt>
      <dd>Enter the Databricks server host name without the protocol.</dd>
      <dd>Example: <b>dbs.example.cloud.databricks.com</b></dd></dlentry>  
    <dlentry id="http-path">
      <dt>HTTP Path</dt>
      <dd>Enter the Databricks HTTP path.</dd></dlentry>
      <dd>For Databricks hosted on Microsoft Azure, you must specify both HTTP path and port. For more information, see <a href="https://docs.microsoft.com/en-us/azure/databricks/integrations/bi/jdbc-odbc-bi#get-server-hostname-port-http-path-and-jdbc-url" target="_blank">Get server hostname, port, HTTP path, and JDBC URL</a></dd></dlentry>  
    <dlentry id="user">
      <dt>User</dt>
      <dd>Email address associated with your Databricks account.</dd></dlentry>
  <dlentry id="password">
      <dt>Password</dt>
      <dd>Specify the password of the Databricks account.</dd></dlentry>
      <dd>For Databricks hosted on Microsoft Azure, you must specify the API token from Databricks. For more information, see <a href="https://docs.microsoft.com/en-us/azure/databricks/dev-tools/api/latest/authentication" target="_blank">Authentication using Azure Databricks personal access tokens</a></dd></dlentry>
</dl>

{: id="databricks-azure"}
## Databricks on Microsoft Azure connection reference

<dl>
  <dlentry id="connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new Databricks connection name.</dd></dlentry>
  <dlentry id="connection-description">
      <dt>Connection description</dt>
      <dd>Provide a short description of the connection.<i> (Optional)</i></dd></dlentry>
    <dlentry id="host">
      <dt>Host</dt>
      <dd>Enter the Databricks server hostname. </dd>
      <dd>For more information, see <a href="https://docs.microsoft.com/en-us/azure/databricks/integrations/bi/jdbc-odbc-bi#get-server-hostname-port-http-path-and-jdbc-url" target=_"blank">Get server hostname, port, HTTP path, and JDBC URL</a></dd>
      <dd>Example: abc-1234567890123456.78.azuredatabricks.net</b></dd></dlentry>  
    <dlentry id="http-path">
      <dt>HTTP Path</dt>
      <dd>Enter the Databricks HTTP path.</dd></dlentry>
      <dd>For more information, see <a href="https://docs.microsoft.com/en-us/azure/databricks/integrations/bi/jdbc-odbc-bi#get-server-hostname-port-http-path-and-jdbc-url" target="_blank">Get server hostname, port, HTTP path, and JDBC URL</a></dd>
      <dd>Example: sql/protocolv1/o/1234567890123456/7890-123456-abc789.</dd></dlentry></dlentry>  
    <dlentry id="user">
      <dt>User</dt>
      <dd>Enter your login email to your Azure account. If this does not work, try “token”.</dd></dlentry>
  <dlentry id="password">
      <dt>Password</dt>
      <dd>Enter your ‘personal access token’ generated in Databricks. This is not the password for your Azure account.</dd></dlentry>
      <dd>For more information, see <a href="https://docs.microsoft.com/en-us/azure/databricks/dev-tools/api/latest/authentication#--generate-a-personal-access-token" target="_blank">Generate a personal access token</a>.</dd></dlentry>
</dl>

For detailed information on how ThoughtSpot with an Azure Databricks cluster, see [Microsoft Azure ThoughtSpot documentation](https://docs.microsoft.com/en-us/azure/databricks/integrations/bi/thoughtspot){:target="_blank"}
