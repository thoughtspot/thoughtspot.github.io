---
title: [Overview of data modeling settings]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can change these settings in two ways, both of which have change the model.
If you want to make a few small changes, you should [make them in the
ThoughtSpot application ]({{ site.baseurl
}}/admin/data-modeling/model-data-in-UI.html) if you want to make many changes
[you should edit the modeling file]({{ site.baseurl
}}/admin/data-modeling/edit-model-file.html#). Whether you are changing data
modeling settings using the modeling file or the Web interface, the settings and
their accepted values are the same.

## Modeling settings

This index lists the editable data modeling settings. With three exceptions, the modeling settings must be modeled in a table.  Column names, descriptions, and synonyms can also be modeled in a worksheet.

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
| [Index Priority](change-column-priority.html#) | Changes the priority of a column in search suggestions. |
| [Format Pattern](set-format-pattern-numbers.html#) | Specifies the format to use for numeric values or dates that show in the column. |
| [Currency Format](set-format-pattern-numbers.html#set-currency-format) | Specifies the format to use when showing the currencies in a column. |
| [Attribution Dimension](attributable-dimension.html#) | Only applies to tables that join over a [Chasm Trap]({{ site.baseurl }}/admin/loading/chasm-trap.html#). Designates whether the tables depend on this column for attribution. |
| [Entity Category](set-entity-category.html#) | Specifies how to categorize the data in the column by entity type. Options are `PERSON`, `PLACE`, `TIME`, `MONEY`, `PRODUCT`, `ZIP_CODE`, `LAT_LONG`, `COMPANY_ORG`, `NUM_TYPES`. By default, `ENTITY TYPE` is not set. <br><br> Entity categories support [SearchIQ]({{ site.baseurl }}/end-user/search/about-searchiq.html#) so that when you type a natural question, ThoughtSpot better knows how to interpret it. <br><br>For example, if you ask "who are the top performers?" ThoughtSpot will first choose columns set with `PERSON` from which to return answers. If you ask "when was the movie Jurassic Park released?", columns set to `TIME` will be used to answer the "when" part of the question, and so forth.|

## Data modeling for worksheets

For worksheets, only some of the settings can be modified, whether you are using
the modeling file or the Web interface. The editable settings for worksheets
are:

-   Name
-   Description
-   Synonyms

If you want to change any of the settings that cannot be modified in a
worksheet, you need to make your changes to the underlying table instead, and
they will be reflected in all worksheets that use the table.

## Related information  

- [Model the data for searching](semantic-modeling.html#)
- [Add a geographical data setting for a column]({{ site.baseurl }}/admin/data-modeling/model-geo-data.html)  
- [Set the search suggestions priority for a column]({{ site.baseurl }}/admin/data-modeling/change-column-priority.html)  
