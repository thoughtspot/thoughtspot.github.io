---
title: [Custom domain configuration]
last_updated: 11/04/2021
summary: "ThoughtSpot supports the configuration of custom domains for your ThoughtSpot Cloud URL."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

This article primarily discusses custom domains for a non-embedded environment. To set up a custom domain in an embedded environment with ThoughtSpot Everywhere, refer to [the developer documentation](https://developers.thoughtspot.com/docs/?pageid=custom-domain-config){: target="_blank"}.

When you set up your ThoughtSpot Cloud instance, ThoughtSpot sets your application URL to `<your-company-name>.thoughtspot.cloud` by default. The system-generated email notifications from your ThoughtSpot instance also include `thoughtspot.cloud` in the domain name.

You might want to include your business domain name instead of `thoughtspot.cloud` in your ThoughtSpot Cloud URL. For example, you might want to use `<app-name>.<your-company-name>.com` as your base URL, instead of `<your-company-name>.thoughtspot.cloud`. This domain configuration creates trust among users in your organization, since the URL is in a format they are familiar with.

Similarly, you might want to include your business domain name in all system-generated notifications. For example, you might want your Liveboard schedule notifications to show the sender’s address as `<user-name>@<your-domain-name>`, instead of the default `TS Admin no-reply@notifications.thoughtspot.com`.

## Domain URL customization
If you want to customize the application domain URL that appears in the browser, please [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) to initiate a URL change request. ThoughtSpot requires the following information to complete this operation:

- The **domain name** that you want to use. **Make sure you have a valid and registered domain name.**

- A **CNAME record** to point the custom domain to the default domain. For example, to set your custom domain URL as `<app>.<yourdomain>.com`, you must create a CNAME record to point `<app>.<yourdomain>.com` to `<cluster-name>.thoughtspot.cloud`.

- An **email address** for the person in your organization who will update your DNS records after your cluster is migrated to the new domain.

- Your **preferred maintenance window** for this operation. Note that migrating the cluster to the new domain might cause the cluster to be temporarily unavailable. You must share the new domain name with anyone in your organization who had access to ThoughtSpot under the old domain name.

{% include important.html content="The domain URL customization does not update the email domain name in ThoughtSpot system-generated notifications. You must contact the ThoughtSpot Support team to customize the email domain." %}

## Email customization
ThoughtSpot supports customizing the email domain, sender ID welcome email message text, and product name in system-generated notifications such as the Liveboard and answer sharing notifications, Liveboard job scheduled emails, and so on.

For information about additional customization settings for email notifications and onboarding experience, see [Email and onboarding settings]({{ site.baseurl }}/admin/ts-cloud/onboarding-email-settings.html).

## Post-customization checks
- Verify if the ThoughtSpot instance loads with the new domain URL.

- If your setup uses SAML authentication for SSO, make sure the IdP server has the correct domain URLs.

- If you are embedding ThoughtSpot, make sure you [add the new domain URL to the CORS and CSP allowed list](https://developers.thoughtspot.com/docs/?pageid=security-settings){: target="_blank"} in the ThoughtSpot UI.
