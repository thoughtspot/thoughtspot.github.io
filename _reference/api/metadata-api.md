---
title: [Metadata APIs]
summary: "Use the Metadata APIs to fetch ThoughtSpot visualization and object headers."
last_updated: 6/6/2021
redirect_from:
- /app-integrate/reference/metadata-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The metadata API service allows you to fetch metadata details for various objects in the ThoughtSpot system.
For example, you may want to see the visualization headers of a particular visualization or a pinboard.

## Get object headers

To query metadata objects headers for a data type in the Thoughtspot system, use the `/tspublic/v1/metadata/listobjectheaders` API.

### Resource URL
```
GET /tspublic/v1/metadata/listobjectheaders
```
### Request parameters

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Query Parameter</th>
<th style="text-align: left;">Data Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>type</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Type of the metadata object. To query data for specific object type, set the metadata object <code>type</code> to one of the following values:</p>
<ul>
<li><p><code>QUESTION_ANSWER_BOOK</code> for search answers.</p></li>
<li><p><code>PINBOARD_ANSWER_BOOK</code> for pinboards.</p></li>
<li><p><code>LOGICAL_COLUMN</code> for a column of any data object such as tables, worksheets, or views.</p></li>
<li><p><code>LOGICAL_TABLE</code> for any data object such as a table, worksheet, or view.</p></li>
<li><p><code>LOGICAL_RELATIONSHIP</code> for table or worksheet joins. A join combines columns from one or several data objects by using matching values.</p></li>
<li><p><code>TAG</code> for tags assigned to a metadata object.</p></li>
<li><p><code>DATA_SOURCE</code> for data source from which the metadata objects were loaded.</p></li>
</ul>
<p> **NOTE**: The <code>QUESTION_ANSWER_SHEET</code> and <code>PINBOARD_ANSWER_SHEET</code> metadata object types are deprecated. </p>

</td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>subtypes</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Specifies the sub-types of a metadata object. If you have specified the metadata object <code>type</code> as <code>LOGICAL_TABLE</code>, you can query data objects of a specific subtype.</p>

<ul>
<li><p><code>ONE_TO_ONE_LOGICAL</code> for tables</p></li>
<li><p><code>WORKSHEET</code> for worksheets. A worksheet is a collection of related tables.</p></li>
<li><p><code>USER_DEFINED</code> for tables uploaded from a CSV file.</p></li>
<li><p><code>AGGR_WORKSHEET</code> for Views. A <strong>View</strong> in ThoughtSpot refers to a table materialized from a search answer that was saved as a View by a user.</p></li>
</ul>
<p>The <code>PRIVATE_WORKSHEET</code> metadata sub-type is deprecated.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>category</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The metadata object classification. In ThoughtSpot, metadata objects such as search answers and pinboards are categorized under <strong>All</strong>, <strong>Yours</strong>, and <strong>Favorites</strong>. To query data for an object based on category, set one of the following values:</p>
<ul>
<li><p><code>ALL</code> to get all objects for a given metadata type, for example, search answers or pinboards.</p></li>
<li><p><code>MY</code> to get the objects created or saved by the current logged in user.</p></li>
<li><p><code>FAVORITE</code> to get a list of objects marked as favorites by the current logged in user.</p></li>
<li><p><code>REQUESTED</code> to get only the objects requested by the current logged in user.</p></li>
</ul></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>sort</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The sort order for the headers returned by the API. Valid values are:</p>

<ul>
<li><p><code>DEFAULT</code></p></li>
<li><p><code>NAME</code></p></li>
<li><p><code>DISPLAY_NAME</code></p></li>
<li><p><code>AUTHOR</code></p></li>
<li><p><code>CREATED</code></p></li>
<li><p><code>MODIFIED</code></p></li>
</ul></td>  
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>sortascending</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>boolean</p></td>
<td style="text-align: left;"><p>A flag to specify the sort order. A null value defines the default order.</p>
<ul>
<li><p>To set an ascending order, specify <code>true</code>.</p></li>
<li><p>To set a descending order, specify <code>false</code>.</p></li>
</ul></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>offset</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>The batch offset to fetch the page headers. The system default is <code>-1</code>, which implies first page.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>batchsize</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>The batch size of the object. A value of <code>-1</code> implies no pagination.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>tagname</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>A JSON array containing a set of tag names to filter headers by.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>pattern</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>A pattern to match object name. Use `%`for a wildcard match.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>skipids</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>A JSON array containing the GUIDs of the metadata objects that you want to exclude.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>fetchids</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>A JSON array containing the GUIDs of the metadata objects that you want to fetch.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>auto_created</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>boolean</p></td>
<td style="text-align: left;"><p>A flag to indicate whether to list only the auto-created objects. A value of null returns all objects.</p></td>
</tr>
</tbody>
</table>

