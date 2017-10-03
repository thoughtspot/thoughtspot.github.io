---
title: [Show underlying data]
tags:
keywords: tbd
last_updated: tbd
summary: "Viewing the underlying data of your answer gives you an un-aggregated view of the underlying data."
sidebar: mydoc_sidebar
---
You can see the most granular details of a given result set, i.e. it shows the un-aggregated view. This feature lets you understand what an answer consists of. For example, if you search for "customer region revenue", the answer shows the aggregate revenue value for each customer region. You can then click on any row and then on **Show underlying data**, to see each value that "revenue" constitutes of, for any given region.

Only the first 1,000 rows are shown when viewing the underlying data. You can even download the results shown when you choose **Show underlying data** from a chart. The download file limit is 100,000 rows.

{% include note.html content="Viewing underlying data does not work for answers that are derived from chasm trap searches." %}

To show underlying data:

1. Right click on the visualization or table cell of interest
2. Select **Show underlying data**.

   ![]({{ site.baseurl }}/images/show_underlying_data.png "Show underlying data option")

    A new window opens that displays a summary and the underlying data.

3. Optionally, choose to **+ Add Column** to the date_to_xmlschema and click **Confirm Changes**.

   ![]({{ site.baseurl }}/images/add_columns_underlying_data.png "Add columns to underlying data")

5. Click **Download** to download a CSV file of the data.

   ![]({{ site.baseurl }}/images/showing_underlying_data.png "Download underlying data")
