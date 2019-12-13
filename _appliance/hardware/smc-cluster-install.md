---
title: [Install ThoughtSpot Clusters on the Super Micro Computer Appliance]
last_updated: [12/12/2019]
summary: "Learn how to install ThoughtSpot clusters on the SMC appliance."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="cluster-install"}
## Install Cluster
Next, install the cluster using the release tarball (est. time 1 hour). Make sure you can connect to ThoughtSpot remotely. If you can, you can run the installer on your local computer.

If you have not received a link to download the release tarball, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to access the release tarball.

{: id="run-installer"}
### 1. Run the Installer
1. Copy the downloaded release tarball to `/home/admin` with the command `scp 0.0.tar.gz admin@hostname:/home/admin/file-name`. Replace '0.0' with your release number. Replace 'hostname' and 'file-name' with your specific hostname and the name of the tarball file.
```
    $ scp 0.0.tar.gz admin@hostname:/home/admin/file-name
```
2. Run `tscli cluster create <release>`.
```
    $ tscli cluster create 6.0.tar.gz
```
3. Edit the output with your specific cluster information. For more information on this process, refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster-create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

  The cluster installer automatically reboots all the nodes after the install. Wait at least 15 minutes for the installation process to complete. The system is rebooting, which takes a few minutes.
  Log into any node to check the current cluster status, using the command `tscli cluster status`.

### 2. Check Cluster Health
Once the cluster is installed, check its status with the `tscli cluster status` command [(Cluster Status)]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html#check-cluster-health).

{: id="check-cluster-health"}

**Cluster Status**
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
### 3. Finalize Installation

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
5. In the [ThoughtSpot login window]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html#ts-login), enter admin credentials, and click **Sign in**. If you do not know the admin credentials, ask your network administrator.
  ThoughtSpot recommends changing the default admin password.

{: id="ts-login"}
![ThoughtSpot's login window]({{ site.baseurl }}/images/ts-login-page.png "Log into ThoughtSpot. Enter Username, Password, and click Sign in. You may select Remember me option.")

## References
Use these references for successful installation and administration of ThoughtSpot.

* [The `nodes.config` file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster-create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
