---
title: [Session APIs]
summary: "The Session APIs enable you to programmatically manage ThoughtSpot user sessions."
last_updated: 6/8/2021
redirect_from:
- /app-integrate/reference/session-api.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The Session APIs enable you to manage the sessions of ThoughtSpot users.

## Sign in a ThoughtSpot user

If you are a ThoughtSpot user, you can programmatically sign in to ThoughtSpot using the `/tspublic/v1/session/login` API.

### Resource URL
```
POST /tspublic/v1/session/login
```
### Request Parameters

| Form Parameter | Data Type | Description |
| --- | --- | --- |
| `username` | string | Username of the user account. |
| `password` | string | The password of the user account. |
| `rememberme` | boolean | A flag to remember the user session. The system default is `false`. |

### Example requests

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' -d 'username=test&password=fhfh2323bbn&rememberme=false' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/login'
```

##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/login
```
### Response codes

| HTTP Code | Description                |
|-----------|----------------------------|
| **200**   | User logged in             |
| **204**   | Successful login           |
| **401**   | Login failure/unauthorized request|
## Log out a user

To log out of the current user session, use the `/tspublic/v1/session/logout` API.

### Resource URL
```
POST /tspublic/v1/session/logout
```
### Example request
##### cURL

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/logout'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/logout
```
### Response codes

| HTTP Code | Description                 |
|-----------|-----------------------------|
| **200**   | User logged out             |
| **204**   | Successful logout           |
| **401**   | Logout failure/unauthorized request|


## Obtain an authentication token for a user

ThoughtSpot supports the trusted authentication method, which is also known as token-based authentication. In the trusted authentication method, ThoughtSpot users are authenticated by an external authentication server.
When ThoughtSpot receives a request from a trusted authentication service, it returns an authentication token to allow authenticated users to access ThoughtSpot content.

If you have enabled [trusted authentication]({{ site.baseurl }}/admin/ts-cloud/trusted-authentication.html) on ThoughtSpot and obtained a secret key, you can use the `/tspublic/v1/session/auth/token` API to get an authentication token for a ThoughtSpot user.

### Resource URL
```
POST /tspublic/v1/session/auth/token
```
### Request parameters

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Form Parameter</th>
<th style="text-align: left;">Data Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>secret_key</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The secret key string provided by the ThoughtSpot application server. This secret key is generated after you enable trusted authentication in ThoughtSpot.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>username</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The user name of the user configured in ThoughtSpot.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>access_level</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>User access permission. Valid values are:</p>
<ul>
<li><p><code>FULL</code> - Allow full access.</p></li>
<li><p><code>REPORT_BOOK_VIEW</code> - Allow view access to visualizations.</p></li>
</ul></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>id</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>GUID of the ThoughtSpot object. This parameter is required if the <code>access_level</code> is set to <code>REPORT_BOOK_VIEW</code>.</p></td>
</tr>
</tbody>
</table>

### Example request

##### cURL

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/auth/token'
```

