---
title: ["5.3 Release Notes"]
toc: false
keywords: "release notes"
last_updated: July 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 5.3 is now available. These release notes include information about new features,
fixed issues from the previous releases, and any known issues.

* [5.3 New Features](#53-new)
* [5.3 Fixed Issues](#53-fixed)
* [Notes for older versions](#notes-for-older-versions)

## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 5.3 release
directly:

* 5.0.x to 5.3
* 5.1.x to 5.3

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.0.x or versin 5.1.x, and then to the 5.3 release.

Note that release must include the upgrade of all user profiles to include valid domain-specific email address.


{: id="53-new"}
## 5.3 New Features and Functionality

### Onboarding

In this release, we introduce user onboarding, which enables anyone to master the features they need in a very short time.

See [Onboarding Users]({{ site.baseurl }}/end-user/onboarding/intro-onb oarding.html).

To include users in the onboarding process, each user profile must include a valid email address; see [Create a user through the interface](#create-user-ui)[tscli onboarding command]({{ site.baseurl }}/admin/users-groups/add-user.html#create-user-ui).

When you create a new user, we recommend that you add them to a user group immediately. Configure that user group to use a specific data source, choose up to three initial pinboards, and specify the text of the \welcome email

To configure the email protocols necessary for onboarding, the administrator must also specify the onboarding configuration for the cluster. See the reference information for the [tscli onboarding command]({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-onboarding).

### Mandatory user emails

In this release, all users must have a valid email in ThoughtSpot. Before this release, the email field was not mandatory. See changes to [Create a user through the interface]({{ site.baseurl }}/admin/users-groups/add-user.html#create-a-user-through-the-interface). To make bulk updates to emails, see [Configure LDAP for Active Directory]({{ site.baseurl }}admin/setup/LDAP-config-AD.html).

<!-- assume this is now GA with new features?-->
### ThoughtSpot mobile

Our brand new mobile app is now available in for customers with ThoughtSpot 5.1 or later.

### Pinboard export in PDF format

You can now download a pinboard in PDF format, without downloading each visualization separately. PDF files replicate the pinboard layout by default. Alternatively, you can choose to have each visualization on its own page. For more information, see [Download a pinboard as PDF]({{ site.baseurl }}/end-user/pinboards/download-pinboard-pdf.html).

### Pinboard presentation in full screen

We enhanced the presentation experience to show ThoughtSpot pinboards like a typical slide deck. This release features better navigation and presentation controls. See [Present a pinboard as a slideshow]({{ site.baseurl }}/end-user/pinboards/start-a-slideshow.html).

### Drivers

As of this release, ThoughtSpot no longer supports Solaris installations.  
We also updated our drivers; see [Downloads]({{ site.baseurl }}/release/downloads.html).

<!-- Are there improvements? If not, let's drop the section -->
### Custom calendars

You can now add a custom fiscal calendar for your company. This is important if your company has a fiscal year that is different than the calendar year. With your custom calendar, you can be sure when you search for ‘last quarter’ that you will get results that reflect your company's last fiscal quarter. For details refer to [Create a custom calendar]({{ site.baseurl }}/admin/setup/set-custom-calendar.html#creating-a-custom-calendar).

<!-- assume this is now GA with new features?-->
### Support for small and medium cloud instance types

One size does not fit all when it comes to the cloud. You need flexibility to choose the right cloud instance type for your ThoughtSpot deployment. If you are deploying an instance with lower data sizes (<=100 GB), ThoughtSpot now supports “small” (20 GB data) and “medium” (100 GB data) instance types to help reduce the costs of cloud infrastructure. These are instances with lower CPU/RAM sizes (16/32 vCPU and 128 GB/256 RAM). For details refer to [ThoughtSpot cloud instance types]({{ site.baseurl }}/appliance/cloud.html#thoughtspot-cloud-instance-types).

<!-- This may have been in Beta in 5.2, and GA in 5.3. Must verify -->
### Cluster shutdown and restart to save infrastructure costs

If you don't need your ThoughtSpot cluster up and running 24/7, you can shut it down and restart it during normal usage hours. This allows you to save on the infrastructure costs of running ThoughtSpot VM instances in cloud environments. For details refer to [Shut down and restart your cluster]({{ site.baseurl }}/appliance/cloud.html#reducing-your-cloud-infrastructure-costs).


{: id="53-fixed"}
## 5.3 Fixed Issues


{: id="notes-for-older-versions"}
## Notes from older versions

* [5.2 Release Notes](/5.2/pdf/ThoughtSpot_Release_Notes_5.2.pdf)
* [5.1 Release Notes](/5.1/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes](/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes](/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