### Example request

##### cURL

```
curl -X GET --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/listobjectheaders?type=PINBOARD_ANSWER_BOOK&subtypes=WORKSHEET&category=ALL&sort=CREATED&offset=-1'
```
##### Request URL

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/listobjectheaders?type=PINBOARD_ANSWER_BOOK&subtypes=WORKSHEET&category=ALL&sort=CREATED&offset=-1
```

### Example response

```
[
  {
    "id": "7752fa9e-db22-415e-bf34-e082c4bc41c3",
    "name": "Basic Pinboard 1",
    "description": "This pinboard contains one TPCH based visualization",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1450823023991,
    "modified": 1504281997165,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "7752fa9e-db22-415e-bf34-e082c4bc41c3",
    "isAutoCreated": false,
    "isAutoDelete": false
  },
  {
    "id": "6715f768-8930-4180-9a3d-1efdbfaa8e7f",
    "name": "Headline Pinboard",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1519940021267,
    "modified": 1519945210514,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "6715f768-8930-4180-9a3d-1efdbfaa8e7f",
    "isAutoCreated": false,
    "isAutoDelete": false
  },
  {
    "id": "601be8e5-140e-477c-8812-843795306438",
    "name": "Pinboard Filter - datatypes",
    "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "created": 1519943239150,
    "modified": 1519944533160,
    "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
    "owner": "601be8e5-140e-477c-8812-843795306438",
    "isAutoCreated": false,
    "isAutoDelete": false
  }
]
```

### Response codes

| HTTP Code | Description           |
|-----------|-----------------------|
| **200**   | Successful retrieval of metadata headers|

## Get visualization headers      
To get a list of visualization headers from the ThoughtSpot system, you can use the `/tspublic/v1/metadata/listvizheaders` API.
The API returns a list of visualizations for a given pinboard or a search answer.


### Resource URL
```
GET /tspublic/v1/metadata/listvizheaders
```
### Request parameters

| Query Parameter | Data Type | Description                              |
|-----------------|-----------|------------------------------------------|
| `id`             | string    | ID of a particular answer or a pinboard. |

### Example request

##### cURL    

```
curl -X GET --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<instance>/callosum/v1/tspublic/v1/metadata/listvizheaders?id=97begg839e-71b6-42ad-a980-20c38b4d6db5'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/listvizheaders?id=97be839e-71b6-42ggad-a980-20c38b4d6db5
```
### Example response

```
[
  {
    "id": "dd7f5467-99c3-4278-998b-6dd0c4346cd4",
    "name": "Headline Viz answer book guid max timestamp answer book guid != {null} sort by max timestamp descending today last 180 days",
    "author": "67e15c06-d153-4924-a4cd-ff615393b60f",
    "created": 1536179170172,
    "modified": 1536179170172,
    "modifiedBy": "67e15c06-d153-4924-a4cd-ff615393b60f",
    "owner": "ec718bc5-4608-4ea9-93e2-c1f82e9f2b31"
  },
  {
    "id": "fcb65fdb-3965-4f56-8bda-e5e3c2a127a7",
    "name": "Filter Viz answer book guid max timestamp answer book guid != {null} sort by max timestamp descending today last 180 days Row: 1",
    "author": "67e15c06-d153-4924-a4cd-ff615393b60f",
    "created": 1536179170172,
    "modified": 1536179170172,
    "modifiedBy": "67e15c06-d153-4924-a4cd-ff615393b60f",
    "owner": "ec718bc5-4608-4ea9-93e2-c1f82e9f2b31"
  },
  {
    "id": "0f6e7220-5088-4a0e-8122-50b637c356fc",
    "name": "Table Viz answer book guid max timestamp answer book guid != {null} sort by max timestamp descending today last 180 days",
    "author": "67e15c06-d153-4924-a4cd-ff615393b60f",
    "created": 1536179170172,
    "modified": 1536179170172,
    "modifiedBy": "67e15c06-d153-4924-a4cd-ff615393b60f",
    "owner": "ec718bc5-4608-4ea9-93e2-c1f82e9f2b31"
  }
]
```

### Response codes

| HTTP status code | Description                    |
|-----------|--------------------------------|
| **200**   | Successful retrieval of visualization headers |
| **400**   | Invalid pinboard GUID          |


## Get metadata objects for a user or user group

Use the `/tspublic/v1/metadata/listas` API to get a list of metadata objects available for a user or user group.

### Resource URL
```
GET /tspublic/v1/metadata/listas
```
### Request parameters

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 33%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Query Parameter</th>
<th style="text-align: left;">Data Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>offset</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>The batch offset value that indicates the first item to return in a page of headers. The system default is -1, which implies first page.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>batchsize</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>The batch size of the objects. A value of <code>-1</code> implies no pagination.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>pattern</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The pattern to match object names. Use <code>%</code> for a wildcard match.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>principalid</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>ID of the user or user group.</p>
<ul>
<li><p>If you specify a userID and set the <code>type</code> parameter to <code>USER</code>, the API returns metadata objects associated with the user ID.</p></li>
<li><p>If you specify a user group ID and set the type parameter to <code>USER_GROUP</code>, the API returns metadata objects for all the users mapped to the specified user group.</p></li>
<li><p>If the <code>principalID</code> parameter is not defined, but the <code>type</code> attribute is set to <code>USER</code>, the API returns metadata objects for the current logged-in user.</p></li>
<li><p>If the <code>principalID</code> parameter is not defined, but the <code>type</code> attribute is set to <code>USER_GROUP</code>, the API returns metadata objects for all user groups.</p></li>
<li><p>If both <code>principalID</code> and <code>type</code> parameters are not defined, the API returns headers for all users.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>minimumaccesslevel</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Minimum access level that the specified user or user group has.
Valid values are:</p>
<ul>
<li><p><code>NO_ACCESS</code></p></li>
<li><p><code>READ_ONLY</code></p></li>
<li><p><code>MODIFY</code></p></li>
</ul>
<p>The default value is <code>NO_ACCESS</code>.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>type</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Type of principal. The allowed values are <code>USER</code> and <code>USER_GROUP</code>.</p></td>
</tr>
</tbody>
</table>

### Example request

<div class="formalpara-title">

##### cURL

</div>

```
curl -X GET --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/listas?offset=-1&pattern=%25&principalid=13bb9aec-aad0-4075-adb9-bd0569351393&minimumaccesslevel=READ_ONLY&type=USER'
```

<div class="formalpara-title">

##### Request URL

</div>

    https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/listas?offset=-1&pattern=%25&principalid=13bb9aec-aad0-4075-adb9-bd0569351393&minimumaccesslevel=READ_ONLY&type=USER

### Example response

The following example shows the headers for user groups:

```
{
  "headers": [
    {
      "id": "eea322db-2b8c-4bb7-922d-a80807a0ba94",
      "indexVersion": 5,
      "generationNum": 1471,
      "name": "Stats and Trends for Search on Answers",
      "description": "This pinboard describes how users are searching for existing answers.",
      "author": "67e15c06-d153-4924-a4cd-ff615393b60f",
      "authorName": "system",
      "authorDisplayName": "System User",
      "created": 1604579772176,
      "modified": 1618858656671,
      "modifiedBy": "67e15c06-d153-4924-a4cd-ff615393b60f",
      "owner": "eea322db-2b8c-4bb7-922d-a80807a0ba94",
      "isDeleted": false,
      "isHidden": false,
      "isAutoCreated": false,
      "isAutoDelete": false,
      "tags": [],
      "isExternal": false,
      "isDeprecated": false
    },
    {
      "id": "9d789a9e-12a7-4b00-91de-e558b590d192",
      "indexVersion": 1217,
      "generationNum": 1217,
      "name": "test table 2",
      "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "authorName": "tsadmin",
      "authorDisplayName": "Administrator",
      "created": 1618463063893,
      "modified": 1618463113058,
      "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "owner": "9d789a9e-12a7-4b00-91de-e558b590d192",
      "isDeleted": false,
      "isHidden": false,
      "isAutoCreated": false,
      "isAutoDelete": false,
      "tags": [],
      "isExternal": false,
      "isDeprecated": false
    }
  ],
  "isLastBatch": true,
  "debugInfo": {}
}
```

The following example shows the headers returned for a user:

```
{
  "headers": [
    {
      "id": "b27d4ce9-0220-4238-b0b0-917ee18147df",
      "indexVersion": 1494,
      "generationNum": 1494,
      "name": "Sales Performance",
      "description": "",
      "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "authorName": "tsadmin",
      "authorDisplayName": "Administrator",
      "created": 1614677491805,
      "modified": 1619648685627,
      "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "owner": "b27d4ce9-0220-4238-b0b0-917ee18147df",
      "isDeleted": false,
      "isHidden": false,
      "isAutoCreated": false,
      "isAutoDelete": false,
      "tags": [],
      "isExternal": false,
      "isDeprecated": false
    },
    {
      "id": "8161e7ab-8ada-43ae-9627-f9b76dd85d27",
      "indexVersion": 1490,
      "generationNum": 1490,
      "name": "Copy of Sales Performance",
      "description": "",
      "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "authorName": "tsadmin",
      "authorDisplayName": "Administrator",
      "created": 1619644750652,
      "modified": 1619644750652,
      "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "owner": "8161e7ab-8ada-43ae-9627-f9b76dd85d27",
      "isDeleted": false,
      "isHidden": false,
      "isAutoCreated": false,
      "isAutoDelete": false,
      "tags": [],
      "isExternal": false,
      "isDeprecated": false
    },
    {
      "id": "eea322db-2b8c-4bb7-922d-a80807a0ba94",
      "indexVersion": 5,
      "generationNum": 1471,
      "name": "Stats and Trends for Search on Answers",
      "description": "This pinboard describes how users are searching for existing answers. It provides what users are searching for, where users are successful and where they are not.",
      "author": "67e15c06-d153-4924-a4cd-ff615393b60f",
      "authorName": "system",
      "authorDisplayName": "System User",
      "created": 1604579772176,
      "modified": 1618858656671,
      "modifiedBy": "67e15c06-d153-4924-a4cd-ff615393b60f",
      "owner": "eea322db-2b8c-4bb7-922d-a80807a0ba94",
      "isDeleted": false,
      "isHidden": false,
      "isAutoCreated": false,
      "isAutoDelete": false,
      "tags": [],
      "isExternal": false,
      "isDeprecated": false
    },

    {
      "id": "7e4071e5-6223-4ccd-a839-2621e5d8201e",
      "indexVersion": 1230,
      "generationNum": 1470,
      "name": "Sales Breakdown",
      "description": "",
      "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "authorName": "tsadmin",
      "authorDisplayName": "Administrator",
      "created": 1618469015915,
      "modified": 1618469413741,
      "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
      "owner": "7e4071e5-6223-4ccd-a839-2621e5d8201e",
      "isDeleted": false,
      "isHidden": false,
      "isAutoCreated": false,
      "isAutoDelete": false,
      "tags": [
        {
          "id": "bde9b681-01e8-4156-bf86-170f6cb7d7ab",
          "indexVersion": 2045,
          "generationNum": 2045,
          "name": "Sales",
          "author": "59481331-ee53-42be-a548-bd87be6ddd4a",
          "created": 1621312956892,
          "modified": 1621312957239,
          "modifiedBy": "59481331-ee53-42be-a548-bd87be6ddd4a",
          "owner": "bde9b681-01e8-4156-bf86-170f6cb7d7ab",
          "isDeleted": false,
          "isHidden": false,
          "clientState": {
            "color": "#63c9ea"
          },
      "tags": [],
      "isExternal": false,
      "isDeprecated": false
    },

  ],
  "isLastBatch": true,
  "debugInfo": {}
}
```

### Response codes

| HTTP status code | Description                                  |
|-----------|----------------------------------------------|
| **200**   | Successful retrieval of metadata headers |
| **401**   | Unauthorized request                         |
| **404**   | The requested resource could not be found    |

## Assign tags to metadata objects

Tags are labels that you can apply to a Thoughtspot object, such as a pinboard or search answer. You can use tags to find and filter your answers, pinboards, and data objects.

To apply a tag to a ThoughtSpot object programmatically, you can use the `/tspublic/v1/metadata/assigntag` API.

Before you apply a tag, make sure the tags are created and available for assignment.

{% include note.html content="Only ThoughtSpot admin users can create a tag. Any ThoughtSpot user with edit permissions can assign a tag to an object." %}

### Resource URL
```
    POST /tspublic/v1/metadata/assigntag
```
### Request parameters

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 33%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Query Parameter</th>
<th style="text-align: left;">Data Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>id</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The GUID of the metadata object to tag. For example, a pinboard or visualization. If you want to assign the same tag to several objects, specify the GUID of the metadata objects.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>type</code> <em>Optional</em></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Type of the metadata object. Specify one of the following values as a metadata object type:</p>
<ul>
<li><p><code>QUESTION_ANSWER_BOOK</code> for search answers.</p></li>
<li><p><code>PINBOARD_ANSWER_BOOK</code> for pinboards.</p></li>
<li><p><code>LOGICAL_COLUMN</code> for a column of any data object such as tables, worksheets, or views.</p></li>
<li><p><code>LOGICAL_TABLE</code> for any data object such as a table, worksheet, or view.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>tagid</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The GUID of tag to assign.</p></td>
</tr>
</tbody>
</table>

### Example request

##### cURL

``` cURL
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'id=%5B%225772aaf1-555d-44c4-a24c-ae6fba6684c3%22%5D&type=%5B%22QUESTION_ANSWER_BOOK%22%5D&tagid=%5B%22c4db6274-dec3-4902-ba0e-493734fef9c0%22%5D' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/assigntag'
```

##### Request URL
```
    https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/assigntag
```
### Example response
```
    Response code

    204
```
### Response codes

| HTTP code | Description                                        |
|-----------|----------------------------------------------------|
| **204**   | Successful application of tag to a metadata object |
| **400**   | Invalid parameter value                            |
| **500**   | Invalid metadata object ID                         |
