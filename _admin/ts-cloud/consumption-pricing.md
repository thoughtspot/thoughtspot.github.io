---
title: [Consumption-based pricing]
last_updated: 1/19/2021
toc: false
summary: ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on usage of the ThoughtSpot product.
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on your users' usage of the ThoughtSpot product. When you purchase a consumption-based ThoughtSpot license, ThoughtSpot bills you based on [credits](#credits). The ThoughtSpot consumption licensing model is available for both ThoughtSpot Cloud and for Embrace software deployment on a cloud platform.

Refer to the [Consumption pricing FAQ]({{ site.baseurl }}/admin/ts-cloud/consumption-pricing-faq.html) for more information.

{: id="credits"}
## Credits
You purchase and consume credits with the consumption model. A credit is a unit of measure.  Usage of ThoughtSpot, measured in [usage minutes](#usage-minutes), consumes credits. Examples of user activity that consume credits include a user performing a search in ThoughtSpot, viewing or editing Pinboards or answers, creating and editing worksheets, or making any administrative changes or setup. Each user actively using ThoughtSpot consumes credits, even if they are using the product at the same time. You consume 1 credit for each usage minute. ThoughtSpot refers to this as "credit consumption rate" or "credit burn rate."

{: id="usage-minutes"}
## Usage minutes
Usage minutes refer to the number of minutes of ThoughtSpot usage. Each user's usage minutes are calculated separately. Usage minutes are calculated in the following ways:
- Any user activity in the application kicks off a 10 minute usage block.
- Any additional user activity within that 10 minutes does not drive additional consumption and the whole session will be charged at 10 minutes.
- The first click after the initial 10 minute window ends, initiates a second 10 minute session.
- Each user’s usage is counted separately.
