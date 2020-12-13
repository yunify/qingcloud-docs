---
title: "DescribeAppVersionAttachments"
description: 
draft: false
---



获取应用版本的配置文件。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| content_keys.n | String | 应用配置文件的名称，即 `config.json, cluster.json.mustache, locale/en.json, locale/zh-cn.json`，默认值为`config.json` | No |
| attachment_ids.n | String | 应用的配置文件ID，可以根据 _DescribeAppVersions_ 获得 | Yes |
| version_id | String | 应用版本的ID | Yes |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| total_count | Integer | 应用版本附件的总数量 |
| attachment_set | Array | 附件的详细信息，具体信息见下列 _Reponse Item_ |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| category | String | 状态，active，suspended |
| attachment_id | String | 应用版本描述 |
| resource_id | String | 应用版本的ID |
| attachment_content | String | 附件的具体信息，即开发者上传的应用配置文件 |
| resource_type | String | 资源类型 |

**Example**

下列返回结果为应用[ZooKeeper](https://appcenter.qingcloud.com/apps/app-tg3lbp0a/ZooKeeper%20on%20QingCloud)

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeAppVersionAttachments
&attachment_ids.1=ca-nx8rerlv
&content_keys.1=config.json
&content_keys.2=cluster.json.mustache
&content_keys.3=locale%2Fzh-cn.json
&content_keys.4=locale%2Fen.json
&version_id=appv-70gegwmp
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"DescribeAppVersionAttachmentsResponse",
  "total_count":1,
  "attachment_set":[
    {
      "category":"resource_kit",
      "attachment_id":"ca-nx8rerlv",
      "sub_category":"",
      "resource_id":"appv-70gegwmp",
      "filename":"zk-3.4.9.tar.gz",
      "filesize":2390,
      "owner":"usr-XqlPq3qV",
      "attachment_type":"archive",
      "resource_type":"app_version",
      "attachment_content":{
        "locale/en.json":"{\n    \"Name\": \"Name\",\n    \"Description\": \"Description\",\n    \"The name of the ZooKeeper service\": \"The name of the ZooKeeper service\",\n    \"The description of the ZooKeeper service\": \"The description of the ZooKeeper service\",\n    \"VxNet\": \"VxNet\",\n    \"Choose a vxnet to join\": \"Choose a vxnet to join\",\n    \"CPU\": \"CPU\",\n    \"CPUs of each node\": \"CPUs of each node\",\n    \"Memory\": \"Memory\",\n    \"Memory of each node (in MiB)\": \"Memory of each node (in MiB)\",\n\t\"Volume Size\": \"Volume Size\",\n\t\"Instance Class\": \"Instance Class\",\n    \"The volume size for each node\": \"The volume size for each node\",\n\t\"ZooKeeper Node\": \"ZooKeeper Node\",\n\t\"Node Count\": \"Node Count\",\n    \"count\": \"count\",\n\t\"znode_count\": \"count\",\n    \"Number of nodes for the cluster to create\": \"Number of nodes for the cluster to create\",\n    \"instance class\": \"instance class\",\n    \"The instance type for the cluster to run, such as high performance, high performance plus\": \"The instance type for the cluster to run, such as high performance, high performance plus\",\n    \"zk_node\": \"zk_node\",\n    \"latency\": \"latency\",\n\t\"throughput\": \"throughput\",\n    \"connections\": \"connections\",\n    \"znode\": \"znode\",\n    \"mode\": \"mode (L:Leader,F:Flower,S:Standalone)\",\n\t\"min\": \"min\",\n\t\"avg\": \"avg\",\n\t\"max\": \"max\",\n\t\"received\": \"received\",\n\t\"sent\": \"sent\",\n\t\"active\": \"active\",\n\t\"outstanding\": \"outstanding\"\n}\n\n",
        "cluster.json.mustache":"{\n    \"name\": {{cluster.name}},\n    \"description\": {{cluster.description}},\n    \"vxnet\": {{cluster.vxnet}},\n    \"nodes\": [{\n        \"container\": {\n            \"type\": \"kvm\",\n            \"zone\": \"pek3a\",\n            \"image\": \"img-svm7yple\"\n        },\n        \"count\": {{cluster.zk_node.count}},\n        \"cpu\": {{cluster.zk_node.cpu}},\n        \"memory\": {{cluster.zk_node.memory}},\n\t\t\"instance_class\": {{cluster.zk_node.instance_class}},\n        \"volume\": {\n            \"size\": {{cluster.zk_node.volume_size}}\n        },\n        \"server_id_upper_bound\": 255,\n        \"services\": {\n            \"start\": {\n                \"cmd\": \"/opt/zookeeper/bin/zkServer.sh start;/opt/zookeeper/bin/rest.sh start\"\n            },\n            \"stop\": {\n                \"cmd\": \"/opt/zookeeper/bin/rest.sh stop;/opt/zookeeper/bin/zkServer.sh stop\"\n            }\n        },\n\t\t\"advanced_actions\": [\"change_vxnet\", \"scale_horizontal\"],\n\t\t\"vertical_scaling_policy\": \"sequential\"\n    }],\n\t\"endpoints\": {\n\t\t\"client\": {\n\t\t\t\"port\":\t2181,\n\t\t\t\"protocol\":\t\"tcp\"\n\t\t},\n\t\t\"rest\": {\n\t\t\t\"port\":\t9998,\n\t\t\t\"protocol\":\t\"tcp\"\n\t\t}\n\t},\n\t\"health_check\":\t{\n\t\t\"enable\": true,\n\t\t\"interval_sec\": 60,\n\t\t\"timeout_sec\": 10,\n\t\t\"action_timeout_sec\": 30,\n\t\t\"healthy_threshold\": 2,\n\t\t\"unhealthy_threshold\": 2,\n\t\t\"check_cmd\": \"echo srvr | nc 127.0.0.1 2181\",\n\t\t\"action_cmd\": \"/opt/zookeeper/bin/restart-server.sh\"\n\t},\n\t\"monitor\": {\n        \"enable\": true,\n        \"cmd\": \"/opt/zookeeper/bin/get-monitor.sh\",\n        \"items\": {\n            \"mode\": {\n                \"unit\": \"\",\n                \"value_type\": \"str\",\n                \"statistics_type\": \"latest\",\n                \"enums\": [\"L\", \"F\", \"S\"]\n            },\n\t\t\t\"min\": {\n                \"unit\": \"ms\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"min\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            },\n\t\t\t\"avg\": {\n                \"unit\": \"ms\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"avg\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            },\n\t\t\t\"max\": {\n                \"unit\": \"ms\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"max\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            },\n\t\t\t\"received\": {\n                \"unit\": \"count\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"latest\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            },\n\t\t\t\"sent\": {\n                \"unit\": \"count\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"latest\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            },\n\t\t\t\"active\": {\n                \"unit\": \"count\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"latest\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            },\n\t\t\t\"outstanding\": {\n                \"unit\": \"count\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"latest\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            },\n\t\t\t\"znode\": {\n                \"unit\": \"znode_count\",\n                \"value_type\": \"int\",\n                \"statistics_type\": \"latest\",\n\t\t\t\t\"scale_factor_when_display\": 1\n            }\n        },\n\t\t\"groups\": {\n\t\t\t\"latency\":\t[\"min\", \"avg\", \"max\"],\n\t\t\t\"throughput\": [\"received\", \"sent\"],\n            \"connections\": [\"active\", \"outstanding\"]\n\t\t},\n        \"display\": [\"mode\", \"latency\", \"throughput\", \"connections\", \"znode\"],\n        \"alarm\": [\"avg\"]\n    }\n}\n",
        "locale/zh-cn.json":"{\n    \"Name\": \"\u540d\u79f0\",\n    \"Description\": \"\u63cf\u8ff0\",\n    \"The name of the ZooKeeper service\": \"ZooKeeper \u670d\u52a1\u540d\u79f0\",\n    \"The description of the ZooKeeper service\": \"ZooKeeper \u670d\u52a1\u63cf\u8ff0\",\n    \"VxNet\": \"\u79c1\u6709\u7f51\u7edc\",\n    \"Choose a vxnet to join\": \"\u9009\u62e9\u8981\u52a0\u5165\u7684\u79c1\u6709\u7f51\u7edc\",\n    \"CPU\": \"CPU\",\n    \"CPUs of each node\": \"\u6bcf\u4e2a\u8282\u70b9\u7684 CPU \u6570\u91cf\",\n    \"Memory\": \"\u5185\u5b58\",\n    \"Memory of each node (in MiB)\": \"\u6bcf\u4e2a\u8282\u70b9\u7684\u5185\u5b58\u6570\u91cf\uff08\u5355\u4f4d\uff1aMiB\uff09\",\n\t\"Instance Class\": \"\u4e3b\u673a\u7c7b\u578b\",\n\t\"ZooKeeper Node\": \"ZooKeeper \u8282\u70b9\",\n\t\"Node Count\": \"\u8282\u70b9\u6570\u91cf\",\n    \"count\": \"\u6b21\",\n\t\"znode_count\": \"\u4e2a\",\n    \"Number of nodes for the cluster to create\": \"\u8981\u521b\u5efa\u7684\u8282\u70b9\u6570\u91cf\",\n\t\"Volume Size\": \"\u5b58\u50a8\u5bb9\u91cf\",\n    \"The volume size for each node\": \"\u6bcf\u4e2a\u8282\u70b9\u7684\u5b58\u50a8\u5bb9\u91cf\",\n    \"instance class\": \"\u5b9e\u4f8b\u7c7b\u578b\",\n    \"The instance type for the cluster to run, such as high performance, high performance plus\": \"\u8282\u70b9\u5b9e\u4f8b\u7c7b\u578b\uff0c\u6bd4\u5982\u6027\u80fd\u578b\u4e0e\u8d85\u9ad8\u6027\u80fd\u578b\u3002\",\n    \"zk_node\": \"ZooKeeper \u8282\u70b9\",\n\t\"latency\": \"\u54cd\u5e94\u5ef6\u8fdf\u65f6\u95f4\",\n\t\"throughput\": \"\u541e\u5410\u91cf\",\n    \"connections\": \"\u8fde\u63a5\u6570\",\n    \"znode\": \"\u8282\u70b9\u6570\u91cf\",\n    \"mode\": \"\u89d2\u8272 (L:Leader,F:Flower,S:Standalone)\",\n\t\"min\": \"\u6700\u5c0f\u54cd\u5e94\u5ef6\u8fdf\u65f6\u95f4\",\n\t\"avg\": \"\u5e73\u5747\u54cd\u5e94\u5ef6\u8fdf\u65f6\u95f4\",\n\t\"max\": \"\u6700\u5927\u54cd\u5e94\u5ef6\u8fdf\u65f6\u95f4\",\n\t\"received\": \"\u8bf7\u6c42\u63a5\u6536\u6570\",\n\t\"sent\": \"\u53d1\u9001\u54cd\u5e94\u6570\",\n\t\"active\": \"\u6d3b\u8dc3\u8fde\u63a5\u6570\",\n\t\"outstanding\": \"\u5f85\u5904\u7406\u8fde\u63a5\u6570\",\n    \"client\": \"\u5ba2\u6237\u7aef\"\n}\n\n",
        "config.json":"{\n    \"type\": \"array\",\n    \"properties\": [{\n        \"key\": \"cluster\",\n        \"description\": \"ZooKeeper release 3.4.9 cluster properties\",\n        \"type\": \"array\",\n        \"properties\": [{\n            \"key\": \"name\",\n            \"label\": \"Name\",\n            \"description\": \"The name of the ZooKeeper service\",\n            \"type\": \"string\",\n            \"default\": \"ZooKeeper\",\n            \"required\": \"no\"\n        }, {\n            \"key\": \"description\",\n            \"label\": \"Description\",\n            \"description\": \"The description of the ZooKeeper service\",\n            \"type\": \"string\",\n            \"default\": \"\",\n            \"required\": \"no\"\n        }, {\n            \"key\": \"vxnet\",\n            \"label\": \"VxNet\",\n            \"description\": \"Choose a vxnet to join\",\n            \"type\": \"string\",\n            \"default\": \"\",\n            \"required\": \"yes\"\n        }, {\n            \"key\": \"zk_node\",\n            \"label\": \"ZooKeeper Node\",\n            \"description\": \"role-based node properties\",\n            \"type\": \"array\",\n            \"properties\": [{\n                \"key\": \"cpu\",\n                \"label\": \"CPU\",\n                \"description\": \"CPUs of each node\",\n                \"type\": \"integer\",\n                \"default\": 1,\n                \"range\": [\n                    1,\n                    2,\n                    4,\n                    8\n                ],\n                \"required\": \"yes\"\n            }, {\n                \"key\": \"memory\",\n                \"label\": \"Memory\",\n                \"description\": \"memory of each node (in MiB)\",\n                \"type\": \"integer\",\n                \"default\": 2048,\n                \"range\": [\n                    1024,\n                    2048,\n                    4096,\n                    8192,\n                    16384,\n                    32768\n                ],\n                \"required\": \"yes\"\n            }, {\n                \"key\": \"instance_class\",\n                \"label\": \"Instance Class\",\n                \"description\": \"The instance type for the cluster to run\uff0csuch as high performance\uff0chigh performance plus\",\n                \"type\": \"integer\",\n                \"default\": 0,\n                \"range\": [0, 1],\n                \"required\": \"yes\"\n            }, {\n                \"key\": \"count\",\n                \"label\": \"Node Count\",\n                \"description\": \"Number of nodes for the cluster to create\",\n                \"type\": \"integer\",\n                \"default\": 3,\n                \"range\": [\n                    1,\n                    3,\n                    5,\n                    7,\n                    9\n                ],\n                \"required\": \"yes\"\n            }, {\n\t\t\t\t\"key\": \"volume_size\",\n\t\t\t\t\"label\": \"Volume Size\",\n\t\t\t\t\"description\": \"The volume size for each node\",\n\t\t\t\t\"type\":\t\"integer\",\n\t\t\t\t\"default\": 10,\n\t\t\t\t\"required\": \"yes\"\n\t\t\t}]\n        }]\n    }]\n}\n"
      }
    }
  ],
  "ret_code":0
}

```


