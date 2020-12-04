To map the external tables to ThoughtSpot's internal database, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.

2. Choose the **Map tables and columns** tab.

3. Notice that the access to the external application appears, as **Endpoint URL**.

4. Specify the following information for internal ThoughtSpot storage:

   <dl id="ts-target-tb">
     <dlentry id="ts-target-database">
    <dt>ThoughtSpot database</dt>
    <dd id="database-existing">Select an existing ThoughtSpot database from the drop-down menu.</dd>
    <dd id="database-new">If you wish to create a new database in ThoughtSpot, click <strong>TQL Editor</strong>, enter the <code>CREATE DATABASE <em>my_database</em>;</code> command, and click <strong>Execute</strong>.</dd>
    <dd>Mandatory field.</dd></dlentry>
     <dlentry id="ts-target-schema">
       <dt>ThoughtSpot schema</dt>
       <dd id="schema-exists">Select an existing ThoughtSpot schema from the drop-down menu.</dd>
        <dd id="schema-new">If you wish to create a new schema in your ThoughtSpot database, click <strong>TQL Editor</strong>, enter the <code>CREATE SCHEMA <em>my_schema</em>;</code> command, and click <strong>Execute</strong>.</dd>
        <dd>Mandatory field.</dd></dlentry>
     <dlentry id="ts-target-new-existing">
    <dt>New or Existing table</dt>
    <dd>Mandatory field.<br/>
      <dl>
        <dlentry>
          <dt>Create a new table</dt>
          <dd>Choose this option when you want to load data into a new table.
          <br/>The system creates a new table automatically.
          <br/>If you want the new table to have some special properties, create the table using the TQL Editor, proceed to <strong>Choose existing table</strong>, and then select the table you just created. Click <strong>TQL Editor</strong>, enter the <code>CREATE TABLE <em>my_table</em> ...;</code> command, and click <strong>Execute</strong>.<br/>Specify the table name.</dd></dlentry>
        <dlentry><dt>Choose existing table</dt><dd>Choose this option to load data into a table that already exists inside ThoughtSpot. <br/>Select the table name from the drop-down menu.</dd></dlentry></dl>
      </dd></dlentry>
     <dlentry id="ts-target-table-name">
        <dt>ThoughtSpot table</dt>
        <dd>The name of the target table for data sync, inside ThoughtSpot.
        <br/>Mandatory field.</dd></dlentry></dl>

5. Under **Add endpoint parameters**, add additional REST API parameters. Click <strong>Add</strong>, and then specify the parameter:

   - <code>Parameter name</code> is the name of the parameter.
   - <code>Value</code> is the value of the parameter.
   - <code>Header</code>, when selected, specifies that the parameter is a header.

   Note that you can remove or edit the parameter at any  time.

6. In **Pagination properties**, which determines the size and properties of the rows in the result set, specify **Pagination**:

   - <strong>Off</strong> (defalt)
   - <strong>Header-based</strong>
   - <strong>Body-based</strong>
