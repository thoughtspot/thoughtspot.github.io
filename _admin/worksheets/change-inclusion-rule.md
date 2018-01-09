---
title: ["Change inclusion, join, or RLS for a worksheet"]
keywords: "worksheet, join, inclusion rule"
last_updated: tbd
summary: "As long as you have permissions to edit a worksheet, you can always go into it and set a different inclusion rule or join rule."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

If you find that the charts and tables built on a worksheet contain a large
number of null values (which display as `{blank}` in the web browser), you can
fix this by changing the [inclusion rule](about-inclusion-rule.html#) for the
worksheet.  

If you are an administrator or have **Has administration privileges**, you can
also edit any worksheet and change its RLS or other key settings.


## Change/configure a worksheet

Before working through this procedure, make sure you are familiar with how the
following affect data:

* [inclusion rule](about-inclusion-rule.html#)
* [worksheet join rule](progressive-joins.html#)
* [role-level security (RLS)]({{ site.baseurl }}/admin/data-security/set-rls.html#)

To configure these values for a worksheet:

1. Click on the **DATA** icon on the top navigation bar and then on **Worksheets**.

    ![]({{ site.baseurl }}/images/data_icon_and_worksheets.png)

2. Click on the name of the worksheet you want to edit from the list.
3. Click the **Edit** button in the upper right hand side of the screen.
4. Click on the **Choose Sources** link.
5. Scroll to the bottom of the dialog.
5. Configure the inclusion rule, worksheet join rule, and RLS as needed.

     ![]({{ site.baseurl }}/images/worksheet_join_incusion_rule.png "The worksheet join rule and inclusion rule")

6. Click **Done**.
7. Click **Actions** and select **Save**.

    ![]({{ site.baseurl }}/images/action_save_worksheet.png "Save a worksheet")
