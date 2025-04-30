---
title: [Apply conditional formatting]

last_updated: 2/25/2021
summary: "Use conditional formatting to make portions of your results stand  out."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can apply conditional formatting to tables or charts to highlight values in the data. This makes values above, below, or within a particular threshold stand out.

## Understand conditional formatting

Many companies create pinboards with key metrics they want to track in daily or weekly staff meetings. Using conditional formatting, they can see at a glance how they are performing relative to these metrics.

You can add visual cues for KPIs (Key Performance Indicators) or threshold metrics to charts and tables, to easily show where you are falling short or exceeding targets. These visual cues are called conditional formatting, which applies color formatting to your search result. For tables, you can add conditional formatting to set the background color of cells in a table based on the values they contain. For charts, you can add conditional formatting to show the threshold(s) you defined, and the data that falls within them will be shown using the same color.

## Apply conditional formatting to a table

You can use conditional formatting to show table cells with a background color determined by the value they contain.

To apply conditional formatting to a table:

1. In the column header of your table for the column you want to apply formatting to, click the **More** menu icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}.

     ![]({{ site.baseurl }}/images/conditional_formatting_table_1.png "Three dot menu")

2. Select **Conditional Formatting**.
3. Click **+ ADD FORMATTING** in the **Conditional Formatting** window.
4. Define the sets of values and the color to use for each set.

     ![]({{ site.baseurl }}/images/conditional-formatting-table-3.png "Define the sets of values and color")

5. Click **Done** after defining all of your conditional formatting sets.

     ![]({{ site.baseurl }}/images/conditional_formatting_table_4.png "Table with conditional formatting")

Note: If you change to a chart type, you must apply conditional formatting again. Conditional formatting is tied to the specific visualization.

## Apply conditional formatting to a chart

You can use conditional formatting to show charts with a target value or range drawn as a line in the chart, and the legend colors determined by where values fall relative to the target.

To apply conditional formatting to a chart:

1. Click the **Conditional formatting** option in the axis menu.

   ![Add conditional formatting]({{ site.baseurl }}/images/edit-axis-conditional-formatting.png "Add conditional formatting")

2. The **Conditional formatting** window modal appears.

3. In the window modal, click **+ add formatting**.

4. Select the conditional range.

   The text area on the left specifies the lower limit of the condition, so the condition applies to all values that are greater or equal to it.
   And the text area on the right specifies the upper limit of the condition, so the condition applies to all lower values.

   * To show values with a lower limit, enter a value in the left text box.

   * To show values with an upper limit, enter a value in the right text box.

   * To show values in a specified range, enter the appropriate values in both text boxes.

   Here, we apply conditional formatting to values between `5,500,000` and `8,000,000`.

   ![Add conditional format range]({{ site.baseurl }}/images/edit-axis-conditional-formatting-3.png "Add conditional format range")

5. To specify a different color of the conditional format, select the new color from the color selector.

   This option draws upper and lower limit lines on the chart, and colors the chart elements that meet the conditional requirements.

   ![Change conditional format color]({{ site.baseurl }}/images/edit-axis-conditional-formatting-4.png "Change conditional format color")

   Alternatively, you can place a range band on the chart. Select the **Fill chart** option.

   ![Add conditional format band]({{ site.baseurl }}/images/edit-axis-conditional-formatting-8.png "Add conditional format band")

6. To add another condition, click **+add formatting**.

7.  To remove a defined conditional format, click the delete icon (**x**) next to its definition.

8.  Click **Done**.

Here, you can see a chart that highlights elements with conditional  formatting on some elements. You can also see how the same chart appears with a background chart band.    

![Conditional formatting applied, two options]({{ site.baseurl }}/images/edit-axis-conditional-formatting-applied-comparison.png "Conditional formatting applied")
