---
title: [Monitor headlines with SpotIQ]
summary: "You can monitor select Pinboards, and see how they change over time."
last_updated: 11/09/2019
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
With SpotIQ Monitor, you can follow headline metrics of your favorite Pinboards, and get daily updates in your mailbox, on your ThoughtSpot home page, or in the SpotIQ Follow management interface.

{: id="pinboard-follow"}
## Follow Pinboards
To monitor headlines, click the **Follow** icon in the top right corner of the relevant Pinboard.

![Monitor headlines with Follow]({{ site.baseurl }}/images/monitor-follow-pinboard.png "Monitor headlines with Follow")

This action opens the scheduler.  See [Schedule monitoring](#monitor-schedule).

Notice that after you configure the schedule, the Pinboard appears as **Following**.

![Monitored Pinboard]({{ site.baseurl }}/images/monitor-followed-pinboard.png "Monitored Pinboard")

{: id="monitor-schedule"}
## Schedule monitoring  

In the **Follow** scheduler, specify the time interval and the timing of notifications.

![Schedule the monitoring]({{ site.baseurl }}/images/monitor-follow-schedule.png "Schedule the monitoring")

<dl>
  <dlentry>
     <dt>Weekly</dt>
     <dd>By default, the schedule is weekly, on the day of the week and at the time you create the schedule.<br>
     You can select another day of the week, and then set the time.</dd>
  </dlentry>
  <dlentry>
    <dt>Daily</dt>
    <dd>Specify <em>every weekday</em> (every working day), or <em>every day of the week</em>. Then set the time.</dd>
  </dlentry>
  <dlentry>
    <dt>Monthly</dt>
    <dd>Specify the day of the month, from <em>1</em> onwards. Then set the time.</dd>
  </dlentry>
</dl>

Click **Save**.

If the user account is not configured with an email, you must supply one at this time.

{: id="schedule-change"}
## Change the monitoring schedule

To change the existing time interval and the timing of notifications, click **Following** in the top right corner of the Pinboard.

When the scheduling interface appears, make the necessary changes, and click **Save**.

{: id="pinboard-unfollow"}
## Unfollow Pinboard

To stop monitoring a Pinboard, click **Following** in the top right corner.

When the scheduling interface appears, click **Unfollow**.

![Unfollow Pinboard]({{ site.baseurl }}/images/monitor-unfollow.png "Unfollow Pinboard")

{: id="monitor-interface"}
## Manage monitored pinboards

To manage the Pinboards you follow, click **SpotIQ** in the main navigation across the top, and then select **Follow**.

The **Follow** interface lists all headlines you monitor, and summarizes the changes from last run.
  ![SpotIQ Follow management interface]({{ site.baseurl }}/images/spotiq-monitor.png "SpotIQ Follow management interface")

{: id="monitor-detail"}
## Monitoring details

Click each headline in the **SpotIQ >> Follow** interface to see the detailed performance over time, examine each interval, all at the time scale you choose. You can change your visualization to table view, or to another chart type to better visualize your changing metric.

  ![Metric performance over time]({{ site.baseurl }}/images/spotiq-monitor-detail.png "Metric performance over time")
