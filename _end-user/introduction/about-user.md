---
title: [About your user profile]
last_updated: 4/1/2021
summary: "The user icon lets you view your profile, adjust language options, specify notification preferences, revisit onboarding, manage your Answer experience, or sign out of ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To view the user actions, click your user icon on the top right corner of the page.

 ![Click User icon]({{ site.baseurl }}/images/user-info.png "Click User icon")

Click **Profile** to navigate to your profile, where you can change your icon, password, email, locale, and other  preferences.  

![Click Profile]({{ site.baseurl }}/images/user-profile.png "Click Profile")

Notice that you can now see the **My Profile** interface.

{: id="profile-picture" }
## Change your profile picture

You can change your profile picture clicking the user profile in the top right of the interface, clicking **Upload Picture**, and selecting a new image from the file browser.

You can use any a `*.png` or `*.jpg` file. Image files cannot exceed 4MB.

![Upload user profile image]({{ site.baseurl }}/images/user-upload-picture.png "Upload user profile image")

You can also make this change within the **User Profile**, under **Information**.

![Upload user profile image]({{ site.baseurl }}/images/user-upload-picture-alternative.png "Upload user profile image")


{: id="email" }
## Update your email ##

To change your email, navigate to **My Profile**. Under **Information**, enter an alternate email, and click Add.

![Update email]({{ site.baseurl }}/images/user-profile-email.png "Update email")


{: id="language" }
## Change language and data format settings ##
{% include content/set_locale.md %}

{: id="notifications" }
## Update sharing notification settings

Under **Preferences**, see the **Notifications** option.

Select **Email me sharing notifications** to receive emails whenever another user shares pinboards with you.

![]({{ site.baseurl }}/images/profile-email-notifications.png "Email sharing notifications")

{: id="onboarding" }
## Revisit user onboarding ##

When you are relatively new to using ThoughtSpot, we help you to become productive faster.

Whenever you need a refresh, navigate to **My Profile**. Under **Preferences**, see the **New user onboarding** option. Click **Revisit**, and ThoughtSpot guides you through onboarding again.

![]({{ site.baseurl }}/images/onboarding-revisit.png "Revisit onboarding")

{: id="password" }
## Change password ##
When you need to change your password, navigate to **My Profile**.

Under **Preferences**, enter the following information. Refer to [password requirements](#password-requirements).
  - Current Password
  - New Password
  - Confirm Password

Click **Update**.

  ![]({{ site.baseurl }}/images/update-password.png "Update password")

{: id="password-requirements"}
### Password requirements
By default, any password for a local user account in ThoughtSpot Cloud must meet the following criteria. Passwords for Single Sign-On (SSO) users do ***NOT*** need to meet these criteria. SSO users do not see the option to change their password.

{% include note.html content="When you create a new user's first password, the password only needs to pass the guess estimate check. When you update a password, it must pass the guess estimate check and the complexity check." %}

**Complexity check**
- The password must be 8 characters or more in length.
- The password must include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.

**Guess estimate check**
- The password must pass a complexity test based on an external library. This test ensures password complexity and uniqueness by checking for known patterns or words that are too simple. If the password is not complex enough, ThoughtSpot rejects it, even if it fulfills the other 2 requirements. Refer to the [Dropbox password library](https://github.com/dropbox/zxcvbn){: target="_blank"} for more information.
- The password cannot use certain words. By default, the blocked words are: "thoughtspot", "spot", "thought", "scaligent", your username, and any part of your display name. You can also add additional words to the list of blocked words. To add additional words to the blocklist, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

{: id="new-answer-experience"}
## Manage your Answer experience
The [new Answer experience]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html) <span class="badge badge-update">Beta</span> is off by default, but the option to turn it on or off individually is on by default. You can turn it on or off from the **Experience manager**.  If that option is not available, contact your administrator.

![New Answer experience toggle]({{ site.baseurl }}/images/new-answer-experience-toggle.png "New Answer experience toggle")

{: id="sign-out" }
## Signing out ##

To sign out of your ThoughtSpot account, click the user profile in the top right of the interface, and choose **Sign out**.

![Sign out]({{ site.baseurl }}/images/user-sign-out.png "Sign out")
