---
title: [Refresh a materialized view]
keywords: materialize views refresh stale
last_updated: 11/2/2018
summary: "To keep a view in synch with its underlying data, you will need to refresh the view periodically."
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Materialized views can get out of synch with their underlying data. If the status of a view is **Stale**, you'll need to refresh the view manually, so that it is in sync with the underlying table. Until you refresh it, the view will still be searchable, but the data will not be up-to-date. 

h1. Refresh a view manually

1. To find your view, click **Data** in the top menu, and choose **Views**.
2. Click on the name of your view.
3. Click **Schema**.
5. Under **Materialize View**, choose **Refresh**.
