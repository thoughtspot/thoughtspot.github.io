---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About conversion formulas

Some formulas require the input to be of a particular data type. If you find that you want to pass a value to the function, but it is of the wrong data type, you can convert it using a conversion formula.

The following are the default conversion formulas:

-   to\_bool
-   to\_integer
-   to\_string
-   to\_float

Information on the usage for these formulas is in the [Formula reference](../reference/formula_reference.html).

Booleans are interpreted in the following ways:

|Data Type|Description|
|---------|-----------|
|to\_bool(integer)|Boolean true maps to integer 1 and boolean false to integer 0.|
|to\_bool(string)|Boolean true maps to string "true" and boolean false to string "false".|
|to\_double(boolean)|0 maps to boolean false, everything else to boolean true.|
|to\_integer(boolean)|0 maps to boolean false, everything else to boolean true.|
|to\_string(boolean)|The string "true" maps to boolean true, everything else to boolean false.|

**Parent topic:** [About formulas in searches](../../pages/complex_searches/add_formula_to_search.html)

