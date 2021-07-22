---
title: [New Answer experience]
summary: Learn about ThoughtSpot's new Answer experience, and how to enable it.
last_updated: 4/1/2021
sidebar: mydoc_sidebar
redirect_from:
- /admin/ts-cloud/answer-v2.html
permalink: /:collection/:path.html
---

## Overview

The new Answer experience contains multiple new features and feature enhancements. It is part of ThoughtSpot's move to a new stack. It is in <span class="badge badge-update">Beta</span> and ***off*** by default for individual ThoughtSpot Cloud users. However, the option to turn it on or off [individually](#toggle-on-off) is on by default. Your administrator can remove or enable this option from the [Search & SpotIQ]({{ site.baseurl }}/admin/ts-cloud/search-spotiq-settings.html) section of the Admin Console. If the new Answer experience is available in your environment, turn it on or off individually from your profile, in the **Experience manager** at the bottom of your profile. The new Answer experience contains the following features:

{: id="new-features"}
{% include content/new-answer-experience-features.md %}

{: id="toggle-on-off"}
## Turn the new Answer experience on or off individually
The new Answer experience is off by default, but the option to turn it on or off individually is on by default. Administrators can remove or enable this option from the [Search & SpotIQ]({{ site.baseurl }}/admin/ts-cloud/search-spotiq-settings.html) section of the Admin Console. If this option is available in your environment, you can turn it on or off individually from your profile.

To turn the new Answer experience on or off, follow these steps:

1. Navigate to your profile: select the **Profile** icon at the top right of your screen, and select **Profile**.

2. Scroll down to the **Experience manager**.

3. To turn the new Answer experience on, select **New experience**. To turn it off, select **Classic experience**.

    ![Toggle new answer experience on or off]({{ site.baseurl }}/images/new-answer-experience-toggle.png "Toggle new answer experience on or off")

{: id="toggle-on-off"}
## Turn the new Answer experience on or off for the whole cluster
You can manage the availability of the new Answer experience from the [Search & SpotIQ]({{ site.baseurl }}/admin/ts-cloud/search-spotiq-settings.html) section of the Admin Console. This feature allows you to turn the new Answer experience on or off globally, and decide the default answer experience for all users. You can turn the new Answer experience on, but still have the classic experience as the default, allowing users to opt into the new experience.

Refer to [Search & SpotIQ]({{ site.baseurl }}/admin/ts-cloud/search-spotiq-settings.html) for more information.

{: id="limitations"}
## Limitations
{% include content/new-answer-experience-deprecations.md %}
