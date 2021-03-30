---
title: [TML APIs]
summary: "You can programmatically export and import TML files with the TML Import and Export APIs."
last_updated: 3/26/2021
sidebar: mydoc_sidebar
redirect_from:
permalink: /:collection/:path.html
---

These APIs enable you to programmatically export, validate, and import scriptable [TML]({{ site.baseurl }}/admin/ts-cloud/tml.html) files. Use these APIs to automate the change management and deployment processes between your development and production environments. With these APIs, analysts can much more easily migrate from one environment to the other by automating the entire change management process, reducing the risk of human error.

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
         <td>JSON array of TML objects to upload. Can be in JSON or YAML form.</td>
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
         <td>Specifies if you are updating or creating objects. To create new objects, specify <code>true</code>. By default, ThoughtSpot updates existing objects that have the same GUID as the objects you are importing.</td>
         <td>false</td>
      </tr>
   </tbody>
</table>

### Request Example

##### cURL

```
curl -X POST
--header 'Accept: text/plain'
--header 'X-Requested-By: ThoughtSpot'
--data-urlencode 'import_objects=[{   "guid": "12289fad-f230-485e-8c65-e36082eebf44",         "answer": {             "name": "Basic Answer 1",               "description": "This is basic answer with table and headline visualizations.",          "tables": [{                    "id": "LINEORDER",                      "name": "LINEORDER",                    "fqn": "2445fe81-30d6-46fa-9f42-f6b1b4e01623"           }, {                    "id": "PART",                   "name": "PART",                         "fqn": "a7fc012e-bdb3-4e75-9ce4-b3f731d90136"           }],             "joins": [{                     "id": "Lineorder PartKey - Part PartKey",                       "name": "Lineorder PartKey - Part PartKey",                     "source": "LINEORDER",                  "destination": "PART"           }],             "table_paths": [{                       "id": "LINEORDER_1",                    "table": "LINEORDER",                   "join_path": [{}]               }, {                    "id": "PART_1",                         "table": "PART",                        "join_path": [{                                 "join": ["Lineorder PartKey - Part PartKey"]                    }]              }],             "search_query": "[LINEORDER_1::Revenue] [PART_1::Color]",               "answer_columns": [{                    "name": "Total Revenue"                 }, {                    "name": "Color"                 }],             "table": {                      "table_columns": [{                             "column_id": "Color",                           "headline_aggregation": "COUNT_DISTINCT"                        }, {                            "column_id": "Total Revenue",                           "headline_aggregation": "SUM"                   }],                     "ordered_column_ids": ["Color", "Total Revenue"]                },              "chart": {                      "type": "COLUMN",                       "chart_columns": [{                             "column_id": "Total Revenue"                    }, {                            "column_id": "Color"                    }],                     "axis_configs": [{                              "x": ["Color"],                                 "y": ["Total Revenue"]                  }]              },              "display_mode": "TABLE_MODE"    } }]'
--data-urlencode 'import_policy=PARTIAL'
--data-urlencode 'force_create=true'
'http://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/import'
--cookie 'userGUID=59481331-ee53-42be-a548-bd87be6ddd4a; JSESSIONID=580e3f28-813b-4723-b651-ff89c84da240'
```

{% include note.html content="You must send the <code>X-Requested-By</code> header in your request. Without it, the request fails." %}

##### Request URL

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/import
```

### Response Example
```
{"object": [{"response": {"status": {"status_code": "OK"},"header": {"id_guid": "e544ff88-618f-40e0-bf60-b60d5b804c10","name": "Basic Answer 1","description": "This is basic answer with table and headline visualizations.","author_guid": "59481331-ee53-42be-a548-bd87be6ddd4a","owner_guid": "e544ff88-618f-40e0-bf60-b60d5b804c10","metadata_type": "QUESTION_ANSWER_BOOK"}}}]}
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
         <td>Json array of ids of objects to export.</td>
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

##### cURL

```
curl -X POST
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Accept: text/plain' \
--header 'X-Requested-By: ThoughtSpot' -d 'export_ids=%5B%226abd2843-afef-4c2f-bf2f-8fba065330e2%22%2C%20%22d305bc51-688b-414f-badc-94579d48308c%22%5D&formattype=YAML&export_associated=false' \
'http://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/export'
```

{% include note.html content="You must send the <code>X-Requested-By</code> header in your request. Without it, the request fails." %}

