---
title: [How to view a data schema]
last_updated: 11/19/2020
toc: true
summary: "Use the schema viewer to see tables and worksheets and their relationships. "
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot has a **Schema Viewer** though which you can examine the database schema. It is interactive and configurable, so you can see the level of detail that is relevant to your work.

You must have **Admin** privileges to use the **Schema Viewer**.

## Accessing the Schema Viewer for all objects

1. Click the **Data** tab in the top menu.  

2. Click the **More** menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (ellipses icon), and select **View Schema**.

   ![]({{ site.baseurl }}/images/view-schema.png "Access the Schema Viewer")

3. When the schema appears, you can see that you can control the visible part of the schema.

   ![]({{ site.baseurl }}/images/schema_viewer.png "Schema Viewer filters")


   | Legend | Action |
   | --- | --- |
   | 1. | See either _All_ \(Default\), or _Yours_. |
   | 2. | See either _All types_ \(Default\), _Worksheets_, _Tables_, or _Views_. |
   | 3. | Select artifacts tagged with stickers. |


4. The list of tables, worksheets, and imported data on the left changes as you select the various filters. The schema view focus changes in tandem.

5. To center the view panel on a specific table, worksheet, or view, click that object.

   You can also drag the objects around in the viewer to position them better.

## Accessing Schema Viewer for a single worksheet, table, or view

You can now see the schema for each object for tables, worksheets, or views.

1. Click the **Data** tab in the top menu.  

2. Select from the list of the possible objects:

   ![]({{ site.baseurl }}/images/select-tables.png "Top selection menu in Data")


   | Legend | Action |
   | --- | --- |
   | 1. | See either _All_ \(Default\), or _Yours_. |
   | 2. | See either _All types_ \(Default\), _Worksheets_, _Tables_, or _Views_. |
   | 3. | Select artifacts tagged with stickers. |

3. From the list of objects, select one. Here, we selected the worksheet _West Regional Sales_.

4. At the top of the worksheet, click the **Joins** tab.

   ![]({{ site.baseurl }}/images/select-worksheet-schema.png "Click worksheet Schema")

5. The join information and the schema for the worksheet appear.  

   ![]({{ site.baseurl }}/images/worksheet-join-schema.png "View join and schema")



## Why use the Schema Viewer

You can use the Schema Viewer to discover the following information:

-   What is the relationship between two tables?
-   What tables make up this worksheet, and how are they joined?

The schema viewer shows joins between tables, join directionality, and join type.

<!-- ()
(whether they are Foreign Key to Primary Key, relationship joins, or joins
defined by users through the web interface). Use the **Table** list to find a
specific table or worksheet.-->

## How the Schema Viewer shows joins

You can use the Schema Viewer to review your schema and ensure that it was
modeled using best practices. For example, joins appear in different colors to distinguish their type:

* Generic relationships are in **red**
* Primary key/ foreign key joins are in **green**

When viewing a worksheet, you can also see what joins connect the tables: the inner, left outer, right outer, or full outer joins.

{% include note.html content="Defining a generic relationship in the UI rather than using a primary key/ foreign key join through TQL has no impact on performance. However, when creating relationships in the UI, you must ensure that you create it in the right direction: many to one. To create many-to-many joins, or to create joins using >, <, >=, or <=, use TQL." %}

## Worksheet view

Worksheets are often based on more than one table. The worksheet schema will
show schemas for the tables behind the worksheet, as well as the joins between
tables _that were created as a part of the worksheet_.

Click a worksheet, to see it in the Schema Viewer. If the schema view is not showing the schema behind the worksheet, double click the tab on the top right of the worksheet object.

![]({{ site.baseurl }}/images/worksheet_viewer_schema.png "Worksheet schema example")


The worksheet view shows the following information:

-   All tables in the worksheet, and the relationships between these tables.
-   Source columns for all columns of a worksheet.
-   Keys and definitions for each relationship, as well as join paths and types.
-   Columns that are derived from formulas.
-   Correct join paths for newly created chasm trap worksheets. Chasm trap worksheets created prior to ThoughtSpot version 4.4 do not show the correct join paths.

 ![]({{ site.baseurl }}/images/worksheet_viewer.png "Worksheet view example")

## Related Information

-   [Worksheet joins]({{ site.baseurl }}/admin/worksheets/add-joins.html)
-   [Modify joins within a worksheet]({{ site.baseurl }}/admin/worksheets/mod-ws-internal-joins.html)
-   [Change the schema using TQL]({{ site.baseurl }}/admin/loading/change-schema.html)
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
