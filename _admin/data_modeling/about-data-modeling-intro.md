---
title: [About data modeling]
tags:
keywords: tbd
last_updated: tbd
summary: "Modeling, tagging, and adding links between your data sources can make the data even easier to search."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After loading data, you will create the semantic data model that makes the data easy to search. You can make these settings either through the Web interface or by using the model file.

You can start searching your data without doing any modeling, creating relationships, or tagging. But putting some thought into these will make the data even easier and more intuitive to search for your end users.


## Where to model data

Data modeling is a very lightweight process compared to what you may have experienced in other tools. It enables you to change some of the settings (or properties) of the data so that it becomes more searchable.

You can change these settings in two ways, both of which have the same effect:

* [Model data in the Web interface.](../../shared/conrefs/../../admin/data_modeling/model_data_in_UI.html)
* [Model data in bulk in the model file.](../../shared/conrefs/../../admin/data_modeling/edit_model_file.html#)

Choose the model file method if you want to make many changes in one bulk operation.

## Modeling topics

Modeling the data allows you to give the columns more search friendly names or predefine how they can be explored and aggregated. When you load data, most of this data modeling metadata is set up for you automatically. However, since you know your data best, you can adjust the modeling settings to improve the experience for your users.

-   **[Model data in the ThoughtSpot application](/admin/data_modeling/model_data_in_UI.html)**  
To make modeling settings for a table you've just loaded, or to make a quick change to existing settings, use the ThoughtSpot web interface. You can adjust the **Columns** settings from the data management listing.
-   **[Model data in bulk in the modeling file](/admin/data_modeling/edit_model_file.html)**  
Properties of your data such as Column Names, Column Visibility, Column and Data Definition, Column Rank, etc. are defined in the modeling file. Use the model file when you want to edit these settings in bulk.
-   **[Data modeling settings](/admin/data_modeling/data_modeling_settings.html)**  
Whether you are changing data modeling settings using the modeling file or the Web interface, the settings and their accepted values are the same.-   **[Link tables using relationships](/admin/data_modeling/about_relationships.html)**  
You can link tables by creating relationships between their columns. Linked tables can be searched together or combined into a worksheet for easy searching. Tables that have no relationship between their columns can not be combined in a single search.
-   **[About stickers](/admin/data_modeling/stickers_concept.html)**  
 You can create stickers to make it easier for people to find data sources and pinboards.
