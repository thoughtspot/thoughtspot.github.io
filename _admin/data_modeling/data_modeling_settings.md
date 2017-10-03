---
title: [Overview of data modeling settings]
tags:
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---

You can change these settings in two ways, both of which have change the model. If you want to make a few small changes, you should [make them in the ThoughtSpot application ](/pages/admin/data_modeling/model_data_in_UI.html) if you want to make many changes [you should edit the modelling file](/pages/admin/data_modeling/edit_model_file.html#). Whether you are changing data modeling settings using the modeling file or the Web interface, the settings and their accepted values are the same.

## Modeling settings

This index lists the editable data modeling settings:

|Setting name|Description|Can be modeled in a Worksheet|
|------------|-----------|-----------------------------|
|[Column Name](change_column_basics.html#change-the-column-name#)|Sets the name of the column to be used in searches.|Yes|
|[Description](change_column_basics.html#change-column-description)|Adds a text description of what the column contains.|Yes|
|Data Type|Read only. Shows the column's [data type](../loading/datatypes.html#).| |
|[Column Type](change_column_basics.html#change-column-type)|Sets the type of column, either **ATTRIBUTE** or **MEASURE**.| |
|[Additive](change_aggreg_additive.html#)|Controls the type of aggregations that will be available for a column.| |
|[Aggregation](change_aggreg_additive.html#)|Sets the default aggregation type for **MEASURE** columns.| |
|[Hidden](change_visibility_synonym.html#)|Sets the visibility of a column.| |
|[Synonyms](change_visibility_synonym.html#)|Adds synonyms that can be used in the search bar to refer to a column.|Yes|
|[Index Type](change_index.html#)|Sets the type of index that will be created for a column.| |
|[Geo Type](model_geo_data.html#)|Enables a column to be used in GeoMap visualizations.| |
|[Priority](change_column_priority.html#)|Changes the priority of a column in search suggestions.| |
|[Number Format](set_format_pattern_numbers.html#)|Specifies the format to use when showing a numeric value in the column.| |
|[Date Format](set_format_pattern_numbers.html#date-format)|Specifies the format to use when showing the dates in a column.| |
|[Currency Format](set_format_pattern_numbers.html#set-currency-format)|Specifies the format to use when showing the currencies in a column.| |
|[Attribution Dimension](attributable_dimension.html#)|Only applies to tables that join over a [Chasm Trap](../loading/chasm_trap.html#). Designates whether the tables depend on this column for attribution.| |

## Data modeling for worksheets

For worksheets, only some of the settings can be modified, whether you are using the modeling file or the Web interface. The editable settings for worksheets are:

-   Name
-   Description
-   Synonyms

If you want to change any of the settings that cannot be modified in a worksheet, you need to make your changes to the underlying table instead, and they will be reflected in all worksheets that use the table.

## Related information  

- [Model the data for searching](semantic_modeling.html#)
- [Add a geographical data setting for a column](/pages/admin/data_modeling/model_geo_data.html)  
- [Set the search suggestions priority for a column](/pages/admin/data_modeling/change_column_priority.html)  
