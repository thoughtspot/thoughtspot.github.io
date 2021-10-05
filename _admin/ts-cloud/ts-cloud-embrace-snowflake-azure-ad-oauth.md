---
title: [Configure Azure AD external OAuth for a Snowflake connection]
last_updated: 4/20/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot supports Microsoft Azure Active Directory (AD) OAuth for a Snowflake connection. With Azure AD OAuth, the authorization server generates an access token from Azure AD on behalf of the ThoughtSpot user which authenticates them with Snowflake and authorizes ThoughtSpot to query the database using their Snowflake user account.

## Creating an external OAuth token using Azure AD on behalf of the user

### Part 1: Creating a Snowflake OAuth resource

To create a Snowflake OAuth resource, do the following:

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com/){:target="_blank"}.

2. Navigate to **Azure Active Directory**.

3. Click **App registrations**, then **New registration**.

4. For Name, enter a name for your application.

   Example:`Snowflake Oauth User Resource`

5. Make sure Supported account types is set to **Single Tenant**.

6. Click **Register**.

7. After the application is created, click **Expose an API**.

8. Next to Application ID URI, click **Set** and change its value from **api://\<alphanumeric value>** to **https://\<alphanumeric value>**.

  {% include note.html content="If the Application ID URI is not used, you must create a security integration with audiences using the Snowflake Account URL (i.e. `<account_identifier>.snowflakecomputing.com)`.
" %}
9. Click **Add a scope**.

10. For Scope name, enter the name of the Snowflake role (example: `session:role-any`).

11. Select who can consent.

12. Enter an Admin consent display name (example: `Any`).

13. Enter an Admin consent description.

14. Click **Add Scope**.

  {% include important.html content="When you create the scope in your Azure AD application, you must set it to “any” so that a user can later switch to any of their allowed roles when making a JDBC connection using the obtained token." %}

### Part 2: Creating a Snowflake OAuth Client App

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com/){:target="_blank"}, and navigate to **Azure Active Directory**, if needed.

2. Click **App registrations**, and then click **New registration**.

3. For Name, enter a name for the client (example: `Snowflake OAuth User`).

4. For Supported account types, make sure it is set to **Single tenant**.

5. Click **Register**.

6. Once the app is created, click **Overview**.

7. From the Application (client) ID field, copy the ID. This ID is referred to as the ``<OAUTH_CLIENT_ID>`` in the following steps.

8. Click **Certificates & secrets** and then **New client secret**.
