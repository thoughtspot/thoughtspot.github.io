---
title: [Custom domain configuration]
last_updated: 9/8/2021
summary: "ThoughtSpot supports the configuration of custom domains for your ThoughtSpot Cloud URL."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

When you set up your ThoughtSpot Cloud instance, ThoughtSpot sets your application URL to `<your-company-name>.thoughtspot.cloud` by default. The system-generated email notifications from your ThoughtSpot instance also include `thoughtspot.cloud` in the domain name.

This article primarily discusses custom domains for a non-embedded environment. To set up a custom domain in an embedded environment with ThoughtSpot Everywhere, refer to [the developer documentation](https://developers.thoughtspot.com/docs/?pageid=custom-domain-config){: target="_blank"}.

You might want to include your business domain name instead of `thoughtspot.cloud` in your ThoughtSpot Cloud URL. For example, you might want to use `<app-name>.<your-company-name>.com` as your base URL, instead of `<your-company-name>.thoughtspot.cloud`. This domain configuration has 3 main advantages:
- Creates trust among users in your organization, since the URL is in a format they are familiar with.
- If you are embedding ThoughtSpot, using the same domain as your host application ensures that embedding works on browsers that do not allow third-party cookies, such as Safari’s default security setting and Firefox when in strict mode.
- If you are embedding ThoughtSpot in multiple environments, such as a staging environment and a production environment, these multiple domains can point to the same ThoughtSpot instance.

Similarly, you might want to include your business domain name in all system-generated notifications. For example, you might want your pinboard schedule notifications to show the sender’s address as `<user-name>@<your-domain-name>`, instead of the default `TS Admin no-reply@notifications.thoughtspot.com`.

To initiate a URL change request, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). We also recommend that you read the following guidelines before initiating a request for the domain name or URL change.

## Domain URL customization
If you want to customize the application domain URL that appears in the browser, we recommend that you [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) to initiate a URL change request. ThoughtSpot may require the following information to complete this operation:

- The domain name that you want to use. Make sure you have a valid and registered domain name.

- A CNAME record to point the custom domain to the default domain. For example, to set your custom domain URL as `<app>.<yourdomain>.com`, you must create a CNAME record to point `<app>.<yourdomain>.com` to `<cluster-name>.thoughtspot.cloud`.

- Contact personnel for updating your DNS records after your cluster is migrated to the new domain.

- Your preferred maintenance window for this operation.

{% include important.html content="The domain URL customization does not update the email domain name in ThoughtSpot system-generated notifications. You must contact the ThoughtSpot Support team to customize the email domain." %}

## Email customization
ThoughtSpot supports customizing the email domain, sender ID welcome email message text, and product name in system-generated notifications such as the pinboard and answer sharing notifications, pinboard job scheduled emails, and so on.

For information about additional customization settings for email notifications and onboarding experience, see [Email and onboarding settings]({{ site.baseurl }}/admin/ts-cloud/onboarding-email-settings.html).

## Post-customization checks
- Verify if the ThoughtSpot instance loads with the new domain URL.

- If your setup uses SAML authentication for SSO, make sure the IdP server has the correct domain URLs.

- If you are embedding ThoughtSpot, make sure you [add the new domain URL to the CORS and CSP allowed list](https://developers.thoughtspot.com/docs/?pageid=security-settings){: target="_blank"} in the ThoughtSpot UI.
