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
After creating the instance, you must configure the nodes.

### Step 1: Log into your cluster
Use Terminal on a Mac or a terminal emulator on Windows to log into your cluster. Log in using the ssh private key provided by ThoughtSpot.
  * If you do not have a private key, contact [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) by email or through the support portal.

To log into your cluster, run `ssh -i <private-key> admin@<public-vm-ip>`.
```
    $ ssh -i <private_key> admin@<public-vm-ip>
```
### Step 2: Get a list of nodes to configure
Run the `tscli cluster get-config` command to get a list of the nodes that must be configured for the new cluster, and redirect it to the file `nodes.config`. You can find more information on this procedure in the [nodes.config file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html)

    $ tscli cluster get-config |& tee nodes.config

### Step 3: Configure the network of nodes
1. Refer to the [autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example) before adding your specific network information.
2. Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.
  * If you have additional nodes, complete each node within the nodes.config file in the same way.

Make sure that you do not edit any part of the nodes.config file except the sections explained in [Parameters of `nodes.config`]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). Deleting quotation marks, commas, or other parts of the code could cause setup to fail.

### Step 4: Configure the nodes
Configure the nodes in the `nodes.config` file using the [`set-config` command]({{ site.baseurl }}/appliance/azure/installing-azure.html#set-config-command).
1. Disable `Firewalld` by running `sudo systemctl stop firewalld` in your terminal. `Firewalld` is a Linux firewall that must be off for ThoughtSpot installation. When the cluster installer reboots the nodes, `Firewalld` automatically turns back on.
2. Run `cat nodes.config | tscli cluster set-config`.
  * If the command returns an error, refer to [set-config error recovery]({{ site.baseurl }}/appliance/hardware/installing-azure.html#set-config-error-recovery).

{: id="set-config-command"}

#### Set-config
```
$ sudo systemctl stop firewalld
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
#### Set-config error recovery
If the set-config fails with the following warning, restart the node-scout service by running `sudo systemctl restart node-scout`.

#### Restart node-scout service
If you have this error, restart the node-scout:
```
Connecting to local node-scout WARNING: Detected 0 nodes, but found configuration for only 1 nodes.  
Continuing anyway. Error in cluster config validation: [] is not a valid link-local IPv6 address for node: 0e:86:e2:23:8f:76 Configuration failed.
Please retry or contact support.
```
Restart node-scout with the following command, then retry the [set-config command]({{ site.baseurl }}/appliance/hardware/installing-aws.html#set-config-command).

    $ sudo systemctl restart node-scout

The command output should no longer have a warning:
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

### Step 5: Confirm node configuration with the `get-config` command
Run `tscli cluster get-config` in your terminal to confirm node configuration.

#### Confirm node configuration
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
{: id="cluster-install"}
## Install Cluster
Next, install the cluster using the release tarball (est. time 1 hour).

If you do not have a link to download the release tarball, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to access the release tarball.

### Step 1: Run the Installer
1. Copy the downloaded release tarball to `/home/admin` with the command `scp 0.0.tar.gz admin@hostname:/home/admin/file-name`. Replace '0.0' with your release number. Replace 'hostname' and 'file-name' with your specific hostname and the name of the tarball file.

    $ scp 0.0.tar.gz admin@hostname:/home/admin/file-name
    
