---
title: [Get audit logs]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can access an audit log of cluster events through tscli. You can also access information on cluster updates, configurations, data loading and metadata events.

Use the `tscli event list` command to return an audit list of events from the cluster. The syntax is:

```
tscli event list
   [--include <all|config|notification>]
   [--since <hours,minutes,days>
   | --from <yyyymmdd-HH:MM>
   --to <yyyymmdd-HH:MM>]
   [--detail]
   [--summary_contains
   <'string1'| 'string2' ...>]
   [--detail_contains
   <'string1'| 'string2' ...>]
   [--attributes
   <key1='value1'|
   key2='value2' ...>]
```

Optional parameters are:

-   `--include` specifies the type of events to include, and can be `all`, `config`, or `notification`.
-   `--detail` returns the events in a detail format rather than a tabular summary, which is the default.
-   `--summary_contains <'string1'| 'string2' ...>` specifies a string to check for in the event summary. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.
-   `--detail_contains <'string1'| 'string2' ...>` specifies a string to check for in the detail. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.
-   `--attributes <key1='value1'| key2='value2' ...>` specifies attributes to match as key=value pairs. Separate multiple attributes with |. Events that match all specified key/value pairs will be returned. Put single quotes around the value(s).

And a time window made up of either:

-   `--since <hours,minutes,days>` is a time in the past for where the event audit begins, ending at the present time. Specify a human readable duration string, e.g. 4h (4 hours), 30m (30 minutes), 1d (1 day).

Or both:

-   `--from <yyyymmdd-HH:MM>` is a timestamp for where to begin the event audit. It must be of the form: yyyymmdd-HH:MM.
-   `--to <yyyymmdd-HH:MM>` is a timestamp for where to end the event audit. It must be of the form: yyyymmdd-HH:MM.

To get audit logs:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#).
2.   Issue the `tscli event list` command, with the desired parameters, for example:

    ```
    $ tscli event list
       --include config
       --since 24 hours
    ```


**Parent topic:** [System security](../../admin/data_security/audit_logs.html)
