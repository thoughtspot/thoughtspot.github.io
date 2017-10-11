---
title: [About conversion formulas]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Some formulas require the input to be of a particular data type. If you find that you want to pass a value to the function, but it is of the wrong data type, you can convert it using a conversion formula.

The following are the default conversion formulas:

-   `to_bool`
-   `to_integer`
-   `to_string`
-   `to_float`

Information on the usage for these formulas is in the [Formula reference]({{ site.baseurl }}/admin/reference/formula-reference.html).

Booleans are interpreted in the following ways:

|Data Type|Description|
|---------|-----------|
|`to_bool(integer)`|Boolean true maps to integer 1 and boolean false to integer 0.|
|`to_bool(string)`|Boolean true maps to string "true" and boolean false to string "false".|
|`to_double(boolean)`|0 maps to boolean false, everything else to boolean true.|
|`to_integer(boolean)`|0 maps to boolean false, everything else to boolean true.|
|`to_string(boolean)`|The string "true" maps to boolean true, everything else to boolean false.|
