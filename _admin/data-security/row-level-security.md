---
title: [How rule-based RLS works]
tags: [bestpractices,groups,performance,SysAdmin]
keywords: tbd
last_updated: tbd
summary: "Use rule-based RLS to a group's access to data. Users see only accessible row data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Row level security works at the group level and applies to tables. A table's RLS
rules also apply to any objects with data from that table. So, searches,
answers, worksheets, and pinboards that rely on a table's data fall under RLS
rules.

You cannot set RLS rules on worksheets, but administrators can disable existing
rules on individual worksheets. In this case, users with access to the worksheet
can see all its data.


## Privileges that allow users to set, or be exempt from, RLS

Users in the **Administrators** group or with the **Has administration
privilege** have full access to everything in the system. As a result:

* Row level security does not apply to them.
* They can create, edit, and delete RLS rules.
* They can also disable RLS rules on individual worksheets.

If your installation has enabled the **Can Administer RLS** privilege,
administrators can also grant **Can Administer RLS** to groups. Members of
groups with **Can Administer RLS** are exempt from row-level security (RLS)
rules. This is true regardless of whether the group membership is direct or
indirect (through a group hierarchy).

## Examples of RLS rules

An RLS rule evaluates against the `tsgroups` system variable. This variable
returns all the groups for the currently authenticated (logged in) user.
ThoughtSpot filters a table's rows by evaluating a rule against the
authenticated user. If the rule evaluates to true, a user can see that row. An
RLS rule has the format:

`COLUMN_FILTER` **= tsgroups**

So, if a table row contains column data that matches a filter (`true`), the user
can see that row's data. If the rule evalutes to `false`, the user does not have
access, they see the message `No data to display`.

Consider a simple example. Your company has `vendor-purchase` table such as:

 ![]({{ site.baseurl }}/images/rls-example0.png "Simple table")

You want to give your vendors the ability to see trends in company
purchases. You give vendor personnel access to ThoughtSpot _and_ add them to
self-titled vendor groups. So, all users from the Starbucks vendor are in the
`Starbucks` group and all users from `round table` are in the `Round Table` group.
Then, you set a **Row security** on the `vendor-purchase` table as follows:

 `VENDOR = tsgroups`

Only users in `Starbucks` group see `starbucks` data and so forth. Rules ignore
case inconsistencies and spaces are evaluated so `round table` in the data
matches the `Round table` group but not a group named `RoundTable` .

Rules can be simple or they can incorporate logic such as `if/then` rules. For
example, vendors should see their own data but your accounts payable group needs
to see all the vendor data:

`VENDOR = ts_groups or 'Accounts Payable' = ts_groups `

This rule continues to work as you add data from new vendor or team members to
`Accounts Payable`. In this way, a well-written rule is _self maintaining_,
meaning you don't have to revisit the rule as your system changes.

## Multiple rules and multiple group membership

You can define multiple rules on table.  In this case, ThoughtSpot treats the
rules as additive. That is, they are applied using an `OR` operator. If any of
the rules evaluate to `true` for a user on a row, that row's data is visible.

If a user is a member of multiple groups, the user can see all the rows that are
visible to all of their groups. The most permissive policy is used.

Members of groups with **Can Administer RLS** are exempt from row-level security
(RLS) rules.  This is true regardless of whether the group membership is direct
or indirect (through a group hierarchy).

## Best practices for using Rule-Based Row Level Security

Use these best practices for Rule-Based Row Level Security:

-  Use **Share** as the first level of data access.

   Non-administrative users and groups have no way to access any data without
   first having it shared with them. So, only share what you need.

   When you share, share worksheets. This is a general best practice.
   Worksheets simplify the data environment for end users; they only need to
   choose among a few sources, rather than many tables. Also, one worksheet can
   also  combine data from several tables.

-  Set row level security wherever you want to keep data secure.

    It is always a possible that a particular search only includes data from a
    single table, and a user will see something they shouldn't. So, protect your
    data by setting row level security wherever you want to keep data secure.

- Explicitly grant access for users that should see all rows.

    As soon as you define a rule on a table for one group, you prevent access by
    all others outside of that group hierarchy. Subsequent rules should
    specifically add groups that need access.

- Keep in mind that multiple rules on a table are additive with `or`.

  If you are concerned with security, start with very limited access. Then,
  expand the access as needed.

- Keep rules simple.

  Complex rules can impact the system performance. So, err on the side of
  simple rules rather than complex rules with a lot of logic.


## Related information

* To learn the procedure you follow for setting a rule, [Set RLS rules]({{ site.baseurl }}/admin/data-security/set-rls.html#)

* For a list of operators and functions you can use to build RLS rules see
[Row level security rules reference]({{ site.baseurl
}}/reference/rls-rule-builder-reference.html#).

* For information on bypassing rules on a worksheet, see [Change inclusion, join,
or RLS for a worksheet]({{
site.baseurl}}/admin/worksheets/change-inclusion-rule.html#).
