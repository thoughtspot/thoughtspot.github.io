---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Disable data value suggestions

When you set Rule-Based Row Level Security, you need to first turn off search suggestions on data values.

When Rule-Based Row Level Security is set, it protects users from seeing data they shouldn't in worksheets and pinboards. However, the search suggestions are not filtered using Rule-Based Row Level Security, so it is possible someone could see a data value they should not in a search suggestion. Disabling suggestions on data values corrects this. Be sure and do this procedure before setting up Rule-Based Row Level Security.

1.   [Contact ThoughtSpot Support](../misc/contact.html#), and tell them that you will be setting up Rule-Based Row Level Security. Ask them to disable data value suggestions for you. 
2.   When this setting has been made, continue with [Access the Rule Builder](access_rule_builder.html#). 

