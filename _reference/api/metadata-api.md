---
title: [Metadata API]
summary: "Use the Metadata APIs to fetch ThoughtSpot visualization and object headers."
last_updated: 3/30/2021
redirect_from:
- /app-integrate/reference/metadata-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The metadata API service allows you to fetch metadata details for various objects in the ThoughtSpot system.
For example, you may want to see the visualization headers of a particular visualization or a pinboard.

## Get visualization headers      
Use this API to get a list of visualization headers from the ThoughtSpot system.
The output includes a list of objects, each with information about the visualizations in a given pinboard or a search answer.

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

| HTTP Code | Description                    |
|-----------|--------------------------------|
| **200**   | Successful retrieval of visualization headers |
| **400**   | Invalid pinboard GUID          |

## Get object headers

Use this API to fetch a comprehensive list of metadata headers of a specific object type in the Thoughtspot system.

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
<td style="text-align: left;"><p><code>type</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Specifies the metadata object type. Valid values are:             

 <code>QUESTION_ANSWER_BOOK</code>        
 <code>PINBOARD_ANSWER_BOOK</code>       
 <code>QUESTION_ANSWER_SHEET</code>        
 <code>PINBOARD_ANSWER_SHEET</code>      
 <code>LOGICAL_COLUMN</code>    
 <code>LOGICAL_TABLE</code>    
 <code>LOGICAL_RELATIONSHIP</code>    
 <code>TAG</code>   
 <code>DATA_SOURCE</code></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>subtypes</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Specifies the sub-types of a metadata object. Valid values are:

 <code>ONE_TO_ONE_LOGICAL</code>           
 <code>WORKSHEET</code>      
 <code>PRIVATE_WORKSHEET</code>
 <code>USER_DEFINED</code>       
 <code>AGGR_WORKSHEET</code></p>    
<p>Note: This parameter only applies to the `LOGICAL_TABLE`.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>category</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Specifies the metadata object category. Valid values are:  

<code>ALL</code>     
<code>MY</code>    
<code>FAVORITE</code>   
<code>REQUESTED</code></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>sort</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>Sort order of returned headers. Valid values are:

<code>DEFAULT</code>          
<code>NAME</code>   
<code>DISPLAY_NAME</code>   
<code>AUTHOR</code>    
<code>CREATED</code>   
<code>MODIFIED</code></p></td>  
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>sortascending</code></p></td>
<td style="text-align: left;"><p>boolean</p></td>
<td style="text-align: left;"><p>A flag to specify the sort order. A null value defines the default order.     

To set an ascending order, specify <code>true</code>.

To set a descending order, specify <code>false</code>.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>offset</code></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>The batch offset to fetch the page headers. The system default is <code>-1</code> that implies the first page.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>batchsize</code></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>The batch size of the object. A value of <code>-1</code> implies no pagination.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>tagname</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>A JSON array containing a set of tag names to filter headers by.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>pattern</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>A pattern to match for object name. Use `%`for wildcard match.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>skipids</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>IDs of metadata objects to exclude.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>fetchids</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>IDs of metadata objects to fetch.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>auto_created</code></p></td>
<td style="text-align: left;"><p>boolean</p></td>
<td style="text-align: left;"><p>A flag that indicates whether to list only the auto-created objects. A value of null returns all objects.</p></td>
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
