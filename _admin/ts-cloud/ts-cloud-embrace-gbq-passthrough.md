---
title: [Passthrough functions for Google BigQuery]
last_updated: 1/20/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Passthrough functions allow you to send SQL expressions directly to Snowflake without being interpreted by ThoughtSpot. If you have custom database functions that ThoughtSpot doesn’t support, you can use these new passthrough functions in the ThoughtSpot Formula Assistant to call your custom functions.

A passthrough function serves as a wrapper around the specific Google BigQuery SQL function. To use a specific Snowflake SQL function, match the data type that the function returns with the Embrace passthrough function that returns that data type.

## Example

### Scenario
A company stores all data in `varchar` (dates, amounts, prices, and flags) in a history table and the only `datetime` field is a load date, which is not seen by the user.

This example only applies to **quantities** and **amount** fields, since ThoughtSpot's `to_date` function automatically generates the correct BigQuery SQL for **dates**.

The original table items **quantity**, **quantity_kg**, and **shipvalue** are datatyped as `varchar`.  Quantity is an `integer`, quantity_kg is a `double` (or `float`), and shipvalue is a `double` or `float`.

{% include note.html content="The company casts as `bignumeric` but ThoughtSpot passthrough functions only support `numeric` as shown below." %}

### Formulas in ThoughtSpot

The following passthrough functions were applied in a worksheet:
- Shipped Quantity: `sql_double_op ( “safe_cast({0} as numeric)” ,quantity )`
- Shipped Quantity (kg): `sql_double_op ( “safe_cast({0} as numeric)” ,quantity_kg )`
- Shipped Value: `sql_double_op ( “safe_cast({0} as numeric)” , shipvalue )`

Since the date is also stored as `varchar` in `ddmmYYYY` format, and ThoughtSpot’s standard function `to_date`, passes the parse `datetime` correctly to BigQuery, using a passthrough function is not required. However, if you wanted to use it, it would look like this:

`to_date ( date_shipped , ‘%d/%m/%Y’ )`

## Related links

For details on all supported passthrough functions, see [Embrace passthrough functions]({{ site.baseurl }}/reference/formula-reference.html#passthrough-functions).

For details on BigQuery SQL functions, see Google's [Expressions, functions, and operators in Standard SQL](https://cloud.google.com/bigquery/docs/reference/standard-sql/functions-and-operators){:target="_blank"}.
