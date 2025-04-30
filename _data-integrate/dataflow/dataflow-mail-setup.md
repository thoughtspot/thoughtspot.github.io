---
title: [Setup DataFlow mail]
last_updated: 13/06/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Follow these steps to set up the the mail server for your DataFlow instance.

You must have administrator privileges.

1. After logging in, click **Admin** on the top navigation bar.

2. Select **Server config**.

3. In the **Mail Setup** interface, specify these properties:

   ![Mail setup]({{ site.baseurl }}/images/dataflow-mail-setup.png "Mail setup")

   <dl id="dataflow-mail-config-properties">
     <dlentry id="dataflow-mail-config-relay-host">
       <dt>Relay host</dt>
       <dd>The URL address or IP of the SMTP relay host.<br/>Mandatory field.</dd>
       <dd id="relay-host-example"><strong>Example:</strong> smtp.example.com</dd></dlentry>
       <dlentry id="dataflow-mail-config-smtp-authorization-required">
         <dt>SMTP Authorization required</dt>
         <dd><em>Yes</em> or <em>No</em>.<br/>Mandatory field.</dd></dlentry>
      <dlentry id="dataflow-mail-config-from-email">
       <dt>From email</dt>
       <dd>The email address associated with outgoing system and administrative messages.<br/>Mandatory field.</dd></dlentry>
     <dlentry id="dataflow-mail-config-from-name">
       <dt>From name</dt>
       <dd>The account name associated with outgoing system and administrative messages.<br/>Mandatory field.</dd></dlentry>
     <dlentry id="dataflow-mail-config-smtp-auth-password">
       <dt>SMTP Auth password</dt>
       <dd>If <strong>SMTP Authorization Required</strong> is <em>Yes</em>, provide the password.
       <br/>Mandatory field.</dd></dlentry>
      <dlentry id="dataflow-mail-config-admin-email-id">
       <dt>Admin email ID</dt>
       <dd>The email account that receives messages from “Contact admin” form.<br/>Mandatory field.</dd></dlentry>
   </dl>

4. Click **Save**.   
