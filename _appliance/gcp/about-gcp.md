---
title: [GCP node overview]
keywords: gcp,appliance,overview
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Google Cloud Platform (GCP) can provide lots of memory and CPU for your ThoughtSpot instance, and it can
be easily updated from development instances.

Your database capacity will determine the number of instances you'll need and
the instance network/storage requirements. In addition, you can go with multiple
VMs based on your dataset size.

The security group setting of your ThoughtSpot instance on GCP is up to you. You
can find more information about which ports to open in the [network ports
reference]({{ site.baseurl }}/appliance/firewall-ports.html#).

## A little about GCP

GCP is a secure cloud services platform offered by Amazon. Using ThoughtSpot on
GCP allows you to easily add instances as your dataset grows. You can do
everything you'd normally want to do in a traditional database center with GCP.
It features an on-demand delivery of IT resources and applications via the
Internet with pay-as-you-go pricing.

Amazon EC2 is based on instance types and the region in which your instances are
running. When you are connected to an instance, you can use it just like you use
any other server. There is no minimum fee and you only pay for what you use.

Using Amazon EC2 lets you develop and deploy applications faster since there is
no need to manage hardware. Therefore, it is easy to scale and manage computing
capacity.

As persistent block level storage volumes, Amazon EBS helps with scaling your
EC2 instances. Each EBS volume is automatically replicated to protect you from
component failure, and offers low-latency performance.
