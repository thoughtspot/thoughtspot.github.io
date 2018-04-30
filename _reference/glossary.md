---
title: [Glossary]
keywords: glossary
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

<div class="glossary">
{% assign projectTags = site.data.glossary.entries | sort_natural:"word"%}
{% for entry in projectTags %}
  <p><strong>{{entry.word}}</strong> : {{entry.definition}} </p>
{% endfor %}
</div>
