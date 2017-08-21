---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Legacy configure SAML

ThoughtSpot can use Security Assertion Markup Language \(SAML\) to authenticate users. You can set up SAML through the shell on the ThoughtSpot instance.

Use this procedure to set up SAML on ThoughtSpot for user authentication. Note that this configuration does not persist across software updates, so you will need to reapply it if you update to a newer release of ThoughtSpot.

1.   [Log in to the Linux shell using SSH](../introduction/login_console.html#). 
2.   Change directories to the SAML directory: 

    ```
    $ cd /usr/local/scaligent/release/production/orion/tomcat/callosum/saml
    ```

3.   Open the file `applicationContext-security.xml` in vi or another editor. 
    1.   Find the section labeled “Entry point to initialize authentication, default values taken from properties file”. 
    2.   Edit the value for the property entityBaseURL to supply the IP address of the server you want to use. Only supply the port \(e.g. :8080\) if the IP address for your server includes it, otherwise omit it. Be sure to use either http: or https:, depending on how your server is configured: 

        ```
        88  <property name="entityBaseURL" value="https://<your 
            server IP\>:443/callosum/v1" />
        ```

    3.   The next line contains the property entityId. The default value is “urn:thoughtspot:callosum:saml”. Change "thoughtspot" to the name of your cluster: 

        ```
        89  <property name="entityId" value="urn:<your 
            cluster>:callosum:saml"/>
        ```

    4.   Find the section labeled “Provider of default SAML Context”. Edit the SAML context to change the IP address to your server's IP. The default port is 80 for http, and 443 for https: 

        ```
        142 <property name="scheme" **value="https"**/>
        143 <property name="serverName" **value="<your server IP\>"**/>
        144 <!-- Replace the value 8080 of serverPort with port of the load balancer-->
        145 <property name="serverPort" **value="443"**/>
        ```

    5.   Save the edited file. 
4.   Change directories to the callosum directory: 

    ```
    $ cd /usr/local/scaligent/release/production/orion/tomcat/callosum/
    ```

5.   Open the file `callosumconfig_prod.json` in vi or another editor. 
    1.   Set up autocreation of users by adding the following line above "shiroConfig": 

        ```
        89 "shouldCacheLogicalModel": true,
        90 **"autoCreateUserFromLDAP":true,**
        91 "shiroConfig": {
        ```

    2.   Add the SAML realm as shown: 

        ```
        112 "adLdapRealm.domain": "ldap.thoughtspot.com",
        113 "securityManager.realms": "$callosumRDBMSRealm**, $callosumSamlRealm**",
        114 "authcStrategy": "org.apache.shiro.authc.pam.AtLeastOneSuccessfulStrategy",
        ```

    3.   Enable SAML as shown: 

        ```
        144 "enableNotificationOnShare": true,
        145 "samlConfiguration": {
        146 "enabled": **true**
        147 }
        ```

6.   Restart Tomcat using these commands: 

    ```
    $ cd /usr/local/scaligent/release
    $ tscli --adv service push tomcat /usr/local/scaligent/release/production/orion/tomcat/tomcat_prod.config
    ```

7.   After restarting Tomcat, open a Web browser and go to the ThoughtSpot login page. It should now show the Single Sign On option. 
8.   Retrieve the metadata by navigating to `https://<your server IP>/callosum/v1/saml/metadata.` The SP metadata file will download. Save it as metadata.xml. You will need this file when configuring your SAML service provider. 
9.   If you're using one of these SAML service providers, continue your configuration using these instructions: 

    -   [Configure CA SiteMinder](configure_SAML_siteminder.html).
    -   [Configure Active Directory Federated Services](integrate_ADFS.html).
    Otherwise, refer to your SAML service provider for instructions how to import the metadata.


**Parent topic:** [About SAML](../../application_integration/SAML/about_SAML_integrations.html)

