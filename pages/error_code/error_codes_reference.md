---
title: [Error code reference]
tags: 
keywords: tbd
last_updated: tbd
summary: "List of error codes and messages."
sidebar: mydoc_sidebar
---
# Error code reference

This section lists error codes that can appear in ThoughtSpot, with summary information and actions to take.

**Note:** Only the base code number is listed for each error. So keep this in mind when searching through this reference. For example, error code TS-00125 is simply listed as 125.

|Code|Severity|Summary|Details|Action|
|----|--------|-------|-------|------|
|Metadata Errors \(100 - 499\)|
|100|INFO|Success. \{1\} has been added to \{2\}. \# \{1\} – name of visualization \# \{2\} – \{name/link to pinboard\}| | |
|101|ERROR|Failure adding \{1\} to \{2\}|Visualization could not be added to \{2\} \# \{1\} – name of visualization \# \{2\} – name/link to pinboard| |
|102|ERROR|Failure adding \{1\} to \{2\} due to corruption|\{1\} could not be added to \{2\} as the pinboard has one or more invalid visualizations|Please try again after removing the invalid visualization\(s\) from \{2\} \# \{1\} – name of visualization \# \{2\} – name/link to pinboard|
|103|INFO|Success. Visualization has been deleted from \{1\}. 1 – name/link to pinboard| | |
|104|ERROR|Failure deleting visual from \{1\}|Visualization could not be deleted from the pinboard. 1 – name/link to pinboard| |
|105|ERROR|Failure deleting visual from \{1\} due to corruption|Visualization could not be deleted from \{1\} as the pinboard has one or more invalid visualizations. 1 – name/link to pinboard|Please try again after removing the invalid visualization\(s\) from the pinboard|
|106|INFO|Success. \{1\} created successfully. 1 – name/link to pinboard| | |
|107|ERROR|Failure creating \{1\}. 1 – name/link to pinboard|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|108|INFO|Sticker created successfully.| | |
|109|ERROR|Failure creating the sticker.|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|110|INFO|Sticker deleted successfully.| | |
|111|ERROR|Failure deleting sticker.|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|112|INFO|Pinboards deleted successfully.| | |
|113|ERROR|Failure deleting pinboards|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|114|INFO|Answers deleted successfully.| | |
|115|ERROR|Failure deleting answers|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|116|INFO|Tables deleted successfully.| | |
|117|ERROR|Failure deleting tables|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|118|INFO|Relationship created successfully.| | |
|119|ERROR|Failure creating relationship|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|120|INFO|Relationship updated successfully.| | |
|121|ERROR|Failure updating the relationship|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|122|INFO|Relationship deleted successfully.| | |
|123|ERROR|Failure deleting the relationship|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|124|ERROR|Failure fetching details for table|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|125|ERROR|Failure fetching details for the tables|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|126|ERROR|Failure fetching details for datasource|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|127|ERROR|Failure fetching details for datasources|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|128|ERROR|Failure fetching details for metadata items|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|129|ERROR|Failure opening the answer|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|130|ERROR|Failure opening the pinboard|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|131|ERROR|Failure opening the worksheet|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|132|INFO|Table saved successfully.| | |
|133|ERROR|There was a problem saving the table|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|134|INFO|Visualization update successful| | |
|135|ERROR|Visualization failed to update|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|136|INFO|\{1\} saved 1 – name of answer| | |
|137|ERROR|\{1\} could not be saved 1 – name of answer|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|138|INFO|\{1\} saved 1 - name of pinboard / link| | |
|139|ERROR|\{1\} could not be saved 1 - name of pinboard / link|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|140|INFO|\{1\} saved 1 – name of worksheet| | |
|141|ERROR|\{1\} could not be saved 1 – name of worksheet|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|142|INFO|\{1\} saved 1 – name of answer| | |
|143|ERROR|\{1\} could not be saved|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}. 1 – name of answer| |
|144|INFO|\{1\} saved 1 – name/link to pinboard| | |
|145|ERROR|\{1\} could not be saved|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}. 1 – name of pinboard| |
|146|INFO|Worksheet saved| | |
|147|ERROR|Worksheet could not be saved|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|148|INFO|Sticker updated| | |
|149|ERROR|The sticker could not be updated|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|150|INFO|Successfully assigned sticker| | |
|151|ERROR|The sticker could not be assigned|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|152|INFO|Successfully unassigned sticker| | |
|153|ERROR|The sticker could not be unassigned|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|154|ERROR|Failed to fetch metadata list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|155|ERROR|Failed to fetch table list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|156|ERROR|Failed to fetch relationship list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|157|ERROR|Failed to fetch answer list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|158|ERROR|Failed to fetch pinboard list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|159|ERROR|Failed to fetch worksheet list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|160|ERROR|Failed to fetch aggregated worksheet list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|161|ERROR|Failed to fetch imported data list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|162|ERROR|Failed to fetch system table list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|163|ERROR|Failed to DB view list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|164|ERROR|Failed to fetch data source list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|165|ERROR|Failed to fetch column list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|166|ERROR|Failed to label list|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|167|ERROR|Failed to fetch answer|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|168|ERROR|Failed to fetch worksheet|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|169|INFO|Aggregated worksheet \{1\} created 1 – name of aggregated worksheet| | |
|170|ERROR|Failure creating Aggregated Worksheet.|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|171|INFO|\{1\} updated 1 – name of aggregated worksheet| | |
|172|ERROR|\{1\} failed to update 1 – name of aggregated worksheet|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|173|ERROR|\{1\} failed to update 1 – name of the formula|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|174|ERROR|Comments cannot be fetched|Failed to save client state| |
|175|ERROR|Comment cannot be created|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|176|ERROR|Comment cannot be updated|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|177|ERROR|Comment cannot be deleted|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|178|INFO|Rule saved successfully| | |
|179|ERROR|Rule could not be saved|We're not sure what happened. Please email the trace file to \{adminEmail\}.| |
|180|INFO|Rule deleted successfully| | |
|181|ERROR|Rule could not be deleted|We're not sure what happened. Please email the trace file to \{adminEmail\}.| |
|182|INFO|Item deleted successfully.| | |
|183|ERROR|Item could not be deleted.|We're not sure what happened. Please email the trace file to \{adminEmail\}.| |
|184|INFO|Related link created successfully.| | |
|185|ERROR|Related link could not be created.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, \{adminEmail\}.| |
|186|INFO|Related link updated successfully.| | |
|187|ERROR|Related link could not be updated.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, \{adminEmail\}.| |
|188|INFO|Related link deleted successfully.| | |
|189|ERROR|Related link could not be deleted.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, \{adminEmail\}.| |
|190|INFO|Related link detail fetched successfully.| | |
|191|ERROR|Related link detail could not be fetched.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, \{adminEmail\}.| |
|Data Service Errors \(500 - 699\)|
|500|ERROR|Failed to fetch leaf level data|Failed to fetch leaf level data.| |
|501|ERROR|Failed to fetch excel data|Failed to fetch excel data.| |
|502|ERROR|Failed to fetch visualization data|Failed to fetch visuzliation data.| |
|503|ERROR|Failed to fetch visualizations data|Failed to fetch data for visualizations.| |
|504|ERROR|Failed to fetch chart data|Failed to fetch table data.| |
|505|ERROR|Failed to fetch table data|Failed to fetch table data.| |
|506|ERROR|Failed to fetch worksheet data|Failed to fetch worksheet data.| |
|507|ERROR|Failed to fetch filter data|Failed to fetch filter data.| |
|508|ERROR|Failed to fetch headline data|Failed to fetch filter data.| |
|509|ERROR|Failed to fetch natural query|Failed to fetch natural query.| |
|510|INFO|File upload successful| | |
|511|ERROR|Failed to upload file|Failed to upload| |
|512|ERROR|The pinboard data could not be exported to pdf.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, \{adminEmail\}.| |
|Dependency Errors \(700 - 799\)|
|700|ERROR|Failure fetching table dependents|Failed to fetch dependents for the table.| |
|701|ERROR|Failure fetching column dependents|Failed to fetch dependents for the column.| |
|702|ERROR|Failure fetching incomplete items|Failed to fetch incomplete items.| |
|Admin Service Errors \(800 - 899\)|
|800|ERROR|Failure fetching MemCache stats|Failed to fetch MemCache stats.| |
|801|ERROR|Failure MemCache Clear|Failed to clear MemCache.| |
|802|ERROR|Failure searching from MemCache|Failed to search from MemCache.| |
|803|ERROR|Failure fetching Loggers|Failed to fetch Loggers.| |
|804|ERROR|Failure setting LogLevel|Failed to set Log Level.| |
|805|ERROR|Failure getting debug info|Failed to get debug info.| |
|806|INFO|Memcache cleared successfully| | |
|807|INFO|Log level set successfully| | |
|808|ERROR|Failed to report problem| | |
|809|INFO|Problem reported successfully| | |
|Permissions Errors \(900 - 999\)|
|900|ERROR|Failure fetching table permissions|Failed to fetch table permissions.| |
|901|ERROR|Failure fetching answer permissions|Failed to fetch answer permissions.| |
|902|ERROR|Failure fetching pinboard permissions|Failed to fetch pinboard permissions.| |
|903|ERROR|Failure getting metadata permissions|Failed to get metadata permissions.| |
|Import Data Errors \(1000 - 1099\)|
|1000|ERROR|Data caching failed|Data caching failed.| |
|1001|ERROR|Read Columns failed.|Failed to read columns.| |
|1002|ERROR|Failed to read keys.|Failed to read keys.| |
|1003|ERROR|Failed to read relationships.|Failed to read relationships.| |
|1004|ERROR|Failed to load data.|Failed to load data.| |
|1005|ERROR|Failed to create table.|Failed to create table.| |
|1006|ERROR|Failed to fetch data rows.|Failed to fetch data rows.| |
|1007|ERROR|Failed to delete files.|Failed to fetch data rows.| |
|1008|ERROR|Failed to abort create table.|Failed to abort create table.| |
|1009|ERROR|Failed to create schema.|Failed to create schema.| |
|1010|ERROR|Failed to fetch table models.|Failed to fetch table models.| |
|1011|ERROR|Failed to fetch sample values.|Failed to fetch sample values.| |
|Scheduled Jobs Errors \(1100 - 1199\)|
|1100|INFO|The list of jobs.| |Please click 'Report Problem' to email a report to your administrator.|
|1110|INFO|Successfully created job.| | |
|1111|ERROR|The job could not be created.| |Please click 'Report Problem' to email a report to your administrator.|
|1112|INFO|Successfully updated job.| | |
|1113|ERROR|The job could not be updated.| |Please click 'Report Problem' to email a report to your administrator.|
|1114|INFO|Successfully deleted jobs.| | |
|1115|ERROR|The job could not be deleted.| |Please click 'Report Problem' to email a report to your administrator.|
|1116|INFO|The job was paused.| | |
|1117|ERROR|The job could not be paused.| |Please click 'Report Problem' to email a report to your administrator.|
|1118|INFO|The job was resumed| | |
|1119|ERROR|The job could not be resumed.| |Please click 'Report Problem' to email a report to your administrator.|
|User Admin Service Errors \(1200 - 1399\)|
|1200|ERROR|Failed to fetch users list|Failed to fetch users list| |
|1201|ERROR|Failed to fetch groups list|Failed to fetch groups list| |
|1202|ERROR|Failed to fetch users and groups list|Failed to fetch users and groups list| |
|1203|ERROR|Successfully created user|Successfully created user| |
|1204|ERROR|Failed to create user|Failed to create user| |
|1205|ERROR|Successfully created group|Successfully created group| |
|1206|ERROR|Failed to create group|Failed to create group| |
|1207|ERROR|Successfully updated user|Successfully updated user| |
|1208|ERROR|Failed to update user|Failed to update user| |
|1209|ERROR|Successfully updated users|Successfully updated users| |
|1210|ERROR|Failed to update users|Failed to update users| |
|1211|ERROR|Successfully updated group|Successfully updated group| |
|1212|ERROR|Failed to update group|Failed to update group| |
|1213|ERROR|Successfully updated password|Successfully updated password| |
|1214|ERROR|Failed to update password|Failed to update password| |
|1215|ERROR|Successfully deleted users|Successfully deleted users| |
|1216|ERROR|Failed to delete users|Failed to delete users| |
|1217|ERROR|Successfully deleted groups|Successfully deleted groups| |
|1218|ERROR|Failed to delete groups|Failed to delete groups| |
|1219|ERROR|Successfully assigned users to groups|Successfully assigned users to groups| |
|1220|ERROR|Failed to assign users to groups|Failed to assign users to groups| |
|1221|ERROR|Failed to fetch profile pic|Failed to fetch profile pic| |
|1222|INFO|Successfully uploaded profile pic| | |
|1223|ERROR|Failed to upload profile pic|Failed to upload profile pic| |
|1224|ERROR|Successfully assigned groups to group|Failed to assign user to group| |
|1228|ERROR|Successfully created role|Successfully created role| |
|1229|ERROR|Failed to create role|Failed to create role| |
|1230|ERROR|Successfully deleted role|Successfully deleted role| |
|1231|ERROR|Failed to delete role|Failed to delete role| |
|1232|ERROR|Successfully updated role|Successfully updated role| |
|1233|ERROR|Failed to update role|Failed to update role| |
|Session Service Errors \(1400 - 1599\)|
|1400|ERROR|Failed to fetch session info|Failed to fetch session info| |
|1401|ERROR|Failed to login|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|1402|ERROR|Failed to logout|Failed to logout| |
|1403|ERROR|Failed to save client state|Failed to save client state| |
|1404|ERROR|Failed to fetch login config|Failed to fetch login config| |
|1405|ERROR|Failed to fetch slack config|Failed to fetch slack config| |
|1406|ERROR|Health check failed|Health check failed| |
|1407|ERROR|Failed to fetch health portal token|Failed to fetch health portal token| |
|1408|ERROR|The health portal release name could not be retrieved|Uh oh. We're not sure what happened. Please email the trace file to \{adminEmail\}.| |
|Data Management Service Errors \(1600 - 1799\)|
|1600|ERROR|Failed to fetch data source types|Failed to fetch data source types| |
|1601|ERROR|Failed to fetch data source sample values|Failed to fetch data source sample values| |
|1602|ERROR|Failed to delete data source|Failed to delete data source| |
|1603|ERROR|Failed to execute DDL|Failed to execute DDL| |
|1604|ERROR|Failed to update schedule|Failed to update schedule| |
|1605|ERROR|Failed to reload tasks|Failed to reload tasks| |
|1606|ERROR|Failed to stop tasks|Failed to stop tasks| |
|1607|ERROR|Failed to get creation DDL|Failed to get creation DDL| |
|1608|ERROR|Failed to load from data source|Failed to load from data source| |
|1609|ERROR|Failed to create connection to data source|Failed to create connection to data source| |
|1610|ERROR|Failed to create data source|Failed to create data source| |
|1611|ERROR|Failed to connect to data source|Failed to connect to data source| |
|1612|ERROR|Failed to get data source connection field info|Failed to get data source connection field info| |
|1613|ERROR|Failed to get connection list for data source|Failed to get connection list for data source| |
|1614|ERROR|Failed to get connection attributes for data source|Failed to get connection attributes for data source| |
|1615|ERROR|Failed to get connections to data source|Failed to get connections to data source| |
|1616|ERROR|Failed to fetch data source config|Failed to fetch data source config| |
|1617|ERROR|Failed to parse sql.|Failed to parse sql.| |
|1618|ERROR|Failed to execute sql.|Failed to execute sql.| |
|1619|INFO|Successfully created connection to data source| | |
|1620|INFO|Successfully updated data upload schedule| | |
|1621|ERROR|Failed to execute sql.|Please check the failing command, executed \{1\} statements successfully.| |
|1622|ERROR|Lightweight data-cache disabled|Lightweight data-cache disabled| |
|1623|INFO|Selected tables were queued for loading.|Selected tables were queued for loading.| |
|1624|ERROR|DataType conversion error.|No mapping found for source datatype to ThoughtSpot datatype.| |
|1625|INFO|Successfully reload task started.| | |
|1626|INFO|Successfully connected to data source.| | |
|1627|INFO|Successfully created data source.| | |
|1628|INFO|Successfully stopped the tasks.| | |
|1629|INFO|Successfully deleted the connection.| | |
|1630|ERROR|There was an error deleting this connection.| | |
|1631|INFO|Successfully executed the DDL.| | |
|Cluster Status Service Errors \(1800 - 1899\)|
|1800|WARNING|Failed to fetch cluster information from search service.| | |
|1801|WARNING|Failed to fetch table detail information from search service.| | |
|1802|WARNING|Failed to fetch cluster information from database service.| | |
|1803|WARNING|Failed to fetch table detail information from databse service.| | |
|1804|WARNING|Failed to fetch cluster information from cluster management service.| | |
|1805|WARNING|Failed to fetch detail information from cluster management service.| | |
|1806|WARNING|Failed to fetch log from cluster management service.| | |
|1807|WARNING|Failed to fetch snapshot list from cluster management service.| | |
|1808|WARNING|Failed to fetch cluster information from alert management service.| | |
|1809|WARNING|Failed to fetch cluster information from event service.| | |
|1810|WARNING|Failed to fetch alerts information from alert management service.| | |
|1811|WARNING|Failed to fetch events information from alert management service.| | |
|1812|INFO|Thanks for your feedback!| | |
|1813|WARNING|Sorry! Unable to submit the feedback at this moment!| | |
|1814|INFO|Successfully exported objects. File can be found at \{1\}.| | |
|1815|ERROR|Sorry! Unable to export objects at this moment!|What happened? \{1\}.| |
|1816|INFO|Successfully imported objects| | |
|1817|ERROR|Sorry! Unable to import objects at this moment!|What happened? \{1\}.| |
|1818|INFO|Successfully deleted data source object\(s\).| | |
|Callosum API Errors \(9000 - 9199\)|
|9000|ERROR|The data you are trying to delete has some dependencies|Some objects depend on the data you are trying to delete|delete the dependencies before deleting this data.|
|9001|ERROR|Uh oh. We’re not sure what happened.|Please email the trace file to \{adminEmail\}.| |
|9002|ERROR|Could not authorize user|Try logging in again| |
|9003|ERROR|Uh oh. We’re not sure what happened.|Please email the trace file to \{adminEmail\}.| |
|9004|WARNING|Still loading data, come back soon| | |
|9005|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to \{adminEmail\}.| |
|9006|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to \{adminEmail\}.| |
|9007|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to \{adminEmail\}.| |
|9008|ERROR|Something went wrong with your search|Uh oh. We’re not sure what happened. Please email the trace file to \{adminEmail\}.| |
|9009|ERROR|The calculation engine has timed out. Please try again.|Please email the trace file to \{adminEmail\}.| |
|9010|ERROR|Cannot open Object|Object cannot be opened due to errors in some of its dependencies| |
|Blink Generated Errors \(9500 - 9599\)|
|9500|WARNING|Cannot connect to the calculation engine. Please try again soon.| | |
|9501|WARNING|The calculation engine has timed out. Please try again.| | |
|9502|WARNING|Cannot connect to the search engine. Please try again soon.| | |
|9503|WARNING|The search engine has timed out. Please try again.| | |
|9504|ERROR|Cannot open \{1\}|\{1\} cannot be opened due to errors in the following dependencies 1 - Type of the object Table/Answer/Pinboard etc.| |
|9505|WARNING|We’re still indexing this data, try again soon| | |
|9506|ERROR|Object is not present in the system|\{1\} is not present in the system 1 - Type of the object Table/Answer/Pinboard etc.| |
|9507|ERROR|ThoughtSpot is unreachable. Please try again soon| | |
|Common Errors \(10000 - 10099\)|
|10000|ERROR|A system error has occurred|Uh oh. We're not sure what happened. Please contact your administrator.| |
|10001|ERROR|Connection failed|The metadata store is not reachable.|Please contact your administrator|
|10002|ERROR|The input is invalid|Input from the client to the server is invalid.|Please contact your administrator|
|10003|ERROR|Unfortunately, you can't do that|You are not authorized to perform \{1\}. \# \{1\} – action user is not authorized for|Please request access from your administrator|
|10004|ERROR|The user could not be authorized|User \{0\} is not authorized to perform \{1\}. \# \{0\} – name of the user \# \{1\} – action user is not authorized for|Please request access from your administrator|
|10005|ERROR|The base object is missing|An underlying object referenced by this object is missing in store.|Please contact your administrator|
|10006|ERROR|The connection to Zookeeper has failed|Zookeeper is not reachable.|Please contact your administrator|
|10007|ERROR|There's invalid parameter\(s\)|Invalid parameter values: \{0\}.|Please contact your administrator|
|10008|ERROR|The user cannot be found|User \{0\} not found in store. \# \{0\} – name of the user|Please contact your administrator|
|10009|ERROR|Cannot add group|This group already belongs to the group you are trying to add it to.| |
|Falcon Errors \(10600 - 10699\)|
|10603|ERROR|Falcon query cancelled| | |
|Data Errors \(11000 - 11099\)|
|11001|ERROR|Invalid row| | |
|11002|ERROR|Invalid table/query resultset| | |
|11003|ERROR|Invalid column identifier| | |
|11004|ERROR|Invalid visualization identifier| | |
|11005|ERROR|No data|Query execution resulted in no data.| |
|11006|ERROR|Query execution failed|Error in query execution to Falcon.| |
|11007|ERROR|Answer data generation failed|Error in Answer data generation for Sage input.| |
|11008|ERROR|Data export failed| | |
|11009|ERROR|Data generation failed|Error in data generation in Callosum.| |
|Report Generation Errors \(12000 - 13000\)|
|12700|ERROR|Error while exporting data file.| | |
|12701|ERROR|Invalid input.|The definition of the job is invalid.| |
|12702|ERROR|No author provided.| | |
|12703|ERROR|No pinboard provided.| | |
|12704|ERROR|No recipients provided.| | |
|12705|ERROR|This format is not supported.| | |
|12706|ERROR|No job name provided.| | |
|12707|ERROR|No job description provided.| | |
|12708|ERROR|Pinboard data export error.| | |
|12709|ERROR|Visualization data export error.| | |
|12710|ERROR|User data unavailable.| | |
|12711|ERROR|Configuration information unavailable.| | |
|12712|ERROR|There are too many recipients.|The max number of recipients is 1000.| |
|12713|ERROR|Attachment size limit exceeded.| | |
|12714|ERROR|Recipient domain is not whitelisted.| | |
|More Metadata Errors \(13000 - 13099\)|
|13001|ERROR|Schema creation failed|Error creating database schema.| |
|13002|ERROR|Views creation failed|Error creating view.| |
|13003|ERROR|The object cannot be found in store|Object with Id: \{0\} of type: \{1\} not found. \# \{0\} – identity of the object \# \{1\} – type of object| |
|13004|ERROR|The object is in an invalid state|Oject with Id: \{0\} of type: \{1\} in invalid state. \# \{0\} – identity of the object \# \{1\} – type of object| |
|13005|ERROR|Object already exists|Object with Id: \{0\} of type: \{1\} already exists. \# \{0\} – identity of the object \# \{1\} – type of object| |
|13006|ERROR|Invalid object type|Invalid type: \{0\} provided. \# \{1\} – type of object| |
|13007|ERROR|Invalid Sage question|Insufficient or invalid input from Sage: \{0\}. \# \{0\} – the invalid input| |
|13008|ERROR|Invalid Sage question|Input from from Sage – missing columns of type: \{0\}. \# \{0\} – column type| |
|13009|ERROR|Invalid Sage question|Invalid input from Sage – invalid expression: \{0\}. \# \{0\} – the invalid expression| |
|13010|ERROR|Sending logical metadata to Sage failed|Sending logical metadata to Sage failed due to: \{0\}. \# \{0\} – reason for failure| |
|13011|ERROR|Answer generation failed|Answer generation failed due to: \{0\}. \# \{0\} – reason for failure| |
|13012|ERROR|Worksheet generation failed|Worksheet generation failed due to: \{0\}. \# \{0\} – reason for failure| |
|13013|ERROR|Service provider unavailable|Service provider unavailable: \{0\}. \# \{0\} – provider details| |
|13015|ERROR|Physical model not loaded| | |
|13016|ERROR|Invalid physical schema proto|Inconsistency in physical schema from Falcon: \{0\}. \# \{0\} – error details| |
|13017|ERROR|Invalid duplicate columns|Duplicate columns: \{0\}. \# \{0\} – List of duplicate column identities| |
|13018|ERROR|Cyclic relationship|Detected cycles: \{0\}. \# \{0\} – cycle details| |
|13019|WARNING|Older physical schema version received|Schema update for older version: \{0\} received and ignored. \# \{0\} – received version number| |
|13020|ERROR|Invalid relationship|Attempted to create invalid relationship: \{0\}. \# \{0\} – relationship details| |
|13022|ERROR|Invalid filter values: \{values\}| | |
|13023|ERROR|Creating relationship failed.| | |
|13024|ERROR|Deleting schema failed.| | |
|13025|ERROR|Expression validation failed.| | |
|13026|INFO|Load schedule successfully disabled.| | |
|13027|ERROR|Load schedule could not be disabled.| | |
|13028|ERROR|Objects fetched from the connection are invalid for editing datasource.| |To proceed with editing the datasource, please edit the connection below to fetch valid source objects.|
|13029|INFO|Successfully edited data source connection.| | |
|13030|ERROR|Connection test failed.| |Please verify connection attributes.|
|Loading Errors \(30000 - 30099\)|
|30000|ERROR|Table is not ready \(data loading in progress\).| | |
|Timely Errors \(60000 - 64999\)|
|60000|ERROR|Failed to initialize.| | |

**Parent topic:** [About error codes](../error_code/about_error_codes.html)
