---
title: [Change chart colors]

last_updated: 5/1/2020
summary: "You can change the colors used in a chart."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To change the colors used in a chart, use the **Customize** menu to dive into the chip for the column or value you would like to change. You can set colors for:

* bars, lines, areas, bubbles, maps, and other visuals on charts
* slice with color
* legends on charts
* tables for conditional formatting

You can also [apply a conditional format]({{site.baseurl}}/end-user/search/apply-conditional-formatting.html) to change the color, based on specified criteria. This type of conditional formatting does not work with Line charts.

Colors are maintained across searches within a session. For example, when doing
a search on `revenue by state`, each state will keep the color assigned to it even
if you change the search or chart type.

## Set colors on a chart

1. While viewing your search or answer as a chart, click the **chart configuration** icon ![chart configuration icon]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to open the chart configuration menu.

    ![Edit chart configuration menu]({{ site.baseurl }}/images/chartconfig-customizemenu.png "Edit chart configuration menu")

2. Click on the color chip for the column or value you would like to change. Editable chips have a **more** icon: **>**.

2. Use the color picker to choose a new color to represent that value.

    You can also enter a HEX value directly.

    Your changes are saved immediately.

3. Click the **X** at the top right to dismiss the chart configuration panel.

    In the following example, we edited the colors used to **slice with color**.

    ![Change the chart color]({{ site.baseurl }}/images/chart-config.gif "Change the chart color")

## Set colors from the legend
When you **slice with color**, or when you have more than one column on an axis, a legend appears next to or below your chart. The legend tells you the value each color in your chart stands for. You can change the colors in your chart directly from the legend. Simply click on the color circle next to a legend item, and click on a different color, or input a HEX value.

![Change the chart color from the legend]({{ site.baseurl }}/images/chart-config-legend-color.gif "Change the chart color from the legend")

Note that you must click on the color circle ***next to*** the legend item to change the color. If you click on the legend item itself, you temporarily [hide it from the visualization]({{ site.baseurl }}/end-user/search/hide-and-show-values.html).
