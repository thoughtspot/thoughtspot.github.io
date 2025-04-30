---
title: [user API]
keywords: REST,API,data,"REST API"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

- Public namespace: Configuration

## POST /tspublic/v1/user/ownership

Transfers ownership of _all_ objects from one user to another. You cannot
transfer objects to or from the system user or the administrative user.

### Parameters

<table>
<colgroup>
      <col style="width:25%" />
      <col style="width:75%" />
   </colgroup>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
<tbody>
      <tr>
         <td><code>fromUserName</code></td>
         <td>
            <p>Username to transfer from. You cannot specify the system user or an administrative user.
            </p>
         </td>
      </tr>
      <tr>
         <td><code>toUserName</code></td>
         <td>
            <p>Username to transfer to. You cannot specify the system user or an administrative user.
            </p>
         </td>
      </tr>
</tbody>
</table>

### HTTP Status Code

* 200
* 400

### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/user/transfer/ownership
```

Curl example:

```
ccurl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<instance>/callosum/v1/tspublic/v1/user/transfer/ownership?fromUserName=Auser&toUserName=Buser'

```

### Response Object Format

```
no content
```

### Response Code

```
200
```

### Response Headers

```
{
  "x-callosum-incident-id": "d28fd603-bd7e-414f-882b-794d74c4b469",
  "x-callosum-trace-id": "55453051-5fb5-4139-8d24-adcc0b1b24f2",
  "date": "Thu, 15 Mar 2018 22:21:47 GMT",
  "x-callosum-request-time-us": "970213",
  "server": "ThoughtSpot",
  "status": "204",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "pragma": "no-cache",
  "cache-control": "no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0",
  "content-security-policy": "script-src 'self'",
  "x-ua-compatible": "IE=edge",
  "content-type": null
}
```

## POST /tspublic/v1/user/sync

API to synchronize principal from external system with ThoughtSpot system. This
API is for users and groups. It should help to keep ThoughtSpot users and groups
automatically synchronized with your external database.

Specifically, you will have to make a call to `/tspublic/v1/user/sync` containing
all users and groups present in the external database. If the call succeeds,
then it is guaranteed that the users and groups in ThoughtSpot match those
specified in the list of objects passed to `/tspublic/v1/user/sync`. This means
that:

- Objects (users or groups) present in ThoughtSpot, but not present in the list passed to a sync call will be deleted.
- Objects present in ThoughtSpot, and present in the list passed to a sync call will be updated such that the object attributes in ThoughtSpot match those present in the list. This includes group membership.
- Objects not present in ThoughtSpot, and present in the list will be created in ThoughtSpot.
The returned object represents the changes that were made in ThoughtSpot.


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
         <td><code>applyChanges</code></td>
         <td>A boolean flag to indicate whether to sync the users and groups to the system, and apply the difference evaluated. You can use this API to validate a difference before applying changes.
         </td>
      </tr>
      <tr>
         <td><code>password</code></td>
         <td>A string specifying a password.</td>
      </tr>
      <tr>
         <td><code>principals</code></td>
         <td>A string specifying a list of principal objects. </td>
      </tr>
      <tr>
         <td><code>remoteDeleted</code></td>
         <td>This is boolean flag that indicates whether to remove deleted users/groups. When true, this flag removes any deleted users or groups.boolean </td>
      </tr>
   </tbody>
</table>

### HTTP Status Code

* 200

### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/user/sync
```

Curl example:

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'applyChanges=false' 'https://<instance>/callosum/v1/tspublic/v1/user/sync'
```

### Response Object Format

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

### Response Code

```
415
```

### Response Headers

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

## POST /tspublic/v1/user/updatepassword

Changes the password of a user

### Parameters

<table>
   <colgroup>
      <col style="width:25%" />
      <col style="width:75%" />
   </colgroup>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>name</code></td>
         <td>Name of the user .</td>
      </tr>
      <tr>
         <td><code>password</code></td>
         <td>String to represent the new user password.</td>
      </tr>
      <tr>
         <td><code>currentpassword</code></td>
         <td>String to represent the current user password.</td>
      </tr>
   </tbody>
</table>

### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/user/updatepassword
```

Curl example:

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'name=guest¤tpassword=test&password=foobarfoobar' 'https://<instance>/callosum/v1/tspublic/v1/user/updatepassword'

```


## GET /tspublic/v1/user/list

API to get a list of all users, groups, and their inter-dependencies in the form
of principal objects. This API is for users and groups.

One principal object contains the following properties (* denotes required properties):

<table>
<colgroup>
      <col style="width:15%" />
      <col style="width:85%" />
   </colgroup>
   <thead>
      <tr>
         <th>Property</th>
         <th>Description</th>
      </tr>
   </thead>
<tbody>
            <tr>
         <td><code>name</code></td>
         <td>
            <p>String to represent the name of the principal.</p>
            <p>This field, in conjunction with whether the object is a user or group, is
               used to identify a user/group. Consequently, this field is required to be
               unique (unique for users and groups separately. I.e. you can have user “x”
               and group “x”).
            </p>
         </td>
      </tr>
 <tr>
         <td><code>displayName</code></td>
         <td>String to represent the display name of the principal.</td>
      </tr>
 <tr>
         <td><code>description</code></td>
         <td>String to describe the principal.</td>
         </tr>
<tr>
         <td><code>mail</code></td>
         <td>String to represent the email address of the user. This field should be populated only in case of user not group. It is ignored in the case of groups.</td>
      </tr>
      <tr>

         <td><code>principalTypeEnum</code></td>
         <td><p>The value of this field should be one of the following:</p>
            <ul>
            <li><code>LOCAL_USER</code> User created in the ThoughtSpot system and the validation of the user is done through password saved in the ThoughtSpot database.</li>
            <li><code>LOCAL_GROUP</code> Groups created in the ThoughtSpot system.</li></ul>
         </td>
      </tr>
   <tr>
         <td><code>password</code></td>
         <td>String to represent the password of the user. This field should be only populated in case of user not group. It is ignored in the case of groups. Also password is only required if the user is of LOCAL_USER type. Password is only required when the user is created for the first time. In subsequent update of the user password is not updated even if it changes in the source system.</td>
      </tr>
      <tr>
         <td><code>groupNames</code></td>
         <td>List of group names that a principal belongs to directly. Groups and users can belong to other groups.</td>
      </tr>  
   </tbody>
</table>

### HTTP Status Code

* 200


### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/user/list
```

Curl example:

```
curl -X GET --header 'Accept: application/json' 'https://<instance>/callosum/v1/tspublic/v1/user/list'
```


### Response Body format

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

### Response Body example

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

### Response Code

```
200
```

### Response Headers

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
