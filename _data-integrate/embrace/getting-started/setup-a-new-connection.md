---
title: [Setup a new connection]
tags: [limitations]
keywords: tbd
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Now that you've enabled ThoughtSpot Embrace, you will be able to add a new connection to a supported database source. Database sources are the external source systems to which you want to perform a live query to create answers and pinboards, without having to bring data into ThoughtSpot.

{% include note.html content="This release only supports Snowflake connection. In coming releases, we shall bring in support for more  relational database sources, like Amazon Redshift, SQL Server, or applications, like Marketo or Salesforce and so on." %}

## Create a new connection

To add a new connection:

1. Log in to ThoughtSpot from a browser.

2. Click **Data** on the top navigation bar.

3. Click the **Connections** tab at the top of the page, and select **+ Add connection** on the upper right hand side of the panel.

     ![]({{ site.baseurl }}/images/new-connection.png "New db connect")

4. Select connection type you wish to use from the available list in the Connection Type screen and click **Next**.

     ![]({{ site.baseurl }}/images/select-new-connection.png "Select a new connection type")

5. Enter the connection credentials to your external data source in the Set Credentials screen and click **Next**:

    ![]({{ site.baseurl }}/images/new-connection-creds.png "Select a connection type")

    Refer to the [Embrace connectors]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html#) for more information on each of the specific attributes you must enter into the dialog box.

6. Choose the tables and select the columns you wish to load in the Select Tables screen.
7. When all the columns are selected, click  **Create connection**.

    ![]({{ site.baseurl }}/images/create-connection.png "column add bar")


Your connection details will appear on the Connections list page. You can select a connection to review the selected tables and columns. Review and edit the table and create schema joins as necessary.

## Related information
- [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
- [Know Embrace connector]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)
- [Data sources management]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data security]({{ site.baseurl }}/admin/architecture/security.html)
