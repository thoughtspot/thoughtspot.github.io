---
title: [Configure Azure AD external OAuth for a Snowflake connection]
last_updated: 11/1/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot supports Microsoft Azure Active Directory (AD) OAuth for a Snowflake connection. With Azure AD OAuth, the authorization server generates an access token from Azure AD on behalf of the ThoughtSpot user which authenticates them with Snowflake and authorizes ThoughtSpot to query the database using their Snowflake user account.

## Creating an external OAuth token using Azure AD on behalf of the user
{: id="part-1"}
### Part 1: Creating a Snowflake OAuth resource

To create a Snowflake OAuth resource, do the following:

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com/){:target="_blank"}.

2. Navigate to **Azure Active Directory**.

   ![]({{ site.baseurl }}/images/azure-portal-ad.png)

3. Click **App registrations**, then **New registration**.

   ![]({{ site.baseurl }}/images/azure-portal-reg.png)

4. For Name, enter a name for your application.

   Example:`Snowflake Oauth User Resource`

5. Make sure Supported account types is set to **Single Tenant**.

6. Click **Register**.

   ![]({{ site.baseurl }}/images/azure-portal-reg-ten.png)

7. After the application is created, click **Expose an API**.

   ![]({{ site.baseurl }}/images/snow-expose-api.png)

8. Next to Application ID URI, click **Set** and change its value from **api://\<alphanumeric value>** to **https://\<alphanumeric value>** and click **Save**.

   <!-- ![]({{ site.baseurl }}/images/snow-app-uri.png) -->
   ![]({{ site.baseurl }}/images/snow-app-uri-oauth-client2.png)

    {% include note.html content="If the Application ID URI is not used, you must create a security integration with audiences using the Snowflake Account URL (i.e. `<account_identifier>.snowflakecomputing.com)`." %}

9. Click **Add a scope**.

10. For Scope name, enter the name of the Snowflake role (example: `session:role-any`).

11. Select who can consent.

12. Enter an Admin consent display name (example: `Any`).

13. Enter an Admin consent description.

14. Click **Add Scope**.

    ![]({{ site.baseurl }}/images/snow-add-scope.png)

  {% include important.html content="When you create the scope in your Azure AD application, you must set it to “any” so that a user can later switch to any of their allowed roles when making a JDBC connection using the obtained token." %}

### Part 2: Creating a Snowflake OAuth client app

To create a Snowflake OAuth client app, do the following:

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com/){:target="_blank"}, and navigate to **Azure Active Directory**, if needed.

2. Click **App registrations**, and then click **New registration**.

3. For Name, enter a name for the client (example: `Snowflake OAuth User`).

4. For Supported account types, make sure it is set to **Single tenant**.

5. Click **Register**.

6. Once the app is created, click **Overview**.

7. From the Application (client) ID field, copy the ID. This ID is referred to as the `<OAUTH_CLIENT_ID>` in the steps that follow.

   ![]({{ site.baseurl }}/images/sf_oauth_user.png)

8. Click **Authentication**, and under Web, specify the redirect URI using the following format:

   `<https://\<public> url of your ThoughtSpot Instance>/callosum/v1/connection/generateTokens`

   ![]({{ site.baseurl }}/images/redirect_uri.png)

8. Click **Certificates & secrets** and then **New client secret**.

   ![]({{ site.baseurl }}/images/snow_certs_secr.png)

9. Copy the **Value** of the secret you just created. This is referred to as `<OAUTH_CLIENT_SECRET>` in the steps that follow.

   ![]({{ site.baseurl }}/images/snow_secr.png)

10. Click **API permissions**, then click **Add a permission**.

    ![]({{ site.baseurl }}/images/snow_api_perm.png)

11. Click **My APIs**.

12. Click the name of the Snowflake OAuth Resource you created in [Part 1]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-azure-ad-oauth.html#part-1).

    ![]({{ site.baseurl }}/images/snow_req_api_perm.png)

13. On the Request API permissions page, click the **Delegated permissions** box, and select the permission related to scope you defined in the application you want to grant to this client.

14. Click **Add permissions**.

    ![]({{ site.baseurl }}/images/snow_req_api_2_perm.png)

