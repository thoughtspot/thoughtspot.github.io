---
title: [Geo charts]
keywords: tbd
last_updated: tbd
summary: "There are three geo charts that let you visualize geographical data in ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Geo charts show data on a map by location. They are geo area, geo bubble, and
geo heatmap charts. And these geo charts can display six types of geographical
data, which are:

-   Country
-   State
-   County
-   Zipcode
-   Point (latitude/longitude)
-   Other sub-nation regions (for international countries)

In addition to the United States, ThoughtSpot also supports maps for the
Canadian province/count maps, United Kingdom, Germany, Sweden, South Africa, and
France.

## Geo data that can be displayed

Here is a table that shows which GeoType data can be displayed using which geo chart type.

|GeoType|Geo chart type|Notes|
|-------|--------------|-----|
|Country|Geo area (default), geo bubble, geo heatmap| Can also be regions.|
|County|Geo area (default), geo bubble, geo heatmap| Only for counties in the United States.|
|Point|Geo bubble (default), geo heatmap| Must use both latitude and longitude columns.|
|State|Geo area (default), geo bubble, geo heatmap| Only for states in the United States.|
|Zipcode|Geo bubble (default), geo heatmap| Zip codes and zip codes +4 in the United States.|
|Other sub-nation regions|Geo area (default), geo bubble, geo heatmap| The display will depend on the type of administrative region chosen.|

For data to be displayed using geo charts, your administrator must configure it
as geographical data. If you are expecting to be able to get a map
visualization, but it isn't available, contact your administrator so they can
make the configuration.

## Area charts

Geo area charts highlight the regions of interest. Point data
(longitude/latitude) doesn't work on geo area charts. Also, only geo area charts
display boundaries for counties.

 ![]({{ site.baseurl }}/images/state_level_geo_area_chart.png "Geo area chart example")

Your search needs one geographical column of granularity to be represented as a geo area chart.

## Geo bubble charts

Geo bubble charts, like bubble charts, display the value of the measure by the
size of the bubble. Zip code data makes the most sense for geo bubble charts.

 ![]({{ site.baseurl }}/images/geo_bubble_chart_example.png "Geo bubble chart example")

Your search needs one geographical column or a pair of latitude and longitude
columns to be represented as a geo bubble chart.

## Heatmap charts

Heatmap charts are similar to treemap charts in that they both use a similar
system of color-coding to represent data values. However, the heatmap does not
use size to measure data, and instead requires an additional attribute.

 ![]({{ site.baseurl }}/images/new_heatmap_look.png "Heatmap chart example")

The value of each cell depends on the measure you choose under **Edit char configuration**.

 ![]({{ site.baseurl }}/images/heatmap_value.png "Heatmap value dropdown")
