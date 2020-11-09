To set the sync properties, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.

2. Choose the **Sync properties** tab.

3. Under **Set sync properties**, specify the following information:

   <dl id="set-sync-properties">
     <dlentry id="set-sync-properties-condition">
       <dt>Condition</dt>
       <dd>Add the condition that restricts the import of new rows into the ThoughtSpot table.
         <br/>Optional field.<br/>For example, to import rows of data from yesterday, enter the expression <code>DATE > ADD_DAYS (TODAY(),-1)</code>.
         <br/>To find the correct functions for the condition, click <strong>Expression editor</strong>, use it to create a valid expression, and click <strong>OK</strong>.</dd></dlentry>
     <dlentry id="set-sync-properties-mode">
          <dt>Sync mode</dt>
          <dd>Choose the sync mode, either <strong>Append</strong> or <strong>Overwrite</strong>.<br/>Mandatory field.    
            <dl>
              <dlentry id="append">
                <dt>Append</dt>
                <dd>This option adds new rows to the table.</dd></dlentry>
              <dlentry id="overwrite">
                <dt>Overwrite</dt>
                <dd>This option removes all existing rows, and then adds new rows to the table.</dd></dlentry>               

4. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
