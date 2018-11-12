--- title: [How to view a data schema] tags: [Modeling] keywords: schema viewer,
--relationships, keys, worksheet last_updated: tbd summary: "Use the schema
--viewer to see tables and worksheets and their relationships. " sidebar:
--mydoc_sidebar permalink: /:collection/:path.html - There is a schema viewer in
--ThoughtSpot which lets you see your database schema in the web browser. The
--Schema Viewer is interactive, so you can configure it to show just what you
--want to see.

You need **Admin** privileges to use the **Schema Viewer**.

## Bringing up the Schema Viewer

You can access the Schema Viewer from the **Data** screen by clicking
**Actions**, and selecting **View Schema**.

 ![]({{ site.baseurl }}/images/access_schema_viewer.png "Access the Schema
 Viewer")

When viewing the schema, you can filter the tables shown similarly to how you
filter data sources. The list of tables, worksheets, and imported data on the
left includes only those objects you want to see. Clicking on one of the objects
brings it to the middle of the viewer and highlights it. You can drag the
objects around in the viewer.

 ![]({{ site.baseurl }}/images/schema_viewer.png "Schema Viewer filters")

## Why to use the Schema Viewer

You can use the Schema Viewer to find out information like:

-   What is the relationship between two tables? What tables make up this
-   worksheet, and how are they joined?

The schema viewer shows joins between tables, join directionality, and join type
(whether they are Foreign Key to Primary Key, relationship joins, or joins
defined by users through the web interface). Use the **Table** list to find a
specific table or worksheet.

## How the Schema Viewer shows joins

You can use the Schema Viewer to review your schema and ensure that it was
modeled using best practices. For example, joins are shown in separate colors that indicate their type:

* Red is used for generic relationships
* Green is used for primary key/foreign key joins

When viewing a worksheet, you'll also be able to see whether an inner, left outer, right outer, or full outer join was used between each of the joined tables.

A good rule to follow is "Keep it Green". This means that you'll get better results from PK/FK joins rather than from using generic relationships. You should only use generic relationships when the tables being joined have a many-to-many rather than a PK/FK structure. If you find tables that have been joined using a generic relationship, but could have used a PK/FK join, you should drop the relationship and create a PK/FK join instead. To do this, you need to use the ALTER TABLE...DROP RELATIONSHIP statement in TQL. Then use ALTER TABLE...ADD FOREIGN KEY to create the PK/FK join.

## Worksheet view

Click on a worksheet, to see it in the Schema Viewer. The worksheet
view shows the following information:

-   All tables in the worksheet, and the relationships between these tables.
-   Source columns for all columns of a worksheet.

-   Keys and definitions for each relationship, as well as join paths and types.

-   Columns that are derived from formulas.

-   Correct join paths for newly created chasm trap worksheets. Existing chasm
-   trap worksheets created prior to ThoughtSpot version 4.4 will not show the correct join paths.

 ![]({{ site.baseurl }}/images/worksheet_viewer.png "Worksheet view example")

## Related Information

-   [Worksheet joins]({{ site.baseurl }}/admin/worksheets/add-joins.html)
-   [Change the schema using TQL]({{ site.baseurl }}/admin/loading/change-schema.html)
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
