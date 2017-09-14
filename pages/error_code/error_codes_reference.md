---
title: [Error code reference]
tags:
keywords: tbd
last_updated: tbd
summary: "List of error codes and messages."
toc: false
sidebar: mydoc_sidebar
---
This section lists error codes that can appear in ThoughtSpot, with summary information and actions to take.

**Note:** Only the base code number is listed for each error. So keep this in mind when searching through this reference. For example, error code TS-00125 is simply listed as 125.


## Metadata Errors (100 - 499)|

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|100|INFO|Success. {1} has been added to {2}. \# {1} – name of visualization \# {2} – {name/link to pinboard}|None|None|
|101|ERROR|Failure adding {1} to {2}|Visualization could not be added to {2} \# {1} – name of visualization \# {2} – name/link to pinboard|None|
|102|ERROR|Failure adding {1} to {2} due to corruption|{1} could not be added to {2} as the pinboard has one or more invalid visualizations|Please try again after removing the invalid visualization(s\) from {2} \# {1} – name of visualization \# {2} – name/link to pinboard|
|103|INFO|Success. Visualization has been deleted from {1}. 1 – name/link to pinboard|None|None|
|104|ERROR|Failure deleting visual from {1}|Visualization could not be deleted from the pinboard. 1 – name/link to pinboard|None|
|105|ERROR|Failure deleting visual from {1} due to corruption|Visualization could not be deleted from {1} as the pinboard has one or more invalid visualizations. 1 – name/link to pinboard|Please try again after removing the invalid visualization(s\) from the pinboard|
|106|INFO|Success. {1} created successfully. 1 – name/link to pinboard|None|None|
|107|ERROR|Failure creating {1}. 1 – name/link to pinboard|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|108|INFO|Sticker created successfully.|None|None|
|109|ERROR|Failure creating the sticker.|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|110|INFO|Sticker deleted successfully.|None|None|
|111|ERROR|Failure deleting sticker.|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|112|INFO|Pinboards deleted successfully.|None|None|
|113|ERROR|Failure deleting pinboards|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|114|INFO|Answers deleted successfully.|None|None|
|115|ERROR|Failure deleting answers|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|116|INFO|Tables deleted successfully.|None|None|
|117|ERROR|Failure deleting tables|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|118|INFO|Relationship created successfully.|None|None|
|119|ERROR|Failure creating relationship|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|120|INFO|Relationship updated successfully.|None|None|
|121|ERROR|Failure updating the relationship|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|122|INFO|Relationship deleted successfully.|None|None|
|123|ERROR|Failure deleting the relationship|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|124|ERROR|Failure fetching details for table|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|125|ERROR|Failure fetching details for the tables|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|126|ERROR|Failure fetching details for datasource|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|127|ERROR|Failure fetching details for datasources|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|128|ERROR|Failure fetching details for metadata items|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|129|ERROR|Failure opening the answer|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|130|ERROR|Failure opening the pinboard|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|131|ERROR|Failure opening the worksheet|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|132|INFO|Table saved successfully.|None|None|
|133|ERROR|There was a problem saving the table|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|134|INFO|Visualization update successful|None|None|
|135|ERROR|Visualization failed to update|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|136|INFO|{1} saved 1 – name of answer|None|None|
|137|ERROR|{1} could not be saved 1 – name of answer|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|138|INFO|{1} saved 1 - name of pinboard / link|None|None|
|139|ERROR|{1} could not be saved 1 - name of pinboard / link|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|140|INFO|{1} saved 1 – name of worksheet|None|None|
|141|ERROR|{1} could not be saved 1 – name of worksheet|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|142|INFO|{1} saved 1 – name of answer|None|None|
|143|ERROR|{1} could not be saved|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}. 1 – name of answer|None|
|144|INFO|{1} saved 1 – name/link to pinboard|None|None|
|145|ERROR|{1} could not be saved|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}. 1 – name of pinboard|None|
|146|INFO|Worksheet saved|None|None|
|147|ERROR|Worksheet could not be saved|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|148|INFO|Sticker updated|None|None|
|149|ERROR|The sticker could not be updated|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|150|INFO|Successfully assigned sticker|None|None|
|151|ERROR|The sticker could not be assigned|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|152|INFO|Successfully unassigned sticker|None|None|
|153|ERROR|The sticker could not be unassigned|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|154|ERROR|Failed to fetch metadata list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|155|ERROR|Failed to fetch table list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|156|ERROR|Failed to fetch relationship list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|157|ERROR|Failed to fetch answer list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|158|ERROR|Failed to fetch pinboard list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|159|ERROR|Failed to fetch worksheet list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|160|ERROR|Failed to fetch aggregated worksheet list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|161|ERROR|Failed to fetch imported data list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|162|ERROR|Failed to fetch system table list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|163|ERROR|Failed to DB view list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|164|ERROR|Failed to fetch data source list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|165|ERROR|Failed to fetch column list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|166|ERROR|Failed to label list|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|167|ERROR|Failed to fetch answer|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|168|ERROR|Failed to fetch worksheet|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|169|INFO|Aggregated worksheet {1} created 1 – name of aggregated worksheet|None|None|
|170|ERROR|Failure creating Aggregated Worksheet.|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|171|INFO|{1} updated 1 – name of aggregated worksheet|None|None|
|172|ERROR|{1} failed to update 1 – name of aggregated worksheet|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|173|ERROR|{1} failed to update 1 – name of the formula|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|174|ERROR|Comments cannot be fetched|Failed to save client state|None|
|175|ERROR|Comment cannot be created|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|176|ERROR|Comment cannot be updated|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|177|ERROR|Comment cannot be deleted|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|178|INFO|Rule saved successfully|None|None|
|179|ERROR|Rule could not be saved|We're not sure what happened. Please email the trace file to {adminEmail}.|None|
|180|INFO|Rule deleted successfully|None|None|
|181|ERROR|Rule could not be deleted|We're not sure what happened. Please email the trace file to {adminEmail}.|None|
|182|INFO|Item deleted successfully.|None|None|
|183|ERROR|Item could not be deleted.|We're not sure what happened. Please email the trace file to {adminEmail}.|None|
|184|INFO|Related link created successfully.|None|None|
|185|ERROR|Related link could not be created.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.|None|
|186|INFO|Related link updated successfully.|None|None|
|187|ERROR|Related link could not be updated.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.|None|
|188|INFO|Related link deleted successfully.|None|None|
|189|ERROR|Related link could not be deleted.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.|None|
|190|INFO|Related link detail fetched successfully.|None|None|
|191|ERROR|Related link detail could not be fetched.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.|None|


