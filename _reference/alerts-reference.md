---
title: [Alerts code reference]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

This reference identifies the messages that can appear in the **System Health >
Overview > Critical Alerts** and in the  **Alerts** dashboard.

{% for item in site.data.extract-alerts.alerts %}  
### {{item.id}}
   <ul>
      <li><strong>Msg</strong>: <code style="highlighter-rouge">{{item.msg}}</code> </li>
      <li><strong>Type</strong>: {{item.type}} </li>
   </ul>
   {{item.description}}
   {% unless forloop.last %}
   {% endunless %}
{% endfor %}
