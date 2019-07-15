---
title: [Overview of data modeling settings]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can change these settings in two ways, both of which change the model.
If you want to make a few small changes, you should [make them in the
ThoughtSpot application ]({{ site.baseurl
}}/admin/data-modeling/model-data-in-UI.html). If you want to make many changes
[you should edit the modeling file]({{ site.baseurl
}}/admin/data-modeling/edit-model-file.html#). Whether you are changing data
modeling settings using the modeling file or the Web interface, the settings and
their accepted values are the same.

## Modeling settings

This index lists the editable data modeling settings. You can apply these settings to columns in tables or worksheets.

| Setting name | Description |
|----------------|----------------------|
| [Column Name](change-column-basics.html#change-the-column-name#) | Sets the name of the column to be used in searches. |
| [Description](change-column-basics.html#change-column-description) | Adds a text description of what the column contains. |
| Data Type | Read only. Shows the column's [data type]({{ site.baseurl }}/admin/loading/datatypes.html#). |
| [Column Type](change-column-basics.html#change-column-type) | Sets the type of column, either `ATTRIBUTE` or `MEASURE`. |
| [Additive](change-aggreg-additive.html#) | Controls the type of aggregations that will be available for a column. |
| [Aggregation](change-aggreg-additive.html#) | Sets the default aggregation type for a column. |
| [Hidden](change-visibility-synonym.html#) | Sets the visibility of a column. |
| [Synonyms](change-visibility-synonym.html#) | Adds synonyms that can be used in the search bar to refer to a column. |
| [SpotIQ Preference](spotiq-data-model-preferences.html#) | Excludes specified columns from SpotIQ analyses. By Default, all columns are included in SpotIQ.|
| [Index Type](change-index.html#) | Sets the type of index that will be created for a column. |
| [Geo Config](model-geo-data.html#) | Enables a column to be used in GeoMap visualizations. |
| [Index Priority](change-index.html#) | Changes the priority of a column in search suggestions. |
| [Format Pattern](set-format-pattern-numbers.html#) | Specifies the format to use for numeric values or dates that show in the column. |
| [Currency Format](set-format-pattern-numbers.html#set-currency-format) | Specifies the format to use when showing the currencies in a column. |
| [Attribution Dimension](attributable-dimension.html#) | Only applies to tables that join over a [Chasm Trap]({{ site.baseurl }}/admin/loading/chasm-trap.html#). Designates whether the tables depend on this column for attribution. |
| [Entity Category](set-entity-category.html#) | Specifies how to categorize the data in the column by entity type. By default, `ENTITY TYPE` is not set. Entity categories support [SearchIQ]({{ site.baseurl }}/end-user/search/about-searchiq.html#) so that when you type a natural question, ThoughtSpot better knows how to interpret it. For example, if you ask "who are the top performers?" ThoughtSpot will first choose columns set with `PERSON` from which to return answers. If you ask "when was the movie Jurassic Park released?", columns set to `TIME` will be used to answer the "when" part of the question, and so forth.|

## Data modeling best practices

As a best practice, make any data modeling settings in the table when you will be creating multiple worksheets that use that table. This way, you won't have to make the same settings in each worksheet. The settings will be inherited when you create worksheets that uses columns from the table.

If you have settings that only apply in the context of a particular worksheet, make those settings in the worksheet rather than in the underlying table(s).

Note that if you make your settings at the table level, and then create a worksheet that uses columns from the table, the settings are inherited from the table at the point in time that the worksheet is created. If you then go back and change the settings at the table level, your changes will not be reflected in the worksheet.

If you want the worksheet to have the changes you made at the table level, you must drop those columns from the worksheet and re-add them. Then save the worksheet. At this point, the new settings will be used in the worksheet. Note that any saved answers or pinboards based on the worksheet may display differently because of your changes. For example, if you've changed the GeoMap setting from "None" to "Country", you will now see a map where before you might have seen a table.

## Related information  

- [Model the data for searching](semantic-modeling.html#)
- [Add a geographical data setting for a column]({{ site.baseurl }}/admin/data-modeling/model-geo-data.html)  
