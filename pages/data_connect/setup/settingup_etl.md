---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Set up ThoughtSpot Data Connect

The ThoughtSpot team will assist you in the initial setup and configuration of ThoughtSpot Data Connect. You will need to provide the credentials for logging in to the various data sources you want to connect to.

Your purchase of ThoughtSpot Data Connect includes the necessary credentials for connecting to Informatica. ThoughtSpot Support will supply the Informatica credentials, if you do not already have an account. You can change the Informatica credentials later, if you would like. You need these credentials when issuing the command to enable ThoughtSpot Data Connect.

To set up ThoughtSpot Data Connect:

1.   Check with ThoughtSpot Support to ensure they have provisioned an account for you with the appropriate connectivity licenses. A full list of supported connectivity licenses is available in the [Data Connect connectors reference](../reference/data_connect_connection_credentials.html#). 
2.   Enable ThoughtSpot Data Connect by completing the following steps: 
    1.   [Log in to the Linux shell using SSH](../../../admin/setup/login_console.html#). 
    2.   Invoke tscli to enable ThoughtSpot Data Connect, which will register with Informatica Cloud and start the infaagent service. The process will take a couple of minutes: 

        ```
        tscli etl enable-lw
          --admin_username <admin\_user>
          --username <Informatica\_user>
          --thoughtspot_url <URL>
          --org_id <informatica\_org\_id>
          [--pin_to <IP\_address>]
          [--proxy_host <proxy\_server\_hostname>]
          [--proxy_port <proxy\_server\_port>]
        ```

        If you want to use HTTPS with your URL, you will need to use a signed certificate.

        The parameter org\_id specifies the Informatica id of the organization \(company\).

        **Note:** org\_id shouldn't include the prefix "Org". For example, if on Informatica cloud, the orgid is Org003XYZ, then use only 003XYZ

        The command `--pin_to` is optional. If you specify an IP to pin to, that node becomes sticky to the Informatica agent, and will always be used. This defaults to the public IP address of the localhost where this command was run.

        The commands `--proxy_host <proxy\_server\_hostname>` and `--proxy_port <proxy\_server\_port>` are also optional, and specify the proxy details.

3.   You may change your user password using the following tscli command: 

    ```
    `tscli etl change-password --admin_username <admin\_user> --username <Informatica\_user>`
    ```

4.   Now you can log in to ThoughtSpot, and begin using ThoughtSpot Data Connect. 

**Parent topic:** [Get started with ThoughtSpot Data Connect](../../../data_connect/data_connect/setup/ETL.html)

