---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Use the REST API to get data

This procedure shows how to use the REST API to get data out of ThoughtSpot, so you can use it in a Web page, portal, or application. The data will be returned as JSON \(JavaScript Object Notation\).

Before you can use the REST API, you need to:

1.  [Enable the JavaScript API \(JS API\)](../JS_API/enable_JS_API.html#) and authenticate to ThoughtSpot.

Use this procedure to construct the URL you will use to call the REST API:

1.   [Log in to ThoughtSpot from a browser](../introduction/accessing.html#). 
2.   Navigate to the pinboard from which you want to get data. If it doesn't exist yet, create it now. 
3.   Find the ID number of the object you want to get the data from. If the object is: 
    -   A pinboard, click **Actions** and select **Copy Link**.

        ![](../../images/copy_pinboard_link.png "The Actions menu")

    -   A visualization, click the **Copy Link** icon in the upper right corner of the table or chart.

         ![](../../images/copy_link.png "Copy link")

4.   Copy the ID number from the link shown. Paste it somewhere so that you can use it later to construct the URL to use when calling the REST API. If the object is:
    -   A pinboard, copy the identifier that appears after "viz/". Omit the trailing "/".

        ![](../../images/copy_link_pinboard.png "The pinboard ID")

    -   A visualization \(table or chart\), copy the identifier that appears after "viz/". This is the pinboard ID.

        ![](../../images/copy_link_viz_pinboard_part.png "The pinboard ID")

        Then skip the "/" and copy what follows it. This is the visualization ID.

        ![](../../images/copy_link_viz_viz_part.png "The visualization ID")

5.   Construct the URL as follows: For a pinboard, the URL takes the form:

    ```
    https://<thoughtspot\_server>/callosum/v1/tspublic/v1/pinboarddata?id=<pinboard\_id>
    ```

    For a visualization, the URL takes the form:

    ```
    https://<thoughtspot\_server>/callosum/v1/tspublic/v1/pinboarddata?id=<pinboard\_id>&vizid=%5B<visualization\_id>%5D 
    ```

6.   If you want to apply any filters to the data that will be returned, apply [Runtime Filters](../runtime_filters/about_runtime_filters.html#). 
7.   Now your URL is complete, and you can use it to access the data directly via the HTTP POST method. 
8.   The REST API returns the data formatted as JSON. Retrieve the data from the JSON and display it in your Web page, Web portal, or application. 

**Parent topic:** [About the REST API](../../application_integration/data_api/about_data_api.html)

