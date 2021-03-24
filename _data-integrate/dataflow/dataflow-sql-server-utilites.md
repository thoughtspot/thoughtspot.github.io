---
title: [Using SQLServer utilities]
last_updated: 03/23/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use the BCP utilities to customize SQLServer connections in DataFlow.

Follow these steps to install the BCP utility for SQLServer:

1. Download the Microsoft Red Hat repository configuration file.
  ```
#sudo curl https://packages.microsoft.com/config/rhel/8/prod.repo > /etc/yum.repos.d/msprod.repo
```

2. If you already installed an earlier version of mssql-tools, remove the older unixODBC packages.
   ```
#sudo yum remove mssql-tools unixODBC-utf16-devel
```

3. Run the following commands to install `mssql-tools` with the unixODBC developer package.
   ```
#sudo yum install mssql-tools unixODBC-devel
```

4. To add bcp/sqlcmd command and make it available to DataFlow, create its symlinks in the `/usr/bin` folder.
   ```
#sudo ln -s /opt/mssql-tools/bin/bcp /usr/bin/bcp
#sudo ln -s /opt/mssql-tools/bin/sqlcmd /usr/bin/sqlcmd
```

5. Verify your installation by running either the `bcp` or the `sqlcmd` command.
   ```
#bcp
#sqlcmd
```

6. Restart the DataFlow services.
   ```
#tscli --adv service restart dataflow
```
