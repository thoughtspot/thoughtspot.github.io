---
title: [ODBC Data Source Administrator]
keywords: tbd
last_updated: tbd
summary: "Use ODBC to modify log in options and troubleshoot ODBC issues."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ODBC Data Source Administrator can be used to modify log in options and troubleshoot ODBC issues.

## Logging Options

In the ODBC Data Source Administrator, you can specify the log verbosity in the Logging Options. This is done to debug connectivity or failures from the client side.

![]({{ site.baseurl }}/images/ssis_logging_options.png "Logging Options menu")

## Schema Property

You can provide a schema using the Edit Property. If you do not do this, our system will look in all of the schemas.

## ODBC Tracing

Windows shows ODBC specific tracing in the ODBC Data Source Administrator Tracing tab. You can start tracing there by clicking Start Tracing Now. This logs every ODBC call from this system, and prints the input and output for the call.

![]({{ site.baseurl }}/images/ssis_tracing.png "Tracing tab")

Although this is lower level information, it can still be helpful in troubleshooting. When you are not sure if it is our driver or the tool causing an issue, doing this trace will help narrow the inquiry.

![]({{ site.baseurl }}/images/ssis_trace_log.png "Simbaclient Connection Trace Log")

If you start or stop tracing, make sure you do not have the SSIS client open. Close it, change the trace, and reopen.
