---
title: [Set the recommended TLS version]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
There are a couple of security vulnerabilities due to SSL certificates supporting older versions of TLS (Transport Layer Security). This procedure shows you how to set the recommended TLS version to avoid these vulnerabilities.

The PCI (Payment Card Industry) Data Security Standard and the FIPS 140-2 Standard require a minimum of TLS v1.1 and recommends TLS v1.2.

ThoughtSpot supports SSL v3, TLS v1.0, and TLS v1.1 for backwards compatibility. However, the recommended version is TLS v1.2. Therefore, to set the recommended TLS version:

1.   Enable your web browser to support TLS v1.2. This can be done in your browser's advanced settings.
2.  [Log in to the Linux shell using SSH](../../shared/conrefs/../../admin/setup/login_console.html).
3.   Issue the following command:

    ```
    tscli security set-min-version 1.2
    ```

    This will block all usage of older versions.


**Parent topic:** [About SSL (secure socket layers)](../../admin/setup/about_SSL.html)
