---
title: [Customize ThoughtSpot Help]
last_updated: 6/29/2021
summary: You can customize ThoughtSpot Help to be specific to your data, examples, and documentation.
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{% include note.html content="The new Information Center is not customizable. If you have the new Information Center and would like to use the customizable Help menu described in this article, contact ThoughtSpot Support." %}

You can customize the classic Help menu for your ThoughtSpot application to tailor it to your
organization. You ***cannot*** customize the new Information Center.

When you configure the Help settings on the classic Help menu, you set system-wide defaults for all your
users.

When your ThoughtSpot users click the Help icon, they see a list of links.

![The help dropdown menu]({{ site.baseurl }}/images/gettingstarted-help-menu.png "The help dropdown menu")

If a user clicks on the **Help** link, the customizable help menu opens:

![The customizable help menu]({{ site.baseurl }}/images/gettingstarted-helpbox.png "The customizable help menu")

As an administrator, you can add your own links to this default list. This allows you to
include documentation specific to your company, such as information about the
data available in ThoughtSpot, where to get support internally, or
company-specific training.

To customize the Help menu, navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Help customization** from the side navigation bar that appears.

Note that you may not see the **Help customization** option, if your ThoughtSpot environment uses the new Information Center, which you cannot customize. To enable the customizable help menu, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

![Admin Console - Help customization]({{ site.baseurl }}/images/admin-portal-help-customization.png "Admin Console - Help customization")

To add a new link, select **Add menu item** above the list of existing links. Specify the name of the link, the URL, and optionally add a custom icon. Then click **Save**.

You can edit existing links, change icons, or remove items from the help menu altogether. To edit or delete a link, hover over the menu item and click the **Edit** button. Then, to delete the link, select **Delete item** from the Edit page. Specify the new information, and click **Save**.

You can also reset the help menu to the default. The default menu contains the following links: the *How search works* video, a link to the keyword reference, a link to the release notes, and a link to this documentation. To reset the help menu, select **Reset to default**, under the list of existing links.
