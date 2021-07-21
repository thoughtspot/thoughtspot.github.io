---
title: [Packages installed with ThoughtSpot for Amazon Linux 2]
summary: "View the packages necessary to deploy ThoughtSpot with Amazon Linux 2."
last_updated: 6/11/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To successfully deploy ThoughtSpot in your organization, you must have the following packages on each node of your ThoughtSpot cluster: yum, python 3, and R. When the Ansible playbook runs, it automatically installs them.

ThoughtSpot works with the latest version of each package; see the minimum supported version. Click to expand.

<details id="yum">
  <summary><strong>Yum RPM packages</strong></summary>
  {% include content/al2/yum-rpm-packages.md %}
</details>

<details id="pip2">
<summary><strong>Python 2 packages</strong></summary>
{% include content/al2/pip2-rpm-packages.md %}
</details>

<details id="pip3">
<summary><strong>Python 3 packages</strong></summary>
{% include content/al2/pip3-rpm-packages.md %}
</details>

<details id="r">
<summary><strong>R packages</strong></summary>
{% include content/al2/r-rpm-packages.md %}
</details>
