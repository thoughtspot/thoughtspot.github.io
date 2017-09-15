---
title: [Overview of data modeling settings]
tags:
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---

You can change these settings in two ways, both of which have change the model. If you want to make a few small changes, you should [make them in the ThoughtSpot application ](../../shared/conrefs/../../admin/data_modeling/model_data_in_UI.html) if you want to make many changes [you should edit the modelling file](../../shared/conrefs/../../admin/data_modeling/edit_model_file.html#). Whether you are changing data modeling settings using the modeling file or the Web interface, the settings and their accepted values are the same.

## Modeling settings

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

-   **[Change the column name](/pages/admin/data_modeling/change_column_names.html)**  
You can change the text that is shown for the column names in ThoughtSpot to make the names more meaningful to users. The column name is what they will type to add that column to their search.
-   **[Add a column description](/pages/admin/data_modeling/change_column_description.html)**  
You can provide a description for a specific column, to provide additional information for users about the data it contains.
-   **[Change the column type (ATTRIBUTE or MEASURE)](/pages/admin/data_modeling/change_column_type.html)**  
Columns have a **Column Type** based on the kind of data they store. This is set automatically upon defining the table, but in some cases, you may want to change the type.
-   **[Change the additive setting for a column](/pages/admin/data_modeling/change_column_additive.html)**  
Your data may contain a column with a numeric data type that you have defined as an **ATTRIBUTE** rather than a **MEASURE** (such as age). You can allow aggregations on the values by changing the value of the **ADDITIVE** setting.
-   **[Change the aggregation setting for a column](/pages/admin/data_modeling/change_aggreg_type.html)**  
All types of aggregations can be performed on **MEASURE** columns, and some aggregations can be done on **ATTRIBUTE** columns. You can change the default aggregation type to make combining data more intuitive and faster.
-   **[Hide a column](/pages/admin/data_modeling/change_column_visibility.html)**  
You can hide columns from users in ThoughtSpot without dropping them from the database. This is common when the data contains identifier columns that are used to join tables, but which do not have any meaning to users.
-   **[Create synonyms for a column](/pages/admin/data_modeling/create_synonyms.html)**  
If you want to allow searching using more than one name for a column, you can create synonyms for it. This is helpful when different departments refer to the data using different terminology, for example.
-   **[Change the index type for a column](/pages/admin/data_modeling/change_index.html)**  
ThoughtSpot indexes column names and unique column values. The indexes are used to dynamically generate suggestions in the search bar when typing a search.
-   **[Add a geographical data setting for a column](/pages/admin/data_modeling/model_geo_data.html)**  
Certain attribute columns that contain location data can be used to create GeoMaps. ThoughtSpot supports Latitude, Longitude, Zip Code, US States, US Counties, Countries, and select international sub-nation regions.
-   **[Set the search suggestions priority for a column](/pages/admin/data_modeling/change_column_priority.html)**  
You can change the priority that determines which columns are shown in search suggestions and the order in which they appear.
-   **[Set the format to use when showing numbers](/pages/admin/data_modeling/set_format_pattern_numbers.html)**  
You can set a format for how numbers are displayed in tables and charts. For example, you can display numbers with a different number of digits after the decimal point, based on the data modeling setting **Format Pattern**.
-   **[Set the format to use when showing dates](/pages/admin/data_modeling/set_format_pattern.html)**  
You can set a format for how dates are displayed in tables and charts. For example, you can display dates in a standard European or US format based on the data modeling setting **Format Pattern**.
-   **[Set the format to use when showing currencies](/pages/admin/data_modeling/set_the_format_to_use_when_showing_currencies.html)**  
You can set a format for how currencies are displayed in tables and charts when using the ThoughtSpot Data API or Embedding. For example, you can display currencies in a standard European Euro or US Dollar format based on the data modeling setting **Currency Type**.
-   **[Change the Attribution Dimension setting of a column](/pages/admin/data_modeling/attributable_dimension.html)**  
The **Attribution Dimension** setting applies only to tables that are related through a chasm trap. If your schema does not include these, you can ignore this setting.


## Related information  

[Model the data for searching](semantic_modeling.html#)
