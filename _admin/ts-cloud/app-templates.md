---
title: [SpotApps]
last_updated: 7/28/2020
summary: "Use SpotApps to gain insights into your Salesforce, accounts receivable, or procurement instances."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

SpotApps let you examine your existing Salesforce, accounts receivable, and procurement data, using pre-built applications.

When you first provision ThoughtSpot, you have to put in some work to load and model your data, and prepare it for your users. ThoughtSpot Cloud streamlines this process in several ways. You can create a connection to your data in Snowflake or Amazon Redshift, without bringing it into ThoughtSpot, through [Embrace]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

Once you connect to your data, you can work with your ThoughtSpot contacts to deploy ThoughtSpot's scriptable applications, or SpotApps, which provide an easy way for you to start getting value from your data.

Currently, ThoughtSpot offers three pre-built SpotApps: Salesforce, procurement, and accounts receivable. These applications leverage your data in Snowflake or Redshift to provide pre-built Pinboards, Answers, Views, and Worksheets.

For example, if you choose to use the Procurement SpotApp, the **Search** page contains a Worksheet for your users to query on, called "Procurement Analytics Solution."

![Procurement Worksheet Search]({{ site.baseurl }}/images/scriptable-app-procurement-search.png "Procurement Worksheet Search")

Your users may want to understand what Answers and Pinboards are before they start searching. They can view any of the pre-existing objects, such as this Exec Summary Pinboard:

![Exec summary]({{ site.baseurl }}/images/exec-summary-pinboard.png "Exec summary")

When you are ready to move to a production environment, you can migrate these Pinboards, Answers, Views, and Worksheets to your new environment using [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html), ThoughtSpot's flat-file editing and migration system for ThoughtSpot objects.
