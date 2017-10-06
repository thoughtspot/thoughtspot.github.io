---
title: [Set the search suggestions priority]
tags:
keywords: tbd
last_updated: tbd
toc: false
summary: "You can change the priority that determines which columns are shown in search suggestions and the order in which they appear."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The value of **Priority** determines the priority order (rank) in which a particular column (and its values) appears in the search dropdown. You can push a column up in the order (increase the rank) by increasing its **Priority** value. A higher value (like 2) will cause the corresponding column and its values to appear higher up in the search dropdown than columns with lower value (like 1). By default, the **Priority** value is set to “1” for all columns.

You should only use numbers between 1-100 in this field. It is recommended to assign values in increments of 5 or 10, to allow room to assign values to other columns that may be inserted later on.

1. Change the value to a number between 1 and 100.
   Use a higher value if you want to boost the search priority, and a lower value if you want to lower it.
2. Save your changes.


## Related information  

[Model the data for searching](semantic-modeling.html#)
