---
title: [Pinboard Download API]
summary: "You can download a Pinboard, or specific visualizations from the Pinboard, as a PDF."
last_updated: 2/3/2021
sidebar: mydoc_sidebar
redirect_from:
permalink: /:collection/:path.html
---

This API enables you to programmatically download Pinboards or certain visualizations from the Pinboards as a PDF.

## Resource URL

<code class="api-method-post">post</code> /tspublic/v1/export/pinboard/pdf

## Request Parameters

<table>
   <colgroup>
      <col style="width:20%" />
      <col style="width:15%" />
      <col style="width:45%" />
      <col style="width:10%" />
      <col style="width:10%" />
   </colgroup>
   <thead>
      <tr>
         <th>Query Parameter</th>
         <th>Data Type</th>
         <th>Description</th>
         <th>Mandatory?</th>
         <th>Default</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>id</code></td>
         <td>string</td>
         <td>ID (GUID) of the Pinboard to download</td>
         <td>Yes, unless using the <code>transient_pinboard_content</code> parameter.</td>
         <td>None</td>
      </tr>
     <tr>
         <td><code>layout_type</code></td>
         <td>string [PINBOARD/VISUALIZATION]</td>
         <td>For <code>PINBOARD</code>, the PDF looks like the Pinboard does in the UI. For <code>VISUALIZATION</code>, the PDF has one visualization for each page.</td>
         <td>Yes</td>
         <td>PINBOARD</td>
      </tr>
      <tr>
         <td><code>orientation</code></td>
         <td>string [PORTRAIT/LANDSCAPE]</td>
         <td>Specifies portrait or landscape mode.</td>
         <td>Yes</td>
         <td>LANDSCAPE</td>
      </tr>
      <tr>
      <td><code>truncate_tables</code></td>
      <td>boolean</td>
      <td>If set to true, displays only the first page of the tables. Only applicable in Visualization layout.</td>
      <td>Yes, if <code>layoutType</code> is <code>VISUALIZATION</code></td>
      <td>false</td>
         </tr>
     <tr>
     <td><code>visualization_ids</code></td>
     <td>string</td>
     <td>Only select specific visualizations to include. Only applicable in Visualization layout.</td>
     <td>Yes, if <code>layoutType</code> is <code>VISUALIZATION</code></td>
     <td>none</td>
      </tr>
      <tr>
      <td><code>include_logo</code></td>
      <td>boolean</td>
      <td>Include customized wide logo if available in the footer</td>
      <td>Yes</td>
      <td>true</td>
      </tr>
      <tr>
      <td><code>footer_text</code></td>
      <td>string</td>
      <td>Any footer text to be included in the footer of each page of the PDF</td>
      <td>No</td>
      <td>none</td>
      </tr>
      <tr>
      <td><code>include_page_number</code></td>
      <td>boolean</td>
      <td>Whether to include a footer with the page number</td>
      <td>Yes</td>
      <td>true</td>
      </tr>
      <tr>
      <td><code>include_cover_page</code></td>
      <td>boolean</td>
      <td>Whether to inclue a cover page displaying the Pinboard title</td>
      <td>Yes</td>
      <td>true</td>
      </tr>
      <tr>
      <td><code>include_filter_page</code></td>
      <td>boolean</td>
      <td>Whether to include a second page with a list of all applied filters</td>
      <td>Yes</td>
      <td>true</td>
      </tr>
      <tr>
      <td><code>transient_pinboard_content</code></td>
      <td>string</td>
      <td>If the Pinboard has unsaved changes, the 3 parameters in this string, <code>content</code>, <code>effectiveQuestionMap</code>, and <code>logicalTableidtoanswermap</code>, are clubbed together.</td>
      <td>Yes, unless using the <code>id</code> parameter.</td>
      <td>none</td>
      </tr>       
   </tbody>
</table>

## Request Example

##### cURL

```
curl -X POST \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Accept: application/octet-stream' \
  --header 'X-Requested-By: ThoughtSpot' \
  -d 'id=543619d6-0015-4667-b257-eff547d13a12&layout_type=PINBOARD&orientation=LANDSCAPE&truncate_tables=true&include_logo=true&include_page_number=true&include_cover_page=true&include_filter_page=true' \
  'https://<instance>/callosum/v1/tspublic/v1/export/pinboard/pdf'
```

{% include note.html content="You must send the <code>X-Requested-By</code> header in your request. Without it, the request fails." %}

##### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/export/pinboard/pdf
```

## Response Example
The response appears in the form of a raw pdf file.
