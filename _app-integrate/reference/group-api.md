---
title: [group API]
keywords: REST,API,data,"REST API"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## POST v1/group/addprivilege

Adds a `DATADOWNLOADING` or `USERDATAUPLOADING` privilege to the system default
`ALL_GROUP`. All users in the system are always part of `ALL` group. By default,
this group does not have either permission.

All the data sources which the `ALL_GROUP` has permissions to are downloadable
when `DATADOWNLOADING` is set.


### Parameters

<table>
   <colgroup>
      <col style="width:25%" />
      <col style="width:75%" />
   </colgroup>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>privilege</code></td>
         <td>A string representing the privilege to add. You can set `DATADOWNLOADING` or `USERDATAUPLOADING` privilege.</td>
      </tr>
      <tr>
         <td><code>groupNames</code></td>
         <td>A string representing the name of the group to add the privilege to. Only `ALL_GROUP` is accepted.</td>
      </tr>
   </tbody>
</table>

## Return codes

* 200
* 204 Success
* 401 Failure/unauthorized

### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/group/addprivilege
```


## POST v1/group/removeprivilege

Removes a privilege from a group.


### Parameters

<table>
   <colgroup>
      <col style="width:25%" />
      <col style="width:75%" />
   </colgroup>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
   <tr>
      <td><code>privilege</code></td>
      <td>A string representing the privilege to remove. You can set `DATADOWNLOADING` or `USERDATAUPLOADING` privilege.</td>
   </tr>
   <tr>
      <td><code>groupNames</code></td>
      <td>A string representing the name of the group to remove the privilege from. Only `ALL_GROUP` is accepted.</td>
   </tr>
   </tbody>
</table>

## Return codes

* 200
* 204 Success
* 401 Failure/unauthorized

### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/group/addprivilege
```
