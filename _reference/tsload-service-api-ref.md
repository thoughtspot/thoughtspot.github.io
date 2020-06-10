---
title: [tsload service API reference]
summary: "The tsload service APIs enable you to load data into ThoughtSpot."
last_updated: 11/18/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Login
Use this API to authenticate and log in a user. Login establishes a session with the ThoughtSpot ETL HTTP server. The authentication requires a username and password.

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
### Failure responses
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
### Failure Responses
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
### Failure responses
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

### Failure Responses

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
### Failure responses
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
### Failure Responses
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
### Failure responses
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
### Failure responses
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

## Loading data from Amazon AWS and Microsoft Azure

Loading data from both AWS and Azure can be done using their respective APIs.

### AWS multipart uploads

#### Request
```
POST /-/vaults/examplevault/multipart-uploads
Host: glacier.us-west-2.amazonaws.com
x-amz-Date: 20170210T120000Z
x-amz-archive-description: MyArchive-101
x-amz-part-size: 4194304
x-amz-glacier-version: 2012-06-01
Authorization: AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20141123/us-west-2/glacier/aws4_request,SignedHeaders=host;x-amz-date;x-amz-glacier-version,Signature=9257c16da6b25a715ce900a5b45b03da0447acf430195dcb540091b12966f2a2
```
#### Response
```
HTTP/1.1 201 Created
x-amzn-RequestId: AAABZpJrTyioDC_HsOmHae8EZp_uBSJr6cnGOLKp_XJCl-Q
Date: Wed, 10 Feb 2017 12:00:00 GMT
Location: /111122223333/vaults/examplevault/multipart-uploads/OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE
x-amz-multipart-upload-id: OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE
```
#### Completing a multipart AWS upload

To complete a multipart upload, you send an HTTP POST request to the URI of the upload ID that S3 Glacier created in response to your Initiate Multipart Upload request. This is the same URI you used when uploading parts. In addition to the common required headers, you must include the result of the SHA256 tree hash of the entire archive and the total size of the archive in bytes.

#### Request
```
End load
POST /-/vaults/examplevault/multipart-uploads/OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE HTTP/1.1
Host: glacier.us-west-2.amazonaws.com
z-amz-Date: 20170210T120000Z
x-amz-sha256-tree-hash:1ffc0f54dd5fdd66b62da70d25edacd0
x-amz-archive-size:8388608
x-amz-glacier-version: 2012-06-01
Authorization: AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20141123/us-west-2/glacier/aws4_request,SignedHeaders=host;x-amz-date;x-amz-glacier-version,Signature=9257c16da6b25a715ce900a5b45b03da0447acf430195dcb540091b12966f2a2
<CompleteMultipartUpload>
             <Part>
                <PartNumber>1</PartNumber>
               <ETag>"a54357aff0632cce46d942af68356b38"</ETag>
             </Part>
             <Part>
                <PartNumber>2</PartNumber>
               <ETag>"0c78aef83f66abc1fa1e8477f296d394"</ETag>
             </Part>
             <Part>
               <PartNumber>3</PartNumber>
               <ETag>"acbd18db4cc2f85cedef654fccc4a4d8"</ETag>
             </Part>
            </CompleteMultipartUpload>
```
For more information on multipart uploads from AWS, see Amazon's [AWS multipart upload](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingRESTAPImpUpload.html){:target="_blank"} documentation.

### AWS single uploads

#### Request
```
PUT /-/vaults/examplevault/multipart-uploads/OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE HTTP/1.1
Host: glacier.us-west-2.amazonaws.com
Date: Wed, 10 Feb 2017 12:00:00 GMT
Content-Range:bytes 4194304-8388607/*
Content-Length: 4194304
x-amz-sha256-tree-hash:f10e02544d651e2c3ce90a4307427493
x-amz-content-sha256:726e392cb4d09924dbad1cc0ba3b00c3643d03d14cb4b823e2f041cff612a628
x-amz-glacier-version: 2012-06-01
Authorization: Authorization=AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20120525/us-west-2/glacier/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-glacier-version, Signature=16b9a9e220a37e32f2e7be196b4ebb87120ca7974038210199ac5982e792cace
```

#### Response
```
HTTP/1.1 204 No Content
x-amzn-RequestId: AAABZpJrTyioDC_HsOmHae8EZp_uBSJr6cnGOLKp_XJCl-Q
x-amz-sha256-tree-hash: c06f7cd4baacb087002a99a5f48bf953
Date: Wed, 10 Feb 2017 12:00:00 GMT
End load
```
### Azure multipart uploads

For more information on uploads from Azure, see Microsoft's Azure [Put Range](https://docs.microsoft.com/en-us/rest/api/storageservices/put-range){:target="_blank"} documentation.
