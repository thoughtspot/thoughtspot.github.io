---
title: [Set up a disaster recovery configuration]
keywords: recovery, disaster
summary: "Use this procedure to set up a disaster recovery configuration with a primary and a mirror instance."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Disaster recovery setup configures periodic backups from the primary to a
shared, mirrored storage volume. Your shared volume should have a minimum of
15GB free and at least 20GB for a full backup.

When choosing times and frequencies for periodic backups, you should choose a
reasonable frequency. Do not schedule backups too close together, since a backup
cannot start when another backup is still running. Avoid backing up when the
system is experiencing a heavy load, such as peak usage or a large data load.

This system makes it possible for you to restore the last the last backed up
state from the primary to the secondary sever. If you configure daily backups,
any metadata or data loaded/created after the last backup is not included in
restore.

## Prerequisite

You can use an NAS or Samba volume for your share. If you choose NAS, keep in
mind that too slow a volume potentially break backups or significantly slow
restore performance.

Before you begin, make sure you know if the shared volume is Samba or NAS
volume. To find out, use the `telnet` command.

<table>
  <tr>
    <td>Telnet confirms NFS</td>
    <td>Telnet confirms  Samba</td>
  </tr>
  <tr>
    <td>
    <pre>$ telnet,2049
    Trying 192.168.2.216...
    Connected to 192.168.2.216.
    Escape character is '^]'.</pre>
    </td>
    <td>
    <pre>$ telnet,445
    Trying 192.168.2.216...
    Connected to 192.168.2.216.
    Escape character is '^]'</pre>.
    </td>
  </tr>
</table>



## Configure and test your shared volume

Do the following to configure and mount the shared volume.

1. SSH into the primary appliance.

2. Ensure that the primary appliance has a ThoughtSpot cluster up and running.

   The primary appliance contains the cluster you are protecting with the
   recovery plan.

3. Create a directory to act as your  _<mount_point>_.

   ```
   sudo mkdir <mount_point>
   ```

4. Set the directory owner to `admin`.

   ```
   sudo chown -R admin:admin <mount_point>
   ```
5.  Use the `tscli nas` subcommand to create a NAS is mount on all of the cluster nodes.

    Use the command-line help or the documentation to view all the [nas subcommand]({{ site.baseurl }}/reference/tscli-command-ref.html#nas) options. Below are some samples to help you:

    <table>
    <tr>
    <th colspan="2">Example invocations</th>
    </tr>
    <tr>
    <th>Samba share:</th>
    <td><code>tscli nas mount-cifs --server 192.168.4.216 --path_on_server /bigstore_share --mount_point /mnt --username admin --password sambashare --uid 1001 --gid 1001</code></td>
    </tr>
    <tr>
    <th>Samba share with Windows AD authentication</th>
    <td><code>tscli nas mount-cifs --server 172.27.1.75 --path_on_server /elc --mount_point /home/admin/etl/external_datadir --username COMPANYCO/thoughtspot_svc --password 'ts123PDI!' --uid 1001 --gid 1001</code></td>
    </tr>
    <tr>
    <th>NFS</th>
    <td><code>tscli nas mount-nfs --server 192.168.4.132 --path_on_server /data/toolchain --mount_point /mnt</code></td>
    </tr>
    </table>

8. Log into the target machine.

9. Ensure that the target machine is not running a ThoughtSpot cluster.

  If a cluster is running on the target machine, contact please contact
  ThoughtSpot Support to delete the cluster.

10. Ensure you have the `tscli` command on the target appliance.

11. Repeat steps 3-5 on the target machine.

    The target machine and the primary machine should both be accessing the
    shared volume. The configuration of the mount point should be identical on
    both machines.

12. Test the configuration by creating a file as the `admin` user.

    ```
    touch <_mount_point_>/testfile
    ```

13. Return to the primary server and make sure you can edit the file.

    ```
    touch <_mount_point_>/testfile
    ```    


## Configure the periodic backup policy

1. If you haven't already done so, SSH into the primary server.

2. Use the `tscli backup-policy create` command.

   The command opens a `vi` editor for you to configure the backup policy. Make
   sure your policy points to the NAS mount in the primary appliance.

   If you are unfamiliar with the policy format,
   see [Configure periodic backups]({{ site.baseurl }}/admin/backup-restore/configure-backup.html).

6. Write and save the file to store your configuration.

   By default, newly created policies are automatically enabled.

7. Verify the policy using the `tscli backup periodic-config <name>` command.

   Use the `<name>` from the policy you created in the previous step.
