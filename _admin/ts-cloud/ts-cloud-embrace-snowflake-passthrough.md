---
title: [Passthrough functions for Snowflake]
last_updated: 1/20/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Passthrough functions allow you to send SQL expressions directly to Snowflake without being interpreted by ThoughtSpot. If you have custom database functions that ThoughtSpot doesn’t support, you can use these new passthrough functions in the ThoughtSpot Formula Assistant to call your custom functions.

A passthrough function serves as a wrapper around the specific Snowflake SQL function. To use a specific Snowflake SQL function, match the data type that the function returns with the Embrace passthrough function that returns that data type.

For details on all supported passthrough functions, see [Embrace passthrough functions]({{ site.baseurl }}/reference/formula-reference.html#passthrough-functions).

For details on Snowflake SQL functions, see Snowflake's [SQL Function Reference](https://docs.snowflake.com/en/sql-reference-functions.html){:target="_blank"}.
