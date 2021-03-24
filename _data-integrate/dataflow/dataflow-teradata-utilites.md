---
title: [Using Teradata utilities]
last_updated: 03/23/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use the TPT utility to customize Teradata connections in DataFlow.

Follow these steps to install the TPT utility for Teradata:

1. Download the Teradata Client utility from the following site.

   This adds the ` TeradataToolsAndUtilitiesBase__linux_x8664.<version>.tar.gz` file to your default download directory.

   <a href="https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0">https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0</a>

2. Extract the tar file.

   This creates the `TeradataToolsAndUtilitiesBase` folder.

   ```
#tar -zxvf TeradataToolsAndUtilitiesBase__linux_x8664.<version>.tar.gz
```

3. Change directories, and run the `setup.bat` file with root privileges.

   ```
#cd TeradataToolsAndUtilitiesBase
#sudo ./setup.bat
```

4. Depending on your requirements, select the package installation option. For TPT, select 15.

5. After the installation completes, verify it by running the `tbuild` command.

   ```
#tbuild
```





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
