---
title: [Add a formula to a search]
summary: Learn how to add a formula to a search.
last_updated: 10/23/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a formula directly within a search. Some common reasons for using a formula in a search are to perform mathematical functions, check for and replace null values, or add conditional logic.

## How to add a formula

To create a formula in a search:

1. Start a new search, or choose an existing answer to edit.

3. In the upper-right side of the table, click the three-dot Actions ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} icon and select **Add formula**.

    ![Click + to add a formula]({{ site.baseurl }}/images/formula-add-to-search.png "Click + to add a formula")

4. Name and enter your formula in the Formula Editor.

     ![Use the Formula Editor]({{ site.baseurl }}/images/worksheet-formula-profit.png "Use the Formula Editor")

    {% include note.html content="Formula elements are color coded by type and can include the formula operators and functions (blue), the names of columns (purple), and/or constants (black)." %}

5.  You can see a list of formula operators with examples by clicking **Formula Assistant**. Expand a category, such as **Comparison**, and click on an operator for a definition and example.

    ![Formula Editor help]({{ site.baseurl }}/images/worksheet-formula-assistant.png "Formula Editor help")

6.  To change what your formula returns, use the **Advanced Settings**. If Answer V2 <span class="label label-beta">Beta</span> is on in your environment, select the settings icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} in the upper right corner. Depending on your formula, you may be able to change the following aspects:

    -   **Data type**: Determines the type of data that the formula generates. For example, use `date` for an `add_days` formula.
    -   **Measure or attribute**: Determines if the output of the formula is a measure or an attribute. For example, choose `attribute` for a formula that generates age groups, and choose `measure` for a formula that generates profit.
    -   **Aggregation**: Determines the default aggregation of the formula output. For example, choose `min` to see minimum profit.

    ![Advanced settings in the Formula Builder]({{ site.baseurl }}/images/worksheet-formula-settings.png "Advanced settings in the Formula Builder")

7. Click **Save**.

## Related information  

[Formula function reference]({{ site.baseurl }}/reference/formula-reference.html#)
