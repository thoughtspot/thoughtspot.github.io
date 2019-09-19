---
title: [Set row level security rules]

last_updated: tbd
tags: [groups,security]
summary: "Explains the process for setting RLS rules."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When rule-based row level security (RLS) is set, it prevents users from seeing
data they shouldn't in tables and the objects derived from them. You must have
administrative rights on ThoughtSpot to set RLS rules.

Before you create a rule, make sure you have read [How rule-based RLS works]({{
site.baseurl }}/admin/data-security/row-level-security.html#).

## Create a rule on a table

You can set RLS rules _only_ on tables. To set up rule-based row level security,
do the following:

1. Click **Data**, and double-click a table.
2. Click **Row security**.
3. Click **+ Add row security**.

    ![]({{ site.baseurl }}/images/add_row_security.png "Add row security")

    The system displays the Rule Builder.

    ![]({{ site.baseurl }}/images/rls_rule_builder.png "The Rule Builder")

    You define row level security by creating an expression that gets evaluated
    for every row and group combination. This powerful feature can be used with
    up to thousands of groups.

4. Open the Rule Builder.
5. Give your rule a name.
6. Enter an expression for your rule.

   The rule gets evaluated against an authenticated user for every row and group
   combination. If the rule evaluates to true, the user can't see that row's
   data. Use the variable **ts_groups** to refer to the group name.

   ![]({{ site.baseurl }}/images/rls_enter_expression.png "Enter an expression")

    You can see a list of available operators by clicking on **Rule Assistant**.

    ![]({{ site.baseurl }}/images/rls_rule_assistant.png "The Rule Assistant")

    As you type, ThoughtSpot suggests formula syntax, variables, and column
    names. If you can't remember the exact column name or variable you want to
    use, the suggestions can help.

    When your expression is valid, a green indicator appears at the bottom of
    the Rule Builder.

7. Click **Save**.

The rule you created is listed in the rules. You can edit the rule or add more
rules by clicking **+ Add**.

## Test your rule with restricted and unrestricted users

To test your rule, log in as users in different groups. Search within the table
for data both that you test user can and can't access. Make sure your test users
are seeing the appropriate rows.

## Related information

* Administrators can bypass the RLS rules set on a the table at the worksheet
level. See how to ["Change inclusion, join, or RLS for a worksheet]({{
site.baseurl }}/admin/worksheets/change-inclusion-rule.html#) in this
documentation for more information.

* For a list of operators and functions you can use to build RLS rules see
[Row level security rules reference]({{ site.baseurl
}}/reference/rls-rule-builder-reference.html#).
