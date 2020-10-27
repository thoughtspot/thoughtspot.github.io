---
title: [Add a formula to a search]
summary: Learn how to add a formula to a search.
last_updated: 10/27/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include note.html content="Formula Editor V2 is part of the Answer V2 feature set. Answer V2 is in <strong>Beta</strong>.You can turn Answer V2 on or return to the classic experience from the <strong>Data</strong> panel on the <strong>Search</strong> page. If Answer V2 is on in your environment, your experience of the Formula Editor is slightly different. If you do not have the option to turn Answer V2 on, contact your administrator." %}

You can add a formula directly within a search. Some common reasons for using a formula in a search are to perform mathematical functions, check for and replace null values, or add conditional logic.

## How to add a formula

To create a formula in a search:

1. Start a new search, or choose an existing answer from a pinboard to edit.
2. If the answer shows a chart, switch to **Table View**.

     ![Switch to table view]({{ site.baseurl }}/images/changeview-chartortable.png "Switch to table view")

3. In the upper-right side of the table, click the three-dot **Actions** icon and select **Add formula**. If Answer V2 <span class="label label-beta">Beta</span> is on in your environment, open the **Data** panel from the upper right corner if it is not open, and click the **+** icon next to **Formulas**.

     ![Create a new formula in an answer]({{ site.baseurl }}/images/formula-add-to-search.png "Create a new formula in an answer")

4. Name and enter your formula in the Formula Builder.

     ![Use the Formula Builder]({{ site.baseurl }}/images/worksheet-formula-profit.png "Use the Formula Builder")

    {% include note.html content="Formula elements are color coded by type and can include the formula operators and functions (blue), the names of columns (purple), and/or constants (black)." %}

5.  You can see a list of formula operators with examples by clicking **Formula Assistant.** If Answer V2 <span class="label label-beta">Beta</span> is on in your environment, select the help icon **?** in the upper right corner. Expand a category, such as **Comparison**, and click on an operator for a definition and example.

    ![Formula Assistant]({{ site.baseurl }}/images/worksheet-formula-assistant.png "Formula Assistant")

6.  If you want to change what your formula returns, use the **Advanced settings**. If Answer V2 <span class="label label-beta">Beta</span> is on in your environment, select the settings icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} in the upper right corner. Depending on your formula, you may be able to change the following aspects:

    -   **Data type**: Determines the type of data that the formula generates. For example, use `date` for an `add_days` formula.
    -   **Measure or attribute**: Determines if the output of the formula is a measure or an attribute. For example, choose `attribute` for a formula that generates age groups, and choose `measure` for a formula that generates profit.
    -   **Aggregation**: Determines the default aggregation of the formula output. For example, choose `min` to see minimum profit.

    ![Advanced settings in the Formula Builder]({{ site.baseurl }}/images/worksheet-formula-settings.png "Advanced settings in the Formula Builder")

7. Click **Save**. Name your formula, if you did not already name it.

## Related information  

[Formula function reference]({{ site.baseurl }}/reference/formula-reference.html#)
