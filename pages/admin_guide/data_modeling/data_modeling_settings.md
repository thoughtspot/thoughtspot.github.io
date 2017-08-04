---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Data modeling settings

Whether you are changing data modeling settings using the modeling file or the Web interface, the settings and their accepted values are the same.

## Modeling settings

You can change these settings in two ways, both of which have the same effect:

1.  [Model data in the Web interface.](../../shared/conrefs/../../admin_guide/data_modeling/model_data_in_UI.html)
2.  [Model data in bulk in the model file.](../../shared/conrefs/../../admin_guide/data_modeling/edit_model_file.html#)

Choose the model file method if you want to make many changes in one bulk operation.

This index lists the editable data modeling settings:

|Setting name|Description|Can be modeled in a Worksheet|
|------------|-----------|-----------------------------|
|[Column Name](change_column_names.html#)|Sets the name of the column to be used in searches.|Yes|
|[Description](change_column_description.html#)|Adds a text description of what the column contains.|Yes|
|Data Type|Read only. Shows the column's [data type](../loading/datatypes.html#).| |
|[Column Type](change_column_type.html#)|Sets the type of column, either **ATTRIBUTE** or **MEASURE**.| |
|[Additive](change_column_additive.html#)|Controls the type of aggregations that will be available for a column.| |
|[Aggregation](change_aggreg_type.html#)|Sets the default aggregation type for **MEASURE** columns.| |
|[Hidden](change_column_visibility.html#)|Sets the visibility of a column.| |
|[Synonyms](create_synonyms.html#)|Adds synonyms that can be used in the search bar to refer to a column.|Yes|
|[Index Type](change_index.html#)|Sets the type of index that will be created for a column.| |
|[Geo Type](model_geo_data.html#)|Enables a column to be used in GeoMap visualizations.| |
|[Priority](change_column_priority.html#)|Changes the priority of a column in search suggestions.| |
|[Number Format](set_format_pattern_numbers.html#)|Specifies the format to use when showing a numeric value in the column.| |
|[Date Format](set_format_pattern.html#)|Specifies the format to use when showing the dates in a column.| |
|[Currency Format](set_the_format_to_use_when_showing_currencies.html)|Specifies the format to use when showing the currencies in a column.| |
|[Attribution Dimension](attributable_dimension.html#)|Only applies to tables that join over a [Chasm Trap](../loading/chasm_trap.html#). Designates whether the tables depend on this column for attribution.| |

## Data modeling for worksheets

For worksheets, only some of the settings can be modified, whether you are using the modeling file or the Web interface. The editable settings for worksheets are:

-   Name
-   Description
-   Synonyms

If you want to change any of the settings that cannot be modified in a worksheet, you need to make your changes to the underlying table instead, and they will be reflected in all worksheets that use the table.

**Related information**  


[Model the data for searching](semantic_modeling.html#)

