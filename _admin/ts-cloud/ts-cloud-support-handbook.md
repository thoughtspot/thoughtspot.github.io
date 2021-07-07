---
title: [ThoughtSpot Support Handbook]
last_updated: 06/30/2021
summary: "Thank you for choosing ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The ThoughtSpot Support team is committed to making you successful when deploying and using ThoughtSpot, regardless of your location. We provide 24x7 worldwide support to all our valued customers.

Reliability of your business is very important for us. We created this document to describe our Support offering, so you can find resources to resolve your issues, and answer your questions.

We also provide these instructions in <a href="{{ site.baseurl }}/downloads/support-handbook.pdf" download>PDF format</a>.

## Chapter 1: Support Roles

We have distinct roles in ThoughtSpot Support, and understanding them helps you to streamline issue resolution.

### Systems Reliability Engineer (SRE)

Your cases are assigned to the SRE team, your main contact for providing support. Their primary goal is improving your user experience from a service management perspective. The SRE responsibilities include:

-   Responding to support cases through the Support website, by email, or by phone
-   Reproducing reported issues, as necessary
-   Researching, identifying, and resolving product technical issues
-   Working with other ThoughtSpot teams to resolve issues

### SRE Manager

This role manages the team, and steps into the role of Escalation Manager when necessary.

### Escalation Manager

If the issue is not progressing to your satisfaction (based on normal case lifecycle process expectations), the Escalation Manager joins the team. Escalations can be initiated by either the customer, or the SRE. The Escalation Manager:

-   Coordinates resources to diagnose and resolve the issue, including third parties as needed
-   Ensures that regular updates are shared with internal and customer stakeholders
-   Ensures that issues are resolved to the best possible satisfaction of all stakeholders

### Customer Success Architect (CSA)

The CSA is your main contact for architecting the ThoughtSpot solution. The CSA:

-   Oversees the engagement from Launch Kickoff to Wrap-Up
-   Helps define the architecture and solution approach
-   Assists the CSE with solution implementation
-   Helps the client Product Owner with story selection and use case prioritization

### Customer Success Engineer (CSE)

The CSE implements the solution, working in tandem with the CSA. The CSE:

-   Participates in architecture and planning activities
-   Acts as primary implementation person for ThoughtSpot on the project
-   Trains the implementation team and end users

## Chapter 2: Support Components

We have a multifaceted approach to ensure the success of ThoughtSpot deployments.

### Support Cases

We help you resolve product issues through our online support case management system.

### Alert Monitoring

ThoughtSpot product implements an intelligent alerting system that sends regular system status reports and alerts to ThoughtSpot Support when it encounters critical events. These notifications prompt SREs to engage, and resolve all ThoughtSpot issues.

### Metrics and Diagnostics

The ThoughtSpot product records application and system metrics, and sends these to ThoughtSpot Support. These metrics provide the SRE team with visibility into capacity and system resource usage, and allow them to prevent or quickly resolve issues.

When working on cases, ThoughtSpot Support may collect diagnostic information on the system, and also request that you share the information with us. You can securely share the diagnostics with us through our secure ThoughtSpot File Server.

### Remote Access

To help with diagnosing the issues, and to perform administrative tasks such as software upgrades, ThoughtSpot Support needs remote access to your system. This access may include using a web browser to view ThoughtSpot service status pages, or starting an SSH session to execute Linux commands on ThoughtSpot nodes.

#### For ThoughtSpot Cloud clusters

The ThoughtSpot Support team doesn't have access to your Cloud instance's graphical user interface. We count on your availability to understand the user-experience via our web-conferencing solution. Please make sure that you have web access to ThoughtSpot nodes.

#### For ThoughtSpot Software clusters

ThoughtSpot Support provides the option to initiate the Reverse SSH Tunnel (RST) to establish a secure connection between ThoughtSpot nodes and ThoughtSpot tunnel server. You have complete control to initiate, monitor, or stop the secure tunnel session. This is the preferred method to obtain remote access as it doesn't block customer resources and helps in efficient resolution of the issue especially in case of round-the-clock effort being needed.

If RST is not possible for any reason, ThoughtSpot Support will use internet-based facilities, such as Zoom, for remote access. Please make sure that you have web and SSH access to ThoughtSpot nodes.

### File Server

ThoughtSpot File Server is a secure way of sharing files, like diagnostics information files or software packages for performing updates. Only valid users can access the file server.

### Product Updates

Customers can request for the latest version of ThoughtSpot or ThoughtSpot Support may recommend updates as the resolution to an issue. ThoughtSpot Support will work with you to schedule and perform product updates. As part of the update process, you'll have to download the software package from a secure ThoughtSpot File Server.

For cloud customers, ThoughtSpot automatically performs Cloud Release updates on a monthly basis. You will be notified in advance when these updates will occur. ThoughtSpot Support performs the upgrade.

## Chapter 3: Support Case Management
### ThoughtSpot Support Portal

