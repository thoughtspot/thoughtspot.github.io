---
title: [tsload service API reference]
summary: "The tsload service APIs enable you to load data into ThoughtSpot."
last_updated: 11/18/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Login
Use this API to authenticate and log in a user. **Login** establishes a session with the ThoughtSpot ETL HTTP server. The authentication requires a username and password.

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
    <tr> <td><code>username</code></td> <td>string</td> <td>ThoughtSpot username</td> </tr>
    <tr> <td><code>password</code></td> <td>string</td> <td>ThoughtSpot password</td> </tr>
  </tbody>
</table>

### Request

```
POST /ts_dataservice/v1/public/session HTTP/1.1  
Host: client.mydomain.com Accept: application/json Content-type: application/json
{
"username":"<thoughtspot user name>",
"password":"<thoughtspot password>"
}
```
### Response
```
Status: 200 OK
Set-cookie: token
```
### Example failure responses
```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again.
```
```
Status: 500 INTERNAL SERVER ERROR
error code = INTERNAL, message = Couldn't resolve the authentication service.
```
{% include note.html content="To indicate a new login, we use session (noun), instead of login (verb). If the cookie is not passed in subsequent calls, then requests fail." %}

## StartLoad

After **login**, you use this API start the data load operation. The API call to be used here is “/ts_dataservice/v1/public/loads”. If the load is initiated successfully, the cycle ID, and the load balancer IP are returned. Once complete, you use **Load** to start the actual data load.

### Request
```
POST /ts_dataservice/v1/public/loads  HTTP/1.1  
Cookie: token
{
<load params here. For creating data load. This is a json object.>
}
```

### Response
```
Status: 200 OK
Content-Type: text/plain
Content-Length: xx
{
  "node_address": {
    "host": "host",
    "port": port
  },
  "cycle_id": "cycle_id"
}
```
### Example failure responses
```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again
```
```
Status: 403 FORBIDDEN
User does not have required privileges. Please contact your administrator.
```
```
Status: 400 BAD REQUEST
Invalid input params for starting data load: Request body
```
```
Status: 500 INTERNAL SERVER ERROR
error code = INTERNAL, message = Couldn't resolve the authentication service.
```
## Load

Use this API to load your data.
Data load can be called for multiple chunks of data for the same cycle ID. All of this data is uploaded to the ThoughtSpot cluster unless a commit load is issued.


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
    <tr> <td><code>X-ts-chunk-id</code></td> <td>string</td> <td>ThoughtSpot chunk ID</td> </tr>
    <tr> <td><code>X-ts-chunk-checksum</code></td> <td>string</td> <td>ThoughtSpot chunk checksum</td> </tr>
  </tbody>
</table>


### Request
```
POST /ts_dataservice/v1/public/loads/cycle_id
Cookie: <token>
Content-Type: multipart/form-data; boundary=bndry
X-ts-chunk-id: 1
X-ts-chunk-checksum: XXXXXX (optional)
--bndry
Content-Disposition: form-data; name="file"; filename="sample.csv"

<CSV Data>
--bndry--
```
{% include note.html content="We support multipart form/data, as well as direct data upload." %}

### Response
```
Status: 200 OK
Content-Type: text/plain
Content-Length: xx
Connection: Close
Upload Complete.
```
### Example failure responses
```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again.
```
```
Status: 403 FORBIDDEN
User does not have required privileges. Please contact your administrator.
```
```
Status: 400 BAD REQUEST
Unable to find table in Falcon. Cannot load data.
```
```
Status: 400 BAD REQUEST
Cycle_id=[cycle_id] does not exist.
```
```
Status: 400 BAD REQUEST
Cannot not connect to falcon_manager.
```
```
Status: 500 INTERNAL SERVER ERROR
error code = INTERNAL, message = Couldn't resolve the authentication service.
```

## CommitLoad

