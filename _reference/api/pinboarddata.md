---
title: [Pinboard Data API]
summary: "Use the Pinboard Data API to retrieve data from a pinboard or  ThoughtSpot visualization."
last_updated: 3/30/2021
sidebar: mydoc_sidebar
redirect_from:
- /app-integrate/reference/pinboarddata.html
permalink: /:collection/:path.html
---
To retrieve data related to a pinboard or visualization from the ThoughtSpot system, you can use the pinboard data API.

Using this API, you can fetch the following information:

-   All the visualization objects on a pinboard.
-   A specific or a group of visualizations on a pinboard.

## Request URL
```
POST /tspublic/v1/pinboarddata
```
## Request Parameters

| Query Parameter | Data Type | Description                                                                                                                          |
|-----------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------|
| `id`            | string    | The pinboard id in the system.                                                                                                       |
| `vizid`         | string    | (Optional) The visualization id(s) on a pinboard. Use this parameter to fetch a specific visualization on a pinboard. The syntax is: `4fdf9d2c-6f34-4e3b-9fa6-bd0ca69676e1`,"......"                                                                                       |
| `batchsize`     | integer   | The batch size for loading pinboard objects. The system default is -1.                                                               |
| `pagenumber`    | integer   | The system default is -1.                                                                                                            |
| `offset`        | integer   | The system default is -1. Alternately, set the offset using the following code: `1-based indexingOffset = (pageNumber - 1)` \* batchSize                                                                              |
| `formattype`    | string    | Valid values are `COMPACT` or `FULL JSON`. The system default is `COMPACT`.                                                          |

## Example request

##### cURL
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/pinboarddata?id=f4533461-caa5-4efa-a189-13815ab86770&batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT'
```

##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/pinboarddata?id=f4533461-caa5-4efa-a189-13815ab86770&batchsize=-1&pagenumber=-1&offset=-1&formattype=COMPACT
```
## Example response
```
    {
      "4fdf9d2c-6f34-4e3b-9fa6-bd0ca69676e1": {
        "name": "Sample Name",
        "columnNames": [
          "Opportunity Stage",
          "Opportunity Owner Name",
          "Total Amount"
        ],
        "data": [
          [
            "s3 alignment with eb",
            "jeff cameron",
            1102272
          ],
          [
            "s4 validation",
            "brian mcquillan",
            59150
          ]
        ],
        "samplingRatio": 1,
        "totalRowCount": 14,
        "rowCount": 14,
        "pageSize": 10,
        "offset": 0
      }
    }
```
### Response codes

| HTTP Code | Description                                  |
|-----------|----------------------------------------------|
| **200**   | Successful retrieval of pinboard or visualization data |
| **400**   | invalid pinboard ID                          |