##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/auth/token
```
### Example response

If the request parameters are assigned correct values, the API returns an authentication token for the user.

### Response codes

| HTTP Code | Description                                         |
|-----------|-----------------------------------------------------|
| **200**   | The authentication token is generated successfully |
| **401**   | Unauthorized request                       |

## Log out a user

Use this API to log out a current user from an existing session.

### Resource URL
```
POST /tspublic/v1/session/logout
```
### Example request
##### cURL

```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/logout'
```
##### Request URL
```
https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/logout
```
### Response codes

| HTTP Code | Description                 |
|-----------|-----------------------------|
| **200**   | User logged out             |
| **204**   | Successful logout           |
| **401**   | Logout failure/unauthorized request|


## Authenticate and log in a user

If trusted authentication is enabled on ThoughtSpot, the authentication server obtains an authentication token from ThoughtSpot on a user’s behalf. You can use this token to log in a ThoughtSpot user and provide access to the requested content.
To programmatically log in an authenticated user, use the `/tspublic/v1/session/login/token` API.

### Resource URL
```
GET /tspublic/v1/session/login/token
```
### Request parameters

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Form Parameter</th>
<th style="text-align: left;">Data Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><code>username</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The user name of the user who requested access to ThoughtSpot.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p><code>auth_token</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The authentication token obtained from ThoughtSpot.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p><code>redirect_url</code></p></td>
<td style="text-align: left;"><p>string</p></td>
<td style="text-align: left;"><p>The URL to which you want to redirect the user after a successful login. This URL is fully encoded and includes the authentication token obtained for the user.</p>
<p>For example, if the user has requested access to a specific visualization on a pinboard, the redirect URL includes the domains to which the user is redirected, the auth token string obtained for the user, visualization ID, and pinboard ID as shown here.</p>
<p><code>https://&lt;redirect-domain&gt;/?authtoken=&lt;user_auth_token&gt;&amp;embedApp=true&amp;primaryNavHidden=true#/embed/viz/&lt;pinboard_id&gt;/&lt;viz-id&amp;gt;</code></p></td>
</tr>
</tbody>
</table>

### Example request

##### cURL

    curl -X GET --header 'Accept: text/html' --header 'X-Requested-By: ThoughtSpot' 'https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/login/token?username=tsuser&auth_token=JHNoaXJvMSRTSEEtMjU2JDUwMDAwMCRPMFA2S0ZlNm51Qlo4NFBlZUppdzZ3PT0kMnJKaSswSHN6Yy96ZGxqdXUwd1dXZkovNVlHUW40d3FLMVdBT3hYVVgxaz0&redirect_url=https://<ThoughtSpot-Host>/?embedV2=true#/pinboard/7a9a6715-e154-431b-baaf-7b58246c13dd%2F'

##### Request URL

    https://<ThoughtSpot-host>/callosum/v1/tspublic/v1/session/login/token?username=tsadmin&auth_token=JHNoaXJvMSRTSEEtMjU2JDUwMDAwMCRPMFA2S0ZlNm51Qlo4NFBlZUppdzZ3PT0kMnJKaSswSHN6Yy96ZGxqdXUwd1dXZkovNVlHUW40d3FLMVdBT3hYVVgxaz0&redirect_url=https://<ThoughtSpot-Host>/?embedV2=true#/pinboard/7a9a6715-e154-431b-baaf-7b58246c13dd%2F

### Example response

On successful login, the API returns the application details.
The following example shows a partial output.

```
<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width">
    <meta charset="utf-8">
    <meta name="description" content="">
        <!-- Preloading Fonts -->
        <link rel="preload" href="node_modules/@thoughtspot/radiant/widgets/resources/font/optimo/Plain-Light.otf"
              as="font" crossorigin>
        <link rel="preload" href="node_modules/@thoughtspot/radiant/widgets/resources/font/bb-roller/BB-Roller-Mono-Regular-fontlab.ttf"
              as="font" crossorigin>
        <link rel="preload" href="node_modules/@thoughtspot/radiant/widgets/resources/font/optimo/Plain-Regular.otf"
              as="font" crossorigin>
        <link rel="preload" href="node_modules/@thoughtspot/radiant/widgets/resources/font/optimo/Plain-Medium.ttf"
              as="font" crossorigin>
        <link rel="preload" href="node_modules/@thoughtspot/radiant/widgets/resources/font/optimo/Plain-LightIta.otf"
              as="font" crossorigin>
        <link rel="modulepreload" href="https://cdn.skypack.dev/react">
    <link rel="modulepreload" href="https://cdn.skypack.dev/react-dom">
    <link rel="stylesheet" href='(none)'>
    <style>
        .bk-app-loading-indicator {
    position: absolute;
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    align-items: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    max-width: 100%;
    box-sizing: border-box;
}
    </style>
