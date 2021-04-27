---
title: [Configure OAuth for a Snowflake connection]
last_updated: 12/21/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughSpot supports OAuth for a Snowflake connection. With OAuth, each ThoughtSpot user authenticates with Snowflake and authorizes ThoughtSpot to query the database using their Snowflake user account.

For Snowflake connections that use OAuth, users must log in when their OAuth tokens expire. The amount of time that Snowflake OAuth tokens are valid is set in Snowflake.

## Configuring a Snowflake database for OAuth with ThoughtSpot

To add a Snowflake connection to ThoughtSpot using OAuth, you must set up the OAuth integration in Snowflake. This requires a Snowflake user account with ACCOUNTADMIN permission.

The list of users in Snowflake is independent from ThoughtSpot, but through SAML sync, it is possible for Snowflake and ThoughtSpot to use the same authentication integration.

{% include important.html content="Each ThoughtSpot instance requires a unique Snowflake security integration." %}

In your Snowflake database, do the following:

1. In the worksheet view, run the SHOW USERS command:
`SHOW USERS`

2. Specify a *default_warehouse* and *default_role* for each user.