Once the data load is complete, you use **CommitLoad** to commit data to be loaded into the Falcon database.

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
    <tr> <td><code>X-ts-chunks</code></td> <td>string</td> <td>Number of chunks</td> </tr>
    <tr> <td><code>X-ts-load-checksum</code></td> <td>string</td> <td>Checksum of full data</td> </tr>
  </tbody>
</table>

### Request

```
POST /ts_dataservice/v1/public/loads/cycle_id/commit
Cookie: <token>
X-ts-chunks: N
X-ts-load-checksum: XXXXXX (optional)
```
{% include note.html content="Data should be empty. We also check that the tsload service has received all of the chunks before doing endload." %}

### Response
```
Status: 200 OK
Content-Type: text/plain
Content-Length: xx
Commit load cycle request made.
```

### Example failure responses

```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again.
```
```
Status: 403 FORBIDDEN
User does not have required privileges. Please contact your administrator.
```
```
Status: 500 INTERNAL SERVER ERROR
Commit load cycle failed. Error ending load. Unknown cycle_id 'cycle_id'
```
```
Status: 500 INTERNAL SERVER ERROR
error code = INTERNAL, message = Couldn't resolve the authentication service.
```

## AbortLoad

Use this API to stop loading data.

### Request
```
POST /ts_dataservice/v1/public/loads/cycle_id/cancel
Cookie: token
```
### Response
```
Status: 200 OK
Content-Type: text/plain
Content-Length: xx
```
### Example failure responses
```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again.
```
```
Status: 403 FORBIDDEN
User does not have required privileges. Please contact your administrator.
```
```
Status: 500 INTERNAL SERVER ERROR
error code = INTERNAL, message = Couldn't resolve the authentication service.
```
## Status of load

Use the api to get the current status of a load.

### REQUEST

```
GET /ts_dataservice/v1/loads/cycle_id
Cookie: token
```
### Response
```
Status: 200 OK
Content-Type: text/plain
Content-Length: xx
Return the URL of the bad records file if any (in JSON).
{
   Status: status of load - this could itself be json.
   Bad_records: /ts_dataservice/v1/public/loads/cycle_id/bad_records_file
}
```
### Example failure responses
```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again.
```
```
Status: 403 FORBIDDEN
User does not have required privileges. Please contact your administrator.
```
```
Status: 500 INTERNAL SERVER ERROR
error code = INTERNAL, message = Couldn't resolve the authentication service.
```
## Status of all loads

Use this api to get the status of all current data loads.

### Request
```
GET /ts_dataservice/v1/public/loads
Cookie: token
```
Response
```
Status: 200  OK
Content-Type: text/plain
Content-Length: xx
[
  {
    Cycle_id: XXX,
    Status: XXX,
    BadRecordsUrl: XXX
  },
  {
    Cycle_id: XXX,
    Status: XXX,
    BadRecordsUrl: XXX,
  },
  ....
]
```
### Example failure responses
```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again.
```
```
Status: 403 FORBIDDEN
User does not have required privileges. Please contact your administrator.
```
## Bad records

Use this api to view the bad records file data.

### Response
```
Status: 200 OK
Content-Type: text/plain
Content-Length: xx
Bad Records file data
```
### Example failure responses
```
Status: 401 UNAUTHORIZED
Unable to verify user. Please login again.
```
```
Status: 403 FORBIDDEN
User does not have required privileges. Please contact your administrator.
```
```
Status: 500 INTERNAL SERVER ERROR
Node does not exist: /tmp/cycle_id.bad_record
```
```
Status: 500 INTERNAL SERVER ERROR
error code = INTERNAL, message = Couldn't resolve the authentication service.
```
## Monitoring

An administrator can monitor the following:
- Active sessions: `GET /ts_dataservice/v1/public/sessions`
- Status of all loads: `GET /ts_dataservice/v1/public/loads`

## Related information

[Use the tsload service to load data]({{ site.baseurl }}/admin/loading/load-with-service.html)
