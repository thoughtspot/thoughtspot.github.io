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

{% include important.html content="Each ThoughtSpot instance requires a unique Snowflake security integration. Each user in Snowflake must have a default warehouse and default role." %}

In your Snowflake database, do the following:

1. In the worksheet view, enter the following commands, and click **Run**:
   ```
   SHOW USERS;

   SHOW SECURITY INTEGRATIONS;

   CREATE OR REPLACE SECURITY INTEGRATION <enter a name for your security role>
     TYPE = OAUTH
     OAUTH_CLIENT = CUSTOM
     OAUTH_CLIENT_TYPE = <enter a client type>
     OAUTH_REDIRECT_URI = 'https://<public url of your ThoughtSpot instance>/callosum/v1/connection/generateTokens'
     ENABLED = TRUE
     COMMENT = '<enter a description of your security profile>'
    ```

2. At the bottom of what you entered in step 1, add an empty line, and then enter the following to describe your security integration:
   ```
   DESCRIBE SECURITY INTEGRATION <enter description of your security integration>;

   SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('<enter same description of your security integration as previous line');
   ```

   Example of a full query:

   ```
   SHOW USERS;

   SHOW SECURITY INTEGRATIONS;

   CREATE OR REPLACE SECURITY INTEGRATION OAUTH_CONFIG
     TYPE = OAUTH
     OAUTH_CLIENT = CUSTOM
     OAUTH_CLIENT_TYPE = 'CONFIDENTIAL'
     OAUTH_REDIRECT_URI = 'https://instance.example.com/callosum/v1/connection/generateTokens'
     ENABLED = TRUE
     COMMENT = 'Profile for passthrough'

   DESCRIBE SECURITY INTEGRATION OAUTH_CONFIG;

   SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('OAUTH_CONFIG');   
   ```

3. Click the **Run** button to run the full query.

   The Details window appears displaying a JSON object.

4. Copy the JSON object and click **Done** to close the window.

5. Paste the contents into a text editor.

   Example:

   ```
   {"OAUTH_CLIENT_SECRET_2":"KqKBu0xOxPtmk+RKvNP0+eIAMlFxMsu8rRh6s5q1qLY",
   "OAUTH_CLIENT_SECRET":"KdKBb0aOxPzml+RJvMP1/eIEMlFxM/su6rPh2wLZ",
   "OAUTH_CLIENT_ID":"aOxPzmlRJvCP5eIUMlFxMbu6rJh7mTO="}
   ```
6. For OAUTH_CLIENT_ID, copy the information between quotes after the colon (:).

   Example: `aOxPzmlRJvCP5eIUMlFxMbu6rJh7mTO=`

   {% include note.html content="Make sure you include the equals sign (=), if it exists." %}

7. In the Snowflake connection details page in ThoughtSpot, paste the OAuth client ID in the **OAuth Client ID** field.

8. For OAUTH_CLIENT_SECRET, copy the information between quotes after the colon (:).

   Example: `KdKBb0aOxPzml+RJvMP1/eIEMlFxM/su6rPh2wLZ`

9. In the Snowflake connection details page in ThoughtSpot, paste the OAuth client ID in the **OAuth Client Secret** field.

   {% include note.html content="Once a connection is created the token associated with the user login credentials for the connection is stored in ThoughtSpot for 90 days." %}

## Sharing a worksheet built from tables in a Snowflake connection that uses OAuth

When you share a ThoughtSpot object (Worksheet, Pinboard, or Answer) that references a Snowflake connection that uses OAuth authentication, the user is prompted to log in to Snowflake before they can view any data. When viewing the Pinboard, Answer, or running a search on the Worksheet, ThoughtSpot displays a message telling the user to log in with a button to initiate the login process.

{% include important.html content="In order for a user to access your shared worksheet, they must have a default role assigned to their user in Snowflake." %}
