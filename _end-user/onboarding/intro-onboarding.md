---
title: [Onboarding Users]
keywords: tbd
last_updated: tbd
toc: true
summary: "In ThoughtSpot, you can onboard users quickly and teach them how to use the application quickly and efficiently."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Onboarding enables the users to master the key workflfows of ThoughSpot, and makes them productive and capable users in a very short time.

## Configue onboarding ##

Before starting the onboarding process, an administrator must specify the onboarding configuration.

See the [tscli onboarding command]({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-onboarding).


## Onboarding process ##

The key workflows that enable successfull onboarding include the following:

1. Configure and save a default pinboard that you plan to use for new users.
   See steps for [creating a pinboard]({{ site.baseurl }}end-user/pinboards/about-pinboards.html#create-a-pinboard).
2. Create a new user group, or edit an exiting user group to which new users belong:
   - specify the group name and its display name
   - set the sharing visibility to visible
   - specify the Privileges
   - select up to 3 default pinboards
   - test and customize the test welcome email.
   See steps for [creating a user group]({{ site.baseurl }}admin/users-groups/add-group.html#create-a-group).
3. Create a new user and assign them to the group you are using for onboarding. See steps for [creating a new user]({{ site.baseurl }}admin/users-groups/add-user.html#create-a-user-through-the-interface).
   In addition to creating a new user directly in ThoughtSpot, you can add users in bulk through [Active Directory]({{ site.baseurl }}admin/setup/active-directory-based-access.html)).
4. When the new user signs in for the first time, the ThoughtSpot onboarding process starts automatically and guides them through a few basic scenarios of using the application.
   See [User Onboarding Experience]({{ site.baseurl }}end-user/onboarding/user-onboarding-experience.html).
5. ***\[Optional\]*** Any user can repeat their onboarding experience at any time. Simply select **Profile** from user icon on the top right corner of the page, and under **Preferences > New user onboarding**, click **Revisit Onboarding**.
   See [Revisit Onboarding]({{ site.baseurl }}end-user/introduction/about-user.html#revisit-onboarding)

<!--1. Create a pinboard with a couple of visualizations.
2. Share the pinboard and all the data sources used to create the pinboard with a group they belong to, such as the analyst group.
3. Edit the group, and assign the make the newly created pinboard the default pinboard for that group.
4. Create a new user, and assign the user to the same group.
5. Sign in as the new user, and be guided through the onboarding process.-->
