---
title: [User API]
summary: "The User APIs enable you to manage user- and group-related operations in the ThoughtSpot system."
last_updated: 5/5/2021
redirect_from:
- /app-integrate/reference/user-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The User APIs enable you to manage user- and group-related operations in the ThoughtSpot system.

You can use the User APIs to manage your users and groups in ThoughtSpot.

## Get a list of users and groups

Use the `/tspublic/v1/user/list` API to get a list of all users, groups, and their inter-dependencies in the form of principal objects.

### Resource URL
```
GET /tspublic/v1/user/list
```
### Example request

##### cURL

```
curl -X GET --header 'Accept: application/json' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/list'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/list
```
### Example response

```
[
  {
    "name": "Administrator",
    "displayName": "Administration Group",
    "created": 1354006445722,
    "modified": 1354006445987,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": [],
    "visibility": "DEFAULT"
  },
  {
    "name": "Analyst",
    "displayName": "Analyst Group",
    "created": 1354006445722,
    "modified": 1354006445987,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": [],
    "visibility": "DEFAULT"
  },
  {
    "name": "rls-group-3",
    "displayName": "rls-group-3",
    "description": "Contains directly rls-group-1, rls-group-2 and belongs directly to rls-group-5",
    "created": 1459376495060,
    "modified": 1459376590681,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": rls-group-5,
    "visibility": "DEFAULT"
  }
  ]
```

#### Object properties

A typical principal object contains the following properties:

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Property</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>name</code></p></td>
<td style="text-align: left;"><p>Name of the principal. This field, in conjunction with whether the object is a user or group, is used to identify a user or group. The name of the principal must be unique.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>displayName</code></p></td>
<td style="text-align: left;"><p>Display name of the principal.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>description</code></p></td>
<td style="text-align: left;"><p>Description of the principal.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>mail</code></p></td>
<td style="text-align: left;"><p>The email address of the user. This field is populated only for the user objects. It is ignored if the object type is a group.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>principalTypeEnum</code></p></td>
<td style="text-align: left;"><p>Type of the user created in the ThoughtSpot system.
Valid values are:</p>
<ul>
<li><p><code>LOCAL_USER</code></p></li>
<li><p><code>LOCAL_GROUP</code></p></li>
</ul></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>password</code></p></td>
<td style="text-align: left;"><p>The password of the user. This field is populated only for the user object. It is ignored in the case of groups.</p>
<p>Password is only required:</p>
<ul>
<li><p>if the user is of <code>LOCAL_USER</code> type</p></li>
<li><p>when the user is created for the first time. In subsequent updates, the user password is not modified even if it changes in the source system.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>groupNames</code></p></td>
<td style="text-align: left;"><p>Name of the groups to which a principal belongs. For example, <code>Administrator</code>, <code>ALL_GROUP</code>, and so on. Users can belong to multiple groups.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>visibility</code></p></td>
<td style="text-align: left;"><p>Whether the users of the group can share objects with other users in the group.</p></td>
</tr>
</tbody>
</table>

### Response codes

| HTTP Code | Description           |
|-----------|-----------------------|
| **200**   | Successful retrieval of user data. |

## Change password

Use this `/tspublic/v1/user/updatepassword` API to change the password of a user.

### Resource URL

```
POST /tspublic/v1/user/updatepassword
```
### Request parameters

