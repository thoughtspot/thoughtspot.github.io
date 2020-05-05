---
title: [Proximity searches "near" and "farther than"]

last_updated: 5/5/2020
summary: "If your table contains Latitude and Longitude data, you can use proximity searches that find entities related to each other by location."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Proximity keywords allow you to search for data on locations `near` or `farther than` *n* number of miles from a specified location.

For example, you could search for `sales` by `store county near santa clara county within 50 miles`, or `sales` by `store city farther than 50 miles from santa clara county`.

Note that you can ***only*** use the `near` and `farther than` keywords on data sources that have `latitude` and `longitude` data. The latitude and longitude columns must be [configured as geographical data]({{ site.baseurl }}/admin/loading/datatypes.html#how-to-import-geographical-data).

**The `near` keyword**

![Proximity search with the near keyword]({{ site.baseurl }}/images/geo-proximity-search-example.png "Proximity search with the near keyword")

**The `farther than` keyword**

![Proximity search with the farther than keyword]({{ site.baseurl }}/images/geo-proximity-search-farther-than.png "Proximity search with the farther than keyword")

The proximity keywords are:

-   `near`
-   `near…within n miles` \| `km` \| `meters`
-   `farther than n miles` \| `km` \| `meters from`

## How proximity search works

ThoughtSpot calculates the distance from the location you specify in a proximity search as a straight-line distance (not road distance) radius, using miles, kilometers, or meters from the central point. If you do not specify a distance, the system uses 10 km as the default.

To increase the 10 km default, [contact ThoughtSpot support]({{ site.baseurl }}/appliance/contact.html).

Given a location and an optional distance, the search returns all instances of a geotype column that fall within the parameters. For example, for the `near santa clara county` search shown above, the system searches for rows with `santa clara county` in it and finds the corresponding latitude and longitude columns. The system can handle up to 30 latitude/ longitude pairs for a given geographical value, like a city, country, or county. Then, ThoughtSpot finds all latitude/ longitude pairs with a direct distance of less than 10 km or a specified distance from the `santa clara county` latitude/ longitude pairs.

To increase the number of latitude/ longitude pairs that the system will accept, [contact ThoughtSpot support]({{ site.baseurl }}/appliance/contact.html).

A latitude/ longitude pair can be associated with more than one geographical value.

You can add any additional filtering to your query.

## Proximity search examples

Some examples of valid searches are:

`sales store city near tokyo`

`sales store city near tokyo within 50 miles`

`sales store city farther than 50 miles from tokyo`

`Store city` in these queries refers to the name of the column that `tokyo` falls under in the data. You must specify the name of the column for the location you are searching on ***before*** entering the `near` or `farther than` keyword.

## Proximity search configuration requirements

* All your data must be in the same data set. You cannot search on two different tables, related by a join, like you can in a typical ThoughtSpot search. To search on two (or more) different tables, [create a Worksheet]({{ site.baseurl }}/admin/worksheets/about-worksheets.html) that contains data from those tables and use the Worksheet as your data source.
* The Worksheet or one of the tables in your data source must contain a column of type `longitude` and a column of type `latitude`.
* The latitude and longitude data must be on the same table. If your data source is a Worksheet or View, the latitude and longitude columns can be on different underlying tables, as long as they are in the same Worksheet or View.
* Your administrators must configure the latitude and longitude columns using the
appropriate GeoType.
