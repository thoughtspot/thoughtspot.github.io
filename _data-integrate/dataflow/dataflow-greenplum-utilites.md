---
title: [Using Greenplum utilities]
last_updated: 03/23/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use the Greenplum client to customize connections in DataFlow.

Follow these steps to install the Greenplum client:

1. Download the appropriate installer package for your platform from the following site. The package name has the following form: `pacgreenplum-loaders-<version>-PLATFORM.bin.zip`.

   <a href="https://network.pivotal.io/products/pivotal-gpdb#/releases/837931/file_groups/3218">https://network.pivotal.io/products/pivotal-gpdb#/releases/837931/file_groups/3218</a>

    Select the Greenplum Client for RHEL 7. This downloads the RPM file.

2. Install the Greenplum client using `yum`.

   ```
#yum install greenplum-loaders-<version>-PLATFORM.bin.zip
```

   This installs the utility on the path `/usr/local/greenplum-db-clients-<version>`.

3. To access `gpfdist` and `gpload` commands from DataFlow, create symlinks in the `/usr/bin` path.

   ```
#sudo ln -s /usr/local/greenplum-db-clients-<version>/bin/gpload /usr/bin/gpload

#sudo ln -s /usr/local/greenplum-db-clients-<version>/bin/gpfdist /usr/bin/gpfdist
```

4.	Verify the installation by running the `gpfdist` command.

   ```
#gpfdist
```

5. Restart the DataFlow service.
   ```
#tscli --adv service restart dataflow
```