##  Data Service Errors (500 - 699)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|500|ERROR|Failed to fetch leaf level data|Failed to fetch leaf level data.|None|
|501|ERROR|Failed to fetch excel data|Failed to fetch excel data.|None|
|502|ERROR|Failed to fetch visualization data|Failed to fetch visuzliation data.|None|
|503|ERROR|Failed to fetch visualizations data|Failed to fetch data for visualizations.|None|
|504|ERROR|Failed to fetch chart data|Failed to fetch table data.|None|
|505|ERROR|Failed to fetch table data|Failed to fetch table data.|None|
|506|ERROR|Failed to fetch worksheet data|Failed to fetch worksheet data.|None|
|507|ERROR|Failed to fetch filter data|Failed to fetch filter data.|None|
|508|ERROR|Failed to fetch headline data|Failed to fetch filter data.|None|
|509|ERROR|Failed to fetch natural query|Failed to fetch natural query.|None|
|510|INFO|File upload successful|None|None|
|511|ERROR|Failed to upload file|Failed to upload|None|
|512|ERROR|The pinboard data could not be exported to pdf.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.|None|

## Dependency Errors (700 - 799)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|700|ERROR|Failure fetching table dependents|Failed to fetch dependents for the table.|None|
|701|ERROR|Failure fetching column dependents|Failed to fetch dependents for the column.|None|
|702|ERROR|Failure fetching incomplete items|Failed to fetch incomplete items.|None|

## Admin Service Errors (800 - 899)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|800|ERROR|Failure fetching MemCache stats|Failed to fetch MemCache stats.|None|
|801|ERROR|Failure MemCache Clear|Failed to clear MemCache.|None|
|802|ERROR|Failure searching from MemCache|Failed to search from MemCache.|None|
|803|ERROR|Failure fetching Loggers|Failed to fetch Loggers.|None|
|804|ERROR|Failure setting LogLevel|Failed to set Log Level.|None|
|805|ERROR|Failure getting debug info|Failed to get debug info.|None|
|806|INFO|Memcache cleared successfully|None|None|
|807|INFO|Log level set successfully|None|None|
|808|ERROR|Failed to report problem|None|None|
|809|INFO|Problem reported successfully|None|None|

