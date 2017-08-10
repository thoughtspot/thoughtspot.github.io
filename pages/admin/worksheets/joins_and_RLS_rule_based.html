# About the worksheet join rule with Rule-Based Row Level Security

When working with worksheets and row level security, you need to understand how joins are applied. This is especially important if your schema includes any chasm traps.

This section applies only to the newer [Rule-Based Row Level Security](../data_security/new_row_level_security.html#). If you are using the older, [Legacy Row Level Security](../data_security/about_legacy_row_security.html#) \(not recommended\), see [About the worksheet join rule with Legacy Row Level Security](joins_and_row_level_security.html#).

## Rule-Based Row Level Security with worksheets

In the past, if you used the Legacy Row Level Security, you could depend on the worksheet join rule to protect sensitive data, based on the row level security settings on a single table. But now, with Rule-Based Row Level Security, you need to protect every table that contains any sensitive data. To do this, you'll grant access by creating explicit row level security rules on each of the underlying tables which contain data that row level security should apply to. When creating the row level security rules for a table that's part of a worksheet, you aren't limited to referencing only the columns in that table. You can specify columns from other tables in the worksheet as well, as long as the tables are joined to the table you're creating the rule on. Then, when creating a worksheet on top of them, the behavior is consistent regardless of the worksheet join rule you choose. Users will never be able to see data they should not, regardless of what their search contains.

## Example of using Rule-Based Row Level Security to secure a table

Imagine you have a worksheet that contains a "Sales" fact table, and "Customer" and "Product"dimensions that are joined on "Customer SSN" and "Product Code" columns. In order to secure the "Sales" table, you can use "Customer Name" from the "Customer" column to create a row level secuirty rule.

## Chasm Trap

This is particularly important with chasm trap schemas. For chasm trap schemas, if row level security is only set on one of the tables, people could see data they should not see if the scope of their search does not include that table. \(this protects the from having people see the wrong things if they have chasm trap\).

For any worksheets that include a chasm trap, you need to use the new Rule-Based Row Level Security. In fact, starting in release 3.3, if you have existing Legacy Row Level Security built on a chasm trap schema, you'll need to migrate to the new row level security before you can use them anymore. If you were still using Legacy Row Level Security, after upgrading to 3.3.x, you would not be able to access any of those worksheets. You’d see a message advising you to migrate to the newer Rule-Based Row Level Security.

Note also that for chasm trap worksheets, progressive and non-progressive joins do not apply. There is an entirely different methodology for how worksheet joins on a chasm trap schema work with row level security. So you can safely ignore that setting.

**Parent topic:** [How the worksheet join rule works](../../admin/worksheets/progressive_joins.html)

