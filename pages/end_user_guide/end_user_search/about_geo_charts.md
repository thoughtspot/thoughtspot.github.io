---
title: [elephant]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About geo charts

There are three geo charts that let you visualize geographical data in ThoughtSpot.

These geo charts show data on a map by location. They are geo area, geo bubble, and geo heatmap charts. And these geo charts can display six types of geographical data, which are:

-   Country
-   State
-   County
-   Zipcode
-   Point (latitude/longitude)
-   Other sub-nation regions (for international countries)

    **Note:** In addition to the United States, ThoughtSpot also supports maps for the United Kingdom, Germany, Sweden, South Africa, and France.


Here is a table that shows which GeoType data can be displayed using which geo chart type.

|GeoType|Geo chart type|Notes|
|-------|--------------|-----|
|Country|Geo area (default), geo bubble, geo heatmap| -   Can also be regions.

 |
|County|Geo area (default), geo bubble, geo heatmap| -   Only for counties in the United States.

 |
|Point|Geo bubble (default), geo heatmap| -   Must use both latitude and longitude columns.

 |
|State|Geo area (default), geo bubble, geo heatmap| -   Only for states in the United States.

 |
|Zipcode|Geo bubble (default), geo heatmap| -   Zip codes and zip codes +4 in the United States.

 |
|Other sub-nation regions|Geo area (default), geo bubble, geo heatmap| -   The display will depend on the type of administrative region chosen.

 |

In order for data to be displayed using geo charts, your administrator must configure it as geographical data. If you are expecting to be able to get a map visualization, but it isn't available, contact your administrator so they can make the configuration.

**Restriction:** Only the first 5,000 data points will be shown on a geo chart. If you need to increase this limit, please contact ThoughtSpot Support.

-   **[Geo area charts](../../../pages/end_user_guide/end_user_search/about_geo_area_charts.html)**  
The geo area chart displays country, county, state and zipcode data on a geographical chart.
-   **[Geo bubble charts](../../../pages/end_user_guide/end_user_search/about_geo_bubble_charts.html)**  
The geo bubble chart displays country, county, point, state, and zipcode data on a geographical chart.
-   **[Geo heatmap charts](../../../pages/end_user_guide/end_user_search/about_geo_heatmap_charts.html)**  
The geo heatmap chart displays country, county, point, state, and zipcode data on a geographical chart.

**Parent topic:** [About chart types](../../../pages/end_user_guide/end_user_search/about_chart_types.html)

