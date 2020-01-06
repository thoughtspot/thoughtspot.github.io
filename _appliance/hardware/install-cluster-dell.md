---
title: [Install Cluster]
summary: "Install your ThoughtSpot cluster(s) on your Dell appliance."
last_updated: 12/17/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="install-cluster"}
Install the cluster using the release tarball. Installation takes approximately one hour. Make sure you can connect to ThoughtSpot remotely. If you can, you can run the installer on your local computer.

Refer to your welcome letter from ThoughtSpot to find the link to download the release tarball. If you do not have a link to download the release tarball, open a support ticket at [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to access the release tarball.

Follow the steps in this checklist to install your cluster.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="install-cluster-dell#install-step-1">Step 1: Run the installer</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="install-cluster-dell#install-step-2">Step 2: Check cluster health</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="install-cluster-dell#install-step-3">Step 3: Finalize installation</a></td>
  </tr>
</table>

{: id="install-step-1"}
## Step 1: Run the installer
1. Copy the downloaded release tarball to `/home/admin`:<br>
  Run `scp <release-number> admin@<hostname>:/home/admin/<file-name>`. Note the following parameters:
* `release-number` is the version of ThoughtSpot on your cluster, in the form `0.0.tar.gz`. For example, `6.0.tar.gz`.
* `hostname` is your network hostname. Ask your network administrator if you do not know your hostname.
* `file-name` is the name of the tarball file on your local computer.
```
  $ scp 0.0.tar.gz admin@<hostname>:/home/admin/<file-name>
```
2. Create the cluster using `tscli cluster create <release-number>`.
```
    $ tscli cluster create 0.0.tar.gz
```
3. Edit the ouput using your specific cluster information. For more information on this process, refer to [Using the cluster create command]({{ site.baseurl }}/appliance/hardware/cluster-create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

The cluster installer automatically reboots all the nodes after the install. Wait at least 15 minutes for the installation process to complete. The system is rebooting, which takes a few minutes. Log into any node to check the current cluster status, using the command `tscli cluster status`.

{: id="install-step-2"}
## Step 2: Check cluster health
After you install the cluster, check its status using the `tscli cluster status` command.

Your output may look something like the following:
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

{: id="install-step-3"}
## Step 3: Finalize installation
After the cluster status changes to `READY`, sign into the ThoughtSpot application on your browser.<br>
Follow these steps:
1. Start a browser from your computer.
2. Enter your secure IP information on the address line.
    ```
    https://<IP-address>
    ```
3. If you don't have a security certificate for ThoughtSpot, you must bypass the security warning to proceed:
  * Click **Advanced**
  * Click **Proceed**
4. The ThoughtSpot login page appears.
5. In the [ThoughtSpot sign-in window]({{ site.baseurl }}/appliance/hardware/install-cluster-dell.html#ts-login), enter admin credentials, and click **Sign in**.
  ThoughtSpot recommends changing the default admin password.

{: id="ts-login"}
{% include image.html file="ts-login-page.png" title="ThoughtSpot's sign-in window" alt="Log into ThoughtSpot. Enter Username, Password, and click Sign in. You may select Remember me option." caption="ThoughtSpot's sign-in window" %}

{% include content/install/install-cluster-error-recovery.md %}
