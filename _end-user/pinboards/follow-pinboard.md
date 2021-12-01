---
title: [Following Liveboards]
last_updated: 12/1/2021
summary: "In ThoughtSpot, you can follow Liveboards and schedule email notifications to regularly review the visuals that represent dynamic data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

{% include deprecation.html content="This feature is now deprecated. You may not use it starting with the January Cloud release. Instead, create a Liveboard schedule. A Liveboard schedule emails a PDF of the Liveboard to you on a regular schedule. Your existing Liveboard follows will be migrated to Liveboard schedules. For details, see Deprecation Announcements." %}

When you follow a Liveboard, ThoughtSpot sends you regular emails that contain the snapshot of the Liveboard. You can change the scheduling of this email to suit your business needs.

{: id="pinboard-follow"}
## Follow Liveboards

Complete the following steps to follow a Liveboard:

1. Click **Liveboards** on the top navigation bar.

     ![]({{ site.baseurl }}/images/click-pinboards.png "Liveboards")

2. On the Liveboard list page, select a Liveboard by clicking on it.

3. Click **Follow** at the top right corner of the Liveboard.

   ![Follow Liveboard]({{ site.baseurl }}/images/follow-pinboard.png "Follow Liveboard")

   This action opens the scheduler.  See [Schedule Liveboard reports](#pinboard-follow-schedule).

Notice that after you configure the schedule, the Liveboard appears as **Following**.

![Followed Liveboard]({{ site.baseurl }}/images/followed-pinboard.png "Followed Liveboard")

{: id="pinboard-follow-schedule"}
## Schedule Liveboard reports  

In the **Follow** scheduler, specify the email schedule by marking the appropriate options in the pulldown menus. The default schedule is weekly, on the day and time when you configure the schedule.

<!--![Schedule the notifications]({{ site.baseurl }}/images/follow-schedule.png "Schedule the notifications")-->

<!--![Schedule the notifications]({{ site.baseurl }}/images/pinboard-follow-schedule.png "Schedule the notifications")-->

{% include content/schedule-details.md %}

![Schedule weekly Liveboard notifications]({{ site.baseurl }}/images/pinboard-follow-schedule-weekly.png "Schedule weekly Liveboard notifications")

![Schedule daily Liveboard notifications]({{ site.baseurl }}/images/pinboard-follow-schedule-daily.png "Schedule daily Liveboard notifications")

![Schedule monthly Liveboard notifications]({{ site.baseurl }}/images/pinboard-follow-schedule-monthly.png "Schedule monthly Liveboard notifications")

Click **Save**.

If the user account is not configured with an email, you must supply one at this time.

{: id="schedule-change"}
## Change the schedule

To change the existing time interval and the timing of notifications, click **Following** in the top right corner of the Liveboard.

When the scheduling interface appears, make the necessary changes, and click **Save**.

{: id="pinboard-unfollow"}
## Unfollow Liveboard

To stop following a Liveboard, click **Following** in the top right corner.

When the scheduling interface appears, click **Unfollow**.

![Unfollow Liveboard]({{ site.baseurl }}/images/pinboard-unfollow.png "Unfollow Liveboard")
