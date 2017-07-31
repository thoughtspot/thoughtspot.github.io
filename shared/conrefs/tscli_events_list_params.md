# optional tscli event list params

Optional parameters are:

-   `--include` specifies the type of events to include, and can be `all`, `config`, or `notification`.
-   `--detail` returns the events in a detail format rather than a tabular summary, which is the default.
-   `--summary_contains <'string1'| 'string2' ...>` specifies a string to check for in the event summary. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.
-   `--detail_contains <'string1'| 'string2' ...>` specifies a string to check for in the detail. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.
-   `--attributes <key1='value1'| key2='value2' ...>` specifies attributes to match as key=value pairs. Separate multiple attributes with |. Events that match all specified key/value pairs will be returned. Put single quotes around the value\(s\).

And a time window made up of either:

-   `--since <hours,minutes,days>` is a time in the past for where the event audit begins, ending at the present time. Specify a human readable duration string, e.g. 4h \(4 hours\), 30m \(30 minutes\), 1d \(1 day\).

Or both:

-   `--from <yyyymmdd-HH:MM>` is a timestamp for where to begin the event audit. It must be of the form: yyyymmdd-HH:MM.
-   `--to <yyyymmdd-HH:MM>` is a timestamp for where to end the event audit. It must be of the form: yyyymmdd-HH:MM.

