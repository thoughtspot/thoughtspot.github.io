---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Add a custom support contact

You can designate a support contact \(email and phone number\) at your organization for first level technical support. That person can answer questions about data and searching, and submit any system and software-related questions to ThoughtSpot Support.

After you set the custom support contact information, here's where your users will see it:

-   In the Help Center, when they click **Contact Support**.

     ![](../../images/help_center_support_contact.png "Help Center support contact") 

-   In error messages, when they click **What Happened?**

     ![](../../images/trace_log.png "Error message support contact") 


To designate the custom support contact:

1.   [Log in to the Linux shell using SSH](login_console.html#). 
2.   Issue the tscli command to set the email address: 

    ```
    $ tscli support set-admin-email <email_address>
    ```

3.   Issue the tscli command to set the phone number: 

    ```
    $ tscli support set-admin-phone <phone_number>
    ```

4.   If you need to reset both of these to the default \(ThoughtSpot Support\), issue: 

    ```
    $ tscli support rm-admin-email
    
    $ tscli support rm-admin-phone
    ```


**Parent topic:** [Installation and setup](../../admin/setup/intro.html)

