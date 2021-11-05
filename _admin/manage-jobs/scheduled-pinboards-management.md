---
title: [Scheduled Liveboards management]
last_updated: 11/04/2021
summary: "You can manage all scheduled Liveboards on the Jobs Management page under Admin."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Users who are not admins, but have the **Can schedule Liveboards** privilege, can only view Liveboard schedules they've created. You can select specific jobs and choose to pause, resume, edit, or delete them. You can have up to 50 scheduled jobs on your cluster at time. [Contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) if you'd like to increase this limit.

To view Liveboard schedules, navigate to **Data > Usage > Jobs Management**.

![]({{ site.baseurl }}/images/jobs_management.png "View Jobs Management page")

## Bulk actions

Select the scheduled Liveboards and use the **Delete**, **Resume**, and **Pause** buttons to perform these bulk actions. Deleting a Liveboard will also delete any schedules linked to it.

## Job statuses

Clicking on the row of a job will open a detailed view of every generated update of that job. You can see the start and end times of the job, as well as the status. Clicking on a job will show more information about the status updates.

 ![Liveboard job status]({{ site.baseurl }}/images/pinboard-job-status.png "Liveboard job status")

## Liveboard links

Click the scheduled Liveboard name link to jump to a Edit schedule page, where you can edit the schedule configurations.

You can also click the Liveboard link provided in the scheduled Liveboard emails to jump to the Liveboard in ThoughtSpot. In order to have the link direct you to the correct URL, you must first configure front end host and port access. [Contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) to configure these settings.
