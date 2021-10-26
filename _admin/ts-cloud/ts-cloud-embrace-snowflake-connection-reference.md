---
title: [Connection reference for Snowflake]
last_updated: 12/10/2020
toc: true
redirect_from:
- /data-integrate/embrace/embrace-snowflake-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You need specific information to establish a seamless and secure connection. The following fields are required, except where noted.

<dl>
  <dlentry id="snowflake-connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new Snowflake connection name.</dd></dlentry>
  <dlentry id="snowflake-connection-description">
      <dt>Connection description</dt>
      <dd>Provide a short description of the connection.<i> (Optional)</i></dd></dlentry>
  <dlentry id="snowflake-account-name">
      <dt>Account name</dt>
      <dd>Enter the account name associated with the Snowflake connection.</dd>
      <dd>The account name is part of the URL that you use to access the Snowflake UI. It is the portion of the URL before <strong>snowflakecomputing.com</strong>.</dd>
      <dd id="example"><strong><em>Example</em></strong>: If your URL is <strong>https://abcd.xyz.efg.snowflakecomputing.com</strong>, your account name is <strong>abcd.xyz.efg</strong>.</dd>
      <dd id="guidelines"><p>If you cannot find your <strong>Full account name</strong> in Snowflake, see the following examples for determining your account based on the account name, cloud platform, and region. Assume that the <strong>account name</strong> is <em>xy12345</em>.</p>
      <table>
      <tbody>
      <tr>
      <th>Cloud platform</th>
      <th>Region</th>
      <th>Full account name</th>
      </tr>
      <tr>
      <th rowspan="8">AWS</th>
      <td>US East (N. Virginia)</td>
      <td>xy12345.us-east-1</td>
      </tr>
      <tr>
      <td>US East (Ohio)</td>
      <td>xy12345.us-east-2.aws</td>
      </tr>
      <tr>
      <td>US West (Oregon)</td>
      <td>xy12345</td>
      </tr>
      <tr>
      <td>Canada (Central)</td>
      <td>xy12345.ca-central-1.aws</td>
      </tr>
      <tr>
      <td>EU (Ireland)</td>
      <td>xy12345.eu-west-1</td>
      </tr>
      <tr>
      <td>EU (Frankfurt)</td>
      <td>xy12345.eu-central-1</td>
      </tr>
      <tr>
      <td>Asia Pacific (Singapore)</td>
      <td>xy12345.ap-southeast-1</td>
      </tr>
      <tr>
      <td>Asia Pacific (Sydney)</td>
      <td>xy12345.ap-sowtheast-2</td>
      </tr>
      <tr>
      <th>GCP - <em>Preview</em></th>
      <td>us-central1 (Iowa)</td>
      <td>xy12345.us-central1.gcp</td>
      </tr>
      <tr>
      <th rowspan="6">Azure</th>
      <td>East US 2</td>
      <td>xy12345.east-us-2.azure</td>
      </tr>
      <tr>
      <td>US Gov Virginia</td>
      <td>xy12345.us-gov-virginia.azure</td>
      </tr>
      <tr>
      <td>Canada Central</td>
      <td>xy12345.canada-central.azure</td>
      </tr>
      <tr>
      <td>West Europe</td>
      <td>xy12345.west-europe.azure</td>
      </tr>
      <tr>
      <td>Australia East</td>
      <td>xy12345.australia-east.azure</td>
      </tr>
      <tr>
      <td>Southeast Asia</td>
      <td>xy12345.southeast-asia.azure</td>
      </tr>
      </tbody>
      </table>
      </dd>
      </dlentry>
    <dlentry id="snowflake-user">
      <dt>User</dt>
      <dd>Enter the Snowflake account username.</dd></dlentry>  
    <dlentry id="snowflake-password">
      <dt>Password</dt>
      <dd>Enter the Snowflake account password.</dd></dlentry>
    <dlentry id="snowflake-role">
      <dt>Role</dt>
      <dd>Specify the privilege of the user.</dd></dlentry>
    <dlentry id="snowflake-warehouse">
      <dt>Warehouse</dt>
      <dd>Specify the warehouse associated with the connection.</dd></dlentry>  
    <dlentry id="snowflake-database">
      <dt>Database</dt>
      <dd>Specify the database associated with the account.<i> (Optional)</i></dd></dlentry>  
  <dlentry id="snowflake-schema">
      <dt>Schema</dt>
      <dd>Specify the schema associated with the database.<i> (Optional)</i></dd></dlentry>
  <dlentry id="snowflake-oauth-client-id">
      <dt>OAuth Client ID</dt>
      <dd>Enter the OAuth client ID associated with the Snowflake database.</dd>
  </dlentry>
  <dlentry id="snowflake-oauth-client-secret">
      <dt>OAuth Client Secret</dt>
      <dd>Enter the OAuth client secret associated with the Snowflake database.</dd>
  </dlentry>      
</dl>
