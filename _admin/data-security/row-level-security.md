---
title: [How rule-based RLS works]
tags: [bestpractices]
keywords: tbd
last_updated: tbd
summary: "Use rule-based RLS to restrict data access by group. Users see only those rows they are allowed to see."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Row level security works at the group level, not the individual user level. By
default, all groups can see all rows for any table they can view. You can limit
the rows a group can see by setting rules based on the data values contained in
one or more columns. The row level security rules you define on a table also
apply to any worksheets and pinboards based on that table.

Search suggestions also fall under row-level security. If a user would not have
access to the row data, then values from the row do not appear in search


## How to define rules


For each data source (table or imported data), you will define one or more rules
that govern which groups can see which data. The rules take the form of an
expression which is evaluated for each row and group combination, to decide if
that group can see that row. If the expression evaluates to "true", for a
particular group, they will be able to see that row.

For a list of operators and functions you can use to build these expressions see
[Row level security rules reference]({{ site.baseurl
}}/reference/rls-rule-builder-reference.html#).

## Best practices for using Rule-Based Row Level Security

Use these best practices for Rule-Based Row Level Security:


-  Set up row level security by table and on every table where it would apply.

    It is always a possibility that a particular search will only include data
    from a single table, and a user will see something they shouldn't. So
    protect your data by setting row level security wherever you want to keep
    data secure.

- Explicitly grant access for users that should see all rows.

    As soon as you create a row level security definition on a table for one group, all other groups are then blocked from seeing any rows in the table. You have to specifically grant other groups access in order for them to see any rows.

    If you want to ensure that a group can always see all rows in a table, use a rule that always evaluates to "true" for that group. For example:

    -   if `ts_groups = supergroup` then `true`


- Give users access to worksheets instead of tables.

    This is a general best practice in all implementations. It makes things
    easier for end users, because they only need to choose among a few sources,
    rather than every table. Also they won't have to choose five separate tables
    to get meaningful results. They can choose the single worksheet that
    combines the tables.


## Row level security with multiple conditions

When multiple row level security rules apply, the permissions are additive. That is, when there are multiple row level security conditions specified on a table, they are applied using an OR operator. If any of the rules applied allow a user to see a particular row, the row will be shown to that user.

If a user is a member of multiple groups, the user will be able to see all the rows that are visible to all of the groups, so the most permissive policy is used.
