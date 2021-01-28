---
title: [Pinboard Download API]
summary: "You can download a Pinboard, or specific visualizations from the Pinboard, as a PDF."
last_updated: 1/28/2021
sidebar: mydoc_sidebar
redirect_from:
- /app-integrate/reference/pinboarddata.html
permalink: /:collection/:path.html
---

This API enables you to programatically download Pinboards or certain visualizations from the Pinboards as a PDF.

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
         <td><code>pinboardId</code></td>
         <td>string</td>
         <td>ID (GUID) of the Pinboard to download</td>
         <td>Yes</td>
         <td>None</td>
      </tr>
     <tr>
         <td><code>layoutType</code></td>
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
      <td><code>truncateTables</code></td>
      <td>boolean</td>
      <td>If set to true, displays only the first page of the tables. Only applicable in Visualization layout.</td>
      <td>Yes, if <code>layoutType</code> is <code>VISUALIZATION</code></td>
      <td>false</td>
         </tr>
     <tr>
     <td><code>visualizationIds</code></td>
     <td>string</td>
     <td>Only select specific visualizations to include. Only applicable in Visualization layout.</td>
     <td>Yes, if <code>layoutType</code> is <code>VISUALIZATION</code></td>
     <td>none</td>
      </tr>
      <tr>
      <td><code>includeFooterLogo</code></td>
      <td>boolean</td>
      <td>Include customized wide logo if available in the footer</td>
      <td>Yes</td>
      <td>true</td>
      </tr>
      <tr>
      <td><code>footerText</code></td>
      <td>string</td>
      <td>Any footer text to be included in the footer of each page of the PDF</td>
      <td>No</td>
      <td>none</td>
      </tr>
      <tr>
      <td><code>includePageNumber</code></td>
      <td>boolean</td>
      <td>Whether to include a footer with the page number</td>
      <td>Yes</td>
      <td>true</td>
      </tr>
      <tr>
      <td><code>includeCoverPage</code></td>
      <td>boolean</td>
      <td>Whether to inclue a cover page displaying the Pinboard title</td>
      <td>Yes</td>
      <td>true</td>
      </tr>
      <tr>
      <td><code>includeFilterPage</code></td>
      <td>boolean</td>
      <td>Whether to include a second page with a list of all applied filters</td>
      <td>Yes</td>
      <td>true</td>
      </tr>     
   </tbody>
</table>

## Request Example

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/octet-stream' --header 'X-Requested-By: ThoughtSpot' -d 'id=543619d6-0015-4667-b257-eff547d13a12&layout_type=PINBOARD&orientation=LANDSCAPE&truncate_tables=true&include_logo=true&include_page_number=true&include_cover_page=true&include_filter_page=true' 'https://<instance>/callosum/v1/tspublic/v1/export/pinboard/pdf'
```

##### Request URL

```
https://<instance>/callosum/v1/tspublic/v1/export/pinboard/pdf
```

<!-- i think the above is incorrect  -->

## Response Example

```

```
