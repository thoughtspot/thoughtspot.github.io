---
title: [Configure OAuth for a Snowflake connection]
last_updated: 4/20/2021
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

Each user in Snowflake has a default warehouse and default role.

In your Snowflake database, do the following:

1. In the worksheet view, run the following commands:
   ```
   SHOW USERS;

   SHOW SECURITY INTEGRATIONS;

   CREATE OR REPLACE SECURITY <enter a name for your security role>

     TYPE = OAUTH

     OAUTH_CLIENT = CUSTOM

     OAUTH_CLIENT_TYPE = 'CONFIDENTIAL'

     OAUTH_REDIRECT_URI = 'https://<public url of ThoughtSpot instance>/callosum/v1/connection/generateTokens'

     ENABLED = TRUE

     COMMENT = '<enter a description of security profile>'
    ```

2. At the bottom of what you entered in step 1, =enter the following to describe your security integration:
   ```
   DESCRIBE SECURITY INTEGRATION OAUTH_DEMO;

   SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRET('OAUTH_DEMO
   ```

3. Specify a *default_warehouse* and *default_role* for each user.
