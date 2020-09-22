---
title: [TQL service reference]
summary: "The TQL service APIs enable you to query the ThoughtSpot TQL cli from a remote machine."
last_updated: 09/10/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Design
The TQL service accepts HTTP/HTTPS requests through a python client to provide a TQL-cli like experience.
You can develop your own REST client to use the REST APIs documented below. No setup is required on the server side.

## Client requirements
- Must contact the TQL service over a standard HTTPS port (i.e. 443)
- Must authenticate before using any REST API
- Must be authorized to perform certain TQL operations

## HTTP APIs

### Login
Existing callosum’s login API will be piggybacked upon. The existing API is documented below for reference.

#### API

##### POST request

```
/callosum/v1/session/login
```
##### Input
```
{
	"username": "<thoughtspot user name>",
	"password": "<thoughtspot password>"
}
```
##### Output
```
Status: 200 OK
Set-cookie: <token>
```
### Execute

#### API
##### POST request
```
/ts_dataservice/v1/public/tql/execute
```
##### Input
###### Request header
```
JSESSIONID=<token>
```
###### Request body
```
{
	"options": {
		"default_schema": “falcon_default_schema”,
		"skip_cache": true,
		"top_row_count": 100
	},
	"context": {
		"database": "db name",
		"server_schema_version": "generation id"
	},
	"query": {
		"statement": "tql command  --  it may have newlines in it",
		"interactive": [{
			"question_id": "GUID - From response",
			"answer": "value"
		}, {
			"question_id": "GUID - From response",
			"answer": "value"
		}]
	}
}
```
##### Output
```
Status:   200 OK

Status:   200 OK

{
	"request": {
		"options": {
			"default_schema": “falcon_default_schema”,
			"skip_cache": true,
			"top_row_count": 100
		},
		"context": {
			"database": "db name",
			"server_schema_version": "generation id"
		},
		"query": {
			"statement": "tql command  --  it may have newlines in it",
			"interactive": [{
				"question_id": "GUID - From response",
				"answer": "value"
			}, {
				"question_id": "GUID - From response",
				"answer": "value"
			}]
		}
	},
	"script_complete": true,
	"result": {
		"complete": false,
		"progress": [{
			“label”: “Serialization”,
			“percentage”: 80,
			“details”: “4/5 regions serialized”
		}],
		"request_id": "GUID"
		"final_context": {
			"database": "db name",
			"server_schema_version": "generation id",
		},
		"table": {
			“headers”: [
				{“name”: “col1”, “type”: “BIGINT”},
				{“name”: “col2”, “type”: “VARCHAR”}
			],
			"rows": [
				{“v”: [“row1 col1 value”, “row1 col2 value”]},
				{“v”: ["row2 col1 value", "row2 col2 value"]}
			]
		},
		"interactive": [{
			"question_id": "GUID",
			"question": "do you want to take action ONE?",
			"options": [“value1”, “value2”]
		}, {
			"question_id": "GUID",
			"question": "do you want to take action TWO?",
			"options": [“value1”, “value2”]
		}],
		"stdout": "data written onto stdout stream - may contain newlines",
		"stderr": "data written onto stderr stream - may contain newlines"
	}
}
```
### Execute    

#### API
##### POST request
```
/ts_dataservice/v1/public/tql/execute
```
##### Input
###### Request header
```
JSESSIONID=<token>
```
###### Request body
```
{
	"options": {
		"default_schema": “falcon_default_schema”,
		"skip_cache": true,
		"top_row_count": 100
	},
	"context": {
		"database": "db name",
		"server_schema_version": "generation id"
	},
	"query": {
		"statement": "tql command  --  it may have newlines in it",
		"interactive": [{
			"question_id": "GUID - From response",
			"answer": "value"
		}, {
			"question_id": "GUID - From response",
			"answer": "value"
		}]
	}
}
```
##### Output
```
Status:   200 OK

{
	"request": {
		"options": {
			"default_schema": “falcon_default_schema”,
			"skip_cache": true,
			"top_row_count": 100
		},
		"context": {
			"database": "db name",
			"server_schema_version": "generation id"
		},
		"query": {
			"statement": "tql command  --  it may have newlines in it",
			"interactive": [{
				"question_id": "GUID - From response",
				"answer": "value"
			}, {
				"question_id": "GUID - From response",
				"answer": "value"
			}]
		}
	},
	"script_complete": true,
	"result": {
		"complete": false,
		"progress": [{
			“label”: “Serialization”,
			“percentage”: 80,
			“details”: “4/5 regions serialized”
		}],
		"request_id": "GUID"
		"final_context": {
			"database": "db name",
			"server_schema_version": "generation id",
		},
		"table": {
			“headers”: [
				{“name”: “col1”, “type”: “BIGINT”},
				{“name”: “col2”, “type”: “VARCHAR”}
			],
			"rows": [
				{“v”: [“row1 col1 value”, “row1 col2 value”]},
				{“v”: ["row2 col1 value", "row2 col2 value"]}
			]
		},
		"interactive": [{
			"question_id": "GUID",
			"question": "do you want to take action ONE?",
			"options": [“value1”, “value2”]
		}, {
			"question_id": "GUID",
			"question": "do you want to take action TWO?",
			"options": [“value1”, “value2”]
		}],
		"stdout": "data written onto stdout stream - may contain newlines",
		"stderr": "data written onto stderr stream - may contain newlines"
	}
}
```
### Execute file
#### API
##### POST API
###### Multipart file upload API
```
/ts_dataservice/v1/public/tql/execute_script
```
##### Input
###### Request header
```
JSESSIONID=<token>
```
###### Request body
TQL script file will be uploaded. Requests will have the flag passing mechanism too.
```
{
	"context": {
		"server_schema_version": "generation id"
	},
	"options": {
		"skip_cache": true,
		"top_row_count": 100
	},
	"script": "tql script read in one line.  --  it may have newlines in it"
}
```
##### Output
An array of JSON objects will be sent by the server. Same as what is sent for the non-file-upload case - one JSON per tql-command in the script.

### Autocomplete static
#### API
##### GET request
```
/ts_dataservice/v1/public/tql/tokens/static
```
##### Input
###### Request header
```
JSESSIONID=<token>
```
##### Output
```
{
	"tokens": ["select", "count"]
}
```
### Autocomplete dynamic
#### API
##### GET request
```
/ts_dataservice/v1/public/tql/tokens/dynamic
```
##### Input
###### Request header
```
JSESSIONID=<token>
```
###### Request body
This API can be improved upon to make it a bit more context sensitive. Context-sensitive completion means that return only those tokens which are applicable in current context (eg. return only those table names which are in the database).

In the first version, all dynamic tokens will be returned. Server side code will be written so that the in memory data structure lookup is organized in a context-sensitive manner.

##### Output
```
{
	"context": {
		"server_schema_version": "generation id"
	},
	"tokens": ["table-name-1", "col-name-2"]
}

```
### Get schema version
#### API
##### GET request
```
/ts_tqlservice/v1/public/schema_version
```
##### Input
###### Request header
```
JSESSIONID=<token>
```
##### Output
```
{
	"context": {
		"server_schema_version": "generation id"
	}
}
```
### Client
A python client is developed on top of above REST APIs. The code is available in the developer git repository.

## Related information

[TBD]({{ site.baseurl }}/admin/loading/load-with-tsload.html)
