---
title: [DataFlow Tips]
last_updated: 03/30/2021
summary: "We have several tips for managing the data sync in your organization."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="truncate-table"}
## Truncate table

Use the `<a href="{{ site.baseurl }}/reference/data-importer-ref.html">--empty_target</a>` tsload option to truncate the table, and remove `delete` from the target query.

In "tsload options" sync parameter, the default is `--empty_target false`. You can change this by explicitly adding `--empty_target true`.

{: id="epochs"}
## Include Epoch date and timestamp

Epoch date and time options in the TQL expression editor let you configure pre-sync and post-sync scripts with greater control.

<dl>
<dlentry id="current-timestamp-epoch">
<dt>$$CurrentTimestampEpochAdd</dt>
<dd>Example of pre-sync script: <br/>
<code>delete from "DataFlow_BD"."falcon_defaut_schema"."test_tql" where C_DATE > $$CurrentDateEpochAdd(1)</code></dd>
</dlentry>

<dlentry id="current-date-epoch">
<dt>$$CurrentDateEpochAdd</dt>
<dd>Example of post-sync script: <br/>
<code>delete from "DataFlow_BD"."falcon_defaut_schema"."test_tql" where C_TIMESTAMP > $$CurrentTimestampEpochAdd(1)</code></dd>
</dlentry>
</dl>

{: id="last-sync"}
## Track last sync start time

When setting up syncing, the Advance setup column mapping between external data source and ThoughtSpot offers a new system parameter, `$$LastSyncStartTime`. Use it in the **Add new formula** interface to manage sync updates.

<dl>
<dlentry id="last-sync-start-time">
<dt>$$LastSyncStartTime</dt>
<dd>Example:<br/>
<code>"LAST_ACTIVITY_DATE"= $$LastSyncStartTime</code></dd>
</dlentry>
</dl>

After you apply the new formula, it appears in the **Map columns** listing.
