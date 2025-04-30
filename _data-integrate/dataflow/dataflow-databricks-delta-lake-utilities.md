---
title: [Using Databricks Delta Lake utilities]
last_updated: 03/23/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use the DataBricks client to customize Databricks Delta Lake connections in DataFlow.

To use Databricks client with DataFlow, you must have the following versions of Python:

- Python 3: you must have version 3.6 or above
- Python 2: you must have version 2.7.9 or above

Follow these steps to install the Databricks client:

1. Run the `pip install databricks-cli` command using the appropriate version of `pip` for your Python installation.

  For Python 3:
   ```
#sudo pip3 install databricks-cli
````

  For Python 2:
 ```
#sudo pip install databricks-cli
````

2. Restart dataflow services.
   ```
#tscli --adv service restart dataflow
```
