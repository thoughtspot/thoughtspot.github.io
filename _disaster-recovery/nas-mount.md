---
title: [Configure NAS for backup storage]
last_updated: 11/30/20
summary: "You can use network attached storage to support backup/restore and data loading."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include/content/mount-nas.md %}

You can mount NAS [through the Admin Console](#admin-portal), or [using tscli](#mount-nas-tscli).

{% include content/admin-portal/nas-mount-configure.md %}

{: id="mount-nas-tscli"}
## Mount NAS using tscli

To mount a NAS file system using the tscli, follow these steps:

1. Log in to the Linux shell using SSH.
2. Mount the directory to the file system by issuing the appropriate command:
    -   Example for an NFS (Network File System) directory:

        ```
        tscli nas mount-nfs --server storageservername.file.yourdomain.net
           --path_on_server <path>  /tsdev-backup --mount_point /export/BACKUPS/
           --options vers=<version>,sec=<security scheme>,<OPTIONS>
        ```

        {% include note.html content="Other command-line options are available to forward to the command (default: `noexec`)." %}

    -   Example for a CIFS (Common Internet File System) directory. Use `1001` for the `uid` and `gid`, as in the example:

        ```
        tscli nas mount-cifs --server storageservername.file.yourdomain.net
          --path_on_server /tsdev-backup --mount_point /export/BACKUPS/
          --username 'avtprdweutspotdev' --uid 1001 --gid 1001 --options 'vers=3.0'
        ```

        {% include note.html content="Other command-line options are available to forward to the `mount.cifs` command (default: `noexec`)." %}

3. Use the mounted file system by referring to its mount point.

4. When you are finished with it, you can optionally unmount the NAS file system:

    ```
    tscli nas unmount --dir <directory>
    ```

## Additional resources
As you develop your expertise in NAS mounts, we recommend the following ThoughtSpot U course:
* [NAS Mount](https://training.thoughtspot.com/nas-mount){:target="_blank"}

See other training resources at <br/>
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
