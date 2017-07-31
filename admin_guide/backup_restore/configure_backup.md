# Configure periodic backups

You can configure ThoughtSpot to take backups for you automatically at specified times you define, following crontab format. Old backups are discarded automatically, using FIFO \(first in, first out\).

Periodic backup takes a full, lightweight, or dataless backup of the cluster. It goes through the same steps as creating a backup manually, first taking a snapshot and then pulling it out into a backup on disk. Make sure you have adequate space to store the number of backups you want to archive. You can [mount a NAS \(network attached storage\) file system](../setup/NAS_mount.html#) to hold the periodic backups or use a local option.

ThoughtSpot supports multiple periodic backups with different modes. And for each policy, you can have different types of backups.

When choosing times and frequencies for periodic backups, you should choose a reasonable frequency. Do not schedule backups too close together, since a backup cannot start when another backup is still running. Avoid backing up when the system is experiencing a heavy load, such as peak usage or a large data load.

When choosing the number of backups to store, keep in mind that there is no automatic checking to validate that a backup is valid for restoring a cluster. When the maximum number of backups has been reached, the next backup operation deletes the oldest stored backup and the corresponding snapshot before starting the new backup. This means that if you set the number of backups to one, that backup will be deleted before a new backup can be taken. For this reason, you should always set the number of backups to be greater than two, to ensure you have at least one backup available in the case of a failure while taking a backup. It is recommended to keep as many backups as you can reasonably store, to ensure you have a good backup available if you need to restore a cluster.

The garbage collection policy for periodic backups align with the following policy:

-   7 \* 1-day backups
-   4 \* 1-week backups

This means you will always have a backup that was created every day for the past seven days, and a backup for every week for the past four weeks.

To configure periodic backups:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#). 
2.   Find a directory with enough disk space to hold the number of backups you want to archive. Hint: You can use df -h to see free disk space and tscli snapshot ls to view existing snapshots and their size on disk.
3.   Use the tscli backup list-policy command to see a list of present backup policies. 
4.   Use the tscli backup create-policy command to set the times to back up, directory to store backups, and number of backups to archive. The command will prompt an editor for you to edit the parameters of the backup policy.
5.   After setting up the backup configurations, use `tscli backup periodic-config <name>` to check the policy details and that it is ready. 
6.   You can also run `tscli backup periodic-status <name>` at any time to check whether the periodic backup is running fine. The command will provide information on the periodic backup <name\> and when it was created. 
7.   If you would like to edit the policy, you can use `tscli backup update-policy <name>`. This prompt will open an editor for you to edit the policy. 
8.   Use `tscli backup disable-periodic` to turn off the periodic backup. You can also use `tscli backup disable-policy <name>` to disable a specific policy. And you can use `tscli backup enable-policy <name>` to reenable it. Additionally, you can delete a policy with `tscli backup delete-policy <name>`. 

