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
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Accept: text/plain' \
--header 'X-Requested-By: ThoughtSpot'
-d 'import_objects=%5B%7B\u0027guid\u0027%3A%20\u00276abd2843-afef-4c2f-bf2f-8fba065330e2\u0027%2C%20\u0027answer\u0027%3A%20%7B\u0027name\u0027%3A%20\u0027Total%20Cost%20by%20Type%20and%20Tea\u0027%2C%20\u0027tables\u0027%3A%20%5B%7B\u0027id\u0027%3A%20\u0027tea%20ws\u0027%2C%20\u0027name\u0027%3A%20\u0027tea%20ws\u0027%7D%5D%2C%20\u0027search_query\u0027%3A%20\u0027%5BCost%5D%20%5BTea%5D%20%5BType%5D\u0027%2C%20\u0027answer_columns\u0027%3A%20%5B%7B\u0027name\u0027%3A%20\u0027Total%20Cost\u0027%7D%2C%20%7B\u0027name\u0027%3A%20\u0027Tea\u0027%7D%2C%20%7B\u0027name\u0027%3A%20\u0027Type\u0027%7D%5D%2C%20\u0027table\u0027%3A%20%7B\u0027table_columns\u0027%3A%20%5B%7B\u0027column_id\u0027%3A%20\u0027Tea\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027COUNT_DISTINCT\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Type\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027COUNT_DISTINCT\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Cost\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027SUM\u0027%7D%5D%2C%20\u0027ordered_column_ids\u0027%3A%20%5B\u0027Tea\u0027%2C%20\u0027Type\u0027%2C%20\u0027Total%20Cost\u0027%5D%2C%20\u0027client_state\u0027%3A%20\u0027\u0027%2C%20\u0027client_state_v2\u0027%3A%20\u0027%7B%22tableVizPropVersion%22%3A%20%22V1%22%2C%22wrapTableHeader%22%3A%20true%7D\u0027%7D%2C%20\u0027chart\u0027%3A%20%7B\u0027type\u0027%3A%20\u0027COLUMN\u0027%2C%20\u0027chart_columns\u0027%3A%20%5B%7B\u0027column_id\u0027%3A%20\u0027Tea\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Type\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Cost\u0027%7D%5D%2C%20\u0027axis_configs\u0027%3A%20%5B%7B\u0027x\u0027%3A%20%5B\u0027Type\u0027%5D%2C%20\u0027y\u0027%3A%20%5B\u0027Total%20Cost\u0027%5D%2C%20\u0027color\u0027%3A%20%5B\u0027Tea\u0027%5D%7D%5D%2C%20\u0027client_state\u0027%3A%20\u0027\u0027%2C%20\u0027client_state_v2\u0027%3A%20\u0027%7B%22version%22%3A%20%22V4%22%2C%22chartProperties%22%3A%20%7B%22gridLines%22%3A%20%7B%7D%2C%22responsiveLayoutPreference%22%3A%20%22AUTO_ON%22%2C%22chartSpecific%22%3A%20%7B%7D%7D%2C%22columnProperties%22%3A%20%5B%7B%22columnId%22%3A%20%22Tea%22%2C%22columnProperty%22%3A%20%7B%7D%7D%2C%7B%22columnId%22%3A%20%22Total%20Cost%22%2C%22columnProperty%22%3A%20%7B%7D%7D%5D%2C%22axisProperties%22%3A%20%5B%7B%22id%22%3A%20%222d659cfe-187b-4c92-9b6e-007729f808b4%22%2C%22properties%22%3A%20%7B%22axisType%22%3A%20%22Y%22%2C%22linkedColumns%22%3A%20%5B%22Total%20Cost%22%5D%2C%22isOpposite%22%3A%20false%7D%7D%2C%7B%22id%22%3A%20%2269164478-6948-44fa-b8d3-84166a97d9ba%22%2C%22properties%22%3A%20%7B%22axisType%22%3A%20%22X%22%2C%22linkedColumns%22%3A%20%5B%22Type%22%5D%7D%7D%5D%2C%22systemSeriesColors%22%3A%20%5B%7B%22serieName%22%3A%20%22barley%22%2C%22color%22%3A%20%22%2306BF7F%22%7D%2C%7B%22serieName%22%3A%20%22chamomile%22%2C%22color%22%3A%20%22%23FCC838%22%7D%2C%7B%22serieName%22%3A%20%22earl%20gray%22%2C%22color%22%3A%20%22%2348D1E0%22%7D%2C%7B%22serieName%22%3A%20%22mint%22%2C%22color%22%3A%20%22%232E75F0%22%7D%5D%7D\u0027%7D%2C%20\u0027display_mode\u0027%3A%20\u0027CHART_MODE\u0027%7D%7D%2C%20%7B\u0027guid\u0027%3A%20\u0027d305bc51-688b-414f-badc-94579d48308c\u0027%2C%20\u0027answer\u0027%3A%20%7B\u0027name\u0027%3A%20\u0027Stacked%20chart%20with%20line\u0027%2C%20\u0027tables\u0027%3A%20%5B%7B\u0027id\u0027%3A%20\u0027CUSTOMER\u0027%2C%20\u0027name\u0027%3A%20\u0027CUSTOMER\u0027%7D%2C%20%7B\u0027id\u0027%3A%20\u0027LINEORDER\u0027%2C%20\u0027name\u0027%3A%20\u0027LINEORDER\u0027%7D%5D%2C%20\u0027joins\u0027%3A%20%5B%7B\u0027id\u0027%3A%20\u0027Lineorder%20CustKey%20-%20Customer%20CustKey\u0027%2C%20\u0027name\u0027%3A%20\u0027Lineorder%20CustKey%20-%20Customer%20CustKey\u0027%2C%20\u0027source\u0027%3A%20\u0027LINEORDER\u0027%2C%20\u0027destination\u0027%3A%20\u0027CUSTOMER\u0027%7D%5D%2C%20\u0027table_paths\u0027%3A%20%5B%7B\u0027id\u0027%3A%20\u0027CUSTOMER_1\u0027%2C%20\u0027table\u0027%3A%20\u0027CUSTOMER\u0027%2C%20\u0027join_path\u0027%3A%20%5B%7B\u0027join\u0027%3A%20%5B\u0027Lineorder%20CustKey%20-%20Customer%20CustKey\u0027%5D%7D%5D%7D%2C%20%7B\u0027id\u0027%3A%20\u0027LINEORDER_1\u0027%2C%20\u0027table\u0027%3A%20\u0027LINEORDER\u0027%2C%20\u0027join_path\u0027%3A%20%5B%7B%7D%5D%7D%5D%2C%20\u0027search_query\u0027%3A%20\u0027%5BLINEORDER_1%3A%3AQuantity%5D%20%5BLINEORDER_1%3A%3ATax%5D%20%5BLINEORDER_1%3A%3ADiscount%5D%20%5BCUSTOMER_1%3A%3AMarket%20Segment%5D%20%5BCUSTOMER_1%3A%3ACustomer%20Region%5D\u0027%2C%20\u0027answer_columns\u0027%3A%20%5B%7B\u0027name\u0027%3A%20\u0027Customer%20Region\u0027%7D%2C%20%7B\u0027name\u0027%3A%20\u0027Market%20Segment\u0027%7D%2C%20%7B\u0027name\u0027%3A%20\u0027Total%20Quantity\u0027%7D%2C%20%7B\u0027name\u0027%3A%20\u0027Total%20Tax\u0027%7D%2C%20%7B\u0027name\u0027%3A%20\u0027Total%20Discount\u0027%7D%5D%2C%20\u0027table\u0027%3A%20%7B\u0027table_columns\u0027%3A%20%5B%7B\u0027column_id\u0027%3A%20\u0027Market%20Segment\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027COUNT_DISTINCT\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Customer%20Region\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027COUNT_DISTINCT\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Quantity\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027SUM\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Tax\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027SUM\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Discount\u0027%2C%20\u0027headline_aggregation\u0027%3A%20\u0027SUM\u0027%7D%5D%2C%20\u0027ordered_column_ids\u0027%3A%20%5B\u0027Market%20Segment\u0027%2C%20\u0027Customer%20Region\u0027%2C%20\u0027Total%20Quantity\u0027%2C%20\u0027Total%20Tax\u0027%2C%20\u0027Total%20Discount\u0027%5D%2C%20\u0027client_state\u0027%3A%20\u0027\u0027%2C%20\u0027client_state_v2\u0027%3A%20\u0027%7B%22tableVizPropVersion%22%3A%20%22V1%22%2C%22wrapTableHeader%22%3A%20true%7D\u0027%7D%2C%20\u0027chart\u0027%3A%20%7B\u0027type\u0027%3A%20\u0027LINE_STACKED_COLUMN\u0027%2C%20\u0027chart_columns\u0027%3A%20%5B%7B\u0027column_id\u0027%3A%20\u0027Market%20Segment\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Customer%20Region\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Quantity\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Tax\u0027%7D%2C%20%7B\u0027column_id\u0027%3A%20\u0027Total%20Discount\u0027%7D%5D%2C%20\u0027axis_configs\u0027%3A%20%5B%7B\u0027x\u0027%3A%20%5B\u0027Customer%20Region\u0027%5D%2C%20\u0027y\u0027%3A%20%5B\u0027Total%20Quantity\u0027%5D%2C%20\u0027color\u0027%3A%20%5B\u0027Market%20Segment\u0027%5D%7D%2C%20%7B\u0027x\u0027%3A%20%5B\u0027Customer%20Region\u0027%5D%2C%20\u0027y\u0027%3A%20%5B\u0027Total%20Tax\u0027%5D%7D%5D%2C%20\u0027client_state\u0027%3A%20\u0027\u0027%2C%20\u0027client_state_v2\u0027%3A%20\u0027%7B%22version%22%3A%20%22V4%22%2C%22chartProperties%22%3A%20%7B%22axisExtremes%22%3A%20%7B%22x%22%3A%20%5B%7B%22min%22%3A%200.0%2C%22max%22%3A%204.0%7D%5D%2C%22y%22%3A%20%5B%7B%22min%22%3A%200.0%2C%22max%22%3A%2028646.1%7D%2C%7B%22min%22%3A%203668.0%2C%22max%22%3A%204478.6%7D%5D%7D%2C%22gridLines%22%3A%20%7B%22xGridlineEnabled%22%3A%20true%2C%22yGridlineEnabled%22%3A%20true%7D%2C%22isZoomed%22%3A%20false%2C%22responsiveLayoutPreference%22%3A%20%22USER_PREFERRED_ON%22%2C%22chartSpecific%22%3A%20%7B%7D%7D%2C%22columnProperties%22%3A%20%5B%7B%22columnId%22%3A%20%22Market%20Segment%22%2C%22columnProperty%22%3A%20%7B%7D%7D%2C%7B%22columnId%22%3A%20%22Customer%20Region%22%2C%22columnProperty%22%3A%20%7B%7D%7D%2C%7B%22columnId%22%3A%20%22Total%20Quantity%22%2C%22columnProperty%22%3A%20%7B%7D%7D%2C%7B%22columnId%22%3A%20%22Total%20Tax%22%2C%22columnProperty%22%3A%20%7B%7D%7D%2C%7B%22columnId%22%3A%20%22Total%20Discount%22%2C%22columnProperty%22%3A%20%7B%7D%7D%5D%2C%22axisProperties%22%3A%20%5B%7B%22id%22%3A%20%223ef813bd-2405-416c-8f1e-8ef8ef0d7588%22%2C%22properties%22%3A%20%7B%22axisType%22%3A%20%22Y%22%2C%22linkedColumns%22%3A%20%5B%22Total%20Quantity%22%5D%2C%22isOpposite%22%3A%20false%7D%7D%2C%7B%22id%22%3A%20%224f7d774c-318d-4e3e-ad99-317ea2a61425%22%2C%22properties%22%3A%20%7B%22axisType%22%3A%20%22Y%22%2C%22linkedColumns%22%3A%20%5B%22Total%20Tax%22%5D%2C%22isOpposite%22%3A%20true%7D%7D%2C%7B%22id%22%3A%20%22267015f9-db3e-4b79-ba18-3a8b0e16f09b%22%2C%22properties%22%3A%20%7B%22axisType%22%3A%20%22X%22%2C%22linkedColumns%22%3A%20%5B%22Customer%20Region%22%5D%7D%7D%5D%2C%22seriesColors%22%3A%20%5B%7B%22serieName%22%3A%20%22total%20tax%22%2C%22color%22%3A%20%22%23940713%22%7D%5D%2C%22systemSeriesColors%22%3A%20%5B%7B%22serieName%22%3A%20%22total%20tax%22%2C%22color%22%3A%20%22%23940713%22%7D%2C%7B%22serieName%22%3A%20%22automobile%22%2C%22color%22%3A%20%22%234074b3%22%7D%2C%7B%22serieName%22%3A%20%22building%22%2C%22color%22%3A%20%22%23f5cb4e%22%7D%2C%7B%22serieName%22%3A%20%22furniture%22%2C%22color%22%3A%20%22%2368b8e3%22%7D%2C%7B%22serieName%22%3A%20%22household%22%2C%22color%22%3A%20%22%23f06c77%22%7D%2C%7B%22serieName%22%3A%20%22machinery%22%2C%22color%22%3A%20%22%23e3394a%22%7D%5D%7D\u0027%7D%2C%20\u0027display_mode\u0027%3A%20\u0027CHART_MODE\u0027%7D%7D%5D&import_policy=PARTIAL&force_create=false' \
'http://<base-uri>/callosum/v1/tspublic/v1/metadata/tml/import'
```

{% include note.html content="You must send the <code>X-Requested-By</code> header in your request. Without it, the request fails." %}

##### Request URL

```
https://<base-uri>/callosum/v1/tspublic/v1/metadata/tml/import
```

### Response Example
```
{"object": [{"response": {"status": {"status_code": "ERROR","error_code": 14502,"error_message": "Tables do not exist.<br/>- <b>tea ws</b><br/><br/>"}}},{"response": {"status": {"status_code": "OK"},"header": {"id_guid": "d305bc51-688b-414f-badc-94579d48308c","name": "Stacked chart with line","description": "","author_guid": "59481331-ee53-42be-a548-bd87be6ddd4a","author_name": "tsadmin","author_display_name": "Administrator","created": 1519761534753,"modified": 1617040275404,"owner_guid": "d305bc51-688b-414f-badc-94579d48308c","metadata_type": "QUESTION_ANSWER_BOOK"}}}]}
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
'http://<base-uri>/callosum/v1/tspublic/v1/metadata/tml/export'
```

{% include note.html content="You must send the <code>X-Requested-By</code> header in your request. Without it, the request fails." %}

##### Request URL

```
https://<base-uri>/callosum/v1/tspublic/v1/metadata/tml/export
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