## Permissions Errors (900 - 999)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|900|ERROR|Failure fetching table permissions|Failed to fetch table permissions.|None|
|901|ERROR|Failure fetching answer permissions|Failed to fetch answer permissions.|None|
|902|ERROR|Failure fetching pinboard permissions|Failed to fetch pinboard permissions.|None|
|903|ERROR|Failure getting metadata permissions|Failed to get metadata permissions.|None|

## Import Data Errors (1000 - 1099)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|1000|ERROR|Data caching failed|Data caching failed.|None|
|1001|ERROR|Read Columns failed.|Failed to read columns.|None|
|1002|ERROR|Failed to read keys.|Failed to read keys.|None|
|1003|ERROR|Failed to read relationships.|Failed to read relationships.|None|
|1004|ERROR|Failed to load data.|Failed to load data.|None|
|1005|ERROR|Failed to create table.|Failed to create table.|None|
|1006|ERROR|Failed to fetch data rows.|Failed to fetch data rows.|None|
|1007|ERROR|Failed to delete files.|Failed to fetch data rows.|None|
|1008|ERROR|Failed to abort create table.|Failed to abort create table.|None|
|1009|ERROR|Failed to create schema.|Failed to create schema.|None|
|1010|ERROR|Failed to fetch table models.|Failed to fetch table models.|None|
|1011|ERROR|Failed to fetch sample values.|Failed to fetch sample values.|None|

## Scheduled Jobs Errors (1100 - 1199)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|1100|INFO|The list of jobs.|None|Please click 'Report Problem' to email a report to your administrator.|
|1110|INFO|Successfully created job.|None|None|
|1111|ERROR|The job could not be created.|None|Please click 'Report Problem' to email a report to your administrator.|
|1112|INFO|Successfully updated job.|None|None|
|1113|ERROR|The job could not be updated.|None|Please click 'Report Problem' to email a report to your administrator.|
|1114|INFO|Successfully deleted jobs.|None|None|
|1115|ERROR|The job could not be deleted.|None|Please click 'Report Problem' to email a report to your administrator.|
|1116|INFO|The job was paused.|None|None|
|1117|ERROR|The job could not be paused.|None|Please click 'Report Problem' to email a report to your administrator.|
|1118|INFO|The job was resumed|None|None|
|1119|ERROR|The job could not be resumed.|None|Please click 'Report Problem' to email a report to your administrator.|

## User Admin Service Errors (1200 - 1399)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|1200|ERROR|Failed to fetch users list|Failed to fetch users list|None|
|1201|ERROR|Failed to fetch groups list|Failed to fetch groups list|None|
|1202|ERROR|Failed to fetch users and groups list|Failed to fetch users and groups list|None|
|1203|ERROR|Successfully created user|Successfully created user|None|
|1204|ERROR|Failed to create user|Failed to create user|None|
|1205|ERROR|Successfully created group|Successfully created group|None|
|1206|ERROR|Failed to create group|Failed to create group|None|
|1207|ERROR|Successfully updated user|Successfully updated user|None|
|1208|ERROR|Failed to update user|Failed to update user|None|
|1209|ERROR|Successfully updated users|Successfully updated users|None|
|1210|ERROR|Failed to update users|Failed to update users|None|
|1211|ERROR|Successfully updated group|Successfully updated group|None|
|1212|ERROR|Failed to update group|Failed to update group|None|
|1213|ERROR|Successfully updated password|Successfully updated password|None|
|1214|ERROR|Failed to update password|Failed to update password|None|
|1215|ERROR|Successfully deleted users|Successfully deleted users|None|
|1216|ERROR|Failed to delete users|Failed to delete users|None|
|1217|ERROR|Successfully deleted groups|Successfully deleted groups|None|
|1218|ERROR|Failed to delete groups|Failed to delete groups|None|
|1219|ERROR|Successfully assigned users to groups|Successfully assigned users to groups|None|
|1220|ERROR|Failed to assign users to groups|Failed to assign users to groups|None|
|1221|ERROR|Failed to fetch profile pic|Failed to fetch profile pic|None|
|1222|INFO|Successfully uploaded profile pic|None|None|
|1223|ERROR|Failed to upload profile pic|Failed to upload profile pic|None|
|1224|ERROR|Successfully assigned groups to group|Failed to assign user to group|None|
|1228|ERROR|Successfully created role|Successfully created role|None|
|1229|ERROR|Failed to create role|Failed to create role|None|
|1230|ERROR|Successfully deleted role|Successfully deleted role|None|
|1231|ERROR|Failed to delete role|Failed to delete role|None|
|1232|ERROR|Successfully updated role|Successfully updated role|None|
|1233|ERROR|Failed to update role|Failed to update role|None|

