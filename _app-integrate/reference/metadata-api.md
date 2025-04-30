---
title: [metadata API]
keywords: REST,API,data,"REST API"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

These two APIs work with metadata for objects in the system.


## GET /tspublic/v1/metadata/listobjectheaders

Lists the metadata object headers in the repository

### Parameters

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
    <tr>
      <td><code>type</code></td>
      <td>A string specifying the metadata object type. Valid values for this field are:
         <ul>
         <li><code>REPORT_BOOK</code></li>
         <li><code>QUESTION_ANSWER_BOOKPINBOARD_ANSWER_BOOK</code></li>
         <li><code>QUESTION_ANSWER_SHEET</code></li>
         <li><code>PINBOARD_ANSWER_SHEET</code></li>
         <li><code>LOGICAL_COLUMN</code></li>
         <li><code>LOGICAL_TABLE</code></li>
         <li><code>LOGICAL_RELATIONSHIP</code></li>
         <li><code>TAG</code></li>
         <li><code>DATA_SOURCE</code></li>
         </ul>
         </td>
    </tr>
    <tr>
      <td><code>subtypes</code></td>
      <td>List of sub-types of metadata object. This setting applies to the  <code>LOGICAL_TABLE</code> type. Valid values are:
      <ul>
      <li><code>ONE_TO_ONE_LOGICAL</code></li>
      <li><code>WORKSHEET</code></li>
      <li><code>PRIVATE_WORKSHEET</code></li>
      <li><code>USER_DEFINED</code></li>
      <li><code>AGGR_WORKSHEET</code></li>
      </ul>
      </td>
    </tr>
    <tr>
      <td><code>category</code></td>
      <td>A string specifying the metadata object category. Valid values are <code>ALL</code> or <code>MY</code>.</td>
    </tr>
    <tr>
      <td><code>sort</code></td>
      <td>Sort order of returned headers. Valid values - DEFAULT
          <ul>
          <li><code>NAME</code></li>
          <li><code>DISPLAY_NAME</code></li>
          <li><code>AUTHOR</code></li>
          <li><code>CREATED</code></li>
          <li><code>MODIFIED</code></li>
          </ul>
    </td>
    </tr>
    <tr>
      <td><code>sortascending</code></td>
      <td>A boolean flag specifying sort order. A null value defines default order. True signifies ascending order. False signifies descending order.</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>An integer specifying the batch offset to fetch page of headers. A value of <code>-1</code> implies first page.</td>
    </tr>
    <tr>
      <td><code>batchsize</code></td>
      <td>An integer specifying the batch size. The system default is unspecified, a value of <code>-1</code> implies no pagination.</td>
    </tr>
    <tr>
      <td><code>tagname</code></td>
      <td>A JSON string array containing  a set of tag names to filter headers by.</td>
    </tr>
    <tr>
      <td><code>pattern</code></td>
      <td>A string specifying a object name pattern to match. Use <code>%</code> for wildcard match.</td>
    </tr>
    <tr>
      <td><code>skipids</code></td>
      <td>A string identifying the object metadata GUIDs to exclude.</td>
    </tr>
    <tr>
      <td><code>fetchids</code></td>
      <td>A string identifying the object metadata GUIDs to fetch.</td>
    </tr>
    <tr>
      <td><code>auto_created</code></td>
      <td>A boolean specifying whether to list auto created objects only. A value of null signifies return all.</td>
    </tr>
   </tbody>
  </table>


### HTTP Status Code

* `200` Gets the visualization headers.

### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/metadata/listobjectheaders
```

For example:

```
curl -X GET --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot'
    'https://<instance>/callosum/v1/tspublic/v1/metadata/listobjectheaders?category=ALL&sort=DEFAULT&offset=-1'
