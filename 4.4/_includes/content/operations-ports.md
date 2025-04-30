
The following ports need to be opened up to requests from your user population. There are two main categories: operations and debugging.

|Port|Protocol|Service Name|Direction|Source|Destination|Description|
|----|--------|------------|---------|------|-----------|-----------|
|22|SSH|SSH|bidirectional|Administrators IP addresses|All nodes|Secure shell access. Also used for scp (secure copy).|
|443|HTTPS|HTTPS|bidirectional|All users IP addresses|All nodes|Secure HTTP.|
|12345|TCP|Simba|bidirectional|Administrators IP addresses|All nodes|Port used by ODBC and JDBC drivers when connecting to ThoughtSpot.|
