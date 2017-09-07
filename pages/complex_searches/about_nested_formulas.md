---
title: [Nested formulas]
tags:
keywords: tbd
last_updated: tbd
toc: false
sidebar: mydoc_sidebar
---
Nested formulas, or formula on formula, allow you to reference a formula within another formula. This feature enables encapsulation and decomposition of formula logic and minimizes duplication by allowing a formula to reuse another formula. These formulas become columns, and are even suggested within the Formula Builder. Invalid formulas, such as cyclic or inconsistent aggregation formulas, are prevented from being created.

In addition, these formulas have dependency awareness, which ensure that you do not break any dependent formulas while editing a formula with dependent formulas. Some common cases of invalidating occur when you try to change a data type. Also, the system does not let you delete a formula that is nested in other formulas.

 ![](/pages/images/nested_formulas_example.png "formula1 nested in formula2")


There is no limit to the depth of nestings you can create.
