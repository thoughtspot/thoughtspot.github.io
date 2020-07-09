---
title: [Add an Amazon S3 connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the Amazon S3 file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the File **Connection type**, the rest of the connection properties appear.

   <details>
     <summary>See the <strong>Create connection</strong> screen for Amazon S3</summary>
     <p>
      <img src="../../images/dataflow-amazon-s3-create.png" alt="Add a connection to Amazon S3" /></p>
   </details>

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-conn-connection-name)<br/>Name your connection. 
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-conn-connection-type)<br/>Choose the Amazon S3 connection type.
   * [Amazon S3 URL]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-conn-amazon-s3-url)<br/>Specify the Amazon S3 hostname link.
   * [Bucket]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-conn-bucket)<br/>Specify the bucket.<br/>An Amazon S3 bucket name is globally unique, and the namespace is shared by all AWS accounts.
   * [Access key]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-conn-access-key)<br/>Specify the access key ID generated when creating AWS security credentials.
   * [Secret key]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-conn-secret-key)<br/>Specify the secrete access key generated when creating AWS security credentials.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
