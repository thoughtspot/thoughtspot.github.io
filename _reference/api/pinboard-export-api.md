---
title: [Pinboard Export API]
summary: "You can export a pinboard, or the visualizations from a pinboard as a PDF."
last_updated: 3/30/2021
sidebar: mydoc_sidebar
redirect_from:
permalink: /:collection/:path.html
---
This API enables you to programmatically export a pinboard or specific visualizations from a pinboard as a PDF file.

## Resource URL
```
POST /tspublic/v1/export/pinboard/pdf
```
## Request parameters

| Form Parameter               | Data Type | Description                                                                                                                                                                                                  | Default     |
|------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `id`                         | string    | ID (GUID) of the pinboard to download                                                                                                                                                                        | None        |
| `layout_type`                | string    | Layout type for the PDF. Valid values are `PINBOARD` and `VISUALIZATION`. For `PINBOARD`, the PDF uses the same layout as the pinboard UI. For `VISUALIZATION`, the PDF has one visualization for each page. | `PINBOARD`  |
| `orientation`                | string    | Page orientation for the PDF. Valid values are `PORTRAIT` and `LANDSCAPE`.                                                                                                                                   | `LANDSCAPE` |
| `truncate_tables`            | boolean   | When set to true, only the first page of the tables is displayed in the PDF. This setting is applicable only if the `layout_type` parameters is set to `VISUALIZATION`                                       | false       |
| `visualization_ids`          | string    | IDs of the visualizations to include in the PDF. This setting is applicable only if the `layout_type` parameter is set to `VISUALIZATION`.                                                                   | none        |
| `include_logo`               | boolean   | Include customized wide logo if available in the footer                                                                                                                                                      | true        |
| `footer_text` *Optional*     | string    | Footer text to include in the footer of each page of the PDF.                                                                                                                                                | none        |
| `include_page_number`        | boolean   | When set to true, the page number is included in the footer of each page.                                                                                                                                    | true        |
| `include_cover_page`         | boolean   | When set to true, a cover page with the pinboard title is added in the PDF.                                                                                                                                  | true        |
| `include_filter_page`        | boolean   | When set to true, a second page with a list of all applied filters is added in the PDF                                                                                                                       | true        |
| `transient_pinboard_content` | string    | If the pinboard has unsaved changes, pass this parameter.                                                                                                                                                    | none        |

## Example request

##### cURL

```
curl --location --request POST 'http://<instance>/callosum/v1/tspublic/v1/export/pinboard/pdf' \
--header 'Accept: application/octet-stream' \
--header 'X-Requested-By: ThoughtSpot' \
--header 'Cookie: JSESSIONID=71cc2672-7ead-4480-be7d-b6ad52023e98; userGUID=59481331-ee53-42be-a548-bd87be6ddd4a; Callosum-Download-Initiated=false' \
--form 'id="061457a2-27bc-43a9-9754-0cd873691bf0"' \
--form 'layout_type="PINBOARD"' \
--form 'orientation="LANDSCAPE"' \
--form 'truncate_tables="false"' \
--form 'include_logo="true"' \
--form 'include_page_number="true"' \
--form 'include_filter_page="true"' \
--form 'include_cover_page="true"'
```

{% include note.html content="You must send the `X-Requested-By` header in your request. Without it, the request fails." %}

##### Request URL

```
https://<ThoughtSpot-host>/tspublic/v1/export/pinboard/pdf
```

## Example response

The response appears in the form of a raw PDF file. The response type is `application/octet-stream`.

## Runtime filters

You can modify the API’s output by passing runtime filters as parameters in the resource URL.

For example:
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/export/pinboard/pdf?col1=COL_NAME1&op1=OP_TYPE1&val1=VALUE1&coln=COL_NAMEn&opn=OP_TYPEn&valn=VALUEn
```
You can add more than one filter by specifying `col2`, `op2`, `val2`, and so on.

| Parameter      | Definition                        |
|----------------|-----------------------------------|
| col&lt;*n*&gt; | Name of the column to filter on.  |
| op&lt;*n*&gt;  | {IN, EQ, NE, LT, LE…​}            |
| val&lt;*n*&gt; | Value of the column to filter on. |

{% include note.html content="These parameters are case-insensitive. <code>EQ</code>, <code>eq</code>, and <code>eQ</code>, for example, have the same result." %}

### Runtime filter operators

| Operator      | Description                           | Number of Values |
|---------------|---------------------------------------|------------------|
| `EQ`          | equals                                | 1                |
| `NE`          | does not equal                        | 1                |
| `LT`          | less than                             | 1                |
| `LE`          | less than or equal to                 | 1                |
| `GT`          | greater than                          | 1                |
| `GE`          | greater than or equal to              | 1                |
| `CONTAINS`    | contains                              | 1                |
| `BEGINS_WITH` | begins with                           | 1                |
| `ENDS_WITH`   | ends with                             | 1                |
| `BW_INC_MAX`  | between inclusive of the higher value | 2                |
| `BW_INC_MIN`  | between inclusive of the lower value  | 2                |
| `BW_INC`      | between inclusive                     | 2                |
| `BW`          | between non-inclusive                 | 2                |
| `IN`          | is included in this list of values    | multiple         |

## Embedded Pinboard with unsaved changes

If your ThoughtSpot environment is embedded, and you want to download Pinboards with unsaved changes as PDFs, pass the `transient_pinboard_content` parameter in the browser fetch request, using the `getExportRequestForCurrentPinboard` method.

```
function getExportRequestForCurrentPinboard(frame: HTMLIframeElement): Promise<string>;
```

The promise returned resolves to a string that contains the transient pinboard content, which is encoded as JSON and is sent to the `/callosum/v1/tspublic/v1/export/pinboard/pdf` endpoint with the `transient_pinboard_content` key. This content resembles the current pinboard as is, including any changes, saved or not.

### Sample browser fetch request

```
<iframe src="http://ts_host:port/" id="ts-embed"></iframe>
<script src="/path/to/ts-api.js"></script>
<script>
const tsFrame = document.getElementById("ts-embed");
async function downloadPDF() {
  const transientPinboardContent = await thoughtspot.getExportRequestForCurrentPinboard(tsFrame);
  const pdfResponse = await fetch("http://ts_host:port/callosum/v1/tspublic/v1/export/pinboard/pdf", {
    method: "POST",
    body: createFormDataObjectWith({
      "layout_type": "PINBOARD",
      "transient_pinboard_content": transientPinboardContent,
    }),
  });
  // Do something with pdfResponse.blob()
}
</script>
```

### Response format

The response appears in the form of a raw PDF file. The response type is `application/octet-stream`.

## Response codes

You may receive the following status codes in your output. These HTTP status codes have the following meanings:

| HTTP code | Description                       |
|---------------|-----------------------------------|
| 200           | Streaming output for pinboard pdf |
| 400           | Invalid parameter values          |
| 403           | No read access for pinboard       |
| 404           | Object not found                  |
