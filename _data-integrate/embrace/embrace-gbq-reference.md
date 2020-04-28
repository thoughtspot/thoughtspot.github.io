---
title: [BigQuery connection reference]
summary: Learn about the fields used to create a BigQuery connection using ThoughtSpot Embrace.
last_updated: 01/30/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of the fields of a BigQuery connection in ThoughtSpot Embrace. You need specific information to establish a seamless and secure connection.

 - **Connection name**: Mandatory. Enter a name for your BigQuery connection.
 - **Connection description**: Optional. Provide a short description about the connection.
 - **Project id**: Mandatory. Enter the project ID associated with the BigQuery database.
 - **Service account**: Mandatory. Enter the service account associated with the BigQuery database. See [set up service account](#service-account).

{: id="custom-role"}
## Create a custom role
In order for ThoughtSpot Embrace to successfully query your GBQ database, you must create a custom role with specific permssions and then assign it to  your service account.
1. Navigate to [console.cloud.google.com](https://console.cloud.google.com), and sign in.  
2. Hover over **IAM & admin**.  
3. Click **Roles**.  
4. Click **+CREATE ROLE**.  
5. On the Create Role page, do the following:
  - Enter a title (or keep the existing one).
  - (Optional) Enter a description.
  - Create an ID (or keep the existing one).
  - Select a Role launch stage.
  - Click **+ADD PERMISSIONS**.
6. In the Add permissions window, select the following permissions:
- bigquery.config.get
- bigquery.datasets.getIamPolicy
- bigquery.jobs.create
- bigquery.jobs.list
- bigquery.savedqueries.get
- bigquery.savedqueries.list
- bigquery.tables.get
- bigquery.tables.getData
- bigquery.tables.list
- resourcemanager.projects.get
7. Click **ADD**.
8. Click **CREATE**.

{: id="service-account"}
## Set up service account
You may already have a service account for GBQ with the proper permissions in place. If not, follow these steps to create a service account.
1. Navigate to [console.cloud.google.com](https://console.cloud.google.com), and sign in.
2. Click the left menu button, if the menu is not already open.
3. Hover over **IAM & Admin**.
4. Click **Service Accounts**.

    ![Click Service Accounts]({{ site.baseurl }}/images/gbq-serviceaccount.png "Click on Service accounts")
5. Click **+ CREATE SERVICE ACCOUNT** from the top menu.
6. Specify a name, and add an optional description.
7. Click **CREATE**.

    ![Create your service account]({{ site.baseurl }}/images/gcp-createserviceaccount.png "Create your service account")
8. Specify permissions. Under **Select a role**, choose **BigQuery > BigQuery Data Viewer**.

    ![Specify permissions]({{ site.baseurl }}/images/gbq-serviceaccountpermissions.png "Specify permissions")
9.  Click **+ADD ANOTHER ROLE**.
10. Under **Select a role**, choose **Custom**, and then select the custom role you created in [Create a custom role](#custom-role).
11. Click **CONTINUE**  
12. On the Create service account page, click **+ CREATE KEY**.
13. For **Key type**, choose **JSON**.
14. Click **CREATE**. The key downloads to your computer.<br>
    Copy and paste this key under **Service account** when connecting to Google BigQuery in ThoughtSpot.
15. Click **DONE**.    
