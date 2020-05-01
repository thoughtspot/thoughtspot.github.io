---
title: [Proximity searches "near" and "farther than"]

last_updated: 4/30/2020
summary: "If your table contains Latitude and Longitude data, you can use proximity searches that find entities related to each other by location."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Proximity keywords allow you to search for data on locations `near` or `farther than` *n* number of miles from a specified location. For example, you could search for `sales` by `store county near santa clara county within 50 miles`, or `sales` by `store city farther than 50 miles from santa clara county`.

Note that you can ***only*** use the `near` and `farther than` keywords on data sources that have `latitude` and `longitude` data. The `latitude` and `longitude` columns must be [configured as geographical data]({{ site.baseurl }}/admin/loading/datatypes.html#how-to-import-geographical-data).

![Proximity search with the near keyword]({{ site.baseurl }}/images/geo-proximity-search-example.png "Proximity search with the near keyword")

The proximity keywords are:

-   `near`
-   `near…within n miles`|`km`|`meters`
-   `farther than n miles`|`km`|`meters from`

The distance is calculated as a straight-line distance (not road distance)
radius using miles, kilometers, or meters from the central point. If you do not
specify a distance, the system uses 10 km as the default.

Given a location and an optional distance, the search returns all
instances of a geotype column that fall within the parameters. For example, for the `near santa clara county` search shown above, the system searches for rows with `santa clara county` in it and finds the corresponding latitude and longitude columns. The system can handle up to 33 latitude/longitude pairs for a given geographical value, like a city, country, or county. Then, ThoughtSpot finds all latitude/longitude pairs with a direct distance of less than 10 km or a specified distance from the `santa clara county` latitude/ longitude pairs.

A latitude/ longitude pair can be associated with more than one geographical value.

You can any additional filtering to your query.

## Proximity search examples

Some examples of valid searches are:

`sales store city near tokyo`

`sales store city near tokyo within 50 miles`

`sales store city farther than 50 miles from tokyo`

`Store city` in these queries refers to the name of the column that `tokyo` falls under in the data. You must specify the name of the column for the location you are searching on ***before*** entering the `near` or `farther than` keyword.

You can filter your search only with actual values found in the data. For example,
longitude between `-125.000000` and `-115.316670` may work for you, but not
 `longitude between -125 and -115`, if your latitude and longitude data values always have six decimal places.

## Proximity search configuration requirements

* All your data must be in the same set.
* The worksheet or one of the tables in your data source must contain a column of type `longitude` and a column of type `latitude`.
* The latitude and longitude data have to be on the same base tables for the feature
to work. You can't, for instance, have a dimension table with all your cities
and their associated geo coordinates and join to it from your fact table and
expect proximity search to work.
* Your administrators must have configured these columns using the
appropriate GeoType.
