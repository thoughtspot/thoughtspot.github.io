---
title: [Public API reference]
keywords: REST,API,data,"REST API"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This object has two POST calls, one for `login` and one for `logout`.


## POST /tspublic/v1/session/login

This call takes a `APPLICATION_FORM_URLENCODED` payload containing a
`username`, a `password`, and an optional `rememberme` flag. If you do not
supply the optional flag, the system uses the default `false` value.

### Inputs

<table>
   <colgroup>
      <col style="width:25%" />
      <col style="width:75%" />
   </colgroup>
   <thead class="thead" style="text-align:left;">
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>username</code></td>  <td>Username of the user to log in as.</td> </tr>
    <tr> <td><code>password</code></td>  <td>Password of the user to log in as.</td> </tr>
    <tr> <td><code>rememberme</code></td>  <td>A flag indicating if the user session needs to be remembered. Defaults to <code>false</code>.</td></tr>
  </tbody>
</table>

### Returns

No object is returned.

### Status Codes

| Code| Description |
|------|-----|
| `204` | On successful login.|
| `401` | On failure to login |


## POST /tspublic/v1/session/logout

This call logs a user out of an existing session.

### Returns

No object is returned.

### Status Codes

| Code| Description |
|------|-----|
| `204` | On successful logout.|
| `401` | On failure or when unauthorized to call.|
