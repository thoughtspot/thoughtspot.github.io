---
title: [Make a REST API Call]
summary: Learn how to make a REST API call.
last_updated: 4/3/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To call a REST API, you can send a `POST` or `GET` request to the endpoint URL and pass the parameters of the objects that you want to view or modify.

## Pinboard or visualization objects

For a pinboard, you can append the ID of your pinboard as a parameter, as shown in the following example:

```
  https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/pinboarddata?id=7752fa9e-db22-415e-bf34-e082c4bc41c3
```

To retrieve data from a specific visualization within a pinboard, append the ID number of the visualization using the `vizid` parameter:

```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/pinboarddata?id=7752fa9e-db22-415e-bf34-e082c4bc41c3&vizid=%5B1e99d70f-c1dc-4a52-9980-cfd4d14ba6d6%5D
```

{% include note.html content="Make sure you add brackets around the `vizid` parameter. The URL encoding for the opening bracket is `%5B` and closing bracket is `%5D`." %}

##  Data format of objects

The returned JSON data includes one object for every visualization on the pinboard.
The objects are named according to the corresponding `vizid`.


 ![]({{ site.baseurl }}/images/parsed_json_data.png "Parsed JSON data")

 If you make a call to obtain data for a specific visualization on a pinboard, it will return just one object.
The following example shows the JSON object format for the data returned from the ThoughtSpot application:

```
{
vizId1 : {
         name: “Viz name”,
         :[[2-d array of data values], [], [] …..[]],
         columnNames:[col1, col2, …. ],
         samplingRatio: n
         },
vizId2 : {
         .
         }
}
```

Each object contains four components:

1.  An array of column headers. The `columnNames` array contains a list of all column headers.
2.  An array of data. The `data` array contains a list of other arrays.
    Each sub-array represents a new row of data.
    The following figure shows `columnNames` and data arrays.
     ![]({{ site.baseurl }}/images/columnnames_and_data_arrays.png "columnNames and data arrays")
3.  Name of the visualization.
4.  A sampling ratio.
    The sampling ratio tells you the percentage of total data returned.
    A sampling ratio of `1` indicates that all data in the visualization object was returned in the API call.


The REST API supports filtering the data returned through parameters that you pass within the URL. These are called [Runtime Filters]({{ site.baseurl }}admin/ts-cloud/about-runtime-filters.html).

## Example

The following example shows a JavaScript function that calls the REST API, gets the results back, and retrieves a single value from the JSON results:

``` javascript
/**
 * Generates headline by making a data API call.
 *
 * @param void
 * @return void
 */
function generateHeadline(filters) {
    var pinboardId = "0aa0839f-5d36-419d-b0db-10102131dc37";
    var vizId = "67db30e8-06b0-4159-a748-680811d77ceb";
    var myURL = "";

    if (filters === void 0) {
        myURL = "http://192.168.2.55:443/callosum/v1/tspublic/v1/" +
                "pinboarddata?id=" + pinboardId + "&" +
                "vizid=%5B" + vizId + "%5D";
    } else {
        var query = getQueryString(filters);
        myURL = "http://192.168.2.55:443/callosum/v1/tspublic/v1/" +
                "pinboarddata?id=" + pinboardId + "&" + +
                "vizid=%5B" + vizId + "%5D&" + query;
    }

    var jsonData = null;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", myURL, true);
    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {
        var headline = document.getElementById("embeded-headline");
        if (xhr.readyState == 4 && xhr.status == 200) {
            jsonData = JSON.parse(xhr.responseText);
            headline.innerHTML = jsonData[vizId].data[0][0];
        } else {
            headline.innerHTML = "Error in getting data !!!";
        }
    };
    xhr.send();
}

```
