---
title: [Dematerialize a view]
last_updated: 09/21/2020
summary: "Learn how to dematerialize a view to free up space."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To free up space in your cluster, you can dematerialize views that were materialized but are no longer regularly used. This operation leaves the view intact, but removes the precomputed data that is stored in memory. After dematerializing a view, you can expect searches on the view to take longer, but you will have more space available in memory.

To dematerialize a view, follow these steps:

{% include content/view-materialize/view-materialize-navigation.md %}

6. Under **Materialization**, click **Dematerialize**.

   ![Dematerialize view]({{ site.baseurl }}/images/view-materialize-11.png)

7. In the confirmation window titled **Remove materialized view**, click **Remove** to confirm.

   Note that this action removes the data from memory.

   ![Confirm dematerialization of view]({{ site.baseurl }}/images/view-materialize-12.png)

7. You can see the progress of dematerialization. Click **Update status** to refresh.

Remember that at this point, you can still search across your view, even if it is not materialized.

To remove the view altogether, you must delete it.

## Related Information

-   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
-   [Materialize a view]({{ site.baseurl }}/admin/loading/materialize-a-view.html)  