| Form Parameter    | Data Type | Description                       |
|-------------------|-----------|-----------------------------------|
| `name`            | string    | Name of the user.                 |
| `currentpassword` | string    | The current password of the user. |
| `password`          | string    | A new password of the user.       |

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'name=guest&currentpassword=test&password=foobarfoobar' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/updatepassword'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/updatepassword
```
### Response codes

| HTTP Code | Description                                          |
|-----------|------------------------------------------------------|
| **200**   | If the password of the user is changed successfully. |

## Update a user profile

To update the profile settings of a ThoughtSpot user programmatically, you can use the `/tspublic/v1/user/updatepreference` API.

The `/tspublic/v1/user/updatepreference` API allows you to modify the following attributes of a ThoughtSpot user profile:

-   Email address                         
    The email address of the user.

-   Language preference                        
    The system locale setting. The locale setting determines the language of the ThoughtSpot UI, date, number, and currency format.

-   Notification setting                           
    User preference for receiving email notifications when another ThoughtSpot user shares search answers or pinboards.

-   Settings for revisiting the onboarding experience                     
    The user preference for revisiting the onboarding experience.

    ThoughtSpot provides an interactive guided walkthrough to onboard new users. The onboarding experience leads users through a set of actions to help users get started and accomplish their tasks quickly. The users can turn off the Onboarding experience and access it again when they need assistance with the ThoughtSpot UI.

{% include note.html content="The `/tspublic/v1/user/updatepreference` API does not support modifying the profile picture of a user, the password of a user account, and the Answer experience preference settings in a user profile." %}


### Resource URL
```
POST /tspublic/v1/user/updatepreference
```
### Request parameters

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Form Parameter</th>
<th style="text-align: left;">Data Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>userid</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The ID of the user. Use the GUID of the user.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>preferences</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>JSON map of user preferences. In the JSON map, you can define the attributes to set the following preferences for a user:</p>
<ul>
<li><p>change the display language of the ThoughtSpot UI</p></li>
<li><p>receive email notifications when another user shares a search answer or a pinboard</p></li>
<li><p>enable the onboarding experience</p></li>
</ul></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>preferencesProto</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>A 64-bit encoded string for setting user preferences in a secure manner. For example, <code>CgoKCAgBEAEYASAB</code>.</p></td>
</tr>
</tbody>
</table>

{% include note.html content="If your browser or OS locale is set to a ThoughtSpot supported locale, ThoughtSpot automatically defaults to that locale. If your browser locale is not supported in ThoughtSpot, ThoughtSpot sets <code>en-US</code> (US English) as the default locale.
" %}

### Example request

#### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'userid=59481331-ee53-42be-a548-bd87be6ddd4a&preferences=%7B%22showWalkMe%22%3Atrue%2C%22notifyOnShare%22%3Atrue%2C%22analystOnboardingComplete%22%3Afalse%2C%22preferredLocale%22%3A%22en-IN%22%7D' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/updatepreference'
```

#### Request URL

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/updatepreference
```

#### Example JSON String

This example shows the following preference settings that you can pass as a JSON string.

```
{
   "showWalkMe":true,
   "notifyOnShare":true,
   "analystOnboardingComplete":false,
   "preferredLocale":"en-CA"
}
```

-   `showWalkMe` *Boolean*                                          
    Enables or disables the guided onboarding walkthrough. When set to `true`, the user can revisit the onboarding experience.
-   `notifyOnShare` *Boolean*                                       

    Sets a notification preference for receiving emails when another user shares search answers or pinboards.                                  
-   `analystOnboardingComplete` *Boolean*                              
    Indicates if the user is onboarded.
-   `preferredLocale` *String*                                           
    Sets the ThoughtSpot locale for the specified user account. For example, to allow a user to view the ThoughtSpot UI in Deutsche, you can set the `prefrredLocale` parameter to `de-DE`.

    The allowed values are:

    | Locale  | Language                 |
    |---------|--------------------------|
    | `da-DK` | Dansk                    |
    | `de-DE` | Deutsche                 |
    | `en-AU` | English (Australia)      |
    | `en-CA` | English (Canada)         |
    | `en-IN` | English (India)          |
    | `en-GB` | English (United Kingdom) |
    | `en-US` | English (United States)  |
    | `es-US` | Español (Latinoamérica)  |
    | `es-ES` | Español (España)         |
    | `fr-CA` | Français (Canada)        |
    | `fr-FR` | Français (France)        |
    | `it-IT` | Italiano                 |
    | `nl-NL` | Nederland                |
    | `nb-NO` | Norsk                    |
    | `pt-BR` | Português (Brasil)       |
    | `pt-PT` | Português (Portugal)     |
    | `fi-FI` | Suomi                    |
    | `sv-SE` | Svenska                  |
    | `zh-CN` | 中文(简体)               |
    | `ja-JP` | 日本語                   |

### Response codes

| HTTP Code | Description                         |
|-----------|-------------------------------------|
| **200**   | Successful update of a user profile |
| **400**   | Invalid user ID                     |



## Transfer ownership

Use the `/tspublic/v1/user/transfer/ownership` API to transfer ownership of *all* objects from one user to another.

{% include note.html content="You cannot transfer objects to or from the system user or the administrative user." %}
### Resource URL
```
POST /tspublic/v1/user/transfer/ownership
```
### Request parameters

| Query Parameter | Data Type | Description                |
|-----------------|-----------|----------------------------|
| `fromUserName`  | string    | Username to transfer from. |
| `toUserName`    | string    | Username to transfer to.   |

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/transfer/ownership?fromUserName=guest&toUserName=guest1'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/transfer/ownership?fromUserName=guest&toUserName=guest1
```
### Response codes

