---
title: [Data types]
tags: [TQL, Geomaps,dates,time]
keywords: "ETL,data types, Administrative Regions"
last_updated: tbd
summary: "ThoughtSpot supports the common data types."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Before you import data, compare the data types you want to load with these supported data types. Then, convert your data before loading it. Typically, you would export the data, transform it to meet these type rules, and then load the data. This is known as an extract-transform-load process.

## Supported data types

The tables you create to receive the data must have the same number of columns and data types as the data you will be loading. Choose a data type for each column from the list of supported data types:

| Data | Supported data types | Details |
|--------------|----------------------|---------|
|Character|`VARCHAR(*n*)`|Specify the maximum number of characters, as in `VARCHAR(255)`. The size limit is 1GB for `VARCHAR` values.|
|Floating point|`DOUBLE` or `FLOAT`|`DOUBLE` is recommended. DOUBLE has  RANGE `1.7E +/- 308` (15 digits).|
|Boolean|`BOOL`|Can be `true` or `false`.|
|Integer|`INT` or `BIGINT`|`INT` holds 32 bits. `BIGINT` holds 64 bits. INT has a range of `–2,147,483,648` to `2,147,483,647`. BIGINT range is `–9,223,372,036,854,775,808` to `9,223,372,036,854,775,807`.|
|Date or time| `DATE`,  `DATETIME`, `TIMESTAMP`, `TIME` |`DATETIME`, `TIMESTAMP`, and `TIME` are stored at the granularity of seconds. `TIMESTAMP` is identical to `DATETIME`, but is included for syntax compatibility.|

{% include warning.html content="There is a 1GB limitation on the number of characters for `VARCHAR`. If you have any `VARCHAR` data that exceeds this limit, the entire load will fail."%}

## Geographical data types

For geographical data types, use VARCHAR. For latitude and longitude, you can use either `VARCHAR` or `DOUBLE`. After loading the data, designate it as a geographical data type when you [Edit the system-wide data model]({{ site.baseurl }}/admin/data-modeling/edit-model-file.html#). Wherever abbreviations or codes are used, they are the same as what the USPS (United States Postal Service) recognizes.

These data types can be designated as geographical data, which enables them to be visualized using the Geo chart types:

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
  {% include important.html content="You cannot upload your own custom boundaries." %}