## Session Service Errors (1400 - 1599)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|1400|ERROR|Failed to fetch session info|Failed to fetch session info|None|
|1401|ERROR|Failed to login|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|1402|ERROR|Failed to logout|Failed to logout|None|
|1403|ERROR|Failed to save client state|Failed to save client state|None|
|1404|ERROR|Failed to fetch login config|Failed to fetch login config|None|
|1405|ERROR|Failed to fetch slack config|Failed to fetch slack config|None|
|1406|ERROR|Health check failed|Health check failed|None|
|1407|ERROR|Failed to fetch health portal token|Failed to fetch health portal token|None|
|1408|ERROR|The health portal release name could not be retrieved|Uh oh. We're not sure what happened. Please email the trace file to {adminEmail}.|None|

## Data Management Service Errors (1600 - 1799)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|1600|ERROR|Failed to fetch data source types|Failed to fetch data source types|None|
|1601|ERROR|Failed to fetch data source sample values|Failed to fetch data source sample values|None|
|1602|ERROR|Failed to delete data source|Failed to delete data source|None|
|1603|ERROR|Failed to execute DDL|Failed to execute DDL|None|
|1604|ERROR|Failed to update schedule|Failed to update schedule|None|
|1605|ERROR|Failed to reload tasks|Failed to reload tasks|None|
|1606|ERROR|Failed to stop tasks|Failed to stop tasks|None|
|1607|ERROR|Failed to get creation DDL|Failed to get creation DDL|None|
|1608|ERROR|Failed to load from data source|Failed to load from data source|None|
|1609|ERROR|Failed to create connection to data source|Failed to create connection to data source|None|
|1610|ERROR|Failed to create data source|Failed to create data source|None|
|1611|ERROR|Failed to connect to data source|Failed to connect to data source|None|
|1612|ERROR|Failed to get data source connection field info|Failed to get data source connection field info|None|
|1613|ERROR|Failed to get connection list for data source|Failed to get connection list for data source|None|
|1614|ERROR|Failed to get connection attributes for data source|Failed to get connection attributes for data source|None|
|1615|ERROR|Failed to get connections to data source|Failed to get connections to data source|None|
|1616|ERROR|Failed to fetch data source config|Failed to fetch data source config|None|
|1617|ERROR|Failed to parse sql.|Failed to parse sql.|None|
|1618|ERROR|Failed to execute sql.|Failed to execute sql.|None|
|1619|INFO|Successfully created connection to data source|None|None|
|1620|INFO|Successfully updated data upload schedule|None|None|
|1621|ERROR|Failed to execute sql.|Please check the failing command, executed {1} statements successfully.|None|
|1622|ERROR|Lightweight data-cache disabled|Lightweight data-cache disabled|None|
|1623|INFO|Selected tables were queued for loading.|Selected tables were queued for loading.|None|
|1624|ERROR|DataType conversion error.|No mapping found for source datatype to ThoughtSpot datatype.|None|
|1625|INFO|Successfully reload task started.|None|None|
|1626|INFO|Successfully connected to data source.|None|None|
|1627|INFO|Successfully created data source.|None|None|
|1628|INFO|Successfully stopped the tasks.|None|None|
|1629|INFO|Successfully deleted the connection.|None|None|
|1630|ERROR|There was an error deleting this connection.|None|None|
|1631|INFO|Successfully executed the DDL.|None|None|


