---
title: [DataFlow Tips]
last_updated: 05/13/2021
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

{: id="tsload-date-time"}
## Specify tsload datetime format

To avoid datetime conversion errors when loading csv files through Dataflow, specify the datetime format within the **sync connector properties** window. You can use **tsload options** to override certain default settings in the UI, such as the default "%H:%M:%S" setting for time format.

To specify your datetime format within DataFlow:
<ol>
<li>Open the <b>Advanced setup</b> interface by clicking the toggle to open.</li>
<li>Choose the <b>Sync properties</b> tab.</li>
<li>Scroll down to <b>Sync connector properties</b> and click the toggle to expand. <br/>
For this example, our data is in the format "%d/%m/%Y %H:%M", or "13/05/2021 10:30", with no seconds data.</li>
<li>Specify the date style as "DMY".</li>
<li>Specify "/" as the date delimiter.</li>
<li>Specify the time style as "24HOUR".</li>
<li>Specify ":" as the time delimiter.</li>
<li>To override the default datetime format, "%H:%M:%S", enter <code>--date_time_format '%d/%m/%Y %H:%M'</code> under <b>tsload options</b>.</li>
<li>Save your work by clicking <b>Save</b>. <br/> Alternatively, click <b>Save and sync now</b> to save your work and sync data at the same time.</li>
</ol>
