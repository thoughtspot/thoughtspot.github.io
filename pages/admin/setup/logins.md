---
title: [How to get administrator access]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "You need administrative access to perform the actions discussed in this guide. "
sidebar: mydoc_sidebar
---
You can access ThoughtSpot via SSH at the command prompt and from a Web browser.

## Administrative access

There are two separate default administrator users, an operating system user that you type in at the Linux shell prompt, and an application user for access through a browser. Make sure you use the correct login and password for the method you are using to log in. Passwords are case sensitive.

|Login Type|User|Access Method|Password|
|----------|----|-------------|--------|
|OS user|admin|Via a secure socket shell (SSH) |Contact ThoughtSpot to obtain the default password.|
|Application user|tsadmin|Access through a Web browser|Contact ThoughtSpot to obtain the default password.|

## SSH to the appliance

To perform basic administration such as checking network connectivity, starting and stopping services, and setting up email, log in remotely as the Linux administrator user "admin". To log in with SSH from any machine, you can use the command shell or a utility like Putty.

In the following procedure, replace `<hostname\_or\_IP>` with the hostname or IP address of a node in ThoughtSpot. The default SSH port (22) will be used.

1.   Log in to a client machine and open a command prompt.
2.   Issue the SSH command, specifying the IP address or hostname of the ThoughtSpot instance:
  ```
  ssh admin@<hostname\_or\_IP>
  ```
3.   Enter the password for the admin user.

## Log in to the ThoughtSpot application

To set up and explore your data, access the ThoughtSpot application from a standard Web browser using a username and password.

Before accessing ThoughtSpot, you need:

-   The Web address (IP address or server name) for ThoughtSpot.
-   A network connection.
-   A Web browser.
-   A username and password for ThoughtSpot.

    Supported Web browsers include:

    |Browser          |Version     |Operating System                   |
    |-----------------|------------|-----------------------------------|
    |Google Chrome    |20 and above| Windows 7 or greater, Linux, MacOS|
    |Mozilla Firefox  |14 and above| Windows 7 or greater, Linux, MacOS|
    |Internet Explorer|11          | Windows 7 or greater |


To log in to ThoughtSpot from a browser:

1.   Open the browser and type in the Web address for ThoughtSpot: `http://<hostname\_or\_IP>`
2.   Enter your username and password and click **Enter Now**.
