---
title: [Add a geographical data setting]
tags:
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Certain attribute columns that contain location data can be used to create GeoMaps. ThoughtSpot supports Latitude, Longitude, Zip Code, US States, US Counties, Countries, and select international sub-nation regions.

You can designate a column as `Geo` by editing the GeoType column in the modeling file or the **Columns** setting screen.

Columns that can be designated as `Geo` columns need to contain text (`VARCHAR`) data unless they contain latitude/longitude data. Latitude and longitude columns can contain numeric data (`DOUBLE`) or text.

If you are using a column with the data type DOUBLE for latitude and longitude, you will also need to change the following settings for those columns:

-   set Column Type to ATTRIBUTE
-   set Additive to NO
-   set Aggregation Type to NONE

For information these settings, see [Set ADDITIVE or AGGREGATION](change_aggreg_additive.html).

## How to edit geographic columns

1. Find the **GEO CONFIG** for the column that contains the geographical data.
2. Select the column to display the **Specify Geographic Configuration** dialog.

    ![]({{ site.baseurl }}/images/set_geo_config.png "Configure geo data")

3. Change the value to the appropriate **GEO CONFIG**, depending on the kind of geo data the column contains.
    If your data includes latitude and/or longitude columns that are stored as a numeric data type (DOUBLE), make these changes for those columns:
    1. Change the **Type** or **ColumnType** to ATTRIBUTE.
    2. Change **ADDITIVE** to NO/FALSE.
4. Save your changes.

## List of geotypes

{% include content/geotypes.html %}

## Related information  

[Model the data for searching](semantic_modeling.html#)
