---
title: [Azure node overview]
keywords: Azure,appliance,overview
tags: [cloud,vm]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Azure can provide lots of memory and CPU for your ThoughtSpot instance, and it can
be easily updated from development instances.

Your database capacity will determine the number of instances you’ll need and the
memory and storage requirements. Depending on the amount of data you want to load,
you can use multiple nodes together in a single instance.

The security group setting of your ThoughtSpot instance on Azure is up to you. You
can find more information about which ports to open in the [network ports
reference]({{ site.baseurl }}/appliance/firewall-ports.html#).

## A little about Azure

Azure is a secure cloud services platform offered by Microsoft. Using
ThoughtSpot  on Azure allows you to easily add instances as your dataset grows.
You can do everything you’d normally want to do in a traditional database center
with Azure. It features an on-demand delivery of IT resources and applications
via the Internet. When you are connected to an instance, you can use it just
like you use any other server.

Using Azure lets you develop and deploy applications faster since there is no
need to manage hardware. Therefore, it is easy to scale and manage computing
capacity.

Azure uses [role based access control
(RBAC)](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview)
to manage permissions on resources. Permissions are assigned to a
[scope](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview#scope)
in the following hierarchy: Subscription, management group, resource group, and
individual resource. See [Organize your
resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management-groups-overview)
in the Azure documentation for information on how to use this capability.
