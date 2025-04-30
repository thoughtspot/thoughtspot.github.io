---
title: [Using PostgreSQL utilities]
last_updated: 03/23/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use the PostgreSQL v11 client to customize PostgreSQL connections in DataFlow.

Follow these steps to install the PostgreSQL v11 client:

1. For both RHEL and Centos, the package manager is `yum`.

   Point `yum` at the PostgreSQL repository.

   ```
#sudo yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```

2. Install PostgreSQL from these repositories.

    ```
#sudo yum install postgres11-client
```

3. Verify the installation by running the `psql` command.
   ```
#psql
```

4. Restart the DataFlow service.
   ```
#tscli --adv service restart dataflow
```
