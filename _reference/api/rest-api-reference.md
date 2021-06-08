---
title: [Public REST API reference]
summary: "ThoughtSpot provides several REST APIs to manage users, sessions, ThoughtSpot data objects."
last_updated: 6/8/2021
toc: false
sidebar: mydoc_sidebar
redirect_from:
- /app-integrate/reference/public-api-reference.html
permalink: /:collection/:path.html
---
Use the following REST APIs to programmatically manage ThoughtSpot users, user groups, sessions, and data objects.

To access REST APIs, you must authenticate through SAML SSO. For more information on configuring SAML, see [SAML SSO]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html).

<table>
   <colgroup>
      <col style="width:20%" />
      <col style="width:40%" />
      <col style="width:40%" />
   </colgroup>
   <thead>
      <tr>
         <th>API Service</th>
         <th>Request URLs</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
   <tr>
      <td rowspan="5"><a href="{{ site.baseurl }}/reference/api/user-api.html">User</a></td>
      <td><code class="api-method-post">POST /tspublic/v1/user/transfer/ownership </code></td>
      <td>Transfer ownership of all objects from one user to another.</td>
      </tr>
  <tr>
      <td><code class="api-method-post">POST /tspublic/v1/user/sync</code> </td>
      <td>Synchronize principal from your external system with ThoughtSpot.</td>
   </tr>
   <tr>
      <td><code class="api-method-post">POST /tspublic/v1/user/updatepassword</code></td>
      <td>Change the password of a user.</td>
   </tr>

   <tr>
      <td><code class="api-method-get">GET /tspublic/v1/user/list</code></td>
      <td>Get all users, groups and their inter-dependencies.</td>
   </tr>
   <tr>
      <td><code class="api-method-get">POST /tspublic/v1/user/updatepreference </code></td>
      <td>Get the visualization headers from the ThoughtSpot system.</td>
   </tr>
   <tr>
          <td rowspan="2"><a href="{{ site.baseurl }}/reference/api/group-api.html">Group</a></td>
          <td><code class="api-method-post">POST /tspublic/v1/group/addprivilege</code> </td>
          <td>Add a privilege to a group.</td>
       </tr>
       <tr>
          <td><code class="api-method-post">POST /tspublic/v1/group/removeprivilege</code> </td>
          <td>Remove a privilege from a group.</td>
       </tr>  
       <tr>
          <td rowspan="4"><a href="{{ site.baseurl }}/reference/api/session-api.html">Session</a></td>
          <td><code class="api-method-post">POST /tspublic/v1/session/login</code></td>
          <td>Sign a user in to ThoughtSpot.</td>
          </tr>
      <tr>
          <td><code class="api-method-post">POST /tspublic/v1/session/logout</code> </td>
          <td>Log out a user from an existing session.</td>
       </tr>
       <tr>
           <td><code class="api-method-post">POST /tspublic/v1/session/auth/token</code> </td>
           <td>Obtain an authentication token for a user.</td>
        </tr>
        <tr>
            <td><code class="api-method-post">GET /tspublic/v1/session/login/token</code> </td>
            <td>Log in an authenticated user when trusted authentication is enabled. </td>
         </tr>
       <tr>
         <td><a href="{{ site.baseurl }}/reference/api/pinboarddata.html">Pinboard Data</a></td>
         <td><code class="api-method-post">POST /tspublic/v1/pinboarddata</code> </td>
         <td>Get the pinboard data from the ThoughtSpot system.</td>
      </tr>
      <tr>
         <td><a href="{{ site.baseurl }}/reference/api/pinboard-export-api.html">Pinboard Export</a></td>
         <td><code class="api-method-post">POST /tspublic/v1/export/pinboard/pdf</code> </td>
         <td>Export a pinboard or the visualizations in a pinboard as a PDF file.</td>
      </tr>
     <tr>
         <td rowspan="4"><a href="{{ site.baseurl }}/reference/api/metadata-api.html">Metadata</a></td>
         <td><code class="api-method-get">GET /tspublic/v1/metadata/listobjectheaders</code> </td>
         <td>List the metadata object headers in the repository.</td>
      </tr>
      <tr>
         <td><code class="api-method-get">GET /tspublic/v1/metadata/listvizheaders</code> </td>
         <td>Get the visualization headers from the ThoughtSpot system.</td>
      </tr>
      <tr>
         <td><code class="api-method-get">GET /tspublic/v1/metadata/listas</code> </td>
         <td>Get a list of metadata objects for a user or user group.</td>
      </tr>
      <tr>
         <td><code class="api-method-get">POST /tspublic/v1/metadata/assigntag</code> </td>
         <td>Assign tags to a metadata object such as a pinboard, search answer, table, worksheet, or view.</td>
      </tr>
    <tr>
         <td><a href="{{ site.baseurl }}/reference/api/search-data-api.html">Search Data</a></td>
         <td><code class="api-method-post">POST /tspublic/v1/searchdata</code> </td>
         <td>Search data from a specific data source in the ThoughtSpot system.</td>
      </tr>
    <tr>
       <td rowspan="2"><a href="{{ site.baseurl }}/reference/api/tml-api.html">TML</a></td>
       <td><code class="api-method-post">POST /tspublic/v1/metadata/tml/import</code> </td>
       <td>Validate and import TML objects.</td>
    </tr>
    <tr>
       <td><code class="api-method-post">POST /tspublic/v1/metadata/tml/export</code> </td>
       <td>Export TML objects.</td>
    </tr>
    <tr>
       <td rowspan="2"><a href="{{ site.baseurl }}/reference/api/security-api.html">Security</a></td>
       <td><code class="api-method-post">POST /tspublic/v1/security/share</code> </td>
       <td>Share ThoughtSpot objects with another user or user group.</td>
    </tr>
    <tr>
       <td><code class="api-method-post">POST /tspublic/v1/security/shareviz</code> </td>
       <td>Share a specific ThoughtSpot visualization with another user or user group.</td>
    </tr>
   </tbody>
</table>
