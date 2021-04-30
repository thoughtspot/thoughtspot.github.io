---
title: [Snowflake connection reference]
summary: Learn about the fields used to create a Snowflake connection with ThoughtSpot Embrace.
last_updated: 01/24/2020
redirect_from:
- /7.0.0.mar.sw/data-integrate/embrace/embrace-snowflake-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields of a Snowflake connection in ThoughtSpot Embrace. You need specific information to establish a seamless and secure connection. All fields are required, except where noted.

<dl id="embrace-snowflake-ref">
  <dlentry id="embrace-snowlake-ref-connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new Snowflake connection name.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-connection-description">
    <dt>Connection description</dt>
    <dd>Provide a short description of the connection. <i>(Optional)</i></dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-account-name">
   <dt>Account name</dt>
   <dd>Enter the account name associated with your Snowflake connection.
   The account name is part of the URL that you use to access the Snowflake UI. It is the portion of the URL before <code>snowflakecomputing.com</code>.<br/><br>  
   <strong>Example</strong>: If your URL is <code>https://abcd.xyz.efg.snowflakecomputing.com</code>, your account name is <code>abcd.xyz.efg</code>.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-user">
    <dt>User</dt>
    <dd>Enter the Snowflake account username.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-password">
    <dt>Password</dt>
    <dd>Enter the Snowflake account password.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-role">
    <dt>Role</dt>
    <dd>Specify the privilege of the user.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-warehouse">
    <dt>Warehouse</dt>
    <dd>Specify the warehouse associated with the connection.</dd>
  </dlentry>
  <dlentry id="embrace-snowlake-ref-database">
    <dt>Database</dt>
    <dd>Specify the database associated with the account. <i>(Optional)</i></dd>
  </dlentry>
  <dlentry id="snowflake-oauth-client-id">
      <dt>OAuth</dt>
      <dd>Enter the OAuth client ID associated with the Snowflake database.</dd>
  </dlentry>
  <dlentry id="snowflake-oauth-client-secret">
      <dt>OAuth client secret</dt>
      <dd>Enter the OAuth client secret associated with the Snowflake database.</dd>
  </dlentry>
</dl>

## Important information about OAuth with Snowflake

To obtain the OAuth client ID and client secret, you must configure OAuth in Snowflake. For more information, see: [Configure OAuth for a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-oauth.html).
