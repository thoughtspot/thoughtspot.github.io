---
title: [ThoughtSpot mobile release notes]

last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="1-1-2-new"}
## 1.1.2 New Features and Functionality
- Mobile now includes supports auto-redirect Single Sign-On (SSO) for configured clusters.

{: id="1-1-2-fixed"}
## 1.1.2 Fixed Issues

The following issues are fixed in the 1.1.2 release:

- Dates appear as invalid on visualizations.
- Last updated time was sometimes one day later than it actually was.
- Fixed a bug which caused the home pinboard to refresh randomly and not follow the 30mins background to foreground logic.
- Fixed an issue which caused the “Excluded” filters applied on Blink to appear in the “Included” list on Mobile.
- Fixed an issue which caused the cached data to disappear even before loading the new data.
- Increased the click area for the close button on the Filters page.
- Fixed the alignment issue of the “Login with SSO” on iPad.
- Fixes cascading filters not working issue. (Reported by #internal-haggar)
- Fixes an issue which caused the dates to overlap on the x-axis when custom calender is used. (Reported by #internal-verizon-coe)
Features
- Support for auto-redirect for SSO added if it has been enabled on the cluster. (Missing functionality reported by #internal-pwc and #internal-verizon-coe)
