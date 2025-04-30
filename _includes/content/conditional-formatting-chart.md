You can use conditional formatting to show charts with a target value or range drawn as a line in the chart, and the legend colors determined by where values fall relative to the target.

To apply conditional formatting to a chart (in this example, _Total Revenue by Supplier Country_), follow these steps:

1. Click the **edit chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to the upper right of your chart. The **Edit chart** panel appears, on the **Configure** menu. Alternatively, you can click the **Conditional formatting** option in the axis menu for the measure you would like to add a conditional formatting rule for. If the new Answer experience <span class="badge badge-update">Beta</span> (off by default) is off in your environment, you can only access chart conditional formatting from the axis menu.

2. From the **Edit chart** menu, select the measure you would like to add a conditional formatting rule for.

3. The **Edit** panel for that column appears. Under **Conditional formatting**, click **+ Add rule**.

4. Select an operator. The valid options for measures are `less than`, `greater than`, `less than or equal to`, `greater than or equal to`, `equal to`, `not equal to`, and `between`.

4. Select the conditional value, or in the case of the `between` operator, the conditional range. Here, we apply conditional formatting to revenue values between `100 million` and `125 million`.

    ![Conditional formatting: add rule]({{ site.baseurl }}/images/conditional-formatting-chart-add-rule.png "Conditional formatting: add rule")

5. To specify a different color of the conditional format, select the new color from the color selector.

   This option draws upper and lower limit lines on the chart, and colors the chart elements that meet the conditional requirements.

   ![Change conditional format color]({{ site.baseurl }}/images/conditional-formatting-chart-color.png "Change conditional format color")

   Alternatively, you can place a range band on the chart. Select the **Fill chart** option.

   ![Add conditional format band]({{ site.baseurl }}/images/conditional-formatting-chart-fill.png "Add conditional format band")

6. To add another condition, click **+ Add rule** below the rule(s) you already created.

7.  To remove a defined conditional format, navigate to the **Edit** panel for the measure. Select the **delete** icon that appears when you hover over a rule.

8.  Click **Done**.

Here, you can see a chart that highlights elements with conditional formatting on some elements. You can also see how the same chart appears with a background chart band.    

![Conditional formatting applied, two options]({{ site.baseurl }}/images/conditional-formatting-applied-comparison.png "Conditional formatting applied, two options")
