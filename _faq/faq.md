---
title: ["Frequently asked questions"]
keywords: help, center, faq
toc: false
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

### Where can I find the version of ThoughtSpot I am using?

Users with administrative privileges can see this displayed on the **Admin >
System Health > Overview** page.

### I'm not seeing certain columns/values in the drop-down, why?

It could be the index has not built with the latest data or something
is causing the column to be dropped.

* Verify the the column is available using the **Data** page.
* View the table columns and check the **INDEX TYPE** value. If it is set to `DONT_INDEX`, change it.
* Check the column's  **INDEX PRIORITY** &emdash. make sure it is `1`.

To learn more about modeling data see [modeling data]({{ site.baseurl }}/admin/data-modeling/data-modeling-settings.html#) in this documentation.

### How do I display the features used in my cluster configuration?

1. Log into the ThoughtSpot cluster as the `admin` user.
2. Use the `tscli feature` subcommand to display your current configuration.

    ```
    $ tscli feature get-all-config
    +---------------------------------+----------+---------------+
    |              NAME               |  STATUS  | CONFIGURATION |
    +---------------------------------+----------+---------------+
    | Firewall                        | Disabled |               |
    | Saml                            | Disabled |               |
    | Ldap                            | Disabled |               |
    | CustomBranding                  | Disabled |               |
    | CustomBrandingFontCustomization | Disabled |               |
    | DataConnect                     | Disabled |               |
    | RLS                             | Enabled  |               |
    | Callhome                        | Enabled  |               |
    | SSHTunnel                       | Enabled  |               |
    | Fileserver                      | Disabled |               |
    +---------------------------------+----------+---------------+
    ```

### Is it possible to create a max(date) filed and set it to filter?

If you have a date field in my set of data and want to return the most recent set of
data based on specific date. To do this:

1. Create a formula called `Max Date`, for example:

    ```
    date = group_max ( date_to_filter_by )
    ```

2. In the search bar, filter your dates by this formula for example:

    ```
    max date = true
    ```

    This returns only those fields that pass the filter.
