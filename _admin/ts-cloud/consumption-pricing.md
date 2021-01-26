---
title: [Consumption-based pricing]
last_updated: 1/26/2021
summary: ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on usage of the ThoughtSpot product.
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on your users' usage of the ThoughtSpot product. When you purchase a consumption-based ThoughtSpot license, ThoughtSpot bills you based on [credits](#credits). The ThoughtSpot consumption licensing model is available for both ThoughtSpot Cloud and for Embrace software deployment on your cloud platform.

Refer to the [Consumption pricing FAQ]({{ site.baseurl }}/admin/ts-cloud/consumption-pricing-faq.html) for more information. To learn about each of ThoughtSpot's pricing options, refer to [ThoughtSpot pricing](https://www.thoughtspot.com/pricing){: target="_blank"}.

{: id="credits"}
## Credits
You purchase and consume credits with the consumption model. A credit is a unit of measure.  Usage of ThoughtSpot, measured in [usage minutes](#usage-minutes), consumes credits. Examples of user activity that consume credits include a user performing a search in ThoughtSpot, viewing or editing Pinboards or answers, creating and editing worksheets, or making any administrative changes or setup. Each user actively using ThoughtSpot consumes credits, even if they are using the product at the same time. You consume 1 credit for each usage minute. ThoughtSpot refers to this as *credit consumption rate* or *credit burn rate.*

{: id="usage-minutes"}
## Usage minutes
Usage minutes refer to the number of minutes of ThoughtSpot usage. Each user's usage minutes are calculated separately. Usage minutes are calculated in the following ways:
- Any user activity in the application kicks off a 10 minute usage block.
- Any additional user activity within that 10 minutes does not drive additional consumption and the whole session will be charged at 10 minutes.
- The first click after the initial 10 minute window ends, initiates a second 10 minute session.
- Each user’s usage is counted separately.

    ![Usage minutes example]({{ site.baseurl }}/images/consumption-example.png "Usage minutes example")

## User activity that incurs usage minutes
User activity is defined as any user-triggered (initiated) action in ThoughtSpot, starting from the time the action is initiated until the time that the results of the action(s) are visible to the user in the product. This includes any time spent by ThoughtSpot in processing the user-triggered action in order to present the results to the user. User activity is measured in [usage minutes](#usage-minutes).

User activity that incurs usage minutes includes any user interaction with the product, such as:
- Clicking on any interactive elements inside the ThoughtSpot product, such as menu items, search boxes, tabs, buttons, icons and other user interface artifacts. Some examples are:
    - Performing searches on data or search-related actions such as Explore, filters, drill-down, showing underlying data, and other related actions
    - Creating, editing, updating deleting or interacting with Answers, Pinboards, Worksheets, tables, Views, and other objects
    - Triggering user-initiated SpotIQ analyses
    - Setup and configuration actions in the product (such as those performed in the **Admin** section of the product or other such parts of the product)
    - Uploads, downloads, sharing, triggering the sending of emails from within the product
- Browser actions (such as refreshing the page or using the **forward** or **back** buttons)
- Any scrolling in the product that triggers updates to objects or content being viewed
    For example, if a user is scrolling through a Pinboard, initially it displays only a subset of the charts that can fit on the screen. This counts as initial user activity. At any point, if the user scrolls through the Pinboard, resulting in ThoughtSpot loading and displaying additional charts in that Pinboard for the first time, this counts as additional user activity.

## Using the ThoughtSpot consumption licensing model with Embrace software
You do not have to be on ThoughtSpot Cloud to use the consumption-based pricing model. To use the consumption pricing model with Embrace software that you have deployed in your own cloud environment, you must:
1. Allow ThoughtSpot to gather product usage information from your cluster. This usage information will be gathered on a periodic basis (daily) from your environment. Usage information is gathered from ThoughtSpot clusters using a secure SSL connection (TLS encrypted).
2. Allow ThoughtSpot to serve usage information for accurate in-product usage visibility of credits consumed via a ThoughtSpot-created Embrace connection on your cluster. The Embrace connection is a JDBC connection that uses SSL for transport (TLS encrypted).

{% include note.html content="Usage information is collected only for the purposes of measuring credit consumption. Your usage information is secured and isolated inside our cloud environment." %}
