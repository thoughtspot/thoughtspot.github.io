---
title: [Change the Attribution Dimension]
tags:
keywords: tbd
toc: false
last_updated: tbd
summary: "The **Attribution Dimension** setting applies only to tables that are related through a chasm trap. If your schema does not include these, you can ignore this setting."
sidebar: mydoc_sidebar
---

The **Attribution Dimension** setting only applies to tables that join over a [Chasm Trap](../loading/chasm_trap.html#). By default, the attribution dimension setting will be set to **Yes**, but you can override that by setting the column's attribution dimension property to **No**, as described here.

In the classic chasm trap two fact tables are related through a shared dimension table. When the two fact tables are joined, the shared column(s) in the dimension table are used to attribute rows in one fact table to match with rows in the other fact table. Usually, all goes well using this method. But sometimes an incorrect or illogical attribution can result, because the column chosen is not meaningful for performing this attribution. If you are seeing unexpected results in searches that include tables across a chasm trap, this setting is for you.

Here is an example of a column that is not an attribution dimension. Suppose you have two fact tables, Wholesale Purchases and Retail Sales, that share a common dimension Date. In this case, the date column in the Date dimension should not be used for attribution, since unrelated rows in both of the fact tables could share the same row in the Date table. If I bought oranges wholesale on April 25, 2005 and made a retail sale of apples on the same day, there is no logical relationship between those two events. Combining the two events using the date they share will not create any meaningful information.

 ![](/pages/images/NOT_attribution_dim.png "Example where a column is not an attribution dimension")

If matching rows in two fact tables over a chasm trap depends on the values in a column contained in a dimension table, that column is known as an attribution dimension. In this example, the Product ID column in the Products dimension table is an attribution dimension. For rows where the Product ID in the Wholesale Purchases and in the Retail Sales tables is a match, those rows are logically related in a meaningful way. They can be combined in charts and reports to produce a logical, expected outcome.

 ![](/pages/images/IS_attribution_dim.png "Attribution dimension example")

To designate a column as not being an attribution dimension (i.e. not producing any meaningful attribution across a chasm trap):

1. Find the column that is not an attribution dimension.
2. Select its **Attribution Dimension**.
3. Set the value to **No**.
  If you're using the modeling file, set it to **FALSE**.
4. Save your changes.


## Related information  

[Model the data for searching](semantic_modeling.html#)
