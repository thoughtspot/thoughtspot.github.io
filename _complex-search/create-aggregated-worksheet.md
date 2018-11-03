---
title: [Save a search as a view]
keywords: view
last_updated: 11/1/2018
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This procedure walks you through creating a view from a search. To create a view from a search:

1. Start a new search, or edit an existing visualization from a pinboard.

    Any filters or aggregations created during this search will be reflected in the view.

2. If you want to use a different aggregation than the default one for any column, set it from the column header.

     ![]({{ site.baseurl }}/images/aggregation_change.png "Select an aggregation")

3. Click the three dot icon and **Save as view**.

     ![]({{ site.baseurl }}/images/save_as_view.png "Save as a View")

4. Give the view a name and save it.

     ![]({{ site.baseurl }}/images/save_view_dialog.png "Name the View")

5. [Link]({{ site.baseurl }}/admin/data_modeling/create-new-relationship.html#) your view to any other data sources you'll need or [define joins]({{ site.baseurl }}/admin/loading/constraints.html#}}).

At this point the view has been saved, but you may also want to [materialize the view]({{ site.baseurl }}/admin/loading/materialized_views.html), to improve its performance when searching.
