To set the sync properties, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.
<!--
   <details>
    <summary>See how to open <strong>Advanced setup</strong></summary>
    <p><img src="../../images/dataflow-advanced-setup.png" alt="Open Advanced setup" /></p>
   </details> -->

2. Choose the **Sync properties** tab.

3. Under **Set sync properties**, specify the following information:
<!--   <details>
     <summary>See how to set common <strong>Sync properties</strong></summary>
     <p><img src="../../images/dataflow-set-sync-properties-file-systems.png" alt="Set sync properties" /></p>
   </details> -->

   <dl id="set-sync-properties">
            <dlentry id="set-sync-properties-mode">
            <dt>Sync mode</dt>
            <dd>Choose the sync mode, either <strong>Append</strong> or <strong>Overwrite</strong>.<br />Mandatory field. <br />
               <dl>
                 <dlentry>
                  <dt>Append</dt>
                  <dd>This option adds new rows to the table.</dd></dlentry>
                <dlentry>
                  <dt>Overwrite</dt>
                  <dd>This option removes all existing rows, and then adds new rows to the table.</dd></dlentry>
               </dl>
            </dd>
            </dlentry>
            <dlentry id="set-sync-properties-completion">
            <dt>Completion</dt>
             <dd>Specify what to do with the file after the sync successfully completes:<br />
               <ul><li>Do nothing to the file</li><li>Delete the file</li><li>Move it to: <em>directory/path</em></li></ul>
             </dd></dlentry>
          </dl>

4. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
