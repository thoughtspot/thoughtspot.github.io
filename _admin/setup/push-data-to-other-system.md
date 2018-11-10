---
title: [Push data to another system from ThoughtSpot]
keywords: push, operationalize,data,direct,API
last_updated: 11/4/2018
summary: "This procedure shows how to push data from ThoughtSpot to another system"
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Push data to another system from ThoughtSpot

Starting with ThoughtSpot version 5.0, you can operationalize your data by pushing it to an external system, so actions on that data can be automated. You can create a custom action that allows a user in ThoughtSpot to manually push the results of a search to the other system for processing.

For example, a ThoughtSpot search on customers with past due accounts could push a list of addresses to a system that generates a payment reminder mailing.

You must be licensed for ThoughtSpot Extended Enterprise Edition to enable pushing data to another system. To have this functionality turned on, contact ThoughtSpot Support.

## Set up your system to receive the pushed data

This procedure shows how to set up your system to receive data pushed from ThoughtSpot:

1. Enable the API.
2. Set up your system to receive and parse the data file that will be sent.

## Set up ThoughtSpot to push data

This procedure shows how to set up ThoughtSpot to push data to another system. To create the custom action you'll need, you must have the [**Can administrator ThoughtSpot** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html).

1. Click on **Admin** from the top menu.

2. Click **Action Customization**.

3. Click **Add custom action item**.

4. Fill in the details for your custom action:






NEED DETAILS HERE
