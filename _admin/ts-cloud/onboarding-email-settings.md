---
title: [Managing email and onboarding settings]
last_updated: 2/24/2021
summary: "Manage email and onboarding settings for your organization from the Admin Console."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can manage certain advanced settings for your organization from the Admin Console. This includes customizing welcome emails, scheduled emails, and the workflow that allows users to sign up for ThoughtSpot from the login page.

Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Onboarding** from the side navigation bar that appears.

![Admin Console - Onboarding]({{ site.baseurl }}/images/admin-portal-onboarding.png "Admin Console - Onboarding")

You can update various [email](#email) and [signup](#signup) settings from this page.

{% include note.html content="Changing these settings results in a service interruption for all users for approximately 2 minutes. To minimize disruption, consider making your changes during a scheduled maintenance window." %}

{: id="email"}
## Email settings
To customize or otherwise manage the ThoughtSpot welcome email for your users, follow these steps.

{% include note.html content="If you want your ThoughtSpot instance to send email notifications with a custom domain name and a specific sender ID, contact ThoughtSpot Support.<br><br>

To send email notifications from a specific email account with your domain, update the <strong>Custom admin email</strong> and <strong>From ID</strong> fields in the <strong>Admin > Application settings > Onboarding</strong> page, and contact ThoughtSpot Support to enable these settings for your application instance." %}

1. Select the **Edit** button in the **Email Settings** section.

2. Click on the **Welcome emails** toggle to enable or disable welcome emails. ThoughtSpot sends these emails to new users.

3. Optionally fill out the following parameters. If you do not fill them out, ThoughtSpot uses the system defaults.

    | Parameter | Definition |
| --- | --- |
| **Company name** | Your company name. The default is "Your Company"; e.g., "Your Company has invited you to ThoughtSpot." |
| **Custom admin email** | The email address for your company's ThoughtSpot administrator. Change this setting, and contact ThoughtSpot Support to enable it. |
| **From ID** | Email address that should send the welcome email. The default is TS Admin &lt;no-reply@customer.thoughtspot.com&gt;. Change this setting, and contact ThoughtSpot Support to enable it. |
| **Support email ID** | The email address for your company's Support contact. |
| **'Learn More' link** | A link for users to learn more about ThoughtSpot, or your company's implementation of ThoughtSpot. The default is [https://docs.thoughtspot.com](https://docs.thoughtspot.com){: target="_blank"}, the documentation for ThoughtSpot's software product. |
| **Product name** | The name of the product the welcome email is for. The default is ThoughtSpot. |
| **'Get started' link** | A link to allow users to get started using the product. The default is a link to the cluster you added the user to. |
| **Custom message** | A custom message for the email. |

3. Select **Save changes**. Alternatively, you can **Reset to default**.

{: id="signup"}
## Signup settings
The "Sign up" button on ThoughtSpot's login page is customizable. You can use it to redirect users to a company-wide app directory or to an internal app request workflow, for example.

To configure the workflow that allows users to sign up for ThoughtSpot from the login page for the cluster, follow these steps:

1. Select the **Edit** button in the **Email Settings** section.

2. Click on the **Signup** toggle to enable or disable the workflow for users to sign up for ThoughtSpot from the cluster login page.

3. Enter the text the signup button should display, in the text box next to **Signup button text**.

3. Enter the URL the signup button should link to, in the text box next to **Signup button link**.

3. Select **Save changes**. Alternatively, you can **Reset to default**.
