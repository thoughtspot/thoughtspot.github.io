---
title: [Search Data API]
last_updated: 4/1/2021
summary: "To use the data retrieved from a search query programmatically, you can first query this data using the ThoughtSpot Search Data API."
redirect_from:
- /app-integrate/reference/search-data-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To use the data retrieved from a search query, you can use the ThoughtSpot search data API.

When issuing a query through the ThoughtSpot UI, users make selections to disambiguate a query.
It is often difficult to programmatically use the result set of a query that runs in the ThoughtSpot UI search bar. Because the selection is not possible with an API approach, the API query language is modified to include query disambiguation.

{: id="components"}
## Components of a search query

In ThoughtSpot Query Language, the components of a query are classified into various types of tokens: [Column](#column), [Operator](#operator), [Value](#value), [Date Bucket](#date-Bucket), [Keyword](#keyword), and [Calendar](#calendar):

<dl>
<dlentry id="column">
<dt>Column</dt>
<dd>
<p>Columns must be enclosed in square brackets, <code>[ ]</code>.</p>
<p>For example, in the query revenue by ship mode, both revenue and ship mode are columns. A valid query for the API is:</p>
<code>[revenue] by [ship mode]</code>
</dd></dlentry>


<dlentry id="operator">
<dt>Operator</dt>
<dd> <p>
ThoughtSpot supports various operators such as =, !=, &gt;, &gt;=, ⇐, &lt;, contains, not contains, and so on. Use these operators in the API query in the same manner as in the UI.
</p>
<p>For example, specify revenue over 1000, and limit ship mode to 'air': </p>

<code>[revenue] > 1000 [ship mode] = ‘air’ </code>
</dd></dlentry>
<!-- -->

<dlentry id="value">
<dt>Value</dt>
<dd>  
<p>String (text) and date values must be enclosed within quotes, ’ ’. Do not use quotes for numeric values, except for dates.</p>

<p>When using multiple values, separate them by a comma.</p>

<p>For example, when a ThoughtSpot UI query is revenue top 2 ship mode, the equivalent API query is:</p>

<code>[revenue] top 2 [ship mode]</code>

For example, when a ThoughtSpot UI query is revenue ship mode = air, the equivalent API query is:

<code>[revenue] [ship mode] = ‘air’</code>
</dd></dlentry>

<!-- -->

<dlentry id="date-bucket">
  <dt>Date Bucket</dt>
<dd>
<p>In the ThoughtSpot UI, when there are several date columns, users can bind date bucket tokens to a specific column. When using the API, this binding between the date column and the date bucket must be made explicit. Use a period to separate the column with which the date bucket is bound, and the date bucket token.</p>

<p>Single word date buckets can be expressed as is. Multi-word date buckets must be enclosed within quotes.</p>

<p>For example, when a ThoughtSpot UI query is revenue commit date monthly, and if monthly is bound to commit date, the equivalent API query is:</p>

<code>[revenue] [commit date].monthly</code>

When a ThoughtSpot UI query is revenue day of week = 5, and if day of week is bound to commit date, the equivalent API query is as follows:

<code>[revenue] [commit date].'day of week' = 5 </code>
</dd></dlentry>

<dlentry id="keyword">
  <dt>Keyword</dt>
  <dd>  
<p>Use keywords in the API query in the same manner as in the UI.</p>

<p>For example, when a ThoughtSpot UI query uses keywords growth of and sort by, the equivalent API query is as follows:</p>

<code>growth of [revenue] by [commit date]</code>
</dd></dlentry>

<dlentry id="calendar">
  <dt>Calendar</dt>
  <dd>
<p>You can specify a custom calendar in the query. Use the calendar.calendar\_name format explicitly. </p>

<p>When the calendar name contains multiple words, enclose these words in single quotes.</p>

<p>For example, when a ThoughtSpot UI query is revenue by commit date fiscal, where the name of the calendar is fiscal, the equivalent API query is as follows:
</p>
  <code> [revenue] by [commit date] calendar.fiscal</code>

For example, when a ThoughtSpot UI query is revenue by commit date my calendar, where the name of the calendar is my calendar, the equivalent API query is:

<code> [revenue] by [commit date] calendar.'my calendar' </code>
</dd></dlentry></dl>

## Limitations of search data API

-   To avoid join path ambiguities, a query can use only a single data source.
-   Search execution of query strings is not case sensitive.
-   All column names in the data source must have unique names and must pass the *case insensitivity* test.

    For example, Columns `[Revenue]` and `[revenue]` are not unique.

-   Column names cannot contain square brackets, `[` or `]`.
-   Values must be enclosed in quotes, `‘’`, but they cannot contain quotes.
-   The API does not support **in-query formula** definitions. To use a formula, create it on the worksheet or a table using the ThoughtSpot UI, and then use the named formula inside the API query.
-   Users must be authenticated and have read access to the data source.  
-   Your browser locale must be `en-US`. Swagger does not accept other variations of English, such as British English, or other languages. Your search keywords must also be in American English. Your column names and other data values do not need to be in American English. You can change your preferred locale to `en-US` in your browser settings.

## How to use the search query API

To test the search query API, follow these steps:

### Determine the GUID of the data source

1.  In a web browser tab, navigate to your ThoughtSpot application instance and log in as an admin user:

2.  From the top navigation menu, click **Data**.

    Alternatively, navigate to the following address:

    ```
    https://<ThoughtSpot-host>/#/data/tables/
```
3.  Select a data source that you plan to query: a worksheet, a table, or a view.

4.  In the address bar of the web browser, note the GUID of the selected data source; it is the last string of the address. For example, in the following address string, the GUID is `9d93a6b8-ca3a-4146-a1a1-e908b71b963f`:

        https://<ThoughtSpot-host>/#/data/tables/9d93a6b8-ca3a-4146-a1a1-e908b71b963f

5.  Copy and save the GUID.

### Run the search query

1.  In another browser, navigate to the following address:

    ```
    https://<ThoughtSpot-host>/external/swagger/#!/tspublic%2Fv1/searchData
    ```

2.  Click `POST /tspublic/v1/searchdata`

3.  In the **Parameters** interface, enter the values for the following:

    -   `query_string` is the actual search query. See [Components of a search query](#components).

    -   `data_source_guid` is the [identifier you obtained earlier](#get-guid).

        You can leave other parameters at their default value.

4.  Click **Try it out**, and note the results.

    You can also verify if the query returns the same data when you run it in the ThoughtSpot UI search bar (with slightly different syntax).

## Search data API reference

### Resource URL

  POST /tspublic/v1/searchdata

### Request parameters

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
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
<td style="text-align: left;"><p><code>query_string</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The data search query.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>data_source_guid</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The GUID of the data source, either a worksheet, a view, or a table.</p>
<p>Example: 4fdf9d2c-6f34-4e3b-9fa6-bd0ca69676e1</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>batchsize</code></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>The batch size for loading search objects.</p>
<p>The system default is -1.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>pagenumber</code></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>Alternate way to set offset for the starting point of the search results returned from the query. The default value is <code>-1</code>.</p>
<p><code>indexingOffset = (pageNumber - 1) * batchSize</code></p>
<p>The system default is -1.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>offset</code></p></td>
<td style="text-align: left;"><p>integer</p></td>
<td style="text-align: left;"><p>Attribute to offset the starting point of the search results returned from the query. Specify a 1-based offset. The default value is <code>-1</code>.</p>
<p>The system default is -1.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>formattype</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The format of the data.</p>
<p>Valid values are <code>COMPACT</code> or <code>FULL</code> JSON. The default value is <code>COMPACT</code>.</p></td>
</tr>
</tbody>
</table>

### Example requests

##### cURL (COMPACT)

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/searchdata?query_string=%5Bsales%5D%20%5Bstore%20region%5D&data_source_guid=06517bd1-84c0-4bc6-bd09-f57af52e8316&batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT'
```
##### Request URL (COMPACT)

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/searchdata?query_string=%5Bsales%5D%20%5Bstore%20region%5D&data_source_guid=06517bd1-84c0-4bc6-bd09-f57af52e8316&batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT
```
##### cURL (FULL)

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/searchdata?query_string=%5Bsales%5D%20%5Bstore%20region%5D&data_source_guid=06517bd1-84c0-4bc6-bd09-f57af52e8316&batchsize=-1&pagenumber=-1&offset=-1&formattype=FULL’
```
##### Request URL (FULL)

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/searchdata?query_string=%5Bsales%5D%20%5Bstore%20region%5D&data_source_guid=06517bd1-84c0-4bc6-bd09-f57af52e8316&batchsize=-1&pagenumber=-1&offset=-1&formattype=FULL
```

### Example response

```
{
  "columnNames": [
    "Store Region",
    "Total Sales"
  ],
  "data": [
    [
      "east",
      18934491.05134509
    ],
    [
      "midwest",
      29157090.327609923
    ],
    [
      "south",
      25484693.074720126
    ],
    [
      "southwest",
      34241076.52103955
    ],
    [
      "west",
      30848491.458509445
    ]
  ],
  "samplingRatio": 1,
  "totalRowCount": 5,
  "rowCount": 5,
  "pageSize": 100000,
  "offset": 0
}
```

### Response codes

| HTTP Code | Description                        |
|-----------|------------------------------------|
| **200**   | Successful retrieval of data from the data source |
| **400**   | Invalid query/data source          |