## Cluster Status Service Errors (1800 - 1899)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|1800|WARNING|Failed to fetch cluster information from search service.|None|None|
|1801|WARNING|Failed to fetch table detail information from search service.|None|None|
|1802|WARNING|Failed to fetch cluster information from database service.|None|None|
|1803|WARNING|Failed to fetch table detail information from databse service.|None|None|
|1804|WARNING|Failed to fetch cluster information from cluster management service.|None|None|
|1805|WARNING|Failed to fetch detail information from cluster management service.|None|None|
|1806|WARNING|Failed to fetch log from cluster management service.|None|None|
|1807|WARNING|Failed to fetch snapshot list from cluster management service.|None|None|
|1808|WARNING|Failed to fetch cluster information from alert management service.|None|None|
|1809|WARNING|Failed to fetch cluster information from event service.|None|None|
|1810|WARNING|Failed to fetch alerts information from alert management service.|None|None|
|1811|WARNING|Failed to fetch events information from alert management service.|None|None|
|1812|INFO|Thanks for your feedback!|None|None|
|1813|WARNING|Sorry! Unable to submit the feedback at this moment!|None|None|
|1814|INFO|Successfully exported objects. File can be found at {1}.|None|None|
|1815|ERROR|Sorry! Unable to export objects at this moment!|What happened? {1}.|None|
|1816|INFO|Successfully imported objects|None|None|
|1817|ERROR|Sorry! Unable to import objects at this moment!|What happened? {1}.|None|
|1818|INFO|Successfully deleted data source object(s\).|None|None|

## Callosum API Errors (9000 - 9199)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|9000|ERROR|The data you are trying to delete has some dependencies|Some objects depend on the data you are trying to delete|delete the dependencies before deleting this data.|
|9001|ERROR|Uh oh. We’re not sure what happened.|Please email the trace file to {adminEmail}.|None|
|9002|ERROR|Could not authorize user|Try logging in again|None|
|9003|ERROR|Uh oh. We’re not sure what happened.|Please email the trace file to {adminEmail}.|None|
|9004|WARNING|Still loading data, come back soon|None|None|
|9005|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to {adminEmail}.|None|
|9006|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to {adminEmail}.|None|
|9007|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to {adminEmail}.|None|
|9008|ERROR|Something went wrong with your search|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|9009|ERROR|The calculation engine has timed out. Please try again.|Please email the trace file to {adminEmail}.|None|
|9010|ERROR|Cannot open Object|Object cannot be opened due to errors in some of its dependencies|None|
|Blink Generated Errors (9500 - 9599)|
|9500|WARNING|Cannot connect to the calculation engine. Please try again soon.|None|None|
|9501|WARNING|The calculation engine has timed out. Please try again.|None|None|
|9502|WARNING|Cannot connect to the search engine. Please try again soon.|None|None|
|9503|WARNING|The search engine has timed out. Please try again.|None|None|
|9504|ERROR|Cannot open {1}|{1} cannot be opened due to errors in the following dependencies 1 - Type of the object Table/Answer/Pinboard etc.|None|
|9505|WARNING|We’re still indexing this data, try again soon|None|None|
|9506|ERROR|Object is not present in the system|{1} is not present in the system 1 - Type of the object Table/Answer/Pinboard etc.|None|
|9507|ERROR|ThoughtSpot is unreachable. Please try again soon|None|None|


## Common Errors (10000 - 10099)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|10000|ERROR|A system error has occurred|Uh oh. We're not sure what happened. Please contact your administrator.|None|
|10001|ERROR|Connection failed|The metadata store is not reachable.|Please contact your administrator|
|10002|ERROR|The input is invalid|Input from the client to the server is invalid.|Please contact your administrator|
|10003|ERROR|Unfortunately, you can't do that|You are not authorized to perform {1}. \# {1} – action user is not authorized for|Please request access from your administrator|
|10004|ERROR|The user could not be authorized|User {0} is not authorized to perform {1}. \# {0} – name of the user \# {1} – action user is not authorized for|Please request access from your administrator|
|10005|ERROR|The base object is missing|An underlying object referenced by this object is missing in store.|Please contact your administrator|
|10006|ERROR|The connection to Zookeeper has failed|Zookeeper is not reachable.|Please contact your administrator|
|10007|ERROR|There's invalid parameter(s)|Invalid parameter values: {0}.|Please contact your administrator|
|10008|ERROR|The user cannot be found|User {0} not found in store. \# {0} – name of the user|Please contact your administrator|
|10009|ERROR|Cannot add group|This group already belongs to the group you are trying to add it to.|None|

## Falcon Errors (10600 - 10699)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|10603|ERROR|Falcon query cancelled|None|None|

## Data Errors (11000 - 11099)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|11001|ERROR|Invalid row|None|None|
|11002|ERROR|Invalid table/query resultset|None|None|
|11003|ERROR|Invalid column identifier|None|None|
|11004|ERROR|Invalid visualization identifier|None|None|
|11005|ERROR|No data|Query execution resulted in no data.|None|
|11006|ERROR|Query execution failed|Error in query execution to Falcon.|None|
|11007|ERROR|Answer data generation failed|Error in Answer data generation for Sage input.|None|
|11008|ERROR|Data export failed|None|None|
|11009|ERROR|Data generation failed|Error in data generation in Callosum.|None|

