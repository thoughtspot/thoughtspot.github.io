---
title: [SpotApps]
last_updated: 7/28/2020
summary: "Use SpotApps to gain insights into your Salesforce, accounts receivable, or procurement instances."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{% include note.html content="The SpotApps feature is in <strong>beta</strong> for 6.2. Talk to your ThoughtSpot contact if you are interested in SpotApps." %}

SpotApps let you examine your existing Salesforce, accounts receivable, and procurement data, using pre-built applications.

When you first provision ThoughtSpot, you have to put in some work to load and model your data, and prepare it for your users. SpotApps can streamline this process, by providing you with pre-built ThoughtSpot objects based on your existing Salesforce, accounts receivable, and procurement data.

Once you connect to your data, you can work with your ThoughtSpot contacts to deploy ThoughtSpot's scriptable applications, or SpotApps, which provide an easy way for you to start getting value from your data.

Currently, ThoughtSpot offers three pre-built SpotApps: Salesforce, procurement, and accounts receivable. These applications leverage your data to provide pre-built Pinboards, Answers, and Worksheets.

For example, if you choose to use the Procurement SpotApp, the **Search** page contains a Worksheet for your users to query on, called "Procurement Analytics Solution."

![Procurement Worksheet Search]({{ site.baseurl }}/images/scriptable-app-procurement-search.png "Procurement Worksheet Search")

Your users may want to understand what Answers and Pinboards are, and gain insights from them, before they start searching themselves. They can view and interact with any of the pre-existing objects, such as this Exec Summary Pinboard:

![Exec summary]({{ site.baseurl }}/images/exec-summary-pinboard.png "Exec summary")

When you are ready to move to a production environment, you can migrate these Pinboards, Answers, and Worksheets to your new environment using [Scriptability]({{ site.baseurl }}/admin/scriptability/scriptability.html), ThoughtSpot's flat-file editing and migration system for ThoughtSpot objects.
