---
title: [Add an Google Cloud Storage connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the Google Cloud Storage file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the **Connection type**, the rest of the connection properties appear.

   Depending on your choice of authentication mechanism, you may use different properties.

   <!--<details>
     <summary>See the <strong>Create connection</strong> screen for Google Cloud Storage</summary>
     <p>
      <img src="../../images/dataflow-google-cloud-storage-create.png" alt="Add a connection to Google Cloud Storage" /></p>
   </details>

   <details>
     <summary>See the <strong>Create connection</strong> screen for Google Cloud Storage with proxy</summary>
     <p>
      <img src="../../images/dataflow-google-cloud-storage-proxy-create.png" alt="Add a connection with proxy to Google Cloud Storage" /></p>
    </details> -->

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-connection-type)<br/>Choose the Google Cloud storage connection type.
    * [Project ID]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-project-id)<br/>The identification number given to particular project and its always unique.
    * [Authentication type ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-authentication-type-)<br/>It can be either Service Account or Access Tokens<br/>Mandatory field.
    * [Service account key or access token]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-service-account-key-or-access-token)<br/>Provide the Service Account key when authentication type is selected as Service account and token when access token is selected as authentication type.
    * [Bucket ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-bucket-)<br/>To specify GCS bucket name<br/>Mandatory field.
    * [File location ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-file-location-)<br/>Specify directory of source on agent location<br/>Mandatory field.
    * [Use proxy]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-use-proxy)<br/>If required, to use a proxy, select the check box Use Proxy and provide the details<br/>Optional field.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-host)<br/>Specify the hostname or the IP address of the GCS system<br/>Mandatory field. When using proxy authentication only.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-port)<br/>Specify the port associated to the GCS system<br/>Mandatory field. When using proxy authentication only.
    * [Protocol]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#dataflow-google-cloud-storage-conn-protocol)<br/>It can be either http or https<br/>Mandatory field. When using proxy authentication only.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-cloud-storage-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