```

For example:

```
[
  {
    "id": "6715f768-8930-4180-9a3d-1efdbfaa8e7f",
    "name": "Headline Pinboard",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1519940021267,
    "modified": 1519945210514,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "6715f768-8930-4180-9a3d-1efdbfaa8e7f",
    "isAutoCreated": false,
    "isAutoDelete": false
  },
  {
    "id": "262abdac-b00f-4f5f-ad33-fcf10154184f",
    "name": "Empty Pinboard",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1519945152030,
    "modified": 1519945152030,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "262abdac-b00f-4f5f-ad33-fcf10154184f",
    "isAutoCreated": false,
    "isAutoDelete": false
  },
  {
    "id": "327f4d60-c502-43b0-b1d4-c73df5031a2e",
    "name": "Charts Pinboard",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1519880454269,
    "modified": 1519945014529,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "327f4d60-c502-43b0-b1d4-c73df5031a2e",
    "isAutoCreated": false,
    "isAutoDelete": false
  },
  ...snip...,
  {
    "id": "e82fe65a-7ac0-4282-a783-7a35c01b8dbd",
    "name": "Broken Pinboard",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1455598191207,
    "modified": 1455598218094,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "e82fe65a-7ac0-4282-a783-7a35c01b8dbd",
    "isAutoCreated": false,
    "isAutoDelete": false
  }
]
```

### Response Code

```
200
```

### Response Headers

```
{
  "x-callosum-trace-id": "c8008291-c074-45cf-b88a-371253166b5b",
  "date": "Tue, 27 Mar 2018 17:38:54 GMT",
  "content-encoding": "gzip",
  "x-callosum-request-time-us": "11694",
  "transfer-encoding": "chunked",
  "x-nginx-localhost": "172.18.231.12",
  "x-callosum-ip": "172.18.231.12",
  "connection": "keep-alive",
  "x-ua-compatible": "IE=edge",
  "x-callosum-incident-id": "791eb139-5fd1-478a-9002-35a81b0dd4aa",
  "pragma": "no-cache",
  "server": "ThoughtSpot",
  "vary": "Accept-Encoding",
  "content-type": "application/json",
  "cache-control": "no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0",
  "content-security-policy": "script-src 'self'"
}
```

## GET /tspublic/v1/metadata/listvizheaders

Gets the visualization headers from the ThoughtSpot system. The expected output
includes a list of objects, each with information about the visualizations of
the given pinboard.

### Parameters

<table>
   <colgroup>
      <col style="width:15%" />
      <col style="width:85%" />
   </colgroup>
   <thead class="thead" style="text-align:left;">
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
    <tr>
      <td><code>id</code></td>
      <td>A string specifying the GUID of a particular answer (reportbook).</td>
    </tr>
</tbody>
</table>

### HTTP Status Code

* `200` Gets the visualization headers.
* `400` Invalid pinboard GUID.


### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/metadata/listvizheaders
```

For example:

```
curl -X GET --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'http://172.18.231.12:8088/callosum/v1/tspublic/v1/metadata/listvizheaders?id=327f4d60-c502-43b0-b1d4-c73df5031a2e'
```

### Response Body

An array where each response has these first class citizens:

* `size` (String enumeration)
* `vizType` (String enumeration)
* `id` (GUID)
* `name` (String)
* `author` (GUID)
* `created` (Epoch)
* `modified` (Epoch)
* `modifiedBy` (GUID)
* `owner` (GUID)

For example:

```
[
  {
    "size": "m",
    "vizType": "CHART",
    "title": {
      "value": {
        "text": "Line chart- horizontal 900-1200 - data labels"
      }
    },
    "id": "8fbf93e6-54ba-4a20-b2bb-4afe8dca5321",
    "name": "1177d886-27fd-4dff-a617-8defadd27a6b::6e87081a-fc4c-4bd9-b1e0-cfe145868498 Pinboard Ref",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1519880461956,
    "modified": 1519945014529,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "6f403a20-fe68-43e7-a0bf-a4e706740361"
  },
...snip...
  {
    "size": "ls",
    "vizType": "CHART",
    "title": {
      "value": {
        "text": "Percent as chart"
      }
    },
    "id": "eb59aa25-1d2b-44f4-b5b4-b390105d56a8",
    "name": "b8c26ea1-b341-4a18-871b-cc67a6bb237f::80cd5837-d5a7-491d-a3dc-490dfb3dbb0f Pinboard Ref",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1519932657762,
    "modified": 1519945014529,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "6f403a20-fe68-43e7-a0bf-a4e706740361"
  }
]
```

### Response Code

```
200
```

### Response Headers

```
{
  "x-callosum-trace-id": "c0c84945-be03-414c-80c3-47b1b0949803",
  "date": "Tue, 27 Mar 2018 17:46:47 GMT",
  "content-encoding": "gzip",
  "x-callosum-request-time-us": "35402",
  "transfer-encoding": "chunked",
  "x-nginx-localhost": "172.18.231.12",
  "x-callosum-ip": "172.18.231.12",
  "connection": "keep-alive",
  "x-ua-compatible": "IE=edge",
  "x-callosum-incident-id": "4ed1364c-b018-43a8-8486-ee954cd3dae3",
  "pragma": "no-cache",
  "server": "ThoughtSpot",
  "vary": "Accept-Encoding",
  "content-type": "application/json",
  "cache-control": "no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0",
  "content-security-policy": "script-src 'self'"
}
```
