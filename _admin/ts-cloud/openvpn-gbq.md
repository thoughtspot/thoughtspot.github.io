---
title: [OpenVPN for Google BigQuery]
last_updated: 11/11/2021
summary: "Learn how to configure secure access from ThoughtSpot Cloud to your data in Google BigQuery, through your OpenVPN server."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can make your data in Google BigQuery even more secure by connecting to your OpenVPN server. This feature is also available for data in [Azure Synapse]({{ site.baseurl }}/admin/ts-cloud/openvpn-synapse.html).

Your company may have a policy that prohibits exposing your cloud data to the internet. In this case, you can set up a VPN connection between your ThoughtSpot Cloud cluster and your data warehouse, either Google BigQuery or Azure Synapse.

ThoughtSpot supports the following 3 OpenVPN servers:

* [OpenVPN Community Edition](https://openvpn.net/community-downloads/){: target="_blank"}
* [Azure VPN](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-openvpn-clients){: target="_blank"}
* [AWS Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html){: target="_blank"}

## Set up an OpenVPN connection
You must perform several preliminary steps before asking [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) to connect your OpenVPN server to your ThoughtSpot cluster(s).

1. Set up an **OpenVPN server**, on OpenVPN Community Edition, Azure VPN, or AWS Client VPN.

2. Create your **OpenVPN configuration file** in `.ovpn` form. The configuration file must be *one* file, in `.ovpn` form. To generate your configuration file, refer to these articles:

* [OpenVPN Community Edition](https://openvpn.net/community-resources/creating-configuration-files-for-server-and-clients/){: target="_blank"}
* [Azure VPN](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-openvpn-clients){: target="_blank"}
* [AWS Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html){: target="_blank"}

{% include note.html content="Google BigQuery does not support OpenVPN as a managed service. You must run a VM with OpenVPN." %}

## Send the configuration file to ThoughtSpot Support
Send the OpenVPN configuration file to [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

ThoughtSpot Support then configures the VPN on your ThoughtSpot Cloud cluster(s).

## Connect your ThoughtSpot cluster(s) to your data warehouse
Configure Connections for [GBQ]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq.html).
