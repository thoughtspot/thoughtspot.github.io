---
title: [TML APIs]
summary: "You can programmatically export and import TML files with the TML Import and Export APIs."
last_updated: 3/31/2021
sidebar: mydoc_sidebar
redirect_from:
permalink: /:collection/:path.html
---

These APIs enable you to programmatically export, validate, and import scriptable [TML]({{ site.baseurl }}/admin/ts-cloud/tml.html) files. Use these APIs to automate the change management and deployment processes between your development and production environments. With these APIs, analysts can much more easily migrate from one environment to the other by automating the entire change management process, reducing the risk of human error.

To access REST APIs, you must authenticate through SAML SSO. For more information on configuring SAML, see [SAML SSO]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html).

## Import API
This API allows you to validate and import TML objects.

### Resource URL

<code class="api-method-post">post</code> /tspublic/v1/metadata/tml/import

### Request Parameters

<table>
   <colgroup>
      <col style="width:20%" />
      <col style="width:20%" />
      <col style="width:45%" />
      <col style="width:15%" />
   </colgroup>
   <thead>
      <tr>
         <th>Form Parameter</th>
         <th>Data Type</th>
         <th>Description</th>
         <th>Default</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>import_objects</code></td>
         <td>string</td>
         <td><p>The objects to import. An <code>x-www-form-urlencoded</code> string containing a JSON array of strings in YAML format.</p>
         <p>Example for import of a single object: <code>["guid: 3729c085-8659-48fd-9479-a67bd7307496\npinboard:\n  name: …"]</code></p>
         <p>Example for import of multiple objects: <code>["guid: 3729c085-8659-48fd-9479-a67bd7307496\npinboard:\n  name: …“, “["guid: 3729c085-8659-48fd-9479-a67bd7307496\npinboard:\n  name: "4f3827f2-ee0c-4771-848a-29e449901c86”]</code></p>
         </td>
         <td>None</td>
      </tr>
     <tr>
         <td><code>import_policy</code></td>
         <td>string [PARTIAL | ALL_OR_NONE | VALIDATE_ONLY]</td>
         <td>Policy to follow during import. <code>PARTIAL</code> imports all objects that validate successfully, and ignores objects that do not validate successfully. <code>ALL_OR_NONE</code> only imports the objects if they all validate successfully. <code>VALIDATE_ONLY</code> validates the objects, but does not import them.</td>
         <td>PARTIAL</td>
      </tr>
      <tr>
         <td><code>force_create</code></td>
         <td>boolean</td>
         <td>Specifies if you are updating or creating objects. To create new objects, specify <code>true</code>. By default, ThoughtSpot updates existing objects that have the same GUID as the objects you are importing. When <code>true</code>, the GUID property in the imported TML is replaced on the server, and the Response Headers will include the <code>id_guid</code> property with the GUID of the new object. </td>
         <td>false</td>
      </tr>
   </tbody>
</table>

### Request Example

In your request, you must ensure you have the following headers:
- The Accept header must be `Accept: text/plain`
- The X-requested-by header must be `X-Requested-By: ThoughtSpot`

##### cURL

```
curl -X POST --header 'Accept: text/plain' --header 'X-Requested-By: ThoughtSpot' --data-urlencode 'import_objects=[{
	"guid": "12289fad-f230-485e-8c65-e36082eebf44",
	"answer": {
		"name": "Basic Answer 1",
		"description": "This is basic answer with table and headline visualizations.",
		"tables": [{
			"id": "LINEORDER",
			"name": "LINEORDER",
			"fqn": "2445fe81-30d6-46fa-9f42-f6b1b4e01623"
		}, {
			"id": "PART",
			"name": "PART",
			"fqn": "a7fc012e-bdb3-4e75-9ce4-b3f731d90136"
		}],
		"search_query": "[LINEORDER_1::Revenue] [PART_1::Color]",
		"answer_columns": [{
			"name": "Total Revenue"
		}, {
			"name": "Color"
		}],
		"table": {
			"table_columns": [{
				"column_id": "Color",
				"headline_aggregation": "COUNT_DISTINCT"
			}, {
				"column_id": "Total Revenue",
				"headline_aggregation": "SUM"
			}],
			"ordered_column_ids": ["Color", "Total Revenue"]
		},
		"chart": {
			"type": "COLUMN",
			"chart_columns": [{
				"column_id": "Total Revenue"
			}, {
				"column_id": "Color"
			}],
			"axis_configs": [{
				"x": ["Color"],
				"y": ["Total Revenue"]
			}]
		},
		"display_mode": "TABLE_MODE"
	}
}]'
--data-urlencode 'import_policy=PARTIAL'
--data-urlencode 'force_create=true' 'http://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/import'
```

##### Request URL

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/import
```

### Response Example
```
{"object": [{"response": {"status": {"status_code": "OK"},"header": {"id_guid": "a09a3787-e546-42cb-888f-c17260dd1229","name": "Basic Answer 1","description": "This is basic answer with table and headline visualizations.","author_guid": "59481331-ee53-42be-a548-bd87be6ddd4a","owner_guid": "a09a3787-e546-42cb-888f-c17260dd1229","metadata_type": "QUESTION_ANSWER_BOOK"}}}]}
```

### HTTP status codes
You may receive the following status codes in your output. These HTTP status codes have the following meanings:

| Status code | Meaning |
| --- | --- |
| 200	| ImportEPackResponse proto serialized as JSON string. |
| 400 | Bad request |
| 401 | Unauthorized - wrong credentials |
| 403 | Forbidden - incorrect permissions |
| 404 | Not found |
| 500 | Internal server error |

## Export API
This API allows you to export TML objects.

### Resource URL

<code class="api-method-post">post</code> /tspublic/v1/metadata/tml/export

### Request Parameters

<table>
   <colgroup>
      <col style="width:20%" />
      <col style="width:20%" />
      <col style="width:45%" />
      <col style="width:15%" />
   </colgroup>
   <thead>
      <tr>
         <th>Form Parameter</th>
         <th>Data Type</th>
         <th>Description</th>
         <th>Default</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>export_ids</code></td>
         <td>string</td>
         <td><p>An <code>x-www-form-urlencoded</code> string containing a JSON array of ids of objects to export. You receive results in the order you request them.</p>
         <p>Example for export of a single object: <code>["226abd2843-afef-4c2f-bf2f-8fba065330e"]</code></p>
         <p>Example for export of multiple objects: <code>["226abd2843-afef-4c2f-bf2f-8fba065330e", ”22d305bc51-688b-414f-badc-94579d48308c”]</code></p></td>
         <td>None</td>
      </tr>
     <tr>
         <td><code>formattype</code></td>
         <td>string</td>
         <td>The format in which to export the objects. Valid values: JSON, YAML</td>
         <td>None</td>
      </tr>
      <tr>
         <td><code>export_associated</code></td>
         <td>boolean</td>
         <td>Specifies if you would like to export the associated objects. To export the objects associated with the objects you specified in <code>export_ids</code>, specify <code>true</code>. When you specify <code>true</code>, the API exports any underlying Worksheets, tables, or Views for a given object. By default, the API does not export these underlying objects.</td>
         <td>false</td>
      </tr>
   </tbody>
</table>

### Request Example

In your request, you must ensure you have the following headers:
- The Accept header must be `Accept: text/plain`
- The X-requested-by header must be `X-Requested-By: ThoughtSpot`

##### cURL

```
curl -X POST
--header 'Accept: text/plain' \
--header 'X-Requested-By: ThoughtSpot' \
--data-urlencode 'export_ids=["12289fad-f230-485e-8c65-e36082eebf44"]' \
--data-urlencode 'formattype=YAML' \
--data-urlencode 'export_associated=false' \
'http://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/export'
```

##### Request URL

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/export
```

### Response Example
```
{"object": [{"info": {"name": "Basic Answer 1","filename": "Basic Answer 1.answer.tml","status": {"status_code": "OK"},"type": "answer","id": "12289fad-f230-485e-8c65-e36082eebf44"},"edoc": "guid: 12289fad-f230-485e-8c65-e36082eebf44\nanswer:\n  name: Basic Answer 1\n  description: This is basic answer with table and headline visualizations.\n  tables:\n  - id: LINEORDER\n    name: LINEORDER\n    fqn: 2445fe81-30d6-46fa-9f42-f6b1b4e01623\n  - id: PART\n    name: PART\n    fqn: a7fc012e-bdb3-4e75-9ce4-b3f731d90136\n  joins:\n  - id: Lineorder PartKey - Part PartKey\n    name: Lineorder PartKey - Part PartKey\n    source: LINEORDER\n    destination: PART\n  table_paths:\n  - id: LINEORDER_1\n    table: LINEORDER\n    join_path:\n    - {}\n  - id: PART_1\n    table: PART\n    join_path:\n    - join:\n      - Lineorder PartKey - Part PartKey\n  formulas:\n  - id: f1\n    name: f1\n    expr: \"if ( [Revenue(1992)] > [Revenue(1995)] ) then \\\"l\\\" else \\\"h\\\"\"\n  search_query: \"[LINEORDER_1::Revenue] [LINEORDER_1::Commit Date].1992 vs [LINEORDER_1::Commit Date].1995 [PART_1::Color] [f1]\"\n  answer_columns:\n  - name: FiscalYearNumber(Commit Date) = 1992 OR FiscalYearNumber(Commit Date) = 1995\n  - name: f1\n  - name: Revenue(1992)\n  - name: Revenue(1995)\n  - name: Color\n  table:\n    table_columns:\n    - column_id: f1\n      headline_aggregation: COUNT_DISTINCT\n    - column_id: Color\n      headline_aggregation: COUNT_DISTINCT\n    - column_id: Revenue(1995)\n      headline_aggregation: TABLE_AGGR\n    - column_id: Revenue(1992)\n      headline_aggregation: TABLE_AGGR\n    ordered_column_ids:\n    - Color\n    - f1\n    - Revenue(1992)\n    - Revenue(1995)\n    client_state: \"{\\\"widthState\\\":{},\\\"wrapTableHeader\\\":true}\"\n    client_state_v2: \"{\\\"tableVizPropVersion\\\": \\\"V1\\\",\\\"wrapTableHeader\\\": true,\\\"columnProperties\\\": [{\\\"columnId\\\": \\\"6204abeb-31a5-4789-a5a5-6124caf32d67\\\",\\\"columnProperty\\\": {}},{\\\"columnId\\\": \\\"f30157ce-7da4-4cd3-a11b-346b9ec5b398\\\",\\\"columnProperty\\\": {}}]}\"\n  chart:\n    type: COLUMN\n    chart_columns:\n    - column_id: f1\n    - column_id: Revenue(1992)\n    - column_id: Revenue(1995)\n    axis_configs:\n    - x:\n      - f1\n      y:\n      - Revenue(1992)\n      - Revenue(1995)\n    client_state: \"\"\n    client_state_v2: \"{\\\"version\\\": \\\"V4\\\",\\\"chartProperties\\\": {\\\"chartSpecific\\\": {}},\\\"axisProperties\\\": [{\\\"id\\\": \\\"b53fcf8a-fd80-4e34-9ec0-7da8acd90cf4\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"Y\\\",\\\"linkedColumns\\\": [\\\"Revenue(1992)\\\"],\\\"isOpposite\\\": false}},{\\\"id\\\": \\\"7f5859b1-88ea-4cf7-a2fd-3e1524de2ffa\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"Y\\\",\\\"linkedColumns\\\": [\\\"Revenue(1995)\\\"],\\\"isOpposite\\\": true}},{\\\"id\\\": \\\"a790945d-124e-44bf-bfc1-998b5924621d\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"X\\\",\\\"linkedColumns\\\": [\\\"f1\\\"]}}]}\"\n  display_mode: TABLE_MODE\n"}]}
```

### HTTP status codes
You may receive the following status codes in your output for the TML export API. These HTTP status codes have the following meanings:

| Status code | Meaning |
| --- | --- |
| 200	| Returned EDoc (TML) representation of metadata |
| 400 | Bad request |
| 401 | Unauthorized - wrong credentials |
| 403 | Forbidden - incorrect permissions |
| 404 | Not found |
| 500 | Internal server error |
