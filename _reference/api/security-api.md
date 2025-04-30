---
title: [Security APIs]
summary: "The security APIs allow you to programmatically share ThoughtSpot objects with another user or user group."
last_updated: 6/8/2021
redirect_from:
- /app-integrate/reference/session-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The Security APIs allow you to share ThoughtSpot objects, such as pinboards and visualizations, with another user or a user group. Any ThoughtSpot user can share objects with another user or user group.

## Share objects with another user

To programmatically share ThoughtSpot objects with another user or user group, use the `/tspublic/v1/security/share` API.

When you share an object like a pinboard or visualization, a notification with a live link is sent to the user. When the users access this object, they can view the last saved version of the object.

### Resource URL

```
POST /tspublic/v1/security/share
```

### Request parameters

<table><colgroup> <col /> <col /> <col /> </colgroup>
<thead>
<tr>
<th>Form Parameter</th>
<th>Data Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><code>type</code></p>
</td>
<td>
<p>string</p>
</td>
<td>
<p>Type of metadata object. Specify one of the following values as a metadata object type:</p>
<ul>
<li>
<p><code>QUESTION_ANSWER_BOOK</code> to share search answers.</p>
</li>
<li>
<p><code>PINBOARD_ANSWER_BOOK</code> to share pinboards.</p>
</li>
<li>
<p><code>LOGICAL_COLUMN</code> to share a column of any data object such as tables, worksheets, or views.</p>
</li>
<li>
<p><code>LOGICAL_TABLE</code> to share a data object such as a table, worksheet, or view.</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><code>id</code></p>
</td>
<td>
<p>string</p>
</td>
<td>
<p>The GUID of the objects to share.</p>
</td>
</tr>
<tr>
<td>
<p><code>permission</code></p>
</td>
<td>
<p>string</p>
</td>
<td>
<p>The string with the GUID of the objects and share permission.</p>
<p>You can provide either <code>READ-ONLY</code> or <code>FULL</code> access to the objects. With READ-ONLY access, the users can view the shared object. The <code>FULL</code> access allows users to modify the object.</p>
<p>The format of the permission string is <code>{"permissions":{"":{"sharemode":""}}}</code>. For example, to provide a read-only access to a pinboard with a GUID of <code>7a9a6715-e154-431b-baaf-7b58246c13dd</code>, you can specify the string as <code>{"permissions":{"7a9a6715-e154-431b-baaf-7b58246c13dd":{"share mode":"READ_ONLY"}}}</code></p>
</td>
</tr>
<tr>
<td>
<p><code>emailshares</code></p>
</td>
<td>
<p>string</p>
</td>
<td>
<p>The email address of the user accounts with whom you want to share the objects.</p>
</td>
</tr>
<tr>
<td>
<p><code>notify</code> <em>Optional</em></p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>When set to <code>true</code>, a notification is sent to the users after an object is shared.</p>
</td>
</tr>
<tr>
<td>
<p><code>message</code> <em>Optional</em></p>
</td>
<td>
<p>string</p>
</td>
<td>
<p>The message text to send in the notification email.</p>
</td>
</tr>
</tbody>
</table>

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'type=PINBOARD_ANSWER_BOOK&id=%5B%22237921cc-ebf5-445a-8b7b-15c301f8456e%22%5D&permission=%7B%E2%80%9Cpermissions%E2%80%9D%3A%7B%E2%80%9C237921cc-ebf5-445a-8b7b-15c301f8456e%E2%80%9D%3A%7B%E2%80%9Csharemode%E2%80%9D%3A%E2%80%9DREAD_ONLY%E2%80%9D%7D%7D%7D&emailshares=%5B%22tsuser%40thoughtspot.com%22%5D&notify=false&useCustomEmbedUrls=true' 'https://<ThoughtSpot-host/callosum/v1/tspublic/v1/security/share'
```

##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/security/share
```
## Example response
```
 Response code

 204
```

### Response codes

| HTTP status code | Description             |
|------------------|-------------------------|
| **204**          | Successful operation    |
| **400**          | Invalid parameter value |

## Share a visualization with another user or user group

If you want to share a specific visualization from a pinboard with another user or user group, use the `/tspublic/v1/security/shareviz` API. This API lets you share the visualization with specific user IDs and provide a read-only access.

### Resource URL
```
POST /tspublic/v1/security/shareviz
```
### Request parameters

| Form Parameter | Data Type | Description |
|---|---|---|
| `type` | string | Type of the metadata object. The valid value is `PINBOARD_ANSWER_BOOK`. |
| `pinboardId` | string | The GUID of the pinboard to which the visualization belongs. |
| `principalids` | string | The GUID of the users with whom you want to share the visualization. |
| `vizid` | string | The GUID of the visualization. |
| `emailshares` | string | The email address of the user account with whom you want to share the visualization. If no email address is specified, the visualization is shared only with the user IDs specified in `principalids`. |
| `notify` *Optional*  | boolean   | When set to `true`, a notification is sent to the user after the visualization is shared. |
| `message` *Optional* | string    | The message text to send in the notification email. |

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'type=PINBOARD_ANSWER_BOOK&pinboardId=7a9a6715-e154-431b-baaf-7b58246c13dd&principalids=%5B%2259481331-ee53-42be-a548-bd87be6ddd4a%22%5D&vizid=e9753523-5de5-41ef-8d8c-b840f0260ea0&emailshares=%5Btsuser%40thoughtspot.com%5D&notify=true&useCustomEmbedUrls=false' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/security/shareviz'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/security/shareviz
```
### Example response
```
Response code

204
```
### Response codes

| HTTP status code | Description             |
|------------------|-------------------------|
| **204**          | Successful operation    |
| **400**          | Invalid parameter value |
