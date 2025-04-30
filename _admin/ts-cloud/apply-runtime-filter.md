---
title: [Apply a Runtime Filter]
summary: "Learn how to apply a runtime filter."
last_updated: 11/05/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

Runtime filters allow you to apply filters to the data returned by the APIs or the visualization or Liveboard you're embedding. Before you apply a filter, make sure you [understand their limitations]({{ site.baseurl }}/admin/ts-cloud/about-runtime-filters.html#limitations-of-runtime-filters).

The filters are specified in the request URL as parameters. Before you can use runtime filter(s), you need to do these procedures:

1.  Embed a [visualization](https://developers.thoughtspot.com/docs/?pageid=embed-a-viz){:target="_blank"} and [Liveboard](https://developers.thoughtspot.com/docs/?pageid=embed-pinboard){:target="_blank"} using the Visual Embed SDK and authenticate to ThoughtSpot.
2.  Use the [Data API]({{ site.baseurl }}/admin/ts-cloud/about-rest-apis.html) to [retrieve a search answer or Liveboard](https://developers.thoughtspot.com/docs/?pageid=embed-data-restapi){: target="_blank"}.

To add a runtime filter to your API call or the  embedded object:

1. Construct the URL for embedding the visualization or making a REST API call.
2. Paste the URL into a text editor.
3. Append the runtime filter to the URL, using the [runtime filter operators](runtime-filter-operators.html#).
   The format for the runtime filter is:
    -   For Embedding a Liveboard:

        ```
        http://<thoughtspot_server>:<port>/
        ?col1=<column_name\>&op1=<operator\>&val1=<value\>
        #/pinboard/<pinboard_id>
        ```

    -   For Embedding a visualization:

        ```
        http://<thoughtspot_server>:<port>/
        ?col1=<column_name\>&op1=<operator\>&val1=<value\>
        #/pinboard/<pinboard_id>/<visualization_id>
        ```

    -   For the REST API with a Liveboard:

        ```
        http://<thoughtspot_server>:<port>
        /callosum/v1/tspublic/v1/pinboarddata
        ?id=<pinboard_id>
        &col1=<column_name\>&op1=<operator\>&val1=<value\>
        ```

    -   For the REST API with a visualization:

        ```
        http://<thoughtspot_server>:<port>
        /callosum/v1/tspublic/v1/pinboarddata
        ?id=<pinboard_id>&vizid=%5B<visualization_id>%5D
        &col1=<column_name\>&op1=<operator\>&val1=<value\>
        ```

4. To add additional filters on a particular column, you can specify multiple values by separating them with `&` (ampersand) as in the example:

    ```
    val1=foo&val1=bar
    ```

    You can also use the `IN` operator for multiple values, as shown in this example:

    ```
    col1=<column_name>&op1=IN&val1=<value>&val1=<value>
    ```

5. Add additional filters by incrementing the number at the end of each parameter in the **Runtime Filter** for each filter you want to add, for example, `col2`, `op2`, `val2` and so on.

  This example passes multiple variables to a single column as well as multiple columns. It shows that data values are returned as epoch.

  ```
  col1=region&op1=IN&val1=midwest&val1=south&val1=northeast
  &col2=date&op2=BET&val2=<epoch_start>&val2=<epoch_end>
  ```
