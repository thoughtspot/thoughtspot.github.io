---
title: [Delete a Synapse connection]
last_updated: 9/21/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

A connection can be used in multiple data sources or visualizations. Because of this, you must delete all of the sources and tasks that use that connection, before you can delete the connection.

To delete a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab.

3. Check the box next to the connection you want to delete.

4. Click **Delete**, and then click **Delete** again to confirm.

   If you attempt to delete a connection with dependent objects, the operation is blocked, and a "Cannot delete" warning appears with a list of dependent objects with links.

   ![Dependent objects warning]({{ site.baseurl }}/images/connection-delete-warning.png "Dependent objects warning")

5. If the "Cannot delete" warning appears, click the link for each object to delete it, and then click **Ok**. Otherwise, go to the next step.

6. When all its dependencies are removed, delete the connection by clicking **Delete**, and then click again **Delete** to confirm.
