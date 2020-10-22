To use scripting before or after the sync, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.
<!--
   <details>
     <summary>See how to set common <strong>Sync properties</strong></summary>
     <p><img src="../../images/dataflow-set-sync-properties-file-systems.png" alt="Set sync properties" /></p>
   </details> -->

2. Choose the **Sync properties** tab.

3. Scroll down to **Advanced configuration**, and click the toggle to expand.
<!--
   <details>
     <summary>See how to expand the interface to see <strong>Advanced scripting options</strong></summary>
     <p><img src="../../images/dataflow-set-sync-scripts-file-systems-open.png" alt="Expand scripting options" /></p>
   </details> -->

4. Specify the following information:
<!--
     <details>
       <summary>See how to add sync scripts</summary>
       <p><img src="../../images/dataflow-set-sync-properties-scripts-file-system.png" alt="Set sync scripts" /></p>
     </details> -->

    <dl id="set-sync-scripts">
      <dlentry id="set-sync-file-trigger">
         <dt>Wait for file</dt>
         <dd>Specify the fully-qualified name of the file (directory path and file name) that must be present before sync can start.</dd></dlentry>
     <dlentry id="set-sync-pre-script">
       <dt>Pre-script</dt>
       <dd>Add the script that you want to run <strong>before</strong> syncing.<br/>Optional field.<br/>For example, to drop data that is over 1 year old, enter the following expression:<br/><code>DELETE from FACT_TABLE Where DATE < ADD_DAYS(TODAY(),-365)</code>.<br/>To find the correct functions for the script, click <strong>Expression editor</strong>, use it to create a valid command (or several commands), and click <strong>OK</strong>.
         <details>
           <summary>See how to add a sync script that runs before the syncing begins</summary>
           <p><img src="../../images/dataflow-pre-script-expression-editor.png" alt="Add script to run before sync" /></p></details></dd></dlentry>
      <dlentry id="set-sync-post-script">
       <dt>Post-script</dt>
       <dd>Add the script that you want to run <strong>after</strong> syncing.
           <br/>Optional field.
           <br/>For example, to drop data that is over 1 year old, enter the following expression:
           <br/><code>DELETE from FACT_TABLE Where DATE < ADD_DAYS(TODAY(),-365)</code>.
           <br/>To find the correct functions for the script, click <strong>Expression editor</strong>, use it to create a valid command (or several commands), and click <strong>OK</strong>.
           <br/>
           <details>
             <summary>See how to add a sync script that runs after the syncing finishes successfully</summary>
             <p>
             <img src="../../images/dataflow-post-script-expression-editor.png" alt="Add script to run after sync" /></p></details>
             </dd></dlentry>
             </dl>

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
