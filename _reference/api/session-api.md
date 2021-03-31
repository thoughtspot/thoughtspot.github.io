---
title: [Session API]
summary: "The Session APIs enable you to programmatically manage ThoughtSpot user sessions."
last_updated: 3/30/2021
redirect_from:
- /app-integrate/reference/session-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The Session APIs enable you to manage the sessions of ThoughtSpot users.

## Log in a user

Use this API to authenticate and log in a user.

### Resource URL
```
POST /tspublic/v1/session/login
```
### Request Parameters

| Form Parameter | Data Type | Description                                                         |
|----------------|-----------|---------------------------------------------------------------------|
| `username`     | string    | Username of the user account.                                       |
| `password`      | string    | The password of the user account.                                   |
| `rememberme`     | boolean   | A flag to remember the user session. The system default is `false`. |

### Example requests

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'username=test&password=fhfh2323bbn&rememberme=false' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/login'
```

##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/login
```
### Response codes

| HTTP Code | Description                |
|-----------|----------------------------|
| **200**   | User logged in             |
| **204**   | Successful login           |
| **401**   | Login failure/unauthorized request|

## Obtain an authentication token for a user

Use this API to obtain an authentication token. The authentication token is required if a token-based trusted authentication service is used for authenticating ThoughtSpot users.

### Resource URL
```
POST /tspublic/v1/session/auth/token
```
### Request parameters

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Form Parameter</th>
<th style="text-align: left;">Data Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>secret_key</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The authentication token string provided by the ThoughtSpot application server.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>username</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The user name of the user configured in ThoughtSpot.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>access_level</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>User access permission. Valid values are:</p>
<ul>
<li><p><code>FULL</code> - Allow full access.</p></li>
<li><p><code>REPORT_BOOK_VIEW</code> - Allow view access to visualizations.</p></li>
</ul></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>id</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The GUID of the ThoughtSpot object. This parameter is required if the <code>access_level</code> is set to <code>REPORT_BOOK_VIEW</code>.</p></td>
</tr>
</tbody>
</table>

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/auth/token'
```

##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/auth/token
```
### Example response

If the request parameters are assigned correct values, the API returns an authentication token for the user.

### Response codes

| HTTP Code | Description                                         |
|-----------|-----------------------------------------------------|
| **200**   | The authentication token is generated successfully |
| **401**   | Unauthorized request                       |

## Log out a user

Use this API to log out a current user from an existing session.

### Resource URL
```
POST /tspublic/v1/session/logout
```
### Example request
##### cURL

``` 
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/logout'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/logout
```
### Response codes

| HTTP Code | Description                 |
|-----------|-----------------------------|
| **200**   | User logged out             |
| **204**   | Successful logout           |
| **401**   | Logout failure/unauthorized request|
