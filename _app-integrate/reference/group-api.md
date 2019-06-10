---
title: [group API]
keywords: REST,API,data,"REST API", group API
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The Group APIs enable you to set or remove a privilege to/from a group or multiple groups.
## Add a privilege

Use this API to add a `DATADOWNLOADING` or `USERDATAUPLOADING` privilege to the system default `ALL_GROUP`. All users in the system are always a part of `ALL_GROUP` group. By default, this group does not have either permission.

All the data sources which the `ALL_GROUP` has permissions to are downloadable
when `DATADOWNLOADING` is set.

### Resource URL

<code class="api-method-post">post</code> /tspublic/v1/group/addprivilege

### Request Parameters

<table>
   <colgroup>
   <col style="width:20%" />
   <col style="width:15%" />
   <col style="width:65%" />
   </colgroup>
   <thead>
      <tr>
         <th>Form Parameter</th>
         <th>Data Type</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>privilege</code></td>
         <td>string</td>
         <td>A string representing the privilege to add. You can set `DATADOWNLOADING` or `USERDATAUPLOADING` privilege.</td>
      </tr>
      <tr>
         <td><code>groupNames</code></td>
         <td>string</td>
         <td>A string representing the name of the group to add the privilege to. Only `ALL_GROUP` is accepted.</td>
      </tr>
   </tbody>
</table>

### Request Example

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'privilege=Can%20upload%20user%20data&groupNames=Consumer' 'https://<instance>/callosum/v1/tspublic/v1/group/addprivilege'
```

##### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/group/addprivilege
```


## Remove a privilege

Removes a privilege from a group.

### Resource URL

<code class="api-method-post">post</code> /tspublic/v1/group/removeprivilege



### Request Parameters

<table>
   <colgroup>
   <col style="width:20%" />
   <col style="width:15%" />
   <col style="width:65%" />
   </colgroup>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Data Type</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
   <tr>
      <td><code>privilege</code></td>
      <td>string</td>
      <td>A string representing the privilege to remove. You can set `DATADOWNLOADING` or `USERDATAUPLOADING` privilege.</td>
   </tr>
   <tr>
      <td><code>groupNames</code></td>
      <td>string</td>
      <td>A string representing the name of the group to remove the privilege from. Only `ALL_GROUP` is accepted.</td>
   </tr>
   </tbody>
</table>
### Request Example

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'privilege=admin&groupNames=consumer' 'https://<instance>/callosum/v1/tspublic/v1/group/removeprivilege'
```
##### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/group/removeprivilege
```
