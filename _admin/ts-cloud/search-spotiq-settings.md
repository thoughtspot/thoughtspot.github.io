---
title: [Managing search and SpotIQ settings]
last_updated: 2/23/2021
summary: "Manage indexing and SpotIQ settings for your organization from the Admin Console."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can manage certain advanced settings for your organization from the Admin Console. This includes enabling, disabling, and configuring the following features: SpotIQ, column indexing, the default answer experience, and summaries and headlines.

Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Search & SpotIQ** from the side navigation bar that appears.

![Admin Console - Search & SpotIQ settings]({{ site.baseurl }}/images/admin-portal-search-settings.png "Admin Console - Search & SpotIQ settings")

You can update the [search settings](#search), [SpotIQ settings](#spotiq), and [answer experience](#new-answer-experience) from this page.

{% include note.html content="Changing these settings results in a service interruption for all users for approximately 2 minutes. To minimize disruption, consider making your changes during a scheduled maintenance window." %}

{: id="search"}
## Search settings
Under **Search settings**, you can configure ThoughtSpot's indexing behavior, and enable or disable summaries and headlines.

To manage search settings, follow these steps:

1. Select the **Edit** button in the **Search Settings** section.

2. **Index columns**: Click on the toggle to enable or disable ThoughtSpot's indexing of columns in new Embrace connections. If you disable this feature, all columns from new Embrace connections are set to `DONT_INDEX`. Note that this change only applies to columns from *new* Embrace connections. You must manually set columns that already exist to `INDEX` or `DONT_INDEX`.

3. **Index frequency**: Select a frequency for column indexing from the dropdown. The options are 8, 16, or 24 hours.

4. **Summaries and headlines**: Click on the toggle to enable or disable the display of summaries and headlines.

3. Select **Save changes**. Alternatively, you can **Reset to default**. By default, ThoughtSpot indexes new columns at a frequency of 24 hours, and enables summaries and headlines.

{: id="spotiq"}
## SpotIQ settings
Under **SpotIQ settings**, you can enable or disable [SpotIQ analyze]({{ site.baseurl }}/spotiq/customization.html).

To enable or disable SpotIQ Analyze, follow these steps:

1. Select the **Edit** button in the **SpotIQ Settings** section.

2. Click on the toggle to enable or disable the feature.

3. Select **Save changes**. Alternatively, you can **Reset to default**. By default, SpotIQ Analyze is disabled.

{: id="new-answer-experience"}
## Answer experience
Under **Answer experience**, you can select the default answer experience for your users. Refer to [new answer experience]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html) for more information about the new and classic answer experiences.

To select the default answer experience for your users, follow these steps:

1. Select the **Edit** button in the **Answer experience** section.

2. Next to **New answer experience**, click on the toggle to enable or disable the feature globally. If you disable the feature globally, users do not have the option to turn the new answer experience on individually from their profile.

3. If you enable the new answer experience, you can choose the default experience for your users. Choose either the *classic experience*, or the *new experience*. If you choose the classic experience, users have the option to turn the new answer experience on individually from their profile, but it is not on by default.
