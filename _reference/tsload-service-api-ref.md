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
{% include note.html content="If the cookie is not passed in subsequent calls, then requests fail." %}

## StartLoad

After **login**, you use this API start the data load operation. The API call to be used here is “/ts_dataservice/v1/public/loads”. If the load is initiated successfully, the cycle ID, and the load balancer IP are returned. Once complete, you use **Load** to start the actual data load.

### Request Parameters

#### Target

Specification of the target. This DB/Schema/Table must pre-exist on the destination ThoughtSpot system.

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
         <th>Default value</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>database</code></td> <td>string</td> <td>database in ThoughtSpot</td> <td>&nbsp;</td></tr>
    <tr> <td><code>schema</code>(optional)</td> <td>string</td> <td>schema in ThoughtSpot</td> <td>falcon_default_schema</td></tr>
    <tr> <td><code>table</code></td> <td>string</td> <td>table in ThoughtSpot</td><td>&nbsp;</td> </tr>
  </tbody>
</table>

#### Format

Format specifiers for parsing the input data.

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
         <th>Default value</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>type</code>(optional)</td> <td>string</td> <td>field separator character in source data. &nbsp;Either <code>csv</code> or <code>delimited</code> </td> <td>csv</td> </tr>
    <tr> <td><code>field_separator</code>(optional)</td> <td>string</td> <td>input format. Either <code>.csv</code> or <code>delimited</code> </td> <td>","</td></tr>
    <tr> <td><code>trailing_field_separator</code>(optional)</td> <td>boolean</td> <td>True if input data has trailing field separator, false otherwise.</td> <td>false</td></tr>
    <tr> <td><code>enclosing_character</code>(optional)</td> <td>string</td> <td>enclosing character in csv source format. This option applies only to csv format.</td> <td>"\""</td></tr>
    <tr> <td><code>escape_character</code>(optional)</td> <td>string</td> <td>escape character in source data. This applies only to delimited data format. This option is ignored for other data sources.
</td> <td>""</td></tr>
    <tr> <td><code>null_value</code>(optional)</td> <td>string</td> <td>escape character in source data. This applies only to delimited data format. This option is ignored for other data sources.
    </td> <td>"(null)"</td></tr>
    <tr> <td><code>has_header_row</code>(optional)</td> <td>boolean</td> <td>True if input data file has header row, false otherwise.</td> <td>false</td> </tr>
    <tr> <td><code>flexible</code>(optional)</td> <td>boolean</td> <td>Whether input data file exactly matches target schema. When true, attempts to load as follows. If extra columns are present in input file, these are discarded. If fewer columns are  present in input file, missing columns are filled with nulls. When false, load proceeds if input data file exactly matches target schema.</td> <td>false</td> </tr>
  </tbody>
</table>

##### date_time

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
         <th>Default value</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>converted_to_epoch</code>(optional)</td> <td>boolean</td> <td>Whether date or datetime fields are already converted to epoch in source CSV. This option is ignored for other source types.</td> <td>true</td> </tr>
    <tr> <td><code>date_time_format</code>(optional)</td> <td>string</td> <td>Format string for datetime values. Default is yearmonthday hour:minute:second e.g. Dec 30th, 2001 1:15:12 is represented as 20011230 01:15:12. System accepts date time format specifications supported in strptime datetime library.</td> <td>"%Y%m%d %H:%M:%S"</td> </tr>
    <tr> <td><code>date_format</code>(optional)</td> <td>string</td> <td>Format string for date values. Default is yearmonthday e.g. Dec 30th, 2001 is represented as 20011230. System accepts date format specifications supported in strptime datetime library.</td> <td>"%Y%m%d"</td> </tr>
    <tr> <td><code>time_format</code>(optional)</td> <td>string</td> <td>Format string for time values. Default is hour:minute:second System accepts time format specifications supported in strptime datetime library.
    </td> <td>"%H:%M:%S"</td> </tr>
    <tr> <td><code>skip_second_fraction</code>(optional)</td> <td>boolean</td> <td>When true, skip fractional part of seconds e.g., milliseconds, microseconds or nanoseconds from datetime or time values if present in source data. This option is ignored for other source types. Note that skipping fractional component (e.g. ms) from input data can impact upsert behavior if input data has non-unique fractional values for same time or datetime values.
    </td> <td>false</td> </tr>
  </tbody>
</table>

##### boolean

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
         <th>Default value</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>use_bit_values</code>(optional)</td> <td>boolean</td> <td>If true, source csv uses a bit for boolean values. Here in source, false is represented as 0x0 and true as 0x1. If false, boolean values are interpreted using flag boolean_representation. This option is valid for CSV only. Ignored for other types.</td> <td>false</td> </tr>
    <tr> <td><code>true_format</code>(optional)</td> <td>string</td> <td>Represents True for boolean values in input.</td> <td>T</td> </tr>
    <tr> <td><code>false_format</code>(optional)</td> <td>string</td> <td>Represents False for boolean values in input.</td> <td>F</td> </tr>
  </tbody>
</table>

#### load_options

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
         <th>Default value</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>empty_target</code>(optional)</td> <td>boolean</td> <td>If true, current rows in target table or file are dropped before loading new data. If false, current rows are appended to target table or file.</td> <td>false</td></tr>
    <tr> <td><code>max_ignored_rows</code>(optional)</td> <td>integer</td> <td>Max number of rows that can be ignored for successful load. If number of ignored rows exceeds this limit, the load is aborted.
</td> <td>0</td></tr>
  </tbody>
</table>

#### advanced_options

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
         <th>Default value</th>
      </tr>
   </thead>
   <tbody>
    <tr> <td><code>max_reported_parsing_errors</code>(optional)</td> <td>integer</td> <td>Maximum number of parsing errors to report back along with the status.</td> <td>100</td></tr>
  </tbody>
</table>

#### Example use of parameters
<!-- {% capture code %}-->
```
{
      target : {
          database : "<DB_NAME>",
          schema : "falcon_default_schema",
          table : "<TABLE_NAME>"
      },
      format : {
          type : "CSV",
          field_separator : ",",
          trailing_field_separator : false,
          enclosing_character : "\"",
          escape_character : "",
          null_value : "(null)",

          date_time : {
              converted_to_epoch : false,
              date_time_format : "%Y%m%d %H:%M:%S",
              date_format : "%Y%m%d",
              time_format : "%H:%M:%S",
              skip_second_fraction : false
          }
          boolean : {
              use_bit_values : false,
              true_format : "T",
              false_format : "F"
          }
          has_header_row : false,
          flexible : false
    },
    load_options : {
        empty_target : false,
        max_ignored_rows : 0,
    },
    advanced_options : {
        max_reported_parsing_errors : 100
    }
  }
```
<!-- {% endcapture %} -->
<!-- {% include code.html code=code lang="javascript" %} -->

### Request
```
curl -i -X POST -b 'JSESSIONID=<GUID-XYZ>' -d '{"target_database": "<DB1>", "target_schema": "<SCHEMA1>", "target_table": "<TABLE1>", "field_separator": ",", "empty_target": false}' https://<TS_CLUSTER>:8442/ts_dataservice/v1/public/loads
```

### Response
```
Status: 202 Accepted
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
{% include note.html content="We only support multipart form/data." %}

### Response
```
Status: 202 Accepted
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
Status: 202 Accepted
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

### Request

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

## Related information

[Use the tsload service to load data]({{ site.baseurl }}/admin/loading/load-with-service.html)