## Report Generation Errors (12000 - 13000)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|12700|ERROR|Error while exporting data file.|None|None|
|12701|ERROR|Invalid input.|The definition of the job is invalid.|None|
|12702|ERROR|No author provided.|None|None|
|12703|ERROR|No pinboard provided.|None|None|
|12704|ERROR|No recipients provided.|None|None|
|12705|ERROR|This format is not supported.|None|None|
|12706|ERROR|No job name provided.|None|None|
|12707|ERROR|No job description provided.|None|None|
|12708|ERROR|Pinboard data export error.|None|None|
|12709|ERROR|Visualization data export error.|None|None|
|12710|ERROR|User data unavailable.|None|None|
|12711|ERROR|Configuration information unavailable.|None|None|
|12712|ERROR|There are too many recipients.|The max number of recipients is 1000.|None|
|12713|ERROR|Attachment size limit exceeded.|None|None|
|12714|ERROR|Recipient domain is not whitelisted.|None|None|

## More Metadata Errors (13000 - 13099)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|13001|ERROR|Schema creation failed|Error creating database schema.|None|
|13002|ERROR|Views creation failed|Error creating view.|None|
|13003|ERROR|The object cannot be found in store|Object with Id: {0} of type: {1} not found. \# {0} – identity of the object \# {1} – type of object|None|
|13004|ERROR|The object is in an invalid state|Oject with Id: {0} of type: {1} in invalid state. \# {0} – identity of the object \# {1} – type of object|None|
|13005|ERROR|Object already exists|Object with Id: {0} of type: {1} already exists. \# {0} – identity of the object \# {1} – type of object|None|
|13006|ERROR|Invalid object type|Invalid type: {0} provided. \# {1} – type of object|None|
|13007|ERROR|Invalid Sage question|Insufficient or invalid input from Sage: {0}. \# {0} – the invalid input|None|
|13008|ERROR|Invalid Sage question|Input from from Sage – missing columns of type: {0}. \# {0} – column type|None|
|13009|ERROR|Invalid Sage question|Invalid input from Sage – invalid expression: {0}. \# {0} – the invalid expression|None|
|13010|ERROR|Sending logical metadata to Sage failed|Sending logical metadata to Sage failed due to: {0}. \# {0} – reason for failure|None|
|13011|ERROR|Answer generation failed|Answer generation failed due to: {0}. \# {0} – reason for failure|None|
|13012|ERROR|Worksheet generation failed|Worksheet generation failed due to: {0}. \# {0} – reason for failure|None|
|13013|ERROR|Service provider unavailable|Service provider unavailable: {0}. \# {0} – provider details|None|
|13015|ERROR|Physical model not loaded|None|None|
|13016|ERROR|Invalid physical schema proto|Inconsistency in physical schema from Falcon: {0}. \# {0} – error details|None|
|13017|ERROR|Invalid duplicate columns|Duplicate columns: {0}. \# {0} – List of duplicate column identities|None|
|13018|ERROR|Cyclic relationship|Detected cycles: {0}. \# {0} – cycle details|None|
|13019|WARNING|Older physical schema version received|Schema update for older version: {0} received and ignored. \# {0} – received version number|None|
|13020|ERROR|Invalid relationship|Attempted to create invalid relationship: {0}. \# {0} – relationship details|None|
|13022|ERROR|Invalid filter values: {values}|None|None|
|13023|ERROR|Creating relationship failed.|None|None|
|13024|ERROR|Deleting schema failed.|None|None|
|13025|ERROR|Expression validation failed.|None|None|
|13026|INFO|Load schedule successfully disabled.|None|None|
|13027|ERROR|Load schedule could not be disabled.|None|None|
|13028|ERROR|Objects fetched from the connection are invalid for editing datasource.|None|To proceed with editing the datasource, please edit the connection below to fetch valid source objects.|
|13029|INFO|Successfully edited data source connection.|None|None|
|13030|ERROR|Connection test failed.|None|Please verify connection attributes.|

## Loading Errors (30000 - 30099)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|30000|ERROR|Table is not ready (data loading in progress\).|None|None|


## Timely Errors (60000 - 64999)

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|60000|ERROR|Failed to initialize.|None|None|
