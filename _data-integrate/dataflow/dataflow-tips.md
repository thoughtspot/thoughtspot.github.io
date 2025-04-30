---
title: [DataFlow Tips]
last_updated: 08/05/2021
summary: "We have several tips for managing the data sync in your organization."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="truncate-table"}
## Truncate table

Use the [`--empty_target`]({{ site.baseurl }}/reference/data-importer-ref.html) tsload option to truncate the table, and remove `delete` from the target query.

In "tsload options" sync parameter, the default is `--empty_target false`. You can change this by explicitly adding `--empty_target true`.

{: id="epochs"}
## Include Epoch date and timestamp

Epoch date and time options in the TQL expression editor let you configure pre-sync and post-sync scripts with greater control.

<dl>
<dlentry id="current-timestamp-epoch">
<dt>$$CurrentTimestampEpochAdd</dt>
<dd>Example of pre-sync script: <br/>
<code>delete from "DataFlow_BD"."falcon_default_schema"."test_tql" where C_DATE > $$CurrentDateEpochAdd(1)</code></dd>
</dlentry>

<dlentry id="current-date-epoch">
<dt>$$CurrentDateEpochAdd</dt>
<dd>Example of post-sync script: <br/>
<code>delete from "DataFlow_BD"."falcon_default_schema"."test_tql" where C_TIMESTAMP > $$CurrentTimestampEpochAdd(1)</code></dd>
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

{: id="tsload-date-time"}
## Specify tsload datetime format

To avoid datetime conversion errors when loading csv files through Dataflow, specify the datetime format in the **sync connector properties** window. Use **tsload options** to override default settings in the UI, for example the default "%H:%M:%S" setting for time format.

To specify your datetime format within DataFlow, follow these steps:
<ol>
<li>Open the <strong>Advanced setup</strong> interface by clicking the toggle.</li>
<li>Choose the <strong>Sync properties</strong> tab.</li>
<li>Scroll to <strong>Sync connector properties</strong> and click the toggle to expand.<br/>
For this example, our data is in the format "%d/%m/%Y %H:%M", or "13/05/2021 10:30", with no data for the seconds value.</li>
<li>Specify the datetime format as follows: <br/>
<dl>
<dlentry><dt>Date style:</dt><dd>"DMY"</dd></dlentry>
<dlentry><dt>Date delimiter:</dt><dd>"/"</dd></dlentry>
<dlentry><dt>Time style:</dt><dd>"24HOUR"</dd></dlentry>
<dlentry><dt>Time delimiter:</dt><dd>":"</dd></dlentry>
</dl>
</li>
<li>To override the default datetime format, "%H:%M:%S", enter <code>--date_time_format '%d/%m/%Y %H:%M'</code> under <strong>tsload options</strong>.</li>
<li>Click <strong>Save</strong>. Alternatively, click <strong>Save and sync now</strong> to save your work and sync data at the same time.</li>
</ol>
