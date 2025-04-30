---
title: [Configure load balancing and proxies]
tags: [bestpractices]
keywords: "load balancing, performance"
last_updated: tbd
summary: "A load balancer is needed in front of a server group in order to direct traffic to individual servers in a way that maximizes efficiency. "
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Here are some of the best practices and guidelines for a typical implementation with ThoughtSpot. Your experience may differ depending on your environment and preference.

## Load balancing across ThoughtSpot nodes

The following shows a network architectural diagram which includes a load balancer for ThoughtSpot nodes.

![]({{ site.baseurl }}/images/network_architectural_diagram.png)

The load balancer appliance/implementation manages traffic to back-end cluster nodes to provide failover and high-availability capabilities for a multi-node ThoughtSpot cluster. 

Deploying a load balancer between users and a ThoughtSpot cluster is highly recommended. 
You must set up a load balancer before you can set up CORS, SAML or single sign-on for a multi-node ThoughtSpot cluster. 

## Typical configuration for a load balancer

1. Session affinity: Having it enabled by default helps retain established SSL sessions, instead of having to frequently renegotiate sessions between the load balancer and back-end nodes. This is the recommended setting.
2. Maximum size of HTTP POST request: Some load balancers / proxy solutions impose a default limit (as low as 1 MB) on the size of HTTP POST requests. ThoughtSpot requires it to be set to 50 MB (or as close to it as possible), so please confirm you've set this correctly.
3. Server-side SSL profile must be enabled on load balancers.
4. The following SSL ciphers must be enabled on server-side SSL profile : [Supported SSL ciphers]({{ site.baseurl}}/admin/setup/SSL-config.html#supported-ssl-ciphers)

## Web proxies

You can access ThoughtSpot through any standard Web proxy server. Web proxies are fairly universal regardless of the application they are proxying. 
ThoughtSpot doesn't use any new protocols, like SPDY or HTTP/2, which may have a dependency on the proxy and as a result, ThoughtSpot is commonly placed behind a Web HTTP/HTTPS proxy.

The proxy can also round-robin across the nodes in ThoughtSpot cluster in which case you are using the Web proxy as a load balancer. Your session will carry over, if the proxy round robins between the ThoughtSpot backends as long as the URL doesn’t change.

## Alternatives
One way to load balance across all ThoughtSpot nodes in a cluster is to map one domain name (FQDN) to all the IPs in the cluster in a round-robin fashion. 
This is no longer recommended because:
1. This is not suitable for secured (HTTPS) access.
2. DNS-based round-robin isn't aware of the state of back-end nodes and can still send requests to nodes that are no longer in service. 
