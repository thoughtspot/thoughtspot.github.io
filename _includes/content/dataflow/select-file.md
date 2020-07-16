1. Immediately after creating a new connection, the connection detail page appears.

   You can fill out this information immediately, or return to it at a later stage, by clicking on the connection name in the list of connections.

2. On the connection detail page, click **Add table sync**.

    <details>
    <summary>See how to initiate a new table sync</summary>
    <p><img src="../../images/dataflow-add-table-sync.png" alt="Add table sync"></p></details>

3. In the **Add table sync** interface, on the database selector, scroll to find the source file, and click to select it.

   You can search for the file by name.

   If you use multiple files, you have to repeat these steps for each file.

   <details>
     <summary>See how to specify the source file on the connection</summary>
     <p><img src="../../images/dataflow-select-file.png" alt="Select file"></p></details>

4. In the file detail display, adjust these properties:

   <dl id="file-parse-sync-properties">
     <dlentry id="file-parse-sync-properties-delimiter">
       <dt>Column separator</dt>
       <dd>Specify the character that signals start of new column.
      <br/>The options are <em>Comma(,)</em> (default), <em>Semicolon(;)</em>, <em>Pipe(|)</em>, <em>Space</em>, <em>Tab</em>, or <em>Other</em>.</dd></dlentry>
     <dlentry id="file-parse-sync-properties-header-row">
     <dt>Header row</dt>
     <dd>Specify if file uses a header row.</dd></dlentry>
     <dlentry id="file-parse-sync-properties-copmpression">
     <dt>Compression</dt>
     <dd>Specify if file uses compression.
        <br/>The options are <em>None</em> (default), or <em>gzip</em>.</dd></dlentry></dl>    

   Before confirming that you plan to sync a file, examine it to ensure that it has the right information: the correct data types, and reasonable sample data.

   For wide files, scroll to the right to see all columns.

   <details>
     <summary>See how to examine the source file and its columns before sync</summary>
     <p><img src="../../images/dataflow-sync-file.png" alt="Examine file to sync and its columns"></p></details>

5. Click **Setup sync**.   
