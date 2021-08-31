---
title: [Managing search and SpotIQ settings]
last_updated: 8/4/2021
summary: "Manage indexing and SpotIQ settings for your organization from the Admin Console."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can manage certain advanced settings for your organization from the Admin Console. This includes enabling, disabling, and configuring the following features: SpotIQ, column indexing, and summaries.

Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Search & SpotIQ** from the side navigation bar that appears.

![Admin Console - Search & SpotIQ settings]({{ site.baseurl }}/images/admin-portal-search-settings.png "Admin Console - Search & SpotIQ settings")

You can update the [search settings](#search) and [SpotIQ settings](#spotiq) from this page.

{% include note.html content="Changing these settings results in a service interruption for all users for approximately 2 minutes. To minimize disruption, consider making your changes during a scheduled maintenance window." %}

{: id="search"}
## Search settings
Under **Search settings**, you can configure ThoughtSpot's indexing behavior, and enable or disable summaries.

To manage search settings, follow these steps:

1. Select the **Edit** button in the **Search Settings** section.

2. **Index columns**: Click on the toggle to enable or disable ThoughtSpot's indexing of columns in new Embrace connections. If you disable this feature, all columns from new Embrace connections are set to `DONT_INDEX`. Note that this change only applies to columns from *new* Embrace connections. You must manually set columns that already exist to `INDEX` or `DONT_INDEX`.

3. **Index frequency**: Select a frequency for column indexing from the dropdown. The options are 8, 16, or 24 hours.

4. **Table summaries in adhoc search**: Click on the toggle to enable or disable the display of summaries in adhoc search. This setting only affects the display of summaries for users on the [new answer experience]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience), not the classic experience.

    {% include note.html content="This setting does not affect the display of summaries in saved objects, such as saved answers, pinned tables, or headline tiles in pinboards." %}

3. Select **Save changes**. Alternatively, you can **Reset to default**. By default, ThoughtSpot indexes new columns at a frequency of 24 hours, and enables summaries.

{: id="spotiq"}
## SpotIQ settings
Under **SpotIQ settings**, you can enable or disable [SpotIQ analyze]({{ site.baseurl }}/spotiq/customization.html).

To enable or disable SpotIQ Analyze, follow these steps:

1. Select the **Edit** button in the **SpotIQ Settings** section.

2. Click on the toggle to enable or disable the feature.

3. Select **Save changes**. Alternatively, you can **Reset to default**. By default, SpotIQ Analyze is disabled.
