---
title: [Initialize the Service Provider Metadata]
tags: [security]
keywords: SAML,security,"active directory",authenticate
last_updated: tbd
summary: "This procedure shows how to initialize the Service Provider (SP) metadata for AD FS."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This is the second part of the configuration procedure for setting up ThoughtSpot to work with AD FS for authentication. You should also refer to the [overview](integrate-ADFS.html#) of the entire process of integrating with AD FS.

To initialize the Service Provider metadata on AD FS:

1. Open the AD FS 2.0 Management Console.
2. Select **Add Relying Party Trust**.
3. Select **Import data about the relying party from a file**.
4. Upload the metadata.xml file that you downloaded from ThoughtSpot earlier.
5. Select **Next.** The wizard may complain that some of the content of the metadata is not supported.
    You can safely ignore this warning.
6. In the **Ready to Add Trust** section, make sure that the tab endpoints contains multiple endpoint values.
   If not, verify that your metadata was generated with the HTTPS protocol URLs.
7. Leave the **Open the Edit Claim Rules dialog** checkbox checked. Click **Next**.
8. Select **Add Rule**.
9. Choose **Send LDAP Attributes as Claims** and click **Next.**
10. For **NameID** enter "Claim rule name"
11. For **Attribute store**, choose "Active Directory".
12. For **LDAP Attribute** choose "SAM-Account-Name".
13. For **Outgoing claim type**, choose "Name ID".
    1. If you are using ADFS 3.0, you might need to configure the Name ID as a Pass Through claim.
14. Finish the wizard and confirm the claim rules window.
15. Open the provider by double-clicking it.
16. Select the **Advanced** tab and change **Secure hash algorithm** to "SHA-1".
17. Your Service Provider is now registered.
18. [Test the ADFS Integration](test-ADFS.html).
