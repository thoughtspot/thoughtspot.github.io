---
title: [Connection reference for Oracle ADW]
last_updated: 1/20/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Learn about the fields used to create a ADW connection using ThoughtSpot Embrace. You need specific information to establish a seamless and secure connection.

<dl>
  <dlentry id="connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new ADW connection name.<br/>Mandatory field.</dd></dlentry>
  <dlentry id="connection-description">
      <dt>Connection description</dt>
      <dd>Provide a short description of the connection.<br/>Optional field.</dd></dlentry>
  <dlentry id="account-name">
      <dt>Account name</dt>
      <dd>Enter the account name associated with the ADW connection.<br/>Mandatory field.</dd>
      <dd>The account name is part of the URL that you use to access the ADW UI. It is the portion of the URL before <strong>ADWcomputing.com</strong>.</dd>
      <dd id="example"><strong><em>Example</em></strong>: If your URL is <strong>https://abcd.xyz.efg.ADWcomputing.com</strong>, your account name is <strong>abcd.xyz.efg</strong>.</dd>
      <dd id="guidelines"><p>If you cannot find your <strong>Full account name</strong> in ADW, see the following examples for determining your account based on the account name, cloud platform, and region. Assume that the <strong>account name</strong> is <em>xy12345</em>.</p>
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
    <dlentry id="user">
      <dt>User</dt>
      <dd>Enter the ADW account username.<br/>Mandatory field.</dd></dlentry>  
    <dlentry id="password">
      <dt>Password</dt>
      <dd>Enter the ADW account password.<br/>Mandatory field.</dd></dlentry>
    <dlentry id="role">
      <dt>Role</dt>
      <dd>Specify the privilege of the user.<br/>Mandatory field.</dd></dlentry>
    <dlentry id="warehouse">
      <dt>Warehouse</dt>
      <dd>Specify the warehouse associated with the connection.<br/>Mandatory field.</dd></dlentry>  
    <dlentry id="database">
      <dt>Database</dt>
      <dd>Specify the database associated with the account.<br/>Optional field.</dd></dlentry>  
  <dlentry id="schema">
      <dt>Schema</dt>
      <dd>Specify the schema associated with the database.<br/>Optional field.</dd></dlentry>
</dl>
