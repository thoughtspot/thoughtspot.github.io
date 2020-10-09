{: id="admin-portal"}
## Mount NAS using the Admin Console
To mount a NAS file system using the Admin Console, navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **NAS Configuration** from the side navigation bar that appears.

![Admin Console - NAS]({{ site.baseurl }}/images/admin-portal-nas.png "Admin Console - NAS")

1. Select **Add Mount Point**.

2. Specify the parameters in the dialog box that appears:

    ![Add mount point]({{ site.baseurl }}/images/admin-portal-nas-add.png "Add mount point")

    | **1** | Choose the mount type: either `NFS` (Network File System) or `CIFS` (Common Internet File System). |
    | **2** | Specify the server address, in the form `storageservername.file.yourdomain.net`. |
    | **3** | Specify the server path. |
    | **4** | Specify the local mount point. This should be within the `/export` directory. |
    | **5** | If you choose the `CIFS` mount type, you must specify a username and password. |
    | **6** | If you choose the `CIFS` mount type, you must specify a username and password. |
    | **7** | Optionally specify additional command-line subcommands and flags. Refer to [the tscli reference]({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-nas) for NAS commands. |

3. Click **OK**.

You can unmount NAS from the Admin Console, or by running `tscli nas unmount --dir <directory>`.
