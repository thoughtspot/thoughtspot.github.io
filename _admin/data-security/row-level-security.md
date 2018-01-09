---
title: [How rule-based RLS works]
tags: [bestpractices]
keywords: tbd
last_updated: tbd
summary: "Use rule-based RLS to a group's access to data. Users see only accessible row data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Row level security works at the group level and applies to tables. A table's RLS
rules also apply to any worksheets and pinboards based on that table. You cannot
set RLS rules on worksheets.

## Groups, users, and rules

A rule restricts user access to data _already_ shared directly with a user or a
group that user belongs to.

By default, all group members can see all rows for any data that is shared with
the group. So, if someone shares a table or a worksheet with a group, by default,
its member users can see everything.

When you add new users, the system does not supply a system default group. There
are several ways a user can get access to _existing data_ in the system:

- by having data shared with them or a group they belong to
- by belonging to a group that has data access
- by belonging to a group that has the administrative privileges  

To restrict individual user data access, you must add them to a group that an
RLS user restricts.


## Examples of RLS rules

An RLS rule evaluates against the `tsgroups` system variable. This variable
returns all the groups for the currently authenticated (logged in) user.
ThoughtSpot filters a tables rows by evaluating a rule against the current user.
If the rule evaluates to true, a user can see that row. An RLS rule has the
format:

`COLUMN_FILTER` **= tsgroups**

So, if a table row contains column data that matches a filter (true), the user
can see that row's data. If the user does not have access, they see the message
`No data to display`.

Consider a simple example. Your company has `vendor-purchase` table such as:

 ![]({{ site.baseurl }}/images/rls-example0.png "Simple table")

You want to give your vendors the ability to see trends in company
purchases. You give vendor personnel access to ThoughtSpot _and_ add them to
self-titled vendor groups. So, all users from the Starbucks vendor are in the
`Starbucks` and all users from `round table` are in the `Round Table` group.
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
`Accounts Payable`. In this way, a good rule is `self maintaining` meaning  you
don't have to revisit the rule as your system changes.

## Multiple rules and multiple group membership

You can define multiple rules on table.  In this case, ThoughtSpot treats the
rules as additive. That is, they are applied using an `OR` operator. If any of
the rules evaluate to `true` for a user on a row, that row's data is visible.

If a user is a member of multiple groups, the user can see all the rows that are
visible to all of their groups. The most permissive policy is used.

Members of groups with **Can Administer RLS** are exempt from row-level security
(RLS) rules.  This is true regardless of whether the group membership is direct
or indirect (through a group hierarchy).

## Disable rules on a worksheet

Users with administrator privileges or **Has administration** privilege can
disable RLS rules on an individual worksheet. This is an all or nothing
operation, meaning all rules apply or none of the rules apply.

## Best practices for using Rule-Based Row Level Security

Use these best practices for Rule-Based Row Level Security:

-  Use **Share** is the first level of data access.

   Users and groups have no way to access any data without first having it
   shared with them. So, only share what they need.

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

  Complex rules can impact the performance a user sees. So, err on the side of
  simple rules rather than rules with a lot of logic if you can.


## Related information

* For a list of operators and functions you can use to build RLS rules see
[Row level security rules reference]({{ site.baseurl
}}/reference/rls-rule-builder-reference.html#).

* For information on bypassing rules on a worksheet, see ["Change inclusion, join,
or RLS for a worksheet]({{
site.baseurl}}/admin/worksheets/change-inclusion-rule.html#).
