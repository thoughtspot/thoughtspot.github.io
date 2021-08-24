---
title: [Geo charts]
last_updated: 09/23/2019
summary: "There are three geo charts that let you visualize geographical data in ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Geo charts show data on a map by location. They are geo area, geo bubble, and
geo heatmap charts. These geo charts can display six types of geographical
data, depending on territory:

-   Country
-   State
-   County
-   Zip code
-   Point (latitude/longitude)
-   Other sub-nation regions (for international countries)

ThoughtSpot supports maps for many countries. Please see the complete list in [Geo Map Reference]({{ site.baseurl }}/reference/geomap-reference.html).

## Displayed Geo data

Here is a table that shows which GeoType data can be displayed using which geo chart type.

|GeoType|Data Type | Geo chart type|Notes|
|-------|---|--------------|-----|
|Country|VARCHAR|Geo area (default), geo bubble, geo heatmap| Can also be regions.|
|County|VARCHAR|Geo area (default), geo bubble, geo heatmap| Only for counties in the United States.|
|Latitude (point)|VARCHAR or DOUBLE|Geo bubble (default), geo heatmap| Must use both latitude and longitude columns.|
|Longitude (point)|VARCHAR or DOUBLE|Geo bubble (default), geo heatmap| Must use both latitude and longitude columns.|
|State|VARCHAR|Geo area (default), geo bubble, geo heatmap| Only for states in the United States.|
|Zipcode|VARCHAR|Geo bubble (default), geo heatmap| Refer to the [Geo Map reference]({{ site.baseurl }}/reference/geomap-reference.html) to see which countries have supported zip codes.|
|Other sub-nation regions|VARCHAR|Geo area (default), geo bubble, geo heatmap| The display depends on the type of administrative region.|

For data to display in geo charts, your administrator must configure it
as geographical data. If you you don't get an expected map
visualization, contact your administrator so they can configure the system correctly.

## Area charts

Geo area charts highlight the regions of interest, and
display boundaries for various regions.

 ![]({{ site.baseurl }}/images/state_level_geo_area_chart.png "Geo area chart example")

To paint a geo area chart, your search must include a geographical column with appropriate granularity. See [Geo Map Reference]({{ site.baseurl }}/reference/geomap-reference.html).

## Geo bubble charts

Geo bubble charts, like bubble charts, display the value of the measure through the relative
size of the bubble. Zip code data is a good choice for geo bubble charts.

 ![]({{ site.baseurl }}/images/geo_bubble_chart_example.png "Geo bubble chart example")

To paint a geo bubble chart, your search must include a geographical column, or a  latitude and longitude pair.

## Geo heatmap charts

Geo heatmap charts display the value of the measure through the depth of color of the area. Use geo heatmap charts to see the relative value or density of a measure by location (for example, "sales" relative to "customer zip code").

![Geo heatmap chart example]({{ site.baseurl }}/images/geo_heatmap_example.png "Geo heatmap chart example")

To use the geo heatmap chart, your search must include a geographical column, or a longitude and latitude pair. ThoughtSpot supports geographical visualizations for many countries; see the [Geo map reference]({{ site.baseurl }}/reference/geomap-reference.html) for details.
