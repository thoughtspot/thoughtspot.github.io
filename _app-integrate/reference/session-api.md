---
title: [Session API]
keywords: REST,API,data,"REST API"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The Session APIs enable you to manage sessions of the new and existing users.


## Managing login

This call takes a `APPLICATION_FORM_URLENCODED` payload containing a
`username`, a `password`, and an optional `rememberme` flag. If you do not
supply the optional flag, the system uses the default `false` value.

### Resource URL
<code class="api-method-post">post</code> /tspublic/v1/session/login

### Request Parameters

<table>
   <colgroup>
   <col style="width:20%" />
   <col style="width:15%" />
   <col style="width:65%" />
   </colgroup>
   <thead class="thead" style="text-align:left;">
      <tr>
         <th>Form Parameter</th>
         <th>Data Type</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>username</code></td> <td>string</td> <td>Username of the user to log in as.</td> </tr>
    <tr> <td><code>password</code></td> <td>string</td> <td>Password of the user to log in as.</td> </tr>
    <tr> <td><code>rememberme</code></td> <td>string</td> <td>A flag indicating if the user session needs to be remembered. Defaults to <code>false</code>.</td></tr>
  </tbody>
</table>

### Request Example
##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'username=test&password=fhfh2323bbn&rememberme=false' 'https://<instance>/callosum/v1/tspublic/v1/session/login'
```

##### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/session/login
```
### Response Example
```
204 - Successful login
```

## Managing logout

This call logs a user out of an existing session.

### Resource URL
<code class="api-method-post">post</code> /tspublic/v1/session/logout

### Response Example
```
204 - Successful login
```

## Error Codes
<table>
   <colgroup>
      <col style="width:20%" />
      <col style="width:60%" />
      <col style="width:20%" />
   </colgroup>
   <thead class="thead" style="text-align:left;">
      <tr>
         <th>Error Code</th>
         <th>Description</th>
         <th>HTTP Code</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>10002</code></td>  <td>Bad request. Invalid parameter values.</td> <td><code>400</code></td></tr>
    <tr> <td><code>10003</code></td>  <td>Authentication token of type could not be authenticated by any configured realms.  Please ensure that at least one realm can authenticate these tokens.</td><td><code>401</code></td></tr>
  </tbody>
</table>