##### Request URL

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/metadata/tml/export
```

### Response Example
```
{"object": [{"info": {"name": "Total Cost by Type and Tea","filename": "Total Cost by Type and Te.answer.tml","status": {"status_code": "OK"},"type": "answer","id": "6abd2843-afef-4c2f-bf2f-8fba065330e2"},"edoc": "guid: 6abd2843-afef-4c2f-bf2f-8fba065330e2\nanswer:\n  name: Total Cost by Type and Tea\n  tables:\n  - id: tea ws\n    name: tea ws\n  search_query: \"[Cost] [Tea] [Type]\"\n  answer_columns:\n  - name: Total Cost\n  - name: Tea\n  - name: Type\n  table:\n    table_columns:\n    - column_id: Tea\n      headline_aggregation: COUNT_DISTINCT\n    - column_id: Type\n      headline_aggregation: COUNT_DISTINCT\n    - column_id: Total Cost\n      headline_aggregation: SUM\n    ordered_column_ids:\n    - Tea\n    - Type\n    - Total Cost\n    client_state: \"\"\n    client_state_v2: \"{\\\"tableVizPropVersion\\\": \\\"V1\\\",\\\"wrapTableHeader\\\": true}\"\n  chart:\n    type: COLUMN\n    chart_columns:\n    - column_id: Tea\n    - column_id: Type\n    - column_id: Total Cost\n    axis_configs:\n    - x:\n      - Type\n      y:\n      - Total Cost\n      color:\n      - Tea\n    client_state: \"\"\n    client_state_v2: \"{\\\"version\\\": \\\"V4\\\",\\\"chartProperties\\\": {\\\"gridLines\\\": {},\\\"responsiveLayoutPreference\\\": \\\"AUTO_ON\\\",\\\"chartSpecific\\\": {}},\\\"columnProperties\\\": [{\\\"columnId\\\": \\\"Tea\\\",\\\"columnProperty\\\": {}},{\\\"columnId\\\": \\\"Total Cost\\\",\\\"columnProperty\\\": {}}],\\\"axisProperties\\\": [{\\\"id\\\": \\\"2d659cfe-187b-4c92-9b6e-007729f808b4\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"Y\\\",\\\"linkedColumns\\\": [\\\"Total Cost\\\"],\\\"isOpposite\\\": false}},{\\\"id\\\": \\\"69164478-6948-44fa-b8d3-84166a97d9ba\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"X\\\",\\\"linkedColumns\\\": [\\\"Type\\\"]}}],\\\"systemSeriesColors\\\": [{\\\"serieName\\\": \\\"barley\\\",\\\"color\\\": \\\"#06BF7F\\\"},{\\\"serieName\\\": \\\"chamomile\\\",\\\"color\\\": \\\"#FCC838\\\"},{\\\"serieName\\\": \\\"earl gray\\\",\\\"color\\\": \\\"#48D1E0\\\"},{\\\"serieName\\\": \\\"mint\\\",\\\"color\\\": \\\"#2E75F0\\\"}]}\"\n  display_mode: CHART_MODE\n"},{"info": {"name": "Stacked chart with line","filename": "Stacked chart with line.answer.tml","status": {"status_code": "OK"},"type": "answer","id": "d305bc51-688b-414f-badc-94579d48308c"},"edoc": "guid: d305bc51-688b-414f-badc-94579d48308c\nanswer:\n  name: Stacked chart with line\n  tables:\n  - id: CUSTOMER\n    name: CUSTOMER\n  - id: LINEORDER\n    name: LINEORDER\n  joins:\n  - id: Lineorder CustKey - Customer CustKey\n    name: Lineorder CustKey - Customer CustKey\n    source: LINEORDER\n    destination: CUSTOMER\n  table_paths:\n  - id: CUSTOMER_1\n    table: CUSTOMER\n    join_path:\n    - join:\n      - Lineorder CustKey - Customer CustKey\n  - id: LINEORDER_1\n    table: LINEORDER\n    join_path:\n    - {}\n  search_query: \"[LINEORDER_1::Quantity] [LINEORDER_1::Tax] [LINEORDER_1::Discount] [CUSTOMER_1::Market Segment] [CUSTOMER_1::Customer Region]\"\n  answer_columns:\n  - name: Customer Region\n  - name: Market Segment\n  - name: Total Quantity\n  - name: Total Tax\n  - name: Total Discount\n  table:\n    table_columns:\n    - column_id: Market Segment\n      headline_aggregation: COUNT_DISTINCT\n    - column_id: Customer Region\n      headline_aggregation: COUNT_DISTINCT\n    - column_id: Total Quantity\n      headline_aggregation: SUM\n    - column_id: Total Tax\n      headline_aggregation: SUM\n    - column_id: Total Discount\n      headline_aggregation: SUM\n    ordered_column_ids:\n    - Market Segment\n    - Customer Region\n    - Total Quantity\n    - Total Tax\n    - Total Discount\n    client_state: \"\"\n    client_state_v2: \"{\\\"tableVizPropVersion\\\": \\\"V1\\\",\\\"wrapTableHeader\\\": true}\"\n  chart:\n    type: LINE_STACKED_COLUMN\n    chart_columns:\n    - column_id: Market Segment\n    - column_id: Customer Region\n    - column_id: Total Quantity\n    - column_id: Total Tax\n    - column_id: Total Discount\n    axis_configs:\n    - x:\n      - Customer Region\n      y:\n      - Total Quantity\n      color:\n      - Market Segment\n    - x:\n      - Customer Region\n      y:\n      - Total Tax\n    client_state: \"\"\n    client_state_v2: \"{\\\"version\\\": \\\"V4\\\",\\\"chartProperties\\\": {\\\"axisExtremes\\\": {\\\"x\\\": [{\\\"min\\\": 0.0,\\\"max\\\": 4.0}],\\\"y\\\": [{\\\"min\\\": 0.0,\\\"max\\\": 28646.1},{\\\"min\\\": 3668.0,\\\"max\\\": 4478.6}]},\\\"gridLines\\\": {\\\"xGridlineEnabled\\\": true,\\\"yGridlineEnabled\\\": true},\\\"isZoomed\\\": false,\\\"responsiveLayoutPreference\\\": \\\"USER_PREFERRED_ON\\\",\\\"chartSpecific\\\": {}},\\\"columnProperties\\\": [{\\\"columnId\\\": \\\"Market Segment\\\",\\\"columnProperty\\\": {}},{\\\"columnId\\\": \\\"Customer Region\\\",\\\"columnProperty\\\": {}},{\\\"columnId\\\": \\\"Total Quantity\\\",\\\"columnProperty\\\": {}},{\\\"columnId\\\": \\\"Total Tax\\\",\\\"columnProperty\\\": {}},{\\\"columnId\\\": \\\"Total Discount\\\",\\\"columnProperty\\\": {}}],\\\"axisProperties\\\": [{\\\"id\\\": \\\"3ef813bd-2405-416c-8f1e-8ef8ef0d7588\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"Y\\\",\\\"linkedColumns\\\": [\\\"Total Quantity\\\"],\\\"isOpposite\\\": false}},{\\\"id\\\": \\\"4f7d774c-318d-4e3e-ad99-317ea2a61425\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"Y\\\",\\\"linkedColumns\\\": [\\\"Total Tax\\\"],\\\"isOpposite\\\": true}},{\\\"id\\\": \\\"267015f9-db3e-4b79-ba18-3a8b0e16f09b\\\",\\\"properties\\\": {\\\"axisType\\\": \\\"X\\\",\\\"linkedColumns\\\": [\\\"Customer Region\\\"]}}],\\\"seriesColors\\\": [{\\\"serieName\\\": \\\"total tax\\\",\\\"color\\\": \\\"#940713\\\"}],\\\"systemSeriesColors\\\": [{\\\"serieName\\\": \\\"total tax\\\",\\\"color\\\": \\\"#940713\\\"},{\\\"serieName\\\": \\\"automobile\\\",\\\"color\\\": \\\"#4074b3\\\"},{\\\"serieName\\\": \\\"building\\\",\\\"color\\\": \\\"#f5cb4e\\\"},{\\\"serieName\\\": \\\"furniture\\\",\\\"color\\\": \\\"#68b8e3\\\"},{\\\"serieName\\\": \\\"household\\\",\\\"color\\\": \\\"#f06c77\\\"},{\\\"serieName\\\": \\\"machinery\\\",\\\"color\\\": \\\"#e3394a\\\"}]}\"\n  display_mode: CHART_MODE\n"}]}
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
