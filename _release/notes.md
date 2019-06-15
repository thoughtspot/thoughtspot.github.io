---
title: ["5.2 Release Notes"]
toc: false
keywords: "release notes"
last_updated: May 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 5.2.1 is now available. These release notes include information about new features,
fixed issues from the previous releases, and any known issues.

* [5.2.1 Fixed Issues](#521-fixed)
* [5.2 New Features](#52-new)
* [5.2 Fixed Issues](#52-fixed)
* [Notes for older versions](#notes-for-older-versions)

## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 5.2.1 release
directly:

* 5.0.x to 5.2.1
* 5.1.x to 5.2.1

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to one of the above versions, and then to the 5.2.1 release.

{: id="521-fixed"}
## 5.2.1 Fixed Issues

An issue where column tooltips do not display last-updated information is now fixed.

An error that occurs when attempting to save changes to the title of a visualization is now fixed.

An issue with the user-onboarding walkthrough intermittently failing to load is now fixed.

Reliability of the filter dialog when opened from a pinboard or the left panel has been improved.

An issue with a NAS mount disconnecting during restore of a cluster is now fixed.

A problem where tables in a Google Chrome tab become misaligned is now fixed.

Corrupted metadata after an upgrade which made some worksheets uneditable is now fixed.

An issue where greyed-out search phrases could not be edited while in delayed search mode is now fixed.

The database manager memory limit has been increased to 16 GB to improve performance.

An issue where tables created with incorrect DDL syntax could be imported without errors is now fixed.

A problem with date filters in the Japanese locale is now fixed.

An issue with refreshing materialization of views is now fixed.

Occasional slow navigation between the Answer and Pinboard pages has been fixed.

A problem where scheduled pinboard emails failed to send to a specific recipient with a valid email address message is now fixed.

Embedded pinboards no longer occasionally display a Pin button.

{: id="52-new"}
## 5.2 New Features and Functionality

### ThoughtSpot mobile beta

Our brand new mobile app is now available in beta on iOS devices for customers with ThoughtSpot 5.1 or later. If you want to try it, fill out this form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfs8SyPeXdiL5lpcp8tulPLLoaXbNJcpNgIuFcU6pr34vOx6A/viewform" target="_blank">ThoughtSpot Mobile App Beta Access.</a>

### Favorites

If you frequently go back to look at certain Answers or Pinboards, you can now use Favorites to find them faster than ever before. Click the Favorite icon ![Favorite icon]({{ site.baseurl }}/images/icon-favorite.png){: .inline} of an Answer or Pinboard, and it will be added to the Favorites list on the Answers and Pinboard pages, as well as the ThoughtSpot home page.

### Custom calendars

You can now add a custom fiscal calendar for your company. This is important if your company has a fiscal year that is different than the calendar year. With your custom calendar, you can be sure when you search for ‘last quarter’ that you will get results that reflect your company's last fiscal quarter. For details refer to [Create a custom calendar]({{ site.baseurl }}/admin/setup/set-custom-calendar.html#creating-a-custom-calendar).

### Ask an expert

Sometimes making a data-based decision is so challenging that you need an expert opinion from someone else. This is what the 'Ask an expert' feature is all about. Below the results of a Search or Answer, click **Ask an expert** to write a question to the ThoughtSpot users in your organization who are very familiar with the data set used for that search.  When you send your question, you automatically provide the search terms and the results. With this information, an expert in your organization will have the context they need to provide clarification and updated search terms, if necessary. For details refer to [Ask an expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html).

### IN subquery for filtering

With the IN subquery feature, you can now combine two queries into one without ever leaving the Search bar. For example, you could do a query like this: `What were the sales this month from my top 10 stores in terms of net margin last month`. That’s actually two queries. The first one searches for the top 10 stores in terms of net margin last month, and the second one searches for the sales of those stores this month.  Before the IN subquery, you would need to save a View to get this answer. For details refer to [Using the in keyword for nested searches]({{ site.baseurl }}/complex-search/in-keyword-searches.html).

### Support for small and medium cloud instance types

One size does not fit all when it comes to the cloud. You need flexibility to choose the right cloud instance type for your ThoughtSpot deployment. If you are deploying an instance with lower data sizes (<=100 GB), ThoughtSpot now supports “small” (20 GB data) and “medium” (100 GB data) instance types to help reduce the costs of cloud infrastructure. These are instances with lower CPU/RAM sizes (16/32 vCPU and 128 GB/256 RAM). For details refer to [ThoughtSpot cloud instance types]({{ site.baseurl }}/appliance/cloud.html#thoughtspot-cloud-instance-types).

### Cluster shutdown and restart to save infrastructure costs

If you don't need your ThoughtSpot cluster up and running 24/7, you can shut it down and restart it during normal usage hours. This allows you to save on the infrastructure costs of running ThoughtSpot VM instances in cloud environments. For details refer to [Shut down and restart your cluster]({{ site.baseurl }}/appliance/cloud.html#reducing-your-cloud-infrastructure-costs).

### Ability to upload .CSV data from an AWS S3 bucket

If you have data in .csv format stored in an AWS bucket, you can now load it directly into ThoughtSpot, using the **tsload** command. For details, refer to: [Loading data from an AWS S3 bucket]({{ site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-an-aws-s3-bucket).

### Allow users to sign up for ThoughtSpot

You can now allow people in your organization to sign up for ThoughtSpot by clicking a button on the sign-in page. When a person clicks the sign-up button, they go to a sign-up page that you’ve already set up outside of ThoughtSpot. This can be any page you want to use for registering new users.
For details, refer to: [Allow users to sign up]({{ site.baseurl }}/admin/users-groups/sign-up.html).

### Improved Japanese date keywords

Japanese-language users now have a more natural way of expressing date phrases in their queries.
For details, refer to: [Japanese (日本語) date keyword reference]({{ site.baseurl }}/reference/keywords-ja-JP.html).

### New languages

ThoughtSpot now supports seven new languages, available in the Profile page:
* Danish
* Norwegian
* Swedish
* Finnish
* Portuguese (Portugal)
* Spanish (Spain)
* Italian
* English (Australia)

{: id="52-fixed"}
## 5.2 Fixed Issues

Table user experience improvements:
* The column header is now left-aligned.
* Column widths can be made very narrow.

Chart user experience improvements:
* When sorting by date on the x-axis, the date format no longer changes and the axis no longer disappears.
* You can now sort using a sort field that is not in your chart.

{: id="notes-for-older-versions"}
## Notes from older versions

* [5.1 Release Notes](/5.1/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes](/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes](/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
