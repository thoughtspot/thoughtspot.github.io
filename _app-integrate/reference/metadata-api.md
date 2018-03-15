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

### Response Body

Response body of each returned object obtained has these first class citizens:

* `id` (GUID)
* `name` (String)
* `description` (String)
* `author` (GUID)
* `created` (Epoch)
* `modified` (Epoch)
* `modifiedBy` (GUID)
* `owner` (GUID)
* `isAutoCreated` (boolean)
* `isAutoDeleted` (boolean)

### Response Code

```
200
```

### Response Headers

```
{
  "x-callosum-incident-id": "6bfb1700-eec6-4be9-b7e6-ba205c313c91",
  "x-callosum-trace-id": "8f998669-7277-402e-a11a-a295acc2b916",
  "date": "Thu, 15 Mar 2018 19:58:43 GMT",
  "content-encoding": "gzip",
  "x-callosum-request-time-us": "209241",
  "server": "ThoughtSpot",
  "status": "200",
  "vary": "Accept-Encoding",
  "content-type": "application/json",
  "pragma": "no-cache",
  "cache-control": "no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0",
  "content-security-policy": "script-src 'self'",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-ua-compatible": "IE=edge"
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
curl -X GET --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot'
  'https://<name>/callosum/v1/tspublic/v1/metadata/listvizheaders?id=e3452291-bed7-478d-a0ed-d710e0e53e9b'
```

### Response Body

Body of each response has these first class citizens:

* `id` (GUID)
* `name` (String)
* `author` (GUID)
* `created` (Epoch)
* `modified` (Epoch)
* `modifiedBy` (GUID)
* `owner` (GUID)

### Response Code

```
200
```

### Response Headers

```
{
  "x-callosum-incident-id": "6f10c360-1dc8-4469-8d7d-41c7eab4d883",
  "x-callosum-trace-id": "70d91ca9-7278-4926-8161-bec75bfe3c5e",
  "date": "Sun, 19 Feb 2017 03:19:17 GMT",
  "content-encoding": "gzip",
  "x-callosum-request-time-us": "3437",
  "server": "nginx",
  "vary": "Accept-Encoding",
  "content-type": "application/json",
  "pragma": "no-cache",
  "cache-control": "no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0",
  "transfer-encoding": "chunked",
  "content-security-policy": "script-src 'self'",
  "connection": "keep-alive",
  "x-callosum-ip": "192.168.2.247",
  "x-ua-compatible": "IE=edge"
}
```
