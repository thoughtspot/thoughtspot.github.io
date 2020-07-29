You can view system and usage information for your ThoughtSpot cluster from the Administration Portal. The **System Overview Pinboard** contains several charts and tables that track monthly active users, top Pinboards by number of views, today's users, and so on. To view this Pinboard, navigate to the Administration Portal by clicking on the **Admin** tab from the top navigation bar. Select **Overview** from the side navigation bar that appears.

![Admin Portal - Overview Pinboard]({{ site.baseurl }}/images/admin-portal-overview-pinboard.png "Admin Portal - Overview Pinboard")

## Understand the System Overview Pinbaord

The **System Overview Pinboard** page consists of standard ThoughtSpot Answers that update in real time and rely on internal system data. The Answers rely on underlying system worksheets, which are available to ThoughtSpot administrators. The information in these worksheets updates hourly from internal tables that collect monitoring statistics.  

The **more options menu** ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} for the Answers in this Pinboard contains fewer options than the traditional menu. You can **SpotIQ analyst**, **download**, **edit,** or **present** the Answer. When you **edit** the Answer, you see the query that ThoughtSpot built the Answer on. You can also copy the Answer's embed link, use [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html) on the Answer, or interact with the Answer by [drilling down]({{ site.baseurl }}/complex-search/drill-down.html). While you can interact with and change a copied version of the Answer, you cannot save changes to the underlying query.

The following charts are available on the **System Overview Pinboard**: [space utilization](#space-utilization), [monthly active users](#mau), [monthly ad-hoc searches](#monthly-searches), [monthly Pinboard views,](#monthly-pb-views), [top users last month](#top-users), [top Pinboards last month](#top-pinboards), [ad-hoc search by user](#searches-user), and [today's users](#users-today).

{: id="space-utilization"}
## Space Utilization

The **Space Utilization** chart is one of the available charts for you to use
when checking the cluster overview. This line chart displays the total capacity
and estimated used capacity over time.

![Space utilization]({{ site.baseurl }}/images/admin-portal-overview-pinboard-space-utilization.png "Space Utilization")

The x-axis is by time and the y-axis measures the size in GB. You can zoom in
and see daily or hourly utilization data. So, in the **Space Utilization** chart
above, the green line shows the amount of capacity in use in the system, while
the red line shows the total capacity. An increase in the red line at the end of
a time period indicates the addition of extra hardware, resulting in increased
capacity.

The query for this Answer is the following:


```
day of timestamp
total capacity (gb)
total used space (gb)
daily
last 90 days last 25 hours
total capacity (gb) > 0
total used space (gb) > 0
```

The chart relies on the `TS: Internal Table Wise Capacity WS` worksheet. It
tracks  total used space, which consists of raw uncompressed data, including
replication.

{: id="mau"}
## Monthly Active Users

This chart shows the number of active users in the system over the last four months, and during the current month. An active user is defined as a user who has logged in at least one time in the defined time interval, in this case months.

The query for this Answer is the following:

```
monthly
last 4 months this month
active users
user != {null}
```

This query relies on the `TS: BI server` worksheet.

{: id="monthly-searches"}
## Monthly Ad-hoc Searches

Number of ad-hoc searches (queries) issued per month. An ad-hoc query is defined as any search or change to a search that builds a new Answer (result). An ad-hoc search can also be generated through SpotIQ or another UI/API interaction.

ThoughtSpot considers all of the following as ad-hoc searches (queries):

* User edits tokens (boxed terms) in the search bar.
* User opens an existing saved Answer and makes changes to tokens in the search bar.
* User opens an existing saved pinboard, edits a visualization, and makes change to the search tokens.
* Searches initiated by an API call for data with runtime filters

It is not considered a search (query) in this context if a user opens an existing saved
aggregated worksheet and makes changes to its underlying
query.

The query for this Answer is the following:

```
ad-hoc search
user action = 'answer_pinboard_context' 'answer_saved' 'answer_unsaved'
monthly
last 4 months this month
```

This Answer relies on data from the `TS: BI Server` worksheet.

{: id="monthly-pb-views"}
## Monthly Pinboard Views

Number of times a saved pinboard is viewed by a user. These scenarios are
considered pinboard views:

* User opens an existing saved pinboard.
* User opens an embedded pinboard from a URL.
* Pinboard data is accessed using the an API.

These scenarios are not considered pinboard views:

* A user opens SpotIQ tab pinboards.
* A user opens admin tab pinboards.
* The system loads a pinboard on the homepage.
* The system loads the 'learn how to use ThoughtSpot' pinboard.

The query underlying this Answer is:

```
pinboard views
user action = 'pinboard_embed_view' 'pinboard_tspublic_no_runtime_filter' 'pinboard_tspublic_runtime_filter' 'pinboard_view'
monthly
last 4 months this month
```

The query uses the `TS: BI Server` data source.

{: id="top-users"}
## Top Users Last Month

This Answer shows the top ThoughtSpot users ranked by number of actions
the users performed in the last 30 days. The possible user actions include:

{% include content/user-actions.md %}

The query underlying this Answer is:

```
top 10
ranked by user actions
user action != 'invalid'
user != {null}
user
last 30 days today
```
The query uses the `TS: BI Server` data source.

{: id="top-pinboards"}
## Top Pinboards Last Month

This Answer shows the top ThoughtSpot Pinboards ranked by number of views in the last 30 days. 

The query underlying this Answer is:

```
top 10
ranked by pinboard views
user action = 'pinboard_embed_view' 'pinboard_tspublic_no_runtime_filter' 'pinboard_tspublic_runtime_filter' 'pinboard_view'
pinboard != {null}
pinboard
last 30 days today

```
The query uses the `TS: BI Server` data source.

{: id="search-users"}
## Ad-hoc search by user
This Answer shows the top ten ThoughtSpot users ranked by the number of ad-hoc searches they have completed.

The query underlying this Answer is:

```
top 10
ad-hoc search
user action = 'answer_pinboard_context' 'answer_saved' 'answer_unsaved
by user
sort by ad-hoc search
```
The query uses the `TS: BI Server` data source.

{: id="users-today"}
## Today's users
This Answer shows all users who logged in to ThoughtSpot today.

The query underlying this Answer is:

```
latest time
by user
user !={null}
today
```
The query uses the `TS: BI Server` data source.
