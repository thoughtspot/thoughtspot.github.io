To use scripting before or after the sync, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.

    ![Open Advanced setup]({{ site.baseurl }}/images/dataflow-advanced-setup.png "Open Advanced setup")

2. Choose the **Sync properties** tab.

3. Scroll down to **Advanced configuration**, and click the toggle to expand.

    ![Expand scripting options]({{ site.baseurl }}/images/dataflow-set-sync-scripts-open.png "Expand scripting options")

4. Specify the following information:

   ![Set sync scripts]({{ site.baseurl }}/images/dataflow-set-sync-properties-scripts.png "Set sync scripts")

   <dl id="set-sync-scripts">
     <dlentry id="set-sync-pre-script">
       <dt>Pre-script</dt>
       <dd>Add the script that you want to run <strong>before</strong> syncing.<br/>Optional field.<br/>For example, to drop data that is over 1 year old, enter the following expression:<br/><code>DELETE from FACT_TABLE Where DATE < ADD_DAYS(TODAY(),-365)</code>.<br/>To find the correct functions for the script, click <strong>Expression editor</strong>, use it to create a valid command (or several commands), and click <strong>OK</strong>.
         <br/><img src="../../images/dataflow-pre-script-expression-editor.png" alt="add script to run before sync"></dd></dlentry>
     <dlentry id="set-sync-post-script">
       <dt>Post-script</dt>
         <dd>Add the script that you want to run <strong>after</strong> syncing.
           <br/>Optional field.
           <br/>For example, to drop data that is over 1 year old, enter the following expression:
           <br/><code>DELETE from FACT_TABLE Where DATE < ADD_DAYS(TODAY(),-365)</code>.
           <br/>To find the correct functions for the script, click <strong>Expression editor</strong>, use it to create a valid command (or several commands), and click <strong>OK</strong>.
           <br/><img src="../../images/dataflow-post-script-expression-editor.png" alt="add script to run before sync"></dd></dlentry>

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