15. Under Configured permissions, click **Grant admin consent for Default Directory**, and then click **Yes** in the confirmation message.

    ![]({{ site.baseurl }}/images/snow_grant_admin.png)

### Part 3: Collecting Azure AD information for Snowflake

To collect Azure AD information for Snowflake, do the following:

1. Sign in to the [Microsoft Azure Portal](https://portal.azure.com/){:target="_blank"}, and navigate to **Azure Active Directory**, if needed.

2. Go back to the Snowflake OAuth Resource App (Snowflake Oauth User Resource) to collect all the info related as mentioned below:

    a. Click **Endpoints** in the **Overview** interface.

    b. On the right-hand side, copy the **OAuth 2.0 token endpoint (v2)** and note the URLs for **OpenID Connect metadata** and **Federation Connect metadata**.

	 1. The **OAuth 2.0 token endpoint (v2)** is referred to as the `<AZURE_AD_OAUTH_TOKEN_ENDPOINT>` in the following configuration steps. The endpoint should be similar to `https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token/`.

   2. For the **OpenID Connect metadata**, open in a new browser window.

	     a. Locate the "jwks_uri" parameter and copy its value.

	     b. This parameter value will be known as the `<AZURE_AD_JWS_KEY_ENDPOINT>` in the following configuration steps. The endpoint should be similar to `https://login.microsoftonline.com/<tenant_id>/discovery/v2.0/keys`.

3. For the **Federation metadata document**, open the URL in a new browser window.

	  a. Locate the `"entityID"` parameter in the `XML Root Element` and copy its value.

	  b. This parameter value will be known as the `<AZURE_AD_ISSUER>` in the following configuration steps. The entityID value should be similar to `https://sts.windows.net/<tenant_id>/`.

4. The **OAuth 2.0 authorization endpoint (v2)** should be similar to  `https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/authorize`.

    ![]({{ site.baseurl }}/images/snow_oauth_user_res_1.png)
    ![]({{ site.baseurl }}/images/snow_oauth_user_res_2.png)

### Part 4: Creating an OAuth authorization server in Snowflake

In this part you must do the following:
- Create a security integration in Snowflake to ensure that Snowflake can  securely communicate with Microsoft Azure AD.
- Validate the tokens from Azure AD.
- Provide the appropriate Snowflake data access to users based on the user role associated with the OAuth token.

#### Security integration format

```
create security integration external_oauth_azure_2
    type = external_oauth
    enabled = true
    external_oauth_type = azure
    external_oauth_issuer = '<AZURE_AD_ISSUER>'
    external_oauth_jws_keys_url = '<AZURE_AD_JWS_KEY_ENDPOINT>'
    external_oauth_audience_list = ('<SNOWFLAKE_APPLICATION_ID_URI>')
    external_oauth_token_user_mapping_claim = 'upn'
    external_oauth_snowflake_user_mapping_attribute = 'login_name';
```    
Example:

![]({{ site.baseurl }}/images/snow-sec-int-example.png)

{% include note.html content="When you create the Snowflake OAuth Resource Application in Azure AD, if you enter an `Application ID URI` that is not the Snowflake Account URL (i.e. `<account_identifier>.snowflakecomputing.com`), you must add the `external_oauth_audience_list` parameter to the command with the value `<SNOWFLAKE_APPLICATION_ID_URI>`." %}

#### Snowflake commands

##### Create user as Azure AD user

`CREATE USER testuser PASSWORD = '' LOGIN_NAME = 'testuser@thoughtspot.com' DISPLAY_NAME = 'AD_TEST_USER';`

##### Validate access token

`select system$verify_external_oauth_token('<ACCESS_TOKEN>');`

##### Grant sysadmin role to TESTUSER

`GRANT ROLE sysadmin TO USER TESTUSER;`

##### Altering user

`ALTER USER testuser SET DEFAULT_ROLE = SYSADMIN;`

### (Optional) Validating your Azure configuration

To ensure your Azure configuration is correct for use with ThoughtSpot, you can generate an access token.

You can use either of the following methods to generate your access token:
- Postman
- cURL

#### Method 1: Postman

To validate your configuration using Postman, do the following:

1. Sign in to Postman.

2. Go to the **Authorization** tab.

3. For Token Name, enter a token name.

4. For Grant Type, select **Authorization Code** from the menu.

5. For Callback URL, select **Authorize using browser**.

   This should be defined in your OAuth User app(Ex: Snowflake OAuthUser). The default is `https://oauth.pstmn.io/v1/callback`.

6. For Auth URL, enter the OAuth 2.0 authorization endpoint (v2) value from “Endpoints” in the app.   

    Example: `https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/authorize`

7. For Access Token URL, enter the access token URL.

    Example: `https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token/`

8. For Scope, you must provide “offline_access” as the scope, along with the actual scope. The refresh token is only provided if the offline_access scope was requested.

    ![]({{ site.baseurl }}/images/postman_get_token.png)  

    Example: `https://<application_id>/session:role-any offline_access`

    {% include important.html content="When you create the scope in the Azure AD application setup, it must be set as “any” so that a user can later switch to any of his allowed roles when making a JDBC connection using the obtained token." %}    

9. Click **Get New Access Token**.

10. Sign in to your Microsoft Azure account.

    ![]({{ site.baseurl }}/images/ms_sign_in.png)

11. On the Token Details page, click **Use Token**.

    ![]({{ site.baseurl }}/images/token_det_1.png)
    ![]({{ site.baseurl }}/images/token_det_2.png)

#### Method 2: cURL

To validate your configuration using cURL, do the following:

1. Execute below command to get access token with password grant_type:

    ```
    curl -X POST -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" \
      --data-urlencode "client_id=<OAUTH_CLIENT_ID>" \
      --data-urlencode "client_secret=<OAUTH_CLIENT_SECRET>" \
      --data-urlencode "username=<AZURE_AD_USER>" \
      --data-urlencode "password=<AZURE_AD_USER_PASSWORD>" \
      --data-urlencode "grant_type=password" \
      --data-urlencode "scope=<SCOPE_AS_IT_APPEARS_IN_AZURE_APP>" \
      '<AZURE_AD_OAUTH_TOKEN_ENDPOINT>'
  ```
  Example:
    ```
    curl -X POST -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" \
    --data-urlencode "client_id=<client_id>" \
    --data-urlencode "client_secret=<client_secret>" \
    --data-urlencode "username=testuser@thoughtspot.com" \
    --data-urlencode "password=*****" \
    --data-urlencode "grant_type=password" \
    --data-urlencode "scope=https://<application_id>/session:role-any offline_access"\
    `https://login.microsoftonline.com/ <tenant_id>/oauth2/v2.0/token'

    ```
    ![]({{ site.baseurl }}/images/curl_1.png)

2. Execute below command for getting access token with refresh_token as grant_type:

    ```
    curl -X POST -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" \
      --data-urlencode "client_id=<client_id>" \
      --data-urlencode "client_secret=<client_secret>" \
        --data-urlencode "grant_type=refresh_token" \
        --data-urlencode "refresh_token=<Replace_Refresh_Token>" \
        --data-urlencode "scope=https://<application_id>/session:role-any offline_access" \
      'https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token'
    ```
    ![]({{ site.baseurl }}/images/curl_2.png)

## Related links

- [Configure Microsoft Azure AD for External OAuth](https://docs.snowflake.com/en/user-guide/oauth-azure.html#configure-microsoft-azure-ad-for-external-oauth){:target="_blank"}
- [How to: create external OAuth token using Azure AD for the OAuth client itself](https://community.snowflake.com/s/article/Create-External-OAuth-Token-Using-Azure-AD-For-The-OAuth-Client-Itself){:target="_blank"}
- [How to: create external OAuth token using Azure AD on behalf of the user](https://community.snowflake.com/s/article/External-oAuth-Token-Generation-using-Azure-AD){:target="_blank"}
- [How to: create security integration & user to use with OAuth client token with Azure AD](https://community.snowflake.com/s/article/Create-Security-Integration-User-To-Use-With-OAuth-Client-Token-With-Azure-AD){:target="_blank"}
- [JSON web token debugger](https://jwt.io/){:target="_blank"}
