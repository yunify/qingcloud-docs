---
title: "DeployAppVersion"
description: 
draft: false
---



部署指定应用版本的集群

当你部署应用时，集群会先进入pending状态，创建完成后，集群变成active状态。你可以使用[_DescribeClusters_](../describe_clusters/)检查集群状态。

此API需要你传递一个JSON格式的`conf`参数，对于不同的应用，此参数格式会有不同，请结合[_DescribeAppVersions_](../describe_app_versions/) 来确定`conf`参数的格式。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| version_id | String | 将要部署应用的版本ID | Yes |
| conf | String | 集群的配置信息(转义并去除空格的JSON格式) | Yes |
| debug | Integer | 集群是否为开发测试集群。此项针对开发者，如果开发者完成应用上传，部署开发的应用指定debug值可以跳过服务费计费 | No |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| node_ids | Array | 集群的节点ID |
| app_id | String | 应用ID |
| app_version | String | 应用的版本ID |
| node_count | Integer | 集群节点的数量 |
| cluster_name | String | 集群的名称 |
| cluster_id | String | 集群ID |
| vxnet_id | String | 集群所在的网络ID |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

以应用[Tomcat Cluster](https://appcenter.qingcloud.com/apps/app-jwq1fzqo/Tomcat%20Cluster%20on%20QingCloud)为例，请使用[DescribeAppVersions](../describe_app_versions/)来查看应用的`config.json`和`cluster.json.mustache`配置文件，以此来确定conf的具体值。通过[DescribeAppVersions](../describe_app_versions/)获得的 **Tomcat Cluster** 应用的 `config.json` 配置文件如下。我们需要注意每项的范围(`range`值)，确保我们传递的值都在`config.json`定义的`range`中；还需要注意其中 `required` 属性为 `true` 的项，这些是我们必须向后端传递的值

```json
{
    "type": "array",
    "properties": [
        {
            "key": "cluster",
            "description": "Tomcat cluster with Session Replication",
            "type": "array",
            "properties": [
                {
                    "key": "name",
                    "label": "Name",
                    "description": "The name of the Tomcat cluster service",
                    "type": "string",
                    "default": "Tomcat Cluster",
                    "required": "no"
                },
                {
                    "key": "description",
                    "label": "Description",
                    "description": "The description of the Tomcat cluster service",
                    "type": "string",
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "vxnet",
                    "label": "vxnet",
                    "description": "Choose a vxnet to join",
                    "type": "string",
                    "default": "",
                    "required": "yes"
                },
                {
                    "key": "redis_service",
                    "label": "Redis",
                    "description": "Choose a Redis to use and input database number in service properties section below, leave empty if you choose not to use it",
                    "type": "service",
                    "tag": [
                        "Redis",
                        "redis"
                    ],
                    "limits": {
                        "app-zydumbxo": [
                            "appv-q1uwklp7"
                        ]
                    },
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "mysql_service",
                    "label": "MySql",
                    "description": "Choose a MySql to use and related MySql infomation in service properties section below, leave empty if you choose not to use it",
                    "type": "service",
                    "tag": [
                        "MySql",
                        "mysql"
                    ],
                    "limits": {
                        "app-00r26u27": [
                            "appv-le9cpyc6"
                        ]
                    },
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "tomcat_nodes",
                    "label": "Tomcat Nodes",
                    "description": "Tomcat node properties",
                    "type": "array",
                    "properties": [
                        {
                            "key": "loadbalancer",
                            "label": "loadbalancer",
                            "description": "Choose a loadbalancer service (When you create loadbalancer, you need to select the Internet type. Loadbalancer listener need to enable Session Sticky. Listener protocol should be http)",
                            "type": "loadbalancer",
                            "port": 8080,
                            "default": [],
                            "required": "yes"
                        },
                        {
                            "key": "cpu",
                            "label": "CPU",
                            "description": "CPUs of each node",
                            "type": "integer",
                            "default": 1,
                            "range": [
                                1,
                                2,
                                4,
                                8
                            ],
                            "required": "yes"
                        },
                        {
                            "key": "memory",
                            "label": "Memory",
                            "description": "memory of each node",
                            "type": "integer",
                            "default": 2048,
                            "range": [
                                2048,
                                4096,
                                8192
                            ],
                            "required": "yes"
                        },
                        {
                            "key": "instance_class",
                            "label": "Instance Class",
                            "description": "The instance type for the cluster to run, such as high performance, high performance plus",
                            "type": "integer",
                            "default": 0,
                            "range": [
                                0,
                                1
                            ],
                            "required": "yes"
                        },
                        {
                            "key": "count",
                            "label": "Node Count",
                            "description": "Number of nodes for the cluster to create",
                            "type": "integer",
                            "default": 2,
                            "range": [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9
                            ],
                            "required": "yes"
                        },
                        {
                            "key": "volume_size",
                            "label": "Volume Size",
                            "description": "The volume size for each node",
                            "type": "integer",
                            "default": 10,
                            "required": "no"
                        }
                    ]
                },
                {
                    "key": "log_node",
                    "label": "Log Server Node",
                    "description": "Log server to collect all log files from all Tomcat nodes",
                    "type": "array",
                    "properties": [
                        {
                            "key": "cpu",
                            "label": "CPU",
                            "description": "CPUs of each node",
                            "type": "integer",
                            "default": 1,
                            "range": [
                                1,
                                2,
                                4,
                                8
                            ],
                            "required": "yes"
                        },
                        {
                            "key": "memory",
                            "label": "Memory",
                            "description": "memory of each node",
                            "type": "integer",
                            "default": 2048,
                            "range": [
                                2048,
                                4096,
                                8192
                            ],
                            "required": "yes"
                        },
                        {
                            "key": "instance_class",
                            "label": "Instance Class",
                            "description": "The instance type for the cluster to run, such as high performance, high performance plus",
                            "type": "integer",
                            "default": 0,
                            "range": [
                                0,
                                1
                            ],
                            "required": "yes"
                        },
                        {
                            "key": "volume_size",
                            "label": "Volume Size",
                            "description": "The volume size for this log server",
                            "type": "integer",
                            "default": 10,
                            "required": "no"
                        }
                    ]
                }
            ]
        },
        {
            "key": "env",
            "description": "Tomcat cluster service properties",
            "type": "array",
            "properties": [
                {
                    "key": "tomcat_user",
                    "label": "User name to access Tomcat manager GUI",
                    "description": "User name to access Tomcat manager GUI, avoid to set it as 'tomcat' because it's already predefined with role 'manager_script'",
                    "type": "string",
                    "default": "qingAdmin",
                    "pattern": "^(?!.*?[tT][oO][mM][cC][aA][tT]).*$",
                    "required": "yes"
                },
                {
                    "key": "tomcat_pwd",
                    "label": "Password to access Tomcat manager",
                    "description": "Password to access Tomcat manager GUI and the user 'tomcat' with role 'manager_script', the default password is 'qing0pwd'",
                    "type": "password",
                    "changeable": true,
                    "default": "qing0pwd",
                    "required": "yes"
                },
                {
                    "key": "tomcat_encoding",
                    "label": "Tomcat character encoding",
                    "description": "Tomcat character encoding, this value will be set in javax.servlet.request.encoding and file.encoding when launching Tomcat, also set in URIEncoding in server.xml",
                    "type": "string",
                    "default": "UTF-8",
                    "required": "yes"
                },
                {
                    "key": "tomcat_log_level",
                    "label": "Tomcat logging level",
                    "description": "The logging level of log4j within Tomcat scope, settting 'INFO' as default value",
                    "type": "string",
                    "default": "INFO",
                    "range": [
                        "OFF",
                        "FATAL",
                        "ERROR",
                        "WARN",
                        "INFO",
                        "DEBUG",
                        "ALL"
                    ],
                    "required": "yes"
                },
                {
                    "key": "tomcat_log_packages",
                    "label": "Tomcat logging packages",
                    "description": "Packages to include in the logging, separated by comma. Tomcat defines loggers by Engine and Host names. For example: log4j.logger.org.apache.catalina.core.ContainerBase.[Catalina].[localhost],log4j.logger.org.apache.catalina.session",
                    "type": "string",
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "threadpool_maxThreads",
                    "label": "The max number of active threads",
                    "description": "The max number of active threads in Tomcat shared thread pool",
                    "type": "string",
                    "default": "200",
                    "required": "yes"
                },
                {
                    "key": "threadpool_minSpareThreads",
                    "label": "The minimum number of kept alive threads",
                    "description": "The minimum number of threads always kept alive in Tomcat shared thread pool",
                    "type": "string",
                    "default": "25",
                    "required": "yes"
                },
                {
                    "key": "threadpool_maxIdleTime",
                    "label": "The number of milliseconds before an idle thread shutsdown",
                    "description": "The number of milliseconds before an idle thread shutsdown, unless the number of active threads are less or equal to minSpareThreads",
                    "type": "string",
                    "default": "60000",
                    "required": "yes"
                },
                {
                    "key": "java_opts",
                    "label": "Java runtime properties",
                    "description": "Java runtime properties when running Tomcat, leave empty if you accept our default JVM heap size setting(1/4 memory as xms, and 1/2 memory as xmx). Note: our default setting will not take effect if you input any value in this area, the validaton of JAVA_OPTS should be handled by you ahead of time, otherwise Tomcat server may fail to start",
                    "type": "string",
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "war_source",
                    "label": "How to get WAR file",
                    "description": "Choose a way to upload WAR to Tomcat server, the default way is using Tomcat manager UI or command, the other option is QingStor. Note: Tomcat manager could only deploy WAR to single node, we monitor that deployment and copy the deployed WAR file to watched folder of Tomcat FarmWarDeployer, which will distribute this file to other nodes",
                    "type": "string",
                    "changeable": true,
                    "default": "tomcat_manager",
                    "range": [
                        "tomcat_manager",
                        "qingstor"
                    ],
                    "required": "yes"
                },
                {
                    "key": "redis_db_num",
                    "label": "Redis database number",
                    "description": "Redis Database Number, leave empty if you choose not to use Redis database",
                    "type": "string",
                    "default": "0",
                    "required": "no"
                },
                {
                    "key": "access_key_id",
                    "label": "access_key_id",
                    "description": "access_key_id to access QingStor service for web application(WAR) deployment, leave empty if you chooose to use Tomcat Manager",
                    "type": "string",
                    "changeable": true,
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "secret_access_key",
                    "label": "secret_access_key",
                    "description": "secret_access_key to access QingStor service for web application(WAR) deployment, leave empty if you chooose to use Tomcat Manager",
                    "type": "password",
                    "changeable": true,
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "zone",
                    "label": "zone",
                    "description": "Zone of bucket for web application(WAR) deployment, leave empty if you chooose to use Tomcat Manager",
                    "type": "string",
                    "changeable": true,
                    "default": "pek3a",
                    "range": [
                        "pek3a",
                        "sh1a"
                    ],
                    "required": "no"
                },
                {
                    "key": "bucket",
                    "label": "bucket",
                    "description": "Bucket name for web application(WAR) deployment, leave empty if you chooose to use Tomcat Manager",
                    "type": "string",
                    "changeable": true,
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "war_name",
                    "label": "war name",
                    "description": "The web application(WAR) file Name, leave empty if you chooose to use Tomcat Manager",
                    "type": "string",
                    "default": "",
                    "required": "no"
                },
                {
                    "key": "mysql_db_name",
                    "label": "MySql database name",
                    "description": "MySql Database Name, leave empty if you choose not to use MySql database",
                    "type": "string",
                    "default": "mysql",
                    "required": "no"
                },
                {
                    "key": "jdbc_dsname",
                    "label": "Datasoure name of Tomcat JDBC connection pool",
                    "description": "Datasoure name of Tomcat JDBC connection pool to connect MySql database",
                    "type": "string",
                    "default": "TestDB",
                    "required": "no"
                },
                {
                    "key": "jdbc_maxActive",
                    "label": "The maximum number of active database connections",
                    "description": "The maximum number of active database connections that can be allocated from this pool at the same time",
                    "type": "string",
                    "default": "100",
                    "required": "no"
                },
                {
                    "key": "jdbc_maxIdle",
                    "label": "The maximum number of kept database connections",
                    "description": "The maximum number of database connections that should be kept in the pool at all times",
                    "type": "string",
                    "default": "30",
                    "required": "no"
                },
                {
                    "key": "jdbc_maxWait",
                    "label": "The maximum number of milliseconds before a database connection timeout",
                    "description": "The maximum number of milliseconds that the pool will wait (when there are no available connections) for a database connection to be returned before throwing an exception",
                    "type": "string",
                    "default": "30000",
                    "required": "no"
                }
            ]
        }
    ]
}
```

所以，我们需要提供的`conf`的格式为

```
{
    "cluster": {
        "name": "Tomcat_Cluster",
        "description": "",
        "tomcat_nodes": {
            "loadbalancer": [
                {
                    "listener": "lbl-wdplf9gh",
                    "port": 8080,
                    "policy": ""
                }
            ],
            "cpu": 1,
            "memory": 2048,
            "instance_class": 0,
            "count": 2,
            "volume_size": 10
        },
        "log_node": {
            "cpu": 1,
            "memory": 2048,
            "instance_class": 0,
            "volume_size": 10
        },
        "vxnet": "vxnet-iuy3lnd",
        "global_uuid": "93242219542648944"
    },
    "version": "appv-gva21mw0",
    "env": {
        "tomcat_user": "qingAdmin",
        "tomcat_pwd": "qing0pwd",
        "tomcat_encoding": "UTF-8",
        "tomcat_log_level": "INFO",
        "threadpool_maxThreads": "200",
        "threadpool_minSpareThreads": "25",
        "threadpool_maxIdleTime": "60000",
        "war_source": "tomcat_manager",
        "tomcat_log_packages": "",
        "java_opts": "",
        "redis_db_num": "0",
        "access_key_id": "",
        "zone": "pek3a",
        "bucket": "",
        "war_name": "",
        "mysql_db_name": "mysql",
        "jdbc_dsname": "TestDB",
        "jdbc_maxActive": "100",
        "jdbc_maxIdle": "30",
        "jdbc_maxWait": "30000"
    }
}
```

> 需要注意环境变量env内，accesskey类型的数据，在conf中需要将值转换为key为access_key_id的字典。例如env内有如下内容：
```
{
  "key": "access_key",
  "label": "access_key_id",
  "description": "access key ID",
  "type": "accesskey",
  "required": "yes"
}
```
> 则`conf`的`env`内，该数据的格式应该如下：
```
{
  "access_key":{
    "access_key_id":""
  }
}
```

> 在发送API请求前，我们需要将`conf` **去除空格换行后进行 urlencode**，否则空白字符会后端设别的参数值会不完整，最终请求如下

_Example Request_:

```
https://api.qingcloud.com/iaas/?
action=DeployAppVersion
conf=%7B%22cluster%22%3A%7B%22name%22%3A%22Tomcat_Cluster%22%2C%22description%22%3A%22%22%2C%22tomcat_nodes%22%3A%7B%22loadbalancer%22%3A%5B%7B%22listener%22%3A%22lbl-wdplf9gh%22%2C%22port%22%3A8080%2C%22policy%22%3A%22%22%7D%5D%2C%22cpu%22%3A1%2C%22memory%22%3A2048%2C%22instance_class%22%3A0%2C%22count%22%3A2%2C%22volume_size%22%3A10%7D%2C%22log_node%22%3A%7B%22cpu%22%3A1%2C%22memory%22%3A2048%2C%22instance_class%22%3A0%2C%22volume_size%22%3A10%7D%2C%22vxnet%22%3A%22vxnet-iuy3lnd%22%2C%22global_uuid%22%3A%2293242219542648944%22%7D%2C%22version%22%3A%22appv-gva21mw0%22%2C%22env%22%3A%7B%22tomcat_user%22%3A%22qingAdmin%22%2C%22tomcat_pwd%22%3A%22qing0pwd%22%2C%22tomcat_encoding%22%3A%22UTF-8%22%2C%22tomcat_log_level%22%3A%22INFO%22%2C%22threadpool_maxThreads%22%3A%22200%22%2C%22threadpool_minSpareThreads%22%3A%2225%22%2C%22threadpool_maxIdleTime%22%3A%2260000%22%2C%22war_source%22%3A%22tomcat_manager%22%2C%22tomcat_log_packages%22%3A%22%22%2C%22java_opts%22%3A%22%22%2C%22redis_db_num%22%3A%220%22%2C%22access_key_id%22%3A%22%22%2C%22zone%22%3A%22pek3a%22%2C%22bucket%22%3A%22%22%2C%22war_name%22%3A%22%22%2C%22mysql_db_name%22%3A%22mysql%22%2C%22jdbc_dsname%22%3A%22TestDB%22%2C%22jdbc_maxActive%22%3A%22100%22%2C%22jdbc_maxIdle%22%3A%2230%22%2C%22jdbc_maxWait%22%3A%2230000%22%7D%7D
&version_id=appv-gva21mw0
&zone=pek3a
&COMMOM_PARAMS
```

_Example Response_:

```json
{
  "vxnet_id":"vxnet-iuy3lnd",
  "ret_code":0,
  "node_ids":[
    "cln-n9ujbr2z",
    "cln-pgnwwgos",
    "cln-w2h3rs7y"
  ],
  "app_id":"app-jwq1fzqo",
  "cluster_name":"Tomcat_Cluster",
  "cluster_id":"cl-bgb7my01",
  "action":"CreateClusterResponse",
  "node_count":3,
  "app_version":"appv-gva21mw0",
  "job_id":"j-q7hez3rqxke"
}
```


