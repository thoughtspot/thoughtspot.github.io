---
title: ["5.2 Release Notes"]
toc: false
keywords: "release notes"
last_updated: Feb 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 5.2 is now available. These release notes include information about new features,
fixed issues from the previous releases, and any known issues.

* [5.2 New Features](#52-new)
* [5.2 Fixed Issues](#52-fixed)
* [Notes for older versions](#notes-for-older-versions)

## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 5.2 release
directly:

* 4.5.x to 5.2
* 5.0.x to 5.2
* 5.1.x to 5.2

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to one of the above versions, and then to the 5.2 release.

{: id="52-new"}
## 5.2 New Features and Functionality

### Favorites

If you frequently go back to look at certain Answers or Pinboards, you can now use Favorites to find them faster than ever before. Click the Favorite icon ![Favorite icon]({{ site.baseurl }}/images/icon-favorite.png){: .inline} of an Answer or Pinboard, and it will be added to the Favorites list on the Answers and Pinboard pages, as well as the ThoughtSpot home page.

### Custom calendars

You can now add a custom fiscal calendar for your company. This is important if your company has a fiscal year that is different than the calendar year. With your custom calendar, you can be sure that when you search for ‘last quarter’ you will get results that reflect your company's last fiscal quarter. For details refer to [Create a custom calendar]({{ site.baseurl }}/admin/setup/set-custom-calendar.html#creating-a-custom-calendar).

### Ask an Expert

Sometimes making a decision based on data is so challenging that you need an expert opinion from someone else. This is what the Ask an Expert feature is all about. Below the results of a Search or Answer, click **Ask an expert** to send a question to ThoughtSpot users in your organization who are the most familiar with the data set used for the search.  They will also receive the search terms used, and the results. With this information, they will have the context they need to provide clarification, and updated search terms, if necessary. For details refer to [Ask an expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html).

### ThoughtSpot mobile beta

Our brand new mobile app is now available in beta on iOS devices for customers with ThoughtSpot 5.1 or later. If you want to try it, contact us at: <mobile_beta@thoughtspot.com>.  

### IN subquery for filtering

With the IN subquery feature, you can now combine two queries into one without ever leaving the Search bar. For example, you could do a query like this: `What were the sales this month from my top 10 stores in terms of net margin last month`. That’s two queries. The first one, to get the top 10 stores in terms of net margin last month, and the second one, to see what the sales were for those stores this month.  Before the IN subquery, you would need to save a view to get this answer. For details refer to [Using the in keyword for nested searchs]({{ site.baseurl }}/complex-search/in-keyword-searches.html).

### Support for small and medium cloud instance types

One size does not fit all when it comes to the cloud. You need flexibility to choose the right cloud instance type for your ThoughtSpot deployment. If you are deploying an instance with lower data sizes (<=100GB), ThoughtSpot now supports “small” (20GB data) and “medium” (100GB data) instance types to help reduce cost of cloud infrastructure. These are instances with lower CPU/RAM sizes (16/32 vCPU and 128GB/256 RAM). For details refer to [ThoughtSpot cloud instance types]({{ site.baseurl }}/appliance/cloud.html#thoughtspot-cloud-instance-types).

### Cluster shutdown and restart to save infrastructure costs

If you do not need your ThoughtSpot cluster to be up and running 24x7, you can shut down the cluster and restart it during expected usage hours to save on the infrastructure cost of running ThoughtSpot VM instances in cloud provider environments. For details refer to [Shut down and restart your cluster]({{ site.baseurl }}/appliance/cloud.html#reducing-your-cloud-infrastructure-costs).

### Ability to upload .CSV data from an AWS S3 bucket

If you have data in .csv format stored in an AWS bucket, you can now load it directly to ThoughtSpot, using the **tsload** command. For details, refer to: [Loading data from an AWS S3 bucket]({{ site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-an-aws-s3-bucket).

### Allow users to sign up for ThoughtSpot

You can now allow people in your organization to sign up for ThoughtSpot by clicking a button on the sign-in page. When a person clicks the sign-up button, they go to a sign-up page that you’ve already set up outside of ThoughtSpot. This can be any page you want to use for registering new users.
For details, refer to: [Allow users to sign up]({{ site.baseurl }}/admin/users-groups/sign-up.html).

{: id="52-fixed"}
## 5.2 Fixed Issues

Table UX Improvements
* Column header is now left aligned
* Column widths can be made very narrow

Sort by date on X axis
* Date format no longer changes when sorting and the axis no longer disappears.

You can now sort using a sort field that is not in your chart.

{: id="notes-for-older-versions"}
## Notes from older versions

* [5.1 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes](/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes](/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
