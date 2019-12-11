---
title: [Installing Amazon Web Services]
last_updated: [12/9/2019]
summary: "Learn how to install Amazon Web Services (AWS)."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To install a ThoughtSpot cluster on AWS, complete these steps:

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#installation-prerequisites">Installation Prerequisites</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#configure-nodes">Configure Nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#cluster-install">Install Cluster</a></td>
  </tr>
</table>

{: id="installation-prerequisites"}
## Installation Prerequisites
Ensure the successful creation of the virtual machines (VMs) before you install the ThoughtSpot cluster on AWS:

1. **Review configuration options** Refer to [AWS configuration options]({{ site.baseurl }}/appliance/aws/configuration-options.html) for detailed instance specs.
2. **Create the instance** Refer to [Set up AWS for ThoughtSpot]({{ site.baseurl }}/appliance/aws/launch-an-instance.html) to create and launch your instance.
3. **Review required ports** Refer to [Network Policies]({{ site.baseurl }}/appliance/firewall-ports.html) to view the required ports for successful operation of ThoughtSpot.

{: id="configure-nodes"}
## Configure Nodes
After creating the instance, you must configure the nodes. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#node-step-1">Step 1: Log into your cluster</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#node-step-2">Step 2: Get a list of nodes to configure</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#node-step-3">Step 3: Configure the network of nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#node-step-4">Step 4: Configure the nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#node-step-5">Step 5: Confirm node configuration</a></td>
  </tr>
</table>

{: id="node-step-1"}
### Step 1: Log into your cluster
Log into your cluster with admin credentials from Terminal on a Mac or a terminal emulator on Windows. Ask your network administrator if you do not know the admin credentials.
1. Run `ssh admin@<clusterIP>` or `ssh admin@<hostname>`.<br>
Replace `clusterIP` or `hostname` with your specific network information.
```
$ ssh admin@<clusterIP>
```
2. Enter your admin password.<br>
Ask your network administrator if you don't know the password.

{: id="node-step-2"}
### Step 2: Get a list of nodes to configure
Run the `tscli cluster get-config` command to get a list of the nodes to configure for the new cluster. Redirect it to the file `nodes.config`.<br>
You can find more information on this process in the [`nodes.config` file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html).

    $ tscli cluster get-config |& tee nodes.config

{: id="node-step-3"}
### Step 3: Configure the network of nodes
1. Add your specific network information for the nodes in the `nodes.config` file, as demonstrated in the [autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example).
2. Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.<br>
If you have additional nodes, complete each node within the nodes.config file in the same way.

Do not edit any part of the `nodes.config` file except the sections described in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). If you delete quotation marks, commas, or other parts of the code, it may cause setup to fail.

