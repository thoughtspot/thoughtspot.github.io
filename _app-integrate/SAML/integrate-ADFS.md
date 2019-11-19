---
title: [Configure Active Directory Federated Services]
summary: "Learn how to configure ADFS to work with ThoughtSpot."
last_updated: 11/18/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can configure Active Directory Federated Services (ADFS) to work with ThoughtSpot.

## Prerequisites
Before you configure ADFS, complete these prerequisites.

1. [Configure SAML in ThoughtSpot](configure-SAML-with-tscli#).
2. Install [ADFS 2.0](https://www.microsoft.com/en-us/download/details.aspx?id=10909).
3. Make sure you can run ADFS 2.0 Federation Server Configuration Wizard from the ADFS 2.0 Management Console.
4. Make sure that the DNS name of your Windows Server is available at your service provider (SP) and vice versa. You can do this by running the command `nslookup` on both machines, supplying the DNS of the other server.

ADFS 2.0 supports SAML 2.0 in IdP (Identity Provider) mode and can be easily integrated with the SAML Extension for both SSO (Single Sign-On) and SLO (Single Log Out).

## Step 1: Initialize IdP metadata
1. **Download the IdP metadata** Download the ADFS 2.0 IdP metadata from the ADFS server.
   You can reference this file by its URL:

    ```
    https://<adfsserver>/FederationMetadata/2007-06/FederationMetadata.xml
    ```

2. **SSH into your cluster** Log into the Linux shell using SSH.
    ```
    $ ssh admin@<cluster-IP>
    ```
3. **Change directories to the SAML directory**

    ```
    $ cd /usr/local/scaligent/release/production/orion/tomcat/callosum/saml
    ```

4. **Update the metadata** Replace the contents of the file `idp-meta.xml` with the metadata of the IdP that you downloaded.
   Do not change the name of the file.
5. **Restart Tomcat** Contact [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) for help restarting ThoughtSpot's Tomcat instance.

## Step 2: Initialize the Service Provider metadata
1. Open the ADFS 2.0 Management Console.
2. Select **Add Relying Party Trust**.
3. Select **Import data about the relying party from a file**.
4. Upload the metadata.xml file that you downloaded from ThoughtSpot earlier.
5. Select **Next.** There may be a warning that some of the content of the metadata is not supported.
    You can safely ignore this warning.
6. In the **Ready to Add Trust** section, make sure that the tab endpoints contains multiple endpoint values.
   If not, verify that your metadata was generated with the HTTPS protocol URLs.
7. Leave the **Open the Edit Claim Rules dialog** checkbox checked. Click **Next**.
8. Select **Add Rule**.
9. Choose **Send LDAP Attributes as Claims** and click **Next.**
10. For **NameID** enter "Claim rule name"
11. For **Attribute store**, choose "Active Directory".
12. For **LDAP Attribute** choose "SAM-Account-Name".
13. For **Outgoing claim type**, choose "Name ID". If you are using ADFS 3.0, you might need to configure the Name ID as a Pass Through claim.
14. Finish the wizard and confirm the claim rules window.
15. Open the provider by double-clicking it.
16. Select the **Advanced** tab and change **Secure hash algorithm** to "SHA-1".

Your Service Provider is now registered.

## Step 3: Test your ADFS integration
After setting up the ADFS integration, make sure it works properly. To test your ADFS integration, go to the ThoughtSpot login page using a Web browser and try to login with SAML.
