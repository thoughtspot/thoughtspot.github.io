## Ports for intracluster network operations

Static ports are used for communication between services within the cluster. ThoughtSpot recommends that you open all ports within a cluster. This not required, but it will ensure that cluster communication works properly if additional ports are used in a future software release.

If your organization does not allow you to open all ports, make sure you open the required intracluster ports listed in the following table. In addition, a number of ports are dynamically assigned to services, which change between runs. The dynamic ports come from the range of ports that are dynamically allocated by Linux (20K+).

|Port|Protocol|Service Name|Direction|Source|Dest.|Description|
|----|--------|------------|---------|------|-----|-----------|
|80|TCP|nginx|inbound|All nodes|All nodes|Primary app HTTP port (nginx)|
|443|TCP|Secure nginx|inbound|All nodes|All nodes|Primary app HTTPS port (nginx)|
|2100|RPC|Oreo RPC port|bidirectional|All nodes|All nodes|Node daemon RPC|
|2101|HTTP|Oreo HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Node daemon HTTP|
|2181|TCP|Zookeeper servers listen on this RPC port for client connections|bidirectional|All nodes|All nodes|Zookeeper servers listen on this RPC port for client connections|
|3181|TCP|Zookeeper servers listen on this RPC port for client connections|bidirectional|All nodes|All nodes|Zookeeper servers listen on this RPC port for client connections|
|4181|TCP|Zookeeper servers listen on this RPC port for client connections|bidirectional|All nodes|All nodes|Zookeeper servers listen on this RPC port for client connections|
|2200|RPC|Orion master RPC port|bidirectional|All nodes|All nodes|Internal communication with the cluster manager|
|2201|HTTP|Orion master HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the cluster manager|
|2205|TCP|Cluster update service TCP port|bidirectional|All nodes|All nodes|Internal communication with the cluster manager|
|2210|RPC|Cluster stats service RPC port|bidirectional|All nodes|All nodes|Internal communication with the stats collector|
|2211|HTTP|Cluster stats service HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the stats collector|
|2230|RPC|Callosum stats collector RPC port|bidirectional|All nodes|All nodes|Internal communication with the BI stats collector|
|2231|HTTP|Callosum stats collector HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the BI stats collector|
|2240|RPC|Alert manager|bidirectional|All nodes|All nodes|Port where alerting service receives alert events|
|2241|RPC|Alert manager|bidirectional|All nodes|All nodes|Port where alerting service receives alert events|
|2888|RPC|Ports used by Zookeeper servers for communication between themselves|bidirectional|All nodes|All nodes|Ports used by Zookeeper servers for communication between themselves|
|3181|RPC|Ports used by Zookeeper servers for communication between themselves|bidirectional|All nodes|All nodes|Ports used by Zookeeper servers for communication between themselves|
|3888|RPC|Ports used by Zookeeper servers for communication between themselves|bidirectional|All nodes|All nodes|Ports used by Zookeeper servers for communication between themselves|
|4000|RPC|Falcon worker RPC port|bidirectional|All nodes|All nodes|Port used by data cache for communication between themselves|
|4001|HTTP|Falcon worker HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the data cache|
|4002|HTTP|Falcon worker HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the data cache|
|4003|RPC|Falcon worker RPC port|bidirectional|All nodes|All nodes|Port used by data cache for communication between themselves|
|4004|RPC|Falcon worker RPC port|bidirectional|All nodes|All nodes|Port used by data cache for communication between themselves|
|4021|RPC|Sage metadata service port (exported by Tomcat), Callosum services like meta-data services, medata-dependency service, scheduling service, session-less service, spotiq service|bidirectional|All nodes|All nodes|Port where search service contacts metadata service for metadata|
|4181|RPC|Ports used by Zookeeper servers for communication between themselves|bidirectional|All nodes|All nodes|Ports used by Zookeeper servers for communication between themselves|
|4201|HTTP|Sage auto complete server HTTP interface port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the search service|
|4231|HTTP|Sage index server HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the search service|
|4232|RPC|Sage index server metadata subscriber port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4233|RPC|Sage index server RPC port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4241|HTTP|Sage auto complete server HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Port used to debug the search service|
|4242|RPC|Sage auto complete server RPC port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4243|RPC|Sage auto complete server metadata subscriber port|bidirectional|All nodes|All nodes|Port used for search internal communication|
|4244|RPC|Sage auto complete server metadata subscriber port|bidirectional|All nodes|All nodes|Port used for search internal communication|
|4245|RPC|Sage auto complete server metadata subscriber port|bidirectional|All nodes|All nodes|Port used for search internal communication|
<!--|4249|TCP|Ports used by Enlite/SearchIQ|bidirectional|All nodes|All nodes|Port used for SearchIQ internal communication|-->
|4251|RPC|Sage master RPC port|bidirectional|All nodes|All nodes|Port used for search service internal communication|
|4405|RPC|Diamond (graphite) port|bidirectional|All nodes|All nodes|Port used for communication with monitoring service|
|4406|RPC|Diamond (graphite) port|bidirectional|All nodes|All nodes|Port used for communication with monitoring service|
|4500|RPC|Trace vault service RPC port|bidirectional|All nodes|All nodes|Trace collection for ThoughtSpot services|
|4501|HTTP|Trace vault service HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Debug trace collection|
|4851|RPC|Graphite manager RPC port|bidirectional|All nodes|All nodes|Communication with graphite manager|
|4852|HTTP|Graphite manager HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Debug graphite manager|
|4853|RPC|Elastic search stack (ELK) manager RPC port|bidirectional|All nodes|All nodes|Communication with log search service|
|4853|HTTP|Elastic search stack (ELK) manager HTTP port|bidirectional|Admin IP addresses and all nodes|All nodes|Debug log search service|
|9200|RPC|Elastic search (ELK)|bidirectional|All nodes|All nodes|Communication with log search service|
|5021|RPC|Callosum services like meta-data services, medata-dependency service, scheduling service, session-less service, spotiq service|bidirectional|All nodes|All nodes|Port where search service contacts metadata service for metadata|
|5432|Postgres|Postgres database server port|bidirectional|All nodes|All nodes|Communication with Postgres database|
|6021|RPC|Callosum services like meta-data services, medata-dependency service, scheduling service, session-less service, spotiq service|bidirectional|All nodes|All nodes|Port where search service contacts metadata service for metadata|
|7021|RPC|Callosum services like meta-data services, medata-dependency service, scheduling service, session-less service, spotiq service|bidirectional|All nodes|All nodes|Port where search service contacts metadata service for metadata|
|8020|RPC|HDFS namenode server RPC port|bidirectional|All nodes|All nodes|Distributed file system (DFS) communication with clients|
|8021|RPC|Callosum services like meta-data services, medata-dependency service, scheduling service, session-less service, spotiq service|bidirectional|All nodes|All nodes|Port where search service contacts metadata service for metadata|
|8080|HTTP|Tomcat|bidirectional|All nodes|All nodes|BI engine communication with clients|
|8081|HTTP|Callosum/Tomcat status|bidirectional|All nodes|All nodes|BI engine communication with clients|
|8787|HTTP|Periscope (UI) service HTTP port|bidirectional|All nodes|All nodes|Administration UI back end|
|8888|HTTP|HTTP proxy server (tinyproxy)|bidirectional|All nodes|All nodes|Reverse SSH tunnel|
|11211|Mem-cached |Memcached server port|bidirectional|All nodes|All nodes|BI engine cache|
|12345|ODBC|Simba server port|bidirectional|All nodes|All nodes|Port used for ETL (extract, transform, load)|
|8480|HTTP|HDFS journalnode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS metadata|
|8485|HTTP|HDFS journalnode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS metadata|
|50070|HTTP|HDFS namenode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS metadata|
|50090|HTTP|HDFS secondary namenode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS metadata|
|50075|HTTP|HDFS datanode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS data|
|50010|HTTP|HDFS datanode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS data|
|50020|HTTP|HDFS datanode server HTTP port|bidirectional|All nodes|All nodes|Debug DFS data|
|7000|TCP|Cassandra KV store database|bidirectional|All nodes|All nodes|Debug DFS data|
|7001|TCP|Cassandra|bidirectional|All nodes|All nodes|Debug DFS data|
|9042|HTTP|Munshi server impression service, Cassandra|bidirectional|All nodes|All nodes|Debug DFS data|
|9160|TCP|Cassandra|bidirectional|All nodes|All nodes|Debug DFS data|
|4010|HTTP|Falcon moderator|bidirectional|All nodes|All nodes|Debug DFS data|
|4011|HTTP|Falcon moderator|bidirectional|All nodes|All nodes|Debug DFS data|
|20123 - 32768|TCP (dynamic)|Dynamic port in this range used for various services and anciliary services like atlas, caffeine, callhome, callosum, falcon, monitoring, munshi server, nlp, object_search, postgres, sage UBR, spotiq snapshot, timely|All nodes|Services|
|5270|TCP|Cluster monitoring service (ELK)|bidirectional|All nodes|All nodes|Services|
|5271|TCP|Cluster monitoring service (ELK)|bidirectional|All nodes|All nodes|Services|
|5601|TCP|Kibana UI (ELK)|bidirectional|All nodes|All nodes|Services|
|6311|TCP|R service|bidirectional|All nodes|All nodes|Services|
|8008|TCP|Video recorder|bidirectional|All nodes|All nodes|Services|
|9090|TCP|Timely|bidirectional|All nodes|All nodes|Services|
||ICMPv4|Used for health check of cluster nodes|bidirectional|All nodes|All nodes|Services|
