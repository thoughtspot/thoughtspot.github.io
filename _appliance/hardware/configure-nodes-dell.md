---
title: [Configure Nodes]
summary: "Configure ThoughtSpot nodes on your Dell appliance."
last_updated: 12/16/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="configure-nodes"}
After you connect the appliance, a command line appears on your console. Configure the nodes on this command line. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-dell#node-step-1">Step 1: Get a template for network configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-dell#node-step-2">Step 2: Prepare node configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-dell#node-step-3">Step 3: Configure the nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-dell#node-step-4">Step 4: Confirm node configuration</a></td>
  </tr>
</table>

{: id="node-step-1"}
## Step 1: Get a template for network configuration
Make sure you have logged into your cluster. If you have not, use admin credentials to log into your cluster.

Run the `tscli cluster get-config` command to get a template for network configuration. Redirect it to the file `nodes.config`.<br>
You can find more information on this process in the [`nodes.config` file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html).

    $ tscli cluster get-config |& tee nodes.config

{: id="node-step-2"}
## Step 2: Prepare node configuration
1. Add your specific network information for the nodes in the `nodes.config` file, as demonstrated in the [autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example).
2. Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.<br>
If you have additional nodes, complete each node within the nodes.config file in the same way.

Do not edit any part of the `nodes.config` file except the sections described in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). If you delete quotation marks, commas, or other parts of the code, it may cause setup to fail.

{: id="node-step-3"}
## Step 3: Configure the nodes
Configure the nodes in the `nodes.config` file using the `set-config` command.

Run `$ cat nodes.config | tscli cluster set-config` in your terminal.<br>
If the command returns an error, refer to [set-config error recovery]({{ site.baseurl }}appliance/hardware/install-cluster-dell#set-config-error-recovery).<br>
    ```
    $ cat nodes.config | tscli cluster set-config

    Connecting to local node-scout
    Setting up hostnames for all nodes
    Setting up networking interfaces on all nodes
    Setting up hosts file on all nodes
    Setting up IPMI configuration
    Setting up NTP Servers
    Setting up Timezone
    Done setting up ThoughtSpot
  ```

{: id="node-step-4"}
## Step 4: Confirm node configuration
Use the `get-config` command to confirm node configuration.<br>
Your output may look similar to the following:
```
$ tscli cluster get-config

{
  "ClusterId": "",
  "ClusterName": "",
  "DataNetmask": "255.255.252.0",
  "DataGateway": "192.168.4.1",
  "IPMINetmask": "255.255.252.0",
  "IPMIGateway": "192.168.4.1",
  "Timezone": "America/Los_Angeles",
  "NTPServers": "0.centos.pool.ntp.org,1.centos.pool.ntp.org,2.centos.pool.ntp.org,3.centos.pool.ntp.org",
  "DNS": "192.168.2.200,8.8.8.8",
  "SearchDomains": "example.company.com",
  "Nodes": {
	"ac:1f:6b:8a:77:f6": {
  	"NodeId": "ac:1f:6b:8a:77:f6",
  	"Hostname": "Thoughtspot-server1",
  	"DataIface": {
    	"Name": "eth2",
    	"IPv4": "192.168.7.70"
  	},
  	"IPMI": {
    	"IPv4": "192.168.5.70"
  	}
	}
  }
}
```

## Install your cluster
Next, [install your cluster.]({{ site.baseurl }}/appliance/hardware/install-cluster-dell.html)
