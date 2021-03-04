---
title: [Configure trusted authentication]
last_updated: 3/3/2021
summary: "ThoughtSpot supports token-based trusted authentication service to authenticate embed application users."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

If your organization has a trusted authentication server, you can use it to authenticate users who  request access to the embedded ThoughtSpot application. After authenticating a user, the trusted authenticator server obtains an authentication token from ThoughtSpot on the user’s behalf. This ensures that the user authentication persists across all subsequent user sessions.

{% include note.html content="To use the trusted authentication method, you must enable CORS and add the authentication server domain to the allowed list. For more information, see [Configure security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).
" %}

## Trusted authentication workflow

The embed user authentication workflow with trusted authentication service involves the following steps:

1.  A user logs into the client application and requests access to an embedded ThoughtSpot component.

2.  The client application sends a request for a user token from the trusted authenticator.

    Your server application must determine the following:

    -   if the requestor has authenticated with your server.

    -   which user (`username`) is making the request.

    -   what is being requested: an object, page, or the entire ThoughtSpot application.

    -   whether the requesting `username` matches a `username` on the ThoughtSpot application.

3.  The trusted authenticator server intercepts the request, authenticates the user, and requests a token from ThoughtSpot on the user’s behalf.

         POST https://<base-uri>/tspublic/v1/session/auth/token

    This POST request method includes the following attributes:

    |      Attribute         |             Description                                                                                                               |
    |---------------|----------------------------------------------------------------------------------------------------------------------------|
    | `secret_key`   | A required `formData` parameter containing the authentication token string provided by the ThoughtSpot application server. |
    | `username`      | A required `formData` parameter containing a string, which is the `username` of the ThoughtSpot user.                         |
    | `access_level` | A required `formData` parameter containing one of `FULL` or `REPORT_BOOK_VIEW`.                                            |
    | `id`            | An optional `formData` parameter containing the identifier of the embedded ThoughtSpot object.    This is only required if you specified `REPORT_BOOK_VIEW` for the `access_level` parameter.                                 |

4.  ThoughtSpot verifies the authenticator server’s request and returns a user token.

5.  The authenticator returns the user token to the client, which uses it to complete the user request.

6.  The client application forwards the request and the user token to the ThoughtSpot application server.

    ``` HTML
    GET https://<base-uri>/tspublic/v1/session/auth/token?username=<user>&auth_token=<token>&redirect_url=<full-encoded-url-with-auth-token>
    ```

    The request URL includes the following attributes:

    `username`  
    *String*. The `username` of the user requesting access to ThoughtSpot.

    `auth-token`  
    *String*. The authentication token obtained for the user from the trusted authentication service.

    `redirect_url`  
    *String*. The URL to which the user is redirected after successful authentication. The URL is fully encoded and includes the authentication token obtained for the user.

    For example, if the user has requested access to a specific visualization on a pinboard, the redirect URL includes the domains to which the user is redirected, the auth token string obtained for the user, visualization ID, and pinboard ID.

    ``` HTML
    https://<redirect-domain>/?authtoken=<user_auth_token>&embedApp=true&primaryNavHidden=true#/embed/viz/<pinboard_id>/<viz-id>
    ```

    <div class="note">

    The request URL includes the `auth-token` attribute, whereas the redirect URL uses the `authtoken` attribute.

    </div>

7.  ThoughtSpot validates the token and returns the information that the authenticated user has requested.

The following illustration depicts the trusted authentication workflow:

![Trusted Authentication Workflow]({{ site.baseurl }}/images/authentication.png)

## Enable trusted authentication

You need ThoughtSpot admin privileges to enable trusted authentication.

1.  Log in to the ThoughtSpot.

2.  Click the **SpotDev** tab.

3.  Under **Customizations**, click **Settings**.

4.  To enable trusted authentication, turn on the toggle.

    An authentication token is generated.

5.  Click the clipboard icon to copy the token.

    The following example shows a ThoughtSpot-generated authentication token key.

        b0cb26a0-351e-40b4-9e42-00fa2265d50c

    This key is required for making API calls to get a token for ThoughtSpot users.

6.  Store the key in a secure location.

7.  Click **Save Changes**.

## Disable trusted authentication

To disable trusted authentication, follow these steps:

1.  Go to **SpotDev** &gt; **Customizations** &gt; **Settings**.

2.  On the **SpotDev Settings** page, turn off the **Trusted Authentication** toggle.

    A pop-window appears and prompts you to confirm the disable action.

3.  Click **Disable**.

    When you disable trusted authentication, the validity of your existing authentication token expires. You need to generate a new token by re-enabling trusted authentication.
