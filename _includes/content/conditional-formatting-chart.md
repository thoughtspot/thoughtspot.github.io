You can use conditional formatting to show charts with a target value or range drawn as a line in the chart, and the legend colors determined by where values fall relative to the target.

To apply conditional formatting to a chart (in this example, _Total Sales_), follow these steps:

1. Click the **Conditional formatting** option in the axis menu.

   ![Add conditional formatting]({{ site.baseurl }}/images/edit-axis-conditional-formatting.png "Add conditional formatting")

2. The **Conditional formatting** window modal appears.

   ![Conditional formatting interface]({{ site.baseurl }}/images/edit-axis-conditional-formatting-1.png "Conditional formatting interface")  

3. In the window modal, click **+ add formatting**.

   ![Add a format]({{ site.baseurl }}/images/edit-axis-conditional-formatting-2.png "Add a format")  

4. Select the conditional range.

   The text area on the left specifies the lower limit of the condition, so the condition applies to all values that are greater or equal to it.
   And the text area on the right specifies the upper limit of the condition, so the condition applies to all lower values.

   * To show show values with a lower limit, enter a value in the left text box.

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

    ![Add another conditional format]({{ site.baseurl }}/images/edit-axis-conditional-formatting-5.png "Add another condition")

7.  To remove a defined conditional format, click the delete icon (**x**) next to its definition.

    ![Remove conditional format]({{ site.baseurl }}/images/edit-axis-conditional-formatting-6.png "Remove conditional format")

8.  Click **Done**.

    ![Complete conditional format]({{ site.baseurl }}/images/edit-axis-conditional-formatting-7.png "Complete conditional format")

Here, you can see a chart that highlights elements with conditional  formatting on some elements. You can also see how the same chart appears with a background chart band.    

![Conditional formatting applied, two options]({{ site.baseurl }}/images/edit-axis-conditional-formatting-applied-comparison.png "Conditional formatting applied, two options")
