---
title: [Using IBM Db2 utilities]
last_updated: 03/23/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use the Db2 client to customize connections in DataFlow.

Follow these steps to install the Db2 client:

1. Get the Db2 client from this site:

   <a href="https://www.ibm.com/support/fixcentral">https://www.ibm.com/support/fixcentral</a>

2. Extract the `v10.1fp10_linuxx64_rtcl.tar` file.

   ```
#tar –xvf v10.1fp10_linuxx64_rtcl.tar
```

   This creates the `rtcl` folder.

3. Change directories to the `rtcl` folder, and run the `db2_install` command.

   ```
#cd rtcl
#sudo ./db2_install
```

  The system prompts you to enter the installation path for extracting files, such as `/opt/ibm/db2/v10.1/`.

4. Add a user to access the Db2 instance.

   ```
#useradd db2inst1
```

   This command creates the `db2profile` file.

   The user can then access the db2 instance after logging in.

5. Navigate to the path you added during installation (in Step 3).

   ```
#cd /opt/ibm/db2/v10.1/instance
#cd instance
#sudo ./db2icrt -a server -s client db2inst1
```

6. Add the following line to the `bash_profile` file of the user who runs the db2 functions.

   ```
#vim ~/.bash_profile . /home/db2inst1/sqllib/db2profile
```

   Here, `db2inst1` is the db2 user defined during the installation (in Step 4).

7. Verify the installation by running the `db2` command.

   ```
#db2
```

8. Restart DataFlow services.

   ```
#tscli --adv service restart dataflow
```
