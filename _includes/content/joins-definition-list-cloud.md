<h2>Possible joins</h2>
<dl>
 <dlentry id="join-view">
    <dt>Origin: View</dt>
    <dd>Destination: other Views</dd>
    <dd>Necessary permissions: <strong>Can edit</strong> permission on source View</dd>
 </dlentry>
 <dlentry id="join-table-embrace">
    <dt>Origin: Table uploaded through Connections</dt>
    <dd>Destination: other tables uploaded through Connections, Views on top of tables uploaded through Connections</dd>
    <dd>Necessary permissions: <strong>Can edit</strong> permission on source table, and <strong>can manage data</strong> permission</dd>
    <dd>Note: The join must be created between two tables or a table and a View from the same connection.</dd>
 </dlentry>
 <dlentry id="join-view-embrace">
    <dt>Origin: View on top of a table uploaded through Connections</dt>
    <dd>Destination: Tables uploaded through Connections, other Views on top of tables uploaded through Connections</dd>
    <dd>Necessary permissions: <strong>Can edit</strong> permission on source View</dd>
    <dd>Note: The join must be created between two Views or a table and a View from the same connection.</dd>
 </dlentry>
</dl>
