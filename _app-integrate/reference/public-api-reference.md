---
title: [Public API reference]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This is a list of all the public ThoughtSpot APIs. The descriptions are aimed to help you solve specific use cases, such as syncing users and groups, or fetching visualization headers.

See [About the REST API]({{ site.baseurl }}/admin/data-api/about-data-api.html#) for information on how to call and use the REST APIs.

## Public name: pinboarddata

- Public namespace: Data
- Current URL path: /tspublic/v1/pinboarddata
- Implementation notes: Gets the pinboard data from the ThoughtSpot system. Returns one object if you make a call to a specific visualization on a pinboard.

|Parameter|Value|Description|Parameter Type|Data Type|
|---------|-----|-----------|--------------|---------|
|id| |GUID id of the pinboard|query|string|
|vizid| |Optional GUID ids of the visualizations|query|string|
|batchsize|-1|Batch size|query|integer|
|pagenumber|-1|PageNumber. Alternate way to set offset. This is `1-based indexingOffset = (pageNumber - 1) * batchSize`|query|integer|
|offset|-1|Offset|query|integer|
|formattype|COMPACT|JSON format type. Values allowed are FULL and COMPACT.|query|string|

HTTP Status Codes

* 200 Gets the data of a pinboard/visualization.
* 400 Invalid pinboard id.


Response example:

Curl

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'https://dogfood/callosum/v1/tspublic/v1/pinboarddata?batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT'
```

Request URL

```
https://dogfood/callosum/v1/tspublic/v1/pinboarddata?batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT
```

Response Body

```
no content
```

Response Code

```
400
```

Response Headers

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

## Public name: pinboard/listvizheaders

- Public namespace: Objects
- Current URL path: /tspublic/v1/metadata/listvizheaders
- Implementation notes: Gets the visualization headers from the ThoughtSpot system. The expected output includes a list of objects, each with information about the visualizations of the given pinboard.

|Parameter|Value|Description|Parameter Type|Data Type|
|---------|-----|-----------|--------------|---------|
|id| |GUID of the reportbook|query|string|

HTTP Status Code

* 200 Gets the visualization headers.
* 400 Invalid pinboard GUID.


Response example:

Curl

```
curl -X GET --header 'Accept: application/json' 'https://dogfood/callosum/v1/tspublic/v1/metadata/listvizheaders'
```

Request URL

```
https://dogfood/callosum/v1/tspublic/v1/metadata/listvizheaders
```

Response Body

```
[]
```

Response Code

```
200
```

Response Headers

Header of each visualization header object obtained will have these first class citizens:

* id (GUID)
* name (String)
* author (GUID)
* created (Epoch)
* modified (Epoch)
* modifiedBy (GUID)
* owner (GUID)
* vizType (String : CHART, TABLE, etc.)
* title

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

## Public name: principal/sync

- Public namespace: Configuration
- Current URL path: /tspublic/v1/user/sync
- Implementation notes: API to synchronize principal from external system with ThoughtSpot system. This API is for users and groups. It should help to keep ThoughtSpot users and groups automatically synchronized with your external database.

    Specifically, you will have to make a call to /tspublic/v1/user/sync containing all users and groups present in the external database. If the call succeeds, then it is guaranteed that the users and groups in ThoughtSpot match those specified in the list of objects passed to /tspublic/v1/user/sync. This means that:

    - Objects (users or groups) present in ThoughtSpot, but not present in the list passed to a sync call will be deleted.
    - Objects present in ThoughtSpot, and present in the list passed to a sync call will be updated such that the object attributes in ThoughtSpot match those present in the list. This includes group membership.

    - Objects not present in ThoughtSpot, and present in the list will be created in ThoughtSpot.
    The returned object represents the changes that were made in ThoughtSpot.


|Parameter|Value|Description|Parameter Type|Data Type|
|---------|-----|-----------|--------------|---------|
|applyChanges| |formData. Flag to indicate whether to sync the users and groups to the system, and apply the difference evaluated. The API can be used to just validate the difference before applying the changes.|boolean| |
|defaultPassword| |formData. If set then all of the created users will have a password that is the same as the defaultPassword applied.|string| |
|principals| |formData. List of principal objects.|string| |
|remoteDeleted| |This is boolean flag that indicates whether to remove deleted users/groups. When true, this flag removes any deleted users or groups.|boolean| |

HTTP Status Code

* 200

Response example:

Curl

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'applyChanges=false' 'https://dogfood/callosum/v1/tspublic/v1/user/sync'
```

Request URL

```
https://dogfood/callosum/v1/tspublic/v1/user/sync
```

Response Object Format

```
{
  'usersAdded': ['username1','username2'],
  'usersDeleted': ['username3'],
  'usersUpdated': ['username4'],
  'groupsAdded': ['groupname1'],
  'groupsDeleted': ['groupname2','groupname3'],
  'groupsUpdated': ['groupname4']
}
```

Response Code

```
415
```

Response Headers

```
{
  "x-callosum-incident-id": "645499d1-d0cf-4b3b-bbdc-4296abb9a326",
  "x-callosum-trace-id": "19f7ad7d-226a-4e88-a301-405f85125959",
  "date": "Sun, 19 Feb 2017 03:55:52 GMT",
  "x-callosum-request-time-us": "4545",
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

## Public name: principal/list

- Public namespace: Configuration
- Current URL path: /tspublic/v1/user/list
- Implementation notes: API to get a list of all users, groups, and their inter-dependencies in the form of principal objects. This API is for users and groups.

    Input Principal Object Format:

    One principal object contains the following properties (* denotes required properties):

    - `name*`: String to represent the name of the principal.

       This field, in conjunction with whether the object is a user or group, is used to identify a user/group. Consequently, this field is required to be unique (unique for users and groups separately. I.e. you can have user “x” and group “x”).

    - `displayName*`: String to represent the display name of the principal.

    - `description`: String to describe the principal.

    - `mail`: String to represent the email address of the user. This field should be populated only in case of user not group. It is ignored in the case of groups.

    - `principalTypeEnum*`: The value of this field should be one of the following:

        - `LOCAL_USER`: User created in the ThoughtSpot system and the validation of the user is done through password saved in the ThoughtSpot database.

        - `LOCAL_GROUP`: Groups created in the ThoughtSpot system.
    - `password`: String to represent the password of the user. This field should be only populated in case of user not group. It is ignored in the case of groups. Also password is only required if the user is of LOCAL_USER type. Password is only required when the user is created for the first time. In subsequent update of the user password is not updated even if it changes in the source system.

    - `groupNames`: List of group names that a principal belongs to directly. Groups and users can belong to other groups.


HTTP Status Code

* 200


Response example:

Curl

```
curl -X GET --header 'Accept: application/json' 'https://dogfood/callosum/v1/tspublic/v1/user/list'
```

Request URL

```
https://dogfood/callosum/v1/tspublic/v1/user/list
```

Response Body format

```
[
  {
    "name": "Group 1",
    "displayName": "Group Display Name 1",
    "description": "Group Description 1",
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": []
  },
  {
    "name": "Test Name",
    "displayName": "Test DisplayName",
    "principalTypeEnum": "LOCAL_USER"
    "password": "password_123",
    "groupNames": ["Group 1"]
  }
]
```

Response Body example

```
[
  {
    "name": "Sales Executives",
    "displayName": "Sales Executives",
    "description": "",
    "created": 1481827712854,
    "modified": 1481827713052,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": []
  },
  {
    "name": "Operations Demo",
    "displayName": "Operations Demo",
    "description": "",
    "created": 1436491036553,
    "modified": 1436498598655,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": []
  },
  {
    "name": "Sales Directors",
    "displayName": "Sales Directors",
    "description": "",
    "created": 1481827747555,
    "modified": 1485805361837,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": []
  },
  {
    "name": "Product",
    "displayName": "Product",
    "description": "",
    "created": 1409250574242,
    "modified": 1477525172084,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": []
  },
  {
    "name": "Sales Development",
    "displayName": "Sales Development",
    "description": "",
    "created": 1481831987186,
    "modified": 1481831987382,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": [
      "Sales"
    ]
  }
]
```

Response Code

```
200
```

Response Headers

```
{
  "x-callosum-incident-id": "1be6e07b-b7aa-4531-8597-8852760757f0",
  "x-callosum-trace-id": "e92c54ca-d5f1-44a6-ab8e-f6871bb0da8b",
  "date": "Sun, 19 Feb 2017 04:14:13 GMT",
  "content-encoding": "gzip",
  "x-callosum-request-time-us": "19720",
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
