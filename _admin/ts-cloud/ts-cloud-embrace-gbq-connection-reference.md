---
title: [Connection reference for Google BigQuery]
last_updated: 9/21/2020
redirect_from:
- /data-integrate/embrace/embrace-gbq-reference.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Learn about the fields used to create and modify a BigQuery connection in ThoughtSpot. You need specific information to establish a seamless and secure connection. All fields are required, except where noted.


<dl id="embrace-gbq-ref">
  <dlentry id="embrace-gbq-ref-connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new BigQuery connection name.</dd>
  </dlentry>
  <dlentry id="embrace-gbq-ref-connection-description">
    <dt>Connection description</dt>
    <dd>Provide a short description of the connection. <i>(Optional)</i></dd>
  </dlentry>
  <dlentry id="embrace-gbq-ref-project-id">
    <dt>Project id</dt>
    <dd>Enter the project ID associated with the BigQuery database.</dd>
  </dlentry>
  <dlentry id="embrace-gbq-ref-service-account">
    <dt>Service account</dt>
    <dd>Enter the service account associated with the BigQuery database.</dd>
  </dlentry>
  <dlentry id="embrace-gbq-oauth-client-id">
    <dt>OAuth</dt>
    <dd>Enter the OAuth client ID associated with the BigQuery database.</dd>
  </dlentry>
  <dlentry id="embrace-gbq-oauth-client-secret">
    <dt>OAuth client secret</dt>
    <dd>Enter the OAuth client secret associated with the BigQuery database.</dd>
  </dlentry>
</dl>  

{: id="custom-role"}
## Create a custom role
In order to use a ThoughtSpot connection to query your GBQ database, you must create a custom role with specific permissions and then assign it to  your service account.
1. Navigate to [console.cloud.google.com](https://console.cloud.google.com){:target="_blank"}, sign in, and select your project.  
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

   ![]({{ site.baseurl }}/images/gbq-role-permissions.png)

7. Click **ADD**.

8. Click **CREATE**.

{: id="service-account"}
## Set up service account
You may already have a service account for GBQ with the proper permissions in place. If not, follow these steps to create a service account.
1. Navigate to [console.cloud.google.com](https://console.cloud.google.com){:target="_blank"}, sign in, and select your project.
2. Click the navigation menu in the upper left, if it is not already open.
3. Hover over **IAM & Admin**.
4. Click **Service Accounts**.

    ![Click Service Accounts]({{ site.baseurl }}/images/gbq-serviceaccount.png "Click on Service accounts")
5. Click **+ CREATE SERVICE ACCOUNT** from the top menu.
6. Specify a name, and add an optional description.
7. Click **CREATE**.

    ![Create your service account]({{ site.baseurl }}/images/gcp-createserviceaccount.png "Create your service account")
8. On the Service account permissions page, click **Select a role**, choose **Custom**, and select the custom role you created in [Create a custom role](#custom-role).
<!--  ![Specify permissions]({{ site.baseurl }}/images/gbq-serviceaccountpermissions.png "Specify permissions") -->
10. Click **CONTINUE**.  
11. On the Create service account page, click **+ CREATE KEY**.
12. For **Key type**, choose **JSON**.
13. Click **CREATE**. The key downloads to your computer.<br>
    When the download is complete, the message: "Private key saved to your computer" appears.
14. Make note of the name of the filename, so you can find it on your computer, and then click **CLOSE**.
15. When you are ready to add a connection to BigQuery in ThoughtSpot, open the private key file in a text editor, and copy the entire contents of the file.
    ![]({{ site.baseurl }}/images/gbq-key-copy.png)
16. In the connection details page of your BigQuery connection in ThoughtSpot, paste this key into the **Service account** field.  
    For details on how to add a connection to BigQuery in ThoughtSpot, see [Add a BigQuery connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-add-connection.html).

{: id="share-dataset"}
## Share dataset
To make your dataset available for your Google BigQuery connection in ThoughtSpot, you must share it with your service account in Google BigQuery in an owner role.
1. Navigate to [console.cloud.google.com](https://console.cloud.google.com){:target="_blank"}, sign in, and select your project.
2. Click the navigation menu in the upper left, if it is not already open.
3. Scroll down in the navigation menu into the BIG DATA section, and click **BigQuery**.  
   Your project should be listed on the left side of the page under the search box.
4. Click your project to reveal its available datasets.
5. Click the dataset that you want to share.
6. Click **SHARE DATASET**.
7. Click **Owner** to reveal the complete list of project owners.
8. In the Add members box, enter the member email address of the service account you want to share the dataset with.
9. Click **Select a role**, select **Project > Owner**, and click **Add**.
10. Click **Done**.
