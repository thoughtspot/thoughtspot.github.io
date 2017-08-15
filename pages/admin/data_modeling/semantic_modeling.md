---
title: [Model the data for searching]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
After loading data, you will create the semantic data model that makes the data easy to search. You can make these settings either through the Web interface or by using the model file.

## About data modeling

Data modeling is a very lightweight process compared to what you may have experienced in other tools. It enables you to change some of the settings (or properties) of the data so that it becomes more searchable.

You can change these settings in two ways, both of which have the same effect:

1.  [Model data in the Web interface.](../../shared/conrefs/../../admin/data_modeling/model_data_in_UI.html)
2.  [Model data in bulk in the model file.](../../shared/conrefs/../../admin/data_modeling/edit_model_file.html#)

Choose the model file method if you want to make many changes in one bulk operation.

Modeling the data allows you to give the columns more search friendly names or predefine how they can be explored and aggregated. When you load data, most of this data modeling metadata is set up for you automatically. However, since you know your data best, you can adjust the modeling settings to improve the experience for your users.

-   **[Model data in the ThoughtSpot application](../../admin/data_modeling/model_data_in_UI.html)**  
To make modeling settings for a table you've just loaded, or to make a quick change to existing settings, use the ThoughtSpot web interface. You can adjust the **Columns** settings from the data management listing.
-   **[Model data in bulk in the modeling file](../../admin/data_modeling/edit_model_file.html)**  
Properties of your data such as Column Names, Column Visibility, Column and Data Definition, Column Rank, etc. are defined in the modeling file. Use the model file when you want to edit these settings in bulk.
-   **[Data modeling settings](../../admin/data_modeling/data_modeling_settings.html)**  
Whether you are changing data modeling settings using the modeling file or the Web interface, the settings and their accepted values are the same.

**Parent topic:** [Model, link, and tag your data for searching](../../admin/data_modeling/about_data_modeling_intro.html)
