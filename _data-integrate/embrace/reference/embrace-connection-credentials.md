---
title: [Connectors reference]
last_updated: 06/12/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of all of the external database connectors, and their connection credentials, that you need to save in ThoughtSpot Embrace. As you create a new external connection, you need specific connection information to establish seamless and secure connection with that database.

{% include note.html content="Keep watching this space for more external DB connection details that ThoughtSpot Embrace will support in future." %}

## Snowflake
<dl id="embrace-snowflake-ref">
  <dlentry id="embrace-snowlake-ref-connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new Snowflake connection name.<br/>Mandatory field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-connection-description">
    <dt>Connection description</dt>
    <dd>Provide a short description of the connection.<br/>Optional field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-account-name">
   <dt>Account name</dt>
   <dd>Enter the account name associated with your Snowflake connection.
   The account name is part of the URL that you use to access the Snowflake UI. It is the portion of the URL before <code>snowflakecomputing.com</code>.<br/>  
   <strong>Example</strong>: If your URL is <code>https://abcd.xyz.efg.snowflakecomputing.com</code>, your account name is <code>abcd.xyz.efg</code>.<br/>Mandatory field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-user">
    <dt>User</dt>
    <dd>Enter the Snowflake account username.<br/>Mandatory field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-password">
    <dt>Password</dt>
    <dd>Enter the Snowflake account password.<br/>Mandatory field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-role">
    <dt>Role</dt>
    <dd>Specify the privilege of the user.<br/>Mandatory field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-warehouse">
    <dt>Warehouse</dt>
    <dd>Specify the warehouse associated with the connection.<br/>Mandatory field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-database">
    <dt>Database</dt>
    <dd>Specify the database associated with the account.<br/>Optional field.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-schema">
    <dt>Schema</dt>
    <dd>Specify the schema associated with the database.<br/>Optional field.</dd>
  </dlentry>
</dl>  

## Related articles
-   [Add a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/setup-a-new-connection.html)
-   [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