{: id="node-step-4"}
### Step 4: Configure the nodes
Configure the nodes in the `nodes.config` file using the [`set-config` command]({{ site.baseurl }}/appliance/aws/installing-aws.html#set-config-command).
1. Disable the `firewalld` service by running `sudo systemctl stop firewalld` in your terminal.
  The `firewalld` service is a Linux firewall that must be off for ThoughtSpot installation. After the cluster installer reboots the nodes, `firewalld` automatically turns back on.
```
    $ sudo systemctl stop firewalld
```  
2. To make sure you temporarily disabled `firewalld`, run `sudo systemctl status firewalld`. Your output should specify that `firewalld` is inactive. It may look something like the following:
```
    $ sudo systemctl status firewalld
      ● firewalld.service - firewalld - dynamic firewall daemon
        Loaded: loaded (/usr/lib/systemd/system/firewalld.service; disabled; vendor preset: enabled)
        Active: inactive (dead)
```
2. Run the configuration command: `$ cat nodes.config | tscli cluster set-config`.<br>
If the command returns an error, refer to [set-config error recovery]({{ site.baseurl }}/appliance/aws/installing-aws.html#set-config-error-recovery).

{: id="set-config-command"}
`Set-config`

After you run the node configuration command, your output appears similar to the following:
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

{: id="node-step-5"}
### Step 5: Confirm node configuration
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

{: id="cluster-install"}
## Install Cluster
Install the cluster using the release tarball. The estimated installation time is one hour. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#cluster-step-1">Step 1: Run the installer</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#cluster-step-2">Step 2: Check cluster health</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-aws#cluster-step-3">Step 3: Finalize installation</a></td>
  </tr>
</table>

If you do not have a link to download the release tarball, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to request access to the release tarball.

{: id="cluster-step-1"}
### Step 1: Run the installer  
1. Copy the downloaded release tarball to `/home/admin` using the following command:
```
    $ scp <release-number>.tar.gz admin@<hostname>:/home/admin/<file-name>
```
Note the following parameters:
* `release-number` is the release number of your ThoughtSpot instance, such as 5.3, 6.0, and so on.
* `hostname` is your specific hostname.
* `file-name` is the name of the tarball file on your local computer.

2. Create the cluster<br>
Run `tscli cluster create` to create the cluster.<br>
If you are using an s3 bucket for object storage, include the flag `--enable_cloud_storage=s3`.
```
    $ tscli cluster create <release-number>.tar.gz --enable_cloud_storage=s3
```  
3. Edit the output with your specific cluster information.<br>
For more information on this process, refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

  The cluster installer automatically reboots all the nodes after a successful install. The `firewalld` service automatically turns on. At this time, the system is rebooting, which may take approximately 15 minutes.<br>
  Log into any node to check the current cluster status:
  ```   
    $ tscli cluster status
  ```

{: id="cluster-step-2"}
### Step 2: Check cluster health
After the cluster installs, check its status using the `tscli cluster status` command.

Your output may look similar to the following:
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

{: id="cluster-step-3"}
### Step 3: Finalize installation

After the cluster status changes to `READY`, log into ThoughtSpot on your browser.
Follow these steps:

1. Start a browser from your computer.
2. Enter your secure IP information on the address line.
    ```
    https:<IP-address>
    ```
3. If you don't have a security certificate for ThoughtSpot, you must bypass the security warning:
  * Click **Advanced**
  * Click **Proceed**
4. The ThoughtSpot login page appears.
5. In the [ThoughtSpot login window]({{ site.baseurl }}/appliance/aws/installing-aws.html#ts-login), enter admin credentials, and click **Sign in**.
  ThoughtSpot recommends changing the default admin password.

{: id="ts-login"}
![ThoughtSpot's login window]({{ site.baseurl }}/images/ts-login-page.png "Log into ThoughtSpot. Enter Username, Password, and click Sign in. You may select the Remember me option.")

{: id="error-recovery"}
## Error recovery
{: id="set-config-error-recovery"}
### `Set-config` error recovery
If you get a warning about node detection when you run [the `set-config` command]({{ site.baseurl }}#set-config-command), restart the node-scout service.

Your error may look something like the following:
```
Connecting to local node-scout WARNING: Detected 0 nodes, but found configuration for only 1 nodes.  
Continuing anyway. Error in cluster config validation: [] is not a valid link-local IPv6 address for node: 0e:86:e2:23:8f:76 Configuration failed.
Please retry or contact support.
```
Restart the node-scout service with the following command.

    $ sudo systemctl restart node-scout

Ensure that you restarted the node-scout by running `sudo systemctl status node-scout`. Your output should specify that the node-scout service is active. It may look something like the following:
```
$ sudo systemctl status node-scout
  ● node-scout.service - Setup Node Scout service
    Loaded: loaded (/etc/systemd/system/node-scout.service; enabled; vendor preset: disabled)
    Active: active (running) since Fri 2019-12-06 13:56:29 PST; 4s ago
```    

Next, retry the [set-config command]({{ site.baseurl }}/appliance/aws/installing-aws.html#set-config-command).

    $ cat nodes.config | tscli cluster set-config

The command output should no longer have a warning.

## High availability
Next, set up high availability (HA) for your cluster. Refer to [Set up high availability for AWS]({{ site.baseurl }}/appliance/aws/ha-aws-efs.html).

## References
Use these references for successful installation and administration of ThoughtSpot:

* [The `nodes.config` file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
