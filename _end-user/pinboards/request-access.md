---
title: [Request access]
last_updated: 3/12/2021
summary: "If you cannot view a pinboard or answer in ThoughtSpot, you can request access to it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Request view access
If you try to share a pinboard or answer by copying and pasting a link to it, the person you share it with may have to request access. You can avoid this by sharing [using the sharing icon.]({{ site.baseurl }}/end-user/pinboards/share-pinboards.html)

If a user receives a link to a pinboard or answer for which they have neither view nor edit access, the **Request Access** page appears.

![Request access]({{ site.baseurl }}/images/sharing-requestaccess.png "Request access")

The user adds an optional message explaining why they need to view or edit the pinboard or answer, and clicks **Request access** to send an email to the pinboard or answer owner. The email also goes to your administrators, anyone with **edit** access for the pinboard or answer, and to [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html).

A message appears, telling the user who owns the pinboard or answer. ThoughtSpot sends an email notification, requesting view or edit access, to the pinboard or answer owner, anyone with **edit** access for the pinboard or answer, all cluster administrators, and ThoughtSpot Support. The email includes the user's optional message. Any of the users who got the request then shares the pinboard or answer with the user.

{% include tip.html content="You can turn off sharing request emails for users with edit access on objects. To turn off these emails for users with edit access, contact ThoughtSpot Support." %}

## Request edit access
You may have view only access to a pinboard or answer. If you don't have edit privileges, you cannot save any changes you make to the pinboard or answer. You cannot pin an answer to that pinboard, change the pinboard or answer layout, or delete a visualization.

If you have view only access, the locked icon ![]({{ site.baseurl }}/images/icon-locked-10px.png "The locked icon"){: .inline} appears next to the pinboard or answer name.

If you click on that icon, it allows you to request access to the pinboard or answer to edit it. You can add an optional message.

![Request edit access]({{ site.baseurl }}/images/request-edit-access.png "Request edit access")

After you click **Request access**, the system tells you who it emailed to request access. ThoughtSpot sends an email notification, requesting view or edit access, to the pinboard or answer owner, anyone with **edit** access on the pinboard or answer, all cluster administrators, and ThoughtSpot Support. The email includes the user's optional message. Any of the users who got the request provides the user with view or edit access.

## Request data access
If you don't have access to a pinboard or answer's underlying data source, you cannot use features that involve columns based on data you do not have access to. For example, you cannot filter on the pinboard or answer, drill down, or run SpotIQ. If you attempt to use these features, a notification appears, telling you to request access to the underlying data source.

![Access required]({{ site.baseurl }}/images/sharing-downloadaccessrequired.png "Access required")

If you do not have access to the data source, the locked icon ![]({{ site.baseurl }}/images/icon-locked-10px.png "The locked icon"){: .inline} appears next to the pinboard or answer name.

If you click on that icon, it allows you to request access to the data source to interact with the pinboard or answer. You can add an optional message.

![Request data access]({{ site.baseurl }}/images/request-data-access.png "Request data access")

To see which data source you need access to, click the down icon next to **Data sources**:  

![View data sources]({{ site.baseurl }}/images/request-access-data-sources.png "View data sources")

After you click **Request access**, the system tells you who it emailed to request access. ThoughtSpot sends an email notification, requesting data access, to the pinboard or answer owner, anyone with **edit** access for the pinboard or answer, all cluster administrators, and ThoughtSpot Support. The email includes the user's optional message. Any of the users who got the request then provides the user with data access.
