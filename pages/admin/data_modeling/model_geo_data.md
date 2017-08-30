---
title: [Add a geographical data setting]
tags:
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Certain attribute columns that contain location data can be used to create GeoMaps. ThoughtSpot supports Latitude, Longitude, Zip Code, US States, US Counties, Countries, and select international sub-nation regions.

You can designate a column as "Geo" by editing the GeoType column in the modeling file or the **Columns** setting screen.

Columns that can be designated as "Geo" columns need to contain text (VARCHAR) data unless they contain latitude/longitude data. Latitude and longitude columns can contain numeric data (DOUBLE) or text.

If you are using a column with the data type DOUBLE for latitude and longitude, you will also need to change the following settings for those columns:

-   [Set Column Type to ATTRIBUTE](change_column_type.html#).
-   [Set Additive to NO](change_column_additive.html#).
-   [Set Aggregation Type to NONE](change_aggreg_type.html#).

1. Find the **GeoType** for the column that contains the geographical data.
2. Change the value to the appropriate GeoType, depending on the kind of data the column contains.

    * Countries, for example:
      - United States
        -   `long name`: United States
        -   `name_sort`: United States of America
        -   `abbreviation`: U.S.A.
        -   `adm0_a3`: USA
        -   `adm0_a3_is`: USA
        -   `adm0_a3_us`: USA
        -   `admin`: United States of America
        -   `brk_a3`: USA
        -   `brk_name`: United States
        -   `formal_en`: United States of America
        -   `iso_a2`: US
        -   `iso_a3`: USA
        -   `iso_n3`: 840
    * `COUNTY` for counties in the United States, for example:
      -   santa clara county
      -   pike county, ohio
      -   pike county, OH
    * `STATE_PROVINCE` for states in the United States, for example:
      -   `name`: California
      -   `US Postal Service abbreviation`: CA
    * `LATITUDE` which must be used with `LONGITUDE`, for example:
      -   37.421023
      -   1.282911
    * `LONGITUDE` which must be used with `LATITUDE`
      -   122.142103
      -   103.848865
    * `ZIP_CODE` for zip codes and zip codes +4 in the United States
      -   `po_name`: MT MEADOWS AREA
      -   `ZIP`: "00012"
      -   `zip2`: 12
    * Other Sub-nation Regions which are administrative regions found in countries other than the United States, for example:
      -   bremen
      -   normandy
      -   west midlands

3. If your data includes latitude and/or longitude columns that are stored as a numeric data type (DOUBLE), make these changes for those columns:
    1. Change the **Type** or **ColumnType** to ATTRIBUTE.
    2. Change **ADDITIVE** to NO/FALSE.
4. Save your changes.


## Related information  

[Model the data for searching](semantic_modeling.html#)
