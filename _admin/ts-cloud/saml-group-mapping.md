---
title: [Configure SAML group mapping]
last_updated: 12/1/2021
summary: "Learn how to map your groups in SAML to your groups in ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can map your SAML groups from your Identity Provider (IDP) to your ThoughtSpot groups. This means that you do not have to manually recreate your groups in ThoughtSpot, if they are already present in your IDP.

ThoughtSpot updates a user's groups when they log into ThoughtSpot using SAML. If you map your SAML groups to ThoughtSpot groups, ThoughtSpot does not update individual users's groups until they log into ThoughtSpot using SAML.

## Prerequisites
Before you can map SAML groups, you must [configure SAML authentication]({{ site.baseurl }}/admin/ts-cloud/authentication-integration.html).

## Configure your IDP SAML response
Configure your IDP to produce a SAML response with a `<saml2:AttributeStatement>`. This statement carries the group attributes. It should look similar to the following:

```
example
```

Fill in the following parameters:

<dl>

<dlentry>
<dt>parameter1</dt>
<dd>parameter 1 definition</dd>
</dlentry>

</dl>

## Contact ThoughtSpot Support to finish configuration
ThoughtSpot Support must finish configuration on the ThoughtSpot side. [Contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html), and ask them to enable group mapping from SAML assertions.
