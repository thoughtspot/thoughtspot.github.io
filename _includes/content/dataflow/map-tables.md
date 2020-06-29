To map the external tables to ThoughtSpot's internal database, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.

    ![Open Advanced setup]({{ site.baseurl }}/images/dataflow-advanced-setup.png "Open Advanced setup")

2. Choose the **Map tables and columns** tab.

3. Notice that the external database and table already appear, under **External data source**.

4. Specify the following information for internal ThoughtSpot storage:

   ![Map tables]({{ site.baseurl }}/images/dataflow-map-tables.png "Map tables")

   <dl id="ts-target-tb">
     <dlentry id="ts-target-database">
    <dt>ThoughtSpot database</dt>
    <dd id="database-existing">Select an existing ThoughtSpot database from the drop-down menu.</dd>
    <dd id="database-new">If you wish to create a new database in ThoughtSpot, click <strong>TQL Editor</strong>, enter the <code>CREATE DATABASE <em>my_database</em>;</code> command, and click <strong>Execute</strong>.
        <br/><img src="../../images/dataflow-new-database.png" alt="add new database in ThoughtSpot"></dd>
    <dd>Mandatory field.</dd></dlentry>
     <dlentry id="ts-target-schema">
       <dt>ThoughtSpot schema</dt>
       <dd id="schema-exists">Select an existing ThoughtSpot schema from the drop-down menu.</dd>
        <dd id="schema-new">If you wish to create a new schema in your ThoughtSpot database, click <strong>TQL Editor</strong>, enter the <code>CREATE SCHEMA <em>my_schema</em>;</code> command, and click <strong>Execute</strong>.
          <br/><img src="../../images/dataflow-new-schema.png" alt="add new schema in ThoughtSpot"></dd>
        <dd>Mandatory field.</dd></dlentry>
     <dlentry id="ts-target-new-existing">
    <dt>New or Existing table</dt>
    <dd>Mandatory field.<br/>
      <dl>
        <dlentry>
          <dt>Create a new table</dt>
          <dd>Choose this option when you want to load data into a new table.
          <br/>Click <strong>TQL Editor</strong>, enter the <code>CREATE TABLE <em>my_table</em> ...;</code> command, and click <strong>Execute</strong>.
            <br/><img src="../../images/dataflow-new-table.png" alt="add new table in ThoughtSpot">
          <br/>Specify the table name.</dd></dlentry>
        <dlentry><dt>Choose existing table</dt><dd>Choose this option to load data into a table that already exists inside ThoughtSpot. <br/>Select the table name from the drop-down menu.</dd></dlentry></dl>
      </dd></dlentry>
     <dlentry id="ts-target-table-name">
        <dt>ThoughtSpot table</dt>
        <dd>The name of the target table for data sync, inside ThoughtSpot.
        <br/>Mandatory field.</dd></dlentry></dl>
