---
title: [Install ThoughtSpot Clusters on the SMC Appliance]
last_updated: [12/13/2019]
summary: "Install your clusters on the SMC appliance."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Install the cluster using the release tarball. Installation takes approximately one hour. Make sure you can connect to ThoughtSpot remotely. If you can, you can run the installer on your local computer.

Refer to your welcome letter from ThoughtSpot to find the link to download the release tarball. If you have not received a link to download the release tarball, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to access the release tarball.

{: id="run-installer"}
## Step 1. Run the Installer
1. Copy the downloaded release tarball to `/home/admin`.
Run `scp <release-number>.tar.gz admin@<hostname>:/home/admin/<file-name>`.

    Note the following parameters:
    * `release-number` is the release number of your ThoughtSpot installation, such as `6.0`, `5.3`, `5.3.1`, and so on.
    * `hostname` is your specific hostname.
    * `file-name` is the name of the tarball file on your local machine.
    ```
    $ scp 0.0.tar.gz admin@hostname:/home/admin/file-name
    ```

2. Create the cluster.<br>
Run `tscli cluster create <release-number>`.
```
    $ tscli cluster create 6.0.tar.gz
```

3. Edit the output using your specific cluster information. For more information on this process, refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster-create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

  The cluster installer automatically reboots all the nodes after the install. Wait at least 15 minutes for the installation process to complete. The system is rebooting, which takes a few minutes.

  Log into any node to check the current cluster status, using the command `tscli cluster status`.

## Step 2. Check Cluster Health
After you install the cluster, check its status using the `tscli cluster status` command.

{: id="check-cluster-health"}
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
## Step 3. Finalize Installation

After the cluster status changes to “Ready,” sign into the ThoughtSpot application on your browser.<br>
Follow these steps:

1. Start a browser from your computer.
2. Enter your secure IP information on the address line.
    ```
    https://<IP-address>
    ```
3. If you don't have a security certificate for ThoughtSpot, you must bypass the security warning to proceed:
  * Click **Advanced**
  * Click **Proceed**
4. The ThoughtSpot sign-in page appears.
5. In the [ThoughtSpot sign-in window]({{ site.baseurl }}#ts-login), enter admin credentials, and click **Sign in**. If you do not know the admin credentials, ask your network administrator.
  ThoughtSpot recommends changing the default admin password.

{: id="ts-login"}
{% include image.html file="ts-login-page.png" title="ThoughtSpot's sign-in window" alt="Log into ThoughtSpot. Enter Username, Password, and click Sign in. You may select the Remember me option." caption="ThoughtSpot's sign-in window" %}

## Error recovery

{: id="set-config-error-recovery"}
### `Set-config` error recovery
If you get a warning about node detection when you run the `set-config` command, restart the node-scout service.

Your error may look something like the following:
```
Connecting to local node-scout WARNING: Detected 0 nodes, but found configuration for only 1 nodes.  
Continuing anyway. Error in cluster config validation: [] is not a valid link-local IPv6 address for node: 0e:86:e2:23:8f:76 Configuration failed.
Please retry or contact support.
```

Restart the node-scout service with the following command.
```
$ sudo systemctl restart node-scout
```

Ensure that you restarted the node-scout by running `sudo systemctl status node-scout`. Your output should specify that the node-scout service is active. It may look something like the following:
```
$ sudo systemctl status node-scout
  ● node-scout.service - Setup Node Scout service
    Loaded: loaded (/etc/systemd/system/node-scout.service; enabled; vendor preset: disabled)
    Active: active (running) since Fri 2019-12-06 13:56:29 PST; 4s ago
```    
Next, retry the set-config command.
```
$ cat nodes.config | tscli cluster set-config
```
The command output should no longer have a warning.
