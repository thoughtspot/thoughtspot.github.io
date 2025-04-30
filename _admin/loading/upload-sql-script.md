---
title: [Upload and run a SQL script]

last_updated: 9/2/2020
summary: "You can import a schema through the Web browser, allowing you to run your SQL script without SSH access for the cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can run a SQL script to create your database schema and relationships or joins through the browser, without having to log into the shell on the ThoughtSpot instance. You can edit the script and run it directly in the browser to create the schema. Note that you must have the **can manage data** permission and **admin** privileges to upload schemas. Use this feature for the following actions:

-   [Create the SQL script ahead of time](create-schema-with-script.html#), and [use the browser to run it](#upload-schema).
-   [Use the **Write TQL** interface](#write-schema) to type your SQL directly into the browser.
-   Use the **Write TQL** interface as an interactive SQL editor, to make changes to an existing schema.

{: id="upload-schema"}
## Run or edit an existing script
To run or edit a SQL script that you already wrote to create your database schema and relationships through the browser, follow these steps.

1. Log in to ThoughtSpot from a browser.

2. Click **Data**, on the top navigation bar.

3. Click the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png){: .inline}, and select **Upload schema**.

    ![Upload schema]({{ site.baseurl }}/images/upload-schema.png "Upload schema")

4. Drag and drop your SQL script into the browser, or choose **Browse Your Files** to locate it. You cannot copy and paste an existing SQL script into the SQL editor.

    ![Drag and drop your SQL script]({{ site.baseurl }}/images/upload-schema-browse.png "Drag and drop your SQL script")    

5. After you upload your SQL script, you enter the SQL editor. Use it to view your script and make any changes.

    ![SQL editor]({{ site.baseurl }}/images/SQL_editor.png "SQL editor")

6. To edit the script, click on the line you would like to change, and type your changes into the interface.

    ![Edit your schema]({{ site.baseurl }}/images/edit-schema.png "Edit your schema")

6. When ready, run your script by clicking the **Execute** button.

    ![Execute your schema]({{ site.baseurl }}/images/execute-schema.png "Execute your schema")

7. If there are any errors, correct them and run the script again.

{: id="write-schema"}
## Write a new SQL script
To write a new SQL script to create your database schema and relationships through the browser, follow these steps.

1. Log in to ThoughtSpot from a browser.

2. Click **Data**, on the top navigation bar.

3. Click the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png){: .inline}, and select **Upload schema**.

    ![Upload schema]({{ site.baseurl }}/images/upload-schema.png "Upload schema")

4. Select the **Write TQL** button in the top right corner of the screen.

    ![Write TQL]({{ site.baseurl }}/images/upload-schema-write-tql.png "Write TQL")

5. After you select **Write TQL**, you enter the SQL editor. You can write your script for schema and relationship creation in this editor.

    {% include note.html content="You cannot copy and paste an existing SQL script into the SQL editor." %}

    When you finish writing a line, click the + icon to insert a new line below.

    ![Write your schema script]({{ site.baseurl }}/images/write-schema.png "Write your schema script")

6. When ready, run your script by clicking the **Execute** button.

    ![Execute your schema]({{ site.baseurl }}/images/execute-schema.png "Execute your schema")

7. If there are any errors, correct them and run the script again.
