To sync your data, perform these tasks:

## Select application
{% include content/dataflow/select-applications.md %}

## Specify sync schedule
{% include content/dataflow/schedule.md %}

## Map tables

{% include content/dataflow/map-tables-rest-api.md %}

## Map columns

{% include content/dataflow/map-columns-applications.md %}

Note that REST API DataFlow connections support hierarchical data type structures, like arrays. DataFlow recognizes these complex types, and adds them into  ThoughtSpot as distinct records.

## Set sync properties

### Basic sync properties

{% include content/dataflow/sync-properties.md %}

### Scripting for sync

{% include content/dataflow/sync-scripts.md %}

### Connector-specific sync properties

{% include content/dataflow/sync-conn-properties.md %}
