---
title: [Pie charts]

last_updated: 12/3/2020
summary: "A pie (or a circle) chart is a statistical graphic that divides data into slices to illustrate numerical proportion. In a pie chart, the arc length of a slice is proportional to the quantity it represents."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The pie chart is a classic chart type that displays your search in a circle. The default pie chart in ThoughtSpot displays data in the shape of a doughnut, or a thick ring.

## How pie charts divide data

Pie charts divide your data into sectors that each represent a proportion of a whole circle. You can display the exact values of each slice, in addition to the percentage values by toggling on **Additional chart options** found under Change chart configuration.

 ![]({{ site.baseurl }}/images/pie_chart_example.png "Pie chart example")

Your search needs at least one attribute and one measure to be represented as a pie chart. Also, there must be fewer than 250 values in the attribute column.

## Pie in pie charts

The pie in pie chart can be created from a regular pie chart in order to compare more than one component of an attribute. Pie in pie charts show two concentric pie charts comparing different measures.

To see a pie in pie chart, assign two different measures to the y-axis under **Configure Chart**.

 ![]({{ site.baseurl }}/images/pie_in_pie_chart_example.png "Pie in pie chart example")

## Color customization of pie in pie charts
You can customize the colors of each pie in a pie chart using the **Chart configuration** icon ![chart configuration icon]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline}.

2. Click the **Chart configuration** icon.
3. From the Edit chart window, click the attribute under **Category**.
6. Click the color chip next to each item you want to change. You can also enter the Hex value directly. Your changes are saved immediately.
