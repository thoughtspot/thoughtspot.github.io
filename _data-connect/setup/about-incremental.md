---
title: [About incremental data loads]
keywords: tbd
last_updated: tbd
summary: "You can create an incremental data load, with some planning ahead."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Although there is no native incremental load capability, incremental loads can
be handled by adding a filter on the source data. This only works if the source
has the capability of providing information on the last successful load. For
example, if the source has a timestamp field that indicates when a particular
source was modified, then the following filters could be used:

-   `modifiedDate > $LastRunDate`
-   `modifiedTime > $LastRunTime`

The `$LastRunDate` and `$LastRunTime` filters are correctly updated at runtime
to reflect the date/time of the last successful job run.

{% include note.html content="Both `$LastRunDate` and `$LastRunTime` are in GMT, so the source column values must also be in GMT." %}

You can use filters on any other column of any datatype, if it provides a way to
identify the modified rows. Even if the source does not have this capability,
you may still be able to do an incremental load. As long as a primary key exists
on the target ThoughtSpot table, the data will be loaded using an `upsert`. This
means that for a given row being loaded, if the primary key already exists in
the target table, that row is updated with the data in the new row. If a
row with that primary key does not exist, the new row will be inserted. This is how ThoughtSpot handles data loads into a table that already contains
rows, and it is the equivalent to an incremental load.

If you are relying on the `upsert` method, you'll want to run a `COMPACT TABLE`
command in ThoughtSpot SQL Command Line (TQL) to reduce the size of the table at
intervals (usually weekly).

Another technique that can effectively free up space would be to run a post-job
script that deletes data older than a particular date. This keeps the data fresh
and ensures that old data, which may not be valuable, is not taking up memory.
