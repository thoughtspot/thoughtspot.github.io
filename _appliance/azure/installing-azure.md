---
title: [Installing Azure]
last_updated: [11/11/2019]
summary: "Learn how to install a ThoughtSpot cluster on Azure."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="installation-prerequisites"}
## Installation Prerequisites
Ensure the successful creation of the virtual machines (VMs) before you install the ThoughtSpot cluster on AWS.

1. **Review configuration options** Refer to [Azure configuration options]({{ site.baseurl }}/appliance/azure/configuration-options.html) for detailed instance specs.
2. **Create the instance** Refer to [Set up AWS for ThoughtSpot]({{ site.baseurl }}/appliance/azure/launch-an-instance.html) to create and launch your instance.
3. **Review required ports** Refer to [Network Policies]({{ site.baseurl }}/appliance/firewall-ports.html) to view the required ports for successful operation of ThoughtSpot.

{: id="configure-nodes"}
## Configure Nodes
After creating the instance, you can start to configure the nodes.

### Step 1: Log into your cluster
Use Terminal on a Mac or a terminal emulator on Windows to log into your cluster. Log in using the ssh private key provided by ThoughtSpot.
  * If you do not have a private key, contact [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html).

To log into your cluster, run `ssh -i <private-key> admin@<public-vm-ip>`.
```
    $ ssh -i <private_key> admin@<public ip of vm>
```
### Step 2: Run the `get-config` command
Run the `tscli cluster get-config` command to get a list of the nodes that must be configured for the new cluster, and redirect it to the file `nodes.config`.  More information on this procedure can be found in the [nodes.config file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html)
