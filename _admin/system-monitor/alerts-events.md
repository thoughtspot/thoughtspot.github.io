---
title: [Alerts and Events board]
last_updated: 7/28/2020
summary: "The Alerts and Events section shows notifications, alerts, and an audit
trail of cluster configuration changes."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can view alert information for your ThoughtSpot cluster from the Admin Console. The **System Alert Pinboard** contains information on alerts, configuration events, and notification events. To view this Pinboard, navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Alert** from the side navigation bar that appears.

![Admin Console - Alert Pinboard]({{ site.baseurl }}/images/admin-portal-alert-pinboard.png "Admin Console - Alert Pinboard")

This Pinboard contains three ThoughtSpot Answers: **Alerts**, **Configuration Events**, and **Notification Events**. You can **present** these Answers or copy their embed link.

## Alerts

 The fields on this Answer have the following meaning:

  <table>
  <colgroup>
     <col style="width:35%" />
     <col style="width:65%" />
  </colgroup>
     <tr>
        <th>Field</th>
        <th>Description</th>
     </tr>
     <tr>
        <th>Time</th>
        <td>
           When the alert was sent.
        </td>
     </tr>
     <tr>
        <th>Type</th>
        <td>
           The ID of the event.
        </td>
     </tr>
     <tr>
        <th>Message</th>
        <td>
           The text of the alert message.
        </td>
     </tr>
    </table>

For a full reference of possible alerts, see the [Alert code reference]({{ site.baseurl
}}/reference/alerts-reference.html#).

## Configuration Events

This system answer displays recent events that changed the configuration of the
system.This answer displays the **Time**, the
**User** that performed the action, and a **Summary** of the action.  

## Notification events

This answer displays notifications of data loads. The answer displays the **Time**, the
**User** that performed the action, and a **Summary** of the action.
Notifications are kept for 90 days before being discarded.
