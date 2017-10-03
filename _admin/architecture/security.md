---
title: [Data and object security]
tags:
keywords: "data,security,row level security,privileges"
last_updated: tbd
summary: "Understand how to secure your data and other key information in ThoughtSpot."
sidebar: mydoc_sidebar
---
ThoughtSpot provides these features for protecting data security:

* Object security
* Row level security
* Column level security
* System privileges

## Object Security

Object security is the ability for users to see content within ThoughtSpot.
Objects can be tables, columns in tables, worksheets, pinboards, and saved
answers.

Users gain access to objects when an object owner share_answers it with them.
Owners can share with individual users or with entire groups, giving access to
anyone within that group. Owners can share with edit or view options.

Currently, you cannot restrict someone who has had content shared with them from
sharing with others. Also, a user who belongs in a group can automatically share
with anyone else in the group. This has implications on setting up privileges
and applying row level security.


## Row level security (RLS)

Row level security controls what data a user can see in each shared piece of
content. Even if a user has access to a worksheet, for example, they can only
see rows from the tables they have been given permission to see.

RLS is applied at the table level and automatically applied every time. Also, in
queries where there are tables with table filters, all joins are always
enforced, to avoid accidentally allowing users access to data they shouldn’t
see. RLS requires three things:

* A table filter with a column (possibly in a joined table) that can be used to
determine who can see a row, for example, account id or tenant id.

* A group that can be associated with the row of data by name. For example, if the
column is `account_id` and has values of `1`, `2`, `3`, users can be assigned to groups
`group_1`, `group_2`, `group_3` and then only see their data.

* Users must be assigned to the given group. If they are not assigned to a group
that has access, they do not see any data.

Administrative users can always see all rows of data since RLS is not applied
for these users.

RLS supports a hierarchy of groups allowing you to give access to some users
across multiple groups.

Keep in mind that users within a group can share with one another group. This
means that putting everyone into a company group for RLS means they can share
with anyone in the company.

## Column level security (CLS)

Column level security means only allowing users to see certain columns in a
table. This can be accomplished by only sharing certain columns with groups of
users from a table.

However, most of the time users are given access to worksheets instead of
columns. There is currently no way to only share certain worksheet columns with
certain groups. If you need this capability, you must create different
worksheets with the columns you want.

Also, note that because someone can share with anyone in a group they belong to,
that means they could potentially share restricted columns. For example, assume
that HR has a column with salary information in a worksheet that only HR has
access to. An HR person could create an answer with the salary information and
share with someone outside of HR. That person would now have access to the
salary information.

There are updates planned in future versions that will provider stricter access
to columns and stronger governance of data.

## System privileges

System privileges refer to what a user can do in ThoughtSpot. For example, can
they upload or download data or share with all users. These privileges are
defined on a group level and inherit downwards. So, if Group A had child groups
Group B and Group C, then any privilege given to Group A is also available to
Group B and Group C. What this often means is that separate sets of groups are
required to manage privileges. Non-shareable groups (planned for version 4.4)
should eliminate this potential issue.
