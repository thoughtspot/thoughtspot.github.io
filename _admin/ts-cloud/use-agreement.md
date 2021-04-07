---
title: [In-app acceptance of ThoughtSpot's use agreement]
last_updated: 4/7/2021
summary: "An administrator must accept the ThoughtSpot use agreement in the application to allow users to continue using the application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Prior to ThoughtSpot Cloud 5, administrators signed a paper use agreement to allow their users to use ThoughtSpot. Starting with Cloud 5, you can easily sign the use agreement from the application itself. You can view a copy of this agreement at [ThoughtSpot Legal](https://www.thoughtspot.com/legal/thoughtspot-cloud-subscription-agreement){:target="_blank"}.

{% include note.html content="Even if you previously signed a paper copy of the use agreement, an admin <strong><em>must</em></strong> accept the agreement in the application." %}

## Use agreement notifications

When ThoughtSpot upgrades your cluster to Cloud 5, or when there is a new version of the use agreement later, administrators receive notifications about the use agreement. You do not receive notifications about the use agreement with every software upgrade, just with upgrades that include changes to the use agreement. Administrators receive the following notification, which allows them to accept the use agreement:

![Administrator notification]({{ site.baseurl }}/images/use-agreement-admin-warning.png "Administrator notification")

One administrator for each cluster must accept this agreement within 30 days of ThoughtSpot upgrading your cluster to Cloud 5. If an administrator does not sign the agreement within 30 days, users cannot access the ThoughtSpot application. Administrators receive a when they try to use ThoughtSpot, which allows them to accept the use agreement to continue using ThoughtSpot: "To continue using ThoughtSpot, please accept [the terms](https://www.thoughtspot.com/legal/thoughtspot-cloud-subscription-agreement){:target="_blank"}."

If an administrator does not sign the agreement within 30 days of ThoughtSpot upgrading the cluster to Cloud 5, non-admin users receive the following notification when they try to use ThoughtSpot. The notification tells them to ask their administrator to accept the use agreement to allow them to continue using ThoughtSpot: "To continue using ThoughtSpot, please ask your administrator to accept the use agreement."

## Accept the use agreement
Only administrators can accept the use agreement. Only one administrator needs to accept the use agreement for each cluster. Note that you must sign an agreement for each of your clusters.

To accept the use agreement, follow these steps. You do not need internet access to sign the agreement, since it is bundled with the application software.

1. Ensure that you have administrator privileges.

2. Read the use agreement in full before accepting. You can view a copy of the agreement at [ThoughtSpot Legal](https://www.thoughtspot.com/legal/thoughtspot-cloud-subscription-agreement){:target="_blank"}, or by selecting **the terms** on the administrator notification.

4. Click **Accept**.

If you have a technical issue when you sign the use agreement, and users cannot access the application, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).
