---
title: [Group API]
summary: The Group APIs allows you to add or remove a privilege to or from a group.
last_updated: 3/30/2021
redirect_from:
- /app-integrate/reference/group-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Add a privilege

Each user group in ThoughtSpot assigns a set of privileges to its users.
Use this API to add the following privileges to a group.

-   `DATADOWNLOADING`

    Allows users to download data from search results and pinboards. When `DATADOWNLOADING` privilege is applied, the users can download all the data sources that a group can access.

-   `USERDATAUPLOADING`

    Allows users to upload their data to ThoughtSpot.

ThoughtSpot also has a default group called `ALL_GROUP`, which includes every user in ThoughtSpot. When you create new users in ThoughtSpot, they will be automatically added to the `ALL_GROUP` group. By default, the members of `ALL_GROUP` do not have permission to download or upload data. You can use this API to add these privileges to the `ALL_GROUP` group.

### Resource URL
```
POST /tspublic/v1/group/addprivilege
```
### Request parameters

| Form Parameter | Data Type | Description                                                                                             |
|----------------|-----------|---------------------------------------------------------------------------------------------------------|
| `privilege`    | string    | Specifies a privilege type to add. Valid values are `DATADOWNLOADING` or `USERDATAUPLOADING` privilege. |
| `groupNames`   | string    | Specifies a group name to which you want to add the privilege. The default value is `ALL_GROUP` group.  |

### Example request

##### cURL
```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'privilege=DATADOWNLOADING&groupNames=ALL_GROUP' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/group/addprivilege'
```
##### Request URL
```
https://<Thoughtspot-host>/callosum/v1/tspublic/v1/group/addprivilege
```
### Response codes

| HTTP Code | Description                  |
|-----------|------------------------------|
| **200**   | Privilege added              |
| **204**   | Success                      |
| **401**   | Failure/Unauthorized request |

## Remove a privilege

Use this API to delete the `DATADOWNLOADING` or `USERDATAUPLOADING` privilege from the system default `ALL_GROUP`group.

### Resource URL
```
POST /tspublic/v1/group/removeprivilege
```
### Request parameters

| Form Parameter | Data Type | Description                                                                                                |
|----------------|-----------|------------------------------------------------------------------------------------------------------------|
| `privilege`    | string    | Specifies a privilege type to delete. Valid values are `DATADOWNLOADING` and `USERDATAUPLOADING`. |
| `groupNames`   | string    | Specifies a group name to delete the privilege from; For example, `ALL_GROUP`.                   |

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'privilege=USERDATAUPLOADING&groupNames=ALL_GROUP' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/group/removeprivilege'
```

##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/group/removeprivilege
```
### Response codes

| HTTP Code | Description                  |
|-----------|------------------------------|
| **200**   | Privilege removed            |
| **204**   | Successful operation                      |
| **401**   | Failure/Unauthorized request |
