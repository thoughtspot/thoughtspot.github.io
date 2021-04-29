---
title: ["Add a hyperlink to a Search"]
summary: Learn how to add a hyperlink to a Search.
last_updated: 04/29/2021
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can add a hyperlink directly within a Search. Using the concat formula, you can create an external hyperlink, or link your Answer to another Pinboard.

## How to add a basic hyperlink

To add an external hyperlink in a search, follow these steps:

1. Start a new Search.
Alternatively, choose to edit an existing Answer from a Pinboard.

2. If the Answer shows a chart, switch to **Table View**.

     ![Switch to table view]({{ site.baseurl }}/images/changeview-chartortable.png "Switch to table view")

3. In the upper-right side of the table, click the **More** menu icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select **Add formula**.<br>

     ![Create a new formula in an answer]({{ site.baseurl }}/images/formula-add-to-search.png "Create a new formula in an answer")

4. Name your formula.
5. Enter your formula, following the basic syntax:
<code>concat({caption}value{/caption}link)</code>

     <ul>
     <li>For a data set that does not contain properly formed urls, your formula should include the url in full.
     For example, to link from the Product Category column to a Google search, use the following syntax to reference the <code>product category</code> column, and a Google search using its values:
     <code>concat("{caption}",product category,"{/caption}","https://www.google.com/search?q=",product category)</code></li>

     ![Add a link with a formula]({{ site.baseurl }}/images/hyperlink-google-product.png "Create a formula to link product category to Google search")

     <li>For a data set that contains properly formed urls, you can simplify the formula.
     For example, to link from the <code>Fruit</code> column to the <code>url</code>, use the following syntax to reference the two columns, <code>fruit</code> and <code>url</code>:
     <code>concat("{caption}",fruit,"{/caption}",url)</code></li>

     ![Add a link with a formula]({{ site.baseurl }}/images/hyperlink-fruit-url.png "Create a formula to link a category to url within data set")
     </ul>

6. Click **Save**.

## How to link to another Pinboard  

To add a hyperlink to another Pinboard, follow these steps:

1. Start a new Search.
Alternatively, choose to edit an existing Answer from a Pinboard.

2. Choose the target Pinboard for the link.

3. Open your target Pinboard and copy the web address.

4. Within your Search, switch to **Table View**.
In the upper-right side of the table, click the **More** menu icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}  and select **Add formula**.<br>

     ![Create a new formula in an answer]({{ site.baseurl }}/images/formula-add-to-search.png "Create a new formula in an answer")

5. Name your formula.

6. Enter your formula, following the basic syntax:
<code>concat(“{caption}pinboard{/caption}http://<thoughtspot_server>:<port>/?<runtime filter>,column name)</code>

     For example, the formula to link between a search on fruit sales and a Pinboard based on the same data with url <code>https://wine.corp.thoughtspot.com/#/pinboard/e510f946-f9ce-48ad-a4af-1a40a9cf8add</code> would be:
     <code>concat("{caption}pinboard{/caption}https://wine.corp.thoughtspot.com/#/pinboard/e510f946-f9ce-48ad-a4af-1a40a9cf8add/?col1=fruit&op1=eq&val1=",fruit)</code>

     ![Link an Answer to a Pinboard with a formula]({{ site.baseurl }}/images/hyperlink-pinboard-pinboard.png "Create a formula to link an Answer to a Pinboard")

     {% include note.html content="Here, the runtime filter is operating on the column <code>fruit</code>, and will only return values that are equal (EQ) to the fruits listed in the columns." %}

8. Click **Save**.

### Reference

* [About Runtime Filters]({{site.baseurl }}/app-integrate/runtime-filters/about-runtime-filters.html)
