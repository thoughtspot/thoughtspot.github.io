---
title: [Using OCI utilities]
last_updated: 03/23/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use the OCI client to customize Oracle connections in DataFlow.

Follow these steps to install the OCI client:

1. Download the OCI RPM Package or Zip file from this site. Select the appropriate Oracle/Exadata server version.

   <a href="https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html">https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html</a>

2. Install the RPM package using yum.

    ```
#sudo yum install oracle-instantclient<version>-basic-<version>.x86_64.rpm
```

3. Install the Oracle client in the `/usr/lib/oracle/<Version>/client64` directory, and set the  environment variables to enable OCI for DataFlow.

   ```
echo “export ORACLE_HOME=/usr/lib/oracle/<version>/client64” >> ~/.bash_profile
echo “export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${ORACLE_HOME}/lib” >> ~/.bash_profile
echo “export PATH=$PATH:${ORACLE_HOME}/bin” >> ~/.bash_profile

source ~/.bash_profile
```

4. Restart the DataFlow service.
   ```
#tscli --adv service restart dataflow
```
