---
title: [ThoughtSpot mobile overview]
summary: ThoughtSpot mobile provides access to ThoughtSpot from your phone.
last_updated: 11/15/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ThoughtSpot mobile app allows you to discover insights in seconds from billions of rows of data, right from the palm of your hand. You can access your ThoughtSpot cluster to search answers and pinboards. You can also create pinboards using existing answers and use pinboard filters.

Version 2.0 supports more features that were previously available only through the ThoughtSpot Web app, including:

- [Deep linking](#deep-linking)
- [Drill down](#drill-down)

For details, see [Mobile release notes]({{ site.baseurl }}/admin/mobile/notes-mobile.html).

## Requirements

- User account on a ThoughtSpot cluster
- Minimum cluster version: release 5.1
- Required cluster version for deep linking: release 6.3 or later
- Required cluster version for drill down: release 6.2 or later
- Apple iOS version 9.0 or later (iPad and iPhone)
- Android 6.0 or later

## Features

|![]({{ site.baseurl }}/images/v1_mobile.gif "Home screen")|<br><br>**Home Pinboard**<br>Add charts and tables to a customizable Home Pinboard.<br><br>**Quick Share**<br>Share KPIs and charts using iMessage, email, and Slack (supports [deep linking](#deep-linking)).<br><br>**Offline Exploration**<br>Access your Home Pinboard even when you are offline.<br><br>**Responsive & Interactive Experience**<br>Tap and swipe to see chart details. Filter to pinpoint relevant insights.<br><br>**Favorites**<br>Tag your favorite Pinboards and Answers for quick access.|

{: id="deep-linking"}
## Sharing with deep linking

Beginning with version 2.0, you can share a link to objects in ThoughtSpot using instant messaging or email and the recipient can open the link in the mobile app or the web. If a user has the mobile app, the link will open directly in the mobile app. If they don't have the mobile app, they are presented with the option to download it or to view it on the web.

### Shareable objects

| <b>Object<b> | <b>Share/open on Web<b> | <b>Share/open on Mobile<b> |
| Answer | Yes/Yes | Yes/Yes |
| Pinboard | Yes/Yes | Yes/Yes |
| Pinboard visualization | Yes/Yes | Yes/Yes |
| Table | Yes/Yes | No |
| Worksheet | Yes/Yes | No |
| SpotIQ Insights | Yes/Yes | No |

{: id="drill-down"}
## Drill down

Beginning with version 2.0, you can seamlessly and intuitively select data point(s) and drill down for more detailed information. You can also trace the drill path back and reset to the initial state.

To drill down:
1. Tap to select a data point.  
A description of the point you selected appears at the top of the screen, and action buttons appear at the bottom of the screen.  
2. Tap the {% include button.html content="Drill" %} button.  
A list of columns appears.  
3. Select a column to drill down on.  
4. To drill down further, tap an item on the chart, select a column to drill down on, and then tap {% include button.html content="Drill" %}.  

To go back to the previous chart:
- Tap the Revert icon ![revert icon]({{ site.baseurl }}/images/revert.png){: .inline}.

To go back to the top level where you started your drill down:
- Tap the Reset icon ![revert icon]({{ site.baseurl }}/images/reset.png){: .inline}.

## Getting Started

### For administrators:
- To deploy the app to users in your company, see [Deploy mobile app]({{ site.baseurl }}/admin/mobile/deploy-mobile.html#).

- To try the app before deploying it, see [Try mobile app]({{ site.baseurl }}/admin/mobile/deploy-mobile.html#try-the-mobile-app).

### For users:
- To install and set up the app, see [Install and set up mobile app]({{ site.baseurl }}/admin/mobile/install-mobile.html#).
