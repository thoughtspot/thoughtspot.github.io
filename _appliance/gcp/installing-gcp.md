---
title: [Configure ThoughtSpot nodes in GCP]
last_updated: [1/7/2020]
summary: "Prepare to install your ThoughtSpot cluster by configuring nodes."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Before you can install a ThoughtSpot cluster in GCP, you must configure your nodes.

{: id="installation-prerequisites"}
## Installation Prerequisites
Ensure the successful creation of the virtual machines (VMs) before you install the ThoughtSpot cluster in GCP.

1. **Review configuration options** Refer to [GCP configuration options]({{ site.baseurl }}/appliance/gcp/configuration-options.html) for detailed instance specs.
2. **Create the instance** Refer to [Set up GCP for ThoughtSpot]({{ site.baseurl }}/appliance/gcp/launch-an-instance.html) to create and launch your instance.
3. **Review required ports** Refer to [Network Policies]({{ site.baseurl }}/appliance/firewall-ports.html) to view the required ports for successful operation of ThoughtSpot.

{: id="configure-nodes"}
## Configure Nodes
After creating the instance, you must configure the nodes. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-gcp#node-step-1">Step 1: Log into your cluster</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-gcp#node-step-2">Step 2: Get a template for network configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-gcp#node-step-3">Step 3: Prepare node configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-gcp#node-step-4">Step 4: Configure the nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-gcp#node-step-5">Step 5: Confirm node configuration</a></td>
  </tr>
</table>

{% include content/install/configure-nodes-steps1through5.md %}

## Install ThoughtSpot software
Next, [install your ThoughtSpot clusters]({{ site.baseurl }}/appliance/gcp/gcp-cluster-install.html).

{% include content/install/install-cluster-error-recovery.md %}

## Related information
Use these references for successful installation and administration of ThoughtSpot.

* [The nodes.config file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the nodes.config file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the tscli cluster create command]({{ site.baseurl }}/appliance/hardware/cluster-create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
