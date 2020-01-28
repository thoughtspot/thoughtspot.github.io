---
title: [Initialize the Identity Provider Metadata]


last_updated: tbd
summary: "This procedure shows how to initialize the Identity Provider (IdP) metadata for AD FS."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This is one part of the configuration procedure for setting up ThoughtSpot to work with AD FS for authentication. You should also refer to the [overview](integrate-ADFS.html#) of the entire process of integrating with AD FS.

To initialize the IdP metadata on AD FS:

1. Download the AD FS 2.0 IdP metadata from the AD FS server.
   You can reference this file by its URL, which looks like:

    ```
    https://<adfsserver>/FederationMetadata/2007-06/FederationMetadata.xml
    ```

2. Log in to the Linux shell using SSH.
3. Change directories to the SAML directory:

    ```
    $ cd /usr/local/scaligent/release/production/orion/tomcat/callosum/saml
    ```

4. Replace the contents of the file `idp-meta.xml` with the metadata of the IdP that you downloaded.
   Do not change the name of the file.
5. Contact ThoughtSpot support for help restarting ThoughtSpot's Tomcat instance.

6. Next, [Initialize the Service Provider Metadata](initialize-SP.html).
