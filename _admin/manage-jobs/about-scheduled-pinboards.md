---
title: ["Job management (scheduled Liveboards)"]
last_updated: 11/04/2021
summary: "All jobs on your cluster will appear on the Jobs Management page. You can also view jobs for individual Liveboards under the Liveboard Actions dropdown."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The **Jobs Management** page found on the **Admin** section in the ThoughtSpot web application allows you to create and manage jobs, namely scheduled Liveboards. Scheduled Liveboards should help with preparing for recurrent meetings, when reviewing the same Liveboard is necessary. They should also be useful when you have metrics you want to monitor at a consistent interval, like daily or monthly sales targets.

You can get Liveboards emailed to you on a regular basis and do analysis offline.
This introduces an additional format for you to consume and share Liveboards with others, including those who don’t have a ThoughtSpot account.

[Contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) if scheduled Liveboards is not enabled on your cluster, or you can run the command `tscli scheduled-pinboards` to enable it yourself.

## Scheduled Liveboard creators

Administrators and users with can schedule Liveboard privilege can schedule and manage Liveboard jobs. These scheduled Liveboard creators must have at least edit-only and view-only rights to the Liveboard they want to share.

{% include warning.html content="It is recommended that admins carefully choose who to give can schedule Liveboard privilege to, since there is a possible security hole where a user with limited access can get a Liveboard email with all access data." %}

## Row level security

The scheduled Liveboards respect row level security rules. This means if the recipients are users in ThoughtSpot, then they can only see data based on their own access to the Liveboard. If the user does not have at least view-only access to the Liveboard, then they will not see anything in the email. However, if the recipients are from outside of the cluster, then they will have access to the dataset of the Liveboard based on the sender’s permissions.

## Scheduled Liveboard formats

The Liveboard visualizations are attached to the scheduled email as CSV or PDF files. Saved configurations such as Liveboard filters are applied to the attachments. Refer to the table to see how the Liveboard data is represented in each file format.

|CSV|PDF|
|---|---|
|The CSV file gets data only for table visualizations.|The PDF file gets data for all visualizations.|
|The email has n CSV attachments, where there are n table visualizations in the Liveboard.|The email has only one attachment file, which includes every visualization on its own page.|
|Table visualizations have all data rows that they're supposed to have.|Table visualizations include only the first 100 rows.|
|In the case of a corrupted Liveboard: no email is sent. An error message indicating failure to export data is visible on the Admin Jobs Management page.|In the case of a corrupted Liveboard: the PDF attachment has empty/error screenshots.|
|In the case of a corrupted visualization: an email with the visualizations whose data can be exported is sent. An error message indicating visualization export error is visible on the Jobs Management page.|In the case of a corrupted visualization: the PDF attachment has empty/error slots for the corrupted visualizations.|

The size of each email is limited to 25 MB, which matches most email services size limitations.

And the total number of recipients for a scheduled Liveboard job cannot exceed the default of 1000.

## Related information

For information on creating a Liveboard, see the [Schedule a Liveboard job]({{ site.baseurl }}/admin/manage-jobs/schedule-a-pinboard-job.html).
