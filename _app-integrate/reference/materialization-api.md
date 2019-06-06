---
title: [Materialization API]
keywords: REST,API,data,"REST API"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Re-executes the query and load data into the materialized view.

- Public namespace: Data
- Current URL path: `/tspublic/v1/materialization/refreshview/{id}`

## Parameters

<table>
   <colgroup>
      <col style="width:15%" />
      <col style="width:85%" />
   </colgroup>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>id</code></td>
         <td>GUID id of the pinboard query string.</td>
      </tr>
     <tr>
         <td><code>vizid</code></td>
         <td>Optional GUID ids of the visualizations query string.</td>
      </tr>
      <tr>
         <td><code>batchsize</code></td>
         <td>An integer defining the query batch size. The system default is <code>-1</code>. </td>
      </tr>
      <tr>
         <td><code>pagenumber</code></td>
         <td>
            <p>An integer providing another way to specify an offset.  The system default is <code>-1</code>. Alternate way to set offset. This is:</p>
            <p><code>1-based indexingOffset = (pageNumber - 1) * batchSize query integer</code></p>
         </td>
         </tr>
     <tr>
         <td><code>offset</code></td>
         <td>An integer specifying the query offset. The system default is <code>-1</code>. </td>
      </tr>
      <tr>
         <td><code>formattype</code></td>
         <td>A string specifying the format type.  Valid values are <code>COMPACT</code> or <code>FULL</code> JSON. The system default is <code>COMPACT</code>. </td>
      </tr>
   </tbody>
</table>

## HTTP Status Codes

* 200 Gets the data of a pinboard/visualization.
* 400 Invalid pinboard id.


## Response example:

Curl

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'https://<instance>/callosum/v1/tspublic/v1/pinboarddata?batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT'
```

## Request URL

```
https://<instance>/callosum/v1/tspublic/v1/pinboarddata?batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT
```

## Response Body

```
no content
```

## Response Code

```
400
```

## Response Headers

```
{
  "x-callosum-incident-id": "2ff9d2e4-c928-4192-8250-8450de264ab7",
  "x-callosum-trace-id": "2e551b8d-d3f4-4cf1-af90-a49bb246ad92",
  "date": "Sun, 19 Feb 2017 03:39:41 GMT",
  "x-callosum-request-time-us": "11536",
  "server": "nginx",
  "pragma": "no-cache",
  "cache-control": "no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0",
  "content-security-policy": "script-src 'self'",
  "connection": "keep-alive",
  "content-length": "0",
  "x-callosum-ip": "192.168.2.247",
  "content-type": null
}
```