</head>
<body>
    <div class="bk-app-loading-indicator">
        <div class="load-wrap">
    <div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</div>
    </div>

    <script type="text/javascript" id="app-init">
        // Top level namespace var declaration
        var blink = {};
        // Object to store all CDN related variables
        blink.cdnAutoUpdateConfig = {};
        // Location of Eureka Base URL
        blink.eurekaBasePath = 'https://d2if2nytu6z4ml.cloudfront.net';
        // Keys set in blink.env will override / create flags
        blink.env = {
            dev: false
        };
        blink.commitId = '600e99e3c3ebe1b4d89abd99e920c6939616f54c';
        blink.gitBranch = '(HEAD detached at 600e99e3c3e)';
        blink.buildTimeStamp = 'Thu May 20 2021 09:25:58';
        blink.depsPath = 'node_modules';
        blink.localeSuffix = '.' + blink.commitId;
        blink.metrics = {
            scriptsLoadStartTime: window.performance.now()
        };

        function createNode(tag, attributes) {
            var node = document.createElement(tag);
            Object.keys(attributes).forEach(function (key) {
                return node[key] = attributes[key];
            });
            return node;
        }
        function appendNodesToDom(nodes) {
            var fragment = document.createDocumentFragment();
            nodes.forEach(function (node) {
                return fragment.appendChild(node);
            });
            document.getElementsByTagName('body')[0].appendChild(fragment);
        }
        function fetchAndLoadRelease(rcLink) {
            fetch(rcLink).then(function (response) {
                return response.json()
            }).then(function (releaseJson) {
                blink.cdnAutoUpdateConfig.evaluationMode = true;
                blink.cdnAutoUpdateConfig.currentReleaseVersion = releaseJson.releaseVersion;
                blink.cdnAutoUpdateConfig.cdnBuildTimestamp = releaseJson.buildTimestamp;
                blink.cdnAutoUpdateConfig.cdnBasePath = releaseJson.basePath;
                var nodes = releaseJson.resources.css.map(function (cssScript) {
                    return createNode('link', {
                        type: 'text/css',
                        rel:'stylesheet',
                        href: [blink.cdnAutoUpdateConfig.cdnBasePath, cssScript].join('/')
                    })
                });

                nodes = nodes.concat(releaseJson.resources.js.map(function (script) {
                    return createNode('script', {
                        src: [blink.cdnAutoUpdateConfig.cdnBasePath, script].join('/'),
                        async: false
                    });
                }));
                nodes = nodes
                    .concat(releaseJson.resources.modules.map(function (module, index) {
                        return createNode('script', {
                            async: false,
                            type: 'module',
                            src: [blink.cdnAutoUpdateConfig.cdnBasePath, module].join('/'),
                            id: 'module-script' + index
                        });
                    }));
                nodes = nodes
                    .concat(releaseJson.resources.noModule.map(function (noModule, index) {
                        return createNode('script', {
                            async: false,
                            noModule: true,
                            src: [blink.cdnAutoUpdateConfig.cdnBasePath, noModule].join('/'),
                            id: 'nomodule-script' + index
                        });
                    }));
                appendNodesToDom(nodes);
            }, function (error) {
                appendNodesToDom([createNode('div', {
                    innerText: 'unable to fetch: ' + rcLink +
                    'Link does not exist'
                })]);
            });
        }
        var ua = window.navigator && window.navigator.userAgent;
        var trident = ua && ua.indexOf('Trident/');
        var edge = ua && ua.indexOf('Edge');
        var safari = ua && ua.indexOf('Safari');
        var chrome = ua && ua.indexOf('Chrome');

    </script>

        <link type="text/css" rel="stylesheet" href="resources/css/all.min.90630a0a141abec0.css">

        <script src="js/lib.min.bcef417e2b193abd.js"></script>
        <script src="js/templates.133e974a290769f7.js"></script>
        <script src="js/all.min.b4be265ed3041f65.js"></script>
        <script type="module" src="js/module/app-ad896427.js
" id="module-script"></script>
        <script nomodule src="js/nomodule/app.js" id="nomodule-script"></script>
    <app-controller class="bk-app-controller-container"></app-controller>
</body>
</html>
```

### Response codes

| HTTP status code | Description                                  |
|------------------|----------------------------------------------|
| **200**          | The user is logged in successfully.          |
| **302**          | The user is redirected to the specified URL. |
| **401**          | Unauthorized request or invalid token.       |
