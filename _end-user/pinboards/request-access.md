---
title: [Request Access]
last_updated: 1/10/2020
summary: "If you cannot view a pinboard on ThoughtSpot, you can request access to it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Request view access
If you try to share a pinboard by copying and pasting a link to it, the person you share it with may have to request access. You can avoid this by sharing [using the sharing icon.]({{ site.baseurl }}/end-user/pinboards/share-pinboards.html)

If a user receives a link to a pinboard for which they have neither view nor edit access, the **Request Access** page appears.

{% include image.html file="sharing-requestaccess.png" title="Request access" alt="If you do not have view access to a pinboard, you can send an email requesting access to it." caption="Request access" %}

The user adds an optional message explaining why they need to view or edit the pinboard, and clicks **Request access** to send an email to the pinboard owner. The email also goes to your administrator, and to [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html).

A message appears, telling the user who owns the pinboard:

{% include image.html file="sharing-requested.png" title="Access requested" alt="When you send an email requesting access to a pinboard, ThoughtSpot tells you who owns the pinboard." caption="Access requested" %}

ThoughtSpot sends an email notification, requesting view or edit access, to the pinboard owner. The email includes the user's optional message. The owner then shares the pinboard with the user.

## Request edit access
You may have view only access to a pinboard. If you don't have edit privileges, you may not be able to download the pinboard or use SpotIQ or other features on the answers in a pinboard. If you attempt to download the pinboard or use other features requiring edit access, a notification appears, telling you to request access to the underlying data source.

{% include image.html file="sharing-downloadaccessrequired.png" title="Access required" alt="If you attempt to complete an action that you cannot do with view only access, a notification appears, telling you to request access to the underlying data source. Click the locked icon next to the pinboard title to see the underlying data source." caption="Access required" %}

 If you have view only access, the locked icon ![]({{ site.baseurl }}/images/icon-lock-24px.png "The locked icon"){: .inline} appears next to the pinboard name.

If you click on that icon, it tells you to request access to the data source to interact with the pinboard, or request access to the pinboard to edit it. It specifies which data source you need access to. In the image below, you need access to the **Retail Sales** data source.
{% include image.html file="sharing-viewonly.png" title="Request edit access" alt="If you have view only access to a pinboard, you must request edit access or request access to the underlying data source." caption="Request edit access" %}

To request edit access to a pinboard, email the owner of the pinboard. To request access to a data source, email your administrator.
