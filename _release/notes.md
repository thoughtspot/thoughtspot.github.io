---
title: ["ThoughtSpot Cloud Release Notes"]
toc: false
last_updated: 10/16/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot Cloud October version (ts6.oct.cl)  is now available.

These release notes include information about new and enhanced features.

{: id="new"}
## New Features and Functionality

{% include content/new-features-cloud-release.md %}

{: id="2020-september"}
## ThoughtSpot Cloud September Release (tscloud.5)

<h3>Scriptability</h3>
Scriptability contains the following new features:
<ul>
  <li>Export and update logical tables</li>
  <li>Edit, validate, and publish objects using the TML editor</li>
  <li>Import multiple objects from the <strong>SpotApps</strong> page, or from the object list page</li>
  <li>Update Views</li>
  <li>GUID handling: a new <code>GUID</code> parameter in an object's .tsl file allows ThoughtSpot to recognize pre-existing GUIDs, and determine if you are updating an existing object, or creating a new one</li>

</ul>

See <a href="{{ site.baseurl }}/admin/ts-cloud/scriptability.html">Scriptability</a>.

<h3>Style Customization</h3>
You can now customize the ThoughtSpot application from the Admin Console. With style customization, you can change the fonts, chart color palettes, footer text, application logo, and background colors in your embedded ThoughtSpot instance.<br><br>

Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/style-customization.html">Style customization</a>.

<h3>In-app acceptance of ThoughtSpot's use agreement</h3>
You can now sign ThoughtSpot's end-user use agreement from the application itself. Even if you previously signed a paper copy of the use agreement, an admin must sign the agreement in the application, within 30 days of ThoughtSpot upgrading your cluster to Cloud 5.<br><br>

Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/use-agreement.html">ThoughtSpot use agreement</a>.

<h3>User adoption and performance Pinboards</h3>
This release of ThoughtSpot Cloud contains two new default Pinboards for administrators. Use the <a href="{{ site.baseurl }}/admin/ts-cloud/user-adoption.html">User Adoption Pinboard</a> to understand how your ThoughtSpot users are interacting with ThoughtSpot, and how your user adoption is changing over time. Use the <a href="{{ site.baseurl }}/admin/ts-cloud/performance-tracking.html">Performance Tracking Pinboard</a> to understand how your ThoughtSpot cluster is performing.<br><br>

See <a href="{{ site.baseurl }}/admin/ts-cloud/user-adoption.html">User Adoption Pinboard</a> and <a href="{{ site.baseurl }}/admin/ts-cloud/performance-tracking.html">Performance Tracking Pinboard</a>.
