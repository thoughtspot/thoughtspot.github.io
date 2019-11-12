---
title: [Installing Amazon Web Services]
last_updated: [10/30/2019]
summary: "Learn how to install Amazon Web Services (AWS)."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="installation-prerequisites"}
## Installation Prerequisites
Ensure the successful creation of the virtual machines (VMs) before you install the ThoughtSpot cluster on AWS:

1. **Review configuration options** Refer to [AWS configuration options]({{ site.baseurl }}/appliance/aws/configuration-options.html) for detailed instance specs.
2. **Create the instance** Refer to [Set up AWS for ThoughtSpot]({{ site.baseurl }}/appliance/aws/launch-an-instance.html) to create and launch your instance.
3. **Review required ports** Refer to [Network Policies]({{ site.baseurl }}/appliance/firewall-ports.html) to view the required ports for successful operation of ThoughtSpot.

{: id="configure-nodes"}
## Configure Nodes
After creating the instance, you must configure the nodes.

### Step 1: Log into your cluster
Log into your cluster with admin credentials from Terminal on a Mac or a terminal emulator on Windows. The admin password is th0ughtSp0t.
1. Run `ssh admin@clusterIP` or `ssh admin@hostname`, replacing 'clusterIP' or 'hostname' with your specific network information.
2. Enter your admin password.
  * Ask your network administrator if you don't know the password.
```
    $ ssh admin@clusterIP
```

### Step 2: Get a list of nodes to configure
Run the `tscli cluster get-config` command to get a list of the nodes to configure for the new cluster, and redirect it to the file `nodes.config`. You can find more information on this process in the [nodes.config file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html).

    $ tscli cluster get-config |& tee nodes.config

### Step 3: Configure the network of nodes
1. Add your specific network information for the nodes in the `nodes.config` file, as demonstrated in the [autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example).
2. Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.
  * If you have  additional nodes, complete each node within the nodes.config file in the same way.

  Make sure that you do not edit any part of the nodes.config file except the sections explained in [Parameters of `nodes.config`]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). Deleting quotation marks, commas, or other parts of the code could cause setup to fail.

### Step 4: Configure the nodes
Configure the nodes in the `nodes.config` file using the [`set-config` command]({{ site.baseurl }}/appliance/aws/installing-aws.html#set-config-command).
1. Disable `Firewalld` by running `sudo systemctl stop firewalld` in your terminal.
  `Firewalld` is a Linux firewall that must be off for ThoughtSpot installation. When the cluster installer reboots the nodes, `Firewalld` automatically turns back on.
2. Run `$ cat nodes.config | tscli cluster set-config`.
  * If the command returns an error, refer to [set-config error recovery]({{ site.baseurl }}/appliance/aws/installing-aws.html#set-config-error-recovery).

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

{: id="node-scout-restart"}

#### Restart node-scout service
If you have this error, restart the node-scout:
```
Connecting to local node-scout WARNING: Detected 0 nodes, but found configuration for only 1 nodes.  
Continuing anyway. Error in cluster config validation: [] is not a valid link-local IPv6 address for node: 0e:86:e2:23:8f:76 Configuration failed.
Please retry or contact support.
```
Restart node-scout with the following command, then retry the [set-config command]({{ site.baseurl }}/appliance/aws/installing-aws.html#set-config-command).

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

{: id=confirm-node-config}
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

{: id="run-installer"}
### Step 1. Run the Installer  
1. Copy the downloaded release tarball to `/home/admin` with the command `scp 0.0.tar.gz admin@hostname:/home/admin/file-name`. Replace '0.0' with your release number. Replace 'hostname' and 'file-name' with your specific hostname and the name of the tarball file.
```
    $ scp 0.0.tar.gz admin@hostname:/home/admin/file-name
```
2. Run `tscli cluster create <release>`.
  * If you are using an s3 bucket for object storage, include the flag `--enable_cloud_storage s3`.
```
    $ tscli cluster create 6.0.tar.gz --enable_cloud_storage s3
```  
3. Edit the output with your specific cluster information. For more information on this process, refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

  The cluster installer automatically reboots all the nodes after the install. `Firewalld` automatically turns back on. Wait at least 15 minutes for the installation process to complete. The system is rebooting, which takes a few minutes.
  Log into any node to check the current cluster status, using the command `tscli cluster status`.

### Step 2. Check Cluster Health
Once the cluster is installed, check its status with the `tscli cluster status` command [(Cluster Status)]({{ site.baseurl }}/appliance/aws/installing-aws.html#check-cluster-health).

{: id="check-cluster-health"}

#### Cluster Status
```
$ tscli cluster status
Cluster: RUNNING
Cluster name    : thoughtspot
Cluster id      : 1234X11111
Number of nodes : 3
Release         : 6.0
Last update     = Wed Oct 16 02:24:18 2019
Heterogeneous Cluster : False
Storage Type    : HDFS

Database: READY
Number of tables in READY state: 2185
Number of tables in OFFLINE state: 0
Number of tables in INPROGRESS state: 0
Number of tables in STALE state: 0
Number of tables in ERROR state: 0

Search Engine: READY
Has pending tables. Pending time = 1601679ms
Number of tables in KNOWN_TABLES state: 1934
Number of tables in READY state: 1928
Number of tables in WILL_REMOVE state: 0
Number of tables in BUILDING_AND_NOT_SERVING state: 0
Number of tables in BUILDING_AND_SERVING state: 128
Number of tables in WILL_NOT_INDEX state: 0
```
### Step 3. Finalize Installation

After the cluster status changes to “Ready,” log into the ThoughtSpot application on your browser.
Follow these steps:

1. Start a browser from your computer.
2. Enter your secure IP information on the address line.
    ```
    https:<IP-address>
    ```
3. If you don't have a security certificate for ThoughtSpot, you must bypass the security warning to proceed:
  * Click **Advanced**
  * Click **Proceed**
4. The ThoughtSpot login page appears.
5. In the [ThoughtSpot login window]({{ site.baseurl }}/appliance/aws/installing-aws.html#ts-login), enter admin credentials, and click **Sign in**.
  ThoughtSpot recommends changing the default admin password.

{: id="ts-login"}
![ThoughtSpot's login window]({{ site.baseurl }}/images/ts-login-page.png "Log into ThoughtSpot. Enter Username, Password, and click Sign in. You may select the Remember me option.")

## References
Use these references for successful installation and administration of ThoughtSpot.

* [The `nodes.config` file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
