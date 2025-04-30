
This reference lists the potential ports to open when setting up your security group.

### Required ports for intracluster operation

Internally, ThoughtSpot uses static ports for communication between services in the cluster. Do not close these ports from intraluster network communications. In addition, a number of ports are dynamically assigned to services, which change between runs. The dynamic ports come from the range of Linux dynamically allocated ports (20K+).

|Port|Protocol|Service Name|Direction|Source|Dest.|Description|
|----|--------|------------|---------|------|-----|-----------|
|80|TCP|nginx|inbound|All nodes|All nodes|Primary app HTTP port (nginx)|
|443|TCP|Secure nginx|inbound|All nodes|All nodes|Primary app HTTPS port (nginx)|
|2100|RPC|Oreo RPC port|bidirectional|All nodes|All nodes|Node daemon RPC|
|2101|HTTP|Oreo HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Node daemon HTTP|
|2181|TCP|Zookeeper servers listen on this RPC port for client connections|bidirectional|All nodes|All nodes|Zookeeper servers listen on this RPC port for client connections|
|2200|RPC|Orion master RPC port|bidirectional|All nodes|All nodes|Internal communication with the cluster manager|
|2201|HTTP|Orion master HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the cluster manager|
|2210|RPC|Cluster stats service RPC port|bidirectional|All nodes|All nodes|Internal communication with the stats collector|
|2211|HTTP|Cluster stats service HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the stats collector|
|2230|RPC|Callosum stats collector RPC port|bidirectional|All nodes|All nodes|Internal communication with the BI stats collector|
|2231|HTTP|Callosum stats collector HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the BI stats collector|
|2240|RPC|Alert manager|bidirectional|All nodes|All nodes|Port where alerting service receives alert events|
|2888|RPC|Ports used by Zookeeper servers for communication between themselves|bidirectional|All nodes|All nodes|Ports used by Zookeeper servers for communication between themselves|
|3888|RPC|Ports used by Zookeeper servers for communication between themselves|bidirectional|All nodes|All nodes|Ports used by Zookeeper servers for communication between themselves|
|4000|RPC|Falcon worker RPC port|bidirectional|All nodes|All nodes|Port used by data cache for communication between themselves|
|4001|HTTP|Falcon worker HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the data cache|
|4021|RPC|Sage metadata service port (exported by Tomcat)|bidirectional|Admin IP addresses and all nodes|All nodes|Port where search service contacts metadata service for metadata|
|4201|HTTP|Sage auto complete server HTTP interface port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the search service|
|4231|HTTP|Sage index server HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the search service|
|4232|RPC|Sage index server metadata subscriber port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4233|RPC|Sage index server RPC port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4241|HTTP|Sage auto complete server HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the search service|
|4242|RPC|Sage auto complete server RPC port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4243|RPC|Sage auto complete server metadata subscriber port|bidirectional|All nodes|All nodes|Port used for search internal communication|
|4251|RPC|Sage master RPC port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4405|RPC|Diamond (graphite) port|bidirectional|All nodes|All nodes|Port used for communication with monitoring service|
|4500|RPC|Trace vault service RPC port|bidirectional|All nodes|All nodes|Trace collection for ThoughtSpot services|
|4501|HTTP|Trace vault service HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Debug trace collection|
|4851|RPC|Graphite manager RPC port|bidirectional|All nodes|All nodes|Communication with graphite manager|
|4852|HTTP|Graphite manager HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Debug graphite manager|
|4853|RPC|Elastic search stack (ELK) manager RPC port|bidirectional|All nodes|All nodes|Communication with log search service|
|4853|HTTP|Elastic search stack (ELK) manager HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Debug log search service|
|5432|Postgres|Postgres database server port|bidirectional|All nodes|All nodes|Communication with Postgres database|
|8020|RPC|HDFS namenode server RPC port|bidirectional|All nodes|All nodes|Distributed file system (DFS) communication with clients|
|8080|HTTP|Tomcat|bidirectional|All nodes|All nodes|BI engine communication with clients|
|8787|HTTP|Periscope (UI) service HTTP port|bidirectional|All nodes|All nodes|Administration UI back end|
|8888|HTTP|HTTP proxy server (tinyproxy)|bidirectional|All nodes|All nodes|Reverse SSH tunnel|
|11211|Mem-cached |Memcached server port|bidirectional|All nodes|All nodes|BI engine cache|
|12345|ODBC|Simba server port|bidirectional|All nodes|All nodes|Port used for ETL (extract, transform, load)|
|50070|HTTP|HDFS namenode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS metadata|
|50075|HTTP|HDFS datanode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS data|

