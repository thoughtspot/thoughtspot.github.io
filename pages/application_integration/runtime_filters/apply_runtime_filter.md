---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Apply a Runtime Filter

Runtime filters allow you to apply filters to the data returned by the APIs or the visualization or pinboard you're embedding. The filters are specified in the called URL as parameters.

Before you can use runtime filter\(s\), you need to do these procedures:

1.  [Enable the JavaScript API \(JS API\)](../JS_API/enable_JS_API.html#) and authenticate to ThoughtSpot.
2.  Use the [Data API](../data_api/use_data_api_read.html#) or [Visualization Embedding](../embedding_viz/embed_a_viz.html#) to retrieve the answer or pinboard you want to use.

Now you are ready to add a runtime filter to your Data API call or Embedded object:

1.   Obtain the URL you are using to embed the visualization or call the REST API, and paste it into a text editor. 
2.   Append the runtime filter to the URL, using the [runtime filter operators](runtime_filter_operators.html#) to get the data you want. The format for the runtime filter is: 
    -   For Embedding a pinboard:

        ```
        http://<thoughtspot\_server>:<port>/
        ?**col1=<column\_name\>&op1=<operator\>&val1=<value\>**
        #/pinboard/<pinboard\_id>
        ```

    -   For Embedding a visualization:

        ```
        http://<thoughtspot\_server>:<port>/
        ?**col1=<column\_name\>&op1=<operator\>&val1=<value\>**
        #/pinboard/<pinboard\_id>/<visualization\_id>
        ```

    -   For the REST API with a pinboard:

        ```
        http://<thoughtspot\_server>:<port>
        /callosum/v1/tspublic/v1/pinboarddata
        ?id=<pinboard\_id>
        &**col1=<column\_name\>&op1=<operator\>&val1=<value\>**
        ```

    -   For the REST API with a visualization:

        ```
        http://<thoughtspot\_server>:<port>
        /callosum/v1/tspublic/v1/pinboarddata
        ?id=<pinboard\_id>&vizid=%5B<visualization\_id>%5D
        &**col1=<column\_name\>&op1=<operator\>&val1=<value\>**
        ```

3.   If you want to add additional filters on a particular column, you can specify multiple values by separating them with "&" as in the example: 

    ```
    val1=foo&val1=bar
    ```

    You can also use the IN operator for multiple values, as shown in this example:

    ```
    col1=<column\_name>&op1=IN&val1=<value>&val1=<value>
    ```

4.   Add additional filters by incrementing the number at the end of each parameter in the Runtime Filter for each filter you want to add, e.g. col2, op2, val2 and so on. This example passes multiple variables to a single column as well as multiple columns. It shows that data values are returned as epoch.

    ```
    col1=region&op1=IN&val1=midwest&val1=south&val1=northeast
    &col2=date&op2=BET&val2=<epoch\_start>&val2=<epoch\_end>
    ```


**Parent topic:** [About Runtime Filters](../../application_integration/runtime_filters/about_runtime_filters.html)