You must have a valid [ThoughtSpot Community](https://community.thoughtspot.com/customers/s/){:target="_blank"} user to access the [Support Portal](https://community.thoughtspot.com/s/login/?ec=302&startURL=%2Fcustomers%2Fs%2Fcontactsupport){:target="_blank"}. If you're not signed up yet, please click on ["Sign Up"](https://community.thoughtspot.com/customers/s/login/SelfRegister){:target="_blank"} and follow the instructions to register and receive access.

![]({{ site.baseurl }}/images/community-sign-in.png "Community sign in")

After logging into the Community, you'll see the top-level navigation options for getting help: **Product Forums**, **Best Practices**, **News**, and **Support**.

This document only describes how to submit a request for contacting ThoughtSpot Support.

   -   To file a new case, click **Submit Case**.
   -   To view your cases, click **View Cases**.

![]({{ site.baseurl }}/images/community-support.png "Community Support")

Scroll down on the main page to see additional resources on **Office Hours**, **Documentation**, **Training**, and **User Groups**.

![]({{ site.baseurl }}/images/community-main-page.png)

### Create a New Support Case

You can create a new support case through the Support Portal, or over the telephone. ThoughtSpot Support recommends that you use the Support Portal for reporting issues, especially critical ones.

To create a new case, log into the [ThoughtSpot Community](https://community.thoughtspot.com/s/login/){:target="_blank"} website, and click *Submit Case*.

![]({{ site.baseurl }}/images/community-submit-case.png)

Please provide all required information in the web form. You may notice that on the left side of the form, under **Need Answers Fast?**, we suggest Knowledge Base articles that match the keywords in the **Subject** and **Description** you provide. Click on the suggested articles to see if they help you to resolve your situation quickly.

Alternatively, you can open a new case by calling us on the telephone. You can find these support phone numbers on the [Contact Us](https://www.thoughtspot.com/contact-us){:target="_blank"} section of the ThoughtSpot website.

<table style="width:35%">
 <tr>
  <th>Region</th>
  <th>Phone</th>
 </tr>
 <tr>
  <td>Americas</td>
  <td>1-800-508-7008, ext 1</td>
 </tr>
 <tr>
  <td>UK</td>
  <td>+44 (0) 20 8102 1212</td>
 </tr>
 <tr>
  <td>Germany</td>
  <td>+49 32 221852493</td>
 </tr>
 <tr>
  <td>France</td>
  <td>+33 176400256</td>
 </tr>
</table>

Please have the following information ready, so the SRE can log your case accurately:

-   Organization name
-   Your full name
-   Your phone number
-   Your email address
-   Priority for the case
-   Description of the issue

### View Cases

You can view your cases, or all cases within your organization by clicking menu:Support[View Cases].

![]({{ site.baseurl }}/images/community-view-case.png)

You can change the list view, and pin a specific view as default for the next time you use the portal. **My Customer Support Case** view is for your cases, while **All Customer Support Cases** shows all cases within your organization. You can request that access when working with your ThoughtSpot Customer Success Representative.

![]({{ site.baseurl }}/images/community-pin-case.png)

### Close Case

ThoughtSpot Support works with you to determine if the issue is resolved to your satisfaction, and closes the case. A case may be closed if we don't hear from you within two weeks after a request for information, and when we made multiple attempts to contact you during this period.

### Case Category and Assignment

All cases reported to ThoughtSpot must have a category. The category establishes the case assignment rule.

<table style="width:50%">
 <tr>
  <th>Category</th>
  <th>Assignment</th>
 </tr>
 <tr>
  <td>Issue</td>
  <td>Systems Reliability Engineer</td>
 </tr>
 <tr>
  <td>Feature Request</td>
  <td>Customer Success Representative</td>
 </tr>
</table>

### Case Priority

Case priorities help us understand the real impact of an issue to your business, so we can determine the urgency of initial response. For each error, assign a priority level based on the relative impact the error has on your use of ThoughtSpot in your organization. ThoughtSpot may re-assign the priority level at its sole discretion. In the following table, we describe ThoughtSpot Support priority levels and the corresponding target initial response times.

<table style="width:100%">
 <tr>
  <th>Priority</th>
  <th>Description</th>
  <th>Initial Response level</th>
 </tr>
 <tr>
  <td>P0</td>
  <td>The Production instance is unavailable; all users are blocked and productivity halted.</td>
  <td>Within 1 hour</td>
 </tr>
 <tr>
  <td>P1</td>
  <td>The Production instance is available; functionality or performance is severely impaired.</td>
  <td>Within 2 hours</td>
 </tr>
 <tr>
  <td>P2</td>
  <td>The Production instance is available and can be used with partial, non-critical loss of functionality, or the production instance has an occasional issue that the Customer wants to be identified and resolved. Requests for help on administrative tasks.</td>
  <td>Within 4 hours</td>
 </tr>
 <tr>
  <td>P3</td>
  <td>Cosmetic issues, or requests for general information about the ThoughtSpot Cloud, Documentation, process, or procedures.</td>
  <td>By next business day</td>
 </tr>
</table>

### Case Escalation

You can escalate a case at any time by requesting that you would like an SRE Manager to be engaged. Escalations occur when case progress or issue resolution is not in line with your expectations relative to the prescribed case resolution process. The SRE Manager serves as the Escalation Manager until we resolve the issue to your satisfaction.