### Required ports for inbound and outbound cluster access

ThoughtSpot uses static ports for inbound and outbound access to a cluster.

|Port|Protocol|Service Name|Direction|Source|Dest.|Description|
|----|--------|------------|---------|------|-----|-----------|
|22|SCP|SSH|bidirectional|ThoughtSpot Support|All nodes|Secure shell access.|
|80|HTTP|HTTP|bidirectional|ThoughtSpot Support|All nodes|Hypertext Transfer Protocol for website traffic.|
|443|HTTPS|HTTPS|bidirectional|ThoughtSpot Support|All nodes|Secure HTTP.|
|12345|TCP|Simba|bidirectional|ThoughtSpot Support|All nodes|Port used by ODBC and JDBC drivers when connecting to ThoughtSpot.|

|Port|Protocol|Service Name|Direction|Source|Destination|Description|
|----|--------|------------|---------|------|----------------|-----------|
|443|HTTPS|HTTPS|outbound|All nodes|208.83.110.20   |For transferring files to thoughtspot.egnyte.com  (IP address 208.83.110.20).|
|443|HTTPS|HTTPS|outbound|All nodes|https://api.mix  panel.com|For transferring product usage data to mixpanel cloud.|
|25 or 587|SMTP|SMTP or Secure SMTP|outbound|All nodes and SMTP relay (provided by customer)|All nodes|Allow outbound access for the IP address of whichever email relay server is in use. This is for sending alerts to ThoughtSpot Support.|
|389 or 636|TCP|LDAP or LDAPS|outbound|All nodes and LDAP server (provided by customer)|All nodes|Allow outbound access for the IP address of the LDAP server in use.|
|8086|HTTPS|HTTPS|outbound|All nodes|https://pinheads-1da40166.influxcloud.net|For transferring monitoring data to InfluxCloud. (Given address will resolve to point to AWS instances).|

### Required port for outbound connectivity to partner services
In releases 4.5.1 and later, port 8086 is not required for transferring data to InfluxCloud. Open the following port instead:  

|Port|Protocol|Service Name|Direction|Source|Destination|Description|  
|----|--------|------------|---------|------|----------------|-----------|  
|443|HTTPS|HTTPS|outbound|All nodes|https://je8b47jfif.execute-api.us-east-2.amazonaws.com/monitoring|For transferring monitoring data to InfluxCloud. (Given address will resolve to point to AWS instances).|

### Callhome

Callhome stats are uploaded to AWS. The bucket configured by default is `ts-callhome-prod` in region `us-west-1`.

Uploads to AWS are done on one of the following endpoints:
1. `s3.us-west-1.amazonaws.com`
2. `s3-us-west-1.amazonaws.com`
3. `s3.dualstack.us-west-1.amazonaws.com`

All uploads are done over “https” and default port 443 is used.  (Example: https://s3-us-west-1.amazonaws.com/%7BBucket%7D/%7BKey+%7D).  

#### More information

<a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region" target="_blank">AWS endpoints<a/>

### Required ports for IPMI (Intelligent Platform Management Interface)

ThoughtSpot uses static ports for out-of-band IPMI communications between the cluster and ThoughtSpot Support.

|Port|Protocol|Service Name|Direction|Source|Dest.|Description|
|----|--------|------------|---------|------|-----|-----------|
|80|HTTP|HTTP|bidirectional|ThoughtSpot Support|All nodes|Hypertext Transfer Protocol for website traffic.|