| HTTP Code | Description                                                                              |
|-----------|------------------------------------------------------------------------------------------|
| **200**   | If the ownership of all objects is successfully transferred.                             |
| **400**   | In case of invalid `fromName` and `toName`, or if there is no user for a given username. |

## Synchronize principals

Use the `/tspublic/v1/user/sync` API to synchronize ThoughtSpot users and groups with your external database.
The payload takes principals containing all users and groups present in the external database.
A successful API call returns the object that represents the changes made in the ThoughtSpot system.

During this operation:

-   Objects (users or groups) present in ThoughtSpot, but not present in the external list are deleted in ThoughtSpot.
-   Objects present in ThoughtSpot and the external list are updated such that the object attributes in ThoughtSpot match those present in the list.
    This includes group membership.
-   Objects not present in ThoughtSpot, but present in the external list are created in ThoughtSpot.

### Resource URL

    POST /tspublic/v1/user/sync

### Request parameters

This API uses `multipart/form-data` content type.

| Form Parameter  | Data Type | Description                                                                                               |
|-----------------|-----------|-----------------------------------------------------------------------------------------------------------|
| `principals`    | string    | Specifies a list of principal objects.   This is a JSON file containing all users and groups present in the external database.                      |
| `applyChanges`  | boolean   | A flag indicating whether to sync the users and groups to the system, and apply the difference evaluated. Use this parameter to validate a difference before applying changes.                                       |
| `removeDeleted` | boolean   | A flag indicating whether to remove deleted users/groups. When true, this flag removes any deleted users or groups.                                                  |
| `password`      | string    | Specifies a password.                                                                                     |

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'applyChanges=false' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/sync'
```

##### Request URL

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/user/sync
```
### Example response

This example covers user objects (with emails), group objects, and their relationships.

-   `created` and `modified` dates may be left blank for new users.
-   `principalTypeEnum` value specifies if the principal is a user or a group.

Here, `test1` user belongs to two groups, `Customer Success` and `Marketing`.
`test2` belongs to the group `Administrator`.
`All` is a default group to which every user belongs;
you may omit it from the input.

Set `visibility` to `NON_SHARABLE` if you do not want users to [share objects]({{ site.baseurl }}/admin/users-groups/add-user.html#sharing-visibility) with other users in this group.

```
[
  { "name": "Customer Success",
    "displayName": "Customer Success",
    "description": "CS",
    "created": 1568926267025,
    "modified": 1568926982242,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": [],
    "visibility": "DEFAULT" },

  { "name": "All",
    "displayName": "All Group",
    "created": 1354006445722,
    "modified": 1354006445722,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": [],
    "visibility": "DEFAULT" },

  { "name": "Marketing",
    "displayName": "Marketing",
    "description": "Marketing Group",
    "created": 1587573582931,
    "modified": 1587573583003,
    "principalTypeEnum": "LOCAL_GROUP",
    "groupNames": [],
    "visibility": "DEFAULT" },

  { "name": "test1",
    "displayName": "test one",
    "description": "",
    "created": 1587573554475,
    "modified": 1587573589986,
    "mail": "test1@test.com",
    "principalTypeEnum": "LOCAL_USER",
    "groupNames": [ "All", "Customer Success", "Marketing" ],
    "visibility": "DEFAULT" },

  { "name": "test2",
    "displayName": "test two",
    "created": 1587573621279,
    "modified": 1587573621674,
    "mail": "test2@test.com",
    "principalTypeEnum": "LOCAL_USER",
    "groupNames": [ "Administrator", "All" ],
    "visibility": "DEFAULT" }
]
```

### Response codes

| HTTP Code | Description                               |
|-----------|-------------------------------------------|
| **200**   | The user sync operation is successful. |
