---
title: [Embed a visualization]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Embedding allows you to include a visualization (table or chart) or pinboard
from ThoughtSpot in your own static Web page, Web portal, or application. Before
you can embed a visualization, you need to [enable the JavaScript API (JS
API)]({{ site.baseurl }}/app-integrate/JSAPI/enable-JS-API.html#) and
authenticate to ThoughtSpot.

Use this procedure to construct the URL you will use to embed a visualization:

## Get the link for a pinboard or visualization

This procedure assumes the pinboard or visualization you want already exists. If
it doesn't, create it now before continuing.

1. Log in to ThoughtSpot from a browser.
2. Navigate to a pinboard or visualization.
3. Get the object's link.

   If the object is a pinboard, click **Actions** and select **Copy Link**. For an individual answer, use the URL of the answer itself, for example: `https://THOUGHTSPOT_INSTANCE/#/saved-answer/b42128d4-ddef-4336-bb6d-59dd3887a447`

5. Paste the link into the iframe in your Web page, Web portal, or application.

## Edit the html

You need to edit the page in your application or web page where you want to
display the visualization. ThoughtSpot uses the Bootstrap grid framework to
display visualization. You need to reference Bootstrap from the page where you plan to display a visualization.

1. Download the JS.

1. Decide how to reference Boostrap.

  Depending on where you are embedding, you may or may not have access to
  Bootstrap.  Your application or web pages may already be using it. If you
  aren't sure, ask the developer.  You can also refer to the [Bootstrap documentation](https://getbootstrap.com/docs/3.3/getting-started/).

  In this example, you reference Bootstrap through a CDN.

2.
The following example uses a simple web page to illustrate.



```
<div class="row">
<div class="col-lg-6">
<div class="portlet"><!-- /primary heading -->
<div class="portlet-heading">
<h3 class="portlet-title text-dark text-uppercase">
Product Sales
</h3>
<div class="clearfix"></div>
</div>
<div id="portlet1" class="panel-collapse collapse in">
<div class="portlet-body">
<div id="sales-chart" style="height: 420px;"></div>
</div>
</div>
</div> <!-- /Portlet -->

</div> <!-- end col -->
</div> <!-- end row -->
```

1.
