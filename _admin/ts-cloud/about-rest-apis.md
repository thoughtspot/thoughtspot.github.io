---
title: [About REST APIs]
last_updated: 3/3/2021
summary: "ThoughtSpot REST APIs allow you to programmatically manage users, user sessions, and fetch data from the ThoughtSpot application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The ThoughtSpot REST APIs enable your client applications to access data from the ThoughtSpot application.
Client applications can use the REST APIs for the following purpose:

-   get the pinboard and visualization data from the ThoughtSpot application.

-   list the metadata object and visualization headers in the repository.

-   transfer ownership of all objects from one user to another and more.

-   embed data from visualizations and pinboards in a web page, portal, or application.

The REST APIs return data as a JSON string. To embed data into your application, extract the data from the JSON file, and render it on your Web page.

REST APIs retrieve live data from ThoughtSpot, so whenever the Web page is rendered, the current values will be shown.

## List of APIs

The following APIs are available on the Swagger portal for ThoughtSpot users.

### User management
Use the [user API]({{ site.baseurl }}/reference/api/user-api.html) to manage users.

| Request URL                                 | Description                                                          |
|---------------------------------------------|----------------------------------------------------------------------|
| `GET /tspublic/v1/user/list`   | Get all users, groups, and their inter-dependencies.                 |
| `POST /tspublic/v1/user/updatepassword`    | Change the password of a user account.                               |
| `POST /tspublic/v1/user/transfer/ownership` | Transfer ownership of all objects from one user to another.          |
| `POST /tspublic/v1/user/sync`      | Synchronize principal from your client application with ThoughtSpot. |

### User group management
Use the [group API]({{ site.baseurl }}/reference/api/group-api.html) to manage user groups.


| Request URL                              | Description                      |
|------------------------------------------|----------------------------------|
| `POST /tspublic/v1/group/addprivilege`   | Add a privilege to a group.      |
| `POST/tspublic/v1/group/removeprivilege` | Remove a privilege from a group. |

### Authentication and session management
Use the [session API]({{ site.baseurl }}/reference/api/session-api.html) to manage user sessions.

| Request URL                        | Description                              |
|------------------------------------|------------------------------------------|
| `POST /tspublic/v1/session/login`  | Authenticate and log in a user.          |
| `POST /tspublic/v1/session/logout` | Log out a user from an existing session. |

### Data APIs
Use the following data APIs to embed ThoughtSpot data:

| Data API                                   | Request URL                                                | Description                                                             |
|--------------------------------------------|------------------------------------------------------------|-------------------------------------------------------------------------|
| [pinboarddata]({{ site.baseurl }}/reference/api/pinboarddata-api.html) | `POST /tspublic/v1/pinboarddata`   | Fetch the pinboard data from the ThoughtSpot application.               |
| [Metadata]({{ site.baseurl }}/reference/api/metadata-api.html)   | `GET /tspublic/v1/metadata/listobjectheaders`  | List the metadata object headers in the repository                      |
|| `GET /tspublic/v1/metadata/listvizheaders` | Get the visualization headers from the ThoughtSpot system. |                                                                         |
| [Search data]({{ site.baseurl }}/reference/api/search-data-api.html)                                | `POST /tspublic/v1/searchdata`                             | Search data from a specific data source in the ThoughtSpot application. |


## Swagger portal

To access APIs on Swagger:

1.  Log in to ThoughtSpot as an admin user.

2.  Go to the Swagger portal.

        https://<your-thoughtspot.com>/external/swagger

    The portal displays a list of REST API services available for ThoughtSpot users.

3.  Click on a header to expand and view the list of services.

4.  Click on a service name to view more details about the API service.
