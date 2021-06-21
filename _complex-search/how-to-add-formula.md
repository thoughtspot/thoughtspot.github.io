---
title: [Add a formula to a search]
summary: Learn how to add a formula to a search.
last_updated: 4/1/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{% include note.html content="The new formula editor is part of the new Answer experience. If you have the new Answer experience on, the new version of the Formula Editor appears when you add a formula to a search, but not when you add a formula to a Worksheet. You can turn the new Answer experience on or off individually from the Experience manager panel in your profile." %}

You can add a formula directly within a search. Some common reasons for using a formula in a search are to perform mathematical functions, check for and replace null values, or add conditional logic.

## How to add a formula

To create a formula in a search:

1. Start a new search, or choose an existing Answer to edit.

3. Open the Data panel from the upper right corner if it is not open, and click the + icon next to Formulas. If the new Answer experience is off in your environment, click the **more options** icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} in the upper-right side of the table, and select **Add formula**.

    ![Click + to add a formula]({{ site.baseurl }}/images/formula-editor-add.png "Click + to add a formula")

4. Name and enter your formula in the Formula Editor. The new Formula Editor supports multi-line wrapping of long formulas. To continue the formula on a new line, press **Enter** or **return** on your keyboard.

    ![Use the Formula Editor]({{ site.baseurl }}/images/worksheet-formula-profit.png "Use the Formula Editor")

    {% include note.html content="Formula elements are color-coded by type and can include the formula operators and functions (blue), the names of columns (purple), and/or constants (black)." %}

5.  You can see a list of formula operators with examples by selecting the help icon **?** in the upper right corner. If the new Answer experience is off in your environment, click **Formula Assistant**. Expand a category, such as **Comparison**, and click on a formula operator for a definition and example.

    ![Formula Editor help]({{ site.baseurl }}/images/worksheet-formula-assistant.png "Formula Editor help")

6. To change what your formula returns, use the **Advanced settings**. Select the settings icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} in the upper right corner. If the new Answer experience is off in your environment, select **Settings**. Depending on your formula, you may be able to change the following aspects:

    -   **Data type**: Determines the type of data that the formula generates. For example, use `date` for an `add_days` formula.
    -   **Measure or attribute**: Determines if the output of the formula is a measure or an attribute. For example, choose `attribute` for a formula that generates age groups, and choose `measure` for a formula that generates profit.
    -   **Aggregation**: Determines the default aggregation of the formula output. For example, choose `min` to see minimum profit.

    ![Advanced settings in the Formula Builder]({{ site.baseurl }}/images/worksheet-formula-settings.png "Advanced settings in the Formula Builder")

7. Click **Save**. Name your formula, if you did not already name it.

## Related information  

[Formula function reference]({{ site.baseurl }}/reference/formula-reference.html#)
