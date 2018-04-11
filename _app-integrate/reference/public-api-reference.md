---
title: [Public API reference]
keywords: REST,API,data,"REST API"
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This reference details all the public ThoughtSpot APIs. The descriptions are
aimed to help you solve specific use cases, such as syncing users and groups, or
fetching visualization headers. The following public APIs are available:

- [pinboarddata API]({{ site.baseurl }}/app-integrate/reference/pinboarddata.html)
- [metadata API]({{ site.baseurl }}/app-integrate/reference/metadata-api.html)
- [session API]({{ site.baseurl }}/app-integrate/reference/session-api.html)
- [user API]({{ site.baseurl }}/app-integrate/reference/user-api.html)
- [group API]({{ site.baseurl }}/app-integrate/reference/group-api.html)

See [About the REST API]({{ site.baseurl
}}/app-integrate/data-api/about-data-api.html#) for information on how to call
and use the REST APIs.

## Interactive Swagger rest browser

Your ThoughtSpot installation has an interactive REST browser application built
in.  You can view the Swagger content at:

`https://<instance_name>/external/swagger/#/`

You can use the instance to review API documentation and test the APIs before
using them in an application.

{% include warning.html content="The Swagger browser application reveals both
private and public APIs. You should not use the private APIs, their signature
can change without warning breaking your application." %}
