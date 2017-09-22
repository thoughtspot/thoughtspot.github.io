---
title: [Proximity searches "near" and "farther than"]
tags:
keywords: within,near,"farther than",proximity,geo,search
last_updated: tbd
summary: "If your table contains Latitude and Longitude data, you can use proximity searches that find entities related to each other by location."
sidebar: mydoc_sidebar
---
Proximity keywords allow you to search with spatial filters on data contained in
a table or worksheet which contains geo type columns with latitude/longitude
data. This lets you search based on spherical distance. Using these keywords
causes ThoughtSpot to display a circle that represents your set distance on the
geo charts when you filter on a GeoType column.

 ![](/pages/images/geospatial_search.png "Geospatial search on a geo area map")

The distance is calculated as a straight-line distance (not road distance)
radius using miles, kilometers, or meters from the central point. If not
specified, the default is 10 km. The proximity keywords are.

-   `near`
-   `near…within n miles|km|meters`
-   `farther than n miles|km|meters from`

These keywords are limited to 33 latitude/longitude pairs. They work on
duplicate counties. Finally, you can filter on them.

### Proximity search configuration requirements

If you want to be able to use proximity keywords the data source (worksheet or
one of the tables) must contain a column of type `longitude` and a column of
type `latitude`. The latitude and longitude data have to be on the same base
tables for the feature to work.

Also, your administrators must have configured these columns using the
appropriate GeoType.
