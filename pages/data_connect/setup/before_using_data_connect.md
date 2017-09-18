---
title: [Prerequisites and Architecture]
tags:
keywords: tbd
last_updated: tbd
toc: false
sidebar: mydoc_sidebar
---
There are a few prerequisites before using ThoughtSpot Data Connect. You need to have ThoughtSpot enable the connection to Informatica, and enter the data connection credentials.

## Prerequisites

The following prequisites and considerstions apply to the data connect feature:

- Your Informatica account will be provisioned by ThoughtSpot.
- If you want to use HTTPS with your URL, you will need to provide a signed certificate when enabling ThoughtSpot Data Connect.
- You will need outbound HTTPS \(port 443 for infaagent\) internet access to [https://app.informaticaondemand.com](https://app.informaticaondemand.com/) and [https://app2.informaticacloud.com/](https://app2.informaticacloud.com/).

    If outbound HTTPS internet access to [https://app.informaticaondemand.com](https://app.informaticaondemand.com/) and [https://app2.informaticacloud.com/](https://app2.informaticacloud.com/) is not possible, you can instead whitelist the Informatica Cloud IP address ranges `206.80.52.0/24`, `206.80.61.0/24`, `209.34.91.0/24`, and `209.34.80.0/24`.

- You will also need any other internet connectivity and credentials required to access any cloud data sources you want to connect to, such as Salesforce. No inbound access is required.
- Once ThoughtSpot Data Connect is enabled, any user who belongs to a group with **Has administration privileges** or who **Can Manage Data** can use the feature. Before enabling the feature, in sure that these privileges are configured properly.

Please refer to the [Informatica Cloud Security Architecture Overview](https://thoughtspot.egnyte.com/dl/fuxryvKclK) whitepaper to learn how each component and service is secured. You can also ask ThoughtSpot Support for a copy of the document.

## ThoughtSpot Data Connect design

ThoughtSpot Data Connect is designed to configure and connect to any on-premise or cloud data source. It quickly pulls data into ThoughtSpot through an easy to use point-and-click user interface. This diagram shows all of the required connections.

 ![](/pages/images/data_connect_design.png "High-level ThoughtSpot Data Connect design diagram")



## Related information  

[ThoughtSpot Egnyte site](https://thoughtspot.egnyte.com/dl/fuxryvKclK)
